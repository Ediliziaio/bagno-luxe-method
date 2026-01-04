import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const methodPoints = [
  "Un unico referente dall'inizio alla fine",
  "Preventivo chiaro prima di iniziare",
  "Progetto definito nei dettagli",
  "Team interno coordinato",
  "Tempi certi e scritti",
  "Materiali selezionati per durare nel tempo"
];

export const MethodSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="metodo" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Il Metodo <span className="text-primary">Architetto del Bagno</span>™
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Un sistema progettato per eliminare imprevisti, ritardi e stress.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {methodPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="flex items-start gap-4 p-6 border border-border bg-card hover:border-primary/50 transition-colors duration-300"
            >
              <div className="w-8 h-8 bg-primary flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg md:text-xl font-medium">{point}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center border-t border-border pt-12"
        >
          <p className="text-lg md:text-xl text-muted-foreground italic">
            Non improvvisiamo. Non sperimentiamo.
          </p>
          <p className="text-xl md:text-2xl font-semibold text-primary mt-2">
            Seguiamo un metodo collaudato.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
