
# Piano: Aggiunta Sfondi AI alle Hero Sections

## Panoramica

Aggiungeremo immagini di sfondo generate dall'AI alle prime sezioni (hero) delle seguenti pagine:
- **PosaQualificataPage** - Hero personalizzato con statistiche shock
- **GaranziePage** - Usa componente PageHero
- **ArticoliPage** - Usa componente PageHero  
- **ContattiPage** - Usa componente PageHero

## Strategia di Implementazione

### Approccio 1: Modificare PageHero per supportare immagini di sfondo

Aggiorneremo il componente `PageHero` per accettare una prop opzionale `backgroundImage`:

```typescript
interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  backgroundImage?: string;  // Nuova prop
}
```

### Approccio 2: Generare immagini AI specifiche

Genereremo 4 immagini fotorealistiche pertinenti:

| Pagina | Tema Immagine |
|--------|---------------|
| Posa Qualificata | Operai professionali che installano finestre con strumenti di precisione |
| Garanzie | Contratto con sigillo/timbro, atmosfera di fiducia e sicurezza |
| Articoli | Scrivania con laptop, documenti, finestre moderne sullo sfondo |
| Contatti | Showroom moderno di serramenti con cliente in consulenza |

---

## Modifiche Tecniche

### 1. Componente `src/components/shared/PageHero.tsx`

**Modifiche:**
- Aggiungere prop `backgroundImage?: string`
- Implementare overlay scuro per leggibilità testo
- Adattare colori testo per contrasto su immagine

```typescript
interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  backgroundImage?: string;
}

export const PageHero = ({ title, subtitle, badge, backgroundImage }: PageHeroProps) => {
  const hasBackground = !!backgroundImage;
  
  return (
    <section className={`relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden ${
      hasBackground ? 'min-h-[50vh]' : 'bg-gradient-to-b from-muted/50 to-background'
    }`}>
      {/* Background Image */}
      {hasBackground && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </>
      )}
      
      {/* Content - colori adattati se c'è sfondo */}
      <div className={hasBackground ? 'text-white' : ''}>
        ...
      </div>
    </section>
  );
};
```

### 2. Generazione Immagini AI

Creeremo un edge function per generare le immagini usando Lovable AI (google/gemini-2.5-flash-image) e le salveremo in storage o come asset statici.

**Prompt per ogni immagine:**

**Posa Qualificata:**
> "Professional window installers in white uniforms carefully mounting a modern PVC window frame using precision tools and measuring equipment. Clean construction site, Italian modern home interior, high-end equipment, safety gear, attention to detail, photorealistic, warm natural lighting, professional photography style"

**Garanzie:**
> "Official warranty certificate with golden seal and stamp on elegant wooden desk, fountain pen, modern window visible in background, luxury Italian home office atmosphere, soft natural lighting, photorealistic, professional trust and security feeling"

**Articoli/Blog:**
> "Modern home office desk with laptop showing window design software, architectural blueprints, coffee cup, large bright windows with city view in background, Italian contemporary design, natural daylight, clean minimalist aesthetic, photorealistic"

**Contatti:**
> "Modern Italian window showroom interior, sales consultant helping a couple choose window samples, bright elegant space with displayed PVC windows and doors, professional welcoming atmosphere, natural lighting, photorealistic"

### 3. File da Modificare

| File | Tipo Modifica |
|------|---------------|
| `src/components/shared/PageHero.tsx` | Aggiunta prop backgroundImage + overlay |
| `src/pages/PosaQualificataPage.tsx` | Aggiunta immagine sfondo hero |
| `src/pages/GaranziePage.tsx` | Passaggio immagine a PageHero |
| `src/pages/ArticoliPage.tsx` | Passaggio immagine a PageHero |
| `src/pages/ContattiPage.tsx` | Passaggio immagine a PageHero |
| `src/assets/heroes/` | Nuova cartella per immagini hero generate |

### 4. Esempio Utilizzo nelle Pagine

**GaranziePage.tsx:**
```typescript
import heroGaranzie from "@/assets/heroes/hero-garanzie.jpg";

<PageHero
  badge="Garanzie"
  title="Garanzie Blindate"
  subtitle="Non promettiamo a voce..."
  backgroundImage={heroGaranzie}
/>
```

**PosaQualificataPage.tsx:**
```typescript
// Hero personalizzato - aggiungere immagine direttamente
<section className="relative py-20 md:py-32 overflow-hidden">
  {/* Background Image */}
  <div 
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${heroPosaQualificata})` }}
  />
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
  
  {/* Contenuto esistente con colori adattati */}
</section>
```

---

## Considerazioni Tecniche

### Performance
- Le immagini generate saranno ottimizzate (WebP, compressione)
- Lazy loading per le immagini hero sotto il fold
- Dimensioni responsive con srcset se necessario

### Accessibilità
- Overlay scuro sufficiente per contrasto WCAG AA
- Alt text appropriato per le immagini
- Testo bianco su sfondo scuro per leggibilità

### Responsive
- `bg-cover` + `bg-center` per adattamento automatico
- Altezza minima `min-h-[50vh]` su desktop, `min-h-[40vh]` su mobile

---

## Workflow Esecuzione

1. **Generare le 4 immagini** usando Lovable AI
2. **Salvare le immagini** in `src/assets/heroes/`
3. **Aggiornare PageHero.tsx** con supporto backgroundImage
4. **Aggiornare PosaQualificataPage.tsx** con sfondo nel hero custom
5. **Aggiornare le altre 3 pagine** passando le immagini a PageHero
6. **Testare** la responsività e il contrasto su mobile/desktop

---

## Risultato Atteso

- Hero sections visivamente impattanti e professionali
- Immagini coerenti con il brand I Profili (serramenti, professionalità, fiducia)
- Testo sempre leggibile grazie all'overlay gradient
- Esperienza visiva migliorata per aumentare conversioni
