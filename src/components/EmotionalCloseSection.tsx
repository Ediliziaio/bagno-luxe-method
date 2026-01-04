import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const EmotionalCloseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-card">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-12">
            Immagina <span className="text-primary">questo momento.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Entri nel tuo nuovo bagno.
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Tutto è ordinato, silenzioso, funzionale.
          </p>
          <p className="text-xl md:text-2xl text-foreground leading-relaxed font-medium">
            Ogni dettaglio è al posto giusto.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-border"
        >
          <p className="text-lg md:text-xl text-muted-foreground">
            Non stai solo rifacendo un bagno.
          </p>
          <p className="text-2xl md:text-3xl font-bold text-primary mt-4">
            Stai migliorando il tuo modo di vivere casa.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
