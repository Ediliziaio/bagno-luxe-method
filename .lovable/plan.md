
# Piano: Aggiornamento Immagini Prodotti Lumier, Idole, Skywood e Tempra

## Panoramica

Sostituire le immagini attuali dei 4 prodotti con le nuove immagini caricate:
- **Lumier.webp** → Lumier
- **idole.webp** → Idole  
- **Skywood.jpg** → Skywood (legno-alluminio)
- **Tembra.webp** → Tempra (alum)

Le immagini verranno utilizzate automaticamente in:
- Homepage (sezione prodotti)
- Pagina catalogo prodotti (/prodotti)
- Pagine dettaglio singoli prodotti (/prodotti/{id})
- Gallerie dei prodotti

---

## Fase 1: Copia Immagini nel Progetto

Copiare le 4 immagini nella cartella `src/assets/`:

| File Caricato | Destinazione |
|---------------|--------------|
| `Lumier.webp` | `src/assets/lumier-hero.webp` |
| `idole.webp` | `src/assets/idole-hero.webp` |
| `Skywood.jpg` | `src/assets/skywood-hero.jpg` |
| `Tembra.webp` | `src/assets/tempra-hero.webp` |

---

## Fase 2: Aggiornamento File Dati Prodotti

### File: `src/data/products.ts`

**Nuovi import da aggiungere:**
```typescript
import lumierHero from '@/assets/lumier-hero.webp';
import idoleHero from '@/assets/idole-hero.webp';
import skywoodHero from '@/assets/skywood-hero.jpg';
import tempraHero from '@/assets/tempra-hero.webp';
```

**Modifiche alle heroImage:**

| Prodotto | Prima | Dopo |
|----------|-------|------|
| Lumier (riga 96) | `serramentiScorrevoloNero` | `lumierHero` |
| Idole (riga 142) | `serramentiModerniNero` | `idoleHero` |
| Tempra/Alum (riga 187) | `serramentiPvcGrigio` | `tempraHero` |
| Skywood (riga 232) | `heroWindow` | `skywoodHero` |

**Aggiornamento gallerie:**
Ogni prodotto avra la nuova immagine come prima della galleria.

---

## Fase 3: Aggiornamento Griglia Prodotti

### File: `src/components/products/ProductGrid.tsx`

**Nuovi import:**
```typescript
import lumierHero from '@/assets/lumier-hero.webp';
import idoleHero from '@/assets/idole-hero.webp';
import skywoodHero from '@/assets/skywood-hero.jpg';
import tempraHero from '@/assets/tempra-hero.webp';
```

**Modifiche alle immagini nella griglia:**

| Prodotto | Prima | Dopo |
|----------|-------|------|
| Lumier (riga 37) | `serramentiScorrevoloNero` | `lumierHero` |
| Idole (riga 38) | `serramentiModerniNero` | `idoleHero` |
| Tempra (riga 39) | `serramentiPvcGrigio` | `tempraHero` |
| Skywood (riga 40) | `heroWindow` | `skywoodHero` |

---

## Riepilogo File da Modificare

| File | Tipo Modifica |
|------|---------------|
| `src/assets/lumier-hero.webp` | Nuovo file (copia) |
| `src/assets/idole-hero.webp` | Nuovo file (copia) |
| `src/assets/skywood-hero.jpg` | Nuovo file (copia) |
| `src/assets/tempra-hero.webp` | Nuovo file (copia) |
| `src/data/products.ts` | Aggiornamento import e heroImage |
| `src/components/products/ProductGrid.tsx` | Aggiornamento import e immagini |

---

## Propagazione Automatica

Grazie all'architettura centralizzata, le nuove immagini appariranno automaticamente in:

- **Homepage**: Sezione "I Nostri Prodotti" (usa `productData` da `products.ts`)
- **Pagina Catalogo**: Griglia con filtri per categoria
- **Pagine Dettaglio**: Hero e galleria di ogni prodotto
- **Prodotti Correlati**: Miniature nei suggerimenti

---

## Risultato Atteso

- Le 4 immagini caricate sostituiranno le vecchie in tutto il sito
- Il caricamento sara ottimizzato grazie al bundle di Vite
- I formati WebP garantiranno migliori performance
