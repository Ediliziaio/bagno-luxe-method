
# Piano: Logo nell'Header/Footer + Routing /filippo

## Panoramica
1. Copiare il logo caricato nella cartella assets
2. Sostituire l'icona "iP" con il logo reale in Header e Footer
3. Modificare il routing per spostare la pagina da `/` a `/filippo`

---

## Modifiche Dettagliate

### 1. COPIA DEL LOGO

**Azione:** Copiare il file caricato `I_Profili_Candidati_1.png` nella cartella `src/assets/`

```text
user-uploads://I_Profili_Candidati_1.png → src/assets/i-profili-logo.png
```

---

### 2. MODIFICA HEADER

**File:** `src/components/Header.tsx`

**Cambiamenti:**
- Importare il logo come modulo ES6
- Sostituire il div con "iP" con un tag `<img>` con il logo
- Dimensioni: `h-10` (40px) su desktop, `h-8` (32px) su mobile
- Mantenere il nome "I Profili" accanto al logo

**Prima:**
```text
<div className="w-10 h-10 bg-primary rounded-xl ...">
  <span>iP</span>
</div>
<span>I Profili</span>
```

**Dopo:**
```text
<img src={logo} alt="I Profili" className="h-8 md:h-10 w-auto" />
```

---

### 3. MODIFICA FOOTER

**File:** `src/components/Footer.tsx`

**Cambiamenti:**
- Importare il logo come modulo ES6
- Sostituire il div con "iP" con un tag `<img>`
- Dimensioni: `h-12` (48px) - leggermente piu' grande nel footer

**Prima:**
```text
<div className="w-10 h-10 bg-primary rounded-xl ...">
  <span>iP</span>
</div>
<span>I Profili</span>
```

**Dopo:**
```text
<img src={logo} alt="I Profili" className="h-12 w-auto" />
```

---

### 4. MODIFICA ROUTING

**File:** `src/App.tsx`

**Cambiamenti:**
- Modificare la route della pagina Index da `/` a `/filippo`
- (Opzionale) La home page `/` restera' vuota o potra' mostrare un redirect

**Prima:**
```text
<Route path="/" element={<Index />} />
```

**Dopo:**
```text
<Route path="/filippo" element={<Index />} />
```

---

## Riepilogo File da Modificare

| File | Azione |
|------|--------|
| `src/assets/i-profili-logo.png` | COPIARE - Logo caricato |
| `src/components/Header.tsx` | MODIFICARE - Aggiungere logo |
| `src/components/Footer.tsx` | MODIFICARE - Aggiungere logo |
| `src/App.tsx` | MODIFICARE - Cambiare route a /filippo |

---

## Dimensioni Logo Previste

| Posizione | Mobile | Desktop |
|-----------|--------|---------|
| Header | h-8 (32px) | h-10 (40px) |
| Footer | h-10 (40px) | h-12 (48px) |

---

## Risultato Finale

- Il logo "I Profili" con l'icona del profilo finestra sara' visibile nell'header e nel footer
- La pagina sara' accessibile solo tramite `/filippo` invece che dalla home
- Il logo sara' responsive e ben dimensionato su tutti i dispositivi
