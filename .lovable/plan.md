
# Piano: Rimozione Sezioni e Aggiornamento Prodotti Homepage

## Panoramica delle Modifiche

Questo piano prevede tre interventi:
1. Rimuovere la sezione "I Nostri Standard di Qualità" dalla pagina Posa Qualificata
2. Rimuovere la sezione "Qualità che Puoi Vedere e Toccare" dalla pagina Garanzie  
3. Aggiornare la sezione "I Nostri Prodotti" nella Homepage con i prodotti del catalogo e link alle pagine dedicate

---

## 1. Rimozione da Posa Qualificata

### File: `src/pages/PosaQualificataPage.tsx`

**Sezione da rimuovere** (righe 514-542):
La galleria "I Nostri Standard di Qualità" che mostra 3 foto dello showroom.

**Azione**: Eliminare il blocco motion.div contenente:
- Titolo "I Nostri Standard di Qualità"
- Griglia con 3 immagini (finestraLegno, finestraAntracite, showroomFinestre)

**Pulizia imports**: Rimuovere le importazioni inutilizzate:
- `finestraLegno`
- `finestraAntracite`  
- `showroomFinestre`

---

## 2. Rimozione da Garanzie

### File: `src/pages/GaranziePage.tsx`

**Sezione da rimuovere** (righe 156-205):
L'intera sezione "Quality Gallery Section" che include:
- Badge "Qualità Visibile"
- Titolo "Qualità che Puoi Vedere e Toccare"
- Sottotitolo "Vieni nel nostro showroom a Busto Arsizio..."
- Griglia 3 colonne con foto

**Azione**: Eliminare completamente la sezione `<section className="py-16 md:py-24 bg-background">` (righe 156-205)

**Pulizia imports**: Rimuovere le importazioni inutilizzate:
- `finestraLegno`
- `finestraAntracite`
- `persianaBianca`
- `Eye` (icona)

---

## 3. Aggiornamento Prodotti Homepage

### File: `src/components/home/HomeProducts.tsx`

**Stato attuale**:
- 6 prodotti generici (Finestre, Porte-Finestre, Portoncini, Tapparelle, Zanzariere, Cassonetti)
- Cliccando si scrolla alla sezione contatti
- Immagini generiche (window-after, after-bathroom)

**Nuovo stato**:
- Prodotti allineati al catalogo reale (`src/data/products.ts`)
- Link alle pagine prodotto dedicate (`/prodotti/{id}`)
- Immagini dal catalogo prodotti

**Prodotti da mostrare** (11 totali, seleziono i 6 principali):

| Prodotto | ID Route | Immagine |
|----------|----------|----------|
| Domus | /prodotti/domus | heroImage da products.ts |
| Lumier | /prodotti/lumier | heroImage da products.ts |
| Idole | /prodotti/idole | heroImage da products.ts |
| Tempra (Alum) | /prodotti/alum | heroImage da products.ts |
| Skywood | /prodotti/legno-alluminio | heroImage da products.ts |
| Persiane | /prodotti/persiane | heroImage da products.ts |

**Modifiche tecniche**:

1. Importare `Link` da react-router-dom
2. Importare i dati prodotti da `@/data/products`
3. Sostituire l'array `products` con i dati reali
4. Cambiare `onClick={scrollToContact}` con `<Link to="/prodotti/{id}">`
5. Aggiungere hover text "Scopri di più" invece di "Richiedi info"
6. Rimuovere le importazioni delle immagini generiche non più usate

**Struttura codice aggiornata**:

```typescript
import { Link } from "react-router-dom";
import { products as productData } from "@/data/products";

const featuredProducts = [
  { id: "domus", ...productData.domus },
  { id: "lumier", ...productData.lumier },
  { id: "idole", ...productData.idole },
  { id: "alum", ...productData.alum },
  { id: "legno-alluminio", ...productData["legno-alluminio"] },
  { id: "persiane", ...productData.persiane },
];
```

Ogni card diventa un Link:

```tsx
<Link to={`/prodotti/${product.id}`}>
  {/* card content */}
</Link>
```

---

## Riepilogo File Modificati

| File | Azione |
|------|--------|
| `src/pages/PosaQualificataPage.tsx` | Rimuovere sezione galleria (righe 514-542) + cleanup imports |
| `src/pages/GaranziePage.tsx` | Rimuovere sezione galleria (righe 156-205) + cleanup imports |
| `src/components/home/HomeProducts.tsx` | Aggiornare con prodotti reali e link |

---

## Risultato Atteso

- **Posa Qualificata**: Pagina piu snella senza la galleria ridondante
- **Garanzie**: Focus sulle garanzie senza la sezione foto
- **Homepage**: Sezione prodotti collegata al catalogo reale con navigazione verso le pagine dedicate
