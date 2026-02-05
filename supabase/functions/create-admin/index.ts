import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: 'Email and password are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Create Supabase admin client
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    );

    // Create the user
    const { data: userData, error: createError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    });

    if (createError) {
      // Check if user already exists
      if (createError.message.includes('already')) {
        // Try to get existing user
        const { data: existingUsers } = await supabaseAdmin.auth.admin.listUsers();
        const existingUser = existingUsers?.users?.find(u => u.email === email);
        
        if (existingUser) {
          // Check if already has admin role
          const { data: existingRole } = await supabaseAdmin
            .from('user_roles')
            .select('*')
            .eq('user_id', existingUser.id)
            .eq('role', 'admin')
            .maybeSingle();

          if (existingRole) {
            return new Response(
              JSON.stringify({ message: 'User already exists with admin role', userId: existingUser.id }),
              { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
          }

          // Add admin role to existing user
          const { error: roleError } = await supabaseAdmin
            .from('user_roles')
            .insert({ user_id: existingUser.id, role: 'admin' });

          if (roleError) {
            return new Response(
              JSON.stringify({ error: 'Failed to add admin role: ' + roleError.message }),
              { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
          }

          return new Response(
            JSON.stringify({ message: 'Admin role added to existing user', userId: existingUser.id }),
            { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
      }

      return new Response(
        JSON.stringify({ error: 'Failed to create user: ' + createError.message }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Add admin role
    const { error: roleError } = await supabaseAdmin
      .from('user_roles')
      .insert({ user_id: userData.user.id, role: 'admin' });

    if (roleError) {
      return new Response(
        JSON.stringify({ error: 'User created but failed to add admin role: ' + roleError.message }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ message: 'Admin user created successfully', userId: userData.user.id }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
