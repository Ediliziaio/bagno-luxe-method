

# Piano: Pagine Dettaglio Prodotti + Mega Menu Dropdown

## Panoramica

Implementeremo:
1. **11 pagine dettaglio prodotto** - Una per ogni prodotto con specifiche tecniche complete
2. **Mega menu dropdown** - Quando si passa su "Prodotti" si apre un sottomenu organizzato in categorie

---

## 1. PAGINE DETTAGLIO PRODOTTO

### Route da creare

| Prodotto | Route |
|----------|-------|
| Domus | `/prodotti/domus` |
| Lumier | `/prodotti/lumier` |
| Idole | `/prodotti/idole` |
| Alum | `/prodotti/alum` |
| Legno Alluminio | `/prodotti/legno-alluminio` |
| Persiane | `/prodotti/persiane` |
| Tapparelle | `/prodotti/tapparelle` |
| Zanzariere | `/prodotti/zanzariere` |
| Cassonetti | `/prodotti/cassonetti` |
| Porte da Interno | `/prodotti/porte-interno` |
| Porta Blindata | `/prodotti/porta-blindata` |

### Struttura Pagina Dettaglio

```text
/prodotti/[id-prodotto]
├── Header
├── Hero Prodotto (nome, immagine hero, descrizione breve)
├── Sezione Caratteristiche Principali (grid con icone)
├── Specifiche Tecniche (tabella dettagliata)
├── Galleria Immagini (carousel o grid)
├── Vantaggi Chiave (lista con check)
├── Applicazioni/Casi d'Uso
├── CTA ("Richiedi preventivo per [prodotto]")
├── Prodotti Correlati (card degli altri prodotti della categoria)
└── Footer
```

### Dati Prodotto Estesi

Per ogni prodotto definiremo specifiche complete:

```typescript
interface ProductDetail {
  id: string;
  name: string;
  category: "infissi" | "accessori" | "porte";
  tagline: string;
  description: string;
  heroImage: string;
  gallery: string[];
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  benefits: string[];
  applications: string[];
  relatedProducts: string[];
}
```

### Esempio Specifiche Prodotto DOMUS

```typescript
{
  id: "domus",
  name: "Domus",
  category: "infissi",
  tagline: "Il sistema principale per il massimo comfort",
  description: "Sistema a 76mm con tripla guarnizione...",
  specifications: [
    { label: "Profondità telaio", value: "76 mm" },
    { label: "Spessore acciaio", value: "2 mm zincato" },
    { label: "Numero guarnizioni", value: "3" },
    { label: "Trasmittanza termica Uw", value: "fino a 0.79 W/m²K" },
    { label: "Abbattimento acustico", value: "fino a 47 dB" },
    { label: "Classe antieffrazione", value: "RC2 (opzionale RC3)" },
    { label: "Numero camere", value: "6 camere" },
    { label: "Garanzia", value: "10 anni" },
  ],
  benefits: [
    "Massimo isolamento termico - risparmio energetico fino al 40%",
    "Tripla guarnizione anti-spiffero",
    "Acciaio 2mm per stabilità 30 anni",
    "Zero condensa garantita",
  ],
  // ...
}
```

---

## 2. MEGA MENU DROPDOWN

### Struttura Menu

Quando l'utente passa il mouse su "Prodotti", si apre un dropdown con due colonne:

```text
┌─────────────────────────────────────────────────────┐
│  PRODOTTI                                           │
├─────────────────────────┬───────────────────────────┤
│  INFISSI                │  ACCESSORI                │
│  ─────────────          │  ─────────────            │
│  • Domus                │  • Persiane               │
│  • Lumier               │  • Tapparelle             │
│  • Idole                │  • Zanzariere             │
│  • Alum                 │  • Cassonetti             │
│  • Legno Alluminio      │                           │
│                         │  PORTE                    │
│                         │  ─────────────            │
│                         │  • Porte da Interno       │
│                         │  • Porta Blindata         │
├─────────────────────────┴───────────────────────────┤
│  [Vedi tutti i prodotti →]                          │
└─────────────────────────────────────────────────────┘
```

### Implementazione Tecnica

Useremo il componente `NavigationMenu` di shadcn/ui gia' presente nel progetto:

```typescript
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Prodotti</NavigationMenuTrigger>
      <NavigationMenuContent>
        {/* Dropdown content con categorie */}
      </NavigationMenuContent>
    </NavigationMenuItem>
    {/* Altri link normali */}
  </NavigationMenuList>
</NavigationMenu>
```

### Stile Dropdown

- Sfondo solido (`bg-background`) con bordo
- Ombra elegante
- Z-index alto per visibilità
- Animazione fade-in/out
- Hover sui link con colore primary

---

## 3. FILE DA CREARE

| File | Descrizione |
|------|-------------|
| `src/data/products.ts` | Database prodotti con tutte le specifiche |
| `src/pages/ProductDetailPage.tsx` | Pagina template per dettaglio prodotto |
| `src/components/products/ProductHero.tsx` | Hero sezione prodotto |
| `src/components/products/ProductSpecifications.tsx` | Tabella specifiche tecniche |
| `src/components/products/ProductFeatures.tsx` | Grid caratteristiche con icone |
| `src/components/products/ProductGallery.tsx` | Galleria immagini prodotto |
| `src/components/products/RelatedProducts.tsx` | Prodotti correlati |

