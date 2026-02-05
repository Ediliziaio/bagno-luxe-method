
# Piano: Aggiornamento Dati Contatto e Footer

## Nuovi Dati da Inserire

### Showroom
- **Showroom Busto Arsizio**: Via Bruno Raimondi, 5 - 21052 Busto Arsizio VA

### Contatti
- **Telefono**: +39 351 305 8029
- **Email**: info@i-profili.it

### Dati Aziendali (Domus Group S.r.l.)
- Sede Legale: Via Aurelio Saffi 29, CAP 20123
- Magazzino: Via Passerera 52, 24060 Bolgare BG
- Ufficio e Magazzino: Via G. Marconi, 20068 Mezzate MI
- P.IVA: 13132010961
- Capitale Sociale: 20.000,00€
- PEC: domusgroupsrl@legalmail.it
- SDI: USAL8PV
- Amministrazione: Amministrazione@domusgroupitalia.it

---

## File da Modificare

### 1. `src/pages/ContattiPage.tsx`

**Modifiche all'array contactInfo (linee 10-35):**
```typescript
const contactInfo = [
  {
    icon: Phone,
    title: "Telefono",
    value: "+39 351 305 8029",
    href: "tel:+393513058029"
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@i-profili.it",
    href: "mailto:info@i-profili.it"
  },
  {
    icon: MapPin,
    title: "Showroom",
    value: "Busto Arsizio (VA)",
    href: null
  },
  {
    icon: Clock,
    title: "Orari",
    value: "Lun-Ven: 9:00-18:00",
    href: null
  }
];
```

**Nuova Sezione Sedi e Dati Aziendali** (dopo le contact cards):
- Showroom Busto Arsizio con indirizzo completo
- Sede Legale Milano
- Magazzino Bolgare (BG)
- Ufficio e Magazzino Mezzate (MI)
- Dati fiscali: P.IVA, Capitale Sociale, PEC, SDI

---

### 2. `src/components/Footer.tsx`

**Modifica sezione Contatti (linee 64-76):**
```typescript
<ul className="space-y-3 text-muted-foreground">
  <li>
    <a href="mailto:info@i-profili.it" className="hover:text-primary transition-colors duration-300">
      info@i-profili.it
    </a>
  </li>
  <li>
    <a href="tel:+393513058029" className="hover:text-primary transition-colors duration-300">
      +39 351 305 8029
    </a>
  </li>
  <li>Via Bruno Raimondi, 5</li>
  <li>21052 Busto Arsizio (VA)</li>
</ul>
```

**Aggiunta nuova colonna "Azienda"** con dati fiscali:
- Domus Group S.r.l.
- P.IVA: 13132010961
- PEC: domusgroupsrl@legalmail.it

---

### 3. `src/components/home/HomeContact.tsx`

**Modifica sezione contact info (linee 168-211):**
- Aggiornare telefono a: +39 351 305 8029
- Aggiornare email a: info@i-profili.it
- Aggiungere indirizzo showroom Busto Arsizio

---

## Struttura Nuova Pagina Contatti

| Sezione | Contenuto |
|---------|-----------|
| Hero | Invariato |
| Contact Cards | Telefono, Email, Showroom, Orari aggiornati |
| **NUOVO: Sedi** | Showroom + 3 sedi operative con indirizzi |
| Form Contatto | Invariato (HomeContact aggiornato) |
| Dove Operiamo | Invariato |
| **NUOVO: Dati Aziendali** | Ragione sociale, P.IVA, PEC, SDI |

---

## Struttura Nuovo Footer (4 colonne)

| Brand | Contatti | Azienda | Legale |
|-------|----------|---------|--------|
| Logo + descrizione | Email aggiornata | Domus Group S.r.l. | Privacy Policy |
| Link navigazione | Telefono aggiornato | P.IVA | Cookie Policy |
| | Showroom Busto A. | PEC | Termini |

---

## Risultato Atteso

- Tutti i contatti aggiornati con i dati reali
- Showroom Busto Arsizio evidenziato
- Dati aziendali Domus Group visibili nel footer e pagina contatti
- Coerenza tra tutte le pagine del sito
