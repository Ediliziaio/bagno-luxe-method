

# Piano: Redesign Completo HeroSection

## Panoramica
Riscrivere completamente la HeroSection con un nuovo approccio narrativo: storytelling emotivo + 4 blocchi a contrasto "paura vs soluzione" invece delle statistiche numeriche.

---

## Nuova Struttura della Sezione

### PARTE 1: Apertura Narrativa

**Badge superiore:**
"HAI GIA' IL TUO PROGETTO UNICO PER LA TUA CASA"

**Headline principale (2 righe):**
"Stai per fare un investimento IMPORTANTE PER LA TUA CASA E VITA.
Prenditi 5 minuti per non sbagliarlo."

**Sottotitolo:**
"Le finestre le vedrai ogni giorno per i prossimi 30 anni. Non e' una decisione da prendere guardando solo il prezzo."

**Copy narrativo (blocco di testo):**
- Hai fatto il sopralluogo. Hai il preventivo.
- Magari ne hai anche altri da confrontare.
- Ma prima di firmare qualsiasi cosa, c'e' qualcosa che devi sapere.
- Qualcosa che gli altri preventivi non ti dicono...

**Lista "Questa pagina ti mostra":**
- Cosa succede davvero quando scegli il prezzo piu' basso
- Cosa ti nascondono i preventivi "tutto compreso"
- Perche' alcune aziende possono garantire 20 anni e altre solo 2
- Come evitare di buttare migliaia di euro

**Frase finale:**
"Non ti chiediamo di scegliere noi. Ti chiediamo di scegliere con tutte le informazioni."

---

### PARTE 2: Barra Visiva - I 4 Blocchi di Contrasto

Layout: 4 card verticali, ognuna con struttura:
- Icona grande
- Titolo
- "Frase paura" (cosa dicono gli altri - in grigio/rosso)
- "Soluzione" (cosa facciamo noi - in teal)

| # | Icona | Titolo | Paura | Soluzione |
|---|-------|--------|-------|-----------|
| 1 | Shield | GARANZIA A VITA | "La garanzia? 2 anni, come da legge" | Prodotto garantito per sempre. Posa garantita 10 anni. Se qualcosa va storto tra 15 anni, e' ancora un problema nostro. |
| 2 | HardHat | POSATORI CERTIFICATI | "Tanto chi installa e' uguale" | Patentino verificabile. Documenti in regola. In caso di controllo, nessun problema. Ne' per noi, ne' per te. |
| 3 | FileText | TUTTO PER ISCRITTO | "Stia tranquillo, ci pensiamo noi" | Ogni promessa e' nel contratto. Nero su bianco. Niente sorprese. Niente "ma io avevo capito che..." |
| 4 | Clock | TEMPISTICHE CERTE | "Iniziamo tra un paio di settimane... piu' o meno" | 90 giorni dalla conferma o ti rimborsiamo*. |

---

### PARTE 3: Scroll Indicator

Freccia animata con testo: "Continua a leggere"

---

## Design e Stile

### Background:
- Mantiene lo slider di immagini finestre
- Overlay scuro piu' intenso (90% invece di 85%) per leggibilita' testo lungo

### Layout Generale:
- Contenuto centrato nella parte superiore
- Barra visiva in basso prima dello scroll indicator
- Padding generoso tra le sezioni

### Tipografia:
- Badge: uppercase, piccolo, teal
- Headline: Bold, grande, bianco con "IMPORTANTE" evidenziato
- Sottotitolo: Grigio chiaro, italic
- Copy: Testo normale, grigio, con buona interlinea
- Lista: Icone check verdi, testo bianco

### Card dei 4 Blocchi:
- `glass-card` con bordo sottile
- Icona grande in cerchio teal
- Titolo in maiuscolo, bianco, bold
- "Frase paura" in grigio con virgolette, font piu' piccolo
- "Soluzione" in bianco/teal, font normale
- Hover: glow teal + bordo evidenziato

### Animazioni:
- Fade-up sequenziale per ogni elemento
- Stagger delay per i 4 blocchi
- Freccia scroll con animazione bounce

---

## Struttura Codice

```text
HeroSection
├── Background Slider (invariato)
├── Overlay scuro (intensificato)
├── Container Contenuto
│   ├── Badge "HAI GIA' IL TUO PROGETTO..."
│   ├── Headline principale (2 righe)
│   ├── Sottotitolo
│   ├── Copy narrativo (paragrafi)
│   ├── Lista "Questa pagina ti mostra" (4 punti)
│   ├── Frase finale
│   ├── Separatore visivo
│   ├── Titolo "COSA CAMBIA SCEGLIENDO I PROFILI"
│   ├── Grid 4 blocchi contrasto
│   └── Scroll indicator con freccia
└── Slider dots (opzionale, puo' essere rimosso)
```

