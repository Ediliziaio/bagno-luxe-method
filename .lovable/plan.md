
# Piano: Script Sitemap + Immagini Reali per Articoli

## Panoramica

Questo piano include:
 1. **Verifica articoli pagina /articoli** - ✅ COMPLETATO
 2. **Script automatico per generare sitemap** - ⏸️ Rimandato (package.json non modificabile)
 3. **Aggiunta immagini reali agli articoli** - ✅ COMPLETATO

---

 ## 1. VERIFICA ARTICOLI ✅

Ho navigato alla pagina `/articoli` e verificato:
- 12 articoli totali presenti
- Filtri per categoria funzionanti (Tutti, Guide, Bonus Fiscali, Risparmio, Normative, Guide Locali)
- Card articoli con layout corretto
- Link agli articoli funzionanti

---

 ## 2. SCRIPT GENERAZIONE SITEMAP ⏸️

 **Nota:** Non è possibile modificare package.json direttamente. 
 La sitemap è già stata creata manualmente in `public/sitemap.xml` con tutti i 30 URL.
 
 Per automatizzare in futuro, creare lo script e aggiungere manualmente lo script npm.

---

 ## 3. IMMAGINI REALI PER ARTICOLI ✅

### Mappatura Articoli-Immagini

| Articolo | Slug | Nuova Immagine |
|----------|------|----------------|
 | Infissi Milano | `infissi-milano-guida-completa-2026` | ✅ `home-windows.jpg` |
 | Serramenti Lombardia | `serramenti-lombardia-come-scegliere-2026` | ✅ `hero-window.jpg` |
 | Preventivo Infissi | `preventivo-infissi-cosa-controllare` | ✅ `guarantee-contract.jpg` |
 | Prezzi PVC | `prezzi-infissi-pvc-2026-listino` | ✅ `domus-profile-section.jpg` |
 | Costi Sostituzione | `sostituzione-finestre-costi-2026` | ✅ `window-after-1.jpg` |
 | Isolamento Termico | `isolamento-termico-finestre-guida` | ✅ `window-detail.jpg` |
 | Come Scegliere | `come-scegliere-infissi-pvc-lombardia` | ✅ `hero-window-slider.jpg` |
 | Bonus 50% | `bonus-infissi-50-2026-guida-completa` | ✅ `certified-installer.jpg` |
 | Risparmio Energetico | `risparmio-energetico-infissi-quanto-si-risparmia` | ✅ `family-comfort.jpg` |
 | Case Green | `direttiva-case-green-2030-cosa-fare` | ✅ `casa-green-directive.jpg` |
 | Errori Sostituzione | `5-errori-sostituzione-infissi-da-evitare` | ✅ `window-before-1.jpg` |
 | PVC vs Alluminio | `pvc-vs-alluminio-quale-scegliere-infissi` | ✅ `window-after-2.jpg` |

---

 ## 4. RIEPILOGO MODIFICHE

| File | Modifica |
|------|----------|
 | `src/data/articles.ts` | ✅ Immagini reali aggiunte a tutti i 12 articoli |
 | `public/sitemap.xml` | ✅ Già creato con 30 URL |
 | `public/robots.txt` | ✅ Già ottimizzato |

---

 ## 5. STATO FINALE ✅
 
 - 12 articoli con immagini reali
 - Sitemap con 30 URL completa
 - Robots.txt ottimizzato con blocco AI crawlers
