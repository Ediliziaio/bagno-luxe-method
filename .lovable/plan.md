

# Piano: Creazione Pagine e Navigazione Completa

## Panoramica

Creazione di 5 nuove pagine e aggiornamento della navigazione principale per trasformare il sito da single-page a multi-page completo.

---

## 1. Struttura delle Nuove Pagine

### Pagine da Creare

| Pagina | Route | Contenuto |
|--------|-------|-----------|
| **Prodotti** | `/prodotti` | Catalogo prodotti con categorie |
| **Chi Siamo** | `/chi-siamo` | Storia, valori, team |
| **Contatti** | `/contatti` | Form e informazioni contatto |
| **Garanzie** | `/garanzie` | Dettaglio garanzie blindate |
| **Articoli** | `/articoli` | Blog/news con articoli informativi |

---

## 2. Pagina Prodotti - Struttura Dettagliata

### Categorie Prodotti Richieste

**INFISSI** (categoria principale):
- Domus (sistema principale 76mm)
- Lumier (finestre luminose)
- Idole (design premium)
- Alum (alluminio)
- Legno Alluminio

**ALTRI PRODOTTI**:
- Persiane
- Tapparelle
- Zanzariere
- Cassonetti
- Porte da Interno
- Porta Blindata

### Layout Pagina Prodotti

```text
/prodotti
├── Header con navigazione
├── Hero compatto "I Nostri Prodotti"
├── Filtri categoria (tabs o sidebar)
├── Griglia prodotti filtrabili
│   ├── Card prodotto (immagine, nome, descrizione breve)
│   └── CTA "Scopri di più" / "Richiedi info"
└── CTA finale + Footer
```

### Struttura Dati Prodotto

Ogni prodotto avra:
- Nome (es. "Domus")
- Categoria (es. "Infissi")
- Immagine
- Descrizione breve
- Caratteristiche principali (array)
- Link per dettagli (opzionale, per espansione futura)

---

## 3. Aggiornamento Header/Navigazione

### Nuovo Menu Principale

```text
Logo | Prodotti | Chi Siamo | Garanzie | Articoli | Contatti | [CTA Preventivo]
```

### Modifiche a HomeHeader.tsx

- Cambiare i link da anchor scroll (`#sezione`) a route React Router (`/pagina`)
- Aggiungere dropdown per "Prodotti" con le categorie principali
- Usare `Link` da `react-router-dom` invece di scroll functions
- Mantenere versione mobile responsive

---

## 4. Dettaglio Pagine Secondarie

### Pagina Chi Siamo (`/chi-siamo`)

Contenuto:
- Hero con headline istituzionale
- Storia dell'azienda (timeline o sezione narrativa)
- I nostri valori (card con icone)
- Team/Territorio servito
- Numeri (statistiche riutilizzate da HomeStats)
- CTA contatto

### Pagina Contatti (`/contatti`)

Contenuto:
- Hero con headline
- Form contatti (riutilizzo HomeContact)
- Mappa zona servita
- Informazioni azienda (indirizzo, telefono, email)
- Orari di apertura

### Pagina Garanzie (`/garanzie`)

Contenuto:
- Hero con headline "Garanzie Blindate"
- Riutilizzo di GuaranteesDetailedSection (gia esistente)
- Tabella confronto mercato
- Download PDF garanzia
- CTA consulenza

### Pagina Articoli (`/articoli`)

Contenuto:
- Hero "Blog & Approfondimenti"
- Griglia articoli (card con thumbnail, titolo, excerpt, data)
- Categorie/tag filtrabili
- Articoli placeholder iniziali (es. "Come scegliere gli infissi", "Bonus 50%", etc.)

---

## 5. File da Creare

| File | Descrizione |
|------|-------------|
| `src/pages/ProdottiPage.tsx` | Pagina catalogo prodotti |
| `src/pages/ChiSiamoPage.tsx` | Pagina about |
| `src/pages/ContattiPage.tsx` | Pagina contatti dedicata |
| `src/pages/GaranziePage.tsx` | Pagina garanzie |
| `src/pages/ArticoliPage.tsx` | Pagina blog/articoli |
| `src/components/shared/PageHeader.tsx` | Header riutilizzabile per pagine interne |
| `src/components/shared/PageHero.tsx` | Hero compatto per pagine interne |
| `src/components/products/ProductCard.tsx` | Card singolo prodotto |
| `src/components/products/ProductGrid.tsx` | Griglia prodotti con filtri |
| `src/components/articles/ArticleCard.tsx` | Card articolo blog |

