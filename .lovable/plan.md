

# Piano: Correzioni Pagina Garanzie

## Panoramica

Tre modifiche alla pagina `/garanzie` per semplificare i contenuti e rimuovere riferimenti tecnici non necessari.

---

## Modifiche

### 1. Rimuovere "Incollaggio vetro-profilo" dalla tabella

**File:** `src/pages/GaranziePage.tsx`  
**Righe:** 20-22

Rimuovere completamente questa voce dall'array `productWarranties`:

```typescript
// RIMUOVERE:
{
  coverage: "Incollaggio vetro-profilo",
  years: "10 anni",
  others: "Esclusa"
}
```

La tabella passerà da 7 a 6 voci.

---

### 2. Modificare sottotitolo sezione Posa Qualificata

**File:** `src/pages/GaranziePage.tsx`  
**Riga:** 313

| Prima | Dopo |
|-------|------|
| "Installazione certificata UNI 11673-1" | "Posa qualificata professionale" |

---

### 3. Semplificare testo sezione Posa Qualificata

**File:** `src/pages/GaranziePage.tsx`  
**Righe:** 317-318

| Prima | Dopo |
|-------|------|
| "L'installazione è eseguita da personale qualificato secondo le norme tecniche **UNI 11673-1** e gli standard dichiarati nel capitolato." | "L'installazione è eseguita da personale qualificato secondo i nostri standard professionali." |

---

## Riepilogo Modifiche

| Cosa | Azione |
|------|--------|
| "Incollaggio vetro-profilo" | Rimosso dalla tabella garanzie prodotto |
| "UNI 11673-1" | Rimosso da sottotitolo e testo |
| "capitolato" | Rimosso dal testo |

---

## Risultato Atteso

La sezione ③ sarà più semplice e diretta, senza riferimenti normativi tecnici, mantenendo comunque il messaggio di professionalità e garanzia decennale sulla posa.

