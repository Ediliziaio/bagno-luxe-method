
# Piano: Ottimizzazione Completa Sito I Profili

## Panoramica

Questo piano copre 4 aree principali:
1. Fix bottone "Perche sceglierci" non leggibile
2. Ottimizzazione codice per velocita di caricamento
3. Verifica e ottimizzazione immagini
4. SEO avanzata per le pagine citta

---

## 1. FIX BOTTONE "Perche sceglierci"

### Problema Identificato
Il bottone nella sezione `HomeWhyUs` ha classi `bg-white text-primary` ma si trova dentro `section-accent` (sfondo teal). Il contrasto potrebbe non essere ottimale su alcuni dispositivi.

### File: `src/components/home/HomeWhyUs.tsx`

**Riga 83-93 - Modifica:**
```tsx
// DA:
<Button
  size="lg"
  className="bg-white text-primary hover:bg-white/90 font-bold group"
  ...
>

// A:
<Button
  size="lg"
  className="bg-[#1D1D1C] text-white hover:bg-[#1D1D1C]/90 font-bold group shadow-lg border-2 border-white/20"
  ...
>
```

**Risultato**: Bottone scuro su sfondo teal = contrasto massimo.

---

## 2. OTTIMIZZAZIONE CODICE PER VELOCITA

### 2.1 Lazy Loading dei Componenti Homepage

**File: `src/pages/HomePage.tsx`**

Aggiungere React.lazy() per i componenti sotto la piega:

```tsx
import { lazy, Suspense } from "react";
import { HomeHeader } from "@/components/HomeHeader";
import { SEOHead, localBusinessSchema } from "@/components/SEOHead";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeStats } from "@/components/home/HomeStats";
import { HomeWhyUs } from "@/components/home/HomeWhyUs";

// Lazy load componenti sotto la piega
const HomeShowroom = lazy(() => import("@/components/home/HomeShowroom").then(m => ({ default: m.HomeShowroom })));
const HomeVideos = lazy(() => import("@/components/home/HomeVideos").then(m => ({ default: m.HomeVideos })));
const HomeProducts = lazy(() => import("@/components/home/HomeProducts").then(m => ({ default: m.HomeProducts })));
const HomeSystem = lazy(() => import("@/components/home/HomeSystem").then(m => ({ default: m.HomeSystem })));
const HomeServices = lazy(() => import("@/components/home/HomeServices").then(m => ({ default: m.HomeServices })));
const HomeSteps = lazy(() => import("@/components/home/HomeSteps").then(m => ({ default: m.HomeSteps })));
const HomeServiceOverview = lazy(() => import("@/components/home/HomeServiceOverview").then(m => ({ default: m.HomeServiceOverview })));
const HomeTransparency = lazy(() => import("@/components/home/HomeTransparency").then(m => ({ default: m.HomeTransparency })));
const HomeCaseGreen = lazy(() => import("@/components/home/HomeCaseGreen").then(m => ({ default: m.HomeCaseGreen })));
const HomeGuarantees = lazy(() => import("@/components/home/HomeGuarantees").then(m => ({ default: m.HomeGuarantees })));
const HomeTestimonials = lazy(() => import("@/components/home/HomeTestimonials").then(m => ({ default: m.HomeTestimonials })));
const HomeFinancing = lazy(() => import("@/components/home/HomeFinancing").then(m => ({ default: m.HomeFinancing })));
const HomeContact = lazy(() => import("@/components/home/HomeContact").then(m => ({ default: m.HomeContact })));
```

### 2.2 Ottimizzazione Immagini Hero

**File: `src/components/home/HomeHero.tsx`**

Aggiungere attributi di ottimizzazione:

```tsx
<img
  src={img}
  alt={`Serramento ${idx + 1}`}
  className="absolute inset-0 w-full h-full object-cover"
  loading={idx === 0 ? "eager" : "lazy"}  // Prima immagine caricata subito
  decoding="async"
  fetchPriority={idx === 0 ? "high" : "auto"}
/>
```

### 2.3 Ottimizzazione Framer Motion

Ridurre animazioni non essenziali:

**File: `src/components/home/HomeWhyUs.tsx`**

```tsx
// Semplificare animazioni - rimuovere viewport once: false
viewport={{ once: true, margin: "-50px" }}
```

---

## 3. OTTIMIZZAZIONE IMMAGINI

### Immagini Presenti (63 totali)

**Assets principali (47 file):**
- Hero/Slider: 4 file (2 JPG + 2 WEBP) - OK formato misto
- Before/After: 16 file JPG - DA OTTIMIZZARE
- Portfolio: 6 file JPG
- Altro: 21 file JPG/PNG

**Products (16 file):**
- Tutti JPG - formato corretto

**Showroom (7 file):**
- Tutti JPG - formato corretto

### Ottimizzazioni Raccomandate

