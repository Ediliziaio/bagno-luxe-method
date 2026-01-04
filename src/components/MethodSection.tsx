import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const methodPoints = [
  "Sopralluogo gratuito e analisi energetica completa",
  "Preventivo trasparente senza sorprese",
  "Finestre in PVC classe A ad alta efficienza",
  "Installazione certificata con sigillatura termica",
  "Tempi certi e rispettati",
  "Garanzia totale su prodotto e installazione"
];

export const MethodSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="metodo" className="section-padding section-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary/8 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Il Metodo <span className="text-primary text-glow">I Profili</span>™
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Un sistema collaudato per finestre che funzionano davvero.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {methodPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="flex items-start gap-4 p-6 glass-card rounded-lg hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:teal-glow-subtle transition-all duration-300">
                <Check className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg md:text-xl font-medium text-foreground">{point}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center border-t border-border pt-12"
        >
          <p className="text-lg md:text-xl text-muted-foreground italic">
            Non vendiamo finestre. Non installiamo a caso.
          </p>
          <p className="text-xl md:text-2xl font-semibold text-primary mt-2 text-glow">
            Seguiamo un metodo che garantisce risultati.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
