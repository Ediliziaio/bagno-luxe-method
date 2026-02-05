
# Piano: Miglioramento Chi Siamo + Blog SEO + Ottimizzazione SEO Sito

## Panoramica

Questo piano include tre interventi principali:
1. **Redesign completo pagina "Chi Siamo"** - Miglioramento estetico con immagini reali e testi ottimizzati
2. **Sistema Blog SEO-oriented** - Pagine articolo dinamiche con struttura ottimizzata per i motori di ricerca
3. **Ottimizzazione SEO globale** - Meta tag dinamici, Schema.org, e best practices su tutte le pagine

---

## 1. REDESIGN PAGINA "CHI SIAMO"

### Problemi Attuali
- Immagini placeholder (emoji) invece di foto reali
- Testi generici senza personalita
- Mancano elementi di fiducia (certificazioni, team)
- Nessuna ottimizzazione SEO specifica

### Nuovo Layout Proposto

```text
┌─────────────────────────────────────────────────────────────────────────┐
│  HERO CON IMMAGINE FULL-WIDTH                                          │
│  "Chi Siamo" + Tagline emozionale + Immagine team/showroom             │
├─────────────────────────────────────────────────────────────────────────┤
│  LA NOSTRA STORIA                                                       │
│  [Foto installazione]  │  Testo narrativo coinvolgente                 │
│                        │  Timeline: 2009 → 2026                        │
├─────────────────────────────────────────────────────────────────────────┤
│  I NOSTRI VALORI (4 card con icone grandi)                             │
├─────────────────────────────────────────────────────────────────────────┤
│  IL TEAM (Sezione nuova con foto team)                                 │
├─────────────────────────────────────────────────────────────────────────┤
│  CERTIFICAZIONI E RICONOSCIMENTI                                       │
│  [Badge certificazioni: ISO, installatore certificato, etc.]           │
├─────────────────────────────────────────────────────────────────────────┤
│  NUMERI CHE CONTANO (Stats bar)                                        │
├─────────────────────────────────────────────────────────────────────────┤
│  DOVE OPERIAMO (Mappa Lombardia con immagine reale)                    │
├─────────────────────────────────────────────────────────────────────────┤
│  CTA FINALE                                                            │
└─────────────────────────────────────────────────────────────────────────┘
```

### Nuove Sezioni da Aggiungere

**1. Hero Migliorato con Immagine**
```typescript
// Utilizzo immagine reale invece del gradiente
<section className="relative h-[50vh] min-h-[400px]">
  <img 
    src={teamImage} 
    alt="Il team I Profili" 
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
  <div className="relative z-10 flex items-end h-full pb-12">
    <h1>La Tua Casa Merita il Meglio</h1>
  </div>
</section>
```

**2. Timeline Interattiva Storia**
```typescript
const timeline = [
  { year: "2009", event: "Fondazione I Profili" },
  { year: "2012", event: "Prima 100 installazioni" },
  { year: "2015", event: "Espansione in tutta Lombardia" },
  { year: "2018", event: "Certificazione ISO 9001" },
  { year: "2022", event: "500+ installazioni annue" },
  { year: "2026", event: "Leader regionale PVC" },
];
```

**3. Sezione Team**
```typescript
const team = [
  { 
    name: "Marco Rossi", 
    role: "Fondatore & CEO",
    image: "/team/marco.jpg",
    description: "30 anni di esperienza nel settore serramenti"
  },
  // ...altri membri
];
```

**4. Certificazioni**
```typescript
const certifications = [
  { name: "Installatore Certificato DOMUS", logo: certifiedInstaller },
  { name: "Garanzia 10 Anni", logo: guarantee },
  { name: "Made in Italy", logo: madeInItaly },
];
```

### Testi Migliorati

**Headline Hero:**
- Prima: "La Tua Casa Merita il Meglio"
- Dopo: "I Profili: 15 Anni di Serramenti d'Eccellenza in Lombardia"

**Sottotitolo:**
- Prima: "Da oltre 15 anni installiamo serramenti..."
- Dopo: "Dal 2009 aiutiamo oltre 2.500 famiglie lombarde a trasformare le loro case in ambienti piu confortevoli, silenziosi e efficienti. Scopri la nostra storia."

**Storia - Testo Narrativo:**
```text
"Nel 2009, in un piccolo laboratorio di Monza, e nata una visione: 
rendere accessibile a tutti la qualita premium dei serramenti in PVC.

Non volevamo essere 'un altro serramentista'. Volevamo creare 
un'esperienza diversa: trasparenza totale, tempistiche rispettate, 
e un'assistenza che non ti abbandona dopo la firma.

Oggi, dopo oltre 2.500 installazioni e 15 anni di lavoro, 
il nostro Sistema Zero Pensieri e diventato il riferimento 
per chi cerca serramenti senza stress in Lombardia."
```

---

## 2. SISTEMA BLOG SEO-ORIENTED

### Struttura Attuale
- `/articoli` - Lista articoli (funzionante)
- Nessuna pagina dettaglio articolo

