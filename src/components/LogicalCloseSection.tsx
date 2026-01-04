import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { X, Check } from "lucide-react";

export const LogicalCloseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding section-gradient-alt relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
      
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

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Bad Choice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 glass-card rounded-xl border-destructive/20"
          >
            <p className="text-lg font-medium text-muted-foreground mb-6">
              Finestre economiche o fatte male:
            </p>
            <ul className="space-y-4">
              {[
                "risparmio iniziale illusorio",
                "bollette che restano alte",
                "problemi già dal primo inverno"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4 text-lg text-muted-foreground">
                  <X className="w-5 h-5 text-destructive flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Good Choice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 border-2 border-primary glass-card rounded-xl teal-glow-subtle"
          >
            <p className="text-lg font-medium text-foreground mb-6">
              Con I Profili:
            </p>
            <ul className="space-y-4">
              {[
                "risparmio reale del 30-40% in bolletta",
                "comfort immediato, casa calda e silenziosa",
                "finestre che durano 30+ anni"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4 text-lg text-foreground">
                  <div className="w-5 h-5 bg-primary rounded flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
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
