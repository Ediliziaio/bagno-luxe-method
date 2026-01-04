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
      <motion.div 
        className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"
        animate={isInView ? { opacity: [0.1, 0.15, 0.1] } : {}}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-primary/6 rounded-full blur-[100px]" />
      
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
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Un sistema collaudato per finestre che funzionano davvero.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6 mb-16">
          {methodPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25, x: index % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: 0.2 + index * 0.1,
                type: "spring",
                stiffness: 150
              }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="flex items-start gap-4 p-5 sm:p-6 glass-card group cursor-default"
            >
              <motion.div 
                className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 10 }}
              >
                <Check className="w-5 h-5 text-primary-foreground" />
              </motion.div>
              <span className="text-base sm:text-lg md:text-xl font-medium text-foreground pt-1.5 group-hover:text-primary transition-colors duration-300">
                {point}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center border-t border-border/50 pt-12"
        >
          <p className="text-lg md:text-xl text-muted-foreground italic mb-3">
            Non vendiamo finestre. Non installiamo a caso.
          </p>
          <p className="text-xl md:text-2xl font-bold text-primary text-glow">
            Seguiamo un metodo che garantisce risultati.
          </p>
        </motion.div>
      </div>
    </section>
  );
};