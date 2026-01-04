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
      <div className="absolute inset-0 opacity-15">
        <img 
          src={familyComfort} 
          alt="" 
          className="w-full h-full object-cover" 
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/92 to-background" />
      
      {/* Decorative glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/8 rounded-full blur-[180px]"
        animate={isInView ? { scale: [1, 1.1, 1], opacity: [0.08, 0.12, 0.08] } : {}}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-14 text-foreground leading-tight">
            Immagina <span className="text-primary text-glow">questo momento.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            È inverno. Fuori fa freddo, ma tu sei a casa.
          </motion.p>
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Niente spifferi. Niente rumore dalla strada. Niente condensa sui vetri.
          </motion.p>
          <motion.p 
            className="text-xl md:text-2xl text-foreground leading-relaxed font-medium"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            Solo silenzio, calore e la bolletta che finalmente ha un costo ragionevole.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-12 border-t border-border/50"
        >
          <p className="text-lg md:text-xl text-muted-foreground mb-4">
            Non stai solo cambiando le finestre.
          </p>
          <motion.p 
            className="text-2xl md:text-3xl font-bold text-primary text-glow"
            initial={{ scale: 0.95 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.8, type: "spring" }}
          >
            Stai migliorando la qualità della tua vita quotidiana.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};