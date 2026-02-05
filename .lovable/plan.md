

# Piano: Miglioramento Pagina Chi Siamo

## Modifiche Richieste

### 1. Rimuovere Date Specifiche e Usare "+15 Anni"

**Attualmente:**
- "Dal 2009" → Cambiare in "Da oltre 15 anni"
- "17 anni di esperienza" → Cambiare in "+15 anni"
- Timeline con date (2009, 2012, 2015...) → Rimuovere completamente la sezione Timeline

**File:** `src/pages/ChiSiamoPage.tsx`

**Modifiche:**
- Linea 91: SEO title da "Serramentisti dal 2009" a "Oltre 15 Anni di Esperienza"
- Linea 124: Hero title da "17 Anni" a "+15 Anni"
- Linea 142: Intro text rimuovere "Dal 2009"
- Linee 166, 175: Testi storia da aggiornare
- Linee 194-197: Badge overlay da "17+" a "15+"
- Linea 76-77: Stats array da aggiornare

### 2. Aggiornare Statistiche Finestre

**Attualmente:**
- "2.500+ famiglie servite" 
- "2.500+ installazioni"

**Nuovo:**
- "30.000+ finestre installate"

**Modifiche:**
- Linea 75: Stats array `{ value: "30.000+", label: "Finestre installate" }`
- Linea 143: Intro text aggiornare numero
- Linea 175: Testo storia aggiornare

### 3. Rimuovere Sezione Team

La sezione "Il Nostro Team" (linee 292-331) verrà rimossa completamente insieme al relativo array `team` (linee 49-65).

---

## Dettaglio Tecnico Modifiche

### File: `src/pages/ChiSiamoPage.tsx`

#### Array `timeline` (linee 17-24)
Eliminare completamente - non più necessario

#### Array `team` (linee 49-65)
Eliminare completamente

#### Array `stats` (linee 74-79)
```typescript
const stats = [
  { value: "30.000+", label: "Finestre installate" },
  { value: "15+", label: "Anni di esperienza" },
  { value: "98%", label: "Clienti soddisfatti" },
  { value: "10", label: "Anni di garanzia" }
];
```

#### SEOHead (linea 90-94)
```typescript
title="Chi Siamo - I Profili | Oltre 15 Anni di Esperienza"
description="Scopri la storia di I Profili: oltre 15 anni di esperienza, 30.000+ finestre installate in Lombardia. Team certificato, garanzia 10 anni, Sistema Zero Pensieri."
```

#### Hero Title (linea 123-125)
```typescript
<h1>I Profili: +15 Anni di Serramenti d'Eccellenza in Lombardia</h1>
```

#### Intro Text (linee 141-145)
```typescript
<p>
  Da oltre <strong>15 anni</strong> aiutiamo le famiglie lombarde a trasformare 
  le loro case in ambienti più confortevoli, silenziosi e efficienti. 
  Con oltre <strong>30.000 finestre installate</strong>, 
  non siamo semplici installatori: siamo partner per il tuo comfort.
</p>
```

#### Sezione Storia (linee 161-178)
```typescript
<p>
  Oltre <strong>15 anni fa</strong>, in un piccolo laboratorio di Monza, 
  è nata una visione...
</p>
<p>
  Oggi, dopo oltre <strong>30.000 finestre installate</strong> e 15+ anni di lavoro...
</p>
```

#### Badge overlay (linee 194-197)
```typescript
<div className="text-4xl font-bold">15+</div>
<div className="text-sm uppercase tracking-wider">Anni di Esperienza</div>
```

#### Rimuovere sezioni:
1. **Timeline** (linee 203-252) - Rimuovere completamente
2. **Team** (linee 292-331) - Rimuovere completamente

---

## Struttura Pagina Dopo le Modifiche

| Sezione | Stato |
|---------|-------|
| Hero con immagine | Aggiornato (+15 anni) |
| Intro Text | Aggiornato (30.000+ finestre) |
| La Nostra Storia | Aggiornato (senza date) |
| ~~Il Nostro Percorso (Timeline)~~ | RIMOSSO |
| I Nostri Valori | Invariato |
| ~~Il Nostro Team~~ | RIMOSSO |
| Certificazioni | Invariato |
| Stats | Aggiornato |
| Portfolio Gallery | Invariato |
| CTA Finale | Invariato |

---

## Risultato Atteso

La pagina Chi Siamo sarà più snella e professionale:
- Nessuna data specifica che richieda aggiornamenti futuri
- Statistiche impressionanti (30.000+ finestre)
- Focus su esperienza consolidata (+15 anni)
- Rimozione elementi "fittizi" (team con nomi inventati)

