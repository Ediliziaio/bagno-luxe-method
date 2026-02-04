

# Piano: Ottimizzazione Homepage e Pagina Filippo

## Panoramica delle Modifiche

Questo piano copre 5 aree principali:
1. **Recensioni desktop pagina Filippo**: Ottimizzazione layout per schermi grandi
2. **Video nella Homepage**: Aggiunta sezione con 2 video YouTube reali
3. **Recensioni scrollanti Homepage**: Sezione testimonial carousel
4. **Sezione "Nero su Bianco"**: Nuova sezione garanzie/trasparenza
5. **Sezione "Il Tuo Percorso"**: Adattamento del ServiceOverviewSection per la Homepage

---

## 1. Ottimizzazione Recensioni Desktop (Pagina Filippo)

### File: `src/components/WrittenTestimonialsSection.tsx`

**Problema attuale**: Su desktop le card sono in griglia 3 colonne ma potrebbero essere ottimizzate per una lettura migliore.

**Modifiche proposte**:
- Layout desktop: griglia 3 colonne con card di altezza uniforme
- Aggiungere visibilità di più recensioni senza carousel su desktop (es. mostrare 6 card statiche)
- Mantenere carousel solo su mobile/tablet
- Migliorare spaziatura e tipografia per desktop
- Aggiungere effetto hover più evidente

**Codice indicativo**:
```text
Desktop (lg+): Grid 3 colonne, card statiche visibili
Tablet (md): Grid 2 colonne con carousel  
Mobile: Carousel singola card
```

---

## 2. Sezione Video Homepage

### Nuovo file: `src/components/home/HomeVideos.tsx`

**Contenuto**: I 2 video richiesti integrati in card eleganti

**Video da integrare**:
- Video 1: `https://www.youtube.com/embed/LQig3e5SVqk` - Presentazione aziendale
- Video 2: `https://www.youtube.com/embed/sou9JDN6E-E` - Processo/lavori

**Design**:
- Sfondo chiaro (`section-light`)
- Due card video affiancate su desktop, stack verticale su mobile
- Thumbnail YouTube con play button overlay
- Modal per riproduzione video a fullscreen
- Titoli e descrizioni per ogni video

**Struttura**:
```text
Sezione Video
├── Header: "Guarda come lavoriamo"
├── Griglia 2 colonne
│   ├── Video 1: Presentazione I Profili
│   └── Video 2: Il nostro processo
└── CTA: "Prenota il tuo sopralluogo"
```

### Modifica file: `src/pages/HomePage.tsx`
- Importare e aggiungere `HomeVideos` dopo `HomeWhyUs`

---

## 3. Recensioni Scrollanti Homepage

### Nuovo file: `src/components/home/HomeTestimonials.tsx`

**Design**: Carousel orizzontale con le stesse recensioni di Filippo, ottimizzato per homepage

**Caratteristiche**:
- Carousel auto-scroll con Embla
- Card compatte rispetto alla versione Filippo
- 3 card visibili su desktop, 1 su mobile
- Frecce di navigazione eleganti
- Badge "Google Reviews" e stelle

**Dati**: Riutilizzare le stesse 6 recensioni già presenti in `WrittenTestimonialsSection.tsx`

### Modifica file: `src/pages/HomePage.tsx`
- Aggiungere `HomeTestimonials` dopo `HomeGuarantees`

---

## 4. Sezione "Nero su Bianco" - Trasparenza Totale

### Nuovo file: `src/components/home/HomeTransparency.tsx`

**Concept**: Sezione che enfatizza la trasparenza contrattuale di I Profili

**Headline**: "Tutto nero su bianco. Senza brutte sorprese."

**Elementi**:
- 4-6 punti chiave con icone:
  - Preventivo scritto e dettagliato
  - Nessun costo nascosto
  - Tempistiche nel contratto
  - Garanzie firmate
  - Penali per ritardi (a nostro carico)
  - Materiali specificati

**Design**:
- Sfondo scuro (`section-dark`) con bordo accent
- Icone in stile "checklist" o "documento"
- Possibile immagine di un contratto firmato
- CTA: "Leggi le nostre garanzie"

