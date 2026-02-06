
# Piano: Sostituzione Immagini Prodotti

## Panoramica

Sostituire le immagini di 4 prodotti (Porta Blindata, Tapparelle, Zanzariere, Cassonetti) con le nuove immagini caricate dall'utente. Le modifiche riguarderanno sia i dati prodotto che la griglia di visualizzazione.

---

## Step 1: Copiare le immagini nella cartella assets

Copiare le 4 immagini caricate nella cartella `src/assets/products/`:

| Immagine Originale | Destinazione |
|--------------------|--------------|
| `porta_blindata.jpg` | `src/assets/products/porta-blindata-hero-new.jpg` |
| `tapparelle.jpg` | `src/assets/products/tapparelle-hero.jpg` |
| `zanzariera-a-scorrimento-laterale-uai-711x711.jpg` | `src/assets/products/zanzariere-hero-new.jpg` |
| `cassonetto_pvc-the-first-i_nobili_02.jpg` | `src/assets/products/cassonetti-hero.jpg` |

---

## Step 2: Modificare src/data/products.ts

### Aggiunta import (dopo riga 16)
```typescript
import tapparelleHero from '@/assets/products/tapparelle-hero.jpg';
import cassonettiHero from '@/assets/products/cassonetti-hero.jpg';
```

### Prodotto Tapparelle (righe 332-336)
| Prima | Dopo |
|-------|------|
| `heroImage: windowAfter1` | `heroImage: tapparelleHero` |
| `gallery: [windowAfter1, windowAfter2, windowAfter3]` | `gallery: [tapparelleHero, windowAfter2, windowAfter3]` |

### Prodotto Zanzariere (righe 381-385)
Sostituire i riferimenti alla vecchia immagine con la nuova

### Prodotto Cassonetti (righe 429-433)
| Prima | Dopo |
|-------|------|
| `heroImage: domusProfileSection` | `heroImage: cassonettiHero` |
| `gallery: [domusProfileSection, windowDetail, heroWindowSlider]` | `gallery: [cassonettiHero, windowDetail, heroWindowSlider]` |

### Prodotto Porta Blindata (righe 522-526)
Sostituire i riferimenti alla vecchia immagine con la nuova

---

## Step 3: Modificare src/components/products/ProductGrid.tsx

### Aggiunta import (dopo riga 17)
```typescript
import tapparelleHero from '@/assets/products/tapparelle-hero.jpg';
import cassonettiHero from '@/assets/products/cassonetti-hero.jpg';
import zanzariereHeroNew from '@/assets/products/zanzariere-hero-new.jpg';
import portaBlindataHeroNew from '@/assets/products/porta-blindata-hero-new.jpg';
```

### Categoria Oscuranti (righe 46-49)
| Prodotto | Prima | Dopo |
|----------|-------|------|
| Tapparelle | `image: windowAfter1` | `image: tapparelleHero` |
| Zanzariere | `image: zanzariereHero` | `image: zanzariereHeroNew` |
| Cassonetti | `image: domusProfileSection` | `image: cassonettiHero` |

### Categoria Porte (riga 56)
| Prodotto | Prima | Dopo |
|----------|-------|------|
| Porta Blindata | `image: portaBlindataHero` | `image: portaBlindataHeroNew` |

---

## Riepilogo Modifiche

| Prodotto | File Modificati | Tipo Modifica |
|----------|-----------------|---------------|
| Porta Blindata | `products.ts`, `ProductGrid.tsx` | heroImage, gallery, image |
| Tapparelle | `products.ts`, `ProductGrid.tsx` | heroImage, gallery, image |
| Zanzariere | `products.ts`, `ProductGrid.tsx` | heroImage, gallery, image |
| Cassonetti | `products.ts`, `ProductGrid.tsx` | heroImage, gallery, image |

---

## Pagine Interessate

Le modifiche saranno visibili su:
- `/prodotti` - Griglia catalogo completo
- `/prodotti/porta-blindata` - Pagina dettaglio
- `/prodotti/tapparelle` - Pagina dettaglio
- `/prodotti/zanzariere` - Pagina dettaglio
- `/prodotti/cassonetti` - Pagina dettaglio
- Tutte le pagine con prodotti correlati che mostrano queste immagini

---

## Risultato Atteso

Tutte le 4 immagini saranno sostituite con le nuove immagini caricate, sia nella griglia prodotti che nelle pagine di dettaglio, mantenendo coerenza visiva in tutto il sito.
