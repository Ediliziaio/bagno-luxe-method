

# Piano: Sostituzione Immagine Hero Posa Qualificata

## Panoramica

Sostituire l'immagine di sfondo attuale nella sezione hero della pagina "/posa-qualificata" con la nuova foto caricata che mostra un installatore professionale al lavoro su una finestra scorrevole.

---

## Modifica

### Step 1: Copiare l'immagine nella cartella assets

| Immagine Originale | Destinazione |
|--------------------|--------------|
| `posa-opera-serramenti-certificati.jpg` | `src/assets/heroes/hero-posa-qualificata.jpg` |

Sovrascriveremo direttamente il file esistente con la nuova immagine, mantenendo lo stesso nome file. Questo approccio evita di dover modificare i file di codice.

---

## File Interessati

| File | Azione |
|------|--------|
| `src/assets/heroes/hero-posa-qualificata.jpg` | Sovrascritto con nuova immagine |
| `src/pages/PosaQualificataPage.tsx` | Nessuna modifica (stesso import) |

---

## Risultato Atteso

La pagina /posa-qualificata mostrerà la nuova immagine dell'installatore professionista al lavoro, sostituendo l'immagine precedente. La nuova foto comunica maggiore realismo e professionalità, mostrando un tecnico certificato durante l'installazione di un serramento scorrevole.

