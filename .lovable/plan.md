
# Piano: Creazione Pagina "Posa Qualificata"

## Obiettivo Marketing

Creare una pagina di vendita che posizioni la **posa qualificata** come elemento differenziante critico, sfruttando la paura dei disastri causati da posatori non certificati e posizionando I Profili come unica scelta sicura.

---

## Strategia Persuasiva (Framework AIDA + Fear Appeal)

### Struttura Narrativa:
1. **Attenzione** → Statistica shock sui disastri della cattiva posa
2. **Problema** → I 5 errori fatali dei posatori improvvisati
3. **Agitazione** → Cosa succede quando la posa è sbagliata (conseguenze reali)
4. **Soluzione** → Il Sistema di Posa Certificata I Profili
5. **Credibilità** → Certificazioni, formazione, garanzie
6. **Prova** → Differenza visiva prima/dopo con posa corretta
7. **Urgenza** → Perché scegliere ora (normativa, incentivi)
8. **CTA** → Richiedi un posatore certificato

---

## Contenuti della Pagina

### Sezione 1: Hero con Statistica Shock
```
Badge: "Posa Qualificata"
Titolo: "Il 70% dei problemi agli infissi nasce da una posa sbagliata"
Sottotitolo: "La finestra più costosa diventa inutile se installata male. 
Scopri perché la posa certificata fa tutta la differenza."
CTA: "Scopri il Metodo" / "Richiedi Posatore Certificato"
```

### Sezione 2: I 5 Errori Fatali della Cattiva Posa
```
1. Posa sopra il vecchio telaio
   - Crea ponti termici permanenti
   - Condensa e muffa garantite

2. Schiuma poliuretanica senza sigillatura
   - La schiuma non è impermeabile
   - Infiltrazioni d'acqua e aria

3. Finestre fuori bolla
   - Chiusura imperfetta
   - Usura prematura ferramenta

4. Nessuna preparazione del vano murario
   - Controtelaio instabile
   - Crepe e fessurazioni

5. Personale non formato
   - Nessuna responsabilità
   - Zero garanzia sulla posa
```

### Sezione 3: Le Conseguenze (Pain Points Visivi)
Grid con icone e statistiche:
- **+40% bollette** → Dispersione termica da posa errata
- **€5.000 in danni** → Costo medio per riparare una posa sbagliata
- **Muffa e condensa** → Problemi di salute per tutta la famiglia
- **Garanzia nulla** → Nessun produttore copre danni da cattiva posa

### Sezione 4: Il Sistema di Posa Certificata I Profili
```
Titolo: "Posa Certificata: 7 Garanzie che Altri Non Possono Darti"

1. Posatori con Patentino
   - Certificazione UNI 11673
   - Formazione continua obbligatoria

2. Rimozione Totale del Vecchio Telaio
   - Mai sovrapposizione
   - Correzione vano murario

3. Sistema di Posa a 3 Strati
   - Strato impermeabile
   - Strato termico
   - Strato traspirante

4. Sigillatura Perimetrale Certificata
   - Nastri autoespandenti
   - Membrane certificate

5. Controtelaio Isolato
   - Taglio termico integrato
   - Ancoraggio certificato

6. Collaudo Strumentale
   - Test tenuta aria (Blower Door opzionale)
   - Verifica termica a infrarossi

7. Garanzia 10 Anni sulla Posa
   - Scritta nel contratto
   - Intervento entro 48h
```

### Sezione 5: Confronto Visivo Posa vs Posa
```
Tabella comparativa o slider:

| Aspetto | Posa Standard | Posa Certificata I Profili |
|---------|---------------|---------------------------|
| Telaio vecchio | Lasciato in sede | Rimosso completamente |
| Sigillatura | Solo schiuma | Sistema 3 strati |
| Controtelaio | Generico | Isolato taglio termico |
| Posatori | Improvvisati | Patentino UNI 11673 |
| Garanzia posa | 1 anno (o nulla) | 10 anni |
| Collaudo | Visivo | Strumentale |
```

