

# Piano: Area Admin per Gestione Articoli

## Panoramica

Creeremo un sistema completo di Content Management (CMS) per gestire gli articoli del blog, con:
- Autenticazione sicura via Supabase
- Database per articoli persistenti
- Interfaccia admin per CRUD completo
- Upload e gestione immagini

---

## Architettura Sistema

```text
+------------------+     +------------------+     +------------------+
|   Pagine Admin   |     |   Supabase Auth  |     |  Supabase DB     |
+------------------+     +------------------+     +------------------+
|                  |     |                  |     |                  |
|  /admin/login    |---->|  Email/Password  |     |  articles table  |
|  /admin          |     |  Session check   |---->|  admin_users     |
|  /admin/articles |     |                  |     |  storage bucket  |
|  /admin/new      |     +------------------+     +------------------+
|  /admin/edit/:id |
+------------------+
```

---

## 1. SETUP LOVABLE CLOUD + SUPABASE

### Database Tables

**Tabella `articles`**

| Colonna | Tipo | Note |
|---------|------|------|
| id | uuid | Primary key |
| slug | text | URL-friendly, unique |
| title | text | Titolo articolo |
| meta_title | text | SEO title |
| meta_description | text | SEO description |
| excerpt | text | Anteprima breve |
| content | text | Contenuto HTML |
| date | text | Data visualizzata |
| date_iso | date | Data ISO per ordinamento |
| category | text | Categoria |
| tags | text[] | Array di tag |
| image_url | text | URL immagine principale |
| image_alt | text | Alt text immagine |
| author_name | text | Nome autore |
| author_role | text | Ruolo autore |
| reading_time | text | Tempo lettura |
| related_articles | text[] | Array slug correlati |
| created_at | timestamptz | Auto |
| updated_at | timestamptz | Auto |

**Tabella `user_roles`** (sicurezza)

| Colonna | Tipo | Note |
|---------|------|------|
| id | uuid | Primary key |
| user_id | uuid | FK a auth.users |
| role | app_role | enum: 'admin', 'editor' |

### Storage Bucket

- Nome: `article-images`
- Pubblico: Si (per visualizzazione)
- RLS: Solo admin possono caricare/eliminare

---

## 2. PAGINE ADMIN

### Struttura Route

```text
/admin/login     -> Login page
/admin           -> Dashboard (redirect a /admin/articles)
/admin/articles  -> Lista articoli con azioni
/admin/new       -> Form nuovo articolo
/admin/edit/:id  -> Form modifica articolo
```

### Componenti da Creare

**Pagine:**
- `src/pages/admin/AdminLogin.tsx` - Form login
- `src/pages/admin/AdminDashboard.tsx` - Dashboard principale
- `src/pages/admin/AdminArticles.tsx` - Lista articoli
- `src/pages/admin/AdminArticleForm.tsx` - Form crea/modifica

**Componenti:**
- `src/components/admin/AdminLayout.tsx` - Layout con sidebar
- `src/components/admin/AdminSidebar.tsx` - Navigazione admin
- `src/components/admin/ArticleEditor.tsx` - Editor contenuto
- `src/components/admin/ImageUploader.tsx` - Upload immagini
- `src/components/admin/ProtectedRoute.tsx` - Protezione route

**Hooks:**
- `src/hooks/useAuth.ts` - Gestione autenticazione
- `src/hooks/useArticles.ts` - CRUD articoli

---

## 3. INTERFACCIA LISTA ARTICOLI

```text
+--------------------------------------------------------+
|  📝 Gestione Articoli                    [+ Nuovo]     |
+--------------------------------------------------------+
| Cerca...                         Categoria: [Tutti ▼]  |
+--------------------------------------------------------+
| ☐ | Immagine | Titolo              | Cat.   | Azioni   |
+--------------------------------------------------------+
| ☐ | [img]    | Infissi Milano 2026 | Guide  | ✏️ 🗑️   |
| ☐ | [img]    | Bonus 50% Guida     | Bonus  | ✏️ 🗑️   |
| ☐ | [img]    | Serramenti Lomb...  | Guide  | ✏️ 🗑️   |
+--------------------------------------------------------+
| Selezionati: 0          [Elimina selezionati]          |
+--------------------------------------------------------+
```

---

## 4. FORM ARTICOLO

