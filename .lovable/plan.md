

# Piano: Sezioni "Panoramica Servizio" e "Offerta Zero Pensieri"

## Panoramica
Creare due nuove sezioni esteticamente impattanti da inserire tra `GuaranteesDetailedSection` e `FinalCTASection`:

1. **ServiceOverviewSection** - Timeline visiva dei passaggi del servizio
2. **ZeroPensieriOfferSection** - Offerta premium con tutti i privilegi esclusivi

---

## SEZIONE 1: Panoramica del Servizio

### Design
- Sfondo **scuro** (`section-dark`) con accenti teal
- Timeline verticale con **linea connettiva** animata
- Fasi raggruppate in 4 macro-categorie
- Icone circolari con numeri progressivi
- Animazioni fade-in sequenziali

### Struttura Timeline

```text
FASE 1: CONSULENZA
├── 01. Chiamata conoscitiva
├── 02. Primo appuntamento e consulenza
└── 03. Comprensione delle esigenze

FASE 2: PROPOSTA
├── 04. Ricerca del prodotto adatto
├── 05. Proposta della soluzione
├── 06. Formulazione dell'offerta personalizzata
└── 07. Accettazione offerta (firma contratto)

FASE 3: PRODUZIONE
├── 08. Presa misure tecnica per produzione
├── 09. Produzione serramenti
├── 10. Consegna presso magazzino
└── 11. Chiamata per fissare data montaggio

FASE 4: MONTAGGIO
├── 12. Preparazione area di lavoro
├── 13. Montaggio
├── 14. Pulizia finale
├── 15. Collaudo
└── 16. Pratica ENEA
    └── ✓ TUTTO CHIARO
```

### Stile Visivo
- Linea verticale centrale con gradient teal
- Cerchi numerati con bordo glow
- Card leggere per ogni fase principale
- Badge "FATTO" animato alla fine

---

## SEZIONE 2: Offerta Zero Pensieri

### Design
- Sfondo **premium** con gradient dark-to-accent
- Layout a **griglia di card** con icone
- Sezione centrale highlight per le **6 garanzie a vita**
- Sezione inferiore per specifiche tecniche vetro/serramento

### Struttura Contenuto

**Header:**
- Badge: "OFFERTA ZERO PENSIERI"
- Headline: "Privilegi esclusivi per clienti premium"

**BLOCCO 1: Servizi Inclusi**
| Icona | Servizio |
|-------|----------|
| Wrench | Smontaggio, Montaggio, Smaltimento, Trasporto |

**BLOCCO 2: Le 6 Garanzie a Vita** (Card Hero)
- Garanzia a Vita sugli Infissi
- Garanzia a Vita sulla Ferramenta
- Garanzia a Vita sul Vetro
- Garanzia a Vita sul Montaggio
- Assistenza Garantita a Vita
- Assicurazione valida 10 anni

**BLOCCO 3: Certificazioni e Montaggio**
- Montaggio Certificato
- Montaggio Garantito in 90gg (oltre = regalo)
- Serramento "Made in Italy" certificato CE

**BLOCCO 4: Specifiche Vetro Premium**
| Caratteristica | Descrizione |
|----------------|-------------|
| Doppio Vetro Premium | K termico medio 1.1, stratificato, sicurezza |
| Vetro SE.BE.S | Selettivo esterno, basso emissivo interno, specchiato |
| Canalina Calda | Materiale polimerico per isolamento termico |
| Tripla Guarnizione Premium | Migliore isolamento e tenuta |
| Rinforzo Acciaio | Ultra-resistente di serie |

### Stile Visivo
- Card glass con glow teal sulle garanzie
- Badge "PREMIUM" su ogni elemento chiave
- Icone grandi per ogni garanzia
- Animazioni staggered per le card
- Sfondo con overlay pattern sottile

---

## Modifiche ai File

| File | Azione |
|------|--------|
| `src/components/ServiceOverviewSection.tsx` | CREARE |
| `src/components/ZeroPensieriOfferSection.tsx` | CREARE |
| `src/pages/Index.tsx` | MODIFICARE - Aggiungere import e posizionare tra GuaranteesDetailedSection e FinalCTASection |

---

## Struttura Index.tsx Aggiornata

```text
1.  Header
2.  HeroSection
3.  DecisionCriteriaSection
4.  DecisionCenterSection
5.  SystemSolutionSection
6.  DomusProductDetailSection
7.  VideoTestimonialsSection
8.  ResultsGallerySection
9.  DirectComparisonSection
10. HiddenTruthsSection
11. UrgencySection
12. WrittenTestimonialsSection
13. GuaranteesDetailedSection
14. ServiceOverviewSection (NUOVO)
15. ZeroPensieriOfferSection (NUOVO)
16. FinalCTASection
17. Footer
```

---

## Specifiche Tecniche

### ServiceOverviewSection
- Componente con `framer-motion` per animazioni
- Timeline renderizzata con array di oggetti
- Linea SVG o `div` con `gradient` verticale
- Responsive: verticale su mobile, due colonne su desktop

### ZeroPensieriOfferSection
- Grid responsive per le card
- Sezione garanzie con highlight speciale
- Icone da `lucide-react`:
  - Shield, ShieldCheck, Wrench, Eye, Package, Clock, Award, CheckCircle2

### Animazioni
- Fade-up per ogni gruppo
- Stagger delay per elementi singoli
- Glow pulse sulle card garanzia

---

## Riepilogo Deliverables

- **2 nuovi componenti** da creare
- **1 file** da modificare (Index.tsx)
- **Stile**: Dark premium, glass-card, timeline verticale, glow effects
- **Lunghezza stimata**: ~350 righe per componente

