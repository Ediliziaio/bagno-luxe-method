
# Piano: Rimozione riferimenti "Made in Italy" da tutte le pagine

## Panoramica

Rimozione/modifica di tutti i riferimenti a "Made in Italy" presenti in 5 file del progetto.

---

## 1. Chi Siamo Page

### File: `src/pages/ChiSiamoPage.tsx`

**Modifica 1 - Valore "Qualità" (riga 34):**
| Prima | Dopo |
|-------|------|
| "Solo materiali certificati Made in Italy per risultati che durano 30+ anni. Non scendiamo a compromessi." | "Solo materiali certificati per risultati che durano 30+ anni. Non scendiamo a compromessi." |

**Modifica 2 - Certificazioni (riga 42):**
| Prima | Dopo |
|-------|------|
| "Made in Italy 100%" | "Qualità Certificata" |

---

## 2. Zero Pensieri Offer Section

### File: `src/components/ZeroPensieriOfferSection.tsx`

**Modifica (riga 50):**
| Prima | Dopo |
|-------|------|
| "Serramento \"Made in Italy\" certificato CE" | "Serramento Certificato CE" |

---

## 3. Product Grid

### File: `src/components/products/ProductGrid.tsx`

**Modifica (riga 55):**
| Prima | Dopo |
|-------|------|
| description: "Design Made in Italy per ogni ambiente..." | description: "Design elegante per ogni ambiente..." |
| features: ["Made in Italy", "32 dB", "Su misura"] | features: ["Design Premium", "32 dB", "Su misura"] |

---

## 4. City Products (Landing Pages)

### File: `src/components/city/CityProducts.tsx`

**Modifica (righe 57-59):**
| Prima | Dopo |
|-------|------|
| "Prodotti Made in Italy con certificazione di qualità." | "Prodotti con certificazione di qualità." |

---

## 5. Products Data

### File: `src/data/products.ts`

**Modifica 1 - Tagline Porte Interno (riga 470):**
| Prima | Dopo |
|-------|------|
| "Design Made in Italy per ogni ambiente della casa" | "Design elegante per ogni ambiente della casa" |

**Modifica 2 - Feature Su Misura (riga 481):**
| Prima | Dopo |
|-------|------|
| "Dimensioni personalizzate Made in Italy" | "Dimensioni completamente personalizzabili" |

**Modifica 3 - Specifica Produzione (riga 490):**
| Prima | Dopo |
|-------|------|
| "100% Made in Italy" | "Qualità certificata" |

**Modifica 4 - Benefit Design (riga 494):**
| Prima | Dopo |
|-------|------|
| "Design contemporaneo Made in Italy" | "Design contemporaneo premium" |

**Modifica 5 - Menu Porte Interno (riga 594):**
| Prima | Dopo |
|-------|------|
| description: "Design Made in Italy" | description: "Design Premium" |

---

## Riepilogo modifiche

| File | N° Modifiche |
|------|--------------|
| `src/pages/ChiSiamoPage.tsx` | 2 |
| `src/components/ZeroPensieriOfferSection.tsx` | 1 |
| `src/components/products/ProductGrid.tsx` | 1 |
| `src/components/city/CityProducts.tsx` | 1 |
| `src/data/products.ts` | 5 |
| **Totale** | **10** |

---

## Risultato Atteso

Tutti i riferimenti a "Made in Italy" saranno rimossi e sostituiti con termini più neutri come:
- "Qualità Certificata"
- "Design Premium"
- "Certificato CE"
- "Qualità certificata"
