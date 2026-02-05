
# Piano: Miglioramento Layout Articoli + Copy SEO Ottimizzato

## Panoramica

Due interventi chiave:
1. **Miglioramento leggibilita layout** - Interlinea maggiore, spaziature piu generose
2. **Riscrittura copy articoli** - Approccio da marketing SEO: hook emotivi, benefici concreti, call-to-action persuasive

---

## 1. MIGLIORAMENTO LEGGIBILITA ARTICOLI

### Problema Attuale
Le classi Tailwind `prose` hanno `leading-relaxed` che e solo `1.625`. Per articoli lunghi serve piu respiro.

### Modifiche in `ArticleDetailPage.tsx`

**Classi prose attuali:**
```
prose-p:leading-relaxed prose-p:mb-6
```

**Nuove classi con piu respiro:**
```
prose-p:leading-loose prose-p:mb-7
prose-li:leading-loose prose-li:my-3
prose-h2:leading-tight prose-h2:mt-16 prose-h2:mb-8
prose-h3:leading-snug prose-h3:mt-12 prose-h3:mb-5
```

### Dettaglio Modifiche CSS

| Elemento | Prima | Dopo | Effetto |
|----------|-------|------|---------|
| Paragrafi line-height | 1.625 (relaxed) | 2.0 (loose) | +23% interlinea |
| Margine paragrafi | mb-6 (24px) | mb-7 (28px) | +17% spazio |
| Liste line-height | my-2 | my-3 + leading-loose | Piu leggibili |
| H2 margine superiore | mt-14 | mt-16 | Piu separazione |
| H2 margine inferiore | mb-6 | mb-8 | Piu respiro |
| H3 margine superiore | mt-10 | mt-12 | Piu separazione |
| H3 margine inferiore | mb-4 | mb-5 | Piu respiro |

### Nuove Classi Complete

```tsx
className="prose prose-lg max-w-none 
  prose-headings:text-foreground prose-headings:font-bold
  prose-h2:text-2xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:leading-tight
  prose-h3:text-xl prose-h3:mt-12 prose-h3:mb-5 prose-h3:leading-snug
  prose-p:text-muted-foreground prose-p:leading-loose prose-p:mb-7
  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
  prose-strong:text-foreground
  prose-ul:text-muted-foreground prose-ul:my-8 prose-ul:space-y-2
  prose-ol:text-muted-foreground prose-ol:my-8 prose-ol:space-y-2
  prose-li:my-3 prose-li:leading-loose
  prose-table:my-10
  prose-th:py-4 prose-th:px-4
  prose-td:py-3 prose-td:px-4"
```

### CSS Aggiuntivo in `index.css`

Aggiungo stili custom per tabelle e liste negli articoli:

```css
/* Article content enhancements */
.prose table {
  @apply w-full border-collapse rounded-lg overflow-hidden my-10;
}

.prose th {
  @apply bg-muted/50 text-foreground font-semibold text-left py-4 px-4;
}

.prose td {
  @apply border-t border-border/30 py-3 px-4;
}

.prose ul li::marker,
.prose ol li::marker {
  @apply text-primary;
}
```

---

## 2. RISCRITTURA COPY ARTICOLI (SEO + MARKETING)

### Principi di Copywriting Applicati

1. **Hook emotivo all'inizio** - Aggancio problema/desiderio
2. **Benefici prima delle caratteristiche** - Cosa ottieni, non cosa e
3. **Dati concreti e specifici** - Numeri, percentuali, case study
4. **Urgency e scarsita** - Bonus che scadono, tempi limitati
5. **CTA multiple** - Link interni persuasivi nel testo
6. **Tono conversazionale** - "Tu" diretto, domande retoriche
7. **Struttura scannable** - H2/H3 chiari, bullet point

### Articoli da Riscrivere (tutti 12)

Per ogni articolo applico questa struttura:

```text
1. INTRO (hook emotivo + problema)
   "Stai pagando bollette troppo alte? Il problema potrebbe essere..."
   
2. SEZIONE 1 (beneficio principale)
   Non "cos'e la trasmittanza" ma "come smettere di pagare per riscaldare l'esterno"
   
3. SEZIONE 2 (prova sociale/dati)
   Case study reali, numeri specifici
   
4. SEZIONE 3 (come fare/guida pratica)
   Step concreti, checklist
   
5. CTA intermedia
   "Vuoi scoprire quanto puoi risparmiare? [Calcola ora →]"
   
6. SEZIONE 4 (obiezioni comuni)
   "Ma costa troppo..." → risposta
   
7. CTA finale (urgency)
   "Il bonus 50% potrebbe scendere al 36%. Agisci prima che sia troppo tardi."
```

