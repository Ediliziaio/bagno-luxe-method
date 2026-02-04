

# Piano: Homepage I Profili (Solo Fase 1)

## Panoramica
Creare una homepage professionale per "I Profili" ispirata al design moderno di Anythink.it, con i colori teal/dark del brand. La pagina `/filippo` resta invariata come landing page separata.

---

## Struttura Routing

| Percorso | Componente | Descrizione |
|----------|------------|-------------|
| `/` | HomePage | Homepage principale I Profili |
| `/filippo` | Index (esistente) | Landing page campagna (invariata) |

---

## Sezioni Homepage

### 1. HERO SECTION
- Background teal gradient
- Headline: "La retta via verso il **comfort abitativo**"
- Sottotitolo: "Serramenti di qualita' per privati e aziende"
- CTA: "Richiedi Preventivo"
- Freccia scroll animata

### 2. PERCHE' SCEGLIERCI + MARQUEE
- Testo descrittivo sui vantaggi
- Ticker orizzontale infinito con testo scorrevole

### 3. SERVIZI (Due Card)
- Card "PRIVATI" con immagine + overlay
- Card "AZIENDE" con immagine + overlay
- Bottoni CTA per ogni card

### 4. PROCESSO CHIAVI IN MANO (3 Step)
- Step 1: Sopralluogo Gratuito
- Step 2: Preventivo Personalizzato
- Step 3: Installazione Certificata

### 5. FINANZIAMENTI
- Detrazioni fiscali 50%
- Ecobonus
- Pagamento rateizzato

### 6. CONTATTI/CTA FINALE
- Form semplice (nome, email, telefono, messaggio)
- Info azienda

### 7. FOOTER
- Riutilizzo Footer esistente

---

## File da Creare

| File | Descrizione |
|------|-------------|
| `src/pages/HomePage.tsx` | Pagina principale homepage |
| `src/components/HomeHeader.tsx` | Header con navigazione multi-pagina |
| `src/components/home/HomeHero.tsx` | Hero con sfondo teal |
| `src/components/home/HomeWhyUs.tsx` | Perche' sceglierci + marquee |
| `src/components/home/HomeServices.tsx` | Card Privati/Aziende |
| `src/components/home/HomeSteps.tsx` | Processo 3 step |
| `src/components/home/HomeFinancing.tsx` | Sezione finanziamenti |
| `src/components/home/HomeContact.tsx` | Form contatti |

## File da Modificare

| File | Modifica |
|------|----------|
| `src/App.tsx` | Aggiungere route `/` per HomePage |

---

## Design

### Palette Colori
- Background Hero: Teal gradient (#086781)
- Background scuro: #1D1D1C
- Testo: Bianco su teal/scuro
- Accenti: Teal (#086781)

### Componenti Stilistici
- Marquee ticker infinito con CSS animation
- Card con immagini + overlay scuro
- Step numerati con icone
- Glass card per sezioni scure
- Animazioni framer-motion

### Responsive
- Mobile: Layout stack verticale
- Tablet: 2 colonne per servizi
- Desktop: Layout completo

---

## Navigazione Header

Link principali (senza sotto-pagine per ora):
- Logo (link a /)
- "Chi Siamo" (anchor #chi-siamo)
- "Servizi" (anchor #servizi)
- "Contatti" (anchor #contatti)
- CTA: "Richiedi Preventivo"

---

## Riepilogo Deliverables

- 8 nuovi file (1 pagina + 7 componenti)
- 1 file modificato (App.tsx)
- Immagini riutilizzate: `home-windows.jpg`, `window-after-*.jpg`, `family-comfort.jpg`
- Stima: ~600-700 righe di codice totali

