

# Piano: Setup Admin, Migrazione Articoli e Editor WYSIWYG

## Panoramica

Implementeremo tre funzionalità principali:
1. Creazione utente admin e migrazione articoli nel database
2. Aggiornamento frontend per leggere dal database
3. Integrazione editor WYSIWYG TipTap

---

## 1. CREAZIONE UTENTE ADMIN

### Credenziali richieste
- **Email:** flo.andriciuc@gmail.com
- **Password:** Iprofili2026!

### Processo
Creeremo l'utente via backend con una funzione che:
1. Registra l'utente nel sistema di autenticazione
2. Assegna automaticamente il ruolo `admin` nella tabella `user_roles`

**Nota Importante:** La password verrà impostata correttamente e l'utente potrà fare login su `/admin/login`.

---

## 2. MIGRAZIONE 12 ARTICOLI

### Articoli da migrare (da articles.ts)

| ID | Titolo | Categoria |
|----|--------|-----------|
| infissi-milano | Infissi a Milano: Guida Completa alla Sostituzione nel 2026 | Guide |
| serramenti-lombardia | I Migliori Serramenti in Lombardia: Come Scegliere nel 2026 | Guide |
| preventivo-infissi | Preventivo Infissi: 10 Voci da Controllare Prima di Firmare | Guide |
| bonus-50-2025 | Bonus Infissi 50% nel 2026: Guida Completa | Bonus Fiscali |
| come-scegliere-infissi | Come Scegliere gli Infissi Giusti per la Tua Casa | Guide |
| prezzi-pvc | Prezzi Infissi PVC 2026: Quanto Costa Realmente | Risparmio |
| direttiva-case-green | Direttiva Case Green 2024: Cosa Cambia per la Tua Casa | Normative |
| errori-sostituzione | 7 Errori Fatali nella Sostituzione Infissi | Guide |
| risparmio-energetico | Quanto Risparmi con Infissi Nuovi? Calcolo Reale | Risparmio |
| costi-sostituzione | Costi Sostituzione Infissi: Guida Completa 2026 | Guide |
| infissi-bergamo | Infissi a Bergamo e Provincia: Guida Locale | Guide Locali |
| pvc-vs-alluminio | PVC vs Alluminio: Confronto Definitivo | Guide |

### Mapping dati
```text
articles.ts          →  Database
─────────────────────────────────────
id                   →  id (nuovo UUID)
slug                 →  slug
title                →  title
metaTitle            →  meta_title
metaDescription      →  meta_description
excerpt              →  excerpt
content              →  content
date                 →  date
dateISO              →  date_iso
category             →  category
tags[]               →  tags[]
image (import)       →  image_url (asset path)
imageAlt             →  image_alt
author.name          →  author_name
author.role          →  author_role
readingTime          →  reading_time
relatedArticles[]    →  related_articles[]
(new)                →  published = true
```

### Immagini
Le immagini sono attualmente importate da `src/assets/`. Le manterremo come URL relativi (es. `/src/assets/home-windows.jpg`) inizialmente, poi potranno essere caricate su storage.

---

## 3. AGGIORNAMENTO FRONTEND

### File da modificare

**ArticoliPage.tsx**
- Rimuovere import da `@/data/articles`
- Usare hook `usePublicArticles()` dal database
- Aggiungere stati di loading/error
- Mappare i dati dal formato DB al formato componente

**ArticleDetailPage.tsx**
- Rimuovere import da `@/data/articles`
- Usare `useQuery` per fetch articolo singolo via slug
- Aggiungere stati di loading/error/not found
- Mappare i dati dal formato DB al formato esistente

### Flusso dati

```text
┌─────────────────┐     ┌──────────────┐     ┌─────────────┐
│ ArticoliPage    │────►│ usePublic    │────►│ Supabase    │
│ ArticleDetail   │     │ Articles()   │     │ Database    │
└─────────────────┘     └──────────────┘     └─────────────┘
                               │
                               ▼
                        ┌──────────────┐
                        │ ArticleDB    │
                        │ interface    │
                        └──────────────┘
```

---

## 4. EDITOR WYSIWYG TIPTAP

### Pacchetti da installare

