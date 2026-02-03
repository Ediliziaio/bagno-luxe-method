import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import beforeBathroom from "@/assets/before-bathroom-1-new.jpg";
import afterBathroom from "@/assets/after-bathroom-1-new.jpg";

export const DecisionCenterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding section-dark relative overflow-hidden">
      {/* Decorative glow */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]"
        animate={isInView ? { scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] } : {}}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
            Non stai comprando finestre.{" "}
            <span className="text-primary text-glow">
              Stai decidendo come vivrai casa tua per i prossimi 30 anni.
            </span>
          </h2>
        </motion.div>

        {/* Emotional copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12 md:mb-16"
        >
          <p className="text-xl md:text-2xl text-foreground font-medium mb-8 text-center">
            Pensaci un attimo.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Positive scenario */}
            <div className="glass-card p-6 md:p-8 border-l-4 border-l-primary">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Le finestre le vedrai ogni giorno. Le toccherai ogni giorno. Le sentirai ogni giorno.
              </p>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Quando fuori ci sono -5°C e dentro casa sei in maglietta.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Quando passa l'ambulanza e non ti svegli.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Quando apri la bolletta e sorridi invece di imprecare.</span>
                </li>
              </ul>
            </div>

            {/* Negative scenario */}
            <div className="glass-card p-6 md:p-8 border-l-4 border-l-destructive/50">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Oppure il contrario.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">✗</span>
                  <span>Freddo che non capisci da dove arriva.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">✗</span>
                  <span>Rumore che entra anche con le finestre chiuse.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">✗</span>
                  <span>Condensa ogni mattina da asciugare. Muffa negli angoli.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">✗</span>
                  <span>E quella sensazione costante di aver buttato soldi.</span>
                </li>
              </ul>
            </div>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-center mt-10 text-foreground font-semibold"
          >
            La differenza non è il prodotto.{" "}
            <span className="text-primary">È chi lo sceglie, chi lo installa, chi ne risponde.</span>
          </motion.p>
        </motion.div>

        {/* Before/After split image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-4 md:gap-0 rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative">
              <img
                src={beforeBathroom}
                alt="Prima - casa con finestre vecchie"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="font-bold text-foreground">PRIMA</span>
              </div>
            </div>
            <div className="relative">
              <img
                src={afterBathroom}
                alt="Dopo - casa con finestre nuove I Profili"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-primary px-4 py-2 rounded-lg">
                <span className="font-bold text-white">DOPO</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
