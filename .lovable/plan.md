
# Piano: Ristrutturazione Completa Pagina "Perché I Profili"

## Panoramica Generale

La pagina attuale ha una struttura orientata al "pre-vendita" con focus sul problema. La nuova struttura richiesta e' pensata come **strumento di chiusura post-sopralluogo** con un flusso completamente diverso:

**Numeri (impatto) -> Criteri (educazione) -> Paura (cosa succede se sbagli) -> Prova sociale (fiducia) -> Garanzia (rimozione rischio) -> Urgenza -> CTA**

---

## Struttura Nuove Sezioni (12 totali)

### SEZIONE 1: HERO - OBIETTIVI IN NUMERI
**File**: `HeroSection.tsx` (modifica completa)

**Elementi:**
- Badge: "HAI GIA' IL PREVENTIVO IN MANO"
- Headline: "Prima di decidere, guarda questi numeri."
- Sottotitolo: "Ecco cosa cambia davvero scegliendo I Profili rispetto agli altri."
- 4 CARD GRANDI con numeri d'impatto:
  - €3.600/anno - Risparmio medio bolletta (30 anni = €108.000)
  - 0 ore - Manutenzione per 20 anni
  - +15-20% - Valore immobile
  - €0 sorprese - Costi imprevisti garantiti

**Stile**: Sfondo chiaro, card grandi con icone, numeri enormi

---

### SEZIONE 2: CRITERI DECISIONALI
**File**: `DecisionCriteriaSection.tsx` (nuovo)

**Elementi:**
- Headline: "Le 5 domande da farti prima di firmare qualsiasi preventivo"
- Sottotitolo: "Se l'altro serramentista non sa rispondere a queste, hai gia' la tua risposta."
- Layout: Immagine placeholder a sinistra + Lista numerata 01-05 a destra
- Domande:
  1. Chi installa le finestre? (Posatori certificati o improvvisati?)
  2. Cosa succede se c'e' un problema? (Garanzia scritta o "vediamo"?)
  3. Il vecchio telaio viene rimosso? (Posa completa o montaggio sopra?)
  4. Quanto dura davvero la finestra? (10 anni o 30 anni?)
  5. Chi risponde tra 5 anni? (Assistenza garantita o numero che non risponde?)

**Stile**: Sfondo light, layout a 2 colonne

---

### SEZIONE 3: CENTRO DECISIONALE (Emozionale)
**File**: `DecisionCenterSection.tsx` (nuovo)

**Elementi:**
- Headline: "Non stai comprando finestre. Stai decidendo come vivrai casa tua per i prossimi 30 anni."
- Copy emozionale lungo (vita quotidiana con finestre buone vs cattive)
- Split image prima/dopo di una casa reale

**Stile**: Sfondo neutro, focus sul testo

---

### SEZIONE 4: IL SISTEMA I PROFILI (Soluzione)
**File**: `SystemSolutionSection.tsx` (nuovo)

**Elementi:**
- Headline: "Non vendiamo finestre. Risolviamo problemi."
- Sottotitolo: "Un sistema completo: prodotto + posa + garanzia. Tutto integrato, tutto garantito."
- 3 BLOCCHI VISUALI con espansione dettagliata:

**BLOCCO 1 - PRODOTTO DOMUS:**
- Acciaio zincato 2mm a profilo chiuso
- 3 guarnizioni rinforzate
- Profilo 76mm
- Active Protection Surface
- Immagine sezione profilo con callout

**BLOCCO 2 - POSA CERTIFICATA:**
- Posatori certificati con patentino
- Rimozione totale vecchio telaio
- Correzione ponti termici
- Verifica finale documentata
- Immagine posatore al lavoro

**BLOCCO 3 - GARANZIA TOTALE:**
- Tabella garanzie (Prodotto a Vita, Posa 10 anni, Soddisfatto 30gg, Tempistiche 90gg)
- Bottone "Scarica PDF Garanzia"

**Stile**: Sfondo light, card espandibili, immagini tecniche

---

### SEZIONE 5: VIDEO TESTIMONIANZE
**File**: `VideoTestimonialsSection.tsx` (nuovo)

**Elementi:**
- Headline: "Non crederci sulla parola. Guardali."
- Sottotitolo: "Due famiglie lombarde raccontano la loro esperienza con I Profili."
- 2 video embed affiancati con:
  - Thumbnail
  - Nome cliente
  - Headline risultato
  - Durata
  - Tipo progetto

**Stile**: Sfondo light, video cards affiancate

---

### SEZIONE 6: GALLERIA RISULTATI
**File**: `ResultsGallerySection.tsx` (nuovo)

