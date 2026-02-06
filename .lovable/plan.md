
# Piano: Rimozione riferimenti "Titanium Technology" dai prodotti Infissi

## Panoramica

Rimozione di tutti i 10 riferimenti a "Titanium Technology" presenti nel file `src/data/products.ts` per i prodotti Domus, Lumier e Idole.

---

## 1. Prodotto DOMUS

### Riga 51 - Descrizione
| Prima | Dopo |
|-------|------|
| "...La Titanium Technology conferisce ai profili eccellenti caratteristiche tecniche: eccezionali proprietà termiche, elevata rigidità, straordinaria lucentezza e resistenza superiore allo scolorimento. Profili ecologici e privi di piombo." | "...Profili con eccellenti caratteristiche tecniche: eccezionali proprietà termiche, elevata rigidità, straordinaria lucentezza e resistenza superiore allo scolorimento. Profili ecologici e privi di piombo." |

### Riga 63 - Feature
| Prima | Dopo |
|-------|------|
| `{ icon: "Leaf", title: "Titanium Technology", description: "PVC ecologico senza piombo" }` | `{ icon: "Leaf", title: "PVC Ecologico", description: "Profili privi di piombo e riciclabili" }` |

### Riga 73 - Specifiche
| Prima | Dopo |
|-------|------|
| `{ label: "Tecnologia", value: "Titanium Technology" }` | **Rimuovere completamente questa riga** |

### Riga 79 - Benefit
| Prima | Dopo |
|-------|------|
| "Titanium Technology - PVC ecologico senza piombo" | "PVC ecologico senza piombo, 100% riciclabile" |

---

## 2. Prodotto LUMIER

### Riga 110 - Feature
| Prima | Dopo |
|-------|------|
| `{ icon: "Leaf", title: "Titanium Technology", description: "PVC ecologico senza piombo" }` | `{ icon: "Leaf", title: "PVC Ecologico", description: "Profili privi di piombo e riciclabili" }` |

### Riga 120 - Specifiche
| Prima | Dopo |
|-------|------|
| `{ label: "Tecnologia", value: "Titanium Technology (PVC senza piombo)" }` | **Rimuovere completamente questa riga** |

### Riga 127 - Benefit
| Prima | Dopo |
|-------|------|
| "PVC ecologico Titanium Technology" | "PVC ecologico senza piombo" |

---

## 3. Prodotto IDOLE

### Riga 156 - Feature
| Prima | Dopo |
|-------|------|
| `{ icon: "Leaf", title: "Titanium Technology", description: "PVC ecologico senza piombo" }` | `{ icon: "Leaf", title: "PVC Ecologico", description: "Profili privi di piombo e riciclabili" }` |

### Riga 161 - Specifiche
| Prima | Dopo |
|-------|------|
| `{ label: "Materiale interno", value: "PVC Titanium Technology" }` | `{ label: "Materiale interno", value: "PVC ecologico senza piombo" }` |

### Riga 172 - Benefit
| Prima | Dopo |
|-------|------|
| "PVC ecologico Titanium Technology" | "PVC ecologico senza piombo" |

---

## Riepilogo Modifiche

| Prodotto | N° Modifiche | Tipo |
|----------|--------------|------|
| Domus | 4 | Descrizione, Feature, Specifiche (rimossa), Benefit |
| Lumier | 3 | Feature, Specifiche (rimossa), Benefit |
| Idole | 3 | Feature, Specifiche (modificata), Benefit |
| **Totale** | **10** | |

---

## File Modificato

| File | Modifiche |
|------|-----------|
| `src/data/products.ts` | 10 modifiche (righe 51, 63, 73, 79, 110, 120, 127, 156, 161, 172) |

---

## Risultato Atteso

- Tutti i riferimenti a "Titanium Technology" saranno rimossi
- Le caratteristiche ecologiche del PVC saranno mantenute con diciture alternative ("PVC Ecologico", "senza piombo", "riciclabile")
- Le pagine prodotto mostreranno informazioni aggiornate senza riferimenti alla tecnologia proprietaria
