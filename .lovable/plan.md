

# Piano: Correzione Immagini e Ottimizzazione Testi (4 Pagine)

## Problemi Identificati

### 1. Immagini Non Visibili
Le immagini attuali (da dledil.com, sunsystemgroupsrl.it, garofoli.com, oikos.it, dierre.com) non si caricano perché questi siti bloccano l'hotlinking (richieste di immagini da altri domini).

| Pagina | Stato Attuale |
|--------|---------------|
| /prodotti/persiane | Immagine non caricata (dledil.com bloccato) |
| /prodotti/zanzariere | Immagine non caricata (sunsystemgroupsrl bloccato) |
| /prodotti/porte-interno | Immagine non caricata (garofoli.com bloccato) |
| /prodotti/porta-blindata | Immagine non caricata (oikos.it bloccato) |

### 2. Porta Blindata - Classe 4
Attualmente è indicata solo "Classe 3", ma deve includere "Classe 4" come richiesto.

---

## Soluzione

### Immagini Alternative
Utilizzerò immagini da fonti che permettono l'hotlinking (Unsplash, Pexels, Pixabay) per garantire il caricamento.

**Nuove Immagini:**

| Prodotto | Nuova Fonte Immagine |
|----------|---------------------|
| Persiane | Unsplash - persiane alluminio moderne |
| Zanzariere | Unsplash/Pexels - finestre con zanzariere |
| Porte Interno | Unsplash - porte interne moderne |
| Porta Blindata | Pexels - porta blindata sicurezza |

### Ottimizzazione Testi
Migliorerò i contenuti per renderli più persuasivi e professionali:

**Persiane:**
- Tagline più incisiva
- Descrizione orientata ai benefici
- Enfasi su durabilità e design italiano

**Zanzariere:**
- Focus su comfort e salute
- Evidenziare varietà modelli
- Specifiche tecniche chiare

**Porte Interno:**
- Valorizzare design Made in Italy
- Sottolineare personalizzazione
- Evidenziare qualità materiali

**Porta Blindata:**
- Aggiungere Classe 4 (antieffrazione superiore)
- Enfatizzare sicurezza certificata EN 1627
- Dettagli serratura e punti di chiusura

---

## Modifiche Dettagliate

### File: `src/data/products.ts`

#### PERSIANE (linee 262-307)
```
tagline: "Eleganza italiana e controllo totale della luce"
description: "Le persiane in alluminio uniscono design italiano e funzionalità superiore. 
Lamelle orientabili per regolare luce e ventilazione con precisione. Resistenza 
garantita agli agenti atmosferici, manutenzione minima e durata nel tempo. 
Disponibili a battente o scorrevoli, anche motorizzate."
heroImage: [immagine Unsplash persiane]
gallery: [3 immagini Unsplash/Pexels persiane alluminio]
```

#### ZANZARIERE (linee 359-404)
```
tagline: "Aria fresca senza insetti - Comfort naturale tutto l'anno"
description: "Le nostre zanzariere garantiscono protezione al 99% dagli insetti 
mantenendo la circolazione d'aria e la luce naturale. Niente più repellenti 
chimici: un ambiente più sano per tutta la famiglia. 5 modelli disponibili: 
Estetika, Neoscenica, Bora Top, Wind e Evo Zip motorizzata."
heroImage: [immagine Unsplash zanzariera finestra]
gallery: [3 immagini zanzariere diverse]
```

#### PORTE INTERNO (linee 456-494)
```
tagline: "Design Made in Italy per ogni ambiente della casa"
description: "Porte interne di alta qualità che trasformano ogni ambiente. 
Battente o scorrevole, in legno, laccate o con vetro: soluzioni su misura 
per ogni stile. Finiture pregiate, isolamento acustico fino a 32 dB e 
personalizzazione completa. La qualità italiana che fa la differenza."
heroImage: [immagine Unsplash porta interna moderna]
gallery: [3 immagini porte interne diverse]
```

#### PORTA BLINDATA (linee 497-537)
```
tagline: "Sicurezza certificata Classe 3 e Classe 4"
description: "Porte blindate certificate fino a Classe 4 (EN 1627): la massima 
protezione per la tua casa. Cilindro europeo anti-bumping, anti-picking e 
anti-trapano. Fino a 18 punti di chiusura e 15 punti di ancoraggio. Isolamento 
termoacustico superiore con design personalizzabile."

features[0]: { title: "Classe 3 e Classe 4", description: "Sicurezza certificata EN 1627" }

specifications:
- Classe antieffrazione: "Classe 3 e Classe 4 (EN 1627)"
- Punti di chiusura: "Fino a 15"
- Punti di ancoraggio: "Fino a 18"
- Serratura: "Cilindro europeo anti-bumping/picking/trapano"

heroImage: [immagine Pexels porta blindata]
gallery: [3 immagini porte blindate]
```

### File: `src/components/products/ProductGrid.tsx`
Aggiornare le immagini nella costante `productCategories` per:
- persiane
- zanzariere
- porte-interno
- porta-blindata

---

## Risultato Atteso

| Pagina | Prima | Dopo |
|--------|-------|------|
| /prodotti/persiane | Immagine non visibile | Immagine Unsplash caricata + testi ottimizzati |
| /prodotti/zanzariere | Immagine non visibile | Immagine Unsplash caricata + testi ottimizzati |
| /prodotti/porte-interno | Immagine non visibile | Immagine Unsplash caricata + testi ottimizzati |
| /prodotti/porta-blindata | Immagine non visibile, solo Classe 3 | Immagine visibile + Classe 3 e 4 + testi premium |

Tutte le pagine avranno immagini funzionanti e contenuti professionali orientati alla conversione.

