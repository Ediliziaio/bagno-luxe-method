
# Piano: Rimozione Riferimenti Showroom Busto Arsizio dalle Pagine Città

## Panoramica

L'utente vuole:
1. Cambiare "Vicinanza al Tuo Territorio" con un messaggio che indica che operano in tutta la Lombardia
2. Rimuovere tutti i riferimenti allo showroom di Busto Arsizio dalle pagine città

---

## File da Modificare

### 1. `src/components/city/CityWhyUs.tsx`

**Modifica alla riga 10-17:**

Il primo "reason" attualmente dice:
```tsx
{
  icon: MapPin,
  title: "Vicinanza al Tuo Territorio",
  description: city.distanceFromShowroom === 0 
    ? `Il nostro showroom si trova proprio a ${city.name}...`
    : `Il nostro showroom a Busto Arsizio dista solo ${city.distanceFromShowroom} km...`,
}
```

**Nuovo contenuto:**
```tsx
{
  icon: MapPin,
  title: "Operiamo in Tutta la Lombardia",
  description: `Serviamo clienti in tutta la Lombardia, inclusa ${city.name} e l'intera provincia di ${city.provinceName}. Garantiamo sopralluogo in 48 ore e interventi rapidi ovunque tu sia.`,
}
```

---

### 2. `src/components/city/CityCTA.tsx`

**Modifica alla sezione contatti (righe 58-75):**

Attualmente mostra:
```tsx
<h4>Showroom</h4>
<p>Via Bruno Raimondi, 5</p>
<p>21052 Busto Arsizio (VA)</p>
<p>A soli X km da {city.name}</p>
```

**Nuovo contenuto:**
```tsx
<h4>Area Operativa</h4>
<p>Operiamo in tutta la Lombardia</p>
<p>Sopralluogo gratuito a {city.name}</p>
<p>e in tutta la provincia di {city.provinceName}</p>
```

---

## Riepilogo Modifiche

| File | Sezione | Modifica |
|------|---------|----------|
| `CityWhyUs.tsx` | Primo reason | Titolo: "Operiamo in Tutta la Lombardia" + nuova descrizione |
| `CityCTA.tsx` | Contatti | Rimuove indirizzo showroom, mostra "Area Operativa" |

---

## Risultato

- Tutte le 200+ landing page città mostreranno che l'azienda opera in tutta la Lombardia
- Nessun riferimento allo showroom di Busto Arsizio
- Messaggi localizzati per ogni città e provincia
