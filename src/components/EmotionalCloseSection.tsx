import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import familyComfort from "@/assets/family-comfort.jpg";

export const EmotionalCloseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding section-gradient relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-20">
        <img src={familyComfort} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-12 text-foreground">
            Immagina <span className="text-primary text-glow">questo momento.</span>
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
          <p className="text-2xl md:text-3xl font-bold text-primary mt-4 text-glow">
            Stai migliorando la qualità della tua vita quotidiana.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
