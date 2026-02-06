

# Piano: Sitemap Dinamica + Immagini AI per Articoli Province

## Panoramica

Il piano si articola in **3 macro-attività**:

1. **Aggiornare la sitemap** per includere gli articoli dal database
2. **Creare un sistema di generazione immagini AI** per le province
3. **Aggiornare gli articoli** con le immagini generate

---

## Parte 1: Sitemap Dinamica

### Problema Attuale
Lo script `scripts/generate-sitemap.ts` legge gli articoli da `src/data/articles.ts` (dati statici), ma gli articoli reali sono ora nel database Supabase.

### Soluzione
Aggiornare manualmente la sitemap con i nuovi URL degli articoli delle province.

### Nuovi URL da Aggiungere

```text
<!-- ARTICOLI - GUIDE LOCALI -->
<url>
  <loc>https://iprofili.it/articoli/infissi-brescia-guida-locale</loc>
  <lastmod>2026-02-06</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://iprofili.it/articoli/infissi-monza-brianza-guida-locale</loc>
  <lastmod>2026-02-06</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://iprofili.it/articoli/infissi-varese-guida-locale</loc>
  <lastmod>2026-02-06</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://iprofili.it/articoli/infissi-como-guida-locale</loc>
  <lastmod>2026-02-06</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://iprofili.it/articoli/infissi-pavia-guida-locale</loc>
  <lastmod>2026-02-06</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://iprofili.it/articoli/infissi-lecco-guida-locale</loc>
  <lastmod>2026-02-06</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://iprofili.it/articoli/infissi-cremona-guida-locale</loc>
  <lastmod>2026-02-06</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://iprofili.it/articoli/infissi-lodi-guida-locale</loc>
  <lastmod>2026-02-06</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://iprofili.it/articoli/infissi-bergamo-guida-locale</loc>
  <lastmod>2026-02-06</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

---

## Parte 2: Generazione Immagini AI

### Tecnologia
Utilizzeremo **Lovable AI** con il modello `google/gemini-2.5-flash-image` per generare immagini uniche per ogni provincia.

### Architettura

```text
┌──────────────────┐     ┌─────────────────────┐     ┌──────────────────┐
│  Edge Function   │────>│  Lovable AI Gateway │────>│  Storage Bucket  │
│  generate-image  │     │  (gemini-flash-img) │     │  article-images  │
└──────────────────┘     └─────────────────────┘     └──────────────────┘
         │                                                    │
         │                                                    │
         v                                                    v
┌──────────────────┐                              ┌──────────────────┐
│  Database Update │<─────────────────────────────│   Public URL     │
│  articles.image  │                              │  for SEO/OG      │
└──────────────────┘                              └──────────────────┘
```

### File da Creare

**1. Edge Function: `supabase/functions/generate-article-image/index.ts`**

Funzione che:
- Riceve il nome della città/provincia
- Genera un prompt specifico per infissi + skyline della città
- Chiama Lovable AI per generare l'immagine
- Salva l'immagine nel bucket storage
- Aggiorna il record dell'articolo con l'URL

### Prompt per Ogni Provincia

| Provincia | Prompt AI |
|-----------|-----------|
| **Brescia** | Modern PVC windows with a view of Brescia city, featuring the Broletto palace and alpine mountains in background, professional architectural photography |
| **Monza** | Elegant aluminum windows overlooking Monza Royal Villa gardens, Italian residential architecture, warm afternoon light |
| **Varese** | High-quality windows with Lake Varese and prealpine hills in background, contemporary Italian home, natural lighting |
| **Como** | Premium windows with stunning Lake Como view, historic villa facade, Italian luxury residential style |
| **Pavia** | Modern windows with Pavia Certosa monastery visible, historic Italian city architecture, golden hour |
| **Lecco** | Triple-glazed windows with Lecco lake and Resegone mountain, alpine Italian home, winter light |
| **Cremona** | Classic style windows overlooking Cremona cathedral and Torrazzo, Po Valley fog, artistic Italian atmosphere |
| **Lodi** | Contemporary windows with Lodi historic center, Lombard plain landscape, clear Italian sky |
| **Bergamo** | Windows with view of Bergamo Alta (UNESCO), Venetian walls, northern Italian alpine backdrop |

---

## Parte 3: Storage e Database

### Storage Bucket
Creare un bucket pubblico `article-images` per ospitare le immagini generate.

### Aggiornamenti Database
Per ogni articolo, aggiornare:
- `image_url`: URL pubblico dell'immagine nel bucket
- `image_alt`: Descrizione SEO-friendly dell'immagine

---

## Riepilogo File da Modificare/Creare

| File | Azione | Descrizione |
|------|--------|-------------|
| `public/sitemap.xml` | Modifica | Aggiungere 9 URL articoli Guide Locali |
| `supabase/functions/generate-article-image/index.ts` | Crea | Edge function per generare immagini AI |
| Storage bucket `article-images` | Crea | Bucket pubblico per immagini |
| Database `articles` | Aggiorna | Aggiornare `image_url` e `image_alt` per 9 articoli |

---

## Sequenza di Implementazione

1. **Creare il bucket storage** `article-images`
2. **Creare l'edge function** `generate-article-image`
3. **Generare le 9 immagini** (una per provincia)
4. **Aggiornare la sitemap** con i nuovi URL
5. **Verificare** la visualizzazione su `/articoli` e sulle pagine singole

---

## Dettagli Tecnici Aggiuntivi

### Edge Function Structure

```typescript
// Input atteso
{
  "city": "Brescia",
  "article_id": "fa218ca8-dc42-4af7-8372-26e4e9d23bd7"
}

// Output
{
  "success": true,
  "image_url": "https://[project].supabase.co/storage/v1/object/public/article-images/brescia.png"
}
```

### RLS per Storage
- Bucket pubblico per lettura (immagini servite via CDN)
- Upload limitato a funzioni autenticate

