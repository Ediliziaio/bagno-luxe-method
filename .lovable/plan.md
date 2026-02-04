

# Piano: Restyling Homepage con Focus Direct Response Marketing

## Analisi Situazione Attuale

### Problemi Identificati

**1. Hero Section:**
- Copy generico e debole ("La retta via verso il comfort abitativo")
- Manca urgenza e specificity
- CTA vaghe ("Richiedi Preventivo Gratuito", "Scopri i Servizi")
- Nessun numero/risultato concreto
- Reference a "aziende" da rimuovere

**2. Sezione Servizi:**
- Due card Privati/Aziende - va rimossa card Aziende
- Copy debole senza benefici specifici
- CTA "Scegli I Profili" non e' action-oriented

**3. WhyUs Section:**
- Copy troppo generico ("Da oltre 20 anni...")
- Manca problema/soluzione
- CTA "Conosci I Profili" debole

**4. Mancano sezioni chiave:**
- PRODOTTI (Finestre, Porte-finestre, Portoncini, Zanzariere, Tapparelle, etc.)
- GARANZIE concrete come nella landing /filippo
- RISULTATI/NUMERI
- URGENZA (Bonus 50% in scadenza)

---

## Ispirazione dai Siti di Riferimento

**Da Teknofinestre:**
- Numeri in evidenza (anni esperienza, finestre installate, clienti soddisfatti)
- Sezione "Garanzie" ben strutturata (Soddisfazione Totale, Efficienza Energetica, Assistenza)
- Diagnosi energetica come lead magnet

**Da Sunsystem:**
- Header con telefono/email visibili
- Banner urgenza in alto ("Bonus 50% - Approfittane ora!")
- Sezione prodotti categorizzata (Serramenti, Porte, Pergolati, Altri prodotti)
- "Garanzia a vita sulla posa"
- Copy specifico su territorio servito

**Da Domino.casa:**
- Design prodotto-centrico con card offerte e prezzi
- Categorie chiare (PVC, Legno-Alluminio, Persiane, Tapparelle, Zanzariere)
- CTA "Richiedi preventivo" sempre visibile

**Dalla Landing /filippo:**
- Copy orientato al problema/paura
- Garanzie blindate con durate specifiche
- Blocchi di contrasto (paura vs soluzione)
- Sistema DOMUS come USP

---

## Struttura Homepage Rinnovata

### 1. HEADER (HomeHeader.tsx)
Aggiungere:
- Numero telefono cliccabile visibile
- Email aziendale
- Badge urgenza: "Bonus 50% fino al 31/12"

### 2. HERO SECTION (HomeHero.tsx) - RISCRITTA

**Prima (attuale):**
```
Headline: "La retta via verso il comfort abitativo"
Sottotitolo: "Serramenti di qualita' per privati e aziende"
```

**Dopo (direct response):**
```
Badge: "Bonus 50% - Ancora per poco"

Headline: "Finestre nuove in 90 giorni 
o ti rimborsiamo 200 euro a settimana"

Sottotitolo: "Serramenti in PVC con garanzia 10 anni sulla posa.
Sopralluogo gratuito in 48 ore. Senza impegno."

CTA primario: "Prenota Sopralluogo Gratuito" (bianco, prominente)
CTA secondario: "Calcola Risparmio Energetico" (outline)

Trust badges sotto CTA:
[Garanzia 10 Anni] [Posa Certificata] [Bonus 50%] [Made in Italy]
```

### 3. NUMERI/RISULTATI (NUOVA SEZIONE)

Dopo l'hero, sezione con contatori animati (ispirata a /filippo e Teknofinestre):

```
+15 anni di esperienza
+2.500 finestre installate
98% clienti soddisfatti
90 giorni tempo medio consegna
```

### 4. PERCHE' I PROFILI (HomeWhyUs.tsx) - RISCRITTA

**Prima (attuale):**
Copy generico su esperienza e qualita'.

**Dopo (problem-agitate-solve):**

