import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhyArchitettoDelBagnoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const element = document.getElementById("cta-finale");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={ref} className="section-padding section-dark relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]"
        animate={isInView ? { opacity: [0.1, 0.15, 0.1] } : {}}
        transition={{ duration: 6, repeat: Infinity }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 teal-glow-subtle"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/35 via-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
              <motion.div 
                className="text-center p-8"
                initial={{ scale: 0.9 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <motion.div 
                  className="w-24 h-24 mx-auto mb-5 bg-primary rounded-2xl flex items-center justify-center teal-glow"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <span className="text-primary-foreground font-playfair font-bold text-4xl">iP</span>
                </motion.div>
                <p className="text-2xl font-bold text-foreground mb-1">I Profili</p>
                <p className="text-muted-foreground">Finestre ad Alta Efficienza</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="inline-flex items-center gap-3 bg-primary/15 text-primary px-6 py-3 rounded-full mb-8 border border-primary/25"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <Shield className="w-5 h-5" />
              <span className="font-semibold uppercase tracking-wider text-sm">La Soluzione</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
              È per questo che esiste
              <br />
              <span className="text-primary text-glow">I Profili</span>
            </h2>

            <p className="text-lg sm:text-xl text-muted-foreground mb-6 leading-relaxed">
              Per eliminare l'improvvisazione, lo stress e le brutte sorprese.
            </p>

            <p className="text-xl sm:text-2xl font-semibold mb-10 text-foreground leading-snug">
              Per offrire un servizio <span className="text-primary">completo</span>, <span className="text-primary">professionale</span> e <span className="text-primary">garantito</span>.
            </p>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="teal" size="lg" onClick={scrollToContact} className="group teal-glow">
                Richiedi il preventivo gratuito
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <p className="text-muted-foreground mt-4 text-sm sm:text-base">
              Scopri se il nostro metodo è adatto alla tua casa.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};