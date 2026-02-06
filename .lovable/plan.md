

# Piano: Modifica Caratteristiche Domus

## Panoramica

Modificare le caratteristiche del prodotto Domus:
1. Cambiare "Saldatura Invisibile" in "Saldatura Resistente"
2. Aggiungere nuova feature "Pellicolatura Super Resistente"

---

## Modifiche al file `src/data/products.ts`

### 1. Feature Saldatura (riga 64)
| Prima | Dopo |
|-------|------|
| `{ icon: "Sparkles", title: "Saldatura Invisibile", description: "Finitura estetica eccellente" }` | `{ icon: "Sparkles", title: "Saldatura Resistente", description: "Finitura estetica eccellente e duratura" }` |

### 2. Nuova Feature Pellicolatura (dopo riga 66)
| Nuova Feature |
|---------------|
| `{ icon: "PaintBucket", title: "Pellicolatura Super Resistente", description: "Rivestimento esterno resistente ai raggi UV e agli agenti atmosferici" }` |

### 3. Benefit Saldatura (riga 81)
| Prima | Dopo |
|-------|------|
| "Saldatura invisibile per finitura estetica eccellente" | "Saldatura resistente per finitura duratura ed estetica" |

---

## Riepilogo

| Modifica | Dettaglio |
|----------|-----------|
| Saldatura feature | "Saldatura Invisibile" → "Saldatura Resistente" |
| Saldatura benefit | Aggiornamento testo corrispondente |
| Pellicolatura | Nuova feature aggiunta |

---

## Risultato Atteso

- La pagina /prodotti/domus mostrera "Saldatura Resistente" al posto di "Saldatura Invisibile"
- Apparira la nuova caratteristica "Pellicolatura Super Resistente" tra le features
- Le caratteristiche principali di Domus saranno ora 9 (invece di 8)