```
Titolo: "Stanco di preventivi confusi e tempistiche infinite?"

Problema: "La maggior parte delle aziende ti promette 
'consegna rapida' e poi aspetti mesi. Ti dicono 'garanzia inclusa' 
ma se chiami dopo 3 anni non risponde nessuno."

Soluzione: "Con I Profili e' diverso:
- Tempistiche scritte nel contratto (90 giorni o rimborso)
- Posatori nostri dipendenti, non subappaltatori
- Garanzia 10 anni sulla posa, non sui convenevoli"

CTA: "Vedi le nostre garanzie"
```

Mantenere il marquee con i vantaggi.

### 5. PRODOTTI E SERVIZI (NUOVA SEZIONE - HomeProducts.tsx)

Griglia di prodotti con card (ispirata a Sunsystem e Domino.casa):

```
Titolo: "I Nostri Prodotti"
Sottotitolo: "Serramenti in PVC ad alto isolamento termico"

Card prodotti (griglia 2x3 mobile, 3x2 desktop):

1. FINESTRE
   - Immagine
   - "Sistema DOMUS 76mm - Tripla guarnizione"
   - CTA: "Scopri"

2. PORTE-FINESTRE  
   - Immagine
   - "Massima luminosita', massimo isolamento"
   - CTA: "Scopri"

3. PORTONCINI D'INGRESSO
   - Immagine  
   - "Sicurezza e design per la tua casa"
   - CTA: "Scopri"

4. TAPPARELLE
   - Immagine
   - "Avvolgibili motorizzate e manuali"
   - CTA: "Scopri"

5. ZANZARIERE
   - Immagine
   - "Protezione tutto l'anno"
   - CTA: "Scopri"

6. CASSONETTI COIBENTATI
   - Immagine
   - "Stop ai ponti termici"
   - CTA: "Scopri"
```

### 6. SISTEMA DOMUS (NUOVA SEZIONE - HomeSystem.tsx)

Sezione dedicata al prodotto principale (estratta da /filippo):

```
Titolo: "Il Sistema DOMUS: costruito per durare 30 anni"

3 blocchi espandibili:
1. Anima in acciaio 2mm (il doppio dello standard)
2. 3 guarnizioni (tripla barriera)
3. Profilo 76mm (equilibrio perfetto)

CTA: "Scopri i dettagli tecnici" (link a /filippo#domus)
```

### 7. PROCESSO (HomeSteps.tsx) - MIGLIORATA

**Prima (attuale):**
Copy generico sui 3 step.

**Dopo (con specificity):**

```
Titolo: "Come funziona: 3 step, zero pensieri"

Step 1: SOPRALLUOGO GRATUITO
"Veniamo a casa tua entro 48 ore. 
Misuriamo, analizziamo, ti diamo un preventivo scritto. 
Se non ti convince, nessun problema."

Step 2: PREVENTIVO TRASPARENTE
"Nessun costo nascosto. Prezzo finito, tutto incluso:
smontaggio vecchi infissi, posa, smaltimento, pratiche bonus."

Step 3: INSTALLAZIONE IN 90 GIORNI
"Posatori certificati nostri dipendenti.
Tempi garantiti per contratto.
Se sforiamo, ti rimborsiamo €200/settimana."

CTA: "Prenota il tuo sopralluogo"
```

### 8. GARANZIE (NUOVA SEZIONE - HomeGuarantees.tsx)

Ispirata alla landing /filippo, versione compatta:

```
Titolo: "Garanzie blindate. Scritte nel contratto."

4 card:
1. PRODOTTO A VITA - Manutenibilita' garantita per sempre
2. POSA 10 ANNI - Qualsiasi difetto, interveniamo gratis
3. SODDISFATTO O RIMBORSATO 30 GIORNI
4. TEMPISTICHE 90 GIORNI - O rimborso €200/settimana

CTA: "Scarica il PDF delle garanzie"
```

### 9. FINANZIAMENTI (HomeFinancing.tsx) - MIGLIORATA

Aggiungere urgenza e specificity:

```
Titolo: "Bonus 50%: ancora per poco"

Sottotitolo: "Nel 2025 la detrazione scende al 36%. 
Approfitta ora del 50% prima che sia troppo tardi."

Benefici:
- Detrazione 50% in 10 rate annuali
- Pagamento rateizzato fino a 120 mesi
- Pratiche ENEA incluse nel prezzo
- Sconto in fattura (se disponibile)

CTA: "Calcola quanto risparmi"
```

