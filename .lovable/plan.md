
# Piano: Rimozione Showroom e Riferimenti Made in Italy

## Panoramica

Questo piano copre due modifiche principali alla Homepage:
1. Rimozione completa della sezione "Vieni a Trovarci nello Showroom"
2. Modifica del riferimento "100% Made in Italy, tracciabile" nella sezione Trasparenza

---

## 1. Rimozione Sezione Showroom

### File: `src/pages/HomePage.tsx`

**Modifiche:**
- Rimuovere l'import lazy di HomeShowroom (riga 10)
- Rimuovere il blocco Suspense che contiene HomeShowroom (righe 49-51)

**Prima:**
```typescript
const HomeShowroom = lazy(() => import("@/components/home/HomeShowroom").then(m => ({ default: m.HomeShowroom })));
// ...
<Suspense fallback={<SectionSkeleton />}>
  <HomeShowroom />
</Suspense>
```

**Dopo:**
Il componente sara completamente rimosso dalla pagina.

---

## 2. Modifica Riferimento Made in Italy

### File: `src/components/home/HomeTransparency.tsx`

**Modifiche:**
Alla riga 43, cambiare la descrizione da "100% Made in Italy, tracciabile" a un'alternativa piu neutra.

**Opzione proposta:**
```typescript
{
  icon: Award,
  title: "Materiali certificati",
  description: "Qualita garantita e tracciabile",
}
```

---

## Riepilogo File da Modificare

| File | Azione |
|------|--------|
| `src/pages/HomePage.tsx` | Rimuovere import e Suspense di HomeShowroom |
| `src/components/home/HomeTransparency.tsx` | Cambiare "100% Made in Italy, tracciabile" in "Qualita garantita e tracciabile" |

---

## Risultato Atteso

- **Homepage**: La sezione Showroom non sara piu visibile
- **Sezione Trasparenza**: Il punto sui materiali certificati non fara piu riferimento al Made in Italy

**Nota:** I riferimenti a "Made in Italy" nelle altre pagine (Chi Siamo, Prodotti, City Landing Pages) restano invariati. Se vuoi rimuoverli anche da quelle pagine, fammelo sapere.
