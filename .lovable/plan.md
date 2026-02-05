
# Piano: Sitemap.xml, Robots.txt Ottimizzato + Nuovi Articoli SEO

## Panoramica

Questo piano include tre interventi chiave per migliorare l'indicizzazione SEO:
1. **Creazione sitemap.xml dinamica** - Include tutte le pagine, prodotti e articoli
2. **Ottimizzazione robots.txt** - Riferimento sitemap e regole specifiche per crawler
3. **6 nuovi articoli blog** - Ottimizzati per keyword: "infissi Milano", "serramenti Lombardia", "bonus 50%"

---

## 1. SITEMAP.XML DINAMICA

### Approccio Tecnico

Poiche il progetto e una SPA React (non SSR), creeremo:
1. **Script di generazione** che crea sitemap.xml statica nella cartella public
2. **Componente per sitemap aggiornata** basato sui dati esistenti

### Struttura Sitemap

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <!-- PAGINE PRINCIPALI -->
  <url>
    <loc>https://iprofili.it/</loc>
    <lastmod>2026-02-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://iprofili.it/prodotti</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://iprofili.it/chi-siamo</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://iprofili.it/garanzie</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://iprofili.it/contatti</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://iprofili.it/articoli</loc>
    <priority>0.9</priority>
  </url>

  <!-- PRODOTTI (12 pagine) -->
  <url>
    <loc>https://iprofili.it/prodotti/domus</loc>
    <priority>0.8</priority>
  </url>
  <!-- ... altri 11 prodotti -->

  <!-- ARTICOLI BLOG (12 pagine con i nuovi) -->
  <url>
    <loc>https://iprofili.it/articoli/come-scegliere-infissi-pvc-lombardia</loc>
    <lastmod>2026-01-15</lastmod>
    <priority>0.7</priority>
  </url>
  <!-- ... altri articoli -->

</urlset>
```

### URL Totali nella Sitemap

| Categoria | Numero URL | Priority |
|-----------|------------|----------|
| Homepage | 1 | 1.0 |
| Pagine principali | 5 | 0.8-0.9 |
| Prodotti | 12 | 0.8 |
| Articoli Blog | 12 (6 esistenti + 6 nuovi) | 0.7 |
| **TOTALE** | **30 URL** | - |

---

## 2. ROBOTS.TXT OTTIMIZZATO

### Nuovo Contenuto

```text
# robots.txt per I Profili - iprofili.it
# Ultimo aggiornamento: Febbraio 2026

User-agent: *
Allow: /
Disallow: /filippo

# Sitemap
Sitemap: https://iprofili.it/sitemap.xml

# Googlebot specifico
User-agent: Googlebot
Allow: /
Crawl-delay: 1

# Bingbot
User-agent: Bingbot
Allow: /
Crawl-delay: 2

# Social Media Crawlers
User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: LinkedInBot
Allow: /

# Block AI training crawlers (opzionale ma consigliato)
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

# Block bad bots
User-agent: AhrefsBot
Crawl-delay: 10

User-agent: SemrushBot
Crawl-delay: 10
```

### Miglioramenti Chiave

- **Sitemap reference** - Essenziale per indicizzazione
- **Crawl-delay** - Protegge il server da crawling eccessivo
- **Blocco AI crawlers** - Protegge i contenuti dal training AI
- **Disallow /filippo** - Nasconde la route di test

---

## 3. NUOVI ARTICOLI BLOG (6 Articoli)

### Strategia Keyword

| Keyword Target | Volume Ricerca | Articolo |
|----------------|----------------|----------|
| **infissi Milano** | 2.400/mese | Articolo 1 |
| **serramenti Lombardia** | 1.300/mese | Articolo 2 |
| **bonus infissi 50%** | 3.600/mese | Gia esistente, rafforzato |
| **preventivo infissi** | 1.800/mese | Articolo 3 |
| **infissi PVC prezzi** | 2.900/mese | Articolo 4 |
| **sostituzione finestre costi** | 1.400/mese | Articolo 5 |
| **isolamento termico finestre** | 880/mese | Articolo 6 |

### Dettaglio Nuovi Articoli

**Articolo 1: infissi-milano-guida-completa**
```text
Titolo: Infissi a Milano: Guida Completa alla Sostituzione nel 2026
Meta: Tutto su infissi a Milano: prezzi, bonus fiscali, installatori certificati. 
      Guida completa con tempistiche e consigli pratici.
Contenuto: 1.500+ parole
Focus: 
  - Quartieri di Milano e esigenze specifiche
  - Normative condominiali Milano
  - Tempistiche medie per installazione
  - Case study reali di clienti milanesi
```

**Articolo 2: serramenti-lombardia-produttori**
```text
Titolo: I Migliori Serramenti in Lombardia: Come Scegliere nel 2026
Meta: Guida ai serramenti in Lombardia. Confronto produttori, materiali 
      e consigli per scegliere l'installatore giusto nella tua provincia.
Contenuto: 1.200+ parole
Focus:
  - Province lombarde e clima specifico
  - Produttori locali vs nazionali
  - Certificazioni da richiedere
  - Zone climatiche Lombardia (E, F)
```

**Articolo 3: preventivo-infissi-cosa-controllare**
```text
Titolo: Preventivo Infissi: 10 Voci da Controllare Prima di Firmare
Meta: Come leggere un preventivo infissi senza sorprese. Le 10 voci essenziali, 
      i costi nascosti e cosa pretendere dall'installatore.
Contenuto: 1.400+ parole
Focus:
  - Anatomia di un preventivo corretto
  - Voci obbligatorie vs facoltative
  - Red flags da evitare
  - Confronto preventivi: caso pratico
