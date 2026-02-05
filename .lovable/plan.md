
# Piano: Aggiornamento Immagini Pagina Prodotti

## Problemi Identificati

### 1. ProductGrid.tsx - Dati Duplicati Senza Immagini
Il componente `ProductGrid.tsx` contiene una copia locale dei prodotti **senza il campo `image`**:
```typescript
// Linea 23 - esempio senza immagini
{ id: "domus", name: "Domus", description: "...", features: ["76mm", ...] }
// Manca: image: "..."
```

Mentre `products.ts` ha già tutte le immagini nei campi `heroImage`.

### 2. Porte - Placeholder Images
- **porte-interno**: `heroImage: "/placeholder.svg"` (linea 458)
- **porta-blindata**: `heroImage: "/placeholder.svg"` (linea 495)

---

## Soluzione

### Modifica 1: ProductGrid.tsx
Aggiungere il campo `image` a ogni prodotto prendendo il valore da `products.ts`:

| Prodotto | Immagine (heroImage) |
|----------|---------------------|
| Domus | i-profili.it/.../quanto-costa-una-finestra-in-pvc.jpg |
| Lumier | i-profili.it/.../okna-i-drzwi-balkonowe-iglo-light.webp |
| Idole | i-profili.it/.../WnD-finestra-pvc-infissi-aluskin-1.webp |
| Alum | i-profili.it/.../sitogallerytempra1000x1000-292.jpg |
| Legno Alluminio | i-profili.it/.../skywood-evo-original-ambientato-letto-1.jpg |
| Persiane | metrabuilding.com/.../persiane-lamelle-fisse-e-orientabili-01.jpg |
| Tapparelle | sunsystemgroupsrl.it/.../tapparella-alluminio-bianca-miniorienta.jpg |
| Zanzariere | sunsystemgroupsrl.it/.../zanzariera-estetika.jpg |
| Cassonetti | italinfissi.it/.../cassonetti-pvc-02.png |
| Porte Interno | Immagine da cercare |
| Porta Blindata | Immagine da cercare |

### Modifica 2: products.ts - Immagini Porte
Cercherò immagini appropriate per:
- Porte da interno
- Porta blindata

---

## File da Modificare

### `src/components/products/ProductGrid.tsx`
Aggiungere `image: "..."` a ogni prodotto nella costante `productCategories`

### `src/data/products.ts`
Aggiornare `heroImage` e `gallery` per:
- `porte-interno`
- `porta-blindata`

---

## Risultato Atteso

| Pagina | Prima | Dopo |
|--------|-------|------|
| /prodotti | Schede senza immagini | Tutte le schede con foto reali |
| /prodotti/porte-interno | Placeholder grigio | Immagine porta reale |
| /prodotti/porta-blindata | Placeholder grigio | Immagine porta blindata reale |

Tutte le card prodotto nella griglia mostreranno le immagini hero dei rispettivi prodotti, creando una presentazione visivamente coerente e professionale.
