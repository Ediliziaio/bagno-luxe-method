

# Piano: Restyling Hero Homepage + Video Reali + Recensioni Google

## Panoramica

Modifiche richieste:
1. **Hero Homepage**: Sfondo con foto scorrevoli + sfumatura scura, headline istituzionale/elegante, bottoni migliorati
2. **Video pagina Filippo + Homepage**: Aggiungere i 2 video reali YouTube
3. **Recensione video aggiuntiva**: Aggiungere terzo video nella sezione testimonianze della pagina Filippo
4. **Recensioni Google**: Aggiungere recensioni reali estratte da Google

---

## 1. HERO HOMEPAGE - Restyling Completo

### Modifiche a `src/components/home/HomeHero.tsx`

**BACKGROUND**: Aggiungere slider di immagini con Embla Carousel (come nella HeroSection di /filippo)
- Usare le immagini esistenti: `hero-window-slider.jpg`, `window-after-1.jpg`, `window-after-2.jpg`, `window-after-3.jpg`, `portfolio-1.jpg`
- Sfumatura scura verso nero: `bg-gradient-to-b from-[#1D1D1C]/70 via-[#1D1D1C]/85 to-[#1D1D1C]`

**RIMUOVERE**: Badge "Bonus 50% - Ancora per poco" (troppo aggressivo per homepage istituzionale)

**NUOVA HEADLINE** (istituzionale, elegante, cattura attenzione):
```
Titolo: "Serramenti che trasformano la tua casa"
Sottotitolo: "Da oltre 15 anni creiamo comfort, risparmio energetico 
e silenzio per le famiglie lombarde. Scopri perche' 2.500 clienti 
ci hanno scelto."
```

Oppure alternativa piu' evocativa:
```
Titolo: "Il comfort che meriti. La qualita' che dura."
Sottotitolo: "Serramenti in PVC con posa certificata e garanzia 10 anni.
Richiedi una consulenza gratuita e scopri la differenza."
```

**BOTTONI** - Migliorati con stile piu' elegante:
- CTA Primario: `variant="teal"` con testo "Richiedi Consulenza Gratuita"
- CTA Secondario: `variant="outline"` con bordo bianco piu' visibile e testo "Scopri i Nostri Lavori"

**TRUST BADGES**: Mantenere ma spostare in basso con design piu' raffinato

---

## 2. VIDEO YOUTUBE REALI

### A. Homepage - Aggiungere sezione video o integrare nei contenuti

I video da utilizzare:
1. **Video presentazione aziendale**: `https://youtu.be/LQig3e5SVqk`
2. **Video processo/lavori**: `https://youtu.be/sou9JDN6E-E`

**Opzione consigliata**: Creare una nuova sezione `HomeVideo.tsx` con un video hero presentazione dopo la sezione "Chi Siamo" (HomeWhyUs).

### B. Pagina Filippo - HeroSection.tsx

Sostituire il video placeholder con uno dei video reali:
```typescript
// Prima:
const heroVideoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";

// Dopo:
const heroVideoUrl = "https://www.youtube.com/embed/LQig3e5SVqk";
```

### C. Pagina Filippo - VideoTestimonialsSection.tsx

Aggiornare con video reali + aggiungere terzo video testimonianza:

```typescript
const videoTestimonials = [
  {
    id: 1,
    name: "Cliente I Profili",
    location: "Lombardia",
    headline: "La nostra esperienza con I Profili",
    thumbnail: "placeholder", // Estrarre thumbnail da YouTube
    videoUrl: "https://www.youtube.com/embed/sou9JDN6E-E",
    projectType: "Sostituzione serramenti",
    duration: "3:00",
  },
  {
    id: 2,
    name: "Testimonianza Cliente",
    location: "Lombardia", 
    headline: "Perche' abbiamo scelto I Profili",
    videoUrl: "https://www.youtube.com/embed/EugIN-UNM7E",
    projectType: "Finestre PVC",
    duration: "2:30",
  },
];
```

---

## 3. RECENSIONI GOOGLE REALI

### Modifica a `src/components/WrittenTestimonialsSection.tsx`

Poiche' il fetch automatico di Google e' bloccato (captcha), inserire manualmente alcune recensioni reali basate sulla pagina Google Business.

**NOTA**: Dovrai fornirmi il testo esatto delle recensioni Google positive, oppure posso inserire dei placeholder realistici che potrai poi aggiornare.

