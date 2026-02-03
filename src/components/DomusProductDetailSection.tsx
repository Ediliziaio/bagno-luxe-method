import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Thermometer, Ruler, RotateCcw, Wind, Droplets, Shield, X, Check, AlertTriangle } from "lucide-react";
import domusProfileSection from "@/assets/domus-profile-section.jpg";

// Animated counter component
const AnimatedNumber = ({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count.toLocaleString('it-IT')}{suffix}</span>;
};

// Environmental data
const environmentalData = [
  { icon: Thermometer, value: "-15°C / +60°C", label: "Escursione termica", desc: "Inverno rigido + sole diretto" },
  { icon: Ruler, value: "2-3 mm", label: "Dilatazione", desc: "Per metro lineare/anno" },
  { icon: RotateCcw, value: "15-25k", label: "Cicli apertura", desc: "Cicli all'anno" },
  { icon: Wind, value: "140 km/h", label: "Pressione vento", desc: "Raffiche zone esposte" },
  { icon: Droplets, value: "365", label: "Umidità e pioggia", desc: "Giorni di esposizione" },
];

// Steel comparison data
const steelComparison = [
  { aspect: "Spessore acciaio", standard: "1 – 1,2 mm", domus: "2 mm" },
  { aspect: "Tipo profilo", standard: "Aperto", domus: "Chiuso" },
  { aspect: "Rigidità reale", standard: "Media", domus: "Altissima" },
  { aspect: "Flessione nel tempo", standard: "Probabile", domus: "Zero" },
  { aspect: "Stress su ferramenta", standard: "Alto", domus: "Minimo" },
];

// Gasket comparison data
const gasketComparison = [
  { aspect: "Tenuta aria", twoGasket: "Media", threeGasket: "Totale" },
  { aspect: "Isolamento acustico", twoGasket: "Discreto", threeGasket: "Superiore" },
  { aspect: "Protezione vento/pioggia", twoGasket: "Limitata", threeGasket: "Tripla barriera" },
  { aspect: "Durata nel tempo", twoGasket: "5–10 anni", threeGasket: "20+ anni" },
  { aspect: "Comfort percepito", twoGasket: "Variabile", threeGasket: "Costante" },
];

// Thickness data
const thicknessData = [
  {
    size: "70 mm",
    title: "Non sufficiente",
    badge: "SUPERATO",
    badgeColor: "bg-muted text-muted-foreground",
    borderColor: "border-muted-foreground/30",
    points: [
      "Nascono per contenere i costi",
      "Meno spazio per rinforzi seri",
      "Meno camere isolanti",
      "Meno massa strutturale",
    ],
    isNegative: true,
  },
  {
    size: "76 mm",
    title: "Equilibrio Perfetto",
    badge: "DOMUS",
    badgeColor: "bg-primary text-primary-foreground",
    borderColor: "border-primary",
    points: [
      "Ospita rinforzi in acciaio seri",
      "Gestisce 3 guarnizioni vere",
      "Garantisce isolamento senza effetti collaterali",
      "Nessun problema di condensa interna",
    ],
    isRecommended: true,
  },
  {
    size: "82 mm",
    title: "Attenzione",
    badge: "RISCHIO",
    badgeColor: "bg-amber-500/20 text-amber-400",
    borderColor: "border-amber-500/50",
    points: [
      "Blocca il naturale ricambio termico",
      "Crea punti freddi interni",
      "Aumenta il rischio di condensa",
      "Favorisce muffe e umidità",
    ],
    isWarning: true,
  },
];

