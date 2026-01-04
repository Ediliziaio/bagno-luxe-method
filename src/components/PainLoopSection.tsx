import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Snowflake, Euro, Home } from "lucide-react";

const painItems = [
  { icon: Euro, text: "le tue bollette aumentano del 30-40% rispetto a chi ha finestre efficienti" },
  { icon: Snowflake, text: "il freddo entra e il calore esce, costringendoti a tenere i termosifoni al massimo" },
  { icon: TrendingUp, text: "i costi di installazione aumentano ogni anno" },
  { icon: Home, text: "il valore del tuo immobile scende" }
];

export const PainLoopSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding section-gradient-alt relative overflow-hidden">
      {/* Decorative glow */}
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-primary/8 rounded-full blur-[120px]"
        animate={isInView ? { opacity: [0.08, 0.15, 0.08] } : {}}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-balance text-foreground leading-tight">
            Rimandare è la scelta{' '}
            <span className="text-primary text-glow">più costosa.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <p className="text-base sm:text-lg md:text-xl text-foreground mb-8 font-medium">
            Ogni mese che passa con le tue vecchie finestre:
          </p>

          <ul className="space-y-5">
            {painItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.12 }}
                className="flex items-start gap-4 text-base sm:text-lg md:text-xl group"
              >
                <motion.div 
                  className="w-11 h-11 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <item.icon className="w-5 h-5 text-primary" />
                </motion.div>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 pt-2">
                  {item.text}
                </span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-10 mt-10 border-t border-border/50"
          >
            <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-foreground">
              La verità è semplice:
            </p>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4">
              non fare nulla è già una decisione.
            </p>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl font-bold text-primary text-glow"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
            >
              E ogni inverno che passa, ti costa sempre di più.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};