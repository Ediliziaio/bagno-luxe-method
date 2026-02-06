
# Piano di Miglioramento Pagine Legali - Revisione Esperto

## Analisi delle Criticità Attuali

### Privacy Policy - Criticità

| Problema | Gravità | Norma Violata |
|----------|---------|---------------|
| Manca indicazione del DPO o referente privacy | Media | Art. 37-39 GDPR |
| Manca riferimento al Registro dei Trattamenti | Media | Art. 30 GDPR |
| Base giuridica "legittimo interesse" non dettagliata | Alta | Art. 6.1.f GDPR (richiede bilanciamento) |
| Manca informativa su decisioni automatizzate/profilazione | Alta | Art. 22 GDPR |
| Dati di minori non menzionati | Media | Art. 8 GDPR |
| Manca riferimento al Data Privacy Framework USA aggiornato | Media | Decisione CE 2023 |
| Periodo conservazione "24 mesi" generico | Media | Principio di minimizzazione |

### Cookie Policy - Criticità

| Problema | Gravità | Norma Violata |
|----------|---------|---------------|
| Manca distinzione cookie prima/terza parte | Media | Linee Guida Garante 2021 |
| Manca riferimento al consenso preventivo | Alta | Art. 122 Codice Privacy + ePrivacy |
| Cookie Analytics presentati come se richiedessero sempre consenso | Media | Provvedimento Garante GA con IP anonimizzato |
| Manca informazione su Conversion API (server-side) | Media | Nuovi strumenti Meta/Google |
| Manca riferimento a consent management | Alta | Linee Guida Garante Cookie 2021 |
| Durata cookie non sempre aggiornata | Bassa | Best practice |

### Termini e Condizioni - Criticità

| Problema | Gravità | Norma Violata |
|----------|---------|---------------|
| Manca sezione Diritto di Recesso (14 giorni) | CRITICA | Art. 52-59 Codice Consumo |
| Manca informativa precontrattuale completa | Alta | Art. 49 Codice Consumo |
| Manca sezione su Conformità e Garanzia Legale aggiornata | Alta | Direttiva 2019/771 (recepita 2022) |
| Manca clausola sulla risoluzione delle controversie | Media | D.Lgs. 130/2015 (ADR) |
| Manca indicazione sui tempi di consegna/installazione | Media | Art. 61 Codice Consumo |
| Manca clausola sulla responsabilità del produttore | Media | D.P.R. 224/88 |
| Manca sezione sulla Forza Maggiore | Media | Best practice contrattuale |
| Clausole vessatorie non evidenziate | Alta | Art. 1341-1342 c.c. |

---

## Modifiche Tecniche Proposte

### 1. Privacy Policy (`src/pages/PrivacyPolicyPage.tsx`)

**Nuove sezioni da aggiungere:**

- **Referente Privacy**: Indicare un contatto dedicato per le richieste privacy
- **Processo decisionale automatizzato**: Sezione Art. 22 GDPR sulla profilazione
- **Minori**: Dichiarazione che il sito non è rivolto a minori di 16 anni
- **Legittimo interesse**: Dettagliare il bilanciamento degli interessi
- **Data Privacy Framework**: Aggiornare riferimento EU-US DPF 2023

**Modifiche esistenti:**

- Aggiungere email dedicata privacy (es. privacy@i-profili.it)
- Specificare categorie di destinatari dei dati
- Dettagliare la profilazione pubblicitaria

### 2. Cookie Policy (`src/pages/CookiePolicyPage.tsx`)

**Nuove sezioni da aggiungere:**

- **Banner e Consenso**: Spiegazione del sistema di consent management
- **Cookie di prima parte vs terza parte**: Distinzione chiara
- **Conversion API**: Informativa sul tracciamento server-side

**Modifiche esistenti:**

- Aggiungere nota su GA4 con IP anonimizzato (possibile senza consenso)
- Aggiornare durate cookie alle versioni attuali
- Aggiungere tabella riepilogativa tipologie

### 3. Termini e Condizioni (`src/pages/TerminiCondizioniPage.tsx`)

**Nuove sezioni CRITICHE da aggiungere:**

- **Diritto di Recesso**: 14 giorni, modulo tipo, esclusioni per beni su misura
- **Garanzia Legale di Conformità**: 2 anni + presunzione 1 anno (nuova normativa)
- **ADR/ODR**: Procedura di conciliazione alternativa
- **Tempi di Consegna**: Indicazione e rimedi per ritardo
- **Forza Maggiore**: Eventi esimenti
- **Clausole Vessatorie**: Evidenziazione secondo art. 1341 c.c.

**Modifiche esistenti:**

- Prezzi: specificare IVA al 10% per ristrutturazioni
- Pagamenti: aggiungere POS/carte come metodo
- Garanzie: allineare alla Direttiva 2019/771