```
@tiptap/react
@tiptap/pm
@tiptap/starter-kit
@tiptap/extension-link
@tiptap/extension-image
@tiptap/extension-table
@tiptap/extension-table-row
@tiptap/extension-table-cell
@tiptap/extension-table-header
@tiptap/extension-placeholder
```

### Componente TipTapEditor

Creeremo `src/components/admin/TipTapEditor.tsx` con:

**Funzionalità:**
- Formattazione testo: Bold, Italic, Strikethrough
- Titoli: H2, H3 (con ID automatico per table of contents)
- Liste: Bullet list, Ordered list
- Link: Inserimento e modifica
- Tabelle: Creazione e gestione
- Immagini: Inserimento URL
- Blockquote: Citazioni
- Separatore orizzontale

**Toolbar:**
```text
┌────────────────────────────────────────────────────────────────┐
│ B │ I │ S │ H2 │ H3 │ • │ 1. │ "" │ ─ │ 🔗 │ 📷 │ 📊 │ ↩ │ ↪ │
└────────────────────────────────────────────────────────────────┘
│                                                                │
│  Area di editing con formattazione live                        │
│                                                                │
│  Il contenuto viene automaticamente convertito                 │
│  in HTML valido per il rendering frontend                      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### Stile editor

L'editor erediterà gli stessi stili `.prose` usati nel frontend per anteprima WYSIWYG reale.

---

## 5. FILE DA CREARE

| File | Descrizione |
|------|-------------|
| `src/components/admin/TipTapEditor.tsx` | Editor WYSIWYG completo |
| Edge function per creare admin | Registrazione utente + ruolo |

## 6. FILE DA MODIFICARE

| File | Modifica |
|------|----------|
| `src/pages/ArticoliPage.tsx` | Fetch da database invece che file |
| `src/pages/ArticleDetailPage.tsx` | Fetch da database invece che file |
| `src/pages/admin/AdminArticleForm.tsx` | Sostituire Textarea con TipTapEditor |
| `src/hooks/useArticles.ts` | Aggiungere hook per fetch articolo singolo |
| `package.json` | Aggiungere dipendenze TipTap |

---

## 7. STEP DI IMPLEMENTAZIONE

### Ordine esecuzione

1. **Installare TipTap** - Aggiungere pacchetti npm
2. **Creare componente TipTapEditor** - Editor WYSIWYG completo
3. **Aggiornare AdminArticleForm** - Integrare TipTap al posto di Textarea
4. **Creare utente admin** - Edge function + inserimento ruolo
5. **Migrare articoli** - Inserimento dati nel database
6. **Aggiornare ArticoliPage** - Leggere da database
7. **Aggiornare ArticleDetailPage** - Leggere da database

---

## 8. DETTAGLI TECNICI

### TipTapEditor - Struttura componente

```typescript
interface TipTapEditorProps {
  content: string;
  onChange: (html: string) => void;
  placeholder?: string;
}
```

**Estensioni incluse:**
- StarterKit (bold, italic, headings, lists, etc.)
- Link (con popup per URL)
- Image (inserimento URL immagine)
- Table (tabelle 3x3 default)
- Placeholder

### Migrazione articoli

Script SQL che inserisce i 12 articoli con tutti i campi mappati correttamente:
- UUID generato automaticamente
- Immagini come path asset
- Tags come array PostgreSQL
- Published = true per tutti

### Aggiornamento frontend

**usePublicArticle hook (nuovo):**
```typescript
export const usePublicArticle = (slug: string) => {
  return useQuery({
    queryKey: ['article', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .maybeSingle();
      
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });
};
```

---

## 9. RISULTATO FINALE

Dopo l'implementazione:

| Funzionalità | Stato |
|--------------|-------|
| Login admin con flo.andriciuc@gmail.com | ✓ Attivo |
| 12 articoli migrati nel database | ✓ Disponibili |
| ArticoliPage legge da database | ✓ Dinamico |
| ArticleDetailPage legge da database | ✓ Dinamico |
| Editor WYSIWYG per contenuti | ✓ TipTap integrato |
| Upload immagini | ✓ Già implementato |
| Gestione SEO | ✓ Già implementato |