**Struttura visiva**:
```text
┌─────────────────────────────────────────┐
│  "Tutto nero su bianco"                 │
│  Sottotitolo sulla trasparenza          │
├─────────────────────────────────────────┤
│  ✓ Preventivo dettagliato               │
│  ✓ Nessun costo nascosto                │
│  ✓ Tempistiche garantite                │
│  ✓ Penali se non rispettiamo            │
│  ✓ Garanzie scritte                     │
│  ✓ Materiali certificati                │
├─────────────────────────────────────────┤
│  [CTA: Vedi le garanzie complete]       │
└─────────────────────────────────────────┘
```

### Modifica file: `src/pages/HomePage.tsx`
- Aggiungere `HomeTransparency` prima di `HomeGuarantees`

---

## 5. Sezione "Il Tuo Percorso" per Homepage

### Nuovo file: `src/components/home/HomeServiceOverview.tsx`

**Contenuto**: Versione adattata di `ServiceOverviewSection.tsx` per la homepage

**Differenze dalla versione Filippo**:
- Design più compatto (meno altezza)
- Timeline orizzontale su desktop invece che verticale
- Solo le 4 fasi principali visibili, senza espansione dettagliata degli step
- Stesso contenuto testuale (16 step in 4 fasi)

**Struttura**:
```text
Desktop Layout (orizzontale):
┌──────────────────────────────────────────────────────────────┐
│ [FASE 1]────────[FASE 2]────────[FASE 3]────────[FASE 4]     │
│ Consulenza      Proposta        Produzione      Montaggio    │
│ 3 step          4 step          4 step          5 step       │
└──────────────────────────────────────────────────────────────┘

Mobile Layout (verticale compatto):
┌────────────────────┐
│ FASE 1: Consulenza │
│ FASE 2: Proposta   │
│ FASE 3: Produzione │
│ FASE 4: Montaggio  │
└────────────────────┘
```

**Badge finale**: "Tutto Chiaro" come nella versione Filippo

### Modifica file: `src/pages/HomePage.tsx`
- Aggiungere `HomeServiceOverview` dopo `HomeSteps` o prima di `HomeGuarantees`

---

## 6. Riepilogo File da Creare

| File | Descrizione |
|------|-------------|
| `src/components/home/HomeVideos.tsx` | Sezione 2 video YouTube |
| `src/components/home/HomeTestimonials.tsx` | Recensioni scrollanti |
| `src/components/home/HomeTransparency.tsx` | Sezione "Nero su Bianco" |
| `src/components/home/HomeServiceOverview.tsx` | Percorso 16 step compatto |

## 7. File da Modificare

| File | Modifica |
|------|----------|
| `src/components/WrittenTestimonialsSection.tsx` | Ottimizzazione layout desktop |
| `src/pages/HomePage.tsx` | Aggiungere 4 nuove sezioni |

---

## 8. Ordine Sezioni Homepage Finale

1. HomeHeader
2. HomeHero (con slider immagini)
3. HomeStats
4. HomeWhyUs
5. **HomeVideos** (NUOVA - 2 video)
6. HomeProducts
7. HomeSystem
8. HomeServices
9. HomeSteps (processo 3 step semplice)
10. **HomeServiceOverview** (NUOVA - 16 step dettagliati)
11. **HomeTransparency** (NUOVA - nero su bianco)
12. HomeGuarantees
13. **HomeTestimonials** (NUOVA - recensioni scrollanti)
14. HomeFinancing
15. HomeContact
16. Footer

---

## Dettagli Tecnici

### Stile Card Video
```typescript
// Thumbnail con play button overlay
<div className="relative aspect-video rounded-xl overflow-hidden">
  <img src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} />
  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
    <button className="w-16 h-16 bg-primary rounded-full">
      <Play />
    </button>
  </div>
</div>
```

### Carousel Testimonianze Homepage
```typescript
// Auto-scroll con Embla
const [emblaRef] = useEmblaCarousel(
  { loop: true, align: "start" },
  [Autoplay({ delay: 4000 })]
);
```

### Sezione Trasparenza - Checklist
```typescript
const transparencyPoints = [
  { icon: FileText, text: "Preventivo dettagliato" },
  { icon: Euro, text: "Nessun costo nascosto" },
  { icon: Calendar, text: "Tempistiche nel contratto" },
  { icon: ShieldCheck, text: "Garanzie firmate" },
  { icon: AlertCircle, text: "Penali per ritardi a nostro carico" },
  { icon: Award, text: "Materiali certificati Made in Italy" },
];
```

---

## Stima Lavoro

- 4 nuovi file (~500 righe totali)
- 2 file da modificare (~100 righe di modifiche)
- Totale: ~600 righe di codice

