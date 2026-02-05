

# Piano: Aggiunta Foto Showroom alle Pagine

## Immagini Caricate dall'Utente

L'utente ha fornito 7 foto professionali dello showroom I Profili:

| File | Descrizione | Uso Consigliato |
|------|-------------|-----------------|
| DSC01163.JPG | Logo interno + campioni prodotti | Chi Siamo, Home |
| DSC01167.JPG | Esterno showroom con insegna | Chi Siamo (Hero), Contatti |
| DSC01175.JPG | Logo su vetrata (verticale) | Chi Siamo |
| DSC01200.JPG | Finestra PVC legno chiaro | Posa Qualificata, Garanzie |
| DSC01205.JPG | Finestra PVC grigio antracite | Posa Qualificata |
| DSC01215.JPG | Showroom con 3 finestre diverse | Chi Siamo, Home |
| DSC01219.JPG | Persiana PVC bianca | Garanzie |

---

## Modifiche Previste

### 1. Copiare le Immagini nel Progetto

Copiare tutte le 7 immagini nella cartella `src/assets/showroom/`:
- `showroom-interno.jpg` (DSC01163)
- `showroom-esterno.jpg` (DSC01167)
- `showroom-logo.jpg` (DSC01175)
- `finestra-legno.jpg` (DSC01200)
- `finestra-antracite.jpg` (DSC01205)
- `showroom-finestre.jpg` (DSC01215)
- `persiana-bianca.jpg` (DSC01219)

---

### 2. Pagina Chi Siamo (`src/pages/ChiSiamoPage.tsx`)

**Modifiche:**

**a) Hero Section (riga 81-104)**
- Sostituire `familyComfort` con `showroom-esterno.jpg` (esterno dello showroom con insegna)
- Rappresenta meglio l'identita aziendale

**b) Sezione "La Nostra Storia" (riga 157-173)**
- Sostituire `certifiedInstaller` con `showroom-interno.jpg` (logo interno con campioni)
- Mostra l'ambiente professionale dello showroom

**c) Sezione "I Nostri Lavori" - Galleria (riga 293-310)**
- Aggiungere 3 nuove foto nella griglia:
  - `showroom-finestre.jpg` (ambiente con 3 finestre)
  - `finestra-legno.jpg` (dettaglio finestra effetto legno)
  - `finestra-antracite.jpg` (dettaglio finestra grigia)

---

### 3. Pagina Garanzie (`src/pages/GaranziePage.tsx`)

**Modifiche:**

**a) Nuova Sezione Galleria** (dopo la tabella comparativa, riga 149)
Aggiungere una sezione visiva con 3 foto:
- `finestra-legno.jpg` - Qualita dei materiali
- `finestra-antracite.jpg` - Finiture premium  
- `persiana-bianca.jpg` - Dettagli curati

**Layout:**
```text
Sezione: "Qualita che Puoi Vedere e Toccare"
Grid 3 colonne con le foto dello showroom
```

---

### 4. Pagina Posa Qualificata (`src/pages/PosaQualificataPage.tsx`)

**Modifiche:**

**a) Sezione "Il Posatore Certificato" (riga 403-475)**
Attualmente manca un'immagine accanto al testo. Aggiungere:
- `showroom-interno.jpg` o `finestra-antracite.jpg` come visual

**b) Nuova Sezione "I Nostri Standard"** (dopo la sezione Certificazioni)
Galleria con 3 foto:
- `finestra-legno.jpg` - Posa finestra effetto legno
- `finestra-antracite.jpg` - Posa finestra antracite
- `showroom-finestre.jpg` - Esposizione modelli

---

### 5. Homepage - Nuova Sezione Showroom

**Nuovo componente:** `src/components/home/HomeShowroom.tsx`

Creare una sezione dedicata allo showroom da inserire dopo HomeWhyUs:

```text
Titolo: "Vieni a Trovarci nello Showroom"
Sottotitolo: "Tocca con mano la qualita dei nostri serramenti"

Grid con 2-3 foto:
- showroom-esterno.jpg (esterno)
- showroom-finestre.jpg (interno con finestre)
- showroom-interno.jpg (logo e campioni)

CTA: "Prenota una Visita"
```

**Modifica HomePage.tsx:**
Aggiungere `<HomeShowroom />` dopo `<HomeWhyUs />`

---

## Riepilogo File da Modificare

| File | Azione |
|------|--------|
| `src/assets/showroom/` | Creare cartella e copiare 7 immagini |
| `src/pages/ChiSiamoPage.tsx` | Aggiornare Hero, Storia, Galleria |
| `src/pages/GaranziePage.tsx` | Aggiungere sezione galleria |
| `src/pages/PosaQualificataPage.tsx` | Aggiungere immagini sezione Posatore |
| `src/components/home/HomeShowroom.tsx` | Creare nuovo componente |
| `src/pages/HomePage.tsx` | Aggiungere HomeShowroom |

---

## Risultato Visivo Atteso

- **Chi Siamo**: Immagini reali dello showroom invece di foto stock
- **Garanzie**: Sezione visiva che mostra la qualita dei prodotti
- **Posa Qualificata**: Visual che accompagna la sezione tecnica
- **Home**: Nuova sezione che invita a visitare lo showroom

Le foto dello showroom reale aumentano la credibilita e l'autenticita del brand.

