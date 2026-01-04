import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AlertTriangle, Users, Ruler, Wrench, Truck, Clock } from "lucide-react";

const professionals = [
  { icon: Ruler, name: "un venditore / consulente" },
  { icon: Truck, name: "un magazziniere / logistica" },
  { icon: Wrench, name: "un installatore" },
  { icon: Users, name: "un muratore per le rifiniture" },
  { icon: Clock, name: "un servizio post-vendita" }
];

const renovationProblems = [
  "Il venditore ti promette risparmio miracoloso, poi sparisce dopo la firma del contratto.",
  "L'installazione viene fatta in fretta, senza cura per i dettagli e la tenuta termica.",
  "Nessuno verifica che tutto sia stato fatto correttamente. E quando hai problemi, nessuno risponde."
];

const discomforts = [
  { icon: Clock, text: "1-2 giorni di installazione (spesso di più)" },
  { icon: Truck, text: "polvere, rumore, spostamento mobili" },
  { icon: AlertTriangle, text: "rischio di lavori fatti male e da rifare" }
];

export const RenovationNightmareSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding section-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-destructive/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Warning header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-destructive/20 text-destructive px-6 py-3 rounded-full mb-8 border border-destructive/30">
            <AlertTriangle className="w-6 h-6" />
            <span className="font-semibold uppercase tracking-wider">Attenzione</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Cambiare le finestre
            <br />
            <span className="text-primary text-glow">può trasformarsi in un incubo</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Non tutti i serramentisti sono uguali.
            <br />
            <span className="font-semibold text-foreground">E la differenza la paghi tu.</span>
          </p>
        </motion.div>

        {/* No shortcuts explanation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 sm:p-12 rounded-xl mb-16"
        >
          <p className="text-lg leading-relaxed text-muted-foreground mb-4">
            Le finestre economiche hanno un costo nascosto.
            <br />
            <span className="text-foreground font-semibold">E quel costo lo paghi ogni mese in bolletta.</span>
          </p>
          <p className="text-xl font-semibold text-foreground">
            Se l'installazione non è perfetta, 
            anche le migliori finestre <span className="text-primary">non servono a nulla.</span>
          </p>
        </motion.div>

        {/* The 5 roles involved */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-foreground">
            Per cambiare le finestre servono competenze diverse
          </h3>
          <p className="text-center text-lg text-muted-foreground mb-8">
            E se non sono coordinate tra loro, il risultato è un disastro.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {professionals.map((pro, index) => (
              <motion.div
                key={pro.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="glass-card p-6 text-center rounded-lg hover:border-primary/50 transition-all duration-300 group"
              >
                <pro.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-medium text-foreground">{pro.name}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-center text-xl font-bold text-foreground"
          >
            <span className="text-primary text-3xl text-glow">5</span> ruoli diversi. <span className="text-primary text-3xl text-glow">5</span> possibilità di errore.
          </motion.p>
        </motion.div>

        {/* Problems list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <ul className="space-y-6 max-w-3xl mx-auto">
            {renovationProblems.map((problem, index) => (
              <li key={index} className="flex items-start gap-4 glass-card p-6 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">{problem}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* The real risk */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-destructive/10 border border-destructive/30 p-8 sm:p-12 rounded-xl mb-16"
        >
          <p className="text-lg text-muted-foreground mb-4">
            Il problema è che <span className="text-foreground font-semibold">le finestre restano a casa tua.</span>
            <br />
            Non puoi restituirle come un pacco Amazon.
          </p>
          <p className="text-xl font-bold text-foreground mb-4">Il rischio reale?</p>
          <p className="text-lg text-muted-foreground mb-8">
            Spendere migliaia di euro
            <br />
            e ritrovarti con gli stessi problemi di prima:
            <br />
            freddo, spifferi, condensa. Solo con finestre più nuove.
          </p>

          <p className="font-semibold mb-4 text-foreground">Senza contare il disagio dell'installazione:</p>
          <ul className="space-y-3">
            {discomforts.map((item) => (
              <li key={item.text} className="flex items-center gap-3 text-muted-foreground">
                <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-lg text-muted-foreground mb-4">
            Questa non è teoria. È esperienza reale.
          </p>
          <p className="text-xl sm:text-2xl font-semibold text-foreground">
            Prima di affidarsi a <span className="text-primary">I Profili</span>,
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 text-foreground">
            quasi la <span className="text-primary text-glow">metà</span> dei nostri clienti aveva già avuto esperienze negative:
          </p>
          <p className="text-lg text-muted-foreground mt-4">
            soldi spesi male, lavori da rifare,
            <br />
            e finestre che non hanno mai mantenuto le promesse.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
