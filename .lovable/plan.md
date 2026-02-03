

# Piano: Video Hero + Miglioramenti Grafici Mobile

## Panoramica
Aggiungere un video hero dopo l'headline principale e migliorare significativamente l'aspetto grafico della sezione, con focus particolare sulla responsivita' mobile.

---

## Modifiche Principali

### 1. AGGIUNTA VIDEO HERO

**Posizione:** Subito dopo l'headline principale ("Prenditi 5 minuti per non sbagliarlo")

**Struttura del video:**
- Thumbnail placeholder (immagine che l'utente potra' sostituire)
- Bottone Play centrale grande con animazione pulse
- Modal fullscreen per la riproduzione (riutilizzo logica VideoTestimonialsSection)
- URL video YouTube placeholder da sostituire

**Design:**
- Card con bordo glow teal
- Aspect ratio 16:9
- Overlay scuro con icona Play centrale
- Badge "Guarda il video" o durata
- Hover: zoom leggero sulla thumbnail

---

### 2. MIGLIORAMENTI GRAFICI GENERALI

**Badge superiore:**
- Piu' piccolo su mobile (text-xs invece di text-sm)
- Padding ridotto su mobile

**Headline:**
- Dimensioni scalate meglio per mobile (text-xl per schermi piccoli)
- Interlinea aumentata per leggibilita'

**Sottotitolo:**
- Font size ridotto su mobile (text-base)
- Padding laterale aumentato

---

### 3. MIGLIORAMENTI SPECIFICI MOBILE

**Spaziature:**
- Margini verticali ridotti tra sezioni (mb-6 invece di mb-10 su mobile)
- Padding top/bottom ottimizzato

**Copy narrativo:**
- Font piu' piccolo su mobile (text-sm)
- Interlinea aumentata

**Lista punti:**
- Icone leggermente piu' piccole
- Gap ridotto tra elementi

**4 Blocchi contrasto:**
- Layout 1 colonna su mobile (non 2)
- Card piu' compatte con padding ridotto
- Icone piu' piccole su mobile (w-10 h-10)
- Testo ridotto (text-xs per fear/solution)

**Scroll indicator:**
- Piu' prominente su mobile
- Margine superiore ridotto

---

## Struttura Visiva Aggiornata

```text
+--------------------------------------------------+
| [SLIDER BACKGROUND + OVERLAY]                    |
|                                                  |
|   [Badge: piccolo su mobile]                     |
|                                                  |
|   Stai per fare un investimento                  |
|   IMPORTANTE PER LA TUA CASA...                  |
|   (font scalato per mobile)                      |
|                                                  |
|   +------------------------------------------+   |
|   |                                          |   |
|   |     [VIDEO THUMBNAIL]                    |   |
|   |           ▶ (Play button)                |   |
|   |                                          |   |
|   +------------------------------------------+   |
|   "Guarda il video" - 3:45                       |
|                                                  |
|   "Le finestre le vedrai ogni giorno..."         |
|                                                  |
|   [Copy narrativo - compatto su mobile]          |
|                                                  |
|   Questa pagina ti mostra:                       |
|   ✓ Punto 1                                      |
|   ✓ Punto 2...                                   |
|                                                  |
|   [4 BLOCCHI - 1 colonna su mobile]              |
|   +--------+                                     |
|   | Card 1 |                                     |
|   +--------+                                     |
|   +--------+                                     |
|   | Card 2 |                                     |
|   +--------+                                     |
|   ...                                            |
|                                                  |
|              ↓ Continua a leggere                |
+--------------------------------------------------+
```

---

## Dettagli Tecnici

### Nuovo Stato per Video Modal

```text
const [showVideoModal, setShowVideoModal] = useState(false);
const heroVideoUrl = "https://www.youtube.com/embed/PLACEHOLDER";
const heroVideoThumbnail = "/placeholder.svg"; // Sostituire
```

### Componente Video Card

```text
<motion.div className="relative max-w-2xl mx-auto mb-8 md:mb-12">
  <div 
    className="relative aspect-video rounded-2xl overflow-hidden 
               border-2 border-primary/30 cursor-pointer group
               hover:border-primary/60 transition-all duration-300
               shadow-[0_0_30px_rgba(8,103,129,0.15)]"
    onClick={() => setShowVideoModal(true)}
  >
    <img src={thumbnail} className="..." />
    <div className="absolute inset-0 bg-black/50 ...">
      <div className="play-button animate-pulse-glow ...">
        <Play className="..." />
      </div>
    </div>
    <div className="badge bottom-right">Guarda il video</div>
  </div>
</motion.div>
```

### Classi Responsive Aggiornate

**Headline:**
```text
text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
```

**Margini sezioni:**
```text
mb-6 md:mb-10
```

**Grid blocchi contrasto:**
```text
grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6
```

**Card padding:**
```text
p-4 md:p-6
```

---

## Riuso del Modal

Riutilizzo della logica VideoModal gia' presente in VideoTestimonialsSection:
- Stesso design (fullscreen con backdrop blur)
- Stesse animazioni
- Autoplay quando si apre

---

## File da Modificare

| File | Azione |
|------|--------|
| `src/components/HeroSection.tsx` | MODIFICARE - Aggiungere video + migliorare responsive |

---

## Breakpoint Ottimizzati

| Elemento | < 640px | 640-768px | 768-1024px | > 1024px |
|----------|---------|-----------|------------|----------|
| Headline | text-xl | text-2xl | text-3xl | text-4xl+ |
| Video card | full width | max-w-lg | max-w-xl | max-w-2xl |
| Blocchi | 1 col | 2 col | 2 col | 4 col |
| Margini | 6 | 8 | 10 | 12 |
| Card padding | p-4 | p-5 | p-6 | p-6 |

---

## Riepilogo Deliverables

- **1 file** da modificare: `HeroSection.tsx`
- **Nuovo elemento**: Video card con modal
- **Miglioramenti**: Responsive ottimizzato per mobile
- **Placeholder**: Video URL e thumbnail da sostituire
- **Lunghezza stimata**: +60 righe di codice

