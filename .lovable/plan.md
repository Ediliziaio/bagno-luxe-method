
## Piano: Integrazione Meta Pixel con Cookie Consent

### Obiettivo
Aggiungere il **Meta Pixel** (ID: `1571488960639710`) al sistema di gestione dei cookie esistente, in modo che venga caricato solo quando l'utente acconsente ai cookie di **marketing**.

---

### Modifiche Tecniche

#### File da modificare: `src/hooks/useCookieConsent.ts`

1. **Aggiungere la costante per il Meta Pixel ID**
   ```typescript
   const META_PIXEL_ID = "1571488960639710";
   ```

2. **Estendere l'interfaccia Window** per includere `fbq` (Facebook Pixel function)
   ```typescript
   declare global {
     interface Window {
       gtag?: (...args: unknown[]) => void;
       dataLayer?: unknown[];
       fbq?: (...args: unknown[]) => void;
       _fbq?: unknown;
     }
   }
   ```

3. **Aggiungere la funzione per caricare Meta Pixel** nella funzione `loadTrackingScripts`
   - Verificare che `prefs.marketing` sia `true`
   - Iniettare lo script del Meta Pixel solo se non già presente
   - Aggiungere il noscript fallback per tracciamento senza JavaScript

---

### Codice da aggiungere

Nella funzione `loadTrackingScripts`, dopo il blocco di Google Analytics:

```typescript
// Load Meta (Facebook) Pixel
if (prefs.marketing && !document.getElementById("meta-pixel-script")) {
  const metaPixelScript = document.createElement("script");
  metaPixelScript.id = "meta-pixel-script";
  metaPixelScript.innerHTML = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${META_PIXEL_ID}');
    fbq('track', 'PageView');
  `;
  document.head.appendChild(metaPixelScript);

  // Meta Pixel noscript fallback
  const metaNoscript = document.createElement("noscript");
  metaNoscript.id = "meta-pixel-noscript";
  metaNoscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1" />`;
  document.body.appendChild(metaNoscript);
}
```

---

### Comportamento

| Consenso utente | Meta Pixel |
|----------------|------------|
| Accetta tutti | ✅ Caricato |
| Solo analytics | ❌ Non caricato |
| Rifiuta tutti | ❌ Non caricato |
| Marketing attivo | ✅ Caricato |

---

### Vantaggi

- **GDPR Compliant**: Il pixel si carica SOLO dopo il consenso esplicito per cookie di marketing
- **Coerente** con il sistema già implementato per GTM e GA4
- **Nessun impatto** sulle performance se l'utente non acconsente
- **Tracciamento PageView** automatico su ogni pagina visitata dopo il consenso
