import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { useArticles, ArticleDB } from '@/hooks/useArticles';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, 
  Search, 
  Pencil, 
  Trash2, 
  Loader2,
  Eye,
  EyeOff
} from 'lucide-react';
import { toast } from 'sonner';

const categories = ['Tutti', 'Guide', 'Bonus Fiscali', 'Risparmio', 'Normative', 'Guide Locali'];

const AdminArticles = () => {
  const navigate = useNavigate();
  const { articles, isLoading, deleteArticle, isDeleting } = useArticles();
  
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('Tutti');
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState<ArticleDB | null>(null);

  // Filter articles
  const filteredArticles = articles?.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(search.toLowerCase()) ||
                         article.slug.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === 'Tutti' || article.category === categoryFilter;
    return matchesSearch && matchesCategory;
  }) || [];

  const handleDelete = async () => {
    if (!articleToDelete) return;

    try {
      await deleteArticle(articleToDelete.id);
      toast.success('Articolo eliminato con successo');
      setDeleteDialogOpen(false);
      setArticleToDelete(null);
    } catch (err) {
      console.error('Delete error:', err);
      toast.error('Errore durante l\'eliminazione');
    }
  };

  const openDeleteDialog = (article: ArticleDB) => {
    setArticleToDelete(article);
    setDeleteDialogOpen(true);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Gestione Articoli</h1>
            <p className="text-muted-foreground">
              {articles?.length || 0} articoli totali
            </p>
          </div>
          <Button onClick={() => navigate('/admin/articles/new')} className="gap-2">
            <Plus className="w-4 h-4" />
            Nuovo Articolo
          </Button>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Cerca articoli..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Categoria" />
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

        {/* Table */}
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : filteredArticles.length === 0 ? (
          <div className="text-center py-12 bg-background rounded-lg border border-border">
            <p className="text-muted-foreground">
              {articles?.length === 0
                ? 'Nessun articolo ancora. Crea il primo!'
                : 'Nessun articolo corrisponde ai filtri.'}
            </p>
          </div>
        ) : (
          <div className="bg-background rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">Img</TableHead>
                  <TableHead>Titolo</TableHead>
                  <TableHead className="hidden md:table-cell">Categoria</TableHead>
                  <TableHead className="hidden md:table-cell">Data</TableHead>
                  <TableHead className="hidden sm:table-cell">Stato</TableHead>
                  <TableHead className="text-right">Azioni</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredArticles.map((article) => (
                  <TableRow key={article.id}>
                    <TableCell>
                      {article.image_url ? (
                        <img
                          src={article.image_url}
                          alt={article.image_alt || ''}
                          className="w-12 h-12 object-cover rounded"
                        />
                      ) : (
                        <div className="w-12 h-12 bg-muted rounded flex items-center justify-center">
                          <span className="text-xs text-muted-foreground">—</span>
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium text-foreground line-clamp-1">
                          {article.title}
                        </p>
                        <p className="text-sm text-muted-foreground line-clamp-1">
                          /{article.slug}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <Badge variant="secondary">{article.category}</Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-muted-foreground">
                      {article.date}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {article.published ? (
                        <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                          <Eye className="w-3 h-3 mr-1" />
                          Pubblicato
                        </Badge>
                      ) : (
                        <Badge variant="secondary">
                          <EyeOff className="w-3 h-3 mr-1" />
                          Bozza
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => navigate(`/admin/articles/edit/${article.id}`)}
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => openDeleteDialog(article)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Elimina Articolo</AlertDialogTitle>
            <AlertDialogDescription>
              Sei sicuro di voler eliminare "{articleToDelete?.title}"?
              <br />
              Questa azione non può essere annullata.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annulla</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              disabled={isDeleting}
            >
              {isDeleting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Eliminazione...
                </>
              ) : (
                'Elimina'
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </AdminLayout>
  );
};

export default AdminArticles;
