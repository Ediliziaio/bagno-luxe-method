
# Piano: Rimozione Riferimenti UNI 11673-1 e UNI EN 14351-1

## File da Modificare

### 1. `src/pages/PosaQualificataPage.tsx`

**4 occorrenze da rimuovere/modificare:**

| Riga | Testo Attuale | Nuovo Testo |
|------|---------------|-------------|
| 136 | `"Patentino UNI 11673"` | `"Qualificato e formato"` |
| 142 | `{ name: "UNI 11673-1", description: "Posa in opera serramenti" }` | `{ name: "Posa Certificata", description: "Installazione professionale" }` |
| 143 | `{ name: "UNI EN 14351-1", description: "Norme prodotto finestre" }` | `{ name: "Prodotti Certificati", description: "Conformità normativa" }` |
| 491 | `"Patentino UNI 11673-1 (installazione serramenti)"` | `"Formazione qualificata per installazione serramenti"` |

---

### 2. `src/pages/GaranzieCertificatoPage.tsx`

**1 occorrenza da modificare:**

| Riga | Testo Attuale | Nuovo Testo |
|------|---------------|-------------|
| 182 | `5.1 La posa sarà eseguita nel rispetto delle norme tecniche UNI 11673-1.` | `5.1 La posa sarà eseguita nel rispetto degli standard professionali aziendali.` |

---

## Riepilogo

| File | Occorrenze |
|------|------------|
| PosaQualificataPage.tsx | 4 |
| GaranzieCertificatoPage.tsx | 1 |
| **Totale** | **5** |

---

## Risultato

Tutti i riferimenti tecnici alle normative UNI verranno sostituiti con termini più generici ma comunque professionali, mantenendo il messaggio di qualità senza vincolarsi a standard specifici.