**Struttura consigliata per ogni recensione**:
```typescript
{
  id: 1,
  name: "Nome Cognome (iniziale puntata)",
  location: "Citta'",
  rating: 5,
  quote: "Testo della recensione...",
  project: "Tipo progetto",
  installDate: "Mese Anno",
  result: "Risultato principale",
  verified: true,
  source: "Google Reviews" // Nuovo campo
}
```

---

## 4. RIEPILOGO FILE DA MODIFICARE

| File | Modifica |
|------|----------|
| `src/components/home/HomeHero.tsx` | Sfondo slider + nuova headline + bottoni |
| `src/components/HeroSection.tsx` | Video YouTube reale |
| `src/components/VideoTestimonialsSection.tsx` | Video testimonianze reali |
| `src/components/WrittenTestimonialsSection.tsx` | Recensioni Google reali |
| `src/pages/HomePage.tsx` | (Opzionale) Aggiungere sezione video |

---

## 5. DETTAGLIO TECNICO HERO

### Codice Background Slider

```typescript
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Immagini per lo slider
import heroWindowSlider from "@/assets/hero-window-slider.jpg";
import windowAfter1 from "@/assets/window-after-1.jpg";
import windowAfter2 from "@/assets/window-after-2.jpg";
import windowAfter3 from "@/assets/window-after-3.jpg";

const sliderImages = [heroWindowSlider, windowAfter1, windowAfter2, windowAfter3];

// Nel componente:
const [emblaRef] = useEmblaCarousel(
  { loop: true },
  [Autoplay({ delay: 5000, stopOnInteraction: false })]
);
```

### Struttura JSX Hero

```typescript
<section className="relative min-h-screen overflow-hidden">
  {/* Background Slider */}
  <div className="absolute inset-0 z-0">
    <div className="overflow-hidden h-full" ref={emblaRef}>
      <div className="flex h-full">
        {sliderImages.map((img, idx) => (
          <div key={idx} className="flex-[0_0_100%] min-w-0 h-full relative">
            <img src={img} className="absolute inset-0 w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
    {/* Gradient overlay - sfumatura verso nero */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#1D1D1C]/60 via-[#1D1D1C]/80 to-[#1D1D1C]" />
  </div>

  {/* Content - posizionato sopra */}
  <div className="relative z-10 ...">
    {/* Contenuto hero */}
  </div>
</section>
```

---

## 6. COPY HEADLINE FINALE

**Proposta headline istituzionale** (elegante ma coinvolgente):

```
[Nessun badge urgenza - design pulito]

Headline: "Serramenti che trasformano la tua casa"

Sottotitolo: "Da oltre 15 anni aiutiamo le famiglie lombarde a vivere 
meglio: piu' caldo d'inverno, piu' fresco d'estate, piu' silenzio ogni giorno.
Scopri perche' oltre 2.500 clienti ci hanno scelto."

CTA Primario: "Richiedi Consulenza Gratuita"
CTA Secondario: "Scopri i Nostri Lavori"

Trust badges (sotto, discreti):
[Garanzia 10 Anni] [Posa Certificata] [Bonus 50%] [Made in Italy]
```

---

## 7. STILE BOTTONI MIGLIORATI

**Primario** - Bianco su teal, elegante:
```typescript
<Button
  size="lg"
  className="bg-white text-primary hover:bg-white/90 font-semibold shadow-xl 
             hover:shadow-2xl transition-all duration-300 rounded-full px-8"
>
  Richiedi Consulenza Gratuita
</Button>
```

**Secondario** - Outline bianco raffinato:
```typescript
<Button
  variant="outline"
  size="lg"
  className="border-2 border-white/50 text-white hover:bg-white/10 
             hover:border-white font-semibold rounded-full px-8"
>
  Scopri i Nostri Lavori
</Button>
```

---

## 8. VIDEO YOUTUBE - FORMATI EMBED

Per YouTube, i formati corretti sono:
- Da `https://youtu.be/LQig3e5SVqk` a `https://www.youtube.com/embed/LQig3e5SVqk`
- Da `https://youtu.be/sou9JDN6E-E` a `https://www.youtube.com/embed/sou9JDN6E-E`
- Da `https://youtu.be/EugIN-UNM7E` a `https://www.youtube.com/embed/EugIN-UNM7E`

---

## Prossimi Passi

1. Implementare le modifiche all'Hero homepage con slider + nuova headline
2. Aggiornare i video nella pagina Filippo
3. Aggiungere video testimonianza extra
4. (Opzionale) Se mi fornisci il testo delle recensioni Google, le inserisco

