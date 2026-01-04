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
            È inverno. Fuori fa freddo, ma tu sei a casa.
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Niente spifferi. Niente rumore dalla strada. Niente condensa sui vetri.
          </p>
          <p className="text-xl md:text-2xl text-foreground leading-relaxed font-medium">
            Solo silenzio, calore e la bolletta che finalmente ha un costo ragionevole.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-border"
        >
          <p className="text-lg md:text-xl text-muted-foreground">
            Non stai solo cambiando le finestre.
          </p>
          <p className="text-2xl md:text-3xl font-bold text-primary mt-4">
            Stai migliorando la qualità della tua vita quotidiana.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
