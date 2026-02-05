import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { ImageUploader } from '@/components/admin/ImageUploader';
import TipTapEditor from '@/components/admin/TipTapEditor';
import { useArticles, ArticleFormData } from '@/hooks/useArticles';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Loader2, Save, Eye } from 'lucide-react';
import { toast } from 'sonner';

const categories = ['Guide', 'Bonus Fiscali', 'Risparmio', 'Normative', 'Guide Locali'];

const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

const AdminArticleForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;

  // Set noindex meta tag for admin pages
  useEffect(() => {
    document.title = isEditing ? 'Modifica Articolo | I Profili Admin' : 'Nuovo Articolo | I Profili Admin';
    
    let meta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'robots');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'noindex, nofollow');
    
    return () => {
      meta?.remove();
    };
  }, [isEditing]);

  const {
    fetchArticleById,
    createArticle,
    updateArticle,
    uploadImage,
    isCreating,
    isUpdating,
  } = useArticles();

  const [loading, setLoading] = useState(isEditing);
  const [formData, setFormData] = useState<ArticleFormData>({
    slug: '',
    title: '',
    meta_title: '',
    meta_description: '',
    excerpt: '',
    content: '',
    date: new Date().toLocaleDateString('it-IT', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    }),
    date_iso: new Date().toISOString().split('T')[0],
    category: 'Guide',
    tags: [],
    image_url: '',
    image_alt: '',
    author_name: 'I Profili',
    author_role: 'Team Editoriale',
    reading_time: '5 min',
    related_articles: [],
    published: true,
  });
  const [tagsInput, setTagsInput] = useState('');

  // Load article data if editing
  useEffect(() => {
    const loadArticle = async () => {
      if (!isEditing || !id) return;
      
      setLoading(true);
      try {
        const article = await fetchArticleById(id);
        if (article) {
          setFormData({
            slug: article.slug,
            title: article.title,
            meta_title: article.meta_title || '',
            meta_description: article.meta_description || '',
            excerpt: article.excerpt || '',
            content: article.content,
            date: article.date,
            date_iso: article.date_iso,
            category: article.category,
            tags: article.tags || [],
            image_url: article.image_url || '',
            image_alt: article.image_alt || '',
            author_name: article.author_name || 'I Profili',
            author_role: article.author_role || 'Team Editoriale',
            reading_time: article.reading_time || '5 min',
            related_articles: article.related_articles || [],
            published: article.published ?? true,
          });
          setTagsInput((article.tags || []).join(', '));
        } else {
          toast.error('Articolo non trovato');
          navigate('/admin/articles');
        }
      } catch (error) {
        console.error('Error loading article:', error);
        toast.error('Errore nel caricamento dell\'articolo');
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [id, isEditing, fetchArticleById, navigate]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Auto-generate slug from title
    if (name === 'title' && !isEditing) {
      setFormData((prev) => ({ ...prev, slug: generateSlug(value) }));
    }
  };

  const handleTagsChange = (value: string) => {
    setTagsInput(value);
    const tags = value
      .split(',')
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);
    setFormData((prev) => ({ ...prev, tags }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.title || !formData.slug || !formData.content || !formData.category) {
      toast.error('Compila tutti i campi obbligatori');
      return;
    }

    try {
      if (isEditing && id) {
        await updateArticle({ id, article: formData });
        toast.success('Articolo aggiornato con successo');
      } else {
        await createArticle(formData);
        toast.success('Articolo creato con successo');
      }
      navigate('/admin/articles');
    } catch (err: any) {
      console.error('Save error:', err);
      if (err.message?.includes('duplicate key')) {
        toast.error('Esiste già un articolo con questo slug');
      } else {
        toast.error('Errore durante il salvataggio');
      }
    }
  };

  const isSaving = isCreating || isUpdating;

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => navigate('/admin/articles')}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-2xl font-bold text-foreground">
              {isEditing ? 'Modifica Articolo' : 'Nuovo Articolo'}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Switch
                id="published"
                checked={formData.published}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({ ...prev, published: checked }))
                }
              />
              <Label htmlFor="published" className="text-sm">
                {formData.published ? 'Pubblicato' : 'Bozza'}
              </Label>
            </div>
            <Button type="submit" disabled={isSaving} className="gap-2">
              {isSaving ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Salvataggio...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Salva
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main content - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title & Slug */}
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Titolo *</Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Titolo dell'articolo"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="slug">Slug (URL) *</Label>
                  <div className="flex gap-2">
                    <div className="flex-1 relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                        /articoli/
                      </span>
                      <Input
                        id="slug"
                        name="slug"
                        value={formData.slug}
                        onChange={handleChange}
                        className="pl-[90px]"
                        placeholder="slug-articolo"
                        required
                      />
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        if (formData.slug) {
                          window.open(`/articoli/${formData.slug}`, '_blank');
                        }
                      }}
                      disabled={!formData.slug}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Content */}
            <Card>
              <CardHeader>
                <CardTitle>Contenuto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="excerpt">Excerpt (anteprima)</Label>
                  <Textarea
                    id="excerpt"
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleChange}
                    placeholder="Breve descrizione dell'articolo..."
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content">Contenuto *</Label>
                  <TipTapEditor
                    content={formData.content}
                    onChange={(html) =>
                      setFormData((prev) => ({ ...prev, content: html }))
                    }
                    placeholder="Inizia a scrivere il tuo articolo..."
                  />
                </div>
              </CardContent>
            </Card>

            {/* SEO */}
            <Card>
              <CardHeader>
                <CardTitle>SEO</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="meta_title">Meta Title</Label>
                  <Input
                    id="meta_title"
                    name="meta_title"
                    value={formData.meta_title}
                    onChange={handleChange}
                    placeholder="Titolo per i motori di ricerca (max 60 caratteri)"
                    maxLength={60}
                  />
                  <p className="text-xs text-muted-foreground">
                    {formData.meta_title?.length || 0}/60 caratteri
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="meta_description">Meta Description</Label>
                  <Textarea
                    id="meta_description"
                    name="meta_description"
                    value={formData.meta_description}
                    onChange={handleChange}
                    placeholder="Descrizione per i motori di ricerca (max 160 caratteri)"
                    rows={2}
                    maxLength={160}
                  />
                  <p className="text-xs text-muted-foreground">
                    {formData.meta_description?.length || 0}/160 caratteri
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - 1 column */}
          <div className="space-y-6">
            {/* Image */}
            <Card>
              <CardHeader>
                <CardTitle>Immagine</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ImageUploader
                  currentImage={formData.image_url}
                  onImageUploaded={(url) =>
                    setFormData((prev) => ({ ...prev, image_url: url }))
                  }
                  onImageRemoved={() =>
                    setFormData((prev) => ({ ...prev, image_url: '' }))
                  }
                  uploadFn={uploadImage}
                />
                <div className="space-y-2">
                  <Label htmlFor="image_alt">Alt Text</Label>
                  <Input
                    id="image_alt"
                    name="image_alt"
                    value={formData.image_alt}
                    onChange={handleChange}
                    placeholder="Descrizione dell'immagine"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Category & Tags */}
            <Card>
              <CardHeader>
                <CardTitle>Classificazione</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Categoria *</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, category: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tags">Tags</Label>
                  <Input
                    id="tags"
                    value={tagsInput}
                    onChange={(e) => handleTagsChange(e.target.value)}
                    placeholder="tag1, tag2, tag3"
                  />
                  <p className="text-xs text-muted-foreground">
                    Separati da virgola
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reading_time">Tempo di lettura</Label>
                  <Input
                    id="reading_time"
                    name="reading_time"
                    value={formData.reading_time}
                    onChange={handleChange}
                    placeholder="5 min"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Author */}
            <Card>
              <CardHeader>
                <CardTitle>Autore</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="author_name">Nome</Label>
                  <Input
                    id="author_name"
                    name="author_name"
                    value={formData.author_name}
                    onChange={handleChange}
                    placeholder="Nome autore"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="author_role">Ruolo</Label>
                  <Input
                    id="author_role"
                    name="author_role"
                    value={formData.author_role}
                    onChange={handleChange}
                    placeholder="Ruolo autore"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Date */}
            <Card>
              <CardHeader>
                <CardTitle>Data</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Data visualizzata</Label>
                  <Input
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    placeholder="1 Gennaio 2026"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date_iso">Data ISO</Label>
                  <Input
                    id="date_iso"
                    name="date_iso"
                    type="date"
                    value={formData.date_iso}
                    onChange={handleChange}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </AdminLayout>
  );
};

export default AdminArticleForm;
