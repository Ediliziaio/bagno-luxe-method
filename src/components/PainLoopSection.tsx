import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Snowflake, Euro, Home } from "lucide-react";

export const PainLoopSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding section-gradient-alt relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-12 text-balance text-foreground">
            Rimandare è la scelta{' '}
            <span className="text-primary text-glow">più costosa.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 sm:space-y-8"
        >
          <p className="text-base sm:text-lg md:text-xl text-foreground mb-6 sm:mb-8">
            Ogni mese che passa con le tue vecchie finestre:
          </p>

          <ul className="space-y-4 sm:space-y-6">
            {[
              { icon: Euro, text: "le tue bollette aumentano del 30-40% rispetto a chi ha finestre efficienti" },
              { icon: Snowflake, text: "il freddo entra e il calore esce, costringendoti a tenere i termosifoni al massimo" },
              { icon: TrendingUp, text: "i costi di installazione aumentano ogni anno" },
              { icon: Home, text: "il valore del tuo immobile scende" }
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg md:text-xl"
              >
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 teal-glow-subtle">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-muted-foreground">{item.text}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="pt-8 sm:pt-12 mt-8 sm:mt-12 border-t border-border"
          >
            <p className="text-lg sm:text-xl md:text-2xl font-medium mb-3 sm:mb-4 text-foreground">
              La verità è semplice:
            </p>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              non fare nulla è già una decisione.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-primary mt-3 sm:mt-4 text-glow">
              E ogni inverno che passa, ti costa sempre di più.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
