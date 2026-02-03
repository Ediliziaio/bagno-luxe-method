

# Piano: Sezione Dettagliata Prodotto DOMUS

## Panoramica

Creare una nuova sezione approfondita sul prodotto DOMUS da inserire **subito dopo** la `SystemSolutionSection` ("Non vendiamo finestre"). Questa sezione spiega in modo tecnico ma visivamente accattivante perche DOMUS e' diverso.

---

## Struttura della Nuova Sezione

La sezione sara' divisa in **5 blocchi tematici**, ognuno con design distintivo:

### BLOCCO 1: La Realta' Quotidiana
**Sfondo scuro con dati d'impatto**

| Dato | Valore | Descrizione |
|------|--------|-------------|
| Escursione termica | -15C / +60C | Inverno rigido + sole diretto |
| Dilatazione | 2-3 mm | Per metro lineare/anno |
| Cicli apertura | 15-25k | Cicli all'anno |
| Pressione vento | 140 km/h | Raffiche zone esposte |
| Umidita' e pioggia | 365 | Giorni di esposizione |

**Counter grandi:**
- 200.000+ cicli meccanici in 10 anni
- 400.000+ cicli meccanici in 20 anni

**Quote finale:** "Se la struttura non e' progettata per questo, prima o poi cede. Non e' un'opinione. E' fisica."

---

### BLOCCO 2: L'Anima in Acciaio (Il Vero Differenziatore)

**Layout:** Due colonne - Standard vs DOMUS

| Elemento | Standard | DOMUS |
|----------|----------|-------|
| Spessore acciaio | 1 - 1,2 mm | 2 mm |
| Tipo profilo | Aperto | Chiuso |
| Rigidita' reale | Media | Altissima |
| Flessione nel tempo | Probabile | Zero |
| Stress su ferramenta | Alto | Minimo |

**Conseguenze del profilo standard:**
- Perdere tenuta
- Stressare le guarnizioni
- Far lavorare male la ferramenta

**Vantaggi DOMUS:**
- Zero flessioni nel tempo
- Carico distribuito su tutta la struttura
- Ferramenta che lavora sempre in asse
- Chiusura perfetta anche dopo 20 anni

**Quote:** "Una finestra non puo' essere migliore della sua anima."

---

### BLOCCO 3: 2 vs 3 Guarnizioni

**Layout:** Card comparative

**Standard (2 guarnizioni):**
- 2 guarnizioni
- Spesso morbide
- Perdono elasticita' col tempo
- Risultato: spifferi, rumore, aria che passa

**DOMUS (3 guarnizioni):**
- 3 guarnizioni continue
- Materiali ad alta memoria elastica
- Posizionate in modo funzionale

| Aspetto | 2 Guarnizioni | 3 Guarnizioni DOMUS |
|---------|---------------|---------------------|
| Tenuta aria | Media | Totale |
| Isolamento acustico | Discreto | Superiore |
| Protezione vento/pioggia | Limitata | Tripla barriera |
| Durata nel tempo | 5-10 anni | 20+ anni |
| Comfort percepito | Variabile | Costante |

**Quote:** "La terza guarnizione non e' un extra. E' cio' che mantiene le prestazioni quando le altre cedono."

---

### BLOCCO 4: Lo Spessore Giusto (70 vs 76 vs 82 mm)

**Layout:** 3 card affiancate con indicatore "equilibrio"

**70 mm - Non sufficiente:**
- Nascono per contenere i costi
- Meno spazio per rinforzi seri
- Meno camere isolanti
- Meno massa strutturale
- Badge: SUPERATO

**76 mm DOMUS - Equilibrio Perfetto:**
- Ospita rinforzi in acciaio seri
- Gestisce 3 guarnizioni vere
- Garantisce isolamento senza effetti collaterali
- Nessun problema di condensa interna
- Badge: CONSIGLIATO (teal)

**82 mm - Attenzione:**
- Blocca il naturale ricambio termico
- Crea punti freddi interni
- Aumenta il rischio di condensa
- Favorisce muffe e umidita'
- Badge: RISCHIO

**Quote:** "Una casa sana non e' quella piu' isolata. E' quella meglio bilanciata."

---

### BLOCCO 5: Quote Finale + Immagine

**Quote grande:**
> "Il problema delle finestre non e' quanto isolano oggi, ma come si comportano tra 10 o 20 anni."

**Sottotitolo:** DOMUS nasce esattamente per questo.

**Immagine placeholder:** Immagine grande del profilo DOMUS (gia' esistente: `domus-profile-section.jpg`)

---

## Design e Stile

### Sfondo Sezione:
- Background dark (`section-dark`) con sfumature navy per creare profondita'
- Gradient sottile per separare i blocchi

### Card Stile:
- `glass-card` per i blocchi informativi
- Bordi colorati per differenziare (teal per DOMUS, amber per warning, grigio per standard)

### Tabelle:
- Stesso stile di `DirectComparisonSection`
- Highlight verde/teal per colonna DOMUS
- Grigio/rosso per colonna Standard

### Animazioni:
- Fade-up per ogni blocco al scroll
- Counter animati per i numeri grandi (200k, 400k cicli)
- Hover effects sulle card

### Tipografia:
- Numeri grandi (4xl-5xl) per statistiche impatto
- Quote in italic con bordo sinistro teal

---

## Immagine Placeholder

Usare l'immagine esistente `domus-profile-section.jpg` nel blocco finale.
L'utente potra' sostituirla successivamente.

---

## Modifiche ai File

| File | Azione |
|------|--------|
| `src/components/DomusProductDetailSection.tsx` | CREARE - Nuova sezione completa |
| `src/pages/Index.tsx` | MODIFICARE - Aggiungere import e posizionare dopo SystemSolutionSection |

---

## Struttura Index.tsx Aggiornata

```text
1.  Header
2.  HeroSection
3.  DecisionCriteriaSection
4.  DecisionCenterSection
5.  SystemSolutionSection (Non vendiamo finestre)
6.  DomusProductDetailSection (NUOVO - Dettaglio DOMUS)
7.  VideoTestimonialsSection
8.  ResultsGallerySection
9.  DirectComparisonSection
10. HiddenTruthsSection
11. UrgencySection
12. WrittenTestimonialsSection
13. GuaranteesDetailedSection
14. FinalCTASection
15. Footer
```

---

## Riepilogo Tecnico

- **1 nuovo componente** da creare: `DomusProductDetailSection.tsx`
- **1 file da modificare**: `Index.tsx`
- **Immagine**: Riuso di `domus-profile-section.jpg` (placeholder sostituibile)
- **Stile**: Dark theme, glass-card, tabelle comparative, counter animati
- **Lunghezza stimata**: ~400 righe di codice

