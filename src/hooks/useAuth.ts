import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { User, Session } from '@supabase/supabase-js';

interface AuthState {
  user: User | null;
  session: Session | null;
  isAdmin: boolean;
  loading: boolean;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    session: null,
    isAdmin: false,
    loading: true,
  });

  const checkAdminRole = useCallback(async (userId: string): Promise<boolean> => {
    try {
      const { data, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', userId)
        .eq('role', 'admin')
        .maybeSingle();

      if (error) {
        console.error('Error checking admin role:', error);
        return false;
      }

      return !!data;
    } catch (err) {
      console.error('Error in checkAdminRole:', err);
      return false;
    }
  }, []);

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        const user = session?.user ?? null;
        
        if (user) {
          // Use setTimeout to avoid potential Supabase deadlock
          setTimeout(async () => {
            const isAdmin = await checkAdminRole(user.id);
            setAuthState({
              user,
              session,
              isAdmin,
              loading: false,
            });
          }, 0);
        } else {
          setAuthState({
            user: null,
            session: null,
            isAdmin: false,
            loading: false,
          });
        }
      }
    );

    // THEN check current session
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      const user = session?.user ?? null;
      
      if (user) {
        const isAdmin = await checkAdminRole(user.id);
        setAuthState({
          user,
          session,
          isAdmin,
          loading: false,
        });
      } else {
        setAuthState({
          user: null,
          session: null,
          isAdmin: false,
          loading: false,
        });
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [checkAdminRole]);

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) throw error;
    return data;
  };

  const signUp = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: window.location.origin,
      },
    });
    
    if (error) throw error;
    return data;
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  return {
    user: authState.user,
    session: authState.session,
    isAdmin: authState.isAdmin,
    loading: authState.loading,
    signIn,
    signUp,
    signOut,
  };
};