---

## Dettaglio Implementazione

### Privacy Policy - Nuove Sezioni

```text
Sezione 1bis: REFERENTE PRIVACY
Per l'esercizio dei diritti e richieste privacy:
Email: privacy@i-profili.it
PEC: domusgroupsrl@legalmail.it

Sezione 5bis: PROFILAZIONE E DECISIONI AUTOMATIZZATE (Art. 22 GDPR)
- I dati raccolti tramite pixel di remarketing vengono utilizzati per:
  a) Creare segmenti di pubblico personalizzati
  b) Mostrare annunci pertinenti
  c) Ottimizzare le campagne pubblicitarie
- L'Utente può opporsi in qualsiasi momento
- Non vengono prese decisioni con effetti giuridici basate unicamente su trattamenti automatizzati

Sezione 6bis: MINORI
Il Sito e i Servizi non sono destinati a minori di 16 anni. 
Non raccogliamo consapevolmente dati di minori.
```

### Cookie Policy - Nuove Sezioni

```text
Sezione 1bis: CONSENSO AI COOKIE
Al primo accesso, viene mostrato un banner che permette di:
- Accettare tutti i cookie
- Rifiutare i cookie non necessari
- Personalizzare le preferenze
Le preferenze possono essere modificate in qualsiasi momento.

Sezione 3bis: GOOGLE ANALYTICS 4 CON ANONIMIZZAZIONE IP
Utilizziamo GA4 con anonimizzazione IP attiva. In questa configurazione,
secondo il Provvedimento del Garante, il trattamento può avvenire 
senza consenso preventivo in quanto i dati sono anonimi.
```

### Termini e Condizioni - Nuove Sezioni

```text
SEZIONE 6bis: DIRITTO DI RECESSO (Art. 52 e ss. Codice del Consumo)

Il Consumatore ha diritto di recedere dal contratto entro 14 giorni 
senza indicarne le ragioni.

Il termine decorre:
- Per i servizi: dalla conclusione del contratto
- Per i beni: dal giorno del ricevimento

ESCLUSIONI: Il diritto di recesso è ESCLUSO per:
a) Beni confezionati su misura o personalizzati (serramenti su misura)
b) Beni che rischiano di deteriorarsi
c) Servizi già completamente eseguiti con consenso espresso

IMPORTANTE: I serramenti realizzati su misura NON sono soggetti a recesso
in quanto prodotti secondo specifiche del cliente.

Per esercitare il recesso, inviare comunicazione a:
- Email: info@i-profili.it  
- PEC: domusgroupsrl@legalmail.it
- Raccomandata A/R

SEZIONE 6ter: GARANZIA LEGALE DI CONFORMITÀ (D.Lgs. 170/2021)

Il venditore risponde dei difetti di conformità entro 2 ANNI dalla consegna.

Novità normativa (dal 1/1/2022):
- Nei primi 12 MESI: il difetto si presume esistente alla consegna
- Dal 13° al 24° mese: il consumatore deve provare il difetto

Rimedi in ordine:
1. Riparazione o sostituzione (a scelta del consumatore)
2. Riduzione del prezzo
3. Risoluzione del contratto (se difetto grave)

SEZIONE 14: RISOLUZIONE ALTERNATIVA DELLE CONTROVERSIE (ADR)

In caso di controversia, il Consumatore può ricorrere a:
- Piattaforma ODR UE: https://ec.europa.eu/consumers/odr
- Negoziazione Paritetica presso le Camere di Commercio
- Organismo di mediazione accreditato dal Ministero della Giustizia

SEZIONE 15: CLAUSOLE DA APPROVARE SPECIFICAMENTE (Art. 1341 c.c.)

Ai sensi degli artt. 1341 e 1342 c.c., il Cliente dichiara di 
aver letto e di approvare specificamente le seguenti clausole:
- Art. 9: Limitazione di responsabilità
- Art. 10: Esclusione di responsabilità per link esterni
- Art. 12: Foro competente
```

---

## Riepilogo File da Modificare

| File | Righe Stimate | Priorità |
|------|---------------|----------|
| `src/pages/PrivacyPolicyPage.tsx` | +120 righe | Alta |
| `src/pages/CookiePolicyPage.tsx` | +80 righe | Media |
| `src/pages/TerminiCondizioniPage.tsx` | +180 righe | CRITICA |

---

## Benefici Attesi

- **Conformità GDPR**: Informativa completa con tutti gli elementi richiesti
- **Conformità Codice Consumo**: Protezione legale nelle vendite B2C
- **Riduzione rischi legali**: Clausole chiare su recesso e garanzie
- **Trasparenza tracciamento**: Informativa completa su tutti i pixel
- **Validità contrattuale**: Clausole vessatorie correttamente evidenziate
