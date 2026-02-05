
# Piano: Script Sitemap Automatico + Miglioramento Layout Articoli + Scroll to Top

## Panoramica

Questo piano include tre interventi:
1. **Script generazione sitemap automatico** - Legge prodotti e articoli dai dati esistenti
2. **Miglioramento layout articoli** - Più spazio, leggibilità migliorata
3. **Scroll to top su navigazione** - Ogni nuova pagina parte dall'alto

---

## 1. SCROLL TO TOP SU NAVIGAZIONE

### Problema Attuale
Quando navighi da una pagina all'altra, la posizione dello scroll rimane uguale. Questo significa che se sei a metà di un articolo e clicchi su un altro articolo, vedrai la nuova pagina dalla stessa altezza invece che dall'inizio.

### Soluzione
Creare un componente `ScrollToTop` che ascolta i cambiamenti di route e riporta automaticamente la pagina in alto.

### File da creare: `src/components/ScrollToTop.tsx`

```typescript
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
```

### Modifica: `src/App.tsx`

Aggiungere il componente dentro `BrowserRouter`:

```typescript
import { ScrollToTop } from "@/components/ScrollToTop";

// Dentro BrowserRouter, prima di Routes:
<BrowserRouter>
  <ScrollToTop />
  <Routes>
    ...
  </Routes>
</BrowserRouter>
```

---

## 2. MIGLIORAMENTO LAYOUT ARTICOLI

### Problemi Attuali
- Testo troppo compatto
- Poco spazio tra paragrafi
- H2 e H3 troppo vicini al contenuto
- Indice (Table of Contents) troppo stretto
- Sezioni non separate visivamente

### Modifiche in `ArticleDetailPage.tsx`

**1. Più spazio nel contenuto (classe prose)**

```typescript
// PRIMA
className="prose prose-lg max-w-none 
  prose-headings:text-foreground prose-headings:font-bold
  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
  prose-p:text-muted-foreground prose-p:leading-relaxed
  ..."

// DOPO - più spaziatura
className="prose prose-lg max-w-none 
  prose-headings:text-foreground prose-headings:font-bold
  prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
  prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4
  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
  prose-ul:my-6 prose-ol:my-6
  prose-li:my-2
  ..."
```

**2. Table of Contents con più spazio**

```typescript
// PRIMA
className="bg-muted/50 rounded-xl p-6 mb-8"

// DOPO
className="bg-muted/50 rounded-xl p-8 mb-12"

// Spazio tra voci
className="space-y-3" // invece di space-y-2
```

**3. Immagine featured con più margine**

```typescript
// PRIMA
className="aspect-[16/9] bg-muted rounded-2xl mb-10"

// DOPO  
className="aspect-[16/9] bg-muted rounded-2xl mb-14"
```

**4. Separatori visivi tra sezioni**

Aggiungere separatori tra le sezioni principali per creare respiro visivo.

**5. Header articolo più spaziato**

```typescript
// PRIMA
className="mb-10"

// DOPO
className="mb-14"

// Titolo
className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8"
```

**6. Sezione Tags con più respiro**

```typescript
// PRIMA
className="flex flex-wrap items-center gap-2 mt-10 pt-6"

// DOPO
className="flex flex-wrap items-center gap-3 mt-14 pt-8"
```

**7. Author Box e CTA più spaziati**

```typescript
// Author Box
className="mt-14"

// CTA
className="mt-16 bg-primary/5 rounded-2xl p-10 text-center"

// Related Articles
className="py-16 border-t border-border/50"
```

---

## 3. SCRIPT GENERAZIONE SITEMAP AUTOMATICA

### Approccio

Creo uno script TypeScript che:
1. Importa i dati da `products.ts` e `articles.ts`
2. Genera la sitemap XML automaticamente
3. Salva in `public/sitemap.xml`

### File da creare: `scripts/generate-sitemap.ts`

