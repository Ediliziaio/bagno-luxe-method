

# Piano: Generazione Immagini AI per Prodotti

## Obiettivo
Sostituire le foto stock Unsplash con immagini professionali generate tramite AI per le 4 categorie prodotto:
- Persiane
- Zanzariere
- Porte da Interno
- Porta Blindata

---

## Architettura Soluzione

### 1. Creazione Edge Function per Generazione Immagini
Creerò una edge function che utilizza **Lovable AI** con il modello `google/gemini-3-pro-image-preview` (qualità superiore) per generare immagini fotorealistiche dei prodotti.

### 2. Salvataggio Immagini in Storage
Le immagini generate verranno:
1. Generate come base64 dall'AI
2. Caricate nel bucket storage di Lovable Cloud
3. Gli URL permanenti verranno salvati nel codice

### 3. Prompt Professionali per Ogni Prodotto

**Persiane:**
- Hero: "Professional photo of modern aluminum shutters on an Italian villa facade, white walls, Mediterranean style, bright daylight, architectural photography"
- Gallery: Varianti con persiane aperte/chiuse, dettaglio lamelle, vista notturna

**Zanzariere:**
- Hero: "Professional photo of elegant mosquito screen on modern window, retractable system, bright interior, Italian home design"
- Gallery: Dettaglio rete, zanzariera per porta, sistema motorizzato

**Porte da Interno:**
- Hero: "Professional photo of modern Italian interior door, minimalist design, white lacquered finish, bright modern apartment, luxury interior design"
- Gallery: Porta scorrevole, porta in vetro, dettaglio maniglia premium

**Porta Blindata:**
- Hero: "Professional photo of high-security armored door, modern Italian design, dark finish, luxury apartment entrance, architectural photography"
- Gallery: Dettaglio serratura, pannello decorativo, vista interna

---

## File da Creare/Modificare

### Nuovi File
```
supabase/functions/generate-product-images/index.ts
```

### File da Modificare
```
src/data/products.ts (dopo generazione immagini)
src/components/products/ProductGrid.tsx (aggiornare URL)
supabase/config.toml (aggiungere function)
```

---

## Workflow Implementazione

### Step 1: Setup Storage Bucket
```sql
INSERT INTO storage.buckets (id, name, public)
VALUES ('product-images', 'product-images', true);
```

### Step 2: Edge Function
```typescript
// Chiamata a Lovable AI con modello immagini
const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${LOVABLE_API_KEY}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: "google/gemini-3-pro-image-preview",
    messages: [{ role: "user", content: prompt }],
    modalities: ["image", "text"]
  })
});
```

### Step 3: Upload e Salvataggio URL
1. Decodificare base64 dall'AI
2. Caricare nel bucket `product-images`
3. Ottenere URL pubblico permanente
4. Aggiornare `products.ts` con nuovi URL

---

## Immagini da Generare (16 totali)

| Prodotto | Tipo | Prompt Italiano |
|----------|------|-----------------|
| Persiane | Hero | Persiane alluminio su facciata villa italiana, stile mediterraneo |
| Persiane | Gallery 1 | Persiane aperte con vista interno luminoso |
| Persiane | Gallery 2 | Dettaglio lamelle orientabili alluminio |
| Persiane | Gallery 3 | Persiane scorrevoli su grande finestra moderna |
| Zanzariere | Hero | Zanzariera retrattile su finestra moderna, interno luminoso |
| Zanzariere | Gallery 1 | Dettaglio rete zanzariera fibra di vetro |
| Zanzariere | Gallery 2 | Zanzariera per porta finestra, sistema plissè |
| Zanzariere | Gallery 3 | Zanzariera motorizzata con radiocomando |
| Porte Interno | Hero | Porta interna moderna laccata bianca, appartamento luxury |
| Porte Interno | Gallery 1 | Porta scorrevole a scomparsa, design minimal |
| Porte Interno | Gallery 2 | Porta in vetro satinato, luce naturale |
| Porte Interno | Gallery 3 | Dettaglio maniglia design italiano |
| Porta Blindata | Hero | Porta blindata moderna, ingresso appartamento elegante |
| Porta Blindata | Gallery 1 | Dettaglio serratura europea multipunto |
| Porta Blindata | Gallery 2 | Pannello decorativo porta blindata |
| Porta Blindata | Gallery 3 | Vista interna porta blindata con isolamento |

---

## Considerazioni Tecniche

### Costi
- Modello `google/gemini-3-pro-image-preview` è più costoso ma produce qualità superiore
- 16 immagini = 16 chiamate API

### Tempo
- Generazione più lenta rispetto a `gemini-2.5-flash-image`
- Stima: 5-10 secondi per immagine

### Storage
- Immagini salvate permanentemente nel bucket
- URL stabili senza dipendenze esterne

---

## Risultato Atteso

| Pagina | Prima | Dopo |
|--------|-------|------|
| /prodotti/persiane | Stock Unsplash generico | Immagine AI professionale persiane italiane |
| /prodotti/zanzariere | Stock Unsplash generico | Immagine AI professionale zanzariere |
| /prodotti/porte-interno | Stock Unsplash generico | Immagine AI porta moderna italiana |
| /prodotti/porta-blindata | Stock Unsplash generico | Immagine AI porta blindata sicurezza |

Tutte le pagine avranno immagini uniche e professionali generate specificamente per i prodotti.

