import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const PainLoopSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-12 text-balance">
            Rimandare è la scelta{' '}
            <span className="text-primary">più costosa.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 sm:space-y-8"
        >
          <p className="text-base sm:text-lg md:text-xl text-foreground mb-6 sm:mb-8">
            Ogni mese che passa:
          </p>

          <ul className="space-y-4 sm:space-y-6">
            {[
              "il bagno si deteriora",
              "il valore dell'immobile scende",
              "i costi di ristrutturazione aumentano"
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg md:text-xl"
              >
                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-8 sm:pt-12 mt-8 sm:mt-12 border-t border-border"
          >
            <p className="text-lg sm:text-xl md:text-2xl font-medium mb-3 sm:mb-4">
              La verità è semplice:
            </p>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              non fare nulla è già una decisione.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-primary mt-3 sm:mt-4">
              E quasi sempre è quella sbagliata.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
