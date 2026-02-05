
# Piano: Miglioramento Sezione "16 Passaggi" + Nuova Sezione "Case Green 2030"

## Panoramica

Questo piano include due interventi principali:
1. **Redesign sezione "16 passaggi curati nei minimi dettagli"** - Nuovo layout visivamente accattivante con timeline interattiva
2. **Nuova sezione "Case Green 2030"** - Urgenza normativa UE per la conversione energetica

---

## 1. MIGLIORAMENTO SEZIONE "16 PASSAGGI"

### Problemi Attuali
- Layout a griglia 4 colonne troppo compatto
- Card tutte uguali senza gerarchia visiva
- Step list poco coinvolgente
- Mancano elementi interattivi

### Nuovo Design Proposto

**Layout a Timeline Orizzontale con Step Interattivi**

```
        CONSULENZA          PROPOSTA         PRODUZIONE         MONTAGGIO
            ●───────────────────●───────────────────●───────────────────●
           [1][2][3]    [4][5][6][7]    [8][9][10][11]   [12][13][14][15][16]
```

**Caratteristiche del nuovo design:**

1. **Header con numero grande animato**
   - Grande numero "16" con effetto glow che pulsa
   - Sottotitolo: "passaggi curati nei minimi dettagli"
   - Animazione contatore che sale da 0 a 16

2. **Timeline orizzontale con fasi**
   - Linea di progressione animata con gradiente teal
   - 4 nodi principali (uno per fase)
   - Ogni nodo ha un'icona e il nome della fase

3. **Card delle fasi riprogettate**
   - Card con bordo gradiente teal al hover
   - Header della fase con icona grande e numero romano (I, II, III, IV)
   - Step con numero circolare animato + icona + descrizione
   - Effetto "reveal" progressivo degli step su scroll

4. **Step con stile premium**
   - Numeri in cerchi con bordo gradiente
   - Hover che evidenzia lo step con glow
   - Icona che ruota leggermente al hover
   - Linea di connessione tra step

5. **Indicatore di progresso**
   - Barra di progresso che si riempie man mano che si scrolla
   - Badge "Tutto Chiaro" pulsante alla fine

### Mockup Nuovo Layout

```
Desktop:
┌─────────────────────────────────────────────────────────────────────────┐
│          [16]  passaggi curati nei minimi dettagli                      │
│                                                                         │
│   ●═══════════════●═══════════════●═══════════════●                     │
│   CONSULENZA      PROPOSTA       PRODUZIONE      MONTAGGIO              │
│                                                                         │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐        │
│  │ FASE I      │ │ FASE II     │ │ FASE III    │ │ FASE IV     │        │
│  │ ─────────── │ │ ─────────── │ │ ─────────── │ │ ─────────── │        │
│  │ (01) Call   │ │ (04) Cerca  │ │ (08) Misure │ │ (12) Prep   │        │
│  │ (02) Incon. │ │ (05) Prop.  │ │ (09) Prod.  │ │ (13) Mont.  │        │
│  │ (03) Esig.  │ │ (06) Offer. │ │ (10) Cons.  │ │ (14) Pulizia│        │
│  │             │ │ (07) Firma  │ │ (11) Data   │ │ (15) Collaudo│       │
│  │             │ │             │ │             │ │ (16) ENEA   │        │
│  └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘        │
│                                                                         │
│                      [✓ TUTTO CHIARO]                                   │
└─────────────────────────────────────────────────────────────────────────┘
```

### Elementi Visivi da Aggiungere

- **Numero "16" gigante**: Font bold con gradiente teal, effetto text-glow
- **Timeline connettori**: SVG animati tra le fasi
- **Step circles**: Bordo gradiente con ombra interna
- **Card fasi**: Glassmorphism con bordo che brilla al hover
- **Icone fasi grandi**: Nel header di ogni card
- **Progress indicator**: Barra sotto il titolo che si riempie

---

## 2. NUOVA SEZIONE "CASE GREEN 2030"

### Posizionamento nella Homepage
Dopo HomeTransparency, prima di HomeGuarantees - per creare urgenza prima delle garanzie.

### Contenuto e Messaggi Chiave

**Headline**: "Direttiva Case Green 2030: Sei Pronto?"

**Punti di urgenza**:
1. **Scadenza 2030** - Solo 5 anni per adeguarsi
2. **Classe E obbligatoria** - Le case devono raggiungere almeno classe E
3. **Svalutazione immobiliare** - Case non efficienti perdono fino al 30% di valore
4. **Blocco vendita/affitto** - Rischio di non poter vendere o affittare
5. **Finestre = primo intervento** - Le finestre sono il modo piu efficace per migliorare la classe energetica

### Design Sezione

**Stile**: Section accent (sfondo teal) o warning style (sfondo arancione/ambra)