### Esempio Riscrittura: Articolo "Serramenti Lombardia"

**PRIMA (troppo tecnico):**
```html
<h2>Il clima lombardo e gli infissi</h2>
<p>La Lombardia e una delle regioni italiane con il maggior range climatico: 
dalle zone alpine della Valtellina (zona F) alla pianura padana (zona E).</p>
```

**DOPO (orientato al beneficio):**
```html
<h2>Perche in Lombardia servono infissi "speciali"</h2>
<p>Se abiti in Lombardia, probabilmente conosci bene questa situazione: 
<strong>inverni gelidi</strong> che ti costringono a tenere il riscaldamento 
al massimo, e <strong>estati afose</strong> dove l'aria condizionata non smette 
mai di girare.</p>

<p>Il risultato? <strong>Bollette che fanno paura.</strong> Ma il vero problema 
non e il clima — sono i tuoi vecchi infissi che disperdono fino al 30% del calore 
che paghi per produrre.</p>

<p>In questa guida scoprirai esattamente quali caratteristiche devono avere 
i serramenti per funzionare nel <em>tuo</em> comune lombardo, e come evitare 
l'errore piu costoso: scegliere infissi "sbagliati" per la tua zona climatica.</p>
```

### Modifiche Specifiche per Ogni Articolo

---

#### 1. Infissi Milano
**Focus:** Locale, pratico, case study milanesi

**Nuovo hook:**
> Sostituire gli infissi a Milano non e come farlo altrove. Tra normative condominiali, traffico per i trasporti e costi "metropolitani", rischi di spendere molto piu del necessario — o peggio, di fare un lavoro che non risolve i tuoi problemi.

**Elementi aggiunti:**
- Hook su problemi specifici Milano (rumore, condominio, costi)
- Tabella prezzi per quartiere
- Case study reale con nome e zona
- CTA: "Sei di Milano? Richiedi sopralluogo gratuito"

---

#### 2. Serramenti Lombardia
**Focus:** Zone climatiche spiegate in modo pratico

**Nuovo hook:**
> Il tuo vicino di casa ha messo infissi nuovi e risparmia 400€ l'anno. Tu hai fatto lo stesso lavoro, ma le bollette sono uguali. Perche? Probabilmente i tuoi infissi non sono adatti alla tua zona climatica.

**Elementi aggiunti:**
- Mappa mentale zone E/F
- "Controlla il tuo comune" con esempi
- Errore comune: comprare online senza verificare zona
- CTA provincia per provincia

---

#### 3. Preventivo Infissi
**Focus:** Paura delle fregature

**Nuovo hook:**
> Hai ricevuto 3 preventivi e non capisci perche uno costa 4.000€ e l'altro 8.000€ per lo stesso lavoro? Non sei tu a non capire — sono molti preventivi a essere volutamente confusi.

**Elementi aggiunti:**
- Checklist scaricabile (10 voci)
- Red flags evidenziate con emoji
- Esempio "preventivo truffa" vs "preventivo onesto"
- CTA: "Richiedi un preventivo trasparente — confrontalo tu stesso"

---

#### 4. Prezzi PVC 2026
**Focus:** Risposta diretta a "quanto costa?"

**Nuovo hook:**
> "Quanto costa una finestra in PVC?" E la prima domanda che tutti fanno. La risposta onesta: dipende. Ma dopo aver letto questa guida, saprai esattamente cosa aspettarti e come evitare di pagare il 40% in piu del necessario.

**Elementi aggiunti:**
- Tabella prezzi chiara e aggiornata
- Fattori che fanno lievitare il prezzo
- "Come ho risparmiato 2.000€" (caso cliente)
- Calcolatore mentale: "moltiplica mq x fascia"

---

#### 5. Costi Sostituzione
**Focus:** Budget realistico completo

**Nuovo hook:**
> Pensavi di spendere 3.000€ e alla fine il conto e arrivato a 5.500€. Ti suona familiare? Il problema non e che ti hanno fregato — e che nessuno ti aveva spiegato tutte le voci di costo.

**Elementi aggiunti:**
- Infografica mentale "7 voci di costo"
- Esempi budget appartamento e villa
- "Costi nascosti che nessuno ti dice"
- CTA: "Calcola il TUO budget reale"

---

#### 6. Isolamento Termico
**Focus:** Problema condensa/spifferi → soluzione

