
# Piano: Sostituzione Foto Hero Slider e Sezione Servizi

## Immagini Caricate dall'Utente

L'utente ha fornito 4 foto professionali di serramenti moderni:

| File | Descrizione |
|------|-------------|
| Serramenti-in-PVC.jpg | Porte-finestre grigie con vista mare, cucina moderna |
| ms-slide-sistemi-scorrevoli-oknoplast-finestre-alluminio-design-1024x633.webp | Scorrevole nero minimalista, soggiorno rustico |
| serramenti-moderni-oknoplast-tecnologia-design.webp | Porte-finestre nere, soggiorno moderno con piscina |
| serramenti-in-pvc-monza-brianza_1.jpg | Porte-finestre bianche, soggiorno elegante |

---

## Modifiche Previste

### 1. Copiare le Immagini nel Progetto

Copiare le 4 immagini nella cartella `src/assets/`:
- `serramenti-pvc-grigio.jpg` (Serramenti-in-PVC.jpg)
- `serramenti-scorrevole-nero.jpg` (ms-slide...)
- `serramenti-moderni-nero.jpg` (serramenti-moderni...)
- `serramenti-pvc-bianco.jpg` (serramenti-in-pvc-monza...)

---

### 2. Hero Slider - Homepage (`src/components/home/HomeHero.tsx`)

**Stato attuale** (righe 7-14):
```typescript
import heroWindowSlider from "@/assets/hero-window-slider.jpg";
import windowAfter1 from "@/assets/window-after-1.jpg";
import windowAfter2 from "@/assets/window-after-2.jpg";
import windowAfter3 from "@/assets/window-after-3.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";

const sliderImages = [heroWindowSlider, windowAfter1, windowAfter2, windowAfter3, portfolio1];
```

**Nuovo stato**:
```typescript
import serramentoPvcGrigio from "@/assets/serramenti-pvc-grigio.jpg";
import serramentoScorrevoloNero from "@/assets/serramenti-scorrevole-nero.jpg";
import serramentoModernoNero from "@/assets/serramenti-moderni-nero.jpg";
import serramentoPvcBianco from "@/assets/serramenti-pvc-bianco.jpg";

const sliderImages = [
  serramentoPvcGrigio,
  serramentoScorrevoloNero,
  serramentoModernoNero,
  serramentoPvcBianco
];
```

---

### 3. Sezione Servizi - Homepage (`src/components/home/HomeServices.tsx`)

**Stato attuale** (riga 4):
```typescript
import homeWindows from "@/assets/home-windows.jpg";
```

**Nuovo stato**:
```typescript
import serramentoPvcBianco from "@/assets/serramenti-pvc-bianco.jpg";
```

E aggiornare il riferimento nell'immagine (riga 31):
```typescript
src={serramentoPvcBianco}
```

L'immagine con serramenti bianchi e elegante soggiorno e perfetta per la sezione "Finestre, porte-finestre e portoncini per la tua casa".

---

## Riepilogo File Modificati

| File | Azione |
|------|--------|
| `src/assets/serramenti-pvc-grigio.jpg` | Copiare nuova immagine |
| `src/assets/serramenti-scorrevole-nero.jpg` | Copiare nuova immagine |
| `src/assets/serramenti-moderni-nero.jpg` | Copiare nuova immagine |
| `src/assets/serramenti-pvc-bianco.jpg` | Copiare nuova immagine |
| `src/components/home/HomeHero.tsx` | Aggiornare imports e sliderImages |
| `src/components/home/HomeServices.tsx` | Aggiornare import e src immagine |

---

## Risultato Atteso

- **Hero Homepage**: Slider con 4 nuove foto professionali di serramenti moderni che scorrono automaticamente
- **Sezione Servizi**: Immagine elegante di serramenti bianchi che rappresenta meglio il target B2C residenziale