### Sezione 6: Il Posatore Certificato
```
Titolo: "Non un Operaio. Un Professionista Certificato."

Chi è il nostro posatore:
- Patentino UNI 11673-1 (installazione serramenti)
- Formazione tecnica annuale
- Assicurato e in regola
- Equipaggiamento professionale
- Responsabile personalmente del lavoro

Immagine: Posatore con DPI, strumenti professionali, certificato visibile
```

### Sezione 7: Certificazioni e Normativa
```
Badge certificazioni:
- UNI 11673-1 (Posa in opera serramenti)
- UNI EN 14351-1 (Norme prodotto)
- Marcatura CE
- Assicurazione professionale

Nota legale: "Dal 2020 la normativa UNI 11673 definisce i requisiti 
per la posa qualificata. I Profili è tra le poche aziende in Lombardia 
con posatori certificati."
```

### Sezione 8: CTA Finale
```
Titolo: "Non Rischiare con la Tua Casa"
Sottotitolo: "Richiedi un sopralluogo con un posatore certificato. 
Senza impegno, senza costi nascosti."

CTA Primario: "Prenota Sopralluogo con Posatore Certificato"
CTA Secondario: "Chiama Ora: 02 1234 5678"
```

---

## File da Creare/Modificare

### 1. Nuovo File: `src/pages/PosaQualificataPage.tsx`
Pagina completa con tutte le sezioni descritte sopra, seguendo il pattern di GaranziePage e ChiSiamoPage.

### 2. Modifica: `src/App.tsx`
Aggiungere la nuova route:
```typescript
import PosaQualificataPage from "./pages/PosaQualificataPage";
// ...
<Route path="/posa-qualificata" element={<PosaQualificataPage />} />
```

### 3. Modifica: `src/components/HomeHeader.tsx`
Aggiungere "Posa Qualificata" al menu di navigazione:
```typescript
const standardNavLinks = [
  { label: "Chi Siamo", href: "/chi-siamo" },
  { label: "Posa Qualificata", href: "/posa-qualificata" }, // NUOVO
  { label: "Garanzie", href: "/garanzie" },
  { label: "Articoli", href: "/articoli" },
  { label: "Contatti", href: "/contatti" },
];
```

---

## Struttura Componenti della Pagina

```
PosaQualificataPage.tsx
├── SEOHead (meta, schema breadcrumb)
├── HomeHeader
├── SEOBreadcrumb
├── PageHero (shock statistic)
├── Section: 5 Errori Fatali (cards con icone warning)
├── Section: Conseguenze (stats grid)
├── Section: Sistema 7 Garanzie (cards con checkmark)
├── Section: Confronto Tabella (comparison table)
├── Section: Il Posatore (profilo con immagine)
├── Section: Certificazioni (badge grid)
├── Section: CTA Finale (form o bottoni)
└── Footer
```

---

## SEO & Meta

```typescript
<SEOHead
  title="Posa Qualificata Serramenti | Posatori Certificati UNI 11673 | I Profili"
  description="Il 70% dei problemi agli infissi nasce da una posa sbagliata. 
    Scopri il sistema di posa certificata I Profili: posatori con patentino, 
    garanzia 10 anni, sigillatura 3 strati."
  canonical="https://iprofili.it/posa-qualificata"
/>
```

---

## Risultato Atteso

| Elemento | Prima | Dopo |
|----------|-------|------|
| Menu navigazione | 5 voci | 6 voci (+ Posa Qualificata) |
| Pagina posa | Non esistente | Landing page persuasiva completa |
| Posizionamento | Standard | Differenziante (unici con certificazione evidenziata) |
| Conversioni | N/A | CTA multipli per sopralluogo |

La pagina posizionerà I Profili come gli unici in zona con posatori realmente certificati, creando una barriera competitiva forte e giustificando il prezzo premium.
