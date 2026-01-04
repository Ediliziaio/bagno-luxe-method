import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { X, Check } from "lucide-react";

export const LogicalCloseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            Facciamo due conti <span className="text-primary">semplici.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Bad Choice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 border border-border"
          >
            <p className="text-lg font-medium text-muted-foreground mb-6">
              Rifare il bagno male significa:
            </p>
            <ul className="space-y-4">
              {[
                "spendere due volte",
                "perdere tempo",
                "rifare tutto tra qualche anno"
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
            className="p-8 border-2 border-primary bg-card"
          >
            <p className="text-lg font-medium text-foreground mb-6">
              Con Architetto del Bagno:
            </p>
            <ul className="space-y-4">
              {[
                "sai quanto spendi",
                "sai quando finisce",
                "lo fai una volta sola"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4 text-lg text-foreground">
                  <div className="w-5 h-5 bg-primary flex items-center justify-center flex-shrink-0">
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
          <p className="text-xl md:text-2xl font-semibold">
            È una scelta <span className="text-primary">logica.</span>
          </p>
          <p className="text-lg text-muted-foreground mt-2">
            Prima ancora che estetica.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
