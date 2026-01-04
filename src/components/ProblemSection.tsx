import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding section-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-12 text-balance text-foreground">
            Cambiare le finestre non è il problema.{' '}
            <span className="text-primary text-glow">Farlo con chi sbaglia, sì.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 sm:space-y-8"
        >
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            Se stai valutando di cambiare le finestre, probabilmente hai già una paura ben precisa:
            spendere migliaia di euro e ritrovarti con gli stessi problemi di prima.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-foreground">
            È quello che succede quando:
          </p>

          <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg md:text-xl text-muted-foreground">
            <li className="flex items-start gap-3 sm:gap-4">
              <span className="text-primary mt-1">—</span>
              <span>ti vendono "finestre a basso costo" senza una vera consulenza energetica</span>
            </li>
            <li className="flex items-start gap-3 sm:gap-4">
              <span className="text-primary mt-1">—</span>
              <span>l'installazione viene fatta in fretta e senza cura</span>
            </li>
            <li className="flex items-start gap-3 sm:gap-4">
              <span className="text-primary mt-1">—</span>
              <span>nessuno verifica i ponti termici e la tenuta all'aria</span>
            </li>
          </ul>

          <div className="pt-6 sm:pt-8 border-t border-border">
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-foreground">
              Il risultato?
            </p>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mt-2">
              Continui a pagare bollette alte. Continui a sentire freddo. E ti chiedi perché hai speso tutti quei soldi.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
