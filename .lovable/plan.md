
# Piano: Sostituzione Form con Iframe Lead Connector

## Panoramica

L'utente vuole sostituire il form attuale nella sezione CTA con un iframe di Lead Connector (Go High Level) per gestire i lead direttamente nel CRM.

---

## Modifiche Previste

### File: `src/components/city/CityCTA.tsx`

**Stato attuale**: Il componente ha un form React custom con gestione stato locale (righe 80-173).

**Nuovo stato**: Sostituire il form con l'iframe Lead Connector mantenendo la struttura generale della sezione.

### Dettaglio Modifiche

1. **Rimuovere** il form React esistente (righe 88-172)
2. **Rimuovere** gli stati `isSubmitted` e `formData` (non piu necessari)
3. **Rimuovere** le funzioni `handleSubmit` e `handleChange`
4. **Rimuovere** l'array `interventionTypes`
5. **Aggiungere** l'iframe Lead Connector al posto del form
6. **Aggiungere** un `useEffect` per caricare lo script di embedding

### Codice dell'Iframe

```tsx
<iframe
  src="https://api.leadconnectorhq.com/widget/form/he1mdWP7boFO61FVF2Pz"
  style={{ width: '100%', height: '673px', border: 'none', borderRadius: '4px' }}
  id="inline-he1mdWP7boFO61FVF2Pz"
  data-layout="{'id':'INLINE'}"
  data-trigger-type="alwaysShow"
  data-trigger-value=""
  data-activation-type="alwaysActivated"
  data-activation-value=""
  data-deactivation-type="neverDeactivate"
  data-deactivation-value=""
  data-form-name="Modulo Sito Web"
  data-height="673"
  data-layout-iframe-id="inline-he1mdWP7boFO61FVF2Pz"
  data-form-id="he1mdWP7boFO61FVF2Pz"
  title="Modulo Sito Web"
/>
```

### Script Embedding

Aggiungere un `useEffect` per caricare dinamicamente lo script:

```tsx
useEffect(() => {
  const script = document.createElement('script');
  script.src = 'https://link.msgsndr.com/js/form_embed.js';
  script.async = true;
  document.body.appendChild(script);
  
  return () => {
    document.body.removeChild(script);
  };
}, []);
```

---

## Struttura Finale del Componente

```tsx
import { useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, CheckCircle, Clock, Star, Send } from "lucide-react";
import type { City } from "@/data/cities";

interface CityCTAProps {
  city: City;
}

export const CityCTA = ({ city }: CityCTAProps) => {
  // Carica script Lead Connector
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contatti-citta" ...>
      {/* Header rimane invariato */}
      
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Iframe al posto del form */}
        <motion.div className="glass-card p-4 overflow-hidden">
          <iframe ... />
        </motion.div>

        {/* Contact info rimane invariato */}
      </div>
    </section>
  );
};
```

---

## Riepilogo File Modificati

| File | Modifica |
|------|----------|
| `src/components/city/CityCTA.tsx` | Sostituire form React con iframe Lead Connector + aggiungere useEffect per script |

---

## Vantaggi

- I lead vanno direttamente nel CRM Lead Connector/Go High Level
- Nessuna gestione stato locale necessaria
- Form sempre sincronizzato con le impostazioni del CRM
- Tracking e analytics integrati nel form

---

## Risultato Atteso

La sezione contatti nella pagina citta mostrera:
- L'iframe del modulo Lead Connector (lato sinistro)
- Le informazioni di contatto (showroom, telefono, email) rimangono invariate (lato destro)
- Il social proof con le recensioni rimane invariato
