import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const windowRequirements = [
  "ad alta efficienza energetica classe A",
  "con triplo vetro termoisolante",
  "installate a regola d'arte",
  "con garanzia reale sui materiali e l'installazione"
];

const windowProblems = [
  "fanno entrare il freddo d'inverno",
  "non isolano dal rumore",
  "hanno condensa sui vetri ogni mattina"
];

const dreamWindowFeatures = [
  "silenziose",
  "termicamente efficienti",
  "belle e moderne"
];

export const BathroomSanctuarySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const element = document.getElementById("cta-finale");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Main concept */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-lg text-muted-foreground mb-4">
            Le finestre non sono solo "buchi nel muro".
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Sono il confine tra il tuo <span className="text-primary">comfort domestico</span>
            <br className="hidden sm:block" />
            e tutto ciò che c'è là fuori: freddo, rumore, inquinamento.
          </h2>
          <p className="text-xl sm:text-2xl font-semibold text-primary">
            Meritano di essere trattate come un investimento strategico.
          </p>
        </motion.div>

        {/* Requirements Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl"
          >
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 border-4 border-primary rounded-lg flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/20 rounded" />
                </div>
                <p className="text-primary font-medium">Finestra ad Alta Efficienza</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-lg text-muted-foreground mb-6">
              Per risparmiare davvero sulle bollette non basta una finestra qualunque.
              <br />
              <span className="text-foreground font-semibold">Servono finestre:</span>
            </p>
            <ul className="space-y-4 mb-8">
              {windowRequirements.map((req, index) => (
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
              Ma quanti possono dire di aver scelto così?
            </p>
            <p className="text-2xl font-bold text-primary mt-2">
              Pochi. Anzi, pochissimi.
            </p>
          </motion.div>
        </div>

        {/* Problem windows */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-card border border-border p-8 sm:p-12 rounded-xl mb-16"
        >
          <p className="text-lg text-muted-foreground mb-4">
            Non è solo un problema di case vecchie.
            <br />
            Molti clienti arrivano da noi anche dopo aver comprato casa nuova,
            scoprendo che le finestre installate dal costruttore sono di bassa qualità.
          </p>
          <p className="text-lg mb-6">
            Ogni anno centinaia di famiglie in Lombardia ci contattano
            <br />
            perché vivono con finestre che:
          </p>
          <ul className="space-y-3 mb-6">
            {windowProblems.map((problem) => (
              <li key={problem} className="flex items-center gap-3 text-muted-foreground">
                <X className="w-5 h-5 text-destructive flex-shrink-0" />
                <span>{problem}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg italic text-muted-foreground">
            Invece di proteggere il comfort di casa,
            <br />
            <span className="text-foreground font-semibold">le finestre diventano un problema quotidiano.</span>
          </p>
        </motion.div>

        {/* Dream windows */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              I nostri clienti, invece,
              <br />
              <span className="text-primary">vivono in case che consumano fino al 40% in meno</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-4">Finestre che sono:</p>
            <ul className="space-y-3 mb-8">
              {dreamWindowFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-lg font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            <p className="text-xl font-semibold mb-8">E non per caso.</p>
            
            <Button variant="teal" size="lg" onClick={scrollToContact} className="group">
              Scopri quanto puoi risparmiare
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-muted-foreground mt-4">
              Richiedi ora il sopralluogo gratuito.
              <br />
              Ti calcoliamo il risparmio energetico esatto per casa tua.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="order-1 lg:order-2"
          >
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-6xl font-bold text-primary mb-2">-40%</p>
                  <p className="text-lg text-muted-foreground">Risparmio medio in bolletta</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