export const DomusProductDetailSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-dark relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px]" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* BLOCK 1: La Realtà Quotidiana */}
        <div className="py-16 md:py-24 border-b border-border/30">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              La <span className="text-primary text-glow">realtà quotidiana</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              A cosa è sottoposta una finestra ogni singolo giorno. Un serramento non vive in laboratorio. 
              Vive in condizioni estreme, continue e ripetute.
            </p>
          </motion.div>

          {/* Environmental grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12"
          >
            {environmentalData.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 text-center hover:border-primary/50 transition-all duration-300"
              >
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">{item.value}</div>
                <div className="text-sm font-semibold text-primary mb-1">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Big counters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12"
          >
            <div className="glass-card p-8 text-center border-primary/30">
              <p className="text-muted-foreground mb-2">In 10 anni una finestra affronta oltre</p>
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary text-glow">
                <AnimatedNumber target={200000} suffix="+" />
              </div>
              <p className="text-lg font-semibold text-foreground mt-2">cicli meccanici</p>
            </div>
            <div className="glass-card p-8 text-center border-primary/30">
              <p className="text-muted-foreground mb-2">In 20 anni una finestra affronta oltre</p>
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary text-glow">
                <AnimatedNumber target={400000} suffix="+" />
              </div>
              <p className="text-lg font-semibold text-foreground mt-2">cicli meccanici</p>
            </div>
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-3xl mx-auto border-l-4 border-primary pl-6 py-4"
          >
            <p className="text-lg md:text-xl italic text-foreground">
              "Se la struttura non è progettata per questo, prima o poi cede."
            </p>
            <p className="text-primary font-bold mt-2">Non è un'opinione. È fisica.</p>
          </motion.blockquote>
        </div>

        {/* BLOCK 2: L'Anima in Acciaio */}
        <div className="py-16 md:py-24 border-b border-border/30">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-primary font-semibold uppercase tracking-wider mb-3">Il vero differenziatore</p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              L'anima in <span className="text-primary text-glow">acciaio</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Ciò che NON vedi, ma che decide tutto. Il PVC da solo non basta. 
              Senza un'anima strutturale adeguata, qualsiasi profilo si muove.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {/* Standard profile */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card p-6 border-muted-foreground/30"
            >
              <div className="flex items-center gap-2 mb-4">
                <X className="w-6 h-6 text-destructive" />
                <h3 className="text-xl font-bold text-muted-foreground">Profilo Standard</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>• Acciaio da 1 o 1,2 mm</li>
                <li>• Profilo aperto</li>
                <li>• Funzione più "commerciale" che strutturale</li>
              </ul>
              <p className="text-sm text-muted-foreground mb-3">Col tempo si flette. Quei millimetri sono sufficienti a:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-destructive">
                  <X className="w-4 h-4" /> Perdere tenuta
                </li>
                <li className="flex items-center gap-2 text-destructive">
                  <X className="w-4 h-4" /> Stressare le guarnizioni
                </li>
                <li className="flex items-center gap-2 text-destructive">
                  <X className="w-4 h-4" /> Far lavorare male la ferramenta
                </li>
              </ul>
            </motion.div>

            {/* DOMUS profile */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass-card p-6 border-primary/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-bold">
                DOMUS
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Anima DOMUS</h3>
              </div>
              <ul className="space-y-2 text-foreground mb-6">
                <li>• Acciaio zincato da <strong className="text-primary">2 mm reali</strong></li>
                <li>• Profilo <strong className="text-primary">chiuso</strong></li>
                <li>• Rigidità strutturale <strong className="text-primary">permanente</strong></li>
              </ul>
              <p className="text-sm text-muted-foreground mb-3">Questo significa:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-primary">
                  <Check className="w-4 h-4" /> Zero flessioni nel tempo
                </li>
                <li className="flex items-center gap-2 text-primary">
                  <Check className="w-4 h-4" /> Carico distribuito su tutta la struttura
                </li>
                <li className="flex items-center gap-2 text-primary">
                  <Check className="w-4 h-4" /> Ferramenta che lavora sempre in asse
                </li>
                <li className="flex items-center gap-2 text-primary">
                  <Check className="w-4 h-4" /> Chiusura perfetta anche dopo 20 anni
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Comparison table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto mb-8"
          >
            <h3 className="text-xl font-bold text-center text-foreground mb-6">Confronto Anima Strutturale</h3>
            <div className="overflow-x-auto">
              <div className="min-w-[500px]">
                <div className="grid grid-cols-3 gap-2 mb-2">
                  <div className="p-3 text-sm font-semibold text-muted-foreground uppercase">Elemento</div>
                  <div className="p-3 bg-destructive/10 rounded-t-lg text-sm font-semibold text-destructive uppercase text-center">Standard</div>
                  <div className="p-3 bg-primary/20 rounded-t-lg text-sm font-semibold text-primary uppercase text-center">DOMUS</div>
                </div>
                {steelComparison.map((row, idx) => (
                  <div key={idx} className="grid grid-cols-3 gap-2 mb-1">
                    <div className="p-3 flex items-center text-foreground font-medium">{row.aspect}</div>
                    <div className="p-3 bg-destructive/5 flex items-center justify-center text-muted-foreground text-sm">{row.standard}</div>
                    <div className="p-3 bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">{row.domus}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-3xl mx-auto border-l-4 border-primary pl-6 py-4 text-center"
          >
            <p className="text-lg md:text-xl italic text-foreground">
              "Una finestra non può essere migliore della sua anima."
            </p>
          </motion.blockquote>
        </div>

        {/* BLOCK 3: 2 vs 3 Guarnizioni */}
        <div className="py-16 md:py-24 border-b border-border/30">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-primary font-semibold uppercase tracking-wider mb-3">La differenza nascosta</p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              2 vs 3 <span className="text-primary text-glow">Guarnizioni</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Le guarnizioni non servono a "fare numero". Servono a sigillare.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {/* 2 Guarnizioni */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card p-6 border-muted-foreground/30"
            >
              <div className="text-3xl font-bold text-muted-foreground mb-4">2 Guarnizioni</div>
              <p className="text-sm text-muted-foreground mb-4">Serramenti economici standard:</p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>• 2 guarnizioni</li>
                <li>• Spesso morbide</li>
                <li>• Perdono elasticità col tempo</li>
              </ul>
              <div className="bg-destructive/10 rounded-lg p-4">
                <p className="text-sm text-destructive">
                  👉 Il risultato arriva dopo qualche anno: <strong>spifferi, rumore, aria che passa.</strong>
                </p>
              </div>
            </motion.div>

            {/* 3 Guarnizioni DOMUS */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass-card p-6 border-primary/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-bold">
                DOMUS
              </div>
              <div className="text-3xl font-bold text-primary mb-4">3 Guarnizioni</div>
              <p className="text-sm text-muted-foreground mb-4">Il sistema DOMUS rinforzato:</p>
              <ul className="space-y-2 text-foreground mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" /> 3 guarnizioni continue
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" /> Materiali ad alta memoria elastica
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" /> Posizionate in modo funzionale
                </li>
              </ul>
              <div className="bg-primary/10 rounded-lg p-4">
                <p className="text-sm text-primary">
                  👉 Tripla barriera: aria, acqua, rumore. Per oltre <strong>20 anni.</strong>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Comparison table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto mb-8"
          >
            <h3 className="text-xl font-bold text-center text-foreground mb-6">Cosa cambia realmente</h3>
            <div className="overflow-x-auto">
              <div className="min-w-[500px]">
                <div className="grid grid-cols-3 gap-2 mb-2">
                  <div className="p-3 text-sm font-semibold text-muted-foreground uppercase">Aspetto</div>
                  <div className="p-3 bg-destructive/10 rounded-t-lg text-sm font-semibold text-destructive uppercase text-center">2 Guarnizioni</div>
                  <div className="p-3 bg-primary/20 rounded-t-lg text-sm font-semibold text-primary uppercase text-center">3 Guarnizioni DOMUS</div>
                </div>
                {gasketComparison.map((row, idx) => (
                  <div key={idx} className="grid grid-cols-3 gap-2 mb-1">
                    <div className="p-3 flex items-center text-foreground font-medium">{row.aspect}</div>
                    <div className="p-3 bg-destructive/5 flex items-center justify-center text-muted-foreground text-sm">{row.twoGasket}</div>
                    <div className="p-3 bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">{row.threeGasket}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-3xl mx-auto border-l-4 border-primary pl-6 py-4"
          >
            <p className="text-lg md:text-xl italic text-foreground">
              "La terza guarnizione non è un extra."
            </p>
            <p className="text-primary font-bold mt-2">È ciò che mantiene le prestazioni quando le altre cedono.</p>
          </motion.blockquote>
        </div>

        {/* BLOCK 4: Lo Spessore Giusto */}
        <div className="py-16 md:py-24 border-b border-border/30">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-primary font-semibold uppercase tracking-wider mb-3">Lo spessore giusto</p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Perché <span className="text-primary text-glow">76 mm</span> è la misura giusta
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Lo spessore del profilo NON è "più è grande meglio è". Qui il mercato crea confusione apposta.
            </p>
          </motion.div>

          {/* Three thickness cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {thicknessData.map((item, index) => (
              <motion.div
                key={item.size}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className={`glass-card p-6 border-2 ${item.borderColor} relative ${item.isRecommended ? 'ring-2 ring-primary/50' : ''}`}
              >
                {/* Badge */}
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold ${item.badgeColor}`}>
                  {item.badge}
                </div>
                
                <div className="text-center mb-6 mt-4">
                  <div className={`text-4xl font-bold ${item.isRecommended ? 'text-primary' : item.isWarning ? 'text-amber-400' : 'text-muted-foreground'}`}>
                    {item.size}
                  </div>
                  <div className={`text-lg font-semibold ${item.isRecommended ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {item.title}
                  </div>
                </div>

                <ul className="space-y-3">
                  {item.points.map((point, idx) => (
                    <li key={idx} className={`flex items-start gap-2 text-sm ${item.isRecommended ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {item.isRecommended ? (
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      ) : item.isWarning ? (
                        <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                      )}
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-3xl mx-auto border-l-4 border-primary pl-6 py-4"
          >
            <p className="text-lg md:text-xl italic text-foreground">
              "Una casa sana non è quella più isolata."
            </p>
            <p className="text-primary font-bold mt-2">È quella meglio bilanciata.</p>
          </motion.blockquote>
        </div>

        {/* BLOCK 5: Quote Finale + Immagine */}
        <div className="py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground max-w-4xl mx-auto mb-6">
              "Il problema delle finestre non è quanto isolano oggi,
              <span className="text-primary text-glow"> ma come si comportano tra 10 o 20 anni.</span>"
            </blockquote>
            <p className="text-xl text-primary font-semibold">DOMUS nasce esattamente per questo.</p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={domusProfileSection}
                alt="Sezione profilo DOMUS con 3 guarnizioni e acciaio 2mm"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex flex-wrap gap-3">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold">
                    Profilo 76mm
                  </span>
                  <span className="bg-card/90 text-foreground px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm">
                    3 Guarnizioni
                  </span>
                  <span className="bg-card/90 text-foreground px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm">
                    Acciaio 2mm
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
