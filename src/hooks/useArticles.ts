import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export interface ArticleDB {
  id: string;
  slug: string;
  title: string;
  meta_title: string | null;
  meta_description: string | null;
  excerpt: string | null;
  content: string;
  date: string;
  date_iso: string;
  category: string;
  tags: string[] | null;
  image_url: string | null;
  image_alt: string | null;
  author_name: string | null;
  author_role: string | null;
  reading_time: string | null;
  related_articles: string[] | null;
  published: boolean | null;
  created_at: string;
  updated_at: string;
}

export interface ArticleFormData {
  slug: string;
  title: string;
  meta_title?: string;
  meta_description?: string;
  excerpt?: string;
  content: string;
  date: string;
  date_iso: string;
  category: string;
  tags?: string[];
  image_url?: string;
  image_alt?: string;
  author_name?: string;
  author_role?: string;
  reading_time?: string;
  related_articles?: string[];
  published?: boolean;
}

export const useArticles = () => {
  const queryClient = useQueryClient();

  // Fetch all articles (admin view - includes unpublished)
  const {
    data: articles,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['articles-admin'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .order('date_iso', { ascending: false });

      if (error) throw error;
      return data as ArticleDB[];
    },
  });

  // Fetch single article by ID
  const fetchArticleById = async (id: string): Promise<ArticleDB | null> => {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching article:', error);
      return null;
    }
    return data as ArticleDB;
  };

  // Fetch single article by slug (public)
  const fetchArticleBySlug = async (slug: string): Promise<ArticleDB | null> => {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .single();

    if (error) {
      console.error('Error fetching article by slug:', error);
      return null;
    }
    return data as ArticleDB;
  };

  // Create article mutation
  const createMutation = useMutation({
    mutationFn: async (article: ArticleFormData) => {
      const { data, error } = await supabase
        .from('articles')
        .insert([article])
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['articles-admin'] });
    },
  });

  // Update article mutation
  const updateMutation = useMutation({
    mutationFn: async ({ id, article }: { id: string; article: Partial<ArticleFormData> }) => {
      const { data, error } = await supabase
        .from('articles')
        .update(article)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['articles-admin'] });
    },
  });

  // Delete article mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('articles')
        .delete()
        .eq('id', id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['articles-admin'] });
    },
  });

  // Upload image to storage
  const uploadImage = async (file: File): Promise<string | null> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    const filePath = `articles/${fileName}`;

    const { error } = await supabase.storage
      .from('article-images')
      .upload(filePath, file);

    if (error) {
      console.error('Error uploading image:', error);
      return null;
    }

    const { data: { publicUrl } } = supabase.storage
      .from('article-images')
      .getPublicUrl(filePath);

    return publicUrl;
  };

  // Delete image from storage
  const deleteImage = async (imageUrl: string): Promise<boolean> => {
    // Extract path from URL
    const match = imageUrl.match(/article-images\/(.+)$/);
    if (!match) return false;

    const { error } = await supabase.storage
      .from('article-images')
      .remove([match[1]]);

    if (error) {
      console.error('Error deleting image:', error);
      return false;
    }
    return true;
  };

  return {
    articles,
    isLoading,
    error,
    refetch,
    fetchArticleById,
    fetchArticleBySlug,
    createArticle: createMutation.mutateAsync,
    updateArticle: updateMutation.mutateAsync,
    deleteArticle: deleteMutation.mutateAsync,
    isCreating: createMutation.isPending,
    isUpdating: updateMutation.isPending,
    isDeleting: deleteMutation.isPending,
    uploadImage,
    deleteImage,
  };
};

// Hook for public article fetching
export const usePublicArticles = (category?: string) => {
  const {
    data: articles,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['articles-public', category],
    queryFn: async () => {
      let query = supabase
        .from('articles')
        .select('*')
        .eq('published', true)
        .order('date_iso', { ascending: false });

      if (category && category !== 'Tutti') {
        query = query.eq('category', category);
      }

      const { data, error } = await query;

      if (error) throw error;
      return data as ArticleDB[];
    },
  });

  return { articles, isLoading, error };
};

// Hook for single public article by slug
export const usePublicArticle = (slug: string) => {
  const {
    data: article,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['article-public', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .maybeSingle();

      if (error) throw error;
      return data as ArticleDB | null;
    },
    enabled: !!slug,
  });

  return { article, isLoading, error };
};

// Hook for related articles
export const useRelatedArticles = (currentSlug: string, relatedSlugs: string[] | null) => {
  const {
    data: articles,
    isLoading,
  } = useQuery({
    queryKey: ['related-articles', currentSlug, relatedSlugs],
    queryFn: async () => {
      if (!relatedSlugs || relatedSlugs.length === 0) return [];
      
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .in('slug', relatedSlugs)
        .eq('published', true)
        .limit(3);

      if (error) throw error;
      return data as ArticleDB[];
    },
    enabled: !!relatedSlugs && relatedSlugs.length > 0,
  });

  return { articles: articles || [], isLoading };
};
