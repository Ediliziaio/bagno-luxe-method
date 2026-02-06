

# Piano: Correzione Testo Intro Certificato

## Problema Identificato

Nelle righe 102-104 del file `src/pages/GaranziePage.tsx` c'è un testo duplicato e malformato:

**Testo attuale (errato):**
```
Con il presente certificato, I Profili 
attesta che gli infissi installati presso l'immobile indicato sono coperti dal sistema di garanzie di seguito descritto, come da Allegato A al contratto di fornitura.I Profili S.r.l. attesta che gli infissi installati presso l'immobile indicato sono coperti dal sistema di garanzie di seguito descritto, come da Allegato A al contratto di fornitura.
```

---

## Correzione

**Testo corretto:**
```
Con il presente certificato, I Profili attesta che gli infissi installati presso l'immobile indicato sono coperti dal sistema di garanzie di seguito descritto, come da Allegato A al contratto di fornitura.
```

---

## Modifica Tecnica

**File:** `src/pages/GaranziePage.tsx`  
**Righe:** 102-104

Sostituire:
```tsx
<p className="text-muted-foreground leading-relaxed">Con il presente certificato, I Profili 
attesta che gli infissi installati presso l'immobile indicato sono coperti dal sistema di garanzie di seguito descritto, come da Allegato A al contratto di fornitura.<strong className="text-foreground">I Profili S.r.l.</strong> attesta che gli infissi installati presso l'immobile indicato sono coperti dal sistema di garanzie di seguito descritto, come da Allegato A al contratto di fornitura.
</p>
```

Con:
```tsx
<p className="text-muted-foreground leading-relaxed">
  Con il presente certificato, <strong className="text-foreground">I Profili</strong> attesta che gli infissi installati presso l'immobile indicato sono coperti dal sistema di garanzie di seguito descritto, come da Allegato A al contratto di fornitura.
</p>
```

---

## Risultato

- Testo singolo senza duplicazioni
- "I Profili" in grassetto (senza S.r.l.)
- Frase chiara e professionale
- Mantiene il disclaimer legale sotto (D.Lgs. 206/2005)

