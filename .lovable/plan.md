
# Piano: Correzione Immagini Prodotti che Non si Caricano

## Problema Identificato

Le immagini di 7 prodotti non vengono caricate perche usano URL esterni che sono bloccati (protezione hotlink):

| Prodotto | URL Bloccato |
|----------|--------------|
| Domus | `i-profili.it/wp-content/...` |
| Lumier | `i-profili.it/wp-content/...` |
| Idole | `i-profili.it/wp-content/...` |
| Tempra | `i-profili.it/wp-content/...` |
| Skywood | `i-profili.it/wp-content/...` |
| Tapparelle | `sunsystemgroupsrl.it/...` |
| Cassonetti | `italinfissi.it/...` |

I prodotti con immagini locali (Persiane, Zanzariere, Porte) funzionano correttamente.

---

## Soluzione

Utilizzeremo le immagini locali esistenti in `src/assets/` per sostituire gli URL esterni. Ecco la mappatura proposta:

| Prodotto | Nuova Immagine |
|----------|----------------|
| **Domus** | `serramenti-pvc-bianco.jpg` (finestra PVC bianca classica) |
| **Lumier** | `serramenti-scorrevole-nero.webp` (profili sottili, molta luce) |
| **Idole** | `serramenti-moderni-nero.webp` (estetica moderna alluminio) |
| **Tempra** | `serramenti-pvc-grigio.jpg` (alluminio grigio) |
| **Skywood** | `hero-window.jpg` (finestre eleganti) |
| **Tapparelle** | `window-after-1.jpg` (finestra con tapparelle visibili) |
| **Cassonetti** | `domus-profile-section.jpg` (dettaglio profilo/cassonetto) |

---

## Modifiche Tecniche

### File: `src/data/products.ts`

1. **Aggiungere import** per tutte le immagini locali necessarie (linee 1-10):
```typescript
import serramentiPvcBianco from '@/assets/serramenti-pvc-bianco.jpg';
import serramentiScorrevoloNero from '@/assets/serramenti-scorrevole-nero.webp';
import serramentiModerniNero from '@/assets/serramenti-moderni-nero.webp';
import serramentiPvcGrigio from '@/assets/serramenti-pvc-grigio.jpg';
import heroWindow from '@/assets/hero-window.jpg';
import windowAfter1 from '@/assets/window-after-1.jpg';
import domusProfileSection from '@/assets/domus-profile-section.jpg';
```

2. **Sostituire gli URL** per ogni prodotto:
   - **Domus** (riga 35): `heroImage: serramentiPvcBianco`
   - **Lumier** (riga 83): `heroImage: serramentiScorrevoloNero`
   - **Idole** (riga 131): `heroImage: serramentiModerniNero`
   - **Tempra/Alum** (riga 177): `heroImage: serramentiPvcGrigio`
   - **Skywood** (riga 222): `heroImage: heroWindow`
   - **Tapparelle** (riga 316): `heroImage: windowAfter1`
   - **Cassonetti** (riga 413): `heroImage: domusProfileSection`

3. **Aggiornare anche le gallery** con le stesse immagini locali o altre disponibili

---

## Benefici

- Tutte le immagini saranno caricate localmente (nessun blocco CORS/hotlink)
- Build Vite ottimizzera le immagini automaticamente
- Caricamento piu veloce (asset dal bundle)
- Funziona sia in sviluppo che in produzione

---

## Nota

Le immagini locali disponibili sono generiche ma rappresentative. In futuro, si potrebbero caricare immagini specifiche per ogni prodotto nella cartella `src/assets/products/`.
