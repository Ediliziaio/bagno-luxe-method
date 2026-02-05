
# Piano: Aggiungere Iframe Lead Connector a Tutte le Pagine

## Panoramica

L'iframe Lead Connector deve essere aggiunto in tutte le pagine dove attualmente c'e un form di contatto o una CTA per richiedere preventivo. Questo garantisce che tutti i lead vadano direttamente nel CRM.

---

## Pagine da Modificare

### 1. HomeContact.tsx (HomePage + ContattiPage)
**File**: `src/components/home/HomeContact.tsx`

**Stato attuale**: Form React custom con gestione stato locale (righe 1-158)

**Modifica**: 
- Sostituire il form con l'iframe Lead Connector
- Mantenere la struttura a 2 colonne (iframe a sinistra, info contatto a destra)
- Aggiungere useEffect per caricare lo script

**Note**: Questo componente e riutilizzato sia nella HomePage che nella ContattiPage, quindi modificandolo una volta si aggiorna in entrambe le pagine.

---

### 2. ArticoliPage.tsx (Blog)
**File**: `src/pages/ArticoliPage.tsx`

**Stato attuale**: Nessun form presente

**Modifica**: 
- Aggiungere una nuova sezione CTA con iframe in fondo alla lista articoli
- Creare un componente riutilizzabile per l'iframe

---

### 3. ArticleDetailPage.tsx (Dettaglio Articolo)
**File**: `src/pages/ArticleDetailPage.tsx`

**Stato attuale**: CTA semplice con bottone che rimanda a /contatti (righe 247-257)

**Modifica**: 
- Sostituire il bottone CTA con l'iframe Lead Connector incorporato
- Mantenere il titolo e sottotitolo

---

### 4. ProductCTA.tsx (Dettaglio Prodotto)
**File**: `src/components/products/ProductCTA.tsx`

**Stato attuale**: Due bottoni (link a /contatti + chiamata)

**Modifica**: 
- Aggiungere l'iframe Lead Connector sotto i bottoni esistenti
- Cosi gli utenti possono compilare direttamente il form o cliccare i bottoni

---

## Nuovo Componente Riutilizzabile

Per evitare duplicazione di codice, creeremo un componente wrapper per l'iframe:

**File**: `src/components/shared/LeadConnectorForm.tsx`

```text
Struttura del componente:
- Props opzionali per altezza personalizzata
- useEffect per caricare lo script (con cleanup)
- Iframe con tutti gli attributi necessari
- Wrapper con stile glass-card
```

---

## Dettaglio Modifiche per File

### File 1: `src/components/shared/LeadConnectorForm.tsx` (NUOVO)

```tsx
import { useEffect } from "react";
import { motion } from "framer-motion";

interface LeadConnectorFormProps {
  height?: number;
  className?: string;
}

export const LeadConnectorForm = ({ 
  height = 673, 
  className = "" 
}: LeadConnectorFormProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`overflow-hidden ${className}`}
    >
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/he1mdWP7boFO61FVF2Pz"
        style={{ width: '100%', height: `${height}px`, border: 'none', borderRadius: '4px' }}
        id="inline-he1mdWP7boFO61FVF2Pz"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Modulo Sito Web"
        data-height={height.toString()}
        data-layout-iframe-id="inline-he1mdWP7boFO61FVF2Pz"
        data-form-id="he1mdWP7boFO61FVF2Pz"
        title="Modulo Sito Web"
      />
    </motion.div>
  );
};
```

---

### File 2: `src/components/home/HomeContact.tsx`

**Modifiche**:
- Rimuovere useState per form (righe 1-6, 14-38)
- Rimuovere array interventionTypes (righe 7-12)
- Importare LeadConnectorForm
- Sostituire il form (righe 81-158) con LeadConnectorForm

**Struttura finale**:
```text
- Header sezione (rimane invariato)
- Grid 2 colonne:
  - Sinistra: LeadConnectorForm
  - Destra: Info contatto + social proof (rimane invariato)
```

---

### File 3: `src/pages/ArticoliPage.tsx`

**Modifiche**:
- Importare LeadConnectorForm
- Aggiungere nuova sezione CTA dopo la grid degli articoli (prima del Footer)

**Nuova sezione** (da aggiungere dopo la riga 107):
```text
<section className="py-16 bg-muted/30">
  <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
    <h2>Hai Domande sui Tuoi Infissi?</h2>
    <p>Contattaci per una consulenza gratuita</p>
    <LeadConnectorForm />
  </div>
</section>
```

---

### File 4: `src/pages/ArticleDetailPage.tsx`

**Modifiche**:
- Importare LeadConnectorForm
- Sostituire la sezione CTA (righe 247-257) con il form embed

**Da**:
```text
<div className="mt-16 bg-primary/5 rounded-2xl p-10 text-center">
  <h3>Vuoi saperne di piu?</h3>
  <p>...</p>
  <Button>Richiedi Consulenza</Button>
</div>
```

**A**:
```text
<div className="mt-16 bg-primary/5 rounded-2xl p-8 text-center">
  <h3>Vuoi saperne di piu?</h3>
  <p>...</p>
  <LeadConnectorForm height={600} className="mt-8" />
</div>
```

---

### File 5: `src/components/products/ProductCTA.tsx`

**Modifiche**:
- Importare LeadConnectorForm
- Aggiungere il form sotto i bottoni esistenti
- Aggiornare il numero di telefono a +39 350 178 0908

**Struttura finale**:
```text
<section>
  <h2>Interessato a {productName}?</h2>
  <p>Descrizione</p>
  <div>Bottoni (rimangono)</div>
  <p>Punti chiave (rimangono)</p>
  <LeadConnectorForm className="mt-12 max-w-2xl mx-auto" />
</section>
```

---

### File 6: `src/components/city/CityCTA.tsx`

**Modifiche**:
- Importare LeadConnectorForm invece di gestire l'iframe direttamente
- Semplificare il codice usando il componente condiviso

---

## Riepilogo File

| File | Azione | Descrizione |
|------|--------|-------------|
| `src/components/shared/LeadConnectorForm.tsx` | NUOVO | Componente riutilizzabile per iframe |
| `src/components/home/HomeContact.tsx` | MODIFICA | Sostituire form React con LeadConnectorForm |
| `src/pages/ArticoliPage.tsx` | MODIFICA | Aggiungere sezione CTA con form |
| `src/pages/ArticleDetailPage.tsx` | MODIFICA | Sostituire CTA bottone con form |
| `src/components/products/ProductCTA.tsx` | MODIFICA | Aggiungere form + aggiornare telefono |
| `src/components/city/CityCTA.tsx` | MODIFICA | Usare componente condiviso |

---

## Vantaggi

1. **Codice DRY**: Un solo componente per l'iframe, riutilizzato ovunque
2. **Manutenzione facile**: Se cambia l'URL del form, si modifica un solo file
3. **Lead centralizzati**: Tutti i contatti vanno nel CRM Lead Connector
4. **Consistenza UX**: Form identico su tutte le pagine

---

## Risultato Atteso

L'iframe Lead Connector sara presente in:
- Homepage (sezione Contatti)
- Pagina Contatti
- Pagina Blog (fondo pagina)
- Dettaglio Articolo (dentro l'articolo)
- Dettaglio Prodotto (sezione CTA)
- Landing Page Citta (gia implementato)
