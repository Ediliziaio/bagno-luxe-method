

# Piano: Countdown Case Green + Fix Contrasto "16 Passaggi"

## Panoramica

Questo piano include:
1. **Countdown dinamico al 2030** nella sezione Case Green con giorni/ore/minuti
2. **Icone piu grandi e impattanti** nella sezione Case Green
3. **Fix contrasto** nella sezione "Il Tuo Percorso" - hover step con colori leggibili

---

## 1. COUNTDOWN DINAMICO CASE GREEN

### Implementazione Tecnica

Aggiungere un countdown che calcola in tempo reale i giorni mancanti al 1 Gennaio 2030:

```typescript
// Calcolo countdown
const [timeLeft, setTimeLeft] = useState({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
});

useEffect(() => {
  const targetDate = new Date('2030-01-01T00:00:00').getTime();
  
  const updateCountdown = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;
    
    setTimeLeft({
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000)
    });
  };
  
  updateCountdown();
  const interval = setInterval(updateCountdown, 1000);
  return () => clearInterval(interval);
}, []);
```

### Design Countdown

Layout con 4 box affiancati stile "orologio digitale":

```text
┌─────────────────────────────────────────────────────────────────┐
│                    TEMPO RIMANENTE AL 2030                      │
│                                                                 │
│   ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐        │
│   │  1.423  │   │   14    │   │   32    │   │   45    │        │
│   │  GIORNI │   │   ORE   │   │ MINUTI  │   │ SECONDI │        │
│   └─────────┘   └─────────┘   └─────────┘   └─────────┘        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

Caratteristiche:
- Numeri grandi con font bold
- Effetto glow amber/rosso per urgenza
- Animazione pulse sui secondi
- Box con bordo gradiente
- Posizionato subito dopo il titolo "Direttiva Case Green 2030"

---

## 2. ICONE PIU GRANDI E IMPATTANTI

### Modifiche alle Card Statistiche

Attualmente le icone sono `w-6 h-6` dentro cerchi `w-12 h-12`. Le rendiamo piu prominenti:

**Prima:**
```typescript
<div className="w-12 h-12 rounded-full bg-slate-700/50">
  <Icon className="w-6 h-6" />
</div>
```

**Dopo:**
```typescript
<div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-slate-700/80 to-slate-800/80 
                border border-slate-600/50 flex items-center justify-center mb-4 
                group-hover:scale-110 transition-transform duration-300">
  <Icon className="w-10 h-10 md:w-12 md:h-12" />
</div>
```

Modifiche:
- Icone da `w-6 h-6` a `w-10 h-10` (quasi il doppio)
- Contenitori da `w-12 h-12` a `w-20 h-20` / `w-24 h-24`
- Forma quadrata arrotondata invece che cerchio
- Effetto scale al hover
- Bordo sfumato per profondita

### Aggiunta Icona Casa Grande

Aggiungere un'illustrazione/icona grande sopra il quote box:
- Icona `Building2` o `Home` di dimensione `w-16 h-16`
- Con effetto glow ambrato
- Animazione float leggera

---

## 3. FIX CONTRASTO SEZIONE "16 PASSAGGI"

### Problema Identificato

Alla riga 211-216 del componente `HomeServiceOverview.tsx`:

```typescript
// Problema: quando hover, sfondo diventa gradiente teal ma il testo del titolo rimane scuro
<div className="absolute inset-0 bg-gradient-to-br from-primary to-teal-light rounded-full opacity-0 group-hover/step:opacity-100" />
<span className="text-primary text-xs font-bold group-hover/step:text-white">
  {step.number}
</span>
// Il titolo sotto pero diventa text-foreground (nero) che non si legge bene
```

### Soluzione

Cambiare il comportamento hover per mantenere contrasto:

```typescript
// Step number - mantiene bianco su sfondo teal
<span className="text-primary text-xs font-bold group-hover/step:text-white">
  {step.number.toString().padStart(2, "0")}
</span>

// Titolo step - invece di text-foreground (nero), usare text-primary (teal)
<span className="text-muted-foreground text-sm group-hover/step:text-primary transition-colors">
  {step.title}
</span>

// Icona - mantenerla teal
<Icon className="w-4 h-4 text-primary/60 flex-shrink-0 group-hover/step:text-primary transition-colors" />
```

In questo modo:
- **Numero**: Bianco su sfondo teal (leggibile)
- **Titolo**: Da grigio a teal (non nero, sempre leggibile)
- **Icona**: Teal piu intenso al hover

---

## 4. AGGIORNAMENTO DATI CASE GREEN PER 2026

Correggere i dati che attualmente dicono "5 anni rimanenti" (erano scritti nel 2025):

```typescript
const urgencyStats = [
  { 
    value: "-30%", 
    label: "Svalutazione stimata", 
    sublabel: "per immobili non efficientati",
    icon: TrendingDown,
    color: "text-red-500",
  },
  { 
    value: "4", // Aggiornato: siamo nel 2026
    label: "Anni rimanenti", 
    sublabel: "per adeguarsi alla normativa",
    icon: Calendar,
    color: "text-amber-500",
  },
  // ... resto invariato
];

// Anche il benefit sulla detrazione 50%:
const benefits = [
  "Detrazione fiscale 50% garantita fino al 2027", // Aggiornato
  // ...
];
```

---

## 5. FILE DA MODIFICARE

| File | Modifica |
|------|----------|
| `src/components/home/HomeCaseGreen.tsx` | Aggiungere countdown, icone grandi, aggiornare dati 2026 |
| `src/components/home/HomeServiceOverview.tsx` | Fix contrasto hover sugli step |

---

## 6. DETTAGLIO COUNTDOWN COMPONENT

```typescript
// Struttura countdown box
<div className="grid grid-cols-4 gap-3 md:gap-4 max-w-lg mx-auto mb-10">
  {[
    { value: timeLeft.days, label: "Giorni" },
    { value: timeLeft.hours, label: "Ore" },
    { value: timeLeft.minutes, label: "Minuti" },
    { value: timeLeft.seconds, label: "Secondi" },
  ].map((item, index) => (
    <div 
      key={item.label}
      className="bg-slate-800/80 border border-amber-500/30 rounded-xl p-3 md:p-4 text-center"
    >
      <div className="text-2xl md:text-4xl font-black text-amber-400">
        {item.value.toString().padStart(2, '0')}
      </div>
      <div className="text-xs md:text-sm text-slate-400 uppercase tracking-wider mt-1">
        {item.label}
      </div>
    </div>
  ))}
</div>
```

---

## 7. STIMA LAVORO

- Modifiche HomeCaseGreen.tsx: ~60 righe (countdown + icone grandi)
- Modifiche HomeServiceOverview.tsx: ~5 righe (fix contrasto)
- **Totale: ~65 righe di modifiche**