**Layout proposto**:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                 DIRETTIVA EUROPEA CASE GREEN                            │
│                                                                         │
│       ⚠️  2030: Scadenza per l'efficientamento energetico               │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────────┐│
│  │                                                                     ││
│  │   "L'Unione Europea impone che entro il 2030 tutti gli immobili   ││
│  │    residenziali raggiungano almeno la classe energetica E."        ││
│  │                                                                     ││
│  └─────────────────────────────────────────────────────────────────────┘│
│                                                                         │
│  ┌───────────────┐ ┌───────────────┐ ┌───────────────┐ ┌───────────────┐│
│  │ 📉            │ │ 🏠            │ │ 🔒            │ │ ✅            ││
│  │ -30%          │ │ 5 anni        │ │ Blocco        │ │ Soluzione     ││
│  │ Svalutazione  │ │ Tempo rimasto │ │ Vendita/Affitto│ │ Le finestre  ││
│  └───────────────┘ └───────────────┘ └───────────────┘ └───────────────┘│
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────────┐│
│  │  "Non aspettare di essere obbligato. Agisci ora e ottieni:          ││
│  │   • Detrazione fiscale 50%                                          ││
│  │   • Bollette piu leggere subito                                      ││
│  │   • Valore immobile che sale                                        ││
│  │   • Tranquillita per il 2030"                                        ││
│  └─────────────────────────────────────────────────────────────────────┘│
│                                                                         │
│                    [VERIFICA LA TUA SITUAZIONE]                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Elementi Specifici

1. **Countdown/Data badge**
   - "2030" grande con effetto urgenza
   - Oppure: "Mancano solo X anni"

2. **Alert banner**
   - Stile warning con icona ⚠️
   - Citazione della direttiva europea

3. **4 Card statistiche**
   - Svalutazione (-30%)
   - Tempo rimanente (5 anni)
   - Rischio (blocco vendita)
   - Soluzione (finestre)

4. **Box benefici**
   - Lista di cosa si ottiene agendo ora
   - Enfasi sulla detrazione 50%

5. **CTA urgente**
   - "Verifica la Tua Situazione" oppure "Prenota Consulenza Gratuita"

---

## 3. FILE DA MODIFICARE

| File | Modifica |
|------|----------|
| `src/components/home/HomeServiceOverview.tsx` | Redesign completo con nuovo layout timeline |
| `src/pages/HomePage.tsx` | Aggiungere nuova sezione HomeCaseGreen |

## 4. FILE DA CREARE

| File | Descrizione |
|------|-------------|
| `src/components/home/HomeCaseGreen.tsx` | Nuova sezione urgenza Case Green 2030 |

---

## 5. DETTAGLIO TECNICO

### HomeServiceOverview - Nuovi Elementi

```typescript
// Numero 16 animato con contatore
const [count, setCount] = useState(0);
useEffect(() => {
  if (isInView && count < 16) {
    const timer = setTimeout(() => setCount(c => c + 1), 100);
    return () => clearTimeout(timer);
  }
}, [isInView, count]);

// Timeline con SVG animato
<svg className="absolute top-0 left-0 w-full h-1">
  <motion.line 
    x1="0" x2="100%" 
    stroke="url(#gradient)"
    strokeWidth="4"
    initial={{ pathLength: 0 }}
    animate={isInView ? { pathLength: 1 } : {}}
    transition={{ duration: 1.5 }}
  />
</svg>

// Card con bordo gradiente
<div className="relative group">
  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-teal-light 
                  rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
  <div className="relative light-card p-6">
    {/* contenuto */}
  </div>
</div>
```

### HomeCaseGreen - Struttura

```typescript
const urgencyStats = [
  { value: "-30%", label: "Svalutazione stimata", icon: TrendingDown },
  { value: "5", label: "Anni rimanenti", icon: Calendar },
  { value: "0", label: "Case vendibili senza classe E", icon: Lock },
  { value: "1°", label: "Intervento: finestre", icon: CheckCircle2 },
];

const benefits = [
  "Detrazione fiscale 50% garantita",
  "Bollette piu leggere dal primo giorno",
  "Valore immobile in crescita",
  "Conformita alla direttiva UE",
];
```

---

## 6. ORDINE SEZIONI HOMEPAGE AGGIORNATO

1. HomeHeader
2. HomeHero
3. HomeStats
4. HomeWhyUs
5. HomeVideos
6. HomeProducts
7. HomeSystem
8. HomeServices
9. HomeSteps
10. **HomeServiceOverview** (migliorato)
11. HomeTransparency
12. **HomeCaseGreen** (NUOVO)
13. HomeGuarantees
14. HomeTestimonials
15. HomeFinancing
16. HomeContact
17. Footer

---

## 7. STIMA LAVORO

- 1 file nuovo (HomeCaseGreen.tsx): ~150 righe
- 1 file da modificare (HomeServiceOverview.tsx): ~200 righe di modifiche significative
- 1 file da modificare (HomePage.tsx): ~5 righe
- **Totale: ~350 righe di codice**
