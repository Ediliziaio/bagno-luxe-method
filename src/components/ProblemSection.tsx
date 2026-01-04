import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <section ref={ref} className="section-padding section-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-0 right-0 w-80 h-80 bg-primary/8 rounded-full blur-[100px]"
        animate={isInView ? { scale: [1, 1.1, 1], opacity: [0.08, 0.12, 0.08] } : {}}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-balance text-foreground leading-tight">
            Cambiare le finestre non è il problema.{' '}
            <span className="text-primary text-glow">Farlo con chi sbaglia, sì.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            Se stai valutando di cambiare le finestre, probabilmente hai già una paura ben precisa:
            <span className="text-foreground font-medium"> spendere migliaia di euro e ritrovarti con gli stessi problemi di prima.</span>
          </p>

          <p className="text-base sm:text-lg md:text-xl text-foreground font-medium">
            È quello che succede quando:
          </p>

          <motion.ul 
            className="space-y-4"
            variants={listVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {[
              "ti vendono \"finestre a basso costo\" senza una vera consulenza energetica",
              "l'installazione viene fatta in fretta e senza cura",
              "nessuno verifica i ponti termici e la tenuta all'aria"
            ].map((item, index) => (
              <motion.li 
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 text-base sm:text-lg md:text-xl text-muted-foreground group"
              >
                <motion.span 
                  className="text-primary mt-1 text-2xl font-light"
                  whileHover={{ scale: 1.2 }}
                >
                  —
                </motion.span>
                <span className="group-hover:text-foreground transition-colors duration-300">{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-8 border-t border-border/50"
          >
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-3">
              Il risultato?
            </p>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              Continui a pagare bollette alte. Continui a sentire freddo. 
              <span className="text-foreground font-medium"> E ti chiedi perché hai speso tutti quei soldi.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};