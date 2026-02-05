
# Piano: Landing Page SEO per Citta Lombarde

## Obiettivo
Creare un sistema di landing page SEO-oriented per ogni citta della Lombardia con oltre 10.000 abitanti, ottimizzate per keyword locali come "Infissi Milano", "Finestre Milano", "Serramenti Milano".

---

## Architettura Tecnica

### 1. Struttura File

```text
src/
  data/
    cities.ts                    # Database citta con dati specifici
  pages/
    CityLandingPage.tsx          # Template pagina citta (dinamico)
  components/
    city/
      CityHero.tsx               # Hero con keyword localizzata
      CityStats.tsx              # Statistiche con riferimenti locali
      CityProblems.tsx           # Problemi comuni nella zona
      CityProducts.tsx           # Prodotti con focus locale
      CitySocialProof.tsx        # Testimonianze locali
      CityBenefits.tsx           # Benefici specifici zona
      CityFAQ.tsx                # FAQ con schema markup
      CityContact.tsx            # Form contatto localizzato
```

### 2. Routing Dinamico

Aggiungere in `App.tsx`:
```typescript
<Route path="/serramenti/:citySlug" element={<CityLandingPage />} />
```

---

## Struttura Pagina (Sezioni in Ordine)

La pagina sara lunga e completa, progettata per convertire e posizionarsi su Google:

### Sezione 1: Hero Localizzato
- Title H1: "Serramenti {Citta} | Infissi PVC Alta Efficienza"
- Sottotitolo con keyword: "Finestre in PVC per la tua casa a {Citta}"
- Badge provincia: "{Provincia} - Lombardia"
- CTA primario: "Richiedi Preventivo Gratuito a {Citta}"
- Statistiche rapide: clienti nella zona, tempo di intervento, etc.

### Sezione 2: Problema Locale
- H2: "Perche a {Citta} le Finestre Fanno la Differenza"
- Riferimenti climatici locali (inverni freddi, umidita, etc.)
- Problemi tipici della zona (edifici anni '60-'70, condomini, etc.)
- Statistiche dispersione termica

### Sezione 3: I Nostri Prodotti
- H2: "I Migliori Infissi per {Citta}"
- Grid prodotti con link a pagine dettaglio
- Focus su caratteristiche rilevanti per la zona

### Sezione 4: Perche Scegliere Noi
- H2: "Perche Siamo il Partner Ideale per i Tuoi Infissi a {Citta}"
- Vicinanza showroom (distanza da Busto Arsizio)
- Posatori che conoscono la zona
- Clienti soddisfatti nella zona
- Tempi di intervento garantiti

### Sezione 5: Processo di Lavoro
- H2: "Come Installiamo i Tuoi Serramenti a {Citta}"
- Steps: Sopralluogo > Preventivo > Produzione > Posa > Collaudo
- Tempistiche specifiche per la zona

### Sezione 6: Testimonianze Locali
- H2: "Cosa Dicono i Nostri Clienti a {Citta}"
- Testimonianze (template, poi da popolare)
- Rating aggregato

### Sezione 7: Incentivi e Bonus
- H2: "Bonus Infissi 2026: Risparmia sui Tuoi Serramenti a {Citta}"
- Detrazione 50%
- Finanziamento
- Pratica gestita

### Sezione 8: Case Green
- H2: "Direttiva Case Green: Prepara la Tua Casa a {Citta}"
- Countdown 2030
- Urgenza normativa

### Sezione 9: Garanzie
- H2: "Le Nostre Garanzie per i Clienti di {Citta}"
- 4 garanzie principali
- Contratto scritto

### Sezione 10: FAQ Localizzate (Schema Markup)
- H2: "Domande Frequenti sui Serramenti a {Citta}"
- 6-8 FAQ con keyword locali
- Schema FAQPage per rich snippets

### Sezione 11: CTA Finale + Form
- H2: "Richiedi il Tuo Preventivo Gratuito a {Citta}"
- Form contatto completo
- Info showroom + distanza
- Telefono click-to-call

---

## Ottimizzazione SEO

### Meta Tags
```typescript
<SEOHead
  title="Serramenti {Citta} | Infissi PVC - Finestre Alta Efficienza | I Profili"
  description="Cerchi infissi a {Citta}? Serramenti PVC alta efficienza, posa certificata, garanzia 10 anni. Preventivo gratuito e sopralluogo in {Provincia}."
  canonical="https://iprofili.it/serramenti/{slug}"
  schema={cityLandingSchema}
/>
```

