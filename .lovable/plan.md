
# Piano: Fix Immagini Articoli Non Visibili

## Problema Identificato

Le immagini degli articoli nel database sono salvate con path tipo:
- `/src/assets/home-windows.jpg`
- `/src/assets/hero-window.jpg`
- ecc.

**Perche non funzionano:**
In sviluppo, Vite serve i file da `src/assets` direttamente. In produzione, Vite compila questi file e li rinomina con hash (es. `home-windows-abc123.jpg`). Il path `/src/assets/...` punta a file che non esistono piu.

**Perche funzionava nel file statico:**
Nel file `articles.ts`, le immagini erano importate come moduli ES6:
```typescript
import homeWindows from '@/assets/home-windows.jpg';
// homeWindows = "/assets/home-windows-abc123.jpg" in produzione
```

---

## Soluzione: Mappa Asset Dinamica

Creeremo un sistema che:
1. Rileva se un `image_url` e un path legacy (`/src/assets/...`)
2. Lo converte nell'import corretto usando una mappa di asset

### Approccio Tecnico

Creare un file `src/lib/assetMap.ts` che importa tutte le immagini degli articoli e le espone in una mappa:

```typescript
// Asset imports
import homeWindows from '@/assets/home-windows.jpg';
import heroWindow from '@/assets/hero-window.jpg';
// ... altri import

export const articleAssets: Record<string, string> = {
  'home-windows.jpg': homeWindows,
  'hero-window.jpg': heroWindow,
  // ... altri mapping
};

// Helper per risolvere image_url
export const resolveImageUrl = (url: string | null | undefined): string => {
  if (!url) return '';
  
  // Se e un URL completo (https:// o URL storage), ritorna cosi com'e
  if (url.startsWith('http') || url.startsWith('blob')) {
    return url;
  }
  
  // Se e un path legacy /src/assets/..., estrai il filename
  if (url.startsWith('/src/assets/')) {
    const filename = url.replace('/src/assets/', '');
    return articleAssets[filename] || url;
  }
  
  return url;
};
```

### Integrazione nei Componenti

**ArticleCard.tsx:**
```typescript
import { resolveImageUrl } from '@/lib/assetMap';
// ...
<img src={resolveImageUrl(image)} alt={title} />
```

**ArticleDetailPage.tsx:**
```typescript
import { resolveImageUrl } from '@/lib/assetMap';
// ...
<img src={resolveImageUrl(article.image_url)} alt={article.image_alt} />
```

**AdminArticles.tsx:**
```typescript
import { resolveImageUrl } from '@/lib/assetMap';
// ...
<img src={resolveImageUrl(article.image_url)} alt="" />
```

---

## File da Creare

| File | Descrizione |
|------|-------------|
| `src/lib/assetMap.ts` | Mappa degli asset + helper `resolveImageUrl` |

## File da Modificare

| File | Modifica |
|------|----------|
| `src/components/articles/ArticleCard.tsx` | Usare `resolveImageUrl()` per la prop image |
| `src/pages/ArticleDetailPage.tsx` | Usare `resolveImageUrl()` per image_url |
| `src/pages/admin/AdminArticles.tsx` | Usare `resolveImageUrl()` nelle thumbnail |
| `src/pages/admin/AdminArticleForm.tsx` | Usare `resolveImageUrl()` nella preview |
| `src/components/admin/ImageUploader.tsx` | Usare `resolveImageUrl()` per currentImage |

---

## Dettaglio Implementazione

### 1. Creare assetMap.ts

```typescript
// Importazione di tutti gli asset usati negli articoli
import homeWindows from '@/assets/home-windows.jpg';
import heroWindow from '@/assets/hero-window.jpg';
import guaranteeContract from '@/assets/guarantee-contract.jpg';
import casaGreenDirective from '@/assets/casa-green-directive.jpg';
import domusProfileSection from '@/assets/domus-profile-section.jpg';
import familyComfort from '@/assets/family-comfort.jpg';
import certifiedInstaller from '@/assets/certified-installer.jpg';
import windowDetail from '@/assets/window-detail.jpg';
import windowAfter1 from '@/assets/window-after-1.jpg';
import windowAfter2 from '@/assets/window-after-2.jpg';
import windowBefore1 from '@/assets/window-before-1.jpg';
import heroWindowSlider from '@/assets/hero-window-slider.jpg';

// Mappa filename -> URL processato
const articleAssets: Record<string, string> = {
  'home-windows.jpg': homeWindows,
  'hero-window.jpg': heroWindow,
  'guarantee-contract.jpg': guaranteeContract,
  'casa-green-directive.jpg': casaGreenDirective,
  'domus-profile-section.jpg': domusProfileSection,
  'family-comfort.jpg': familyComfort,
  'certified-installer.jpg': certifiedInstaller,
  'window-detail.jpg': windowDetail,
  'window-after-1.jpg': windowAfter1,
  'window-after-2.jpg': windowAfter2,
  'window-before-1.jpg': windowBefore1,
  'hero-window-slider.jpg': heroWindowSlider,
};

/**
 * Risolve un URL immagine da database/storage
 * - URL completi (https://) passano invariati
 * - Path legacy (/src/assets/...) vengono convertiti
 */
export const resolveImageUrl = (url: string | null | undefined): string => {
  if (!url) return '';
  
  // URL completo o blob - ritorna cosi
  if (url.startsWith('http') || url.startsWith('blob:') || url.startsWith('data:')) {
    return url;
  }
  
  // Path legacy /src/assets/...
  if (url.startsWith('/src/assets/')) {
    const filename = url.replace('/src/assets/', '');
    const resolved = articleAssets[filename];
    if (resolved) return resolved;
    console.warn(`Asset non trovato: ${filename}`);
    return '';
  }
  
  // Altro path - ritorna invariato
  return url;
};
```

### 2. Aggiornare ArticleCard.tsx

```typescript
import { resolveImageUrl } from '@/lib/assetMap';

// Nel componente:
{image ? (
  <img 
    src={resolveImageUrl(image)} 
    alt={title} 
    className="w-full h-full object-cover..." 
  />
) : (
  // fallback
)}
```

### 3. Aggiornare ArticleDetailPage.tsx

```typescript
import { resolveImageUrl } from '@/lib/assetMap';

// Nel render:
<img 
  src={resolveImageUrl(article.image_url)} 
  alt={article.image_alt || ''} 
/>
```

### 4. Aggiornare AdminArticles.tsx

```typescript
import { resolveImageUrl } from '@/lib/assetMap';

// Nella tabella:
<img
  src={resolveImageUrl(article.image_url)}
  alt={article.image_alt || ''}
  className="w-12 h-12 object-cover rounded"
/>
```

---

## Vantaggi di Questa Soluzione

| Aspetto | Beneficio |
|---------|-----------|
| Retrocompatibilita | Gli articoli esistenti funzionano senza modifiche al database |
| Future-proof | I nuovi articoli con URL Storage funzioneranno automaticamente |
| Performance | Vite ottimizza le immagini importate (hash, compression) |
| Flessibilita | Nuovi asset possono essere aggiunti facilmente alla mappa |

---

## Risultato Atteso

Dopo l'implementazione:

| Scenario | Funzionamento |
|----------|---------------|
| Articoli migrati (`/src/assets/...`) | Immagini visibili via mappa asset |
| Nuovi articoli (URL Storage) | Immagini visibili direttamente |
| Preview admin | Thumbnail corrette nella lista |
| Form modifica | Preview immagine funzionante |
