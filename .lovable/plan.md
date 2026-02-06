

# Piano: Rimozione "Sconto in Fattura"

## Problema
Lo Sconto in Fattura non è più disponibile come agevolazione fiscale, quindi il quarto benefit nella sezione Finanziamenti va rimosso o sostituito.

---

## Soluzione Proposta

### File: `src/components/home/HomeFinancing.tsx`

**Opzione 1 - Rimuovere completamente** (consigliata):
Eliminare il quarto elemento dall'array `benefits` (righe 21-25) e rimuovere l'import di `Clock` se non più utilizzato.

**Prima:**
```typescript
const benefits = [
  { icon: Percent, title: "Detrazione 50%", ... },
  { icon: CreditCard, title: "Fino a 120 Rate", ... },
  { icon: FileCheck, title: "Pratiche ENEA Incluse", ... },
  { icon: Clock, title: "Sconto in Fattura", ... },  // DA RIMUOVERE
];
```

**Dopo:**
```typescript
const benefits = [
  { icon: Percent, title: "Detrazione 50%", ... },
  { icon: CreditCard, title: "Fino a 120 Rate", ... },
  { icon: FileCheck, title: "Pratiche ENEA Incluse", ... },
];
```

---

## Risultato Atteso

La sezione Finanziamenti mostrerà **3 card** invece di 4:
- Detrazione 50%
- Fino a 120 Rate
- Pratiche ENEA Incluse

Il layout si adatterà automaticamente grazie alla griglia CSS esistente.

