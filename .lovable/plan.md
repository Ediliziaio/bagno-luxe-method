

# Piano: Pagina Garanzie Marketing a Risposta Diretta

## Panoramica

Riscrivere la pagina `/garanzie` mantenendo lo stile marketing a risposta diretta con confronto "I Profili vs Altri", ma aggiornando con i contenuti dettagliati del certificato di garanzia. Nessun contatto diretto, solo link all'Allegato A.

---

## Nuova Struttura della Pagina

### Sezione 1: Hero (mantenuto)
Stesso hero attuale con badge, titolo "Garanzie Blindate" e sottotitolo persuasivo.

### Sezione 2: Intro Certificato
Testo introduttivo legale ma rassicurante:
> "Con il presente certificato, I Profili S.r.l. attesta che gli infissi installati sono coperti dal sistema di garanzie di seguito descritto..."

### Sezione 3: Tabella Confronto Aggiornata
**"I Profili vs La Concorrenza"** - Tabella comparativa ampliata:

| Aspetto | I Profili | Altri |
|---------|-----------|-------|
| Profili PVC/Alluminio | 10 anni | 2 anni (obbligo legale) |
| Vetrocamera (condensa) | 10 anni | Spesso esclusa |
| Posa qualificata | 10 anni | 1 anno o nulla |
| Manutenibilità | 30 anni | "Vediamo..." |
| Penali ritardo | €200/settimana | Mai |
| Prezzo bloccato | Garantito | Costi extra a sorpresa |
| Ferramenta | 3 anni | 1 anno |

### Sezione 4: Le 5 Garanzie in Dettaglio
Cards con numeri cerchiati (①②③④⑤), ognuna con:
- Titolo impattante
- Dettagli specifici
- **Cosa fanno gli altri** (in rosso/negativo)

#### ① Garanzie sul Prodotto
Tabella 7 coperture + confronto: *"Gli altri? Solo i 2 anni obbligatori per legge."*

#### ② Manutenibilità 30 Anni
Testo persuasivo + confronto: *"Gli altri? Dopo 5 anni non trovi più i ricambi."*

#### ③ Posa Qualificata 10 Anni
UNI 11673-1 + confronto: *"Gli altri? 1 anno se va bene, poi arrangiati."*

#### ④ Prezzo Bloccato
Nessuna sorpresa + confronto: *"Gli altri? 'Ah, sono aumentate le materie prime...'"*

#### ⑤ Tempistiche con Indennizzo
€200/settimana + confronto: *"Gli altri? 'Arriviamo quando possiamo.'"*

### Sezione 5: Documenti Allegati
Lista con checkmark:
- Contratto di fornitura e posa
- Allegato A – Disciplina delle Garanzie
- Capitolato tecnico
- Verbale di consegna e collaudo
- Manuale d'uso e manutenzione

Con nota: *"Ti raccomandiamo di conservare tutta la documentazione per l'intera durata delle garanzie."*

### Sezione 6: Box Allegato A
Link prominente al documento garanzie online:
> "Le condizioni complete sono nell'Allegato A → www.i-profili.it/garanziecontratto"

### Sezione 7: CTA Finale
Sfondo primary con:
- "Vuoi Queste Garanzie per i Tuoi Infissi?"
- "Richiedi un preventivo e riceverai il contratto completo."
- Button → /contatti

---

## Dettagli Tecnici

### Modifiche al file `src/pages/GaranziePage.tsx`

**Nuovi array dati:**

```typescript
const productWarranties = [
  { coverage: "Scolorimento e crepature profili PVC/alluminio", years: "10 anni", others: "2 anni" },
  { coverage: "Condensa interna al vetrocamera", years: "10 anni", others: "Esclusa" },
  { coverage: "Incollaggio vetro-profilo", years: "10 anni", others: "Esclusa" },
  { coverage: "Pannelli portoncini d'ingresso", years: "5 anni", others: "1 anno" },
  { coverage: "Maniglie e accessori PVD", years: "5 anni", others: "6 mesi" },
  { coverage: "Funzionalità ferramenta", years: "3 anni", others: "1 anno" },
  { coverage: "Profili avvolgibili e veneziane", years: "3 anni", others: "1 anno" },
];

const mainComparison = [
  { aspect: "Garanzia profili", iprofili: "10 anni", others: "2 anni (obbligo)" },
  { aspect: "Garanzia posa", iprofili: "10 anni", others: "1 anno o nulla" },
  { aspect: "Manutenibilità", iprofili: "30 anni", others: "Non garantita" },
  { aspect: "Penali ritardo", iprofili: "€200/settimana", others: "Mai" },
  { aspect: "Prezzo bloccato", iprofili: "Garantito", others: "Costi extra" },
  { aspect: "Assistenza", iprofili: "Diretta", others: "Call center" },
];

const attachedDocuments = [
  "Contratto di fornitura e posa in opera",
  "Allegato A – Disciplina delle Garanzie Contrattuali",
  "Capitolato tecnico",
  "Verbale di consegna e collaudo",
  "Manuale d'uso e manutenzione",
];
```

**Nuove icone:**
```typescript
import { 
  Shield, Clock, FileText, Wrench, Euro, Timer, 
  CheckCircle, ExternalLink, X, Check
} from "lucide-react";
```

**Rimozioni:**
- Rimuovere `Phone` e `AlertTriangle` dalle icone
- Rimuovere il bottone "Chiama per Info" con numero di telefono
- Rimuovere riferimenti a contatti diretti

---

## Stile Marketing a Risposta Diretta

Ogni sezione garanzia includerà un box "rosso" con confronto competitor:

```tsx
<div className="mt-4 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
  <p className="text-sm text-destructive flex items-center gap-2">
    <X className="w-4 h-4" />
    <span><strong>Gli altri?</strong> Solo i 2 anni obbligatori per legge. Poi sei da solo.</span>
  </p>
</div>
```

Questo crea il contrasto emotivo tipico del marketing a risposta diretta.

---

## Risultato Atteso

La pagina `/garanzie` diventerà un documento persuasivo che:
1. Mostra le garanzie dettagliate in modo professionale
2. Confronta costantemente con i competitor (che non le hanno)
3. Crea urgenza emotiva ("Gli altri ti abbandonano")
4. Guida verso la CTA finale senza contatti intermedi
5. Rimanda all'Allegato A per i dettagli legali completi

