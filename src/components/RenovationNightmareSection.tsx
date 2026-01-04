import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AlertTriangle, PenTool, Droplets, Zap, Hammer, Sofa, Clock, Home, Package } from "lucide-react";
import detailImage from "@/assets/detail-bathroom.jpg";

const professionals = [
  { icon: PenTool, name: "un progettista / architetto" },
  { icon: Droplets, name: "un idraulico" },
  { icon: Zap, name: "un elettricista" },
  { icon: Hammer, name: "un muratore" },
  { icon: Sofa, name: "un fornitore di arredi" }
];

const renovationProblems = [
  "Spesso il progettista \"non c'è\" e tutto viene deciso dal muratore, secondo la sua visione, non la tua.",
  "Niente progetto chiaro. Niente modello di fattibilità. Spesso nemmeno un disegno.",
  "Solo un'idea confusa portata avanti ignorando l'unica cosa che conta davvero: le tue esigenze."
];

const discomforts = [
  { icon: Clock, text: "7–10 giorni (quando va bene) di cantiere in casa" },
  { icon: Home, text: "polvere, detriti, rumore" },
  { icon: Package, text: "dover andare da amici o parenti per farti una doccia" }
];

export const RenovationNightmareSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Warning header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-destructive/10 text-destructive px-6 py-3 mb-8">
            <AlertTriangle className="w-6 h-6" />
            <span className="font-semibold uppercase tracking-wider">Attenzione</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ma attenzione: ristrutturare un bagno
            <br />
            <span className="text-primary">può trasformarsi in un vero incubo</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Qui non esistono scorciatoie.
            <br />
            <span className="font-semibold text-foreground">Nel bagno non ci sono trucchetti.</span>
          </p>
        </motion.div>

        {/* No shortcuts explanation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-background border border-border p-8 sm:p-12 mb-16"
        >
          <p className="text-lg leading-relaxed text-muted-foreground mb-4">
            In altri ambienti puoi migliorare molto anche con piccoli interventi.
            <br />
            <span className="text-foreground font-semibold">Nel bagno no.</span>
          </p>
          <p className="text-xl font-semibold">
            Quando il bagno non funziona,
            nella maggior parte dei casi l'unica soluzione sensata è <span className="text-primary">rifarlo da zero.</span>
          </p>
        </motion.div>

        {/* The 5 professionals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            Ed è qui che la maggior parte delle persone sbaglia
          </h3>
          <p className="text-center text-lg text-muted-foreground mb-8">
            Senza una guida chiara,
            ristrutturare un bagno significa entrare in un labirinto di decisioni sbagliate.
          </p>
          <p className="text-center text-lg mb-8">
            Per rifare un bagno servono almeno:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {professionals.map((pro, index) => (
              <motion.div
                key={pro.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-background border border-border p-6 text-center hover:border-primary/50 transition-colors"
              >
                <pro.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-sm font-medium">{pro.name}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-center text-xl font-bold"
          >
            <span className="text-primary text-3xl">5</span> figure diverse. <span className="text-primary text-3xl">5</span> visioni diverse.
          </motion.p>
        </motion.div>

        {/* Problems list */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <ul className="space-y-6">
              {renovationProblems.map((problem, index) => (
                <li key={index} className="flex items-start gap-4">
                  <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <p className="text-lg text-muted-foreground">{problem}</p>
                </li>
              ))}
            </ul>
            <p className="text-lg mt-8 text-muted-foreground">
              Quando le realtà sono piccole, scollegate e poco strutturate,
              <br />
              <span className="text-foreground font-semibold">la comunicazione salta, i tempi si allungano
              e il risultato finale delude.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img 
              src={detailImage} 
              alt="Dettaglio bagno di qualità" 
              className="w-full aspect-[4/3] object-cover"
            />
          </motion.div>
        </div>

        {/* The real risk */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-destructive/5 border border-destructive/20 p-8 sm:p-12 mb-16"
        >
          <p className="text-lg text-muted-foreground mb-4">
            Il problema è che <span className="text-foreground font-semibold">il bagno resta tuo.</span>
            <br />
            Non puoi rimandarlo indietro come un pacco Amazon.
          </p>
          <p className="text-xl font-bold text-foreground mb-4">Il rischio reale?</p>
          <p className="text-lg text-muted-foreground mb-8">
            Passare da un bagno vecchio e scomodo
            <br />
            a uno nuovo… ma altrettanto scomodo,
            <br />
            solo con sanitari più moderni e rubinetti di design.
          </p>

          <p className="font-semibold mb-4">Senza contare il disagio:</p>
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
          <p className="text-xl sm:text-2xl font-semibold">
            Prima di affidarsi a <span className="text-primary">Architetto del Bagno</span>,
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4">
            quasi la <span className="text-primary">metà</span> dei nostri clienti ha già vissuto ristrutturazioni fallimentari:
          </p>
          <p className="text-lg text-muted-foreground mt-4">
            tempo perso, soldi sprecati
            <br />
            e un bagno che non ha mai mantenuto le promesse.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
