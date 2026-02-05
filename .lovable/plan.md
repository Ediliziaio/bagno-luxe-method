

# Piano: Completamento Dati Aziendali nel Footer

## Dati Mancanti da Aggiungere

Il footer attualmente mostra solo alcuni dati aziendali. Occorre aggiungere:

- **Sede Legale**: Via Aurelio Saffi 29, 20123 Milano
- **Magazzino Bolgare**: Via Passerera 52, 24060 Bolgare (BG)
- **Ufficio e Magazzino Mezzate**: Via G. Marconi, 20068 Mezzate (MI)
- **Capitale Sociale**: €20.000,00
- **SDI**: USAL8PV
- **Email Amministrazione**: Amministrazione@domusgroupitalia.it

---

## File da Modificare

### `src/components/Footer.tsx`

**Struttura Attuale (4 colonne):**
| Brand | Contatti | Azienda | Legale |
|-------|----------|---------|--------|
| Logo + descrizione | Email, Tel, Showroom | Solo P.IVA e PEC | Privacy, Cookie, Termini |

**Nuova Struttura (5 colonne per desktop, responsive):**
| Brand | Contatti | Sedi | Azienda | Legale |
|-------|----------|------|---------|--------|
| Logo + link | Email, Tel | Showroom, Sede Legale, Magazzini | P.IVA, Capitale, PEC, SDI, Amm. | Policy |

---

## Dettaglio Modifiche

### Colonna "Contatti" (linee 54-78)
Semplificare con solo email e telefono:
```typescript
<ul className="space-y-3 text-muted-foreground">
  <li>
    <a href="mailto:info@i-profili.it">info@i-profili.it</a>
  </li>
  <li>
    <a href="tel:+393513058029">+39 351 305 8029</a>
  </li>
</ul>
```

### Nuova Colonna "Sedi" (da inserire dopo Contatti)
```typescript
<h4>Sedi</h4>
<ul>
  <li><strong>Showroom:</strong> Via Bruno Raimondi 5, Busto Arsizio (VA)</li>
  <li><strong>Sede Legale:</strong> Via Aurelio Saffi 29, Milano</li>
  <li><strong>Magazzino:</strong> Via Passerera 52, Bolgare (BG)</li>
  <li><strong>Ufficio:</strong> Via G. Marconi, Mezzate (MI)</li>
</ul>
```

### Colonna "Azienda" Espansa (linee 80-99)
```typescript
<h4>Azienda</h4>
<ul>
  <li>Domus Group S.r.l.</li>
  <li>P.IVA: 13132010961</li>
  <li>Capitale Sociale: €20.000,00</li>
  <li>SDI: USAL8PV</li>
  <li><a href="mailto:domusgroupsrl@legalmail.it">PEC: domusgroupsrl@legalmail.it</a></li>
  <li><a href="mailto:Amministrazione@domusgroupitalia.it">Amministrazione@domusgroupitalia.it</a></li>
</ul>
```

### Layout Grid Aggiornato (linea 20)
Passare da 4 a 5 colonne su desktop:
```typescript
<div className="grid md:grid-cols-5 gap-12 md:gap-6 mb-12">
```

---

## Risultato Atteso

Il footer mostrerà tutti i dati aziendali completi:
- Tutte le 4 sedi (Showroom, Sede Legale, Magazzino Bolgare, Ufficio Mezzate)
- Dati fiscali completi (P.IVA, Capitale Sociale, SDI)
- Tutti i contatti email (info, PEC, Amministrazione)