### 10. CONTATTI (HomeContact.tsx) - MIGLIORATA

Aggiungere urgenza e social proof:

```
Titolo: "Richiedi il sopralluogo gratuito"
Sottotitolo: "Ti ricontattiamo entro 24 ore. 
Sopralluogo in 48 ore. Preventivo in 7 giorni."

Form con campi:
- Nome e Cognome
- Telefono (obbligatorio)
- Email
- Tipo intervento (select: Nuova installazione / Sostituzione / Altro)
- Messaggio (opzionale)

CTA: "Prenota Sopralluogo Gratuito"

Trust elements sotto form:
"Oltre 2.500 famiglie soddisfatte in Lombardia"
[★★★★★ 4.9/5 - 127 recensioni]
```

---

## Miglioramenti Copy e CTA

### CTA Vecchie vs Nuove

| Posizione | Prima | Dopo |
|-----------|-------|------|
| Hero primario | "Richiedi Preventivo Gratuito" | "Prenota Sopralluogo Gratuito" |
| Hero secondario | "Scopri i Servizi" | "Calcola Risparmio Energetico" |
| WhyUs | "Conosci I Profili" | "Vedi le nostre garanzie" |
| Servizi | "Scegli I Profili" | "Scopri le soluzioni" |
| Finanziamenti | "Richiedi Informazioni" | "Calcola quanto risparmi" |
| Contatti | "Invia Richiesta" | "Prenota Sopralluogo Gratuito" |

### Principi Direct Response Applicati

1. **Specificity**: Numeri concreti (90 giorni, 10 anni, €200/settimana)
2. **Urgency**: Bonus 50% in scadenza, "ancora per poco"
3. **Social Proof**: Numeri clienti, recensioni
4. **Risk Reversal**: Garanzie dettagliate, "soddisfatto o rimborsato"
5. **Problem-Agitate-Solve**: Identificare paura, amplificarla, risolvere
6. **Clear CTA**: Azioni specifiche, non generiche

---

## Riepilogo File da Modificare

| File | Azione | Descrizione |
|------|--------|-------------|
| `HomeHeader.tsx` | MODIFICARE | Aggiungere telefono, email, badge urgenza |
| `HomeHero.tsx` | RISCRIVERE | Nuovo copy direct response, trust badges |
| `HomeWhyUs.tsx` | RISCRIVERE | Problem-agitate-solve, nuovo copy |
| `HomeServices.tsx` | MODIFICARE | Rimuovere Aziende, tenere solo Privati, migliorare copy |
| `HomeSteps.tsx` | MIGLIORARE | Aggiungere specificity ai 3 step |
| `HomeFinancing.tsx` | MIGLIORARE | Aggiungere urgenza bonus 50% |
| `HomeContact.tsx` | MIGLIORARE | Aggiungere trust elements, select tipo intervento |
| `HomePage.tsx` | MODIFICARE | Aggiungere nuove sezioni |

## File da Creare

| File | Descrizione |
|------|-------------|
| `HomeStats.tsx` | Sezione numeri/risultati con contatori |
| `HomeProducts.tsx` | Griglia prodotti (6 card) |
| `HomeSystem.tsx` | Sistema DOMUS in sintesi |
| `HomeGuarantees.tsx` | Garanzie blindate |

---

## Ordine Sezioni Homepage Finale

1. Header (con telefono + badge urgenza)
2. Hero (nuovo copy)
3. Stats (numeri risultati)
4. WhyUs (problem-agitate-solve + marquee)
5. Products (griglia 6 prodotti)
6. System DOMUS (sintesi tecnica)
7. Steps (processo migliorato)
8. Guarantees (4 garanzie blindate)
9. Financing (con urgenza bonus)
10. Contact (con trust elements)
11. Footer

---

## Stima Lavoro

- 4 file da creare (~400 righe)
- 7 file da modificare (~300 righe di modifiche)
- Totale: ~700 righe di codice

