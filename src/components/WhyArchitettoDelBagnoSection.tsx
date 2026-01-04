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
    <section ref={ref} className="section-padding section-gradient-alt relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 rounded-2xl teal-glow-subtle"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/30 to-primary/10 rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-4 bg-primary rounded-xl flex items-center justify-center teal-glow">
                  <span className="text-primary-foreground font-playfair font-bold text-4xl">iP</span>
                </div>
                <p className="text-xl font-bold text-foreground">I Profili</p>
                <p className="text-muted-foreground">Finestre ad Alta Efficienza</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-3 bg-primary/20 text-primary px-6 py-3 rounded-full mb-8 border border-primary/30">
              <Shield className="w-6 h-6" />
              <span className="font-semibold uppercase tracking-wider">La Soluzione</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
              È per questo che esiste
              <br />
              <span className="text-primary text-glow">I Profili</span>
            </h2>

            <p className="text-lg sm:text-xl text-muted-foreground mb-6 leading-relaxed">
              Per eliminare l'improvvisazione, lo stress e le brutte sorprese.
            </p>

            <p className="text-xl sm:text-2xl font-semibold mb-8 text-foreground">
              Per offrire un servizio <span className="text-primary">completo</span>, <span className="text-primary">professionale</span> e <span className="text-primary">garantito</span>.
            </p>

            <Button variant="teal" size="lg" onClick={scrollToContact} className="group teal-glow">
              Richiedi il preventivo gratuito
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-muted-foreground mt-4">
              Scopri se il nostro metodo è adatto alla tua casa.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
