import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import portfolioImage from "@/assets/portfolio-2.jpg";

export const WhyArchitettoDelBagnoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img 
              src={portfolioImage} 
              alt="Bagno realizzato con Il Metodo Architetto del Bagno"
              className="w-full aspect-[4/3] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-6 py-3 mb-8">
              <Shield className="w-6 h-6" />
              <span className="font-semibold uppercase tracking-wider">La Soluzione</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              È per questo che nasce
              <br />
              <span className="text-primary">Architetto del Bagno</span>
            </h2>

            <p className="text-lg sm:text-xl text-muted-foreground mb-6 leading-relaxed">
              Per eliminare improvvisazione, stress e compromessi.
            </p>

            <p className="text-xl sm:text-2xl font-semibold mb-8">
              Per offrire un metodo <span className="text-primary">chiaro</span>, <span className="text-primary">controllato</span> e <span className="text-primary">definitivo</span>.
            </p>

            <Button variant="gold" size="lg" onClick={scrollToContact} className="group">
              Prenota il tuo appuntamento
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-muted-foreground mt-4">
              Scopri se il nostro metodo è adatto al tuo progetto.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
