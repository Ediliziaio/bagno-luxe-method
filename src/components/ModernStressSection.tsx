import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Smartphone, Users, Wallet, Brain } from "lucide-react";

const stressFactors = [
  {
    icon: Briefcase,
    title: "Pressioni lavorative sempre più alte",
    description: "Il lavoro oggi è più competitivo, più veloce, più esigente. Burnout, stanchezza mentale e sovraccarico emotivo non sono più eccezioni: sono la normalità."
  },
  {
    icon: Smartphone,
    title: "Tecnologia e connessione continua",
    description: "Siamo sempre reperibili. Sempre online. Il confine tra lavoro e vita privata si è assottigliato, aumentando stress e tensione quotidiana."
  },
  {
    icon: Users,
    title: "Cambiamenti sociali",
    description: "Famiglie diverse, ritmi diversi, meno tempo per sé. Questo genera nuove responsabilità e nuove fonti di pressione."
  },
  {
    icon: Wallet,
    title: "Preoccupazioni economiche",
    description: "Costo della vita, incertezza, decisioni finanziarie continue. Ansia e stress legati al denaro fanno ormai parte della quotidianità di milioni di persone."
  },
  {
    icon: Brain,
    title: "Salute mentale",
    description: "Ansia, tensione, affaticamento mentale. Non sono più temi lontani: sono realtà con cui conviviamo ogni giorno."
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
            Oggi non puoi più permetterti
            <br />
            <span className="text-primary">un bagno approssimativo</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Negli ultimi decenni il livello di stress a cui siamo sottoposti è aumentato in modo evidente.
            La casa non è più solo un luogo dove vivere: è diventata il tuo rifugio, l'unico spazio dove recuperare energie.
          </p>
          <p className="text-xl sm:text-2xl font-semibold text-foreground mt-6">
            E proprio per questo, il bagno non può più essere un ambiente trascurato.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stressFactors.map((factor, index) => (
            <motion.div
              key={factor.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-background border border-border p-6 sm:p-8 hover:border-primary/50 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary">
                  <factor.icon className="w-6 h-6" />
                </div>
                <span className="text-primary font-bold text-2xl">{index + 1}.</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{factor.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{factor.description}</p>
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
            E in un contesto del genere…
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4">
            pensi davvero che il bagno sia solo <span className="text-primary">"un bagno"</span>?
          </p>
        </motion.div>
      </div>
    </section>
  );
};
