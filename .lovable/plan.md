
# Piano: Fix Bug Loading Articolo Admin

## Problema Identificato

La pagina `/admin/articles/edit/:id` rimane bloccata sullo spinner di loading. Dall'analisi del codice e dei log, ho identificato due problemi principali:

---

## 1. Problema: `fetchArticleById` non memoizzata

Nel hook `useArticles`, la funzione `fetchArticleById` viene definita direttamente nel corpo del hook senza `useCallback`:

```typescript
// useArticles.ts - ATTUALMENTE
const fetchArticleById = async (id: string) => {
  // ...
};
```

Quando questa funzione viene usata come dipendenza nell'useEffect di `AdminArticleForm`:

```typescript
useEffect(() => {
  if (isEditing && id) {
    setLoading(true);
    fetchArticleById(id).then((article) => {
      // ...
      setLoading(false);
    });
  }
}, [id, isEditing, fetchArticleById]); // <-- fetchArticleById cambia ad ogni render
```

Ogni render crea una nuova referenza di `fetchArticleById`, causando potenziali loop o comportamenti imprevedibili.

---

## 2. Problema: Mancata gestione errori nell'useEffect

L'useEffect non ha un `.catch()` sulla Promise. Se succede qualcosa di inaspettato, `setLoading(false)` potrebbe non essere chiamato.

---

## 3. Problema: Warning TipTap "Duplicate Link Extension"

Il warning nei console log indica che l'estensione Link viene caricata due volte. Anche se StarterKit non include Link di default, il warning suggerisce un conflitto. Questo va sistemato per evitare problemi.

---

## Soluzione Proposta

### Modifiche a `src/hooks/useArticles.ts`

Wrappare `fetchArticleById` con `useCallback` per garantire stabilita della referenza:

```typescript
import { useState, useCallback } from 'react';

// ...

const fetchArticleById = useCallback(async (id: string): Promise<ArticleDB | null> => {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('id', id)
    .maybeSingle(); // Cambiare da .single() a .maybeSingle() per evitare errori

  if (error) {
    console.error('Error fetching article:', error);
    return null;
  }
  return data as ArticleDB | null;
}, []);
```

Stessa cosa per `fetchArticleBySlug`:

```typescript
const fetchArticleBySlug = useCallback(async (slug: string): Promise<ArticleDB | null> => {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle();

  if (error) {
    console.error('Error fetching article by slug:', error);
    return null;
  }
  return data as ArticleDB | null;
}, []);
```

---

### Modifiche a `src/pages/admin/AdminArticleForm.tsx`

Rimuovere `fetchArticleById` dalle dipendenze e aggiungere gestione errori:

```typescript
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
          // ... altri campi
        });
        setTagsInput((article.tags || []).join(', '));
      }
    } catch (error) {
      console.error('Error loading article:', error);
      toast.error('Errore nel caricamento dell\'articolo');
    } finally {
      setLoading(false); // Sempre eseguito, anche in caso di errore
    }
  };

  loadArticle();
}, [id, isEditing]); // Rimuovere fetchArticleById dalle dipendenze
```

---

### Modifiche a `src/components/admin/TipTapEditor.tsx`

Rimuovere il warning di Link duplicato disabilitando Link in StarterKit (dato che viene aggiunto separatamente):

```typescript
const editor = useEditor({
  extensions: [
    StarterKit.configure({
      heading: {
        levels: [2, 3],
      },
      // Disabilitare le estensioni che aggiungiamo separatamente
      // (StarterKit non include Link di default, ma per sicurezza)
    }),
    Link.configure({
      openOnClick: false,
      HTMLAttributes: {
        class: 'text-primary underline hover:text-primary/80',
      },
    }),
    // ...
  ],
  // ...
});
```

Inoltre, aggiungere un check per evitare che l'editor tenti di sincronizzare contenuto mentre non e pronto:

```typescript
// Sync content from outside - con check piu robusto
useEffect(() => {
  if (editor && editor.isEditable && content !== editor.getHTML()) {
    editor.commands.setContent(content, false); // false = no emit update event
  }
}, [content, editor]);
```

---

## File da Modificare

| File | Modifiche |
|------|-----------|
| `src/hooks/useArticles.ts` | Aggiungere `useCallback` a `fetchArticleById` e `fetchArticleBySlug`, cambiare `.single()` in `.maybeSingle()` |
| `src/pages/admin/AdminArticleForm.tsx` | Rimuovere `fetchArticleById` dalle dipendenze useEffect, aggiungere try/catch/finally |
| `src/components/admin/TipTapEditor.tsx` | Aggiungere parametro `false` a `setContent` per evitare loop |

---

## Risultato Atteso

Dopo le modifiche:

| Problema | Stato |
|----------|-------|
| Spinner infinito su pagina edit | Risolto |
| Warning TipTap duplicate Link | Risolto |
| Gestione errori mancante | Aggiunta |
| Funzioni non stabili | Memoizzate |

La pagina di modifica articolo si caricherà correttamente mostrando il form con i dati dell'articolo.