```text
+--------------------------------------------------------+
|  ← Torna alla lista           [Salva bozza] [Pubblica] |
+--------------------------------------------------------+
|                                                         |
|  Titolo *                                               |
|  [___________________________________________________] |
|                                                         |
|  Slug (URL) *                     [Auto-genera]        |
|  [infissi-milano-guida-2026_____________________]      |
|                                                         |
|  +------------------+  +-----------------------------+  |
|  | Immagine         |  | Meta Title                  |  |
|  | [Carica/Cambia]  |  | [______________________]   |  |
|  | [Anteprima img]  |  |                            |  |
|  |                  |  | Meta Description           |  |
|  | Alt text:        |  | [______________________]   |  |
|  | [______________] |  |                            |  |
|  +------------------+  +-----------------------------+  |
|                                                         |
|  Categoria *            Tempo lettura                   |
|  [Guide        ▼]       [8 min__________]              |
|                                                         |
|  Tags (separati da virgola)                            |
|  [infissi, milano, bonus 50%________________________]  |
|                                                         |
|  Excerpt (anteprima)                                   |
|  [___________________________________________________] |
|  [___________________________________________________] |
|                                                         |
|  Contenuto *                                           |
|  +---------------------------------------------------+ |
|  | B I U | H2 | H3 | • | 1. | Link | Img | Tabella  | |
|  +---------------------------------------------------+ |
|  |                                                   | |
|  | Editor di testo ricco per il contenuto           | |
|  | dell'articolo con formattazione HTML...          | |
|  |                                                   | |
|  +---------------------------------------------------+ |
|                                                         |
|  Articoli correlati                                    |
|  [Seleziona articoli...                          ▼]   |
|                                                         |
|  Autore                                                |
|  Nome: [Marco Bianchi___]  Ruolo: [Consulente Tecnico] |
|                                                         |
+--------------------------------------------------------+
```

---

## 5. MIGRAZIONE DATI ESISTENTI

Creeremo uno script per migrare i 12 articoli esistenti dal file `articles.ts` al database Supabase:

1. Legge tutti gli articoli da `articles.ts`
2. Carica le immagini su Supabase Storage
3. Inserisce i record nel database
4. Aggiorna il frontend per leggere dal database

---

## 6. AGGIORNAMENTO FRONTEND

### Modifica lettura articoli

**Prima (da file statico):**
```typescript
import { articles } from '@/data/articles';
const article = articles.find(a => a.slug === slug);
```

**Dopo (da Supabase):**
```typescript
const { data: article } = await supabase
  .from('articles')
  .select('*')
  .eq('slug', slug)
  .single();
```

### File da modificare:
- `src/pages/ArticoliPage.tsx` - Lista articoli
- `src/pages/ArticleDetailPage.tsx` - Dettaglio articolo
- `src/components/articles/ArticleCard.tsx` - Card preview
- `src/data/articles.ts` - Manteniamo come fallback

---

## 7. SICUREZZA

### Row Level Security (RLS)

```sql
-- Solo admin possono modificare articoli
CREATE POLICY "Admins can manage articles"
ON articles FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

-- Tutti possono leggere articoli pubblicati
CREATE POLICY "Anyone can read articles"
ON articles FOR SELECT
USING (true);
```

### Protezione Route Admin

```typescript
// ProtectedRoute.tsx
const ProtectedRoute = ({ children }) => {
  const { user, isAdmin, loading } = useAuth();
  
  if (loading) return <LoadingSpinner />;
  if (!user || !isAdmin) return <Navigate to="/admin/login" />;
  
  return children;
};
```

---

## 8. FILE DA CREARE

| File | Descrizione |
|------|-------------|
| `src/pages/admin/AdminLogin.tsx` | Pagina login |
| `src/pages/admin/AdminArticles.tsx` | Lista articoli |
| `src/pages/admin/AdminArticleForm.tsx` | Form crea/modifica |
| `src/components/admin/AdminLayout.tsx` | Layout admin |
| `src/components/admin/AdminSidebar.tsx` | Sidebar navigazione |
| `src/components/admin/ImageUploader.tsx` | Upload immagini |
| `src/components/admin/ProtectedRoute.tsx` | Protezione route |
| `src/hooks/useAuth.ts` | Hook autenticazione |
| `src/hooks/useArticles.ts` | Hook CRUD articoli |
| `src/integrations/supabase/` | Client Supabase |

## 9. FILE DA MODIFICARE

| File | Modifica |
|------|----------|
| `src/App.tsx` | Aggiungere route admin |
| `src/pages/ArticoliPage.tsx` | Leggere da Supabase |
| `src/pages/ArticleDetailPage.tsx` | Leggere da Supabase |

---

## 10. STEP IMPLEMENTAZIONE

1. **Attivare Lovable Cloud** - Database + Auth + Storage
2. **Creare tabelle** - articles, user_roles
3. **Creare bucket storage** - article-images
4. **Setup autenticazione** - Email/password
5. **Creare pagine admin** - Login, lista, form
6. **Migrare articoli esistenti** - Da file a database
7. **Aggiornare frontend** - Leggere da database

---

## 11. FUNZIONALITA COMPLETE

| Funzione | Descrizione |
|----------|-------------|
| Login admin | Email + password sicuro |
| Lista articoli | Tabella con ricerca e filtri |
| Crea articolo | Form completo con validazione |
| Modifica articolo | Pre-popolato con dati esistenti |
| Elimina articolo | Con conferma |
| Upload immagini | Drag & drop + preview |
| Editor ricco | Formattazione HTML base |
| Auto-slug | Genera slug da titolo |
| Anteprima | Vedi articolo prima di pubblicare |

