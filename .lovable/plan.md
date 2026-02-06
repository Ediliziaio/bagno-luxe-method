
# Modifica Badge Hero Homepage

## Modifiche richieste

Aggiornamento dell'array `trustBadges` nel file `src/components/home/HomeHero.tsx`:

| Badge Attuale | Nuovo Badge |
|---------------|-------------|
| Garanzia 10 Anni | **Garanzia 30 Anni** |
| Posa Certificata | Posa Certificata (invariato) |
| Bonus 50% | **RIMOSSO** |
| 90 Giorni consegna media | 90 Giorni consegna media (invariato) |

## Codice da modificare

**File:** `src/components/home/HomeHero.tsx` (righe 20-25)

**Prima:**
```typescript
const trustBadges = [
  { icon: Shield, label: "Garanzia 10 Anni" },
  { icon: CheckCircle, label: "Posa Certificata" },
  { icon: Award, label: "Bonus 50%" },
  { icon: Clock, label: "90 Giorni consegna media" },
];
```

**Dopo:**
```typescript
const trustBadges = [
  { icon: Shield, label: "Garanzia 30 Anni" },
  { icon: CheckCircle, label: "Posa Certificata" },
  { icon: Clock, label: "90 Giorni consegna media" },
];
```

Verra anche rimosso l'import di `Award` da lucide-react poiche non piu utilizzato.

## Risultato

La hero section mostrera 3 badge invece di 4:
- **Garanzia 30 Anni** (generico, senza specificare prodotto o posa)
- **Posa Certificata**
- **90 Giorni consegna media**
