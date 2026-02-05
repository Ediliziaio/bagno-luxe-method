

# Piano: Aggiornamento Immagini Persiane e Zanzariere

## Problemi Identificati

### 1. Persiane - Immagini non gradite
Le immagini attuali da metrabuilding.com non piacciono. Sostituirò con immagini più belle di persiane in alluminio italiane.

**Immagini attuali (da rimuovere):**
- `https://www.metrabuilding.com/wp-content/uploads/2023/12/persiane-lamelle-fisse-e-orientabili-01.jpg`
- `https://www.metrabuilding.com/wp-content/uploads/2023/12/persiane-doghe-verticali-e-orizzontali-01.jpg`
- `https://www.metrabuilding.com/wp-content/uploads/2023/12/persiane-scorrevoli-01.jpg`

### 2. Zanzariere - Placeholder
Le zanzariere usano ancora `/placeholder.svg` in `products.ts`.

---

## Nuove Immagini

### Persiane - Nuove Immagini
Utilizzerò immagini da fonti italiane di qualità:

| Tipo | URL |
|------|-----|
| Hero | `https://www.diciacciinfissi.it/images/persiane/persiane-hero.jpg` |
| Gallery 1 | Persiane alluminio moderne |
| Gallery 2 | Persiane scorrevoli |
| Gallery 3 | Dettaglio lamelle |

**Fonti alternative da provare:**
- cassonettipvc.com (hanno persiane in alluminio)
- persianeitaliane.it
- sistemacaseinfissi.com

### Zanzariere - Nuove Immagini da Bettio/Sunsystem
Immagini professionali da Bettio.it:

| Modello | URL |
|---------|-----|
| Neoscenica | `https://www.bettio.it/media/350139/neoscenica.jpg` |
| Estetika | `https://sunsystemgroupsrl.it/wp-content/uploads/2023/11/zanzariera-estetika.jpg` |
| Altri | Da sunsystemgroupsrl.it |

---

## File da Modificare

### 1. `src/data/products.ts`

**Persiane (linee 262-308):**
```typescript
heroImage: "NUOVA_URL_PERSIANA",
gallery: [
  "NUOVA_URL_1",
  "NUOVA_URL_2", 
  "NUOVA_URL_3"
],
```

**Zanzariere (linee 360-401):**
```typescript
heroImage: "https://www.bettio.it/media/350139/neoscenica.jpg",
gallery: [
  "https://www.bettio.it/media/350139/neoscenica.jpg",
  "https://sunsystemgroupsrl.it/wp-content/uploads/2023/11/zanzariera-estetika.jpg",
  "https://sunsystemgroupsrl.it/wp-content/uploads/2023/11/zanzariera-bora-top.jpg"
],
```

### 2. `src/components/products/ProductGrid.tsx`

**Aggiornare le immagini anche qui:**
- Linea 33: `persiane` → nuova immagine
- Linea 35: `zanzariere` → immagine Bettio

---

## Verifica Pagina per Pagina

Dopo le modifiche, verificherò:

| Pagina | Cosa Controllare |
|--------|------------------|
| `/prodotti` | Grid con tutte le immagini caricate |
| `/prodotti/persiane` | Hero + gallery con nuove foto |
| `/prodotti/zanzariere` | Hero + gallery con foto Bettio/Sunsystem |
| `/prodotti/domus` | Immagini OK (già aggiornate) |
| `/prodotti/lumier` | Immagini OK |
| `/prodotti/idole` | Immagini OK |
| `/prodotti/alum` | Immagini OK (Tempra) |
| `/prodotti/legno-alluminio` | Immagini OK (Skywood) |
| `/prodotti/tapparelle` | Immagini OK |
| `/prodotti/cassonetti` | Immagini OK |
| `/prodotti/porte-interno` | Immagini OK (Garofoli) |
| `/prodotti/porta-blindata` | Immagini OK (Oikos) |

---

## Risultato Atteso

| Pagina | Prima | Dopo |
|--------|-------|------|
| `/prodotti/persiane` | Foto Metra (non gradite) | Nuove foto persiane italiane |
| `/prodotti/zanzariere` | Placeholder grigio | Foto Bettio/Sunsystem professionali |
| Griglia `/prodotti` | Misto | Tutte le card con immagini reali |

Le pagine avranno un aspetto professionale e coerente con immagini di alta qualità.