### Nuova Struttura

**Route da creare:**
```typescript
<Route path="/articoli/:articleSlug" element={<ArticleDetailPage />} />
```

**Database Articoli Esteso:**
```typescript
interface Article {
  id: string;
  slug: string;  // URL-friendly: "come-scegliere-infissi-pvc-lombardia"
  title: string;
  metaTitle: string;  // Per SEO: max 60 caratteri
  metaDescription: string;  // Per SEO: max 160 caratteri
  excerpt: string;
  content: string;  // Contenuto completo in formato markdown/HTML
  date: string;
  dateISO: string;  // "2026-01-15" per Schema.org
  category: string;
  tags: string[];  // ["PVC", "risparmio energetico", "Lombardia"]
  image: string;
  imageAlt: string;
  author: {
    name: string;
    role: string;
    image?: string;
  };
  readingTime: string;  // "5 min"
  relatedArticles: string[];  // IDs di articoli correlati
}
```

**Struttura Pagina Articolo:**
```text
┌─────────────────────────────────────────────────────────────────────────┐
│  BREADCRUMB: Home > Articoli > [Categoria] > [Titolo]                  │
├─────────────────────────────────────────────────────────────────────────┤
│  HERO ARTICOLO                                                          │
│  - Categoria badge                                                      │
│  - H1: Titolo articolo (keyword principale)                            │
│  - Meta: Data, Tempo lettura, Autore                                   │
│  - Immagine featured                                                   │
├─────────────────────────────────────────────────────────────────────────┤
│  TABLE OF CONTENTS (Indice navigabile)                                 │
├─────────────────────────────────────────────────────────────────────────┤
│  CONTENUTO ARTICOLO                                                     │
│  - H2, H3 strutturati                                                  │
│  - Immagini con alt text ottimizzati                                   │
│  - CTA inline                                                          │
├─────────────────────────────────────────────────────────────────────────┤
│  AUTORE BOX                                                            │
├─────────────────────────────────────────────────────────────────────────┤
│  ARTICOLI CORRELATI                                                    │
├─────────────────────────────────────────────────────────────────────────┤
│  CTA FINALE: "Vuoi saperne di piu? Contattaci"                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Contenuti Articoli (Aggiornati 2026)

**Articolo 1: "Come Scegliere gli Infissi Giusti"**
```typescript
{
  slug: "come-scegliere-infissi-pvc-lombardia",
  metaTitle: "Come Scegliere gli Infissi PVC nel 2026 | Guida Completa",
  metaDescription: "Guida definitiva alla scelta degli infissi in PVC, alluminio e legno-alluminio. Confronto materiali, prezzi e consigli per la Lombardia.",
  content: `
    <h2>Perche gli infissi sono cosi importanti?</h2>
    <p>Gli infissi rappresentano fino al 30% della dispersione termica...</p>
    
    <h2>PVC vs Alluminio vs Legno-Alluminio: il confronto definitivo</h2>
    ...
  `,
  tags: ["infissi PVC", "serramenti Lombardia", "risparmio energetico"],
}
```

---

## 3. OTTIMIZZAZIONE SEO GLOBALE

### 3.1 Componente SEO Dinamico

Creare un componente `SEOHead` da usare in ogni pagina:

```typescript
// src/components/SEOHead.tsx
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  article?: {
    publishedTime: string;
    author: string;
    section: string;
  };
  schema?: object;
}

export const SEOHead = ({ title, description, canonical, schema }: SEOHeadProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    
    {/* Open Graph */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    
    {/* Schema.org JSON-LD */}
    {schema && (
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    )}
  </Helmet>
);
```

### 3.2 Schema.org per Ogni Pagina

**Homepage - LocalBusiness:**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "I Profili",
  "description": "Installazione serramenti PVC in Lombardia",
  "url": "https://iprofili.it",
  "telephone": "+390212345678",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Lombardia",
    "addressCountry": "IT"
  },
  "areaServed": "Lombardia",
  "priceRange": "€€",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  }
}
```

**Pagina Prodotto - Product:**
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Domus - Sistema 76mm",
  "description": "Finestra in PVC a 6 camere...",
  "brand": "I Profili",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "EUR",
    "availability": "InStock"
  }
}
```

**Articolo Blog - Article:**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Come Scegliere gli Infissi",
  "datePublished": "2026-01-15",
  "author": {
    "@type": "Person",
    "name": "Marco Rossi"
  }
}
```

### 3.3 Meta Tag per Ogni Pagina

