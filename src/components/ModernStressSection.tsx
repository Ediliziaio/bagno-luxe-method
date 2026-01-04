import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Thermometer, Volume2, CloudRain, Zap, Shield } from "lucide-react";

const windowProblems = [
  {
    icon: Thermometer,
    title: "Dispersione termica fino al 40%",
    description: "Le finestre vecchie sono la prima causa di perdita di calore in casa. Il 40% dell'energia che paghi esce direttamente dalla finestra."
  },
  {
    icon: Volume2,
    title: "Rumore dalla strada",
    description: "Traffico, clacson, vicini rumorosi. Le vecchie finestre non isolano acusticamente, trasformando casa tua in una piazza pubblica."
  },
  {
    icon: CloudRain,
    title: "Condensa e muffa",
    description: "I vetri freddi creano condensa. La condensa crea muffa. La muffa danneggia la salute e il valore della tua casa."
  },
  {
    icon: Zap,
    title: "Bollette sempre più alte",
    description: "Ogni aumento del gas si traduce in bollette più care. E con finestre inefficienti, butti letteralmente soldi dalla finestra."
  },
  {
    icon: Shield,
    title: "Sicurezza compromessa",
    description: "Finestre vecchie significa serrature deboli. Un invito per i malintenzionati, soprattutto ai piani bassi."
  }
];

export const ModernStressSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Le tue finestre vecchie
            <br />
            <span className="text-primary">ti stanno sabotando</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Non è solo una questione estetica. Le finestre sono il punto più debole
            dell'involucro termico di casa tua. E ogni giorno che passa, paghi le conseguenze.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {windowProblems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-background border border-border p-6 sm:p-8 rounded-lg hover:border-primary/50 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg">
                  <problem.icon className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-xl sm:text-2xl text-muted-foreground">
            E tu quanto stai pagando ogni mese per questi problemi?
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4">
            Le nuove finestre <span className="text-primary">si ripagano da sole</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
