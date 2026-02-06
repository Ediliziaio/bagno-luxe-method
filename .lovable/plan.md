

# Piano: Correzione Caratteristiche Domus

## Panoramica

Correggere le specifiche del prodotto Domus per indicare correttamente **3 guarnizioni** (non "2/3") e aggiungere **Vetro Stratificato** come caratteristica distintiva.

---

## Modifiche al file `src/data/products.ts`

### 1. Feature Guarnizioni (riga 65)
| Prima | Dopo |
|-------|------|
| `{ icon: "Droplets", title: "2/3 Guarnizioni", description: "Alta memoria elastica anti-spiffero" }` | `{ icon: "Droplets", title: "3 Guarnizioni", description: "Alta memoria elastica anti-spiffero" }` |

### 2. Specifica Guarnizioni (riga 71)
| Prima | Dopo |
|-------|------|
| `{ label: "Guarnizioni", value: "2/3 alta memoria elastica" }` | `{ label: "Guarnizioni", value: "3 alta memoria elastica" }` |

### 3. Aggiunta Feature Vetro Stratificato (nuova riga dopo 64)
| Nuova Feature |
|---------------|
| `{ icon: "Layers", title: "Vetro Stratificato", description: "Sicurezza e isolamento acustico superiore" }` |

In alternativa, posso modificare una feature esistente o aggiungerne una nuova. Propongo di aggiungere il Vetro Stratificato come feature aggiuntiva.

---

## Riepilogo

| Modifica | Dettaglio |
|----------|-----------|
| Guarnizioni feature | "2/3 Guarnizioni" → "3 Guarnizioni" |
| Guarnizioni specifica | "2/3 alta memoria elastica" → "3 alta memoria elastica" |
| Vetro Stratificato | Aggiunta nuova feature |

---

## Risultato Atteso

- La pagina /prodotti/domus mostrerà correttamente "3 Guarnizioni"
- Il Vetro Stratificato apparirà tra le caratteristiche principali
- La griglia prodotti (/prodotti) è già corretta con "3 guarnizioni"

