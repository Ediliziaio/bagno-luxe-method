

# Piano: Immagini Professionali + Hero con Sfondo Scuro e Slider

## Panoramica
Generare 4 immagini AI professionali e ridisegnare la HeroSection con sfondo scuro (#1D1D1C) e uno slider/carousel di immagini di finestre.

---

## 1. Immagini AI da Generare

### Immagine 1: Posatore Certificato
**File:** `src/assets/certified-installer.jpg`
**Uso:** `DecisionCriteriaSection.tsx` (al posto di `window-detail.jpg`)
**Prompt AI:** Operaio professionista italiano che installa una finestra moderna in PVC bianco. Indossa divisa da lavoro blu/grigia pulita con badge/patentino visibile. Ambiente luminoso, casa italiana moderna. Inquadratura professionale, qualita fotografica alta.

### Immagine 2: Sezione Profilo DOMUS
**File:** `src/assets/domus-profile-section.jpg`
**Uso:** `SystemSolutionSection.tsx`
**Prompt AI:** Sezione tecnica di un profilo finestra in PVC bianco con 3 guarnizioni visibili e camera d'aria interna. Vista in sezione trasversale dettagliata che mostra l'interno del telaio, acciaio di rinforzo, e le guarnizioni colorate. Stile tecnico/ingegneristico su sfondo neutro.

### Immagine 3: Contratto Garanzia
**File:** `src/assets/guarantee-contract.jpg`
**Uso:** `GuaranteesDetailedSection.tsx`
**Prompt AI:** Documento contratto professionale italiano su scrivania in legno con timbro aziendale rotondo blu, penna stilografica, e logo discreto. Atmosfera business affidabile, luce naturale morbida. Il documento mostra "GARANZIA A VITA" in evidenza.

### Immagine 4: Hero Window Slider
**File:** `src/assets/hero-window-slider.jpg`
**Uso:** `HeroSection.tsx` (background)
**Prompt AI:** Finestra moderna in PVC bianco vista dall'interno di una casa italiana elegante. Luce naturale che entra, vista su giardino/citta. Atmosfera calda e accogliente, interni moderni. Alta qualita fotografica, adatta come hero background.

---

## 2. Modifica HeroSection - Sfondo Scuro con Slider

### Cambiamenti Strutturali:

**Da:**
- `section-light` (sfondo chiaro)
- Nessuna immagine di background
- Card bianche con bordo superiore teal

**A:**
- `section-dark` (sfondo #1D1D1C)
- Slider/carousel di immagini finestre come background con overlay scuro
- Card glass-card scure con glow effect

### Layout Nuovo:
```
+------------------------------------------+
| SLIDER IMMAGINI FINESTRE (background)    |
| [Overlay scuro semi-trasparente]         |
|                                          |
|   [Badge: HAI GIA' IL PREVENTIVO]        |
|   [Headline bianca con accent teal]      |
|   [Subtitle grigio chiaro]               |
|                                          |
|   +------+ +------+ +------+ +------+    |
|   |€3.600| | 0 ore| | +15% | | €0   |    |
|   | Card | | Card | | Card | | Card |    |
|   +------+ +------+ +------+ +------+    |
|                                          |
|   [Indicatori slider: o o o o]           |
+------------------------------------------+
```

### Slider Tecnico:
- Usare `embla-carousel-react` (gia installato)
- Auto-play ogni 5 secondi
- Fade transition tra immagini
- 4 immagini di finestre (riuso assets esistenti + nuova hero)
- Indicatori puntini in basso

### Stile Card Aggiornato:
- `glass-card` invece di `light-card`
- Bordo `border-primary/30`
- Testo bianco/grigio chiaro
- Hover con glow effect teal

---

## 3. File da Modificare

| File | Azione |
|------|--------|
| `HeroSection.tsx` | Riscrittura completa con slider e dark theme |
| `DecisionCriteriaSection.tsx` | Sostituire import immagine posatore |
| `SystemSolutionSection.tsx` | Aggiungere immagine profilo DOMUS |
| `GuaranteesDetailedSection.tsx` | Aggiungere immagine contratto |

---

## 4. Immagini Slider Hero

Riutilizzare assets esistenti:
- `window-after-1.jpg`
- `window-after-2.jpg`
- `window-after-3.jpg`
- `hero-window-slider.jpg` (nuova generata)

---

## 5. Codice HeroSection Aggiornato (Schema)

```text
Imports:
- embla-carousel-react
- embla-carousel-autoplay
- 4 immagini finestre

Componente:
1. Carousel container con immagini fullscreen
2. Overlay gradient scuro (from-background/90)
3. Contenuto centrato sopra:
   - Badge animato
   - Headline bianca con span teal
   - Subtitle grigio
   - 4 glass-card con numeri

Autoplay: 5s, loop infinito
Indicatori: puntini bianchi cliccabili
```

---

## 6. Stile Card Numeri (Dark Version)

```text
Attuale (light):
- bg-white border-gray-100
- text-gray-900
- border-t-4 border-t-primary

Nuovo (dark):
- glass-card (bg-card/80 backdrop-blur)
- text-foreground (bianco)
- border border-primary/30
- hover:border-primary/60
- teal-glow-subtle on hover
```

---

## Riepilogo Deliverables

1. 4 immagini AI generate
2. HeroSection completamente ridisegnata dark + slider
3. 3 sezioni aggiornate con nuove immagini