## 6. File da Modificare

| File | Modifica |
|------|----------|
| `src/App.tsx` | Aggiungere le nuove routes |
| `src/components/HomeHeader.tsx` | Convertire a navigazione multi-page |
| `src/components/Footer.tsx` | Aggiungere link alle nuove pagine |

---

## 7. Dettaglio Tecnico - Dati Prodotti

```typescript
// Struttura dati prodotti
const productCategories = {
  infissi: {
    name: "Infissi",
    products: [
      { id: "domus", name: "Domus", description: "Sistema 76mm con tripla guarnizione", features: ["76mm", "Acciaio 2mm", "3 guarnizioni"] },
      { id: "lumier", name: "Lumier", description: "Massima luminosita' naturale", features: ["Telaio sottile", "Vetro grande", "Design minimale"] },
      { id: "idole", name: "Idole", description: "Design premium per interni esclusivi", features: ["Finiture luxury", "Personalizzabile", "Design italiano"] },
      { id: "alum", name: "Alum", description: "Alluminio ad alte prestazioni", features: ["Alluminio", "Resistenza", "Colori RAL"] },
      { id: "legno-alluminio", name: "Legno Alluminio", description: "Il calore del legno, la resistenza dell'alluminio", features: ["Legno interno", "Alluminio esterno", "Isolamento top"] },
    ]
  },
  oscuranti: {
    name: "Oscuranti e Accessori",
    products: [
      { id: "persiane", name: "Persiane", description: "Protezione e stile tradizionale" },
      { id: "tapparelle", name: "Tapparelle", description: "Avvolgibili motorizzate e manuali" },
      { id: "zanzariere", name: "Zanzariere", description: "Protezione dagli insetti tutto l'anno" },
      { id: "cassonetti", name: "Cassonetti", description: "Cassonetti coibentati anti ponte termico" },
    ]
  },
  porte: {
    name: "Porte",
    products: [
      { id: "porte-interno", name: "Porte da Interno", description: "Design e funzionalita' per ogni ambiente" },
      { id: "porta-blindata", name: "Porta Blindata", description: "Sicurezza certificata per la tua casa" },
    ]
  }
};
```

---

## 8. Aggiornamento Routing (App.tsx)

```typescript
// Nuove routes da aggiungere
<Route path="/prodotti" element={<ProdottiPage />} />
<Route path="/chi-siamo" element={<ChiSiamoPage />} />
<Route path="/contatti" element={<ContattiPage />} />
<Route path="/garanzie" element={<GaranziePage />} />
<Route path="/articoli" element={<ArticoliPage />} />
```

---

## 9. Navigazione Header Aggiornata

```typescript
// Nuovi navLinks per HomeHeader
const navLinks = [
  { label: "Prodotti", href: "/prodotti" },
  { label: "Chi Siamo", href: "/chi-siamo" },
  { label: "Garanzie", href: "/garanzie" },
  { label: "Articoli", href: "/articoli" },
  { label: "Contatti", href: "/contatti" },
];
```

---

## 10. Ordine di Implementazione

1. **Fase 1**: Creare componenti condivisi (PageHeader, PageHero)
2. **Fase 2**: Creare pagina Prodotti con griglia e filtri
3. **Fase 3**: Creare pagine Chi Siamo, Contatti, Garanzie
4. **Fase 4**: Creare pagina Articoli con placeholder
5. **Fase 5**: Aggiornare Header con navigazione
6. **Fase 6**: Aggiornare Footer con link
7. **Fase 7**: Aggiornare App.tsx con routes

---

## 11. Stima Lavoro

- 5 nuove pagine (~800 righe totali)
- 4 nuovi componenti (~300 righe)
- 3 file da modificare (~100 righe di modifiche)
- **Totale: ~1200 righe di codice**

