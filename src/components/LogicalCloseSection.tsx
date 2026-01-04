import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { X, Check } from "lucide-react";

const badChoiceItems = [
  "risparmio iniziale illusorio",
  "bollette che restano alte",
  "problemi già dal primo inverno"
];

const goodChoiceItems = [
  "risparmio reale del 30-40% in bolletta",
  "comfort immediato, casa calda e silenziosa",
  "finestre che durano 30+ anni"
];

export const LogicalCloseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding section-gradient-alt relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-0 left-1/4 w-80 h-80 bg-primary/8 rounded-full blur-[120px]"
        animate={isInView ? { opacity: [0.08, 0.12, 0.08] } : {}}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Facciamo due conti <span className="text-primary text-glow">semplici.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Bad Choice */}
          <motion.div
            initial={{ opacity: 0, y: 30, x: -20 }}
            animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="p-7 sm:p-8 glass-card border-destructive/15"
          >
            <p className="text-lg font-medium text-muted-foreground mb-6">
              Finestre economiche o fatte male:
            </p>
            <ul className="space-y-4">
              {badChoiceItems.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center gap-4 text-base sm:text-lg text-muted-foreground group"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
                    <X className="w-5 h-5 text-destructive flex-shrink-0" />
                  </motion.div>
                  <span className="group-hover:text-foreground transition-colors">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Good Choice */}
          <motion.div
            initial={{ opacity: 0, y: 30, x: 20 }}
            animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="p-7 sm:p-8 border-2 border-primary glass-card teal-glow-subtle"
          >
            <p className="text-lg font-semibold text-foreground mb-6">
              Con I Profili:
            </p>
            <ul className="space-y-4">
              {goodChoiceItems.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center gap-4 text-base sm:text-lg text-foreground group"
                  initial={{ opacity: 0, x: 10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <motion.div 
                    className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <Check className="w-3.5 h-3.5 text-primary-foreground" />
                  </motion.div>
                  <span className="group-hover:text-primary transition-colors">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-xl md:text-2xl font-semibold text-foreground">
            È una scelta <span className="text-primary text-glow">economica.</span>
          </p>
          <p className="text-lg text-muted-foreground mt-2">
            Prima ancora che estetica.
          </p>
        </motion.div>
      </div>
    </section>
  );
};