## 4. FILE DA MODIFICARE

| File | Modifica |
|------|----------|
| `src/App.tsx` | Aggiungere route dinamica `/prodotti/:productId` |
| `src/components/HomeHeader.tsx` | Sostituire link Prodotti con NavigationMenu dropdown |
| `src/components/products/ProductCard.tsx` | Aggiungere Link a pagina dettaglio |

---

## 5. DETTAGLIO TECNICO ROUTE DINAMICA

```typescript
// App.tsx - Nuova route
<Route path="/prodotti/:productId" element={<ProductDetailPage />} />

// ProductDetailPage.tsx - Recupero prodotto
const { productId } = useParams();
const product = getProductById(productId);

if (!product) {
  return <Navigate to="/prodotti" />;
}
```

---

## 6. SPECIFICHE TECNICHE PER CATEGORIA

### INFISSI

| Prodotto | Specifiche Chiave |
|----------|-------------------|
| **Domus** | 76mm, acciaio 2mm, 3 guarnizioni, 6 camere, Uw 0.79 |
| **Lumier** | Telaio sottile 70mm, vetro grande, design minimal |
| **Idole** | Premium, finiture luxury, design italiano esclusivo |
| **Alum** | Alluminio termico, colori RAL, alta resistenza |
| **Legno Alluminio** | Legno interno, alluminio esterno, isolamento top |

### ACCESSORI

| Prodotto | Specifiche Chiave |
|----------|-------------------|
| **Persiane** | Legno/Alluminio/PVC, lamelle orientabili |
| **Tapparelle** | Coibentate, motorizzate/manuali, PVC/alluminio |
| **Zanzariere** | A rullo/plissettate/fisse, rete antipolline |
| **Cassonetti** | Coibentati, anti ponte termico, ispezione |

### PORTE

| Prodotto | Specifiche Chiave |
|----------|-------------------|
| **Porte Interno** | Battente/scorrevoli, finiture varie |
| **Porta Blindata** | Classe 3, certificata, design elegante |

---

## 7. AGGIORNAMENTO HEADER CON MEGA MENU

```typescript
// Struttura dati menu
const menuCategories = [
  {
    title: "Infissi",
    items: [
      { name: "Domus", href: "/prodotti/domus", description: "Sistema 76mm" },
      { name: "Lumier", href: "/prodotti/lumier", description: "Massima luce" },
      { name: "Idole", href: "/prodotti/idole", description: "Design premium" },
      { name: "Alum", href: "/prodotti/alum", description: "Alluminio" },
      { name: "Legno Alluminio", href: "/prodotti/legno-alluminio", description: "Ibrido" },
    ]
  },
  {
    title: "Accessori",
    items: [
      { name: "Persiane", href: "/prodotti/persiane" },
      { name: "Tapparelle", href: "/prodotti/tapparelle" },
      { name: "Zanzariere", href: "/prodotti/zanzariere" },
      { name: "Cassonetti", href: "/prodotti/cassonetti" },
    ]
  },
  {
    title: "Porte",
    items: [
      { name: "Porte da Interno", href: "/prodotti/porte-interno" },
      { name: "Porta Blindata", href: "/prodotti/porta-blindata" },
    ]
  }
];
```

---

## 8. LAYOUT MEGA MENU DESKTOP

```typescript
<NavigationMenuContent className="bg-background border shadow-xl rounded-lg p-6 min-w-[500px]">
  <div className="grid grid-cols-3 gap-6">
    {/* Colonna Infissi */}
    <div>
      <h4 className="font-semibold text-primary mb-3">Infissi</h4>
      <ul className="space-y-2">
        {infissiProducts.map(p => (
          <li><Link to={p.href}>{p.name}</Link></li>
        ))}
      </ul>
    </div>
    
    {/* Colonna Accessori */}
    <div>
      <h4 className="font-semibold text-primary mb-3">Accessori</h4>
      <ul>...</ul>
    </div>
    
    {/* Colonna Porte */}
    <div>
      <h4 className="font-semibold text-primary mb-3">Porte</h4>
      <ul>...</ul>
    </div>
  </div>
  
  {/* Footer dropdown */}
  <div className="mt-4 pt-4 border-t">
    <Link to="/prodotti" className="text-primary">
      Vedi tutti i prodotti →
    </Link>
  </div>
</NavigationMenuContent>
```

---

## 9. MENU MOBILE

Per mobile, il dropdown diventera' un accordion/collapsible:

```text
PRODOTTI ▼
  └── Infissi
      ├── Domus
      ├── Lumier
      └── ...
  └── Accessori
      ├── Persiane
      └── ...
  └── Porte
      └── ...
```

---

## 10. STIMA LAVORO

- 1 file dati prodotti (~300 righe)
- 1 pagina template dinamica (~200 righe)
- 5 componenti prodotto (~400 righe)
- 2 file da modificare (~150 righe)
- **Totale: ~1050 righe di codice**

