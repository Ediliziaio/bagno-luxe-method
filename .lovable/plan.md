
# Piano: Modifiche Pagina Citta Landing

## Panoramica delle Modifiche

Ci sono 4 modifiche da fare:

1. **Rimuovere la statistica "km dal Showroom"** nell'Hero
2. **Rimuovere il badge "Made in Italy"** nell'Hero
3. **Aggiornare il numero del bottone "Chiama Ora"** nell'Hero
4. **Aggiornare il numero di telefono** nella sezione contatti in basso

---

## File da Modificare

### 1. CityHero.tsx

**Rimozione statistica "km dal Showroom"** (righe 89-95):
```typescript
// RIMUOVERE questo blocco:
<div className="w-px bg-white/20 hidden sm:block" />
<div className="text-center">
  <span className="block text-3xl md:text-4xl font-bold text-primary">
    {city.distanceFromShowroom === 0 ? "0" : city.distanceFromShowroom}
  </span>
  <span className="text-sm text-white/70">km dal Showroom</span>
</div>
```

**Rimozione badge "Made in Italy"** (riga 136):
```typescript
// Da questo:
{ icon: Clock, label: "Made in Italy" },

// A questo (rimuovere la riga)
```

**Aggiornamento numero telefono bottone** (riga 118):
```typescript
// Da: href="tel:+393513058029"
// A: href="tel:+393501780908"

// E aggiungere il numero visibile:
<Phone className="w-5 h-5 mr-2" />
+39 350 178 0908
```

---

### 2. CityCTA.tsx

**Aggiornamento numero telefono sezione contatti** (righe 208-213):
```typescript
// Da:
href="tel:+393513058029"
+39 351 305 8029

// A:
href="tel:+393501780908"
+39 350 178 0908
```

---

## Riepilogo Modifiche

| File | Modifica |
|------|----------|
| `src/components/city/CityHero.tsx` | Rimuovere stat "km dal Showroom", rimuovere badge "Made in Italy", aggiornare numero telefono a +39 350 178 0908 |
| `src/components/city/CityCTA.tsx` | Aggiornare numero telefono a +39 350 178 0908 |

---

## Risultato Atteso

- La sezione statistiche mostrera solo "2.500+ Clienti Soddisfatti" e "15+ Anni Esperienza"
- I badge trust mostreranno solo "Garanzia 10 Anni", "Posa Certificata" e "Bonus 50%"
- Il bottone "Chiama Ora" mostrera il numero +39 350 178 0908
- La sezione contatti in basso mostrera il numero +39 350 178 0908
