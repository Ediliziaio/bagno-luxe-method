import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-12 text-balance">
            Rifare il bagno non è il problema.{' '}
            <span className="text-primary">Farlo male, sì.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 sm:space-y-8"
        >
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            Se stai valutando di rifare il bagno, probabilmente hai già una paura ben precisa:
            iniziare lavori che non finiscono mai, con costi che aumentano e responsabilità che nessuno si prende.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-foreground">
            È quello che succede quando:
          </p>

          <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg md:text-xl text-muted-foreground">
            <li className="flex items-start gap-3 sm:gap-4">
              <span className="text-primary mt-1">—</span>
              <span>non c'è un referente unico</span>
            </li>
            <li className="flex items-start gap-3 sm:gap-4">
              <span className="text-primary mt-1">—</span>
              <span>il preventivo è vago</span>
            </li>
            <li className="flex items-start gap-3 sm:gap-4">
              <span className="text-primary mt-1">—</span>
              <span>il lavoro è gestito "a pezzi"</span>
            </li>
          </ul>

          <div className="pt-6 sm:pt-8 border-t border-border">
            <p className="text-lg sm:text-xl md:text-2xl font-medium">
              Il risultato?
            </p>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mt-2">
              Stress, perdita di tempo e un bagno che spesso non è nemmeno come lo volevi.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
