import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

export const FinalCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="cta-finale" className="section-padding bg-card">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8">
            Inizia ora. <span className="text-primary">Senza impegno.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <p className="text-lg md:text-xl text-muted-foreground mb-4">
            Richiedi il sopralluogo gratuito di I Profili.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground">
            Un nostro tecnico analizza le tue finestre e ti dice esattamente quanto puoi risparmiare.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4"
        >
          <Button variant="teal" size="xl" className="text-lg">
            Richiedi il Sopralluogo Gratuito
          </Button>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <a href="tel:+3902123456" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-5 h-5" />
              <span>02 1234 5678</span>
            </a>
            <a href="mailto:info@iprofili.it" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
              <span>info@iprofili.it</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground"
        >
          <MapPin className="w-4 h-4" />
          <span>Serviamo tutta la Lombardia</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 text-sm text-muted-foreground"
        >
          Nessun vincolo. Nessun costo. Solo informazioni chiare per decidere.
        </motion.p>
      </div>
    </section>
  );
};
