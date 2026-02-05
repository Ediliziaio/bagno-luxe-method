
# Piano: Ripristino Contenuti Completi degli Articoli

## Problema Identificato

Gli articoli nel database contengono solo una **frazione del contenuto originale**:

| Articolo | Originale | Database | Perso |
|----------|-----------|----------|-------|
| infissi-milano | ~8.000 caratteri | 3.950 | 50% |
| serramenti-lombardia | ~7.000 caratteri | 1.665 | 76% |
| preventivo-infissi | ~6.000 caratteri | 1.074 | 82% |
| bonus-infissi | ~5.500 caratteri | 991 | 82% |
| come-scegliere-infissi | ~4.500 caratteri | 780 | 83% |
| prezzi-pvc | ~5.000 caratteri | 960 | 81% |
| direttiva-case-green | ~5.000 caratteri | 824 | 83% |
| altri 5 articoli | simile proporzione | ... | 75-85% |

Questo significa che hai perso tra il **50% e l'85%** del contenuto per ogni articolo. Per la SEO, questo e un problema enorme.

---

## Soluzione

Aggiornare tutti i 12 articoli nel database con il contenuto completo dal file `articles.ts`. Ogni articolo contiene:
- Introduzione emotiva
- Sottotitoli H2/H3 strutturati
- Liste puntate e tabelle
- Case study e esempi reali
- CTA multiple

---

## Cosa Faremo

### 1. Aggiornamento di massa via SQL

Per ogni articolo, eseguiremo un UPDATE che ripristina il contenuto completo. Esempio per il primo articolo:

```sql
UPDATE articles 
SET content = '...[contenuto completo]...'
WHERE slug = 'infissi-milano-guida-completa-2026';
```

### 2. Lista degli Articoli da Aggiornare

| # | Slug | Lunghezza Originale |
|---|------|---------------------|
| 1 | infissi-milano-guida-completa-2026 | ~8.000 car |
| 2 | serramenti-lombardia-come-scegliere-2026 | ~7.000 car |
| 3 | preventivo-infissi-cosa-controllare | ~6.000 car |
| 4 | prezzi-infissi-pvc-2026-listino | ~5.500 car |
| 5 | sostituzione-finestre-costi-2026 | ~5.500 car |
| 6 | isolamento-termico-finestre-condensa | ~5.000 car |
| 7 | come-scegliere-infissi-guida | ~5.500 car |
| 8 | bonus-infissi-50-2026-guida | ~5.500 car |
| 9 | risparmio-energetico-infissi-quanto | ~5.500 car |
| 10 | direttiva-case-green-2030-cosa-fare | ~5.000 car |
| 11 | 5-errori-sostituzione-infissi-da-evitare | ~4.500 car |
| 12 | pvc-vs-alluminio-quale-scegliere-infissi | ~5.000 car |

### 3. Verifica Post-Aggiornamento

Dopo gli UPDATE, verificheremo che ogni articolo abbia:
- Contenuto completo visibile nel frontend
- Formattazione HTML corretta
- Link interni funzionanti

---

## Impatto SEO

Ripristinando il contenuto completo:

| Metrica | Prima | Dopo |
|---------|-------|------|
| Parole medie per articolo | 150-300 | 800-1.200 |
| Keyword density | Scarsa | Ottimale |
| Tempo lettura medio | 1-2 min | 6-10 min |
| Profondita contenuto | Superficiale | Esperto |

Contenuti piu lunghi e approfonditi = migliore posizionamento su Google.

---

## Passi di Implementazione

1. Estrarre il contenuto completo da `articles.ts` per ogni articolo
2. Eseguire 12 query UPDATE sul database
3. Verificare che i contenuti siano visibili correttamente
4. Testare la pagina dettaglio articolo

---

## Note Tecniche

- Il campo `content` nel database e di tipo `text` (nessun limite di lunghezza)
- L'HTML e gia formattato correttamente nel file sorgente
- Non ci sono rischi di perdita dati: stiamo solo aggiungendo contenuto mancante