```

**Articolo 4: infissi-pvc-prezzi-2026**
```text
Titolo: Prezzi Infissi PVC nel 2026: Listino Aggiornato e Confronto
Meta: Quanto costano gli infissi in PVC nel 2026? Listino prezzi aggiornato, 
      confronto tra fasce e come risparmiare senza rinunciare alla qualita.
Contenuto: 1.600+ parole
Focus:
  - Range prezzi per tipologia
  - Fattori che influenzano il prezzo
  - Confronto entry-level vs premium
  - ROI e payback period
```

**Articolo 5: costi-sostituzione-finestre**
```text
Titolo: Sostituzione Finestre: Tutti i Costi da Considerare nel 2026
Meta: Costi reali per sostituire le finestre: infissi, posa, smaltimento, 
      pratiche. Budget completo con esempi per appartamento e villa.
Contenuto: 1.300+ parole
Focus:
  - Costo infissi + posa + accessori
  - Smaltimento vecchi infissi
  - Pratiche edilizie se necessarie
  - Budget per appartamento vs villa
```

**Articolo 6: isolamento-termico-finestre-guida**
```text
Titolo: Isolamento Termico Finestre: Come Eliminare Spifferi e Condensa
Meta: Guida tecnica all'isolamento termico delle finestre. Trasmittanza, 
      vetri basso emissivi, guarnizioni: tutto quello che devi sapere.
Contenuto: 1.400+ parole
Focus:
  - Spiegazione trasmittanza Uw
  - Tipi di vetro: doppio, triplo, basso emissivo
  - Guarnizioni e tenuta all'aria
  - Test pratici per verificare isolamento
```

### Struttura Dati Nuovi Articoli

```typescript
// Esempio struttura per articles.ts
{
  id: "infissi-milano",
  slug: "infissi-milano-guida-completa-2026",
  title: "Infissi a Milano: Guida Completa alla Sostituzione nel 2026",
  metaTitle: "Infissi Milano 2026: Prezzi, Bonus e Installatori | Guida",
  metaDescription: "Tutto sugli infissi a Milano: prezzi medi, bonus 50%, installatori certificati. Guida completa con tempistiche e consigli pratici per milanesi.",
  category: "Guide Locali",
  tags: ["infissi Milano", "serramenti Milano", "finestre Milano", "bonus 50% Milano"],
  date: "3 Febbraio 2026",
  dateISO: "2026-02-03",
  author: {
    name: "Marco Bianchi",
    role: "Consulente Tecnico"
  },
  readingTime: "10 min",
  relatedArticles: ["serramenti-lombardia", "preventivo-infissi", "bonus-50-2025"]
}
```

---

## 4. FILE DA CREARE

| File | Descrizione |
|------|-------------|
| `public/sitemap.xml` | Sitemap statica con tutte le URL |
| `scripts/generate-sitemap.js` | Script per rigenerare sitemap (opzionale) |

## 5. FILE DA MODIFICARE

| File | Modifica |
|------|----------|
| `public/robots.txt` | Ottimizzazione completa con sitemap reference |
| `src/data/articles.ts` | Aggiunta 6 nuovi articoli ottimizzati SEO |

---

## 6. CONTENUTI ARTICOLI - DETTAGLIO

### Articolo 1: Infissi Milano (Contenuto Completo)

```html
<h2 id="perche-milano">Perche Milano ha esigenze specifiche per gli infissi</h2>
<p>Milano presenta sfide uniche per chi deve sostituire gli infissi...</p>

<h2 id="normative-condominio">Normative condominiali a Milano</h2>
<p>La maggior parte degli appartamenti milanesi si trova in condominio...</p>

<h2 id="quartieri">Infissi per quartiere: esigenze diverse</h2>
<h3>Centro storico e Brera</h3>
<p>Vincoli architettonici richiedono infissi con estetica tradizionale...</p>

<h3>Navigli e Porta Romana</h3>
<p>Zone caratterizzate da palazzi d'epoca con finestre ad arco...</p>

<h3>City Life e Porta Nuova</h3>
<p>Architettura moderna che richiede grandi vetrate e design minimale...</p>

<h2 id="prezzi-milano">Prezzi medi infissi a Milano nel 2026</h2>
<table>
  <tr><th>Tipologia</th><th>Prezzo medio al mq</th></tr>
  <tr><td>PVC standard</td><td>280-350€</td></tr>
  <tr><td>PVC premium</td><td>400-550€</td></tr>
  <tr><td>Alluminio</td><td>450-650€</td></tr>
  <tr><td>Legno-alluminio</td><td>600-900€</td></tr>
</table>

<h2 id="tempistiche">Tempistiche di installazione a Milano</h2>
<p>Per un appartamento medio (5-7 finestre): 3-4 settimane dalla firma...</p>

<h2 id="case-study">Caso studio: appartamento Navigli</h2>
<p>Mario, 45 anni, appartamento 85mq con 6 finestre ad arco...</p>
```

---

## 7. STIMA LAVORO

| Task | Righe Codice |
|------|-------------|
| sitemap.xml statica | ~150 righe XML |
| robots.txt ottimizzato | ~40 righe |
| 6 nuovi articoli in articles.ts | ~600 righe |
| **TOTALE** | **~790 righe** |

---

## 8. CHECKLIST SEO POST-IMPLEMENTAZIONE

Dopo l'implementazione, verificare:

- [ ] Sitemap accessibile su /sitemap.xml
- [ ] Robots.txt contiene riferimento sitemap
- [ ] Tutti i nuovi articoli hanno URL corretti
- [ ] Meta title < 60 caratteri
- [ ] Meta description < 160 caratteri
- [ ] Ogni articolo ha H2 con ID per table of contents
- [ ] Immagini con alt text descrittivi
- [ ] Link interni tra articoli correlati funzionanti