**Elementi:**
- Headline: "Case come la tua. Risultati misurabili."
- Sottotitolo: "Non parliamo di \"qualita'\". Parliamo di numeri: bollette, rumore, dispersione."
- Griglia 6 foto con overlay risultato:
  - Villa Bergamo: -45% bolletta gas
  - Appartamento Milano: -38% dispersione
  - Villetta Brescia: -52% rumore
  - Condominio Monza: -40% costi riscaldamento
  - Attico Como: Zero condensa
  - Bifamiliare Varese: Da G a C

**Stile**: Sfondo light, griglia immagini con hover

---

### SEZIONE 7: CONFRONTO DIRETTO
**File**: `DirectComparisonSection.tsx` (nuovo - evoluzione ComparisonSection)

**Elementi:**
- Headline: "La differenza che nessuno ti mostra"
- Sottotitolo: "Metti i preventivi uno accanto all'altro..."
- Tabella confronto estesa (9 righe):
  - Preventivo (Generico vs Tecnico dettagliato)
  - Chi installa (Personale a giornata vs Posatori certificati)
  - Documenti
  - Vecchio telaio
  - Ponti termici
  - Garanzia prodotto (24 mesi vs A VITA)
  - Garanzia posa
  - Tempistiche
  - Post-vendita

**Stile**: Sfondo dark, tabella con highlight colonna "I Profili"

---

### SEZIONE 8: VERITA' SCOMODE (Paura)
**File**: `HiddenTruthsSection.tsx` (nuovo)

**Elementi:**
- Background: NERO/NAVY - tono allarme
- Headline: "Le verita' scomode che nessun venditore ti dira'"
- Sottotitolo: "Quello che scopri solo quando e' troppo tardi."

**4 BOX PROBLEMA:**

1. **"Prezzi troppo bassi?"** - Schema Ponzi aziendale
2. **"Tanto la posa e' compresa"** - Frase pericolosa
3. **"Risparmio il 30% oggi"** - Calcolo costi nascosti 10 anni
4. **"Montiamo sopra il vecchio telaio"** - Scorciatoia
5. **"La garanzia? 2 anni"** - Confronto vs vita

**Stile**: Sfondo nero/navy, card con bordi arancio/rosso, tono allarmante

---

### SEZIONE 9: URGENZA
**File**: `UrgencySection.tsx` (nuovo)

**Elementi:**
- Background: ACCENT (rosso/arancione)
- Headline: "Non e' una questione di sconto. E' una questione di qualita'."
- Motivi per decidere ora:
  - Bollette piu' alte
  - Valore immobile che scende
  - Costi installazione che aumentano
  - Scadenze Direttiva Case Green
  - Liste d'attesa aziende serie

**Stile**: Sfondo accent caldo (arancio/rosso), tono urgente

---

### SEZIONE 10: TESTIMONIANZE SCRITTE
**File**: `WrittenTestimonialsSection.tsx` (modifica TestimonialsSection)

**Elementi:**
- Headline: "427 famiglie lombarde hanno gia' scelto."
- 5 Card testimonianze dettagliate con:
  - Nome, citta', stelle
  - Quote lungo (problema -> soluzione -> risultato)
  - Tipo progetto
  - Data installazione
  - Risultato numerico

**Stile**: Sfondo light, card con bordo teal a sinistra

---

### SEZIONE 11: GARANZIE DETTAGLIATE
**File**: `GuaranteesDetailedSection.tsx` (nuovo - evoluzione TripleGuarantee)

**Elementi:**
- Headline: "Altri promettono. Noi firmiamo PER ISCRITTO."
- Tabella garanzie confronto (Standard mercato vs I Profili)
- 4 BOX ESPANSIONE dettagliata:
  - Garanzia Prodotto a Vita (condizioni complete)
  - Garanzia Posa 10 anni (cosa copre/non copre)
  - Garanzia Tempistiche (90gg o rimborso €200/settimana)
  - Soddisfatto o Rimborsato 30gg
- Bottone grande: "Scarica PDF Garanzia Completa"

**Stile**: Sfondo light, tabelle dettagliate, accordion per dettagli

---

### SEZIONE 12: CTA FINALE
**File**: `FinalCTASection.tsx` (modifica)

**Elementi:**
- Background: ROSSO ACCENT
- Headline: "Hai il preventivo. Hai le informazioni. Hai visto i numeri."
- Sottotitolo: "Ora la decisione e' tua."
- 2 bottoni:
  - Primario: "Parla con il tuo consulente"
  - Secondario: "Rivedi il tuo preventivo"
- Footer: Info contatto

**Stile**: Sfondo rosso/accent, CTA prominente

---

## Mapping File: Cosa Tenere / Modificare / Creare / Eliminare

