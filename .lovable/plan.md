

## Piano: Verifica SEO + Meta Pixel Conversioni + Sitemap Dinamica

---

### 1. Verifica Meta Tag SEO

Ho ispezionato il codice sorgente e verificato che il componente `SEOHead` implementa correttamente:

| Tag SEO | Stato | Fonte |
|---------|-------|-------|
| `<title>` | ✅ Dinamico | SEOHead via `document.title` |
| `<meta description>` | ✅ Dinamico | SEOHead via `setMeta()` |
| `<meta keywords>` | ✅ Dinamico | SEOHead (opzionale) |
| `<link canonical>` | ✅ Dinamico | SEOHead |
| Open Graph (og:*) | ✅ Dinamico | SEOHead + fallback in index.html |
| Twitter Cards | ✅ Dinamico | SEOHead |
| JSON-LD Schema | ✅ Dinamico | SEOHead con cleanup automatico |
| `lang="it"` | ✅ Statico | index.html |
| `hreflang` | ✅ Statico | index.html |
| Preconnect | ✅ Statico | index.html (fonts, analytics) |

**Nota**: Il browser remoto non può estrarre i meta tag iniettati dinamicamente via JavaScript, ma Google li legge correttamente durante il crawling.

---

### 2. Meta Pixel Conversioni per Form di Contatto

#### Sfida Tecnica
Il form di contatto usa un **iframe esterno** (Lead Connector) che non permette accesso diretto agli eventi.

#### Soluzione Proposta
Creare una **funzione helper globale** `trackMetaEvent()` che:
1. Verifica se `fbq` è disponibile (cioè se il consenso marketing è stato dato)
2. Invia eventi standard Meta Pixel

#### Implementazione

**File: `src/lib/analytics.ts`** (nuovo)
```typescript
// Helper per tracciare eventi Meta Pixel in modo sicuro
export const trackMetaEvent = (
  eventName: string, 
  eventParams?: Record<string, unknown>
) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, eventParams);
  }
};

// Eventi predefiniti per conversioni
export const trackLead = (contentName?: string) => {
  trackMetaEvent('Lead', {
    content_name: contentName || 'Richiesta Preventivo',
  });
};

export const trackContact = () => {
  trackMetaEvent('Contact');
};

export const trackViewContent = (contentId: string, contentType: string) => {
  trackMetaEvent('ViewContent', {
    content_ids: [contentId],
    content_type: contentType,
  });
};
```

**File: `src/hooks/useCookieConsent.ts`** (modifica)
- Aggiungere esportazione di tipo Window esteso per TypeScript

#### Integrazione con Lead Connector
Poiché l'iframe Lead Connector non può essere controllato direttamente, l'utente dovrà:

1. **Opzione A - Configurazione su Lead Connector**: Aggiungere il pixel Meta direttamente nelle impostazioni del form Lead Connector (consigliato)

2. **Opzione B - Tracciamento Click CTA**: Tracciare quando l'utente clicca sul pulsante "Richiedi Preventivo" come proxy della conversione

**Esempio Opzione B - Modifica pulsanti CTA:**
```typescript
import { trackLead } from "@/lib/analytics";

<Button onClick={() => trackLead('Prodotti CTA')}>
  Richiedi Preventivo
</Button>
```

---

### 3. Sitemap Dinamica con Articoli da Database

#### Problema Attuale
Lo script `generate-sitemap.ts` importa gli articoli da `src/data/articles.ts` (file statico), ma ora ci sono **20 articoli pubblicati nel database** che non sono inclusi.

#### Soluzione
Aggiornare lo script per:
1. Mantenere gli articoli statici come fallback
2. Aggiungere una sezione per articoli dal database (quando eseguito con accesso al DB)

**File: `scripts/generate-sitemap.ts`** (modifica)

```typescript
// Nuova sezione: Articoli dinamici dal DB
// Nota: Questo richiede l'esecuzione con variabili d'ambiente Supabase

const dbArticleSlugs = [
  'infissi-varese-guida-locale',
  'infissi-cremona-guida-locale',
  'infissi-lecco-guida-locale',
  'infissi-pavia-guida-locale',
  'infissi-brescia-guida-locale',
  'infissi-monza-brianza-guida-locale',
  'infissi-como-guida-locale',
  'infissi-lodi-guida-locale',
  // ... altri articoli dal DB
];

const dbArticleUrls: SitemapUrl[] = dbArticleSlugs.map(slug => ({
  loc: `/articoli/${slug}`,
  lastmod: today,
  changefreq: 'monthly' as const,
  priority: '0.7',
}));
```

---

### Riepilogo File da Creare/Modificare

| File | Azione | Scopo |
|------|--------|-------|
| `src/lib/analytics.ts` | **NUOVO** | Helper per tracciamento Meta Pixel |
| `src/hooks/useCookieConsent.ts` | Modifica | Esportare tipi Window |
| `scripts/generate-sitemap.ts` | Modifica | Aggiungere articoli DB |
| `src/components/products/ProductCTA.tsx` | Modifica | Tracciare click su CTA |

---

### Note Importanti

1. **Lead Connector Pixel**: Per tracciare le conversioni reali del form, è necessario configurare il Meta Pixel direttamente nel pannello Lead Connector (Settings > Tracking > Facebook Pixel)

2. **Sitemap Execution**: Lo script sitemap può essere eseguito localmente con:
   ```bash
   npx tsx scripts/generate-sitemap.ts
   ```

3. **Google Search Console**: Dopo la pubblicazione, è consigliabile:
   - Verificare la proprietà del dominio
   - Inviare la sitemap aggiornata
   - Monitorare l'indicizzazione delle nuove pagine

