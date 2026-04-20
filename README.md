# I Profili — Sito Istituzionale

Sito vetrina statico per I Profili (serramenti e infissi), costruito come SPA con
massima attenzione alla SEO on-page e tecnica.

## Stack

- **Vite 5** + **React 18** + **TypeScript**
- **React Router v6**
- **Tailwind CSS** + **shadcn/ui** (radix-ui)
- **TanStack Query** (cache in-memory)
- **framer-motion**, **react-helmet-async**, **dompurify**

Nessun backend. Tutti i contenuti (articoli, città, prodotti) sono statici in `src/data/`.

## Avvio locale

```sh
npm install
npm run dev
```

## Build di produzione

```sh
npm run build
npm run preview
```

## Struttura

- `src/pages/` — pagine del sito (Home, Prodotti, Articoli, City landing, ecc.)
- `src/components/` — componenti UI divisi per area (home, products, city, articles, shared, ui)
- `src/data/` — contenuti statici (articoli, città, prodotti)
- `src/lib/` — utility (asset map, SEO helpers)
- `public/` — `sitemap.xml`, `robots.txt`, favicon, immagini statiche