1. **Conversione a WebP** (prossimo step manuale):
   - Convertire tutte le JPG in WebP per ridurre dimensioni del 25-35%
   - Mantenere fallback JPG per browser vecchi

2. **Lazy Loading Immagini**:

**File: `src/components/home/HomeShowroom.tsx`** (e simili)

```tsx
<img 
  src={showroomImage} 
  alt="Showroom I Profili"
  loading="lazy"
  decoding="async"
/>
```

3. **Dimensioni responsive**:
   - Aggiungere srcset per immagini grandi (hero, showroom)

---

## 4. SEO CITTA - Ottimizzazione Completa

### Problema Attuale
La sitemap.xml NON include le 24 landing page citta. Lo script `generate-sitemap.ts` le genera correttamente ma la sitemap statica in `public/` non e aggiornata.

### 4.1 Aggiornamento Sitemap

**File: `public/sitemap.xml`**

Rigenerare la sitemap eseguendo lo script o aggiungere manualmente:

```xml
<!-- LANDING PAGE CITTA SEO -->
<url>
  <loc>https://iprofili.it/serramenti/milano</loc>
  <lastmod>2026-02-05</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://iprofili.it/serramenti/monza</loc>
  <lastmod>2026-02-05</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<!-- ... per tutte le 24 citta -->
```

### 4.2 Miglioramento SEO On-Page

**File: `src/pages/CityLandingPage.tsx`**

Ottimizzare title e description per keyword specifiche:

```tsx
// ATTUALE:
title={`Serramenti ${city.name} | Infissi PVC Alta Efficienza - Finestre | I Profili`}
description={`Cerchi infissi a ${city.name}? Serramenti PVC...`}

// OTTIMIZZATO - keyword primarie in evidenza:
title={`Infissi ${city.name} - Finestre e Serramenti PVC | I Profili`}
description={`Infissi ${city.name}: serramenti PVC alta efficienza, finestre con garanzia 10 anni. Preventivo gratuito, posa certificata, bonus 50%. ☎ 350 178 0908`}
```

### 4.3 Aggiunta Keywords Meta Tag

**File: `src/components/SEOHead.tsx`**

Aggiungere supporto per meta keywords (utile per Bing):

```tsx
interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;  // NUOVO
  canonical?: string;
  // ...
}

// Nel useEffect:
if (keywords) {
  setMeta("keywords", keywords);
}
```

**File: `src/pages/CityLandingPage.tsx`**

```tsx
<SEOHead
  title={`Infissi ${city.name} - Finestre e Serramenti PVC | I Profili`}
  description={`Infissi ${city.name}: serramenti PVC alta efficienza...`}
  keywords={`infissi ${city.name}, finestre ${city.name}, serramenti ${city.name}, serramenti PVC ${city.provinceName}, sostituzione finestre ${city.name}`}
  canonical={`https://iprofili.it/serramenti/${city.slug}`}
  schema={combinedSchema}
/>
```

### 4.4 Ottimizzazione H1 e Contenuto

**File: `src/components/city/CityHero.tsx`**

L'H1 attuale e gia buono:
```tsx
<h1>Serramenti {city.name}</h1>
<span>Infissi PVC Alta Efficienza Energetica</span>
```

Aggiungere alt text ottimizzato per immagine hero:
```tsx
alt={`Infissi e finestre PVC a ${city.name} - Serramenti alta efficienza I Profili`}
```

### 4.5 Schema Markup Aggiornamento Telefono

**File: `src/pages/CityLandingPage.tsx`**

Aggiornare numero telefono negli schema:

```tsx
// riga 28 - DA:
telephone: "+39-351-305-8029",

// A:
telephone: "+39-350-178-0908",
```

---

## Riepilogo Modifiche

| File | Modifica |
|------|----------|
| `src/components/home/HomeWhyUs.tsx` | Fix contrasto bottone |
| `src/pages/HomePage.tsx` | Lazy loading componenti |
| `src/components/home/HomeHero.tsx` | Ottimizzazione caricamento immagini |
| `src/components/SEOHead.tsx` | Aggiunta supporto keywords |
| `src/pages/CityLandingPage.tsx` | SEO migliorato + telefono schema |
| `src/components/city/CityHero.tsx` | Alt text ottimizzato |
| `public/sitemap.xml` | Aggiunta 24 URL citta |

---

## Risultati Attesi

**Performance:**
- Tempo First Contentful Paint ridotto del 30-40%
- Lazy loading riduce bundle iniziale
- Immagini caricate progressivamente

**SEO Citta:**
- 24 pagine indicizzate nella sitemap
- Title ottimizzati per keyword locali: "Infissi [Citta]", "Finestre [Citta]"
- Meta description con call-to-action e telefono
- Keywords meta tag per Bing
- Schema markup completo per ogni citta

**Keyword Target per Citta:**
- "infissi milano" → /serramenti/milano
- "finestre monza" → /serramenti/monza
- "serramenti bergamo" → /serramenti/bergamo
- ecc.