---

## Icone Necessarie (lucide-react)

- `Home` o `Sparkles` - per badge
- `Shield` - Garanzia
- `HardHat` o `Wrench` - Posatori
- `FileText` o `ClipboardCheck` - Per iscritto
- `Clock` o `Timer` - Tempistiche
- `ChevronDown` - Scroll indicator
- `Check` - Per la lista punti

---

## Modifiche ai File

| File | Azione |
|------|--------|
| `src/components/HeroSection.tsx` | RISCRIVERE - Nuovo layout completo |

---

## Dettagli Implementativi

### Nuovi Dati per i 4 Blocchi:

```text
contrastBlocks = [
  {
    icon: Shield,
    title: "GARANZIA A VITA",
    fear: "\"La garanzia? 2 anni, come da legge\"",
    solution: "Prodotto garantito per sempre. Posa garantita 10 anni. Se qualcosa va storto tra 15 anni, e' ancora un problema nostro."
  },
  {
    icon: HardHat,
    title: "POSATORI CERTIFICATI",
    fear: "\"Tanto chi installa e' uguale\"",
    solution: "Patentino verificabile. Documenti in regola. In caso di controllo, nessun problema. Ne' per noi, ne' per te."
  },
  {
    icon: FileText,
    title: "TUTTO PER ISCRITTO",
    fear: "\"Stia tranquillo, ci pensiamo noi\"",
    solution: "Ogni promessa e' nel contratto. Nero su bianco. Niente sorprese. Niente \"ma io avevo capito che...\""
  },
  {
    icon: Clock,
    title: "TEMPISTICHE CERTE",
    fear: "\"Iniziamo tra un paio di settimane... piu' o meno\"",
    solution: "90 giorni dalla conferma o ti rimborsiamo*."
  }
]
```

### Lista Punti "Questa pagina ti mostra":

```text
pageShowsPoints = [
  "Cosa succede davvero quando scegli il prezzo piu' basso",
  "Cosa ti nascondono i preventivi \"tutto compreso\"",
  "Perche' alcune aziende possono garantire 20 anni e altre solo 2",
  "Come evitare di buttare migliaia di euro"
]
```

---

## Riepilogo Visivo

```text
+--------------------------------------------------+
| [SLIDER BACKGROUND + OVERLAY SCURO]              |
|                                                  |
|   [Badge: HAI GIA' IL TUO PROGETTO...]           |
|                                                  |
|   Stai per fare un investimento                  |
|   IMPORTANTE PER LA TUA CASA E VITA.             |
|   Prenditi 5 minuti per non sbagliarlo.          |
|                                                  |
|   "Le finestre le vedrai ogni giorno..."         |
|                                                  |
|   Hai fatto il sopralluogo. Hai il preventivo... |
|   [copy narrativo completo]                      |
|                                                  |
|   Questa pagina ti mostra:                       |
|   ✓ Cosa succede quando scegli il prezzo...      |
|   ✓ Cosa ti nascondono i preventivi...           |
|   ✓ Perche' alcune aziende possono garantire...  |
|   ✓ Come evitare di buttare migliaia di euro     |
|                                                  |
|   "Non ti chiediamo di scegliere noi..."         |
|                                                  |
|   ─────────────────────────────────────────      |
|                                                  |
|   COSA CAMBIA SCEGLIENDO I PROFILI               |
|                                                  |
|   +--------+ +--------+ +--------+ +--------+    |
|   | Shield | | HardHat| | File   | | Clock  |    |
|   | GARANZIA| POSATORI| SCRITTO | TEMPI   |      |
|   | "2 anni"| "uguale"| "tranq."| "piu' o"|     |
|   | SOLUZ.  | SOLUZ.  | SOLUZ.  | SOLUZ.  |      |
|   +--------+ +--------+ +--------+ +--------+    |
|                                                  |
|              Continua a leggere                  |
|                   ↓ (animata)                    |
+--------------------------------------------------+
```

---

## Riepilogo Deliverables

- **1 file** da riscrivere: `HeroSection.tsx`
- **Nuovo layout**: Storytelling + 4 blocchi contrasto
- **Rimozione**: Statistiche numeriche animate
- **Mantenimento**: Slider background, animazioni framer-motion
- **Lunghezza stimata**: ~300 righe di codice

