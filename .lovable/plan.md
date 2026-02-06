
# Piano: Miglioramenti Chi Siamo e Posa Qualificata

## Panoramica

Questo piano copre tre modifiche:
1. Rimozione della sezione "I Nostri Lavori" dalla pagina Chi Siamo
2. Sostituzione dell'immagine hero della Posa Qualificata con una stock professionale
3. Ottimizzazione del caricamento delle immagini per tutto il sito

---

## 1. Rimozione Sezione "I Nostri Lavori" (Chi Siamo)

### File: `src/pages/ChiSiamoPage.tsx`

**Modifiche:**
- Rimuovere le righe 280-323 (intera sezione Portfolio Gallery)
- Rimuovere gli import non più necessari alle righe 13-18:
  - `showroomFinestre`
  - `finestraLegno`
  - `finestraAntracite`
  - `portfolio1`
  - `portfolio2`
  - `portfolio3`

La pagina passerà direttamente dalla sezione Stats alla sezione Territorio.

---

## 2. Nuova Immagine Stock per Posa Qualificata

### Fonte immagine
Useremo un'immagine stock gratuita da Pexels rappresentante lavoratori edili professionisti in cantiere:
- **URL**: `https://images.pexels.com/photos/14367421/pexels-photo-14367421.jpeg`
- **Soggetto**: Operai edili professionisti al lavoro con attrezzatura di sicurezza

### File: `src/pages/PosaQualificataPage.tsx`

**Modifiche:**
- Rimuovere l'import dell'immagine AI generata (riga 28)
- Usare direttamente l'URL dell'immagine stock oppure scaricarla come asset locale

**Opzione A - URL esterno (piu semplice):**
```typescript
// Rimuovere:
import heroPosaQualificata from "@/assets/heroes/hero-posa-qualificata.jpg";

// Usare:
const heroPosaQualificata = "https://images.pexels.com/photos/14367421/pexels-photo-14367421.jpeg?auto=compress&cs=tinysrgb&w=1920";
```

**Opzione B - Asset locale (migliore performance):**
Scaricare l'immagine e salvarla in `src/assets/heroes/hero-posa-qualificata-new.jpg`

---

## 3. Ottimizzazione Caricamento Immagini

### Approccio tecnico

Creeremo un componente riutilizzabile `OptimizedImage` per gestire:
- Lazy loading nativo
- Decodifica asincrona
- Skeleton placeholder durante il caricamento
- Transizione fade-in quando l'immagine carica

### Nuovo componente: `src/components/ui/optimized-image.tsx`

```typescript
interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean; // Per immagini above-the-fold
}
```

**Caratteristiche:**
- `loading="lazy"` per immagini non prioritarie
- `loading="eager"` + `fetchPriority="high"` per hero images
- `decoding="async"` per non bloccare il thread principale
- Skeleton animato durante il caricamento
- Fade-in CSS quando l'immagine e pronta

### Modifiche ai file esistenti

**File da aggiornare:**

| File | Modifiche |
|------|-----------|
| `src/pages/ChiSiamoPage.tsx` | Usare OptimizedImage per tutte le img |
| `src/pages/PosaQualificataPage.tsx` | Usare OptimizedImage per background |
| `src/components/shared/PageHero.tsx` | Aggiungere lazy loading all'immagine di sfondo |
| Altre pagine con immagini | Applicare OptimizedImage dove necessario |

### Implementazione alternativa (senza nuovo componente)

Se preferisci non creare un componente separato, aggiungeremo attributi di ottimizzazione direttamente agli elementi `<img>`:

```html
<!-- Per immagini prioritarie (hero) -->
<img
  src={image}
  alt="descrizione"
  loading="eager"
  decoding="async"
  fetchPriority="high"
  className="..."
/>

<!-- Per immagini secondarie -->
<img
  src={image}
  alt="descrizione"
  loading="lazy"
  decoding="async"
  className="..."
/>
```

---

## Riepilogo File da Modificare

| File | Azione |
|------|--------|
| `src/pages/ChiSiamoPage.tsx` | Rimuovere sezione Portfolio + ottimizzare immagini |
| `src/pages/PosaQualificataPage.tsx` | Cambiare immagine hero + ottimizzare |
| `src/components/shared/PageHero.tsx` | Aggiungere loading lazy per background |
| `src/components/ui/optimized-image.tsx` | Nuovo componente (opzionale) |

---

## Risultato Atteso

- **Chi Siamo**: Pagina piu snella, senza sezione "I Nostri Lavori"
- **Posa Qualificata**: Hero con immagine stock professionale di operai al lavoro
- **Performance**: Caricamento immagini piu veloce e pulito con lazy loading e skeleton
- **UX**: Transizioni smooth quando le immagini vengono caricate
