
# Piano: Script Sitemap + Immagini Reali per Articoli

## Panoramica

Questo piano include:
1. **Verifica articoli pagina /articoli** - Verificato: tutti i 12 articoli funzionano
2. **Script automatico per generare sitemap** - Da creare
3. **Aggiunta immagini reali agli articoli** - Sostituzione placeholder con immagini esistenti

---

## 1. VERIFICA ARTICOLI (COMPLETATA)

Ho navigato alla pagina `/articoli` e verificato:
- 12 articoli totali presenti
- Filtri per categoria funzionanti (Tutti, Guide, Bonus Fiscali, Risparmio, Normative, Guide Locali)
- Card articoli con layout corretto
- Link agli articoli funzionanti

---

## 2. SCRIPT GENERAZIONE SITEMAP

### Obiettivo

Creare uno script Node.js che genera automaticamente `sitemap.xml` leggendo:
- Prodotti da `src/data/products.ts`
- Articoli da `src/data/articles.ts`

### File da creare: `scripts/generate-sitemap.ts`

```typescript
// Lo script:
// 1. Importa prodotti e articoli dai file data
// 2. Costruisce le URL dinamicamente
// 3. Genera il file XML
// 4. Salva in public/sitemap.xml

import { articles } from '../src/data/articles';
import { products } from '../src/data/products';
import * as fs from 'fs';

const BASE_URL = 'https://iprofili.it';

function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];
  
  // Pagine statiche
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/prodotti', priority: '0.9', changefreq: 'weekly' },
    { url: '/chi-siamo', priority: '0.8', changefreq: 'monthly' },
    { url: '/garanzie', priority: '0.8', changefreq: 'monthly' },
    { url: '/contatti', priority: '0.8', changefreq: 'monthly' },
    { url: '/articoli', priority: '0.9', changefreq: 'weekly' },
  ];
  
  // Genera URL prodotti dinamicamente
  const productUrls = Object.keys(products).map(id => ({
    url: `/prodotti/${id}`,
    priority: products[id].category === 'infissi' ? '0.8' : '0.7',
    changefreq: 'monthly',
    lastmod: today,
  }));
  
  // Genera URL articoli dinamicamente
  const articleUrls = articles.map(article => ({
    url: `/articoli/${article.slug}`,
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: article.dateISO,
  }));
  
  // Combina e genera XML
  const allUrls = [...staticPages, ...productUrls, ...articleUrls];
  
  const xml = generateXML(allUrls);
  fs.writeFileSync('public/sitemap.xml', xml);
}
```

### Aggiunta script npm

In `package.json`:
```json
{
  "scripts": {
    "generate-sitemap": "npx tsx scripts/generate-sitemap.ts"
  }
}
```

---

## 3. IMMAGINI REALI PER ARTICOLI

### Mappatura Articoli-Immagini

| Articolo | Slug | Nuova Immagine |
|----------|------|----------------|
| Infissi Milano | `infissi-milano-guida-completa-2026` | `home-windows.jpg` |
| Serramenti Lombardia | `serramenti-lombardia-come-scegliere-2026` | `hero-window.jpg` |
| Preventivo Infissi | `preventivo-infissi-cosa-controllare` | `guarantee-contract.jpg` |
| Prezzi PVC | `prezzi-infissi-pvc-2026-listino` | `domus-profile-section.jpg` |
| Costi Sostituzione | `sostituzione-finestre-costi-2026` | `window-after-1.jpg` |
| Isolamento Termico | `isolamento-termico-finestre-guida` | `window-detail.jpg` |
| Come Scegliere | `come-scegliere-infissi-pvc-lombardia` | `hero-window-slider.jpg` |
| Bonus 50% | `bonus-infissi-50-2026-guida-completa` | `certified-installer.jpg` |
| Risparmio Energetico | `risparmio-energetico-infissi-quanto-si-risparmia` | `family-comfort.jpg` |
| Case Green | `direttiva-case-green-2030-cosa-fare` | `casa-green-directive.jpg` |
| Errori Sostituzione | `5-errori-sostituzione-infissi-da-evitare` | `window-before-1.jpg` |
| PVC vs Alluminio | `pvc-vs-alluminio-quale-scegliere-infissi` | `window-after-2.jpg` |

### Modifiche in `src/data/articles.ts`

Aggiungere import delle immagini all'inizio del file:

```typescript
import homeWindows from '@/assets/home-windows.jpg';
import heroWindow from '@/assets/hero-window.jpg';
import guaranteeContract from '@/assets/guarantee-contract.jpg';
import domusProfile from '@/assets/domus-profile-section.jpg';
import windowAfter1 from '@/assets/window-after-1.jpg';
import windowDetail from '@/assets/window-detail.jpg';
import heroWindowSlider from '@/assets/hero-window-slider.jpg';
import certifiedInstaller from '@/assets/certified-installer.jpg';
import familyComfort from '@/assets/family-comfort.jpg';
import casaGreen from '@/assets/casa-green-directive.jpg';
import windowBefore1 from '@/assets/window-before-1.jpg';
import windowAfter2 from '@/assets/window-after-2.jpg';
```

Poi sostituire ogni `image: "/placeholder.svg"` con l'immagine appropriata:

```typescript
{
  id: "infissi-milano",
  // ...
  image: homeWindows,  // Prima: "/placeholder.svg"
  // ...
}
```

---

## 4. FILE DA CREARE

| File | Descrizione |
|------|-------------|
| `scripts/generate-sitemap.ts` | Script generazione sitemap dinamica |

## 5. FILE DA MODIFICARE

| File | Modifica |
|------|----------|
| `src/data/articles.ts` | Sostituire placeholder con immagini reali |
| `package.json` | Aggiungere script `generate-sitemap` |

---

## 6. VANTAGGI SCRIPT SITEMAP

- **Automazione**: Ogni nuovo articolo/prodotto viene incluso automaticamente
- **Coerenza**: Nessun rischio di URL mancanti o errati
- **Manutenibilita**: Un solo punto di modifica per la logica di generazione
- **Integrazione CI/CD**: Possibile eseguire prima del deploy

---

## 7. STIMA LAVORO

| Task | Righe Codice |
|------|-------------|
| Script generate-sitemap.ts | ~80 righe |
| Modifiche articles.ts (immagini) | ~30 righe |
| Modifica package.json | ~2 righe |
| **TOTALE** | **~112 righe** |
