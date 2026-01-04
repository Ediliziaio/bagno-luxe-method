import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bathroom.jpg";
import portfolioImage from "@/assets/portfolio-1.jpg";

const bathroomRequirements = [
  "progettato sulle tue reali esigenze",
  "proporzionato agli spazi",
  "studiato nei dettagli",
  "capace di durare nel tempo"
];

const bathroomProblems = [
  "sembrano vecchi anche se puliti",
  "stonano completamente con il resto della casa",
  "diventano fonte di imbarazzo quando arrivano ospiti"
];

const dreamBathroomFeatures = [
  "armoniosi",
  "funzionali",
  "belli da vivere ogni giorno"
];

export const BathroomSanctuarySection = () => {
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
        {/* Sanctuary concept */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-lg text-muted-foreground mb-4">
            Non è solo il posto dove lavarsi o fare una doccia.
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Oggi il bagno deve diventare uno <span className="text-primary">spazio di decompressione</span>,
            <br className="hidden sm:block" />
            un ambiente che ti aiuta a rallentare, respirare, recuperare.
          </h2>
          <p className="text-xl sm:text-2xl font-semibold text-primary">
            Un vero santuario di benessere mentale e fisico.
          </p>
        </motion.div>

        {/* Image + Requirements */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src={heroImage} 
              alt="Bagno di lusso Architetto del Bagno"
              className="w-full aspect-[4/3] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-lg text-muted-foreground mb-6">
              Per questo non basta più un bagno funzionale.
              <br />
              <span className="text-foreground font-semibold">Serve un bagno:</span>
            </p>
            <ul className="space-y-4 mb-8">
              {bathroomRequirements.map((req, index) => (
                <motion.li
                  key={req}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-lg">{req}</span>
                </motion.li>
              ))}
            </ul>
            <p className="text-xl font-semibold">
              Ma quante persone possono dire di avere un bagno così?
            </p>
            <p className="text-2xl font-bold text-primary mt-2">
              Poche. Anzi, pochissime.
            </p>
          </motion.div>
        </div>

        {/* Problem bathrooms */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-card border border-border p-8 sm:p-12 mb-16"
        >
          <p className="text-lg text-muted-foreground mb-4">
            E non è solo un problema di case vecchie.
            <br />
            Molti clienti arrivano da noi anche dopo aver comprato casa nuova,
            scoprendo di vivere in un bagno costruito senza alcuna attenzione alle loro reali necessità.
          </p>
          <p className="text-lg mb-6">
            Ogni anno migliaia di persone entrano in contatto con <span className="text-primary font-semibold">Architetto del Bagno</span>
            <br />
            perché a casa vivono una situazione che li mette a disagio.
          </p>
          <p className="font-semibold mb-4">Bagni che:</p>
          <ul className="space-y-3 mb-6">
            {bathroomProblems.map((problem) => (
              <li key={problem} className="flex items-center gap-3 text-muted-foreground">
                <X className="w-5 h-5 text-destructive flex-shrink-0" />
                <span>{problem}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg italic text-muted-foreground">
            Invece di essere rigenerante,
            <br />
            <span className="text-foreground font-semibold">il bagno diventa un ambiente da nascondere.</span>
          </p>
        </motion.div>

        {/* Dream bathrooms */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              I nostri clienti, al contrario,
              <br />
              <span className="text-primary">rientrano tra quei pochi che possono vantare bagni da sogno</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-4">Bagni:</p>
            <ul className="space-y-3 mb-8">
              {dreamBathroomFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-lg font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            <p className="text-xl font-semibold mb-8">E non per caso.</p>
            
            <Button variant="gold" size="lg" onClick={scrollToContact} className="group">
              Diventa anche tu il nostro prossimo caso di successo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-muted-foreground mt-4">
              Prenota ora il tuo appuntamento nei nostri showroom.
              <br />
              Inizia oggi a progettare un bagno rigenerante e accogliente.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="order-1 lg:order-2"
          >
            <img 
              src={portfolioImage} 
              alt="Bagno da sogno realizzato da Architetto del Bagno"
              className="w-full aspect-[4/3] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