**Nuovo hook:**
> Ti svegli la mattina e trovi le finestre grondanti d'acqua. I muri vicino ai serramenti hanno macchie scure. D'inverno, stare vicino alla finestra significa congelare. Questi non sono "problemi normali" — sono sintomi di infissi che non funzionano.

**Elementi aggiunti:**
- Test fai-da-te (candela, mano, carta)
- Spiegazione trasmittanza "per umani"
- Prima/dopo con dati reali
- CTA: "Fai il test → se fallisci, chiamaci"

---

#### 7. Come Scegliere Infissi
**Focus:** Decisione semplificata

**Nuovo hook:**
> PVC, alluminio, legno-alluminio... Piu cerchi informazioni, piu ti confondi. Questa guida ti dara una risposta chiara in 5 minuti: quale materiale fa per TE, in base alla TUA situazione.

**Elementi aggiunti:**
- Quiz mentale "3 domande"
- Flowchart decisionale
- "Se hai X, scegli Y"
- CTA per ogni materiale

---

#### 8. Bonus 50%
**Focus:** Urgency + guida pratica

**Nuovo hook:**
> Il bonus infissi 50% sta per scendere al 36%. Se stai rimandando la decisione, stai letteralmente buttando via migliaia di euro. Ecco cosa devi sapere per agire ORA.

**Elementi aggiunti:**
- Countdown mentale "2026 e l'ultimo anno al 50%"
- Checklist documenti
- "Noi gestiamo tutto — gratis"
- CTA urgente: "Non aspettare il 2027"

---

#### 9. Risparmio Energetico
**Focus:** ROI e payback

**Nuovo hook:**
> "Ma poi quanto risparmio davvero?" E la domanda giusta da fare. Ecco i numeri reali dei nostri clienti lombardi — non stime teoriche, ma bollette vere prima e dopo.

**Elementi aggiunti:**
- 3 case study con numeri esatti
- Grafico risparmio su 10 anni
- Calcolo payback period
- CTA: "Calcola il TUO risparmio"

---

#### 10. Direttiva Case Green
**Focus:** Paura + soluzione

**Nuovo hook:**
> Entro il 2030, la tua casa dovra essere in classe E o rischi sanzioni e svalutazione. Sembra lontano, ma 4 anni passano in fretta — e milioni di italiani stanno gia correndo ai ripari. Tu?

**Elementi aggiunti:**
- Timeline visiva 2026-2033
- "Cosa rischi se non fai nulla"
- "Gli infissi sono il primo passo"
- CTA: "Migliora 1-2 classi con i serramenti"

---

#### 11. 5 Errori Sostituzione
**Focus:** Paura di sbagliare

**Nuovo hook:**
> Ogni settimana riceviamo chiamate di persone disperate: "Ho appena messo infissi nuovi e ho ancora condensa." "Il preventivo era 4.000€, alla fine ho pagato 7.000€." Ecco i 5 errori che hanno fatto — e come evitarli.

**Elementi aggiunti:**
- Storie reali (anonime)
- "L'errore che costa di piu"
- Soluzione per ogni errore
- CTA: "Affidati a chi non fa questi errori"

---

#### 12. PVC vs Alluminio
**Focus:** Decisione rapida

**Nuovo hook:**
> PVC o alluminio? La risposta dipende da UNA sola cosa: cosa ti serve davvero. In 3 minuti saprai quale scegliere — senza tecnicismi inutili.

**Elementi aggiunti:**
- Tabella confronto visiva
- "Scegli PVC se..." / "Scegli alluminio se..."
- Verdetto finale chiaro
- CTA per entrambe le opzioni

---

## 3. FILE DA MODIFICARE

| File | Modifica |
|------|----------|
| `src/pages/ArticleDetailPage.tsx` | Nuove classi prose per leggibilita |
| `src/index.css` | Stili tabelle e liste articoli |
| `src/data/articles.ts` | Riscrittura copy tutti 12 articoli |

---

## 4. STIMA LAVORO

| Task | Righe |
|------|-------|
| ArticleDetailPage.tsx | ~15 righe |
| index.css (nuovi stili) | ~25 righe |
| articles.ts (12 articoli) | ~800 righe |
| **TOTALE** | **~840 righe** |

---

## 5. RISULTATO ATTESO

### Layout
- Interlinea 2.0 invece di 1.625 (+23%)
- Margini piu generosi tra sezioni
- Tabelle stilizzate e leggibili
- Liste con marker colorati

### Copy
- Hook emotivi che catturano
- Benefici prima delle caratteristiche
- Tono conversazionale "tu/tuo"
- CTA multiple nel testo
- Urgency dove appropriato
- Case study con dati reali
