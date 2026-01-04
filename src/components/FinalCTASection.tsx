import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export const FinalCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="cta-finale" className="section-padding section-gradient-alt relative overflow-hidden">
      {/* Hero gradient effect with animation */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-primary/12 rounded-full blur-[180px]"
          animate={isInView ? { 
            scale: [1, 1.1, 1],
            opacity: [0.12, 0.18, 0.12]
          } : {}}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      {/* Wave background */}
      <div className="absolute inset-0 wave-bg opacity-30" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-foreground leading-tight">
            Inizia ora. <span className="text-primary text-glow">Senza impegno.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
            Richiedi il sopralluogo gratuito di I Profili.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Un nostro tecnico analizza le tue finestre e ti dice esattamente 
            <span className="text-foreground font-medium"> quanto puoi risparmiare.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              variant="teal" 
              size="xl" 
              className="text-base sm:text-lg teal-glow animate-pulse-glow px-10 sm:px-14 group"
            >
              Richiedi il Sopralluogo Gratuito
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <motion.a 
              href="tel:+3902123456" 
              className="flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <span className="font-medium">02 1234 5678</span>
            </motion.a>
            <motion.a 
              href="mailto:info@iprofili.it" 
              className="flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-medium">info@iprofili.it</span>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex items-center justify-center gap-2.5 text-sm text-muted-foreground"
        >
          <MapPin className="w-4 h-4 text-primary" />
          <span>Serviamo tutta la Lombardia</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 text-sm text-muted-foreground/80"
        >
          Nessun vincolo. Nessun costo. Solo informazioni chiare per decidere.
        </motion.p>
      </div>
    </section>
  );
};