```typescript
/**
 * Script per generare automaticamente sitemap.xml
 * dai dati di prodotti e articoli
 * 
 * Esegui con: npx tsx scripts/generate-sitemap.ts
 */

import { writeFileSync } from 'fs';
import { products } from '../src/data/products';
import { articles } from '../src/data/articles';

const BASE_URL = 'https://iprofili.it';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: string;
}

function generateSitemap(): void {
  const today = new Date().toISOString().split('T')[0];
  
  // Pagine statiche
  const staticUrls: SitemapUrl[] = [
    { loc: '/', lastmod: today, changefreq: 'weekly', priority: '1.0' },
    { loc: '/prodotti', lastmod: today, changefreq: 'weekly', priority: '0.9' },
    { loc: '/chi-siamo', lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/garanzie', lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/contatti', lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/articoli', lastmod: today, changefreq: 'weekly', priority: '0.9' },
  ];
  
  // URL Prodotti (da products.ts)
  const productUrls: SitemapUrl[] = Object.keys(products).map(id => ({
    loc: `/prodotti/${id}`,
    lastmod: today,
    changefreq: 'monthly' as const,
    priority: products[id].category === 'infissi' ? '0.8' : '0.7',
  }));
  
  // URL Articoli (da articles.ts)
  const articleUrls: SitemapUrl[] = articles.map(article => ({
    loc: `/articoli/${article.slug}`,
    lastmod: article.dateISO,
    changefreq: 'monthly' as const,
    priority: '0.7',
  }));
  
  // Combina tutti gli URL
  const allUrls = [...staticUrls, ...productUrls, ...articleUrls];
  
  // Genera XML
  const xml = generateXML(allUrls);
  
  // Salva file
  writeFileSync('public/sitemap.xml', xml);
  console.log(`Sitemap generata con ${allUrls.length} URL`);
}

function generateXML(urls: SitemapUrl[]): string {
  const urlEntries = urls.map(url => `  <url>
    <loc>${BASE_URL}${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

// Esegui
generateSitemap();
```

### Utilizzo dello script

Per generare la sitemap, esegui:
```bash
npx tsx scripts/generate-sitemap.ts
```

### Note sullo script

Lo script legge dinamicamente:
- **12 prodotti** da `src/data/products.ts`
- **12 articoli** da `src/data/articles.ts`
- **6 pagine statiche** (Home, Prodotti, Chi Siamo, Garanzie, Contatti, Articoli)

Totale: **30 URL** generati automaticamente

---

## RIEPILOGO FILE

### File da creare

| File | Descrizione |
|------|-------------|
| `src/components/ScrollToTop.tsx` | Scroll automatico ad inizio pagina |
| `scripts/generate-sitemap.ts` | Script generazione sitemap automatica |

### File da modificare

| File | Modifica |
|------|----------|
| `src/App.tsx` | Aggiungere componente ScrollToTop |
| `src/pages/ArticleDetailPage.tsx` | Migliorare spaziature e leggibilità |

---

## PREVIEW MIGLIORAMENTI LAYOUT

### Prima (compatto)

```text
┌──────────────────────────────────────┐
│ Titolo articolo                      │
│ 15 Gen 2026 • 5 min                  │
│ [Immagine]                           │
│ Indice: voce1 voce2 voce3            │
│ H2 Sezione                           │
│ Testo paragrafo molto compatto...    │
│ H2 Altra Sezione                     │
│ Altro testo compatto...              │
└──────────────────────────────────────┘
```

### Dopo (leggibile)

```text
┌──────────────────────────────────────┐
│                                      │
│ Titolo articolo                      │
│                                      │
│ 15 Gen 2026 • 5 min                  │
│                                      │
│ [Immagine]                           │
│                                      │
│ ┌────────────────────────────────┐   │
│ │ Indice                         │   │
│ │                                │   │
│ │ • Voce 1                       │   │
│ │ • Voce 2                       │   │
│ │ • Voce 3                       │   │
│ └────────────────────────────────┘   │
│                                      │
│ H2 Sezione                           │
│                                      │
│ Testo paragrafo con più respiro      │
│ tra le righe e tra i paragrafi       │
│                                      │
│ ─────────────────────────────────    │
│                                      │
│ H2 Altra Sezione                     │
│                                      │
│ Altro testo con più spazio...        │
│                                      │
└──────────────────────────────────────┘
```

---

## STIMA LAVORO

| Task | Righe |
|------|-------|
| ScrollToTop.tsx | ~15 righe |
| Modifica App.tsx | ~3 righe |
| Modifica ArticleDetailPage.tsx | ~30 righe |
| Script generate-sitemap.ts | ~70 righe |
| **TOTALE** | **~118 righe** |