| Azione | File | Note |
|--------|------|------|
| MODIFICA | `HeroSection.tsx` | Trasformare in "Obiettivi in Numeri" |
| CREA | `DecisionCriteriaSection.tsx` | 5 domande |
| CREA | `DecisionCenterSection.tsx` | Centro decisionale emozionale |
| CREA | `SystemSolutionSection.tsx` | Prodotto + Posa + Garanzia |
| CREA | `VideoTestimonialsSection.tsx` | 2 video testimonianze |
| CREA | `ResultsGallerySection.tsx` | Galleria 6 progetti |
| CREA | `DirectComparisonSection.tsx` | Tabella confronto estesa |
| CREA | `HiddenTruthsSection.tsx` | Verita' scomode (paura) |
| CREA | `UrgencySection.tsx` | Urgenza decidere |
| MODIFICA | `TestimonialsSection.tsx` | Rinominare/adattare per scritte |
| CREA | `GuaranteesDetailedSection.tsx` | Garanzie con dettagli |
| MODIFICA | `FinalCTASection.tsx` | Adattare a post-sopralluogo |
| MODIFICA | `Index.tsx` | Nuova struttura sezioni |
| ELIMINA | `ProblemSection.tsx` | Non serve in post-sopralluogo |
| ELIMINA | `CaseGreenSection.tsx` | Integrato in urgenza |
| ELIMINA | `PainLoopSection.tsx` | Non serve |
| ELIMINA | `ModernStressSection.tsx` | Non serve |
| ELIMINA | `BathroomSanctuarySection.tsx` | Non serve |
| ELIMINA | `RenovationNightmareSection.tsx` | Non serve |
| ELIMINA | `PosaDisasterSection.tsx` | Integrato in HiddenTruths |
| ELIMINA | `WhyArchitettoDelBagnoSection.tsx` | Sostituito |
| ELIMINA | `MethodSection.tsx` | Integrato in SystemSolution |
| ELIMINA | `AuthoritySection.tsx` | Non serve |
| ELIMINA | `LogicalCloseSection.tsx` | Non serve |
| ELIMINA | `EmotionalCloseSection.tsx` | Integrato in DecisionCenter |
| ELIMINA | `FAQSection.tsx` | Non serve |
| ELIMINA | `ComparisonSection.tsx` | Sostituito da DirectComparison |
| ELIMINA | `TripleGuaranteeSection.tsx` | Sostituito da GuaranteesDetailed |

---

## Nuovo Index.tsx (Struttura Finale)

```text
1.  Header
2.  HeroSection (Obiettivi in Numeri)
3.  DecisionCriteriaSection (5 Domande)
4.  DecisionCenterSection (Centro Decisionale)
5.  SystemSolutionSection (Prodotto + Posa + Garanzia)
6.  VideoTestimonialsSection (2 Video)
7.  ResultsGallerySection (Galleria Risultati)
8.  DirectComparisonSection (Confronto Dettagliato)
9.  HiddenTruthsSection (Verita' Scomode)
10. UrgencySection (Urgenza)
11. WrittenTestimonialsSection (Testimonianze Scritte)
12. GuaranteesDetailedSection (Garanzie Complete)
13. FinalCTASection (CTA Finale)
14. Footer
```

---

## Design System

### Sfondi per Sezione:
- **Light** (bianco/grigio chiaro): Sezioni informative (1,2,4,5,6,10,11)
- **Dark** (nero/navy): Sezione paura (8), confronto (7)
- **Accent caldo** (rosso/arancione): Urgenza (9), CTA finale (12)
- **Neutro**: Centro decisionale (3)

### Font:
- **Headlines**: Font bold/black esistente (sistema attuale)
- **Body**: Font regolare esistente

### Colori:
- **Teal/Primary**: Soluzioni, I Profili, positivo
- **Rosso/Destructive**: Warning, problemi, urgenza
- **Arancio/Amber**: Attenzione, alert
- **Verde**: Check, conferme

---

## Immagini Placeholder Necessarie

1. Hero: Team o finestra installata
2. Criteri: Posatore con patentino visibile
3. Prodotto DOMUS: Sezione profilo con callout
4. Posa: Dettaglio sigillatura termica
5. Garanzia: Contratto con timbro
6. Prima/Dopo: Split screen casa reale
7. Galleria: 6 progetti completati (riuso assets esistenti)
8. Confronto montaggio: Sopra telaio vs rimozione
9. Screenshot recensioni negative competitor (anonimizzate)

---

## Interattivita'

- Tabelle con highlight colonna "I Profili" on hover
- Card con hover effect (lift)
- Accordion per dettagli garanzia
- Video lightbox (non uscire dalla pagina)
- Bottoni CTA sticky su mobile
- Counter animati per numeri grandi

---

## Stima Complessita'

- **9 nuovi componenti** da creare
- **4 componenti** da modificare significativamente
- **14 componenti** da eliminare (pulire)
- **Tempo stimato**: Implementazione in piu' fasi

Questo e' un refactoring completo della pagina con un cambio di strategia da "pre-vendita" a "post-sopralluogo closing".