### Schema.org Multipli
```typescript
// 1. LocalBusiness con areaServed specifico
const localBusinessSchema = {
  "@type": "LocalBusiness",
  areaServed: { "@type": "City", name: "{Citta}" },
  // ...
};

// 2. FAQPage per rich snippets
const faqSchema = {
  "@type": "FAQPage",
  mainEntity: [...faqs]
};

// 3. Service schema
const serviceSchema = {
  "@type": "Service",
  name: "Installazione Serramenti {Citta}",
  areaServed: "{Citta}",
  // ...
};

// 4. Breadcrumb
const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  itemListElement: [
    { position: 1, name: "Home", item: "/" },
    { position: 2, name: "Serramenti {Citta}", item: "/serramenti/{slug}" }
  ]
};
```

### Keyword Strategy per Pagina

| Posizione | Keyword Primaria | Keyword Secondarie |
|-----------|------------------|-------------------|
| Title H1 | Serramenti {Citta} | Infissi, Finestre PVC |
| Meta Description | Infissi {Citta} | Serramenti, preventivo, posa |
| H2 sezioni | Finestre {Citta} | Alta efficienza, risparmio |
| Alt immagini | Infissi PVC {Citta} | Installazione, showroom |
| Body text | Variazioni naturali | Localita limitrofe |

---

## Database Citta (cities.ts)

```typescript
export interface City {
  name: string;           // "Milano"
  slug: string;           // "milano"
  province: string;       // "MI"
  provinceName: string;   // "Milano"
  population: number;     // 1400000
  distanceFromShowroom: number;  // km da Busto Arsizio
  localDescription: string;      // Descrizione specifica
  climateNote: string;           // Note climatiche
  commonBuildingTypes: string[]; // Tipi edifici comuni
}

// Prima citta di esempio: Milano
export const cities: City[] = [
  {
    name: "Milano",
    slug: "milano",
    province: "MI",
    provinceName: "Milano",
    population: 1400000,
    distanceFromShowroom: 35,
    localDescription: "Milano, capitale economica d'Italia, presenta un parco immobiliare variegato...",
    climateNote: "Gli inverni milanesi, con temperature che scendono spesso sotto zero...",
    commonBuildingTypes: ["Condomini anni '50-'70", "Palazzi storici", "Nuove costruzioni", "Ville singole"],
  },
  // ... altre 200+ citta
];
```

---

## Pagina Iniziale: Milano

Creeremo prima la pagina per Milano come template di riferimento:

**URL**: `/serramenti/milano`

**Keywords target**:
- Serramenti Milano
- Infissi Milano
- Finestre Milano
- Finestre PVC Milano
- Installazione infissi Milano
- Preventivo serramenti Milano

---

## File da Creare

| File | Descrizione |
|------|-------------|
| `src/data/cities.ts` | Database citta lombarde con dati specifici |
| `src/pages/CityLandingPage.tsx` | Pagina template dinamica |
| `src/components/city/CityHero.tsx` | Hero section localizzata |
| `src/components/city/CityProblems.tsx` | Sezione problemi locali |
| `src/components/city/CityProducts.tsx` | Prodotti per la zona |
| `src/components/city/CityProcess.tsx` | Processo di lavoro |
| `src/components/city/CityTestimonials.tsx` | Testimonianze locali |
| `src/components/city/CityBenefits.tsx` | Bonus e incentivi |
| `src/components/city/CityFAQ.tsx` | FAQ con schema markup |
| `src/components/city/CityCTA.tsx` | Form contatto finale |
| `src/components/SEOHead.tsx` | Aggiungere createCitySchema |
| `src/App.tsx` | Aggiungere route dinamica |
| `public/sitemap.xml` | Aggiungere tutte le URL citta |

---

## Sitemap Update

Generare automaticamente le URL per tutte le citta:
```xml
<url>
  <loc>https://iprofili.it/serramenti/milano</loc>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://iprofili.it/serramenti/bergamo</loc>
  <priority>0.8</priority>
</url>
<!-- ... 200+ citta -->
```

---

## Nota sulle Pagine "Nascoste"

Le pagine non saranno linkate dalla navigazione principale ma saranno:
- Indicizzabili da Google (presenti in sitemap)
- Accessibili via URL diretto
- Raggiungibili da campagne PPC
- Linkate internamente dalle pagine articoli (strategia SEO)

---

## Prossimi Passi

1. Creo la prima pagina completa per Milano
2. Una volta approvata, replicheremo il template per tutte le citta
3. Lo script `generate-sitemap.ts` verra aggiornato per includere automaticamente tutte le citta

---

## Risultato Atteso

- 200+ pagine SEO-oriented per citta lombarde
- Ogni pagina ottimizzata per keyword locali
- Schema markup completi per rich snippets
- Struttura scalabile per future citta
- Alta probabilita di posizionamento per ricerche locali