| Pagina | Title | Description |
|--------|-------|-------------|
| **Home** | I Profili - Finestre PVC Alta Efficienza Lombardia | Finestre in PVC ad alta efficienza energetica. Risparmia fino al 40% in bolletta. Garanzia 10 anni, bonus 50%. Preventivo gratuito. |
| **Chi Siamo** | Chi Siamo - I Profili - Serramentisti dal 2009 | Scopri la storia di I Profili: 15 anni di esperienza, 2.500+ installazioni in Lombardia. Team certificato e garanzia totale. |
| **Prodotti** | Catalogo Infissi PVC Alluminio Legno - I Profili | Scopri la gamma completa: Domus, Lumier, Idole, Alum. Finestre, porte, persiane, tapparelle. Preventivo gratuito. |
| **Garanzie** | Garanzie 10 Anni - I Profili Serramenti | Garanzia 10 anni su profili, 5 anni sulla posa. Penali per ritardi scritte in contratto. Trasparenza totale. |
| **Contatti** | Contatti - Preventivo Gratuito Infissi Lombardia | Richiedi un preventivo gratuito per i tuoi infissi. Sopralluogo in tutta la Lombardia. Risposta entro 48 ore. |
| **Articoli** | Blog Infissi - Guide, Bonus, Normative - I Profili | Guide pratiche su infissi, bonus fiscali 2026, direttiva Case Green. Consigli esperti per la tua casa. |

### 3.4 Breadcrumb Navigation

Aggiungere breadcrumb su tutte le pagine interne:

```typescript
// src/components/shared/Breadcrumb.tsx
export const Breadcrumb = ({ items }: { items: {label: string, href?: string}[] }) => (
  <nav aria-label="Breadcrumb" className="py-4">
    <ol className="flex items-center gap-2 text-sm">
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-2">
          {item.href ? (
            <Link to={item.href}>{item.label}</Link>
          ) : (
            <span>{item.label}</span>
          )}
          {i < items.length - 1 && <ChevronRight className="w-4 h-4" />}
        </li>
      ))}
    </ol>
  </nav>
);
```

---

## 4. FILE DA CREARE

| File | Descrizione |
|------|-------------|
| `src/components/SEOHead.tsx` | Componente meta tag dinamici |
| `src/components/shared/Breadcrumb.tsx` | Navigazione breadcrumb |
| `src/data/articles.ts` | Database articoli completo con contenuti |
| `src/pages/ArticleDetailPage.tsx` | Pagina dettaglio articolo |
| `src/components/articles/ArticleContent.tsx` | Rendering contenuto articolo |
| `src/components/articles/AuthorBox.tsx` | Box autore articolo |
| `src/components/articles/RelatedArticles.tsx` | Articoli correlati |
| `src/components/articles/TableOfContents.tsx` | Indice navigabile |

## 5. FILE DA MODIFICARE

| File | Modifica |
|------|----------|
| `src/pages/ChiSiamoPage.tsx` | Redesign completo con immagini e nuove sezioni |
| `src/pages/HomePage.tsx` | Aggiungere SEOHead con Schema.org |
| `src/pages/ProdottiPage.tsx` | Aggiungere SEOHead e breadcrumb |
| `src/pages/ProductDetailPage.tsx` | Aggiungere SEOHead Product schema |
| `src/pages/GaranziePage.tsx` | Aggiungere SEOHead e breadcrumb |
| `src/pages/ContattiPage.tsx` | Aggiungere SEOHead e breadcrumb |
| `src/pages/ArticoliPage.tsx` | Aggiungere SEOHead, aggiornare date 2026 |
| `src/App.tsx` | Aggiungere route `/articoli/:slug` |
| `index.html` | Aggiungere HelmetProvider wrap |
| `package.json` | Aggiungere dipendenza `react-helmet-async` |

---

## 6. DIPENDENZE DA INSTALLARE

```bash
npm install react-helmet-async
```

---

## 7. STRUTTURA URL OTTIMIZZATA

| Tipo | URL Pattern | Esempio |
|------|-------------|---------|
| Home | `/` | iprofili.it |
| Prodotti | `/prodotti` | iprofili.it/prodotti |
| Prodotto | `/prodotti/:slug` | iprofili.it/prodotti/domus-76mm |
| Chi Siamo | `/chi-siamo` | iprofili.it/chi-siamo |
| Garanzie | `/garanzie` | iprofili.it/garanzie |
| Contatti | `/contatti` | iprofili.it/contatti |
| Blog | `/articoli` | iprofili.it/articoli |
| Articolo | `/articoli/:slug` | iprofili.it/articoli/come-scegliere-infissi-pvc |

---

## 8. IMMAGINI DA UTILIZZARE

Dalla cartella `src/assets` esistente:
- `certified-installer.jpg` - Per sezione certificazioni Chi Siamo
- `family-comfort.jpg` - Per sezione Team/Storia
- `portfolio-*.jpg` - Per galleria Chi Siamo
- `window-after-*.jpg` - Per articoli blog
- `home-windows.jpg` - Per hero Chi Siamo

---

## 9. STIMA LAVORO

- Componente SEOHead + Breadcrumb: ~100 righe
- Pagina ChiSiamoPage redesign: ~350 righe
- Database articles.ts completo: ~300 righe
- ArticleDetailPage + componenti: ~400 righe
- Modifiche SEO alle pagine esistenti: ~200 righe
- **Totale: ~1.350 righe di codice**

