import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import homeWindows from "@/assets/home-windows.jpg";

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
    <section ref={ref} className="section-padding section-gradient-alt relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-1/4 left-0 w-96 h-96 bg-primary/8 rounded-full blur-[120px]"
        animate={isInView ? { opacity: [0.08, 0.12, 0.08] } : {}}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/6 rounded-full blur-[100px]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main concept */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-lg text-muted-foreground mb-5">
            Le finestre non sono solo "buchi nel muro".
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
            Sono il confine tra il tuo <span className="text-primary text-glow">comfort domestico</span>
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
            className="relative rounded-2xl overflow-hidden group"
          >
            <img 
              src={homeWindows} 
              alt="Casa moderna con finestre in PVC" 
              className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
            <motion.div 
              className="absolute bottom-6 left-6 right-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <p className="text-primary font-semibold text-lg">Finestra ad Alta Efficienza</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
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
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <motion.div 
                    className="w-7 h-7 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Check className="w-4 h-4 text-primary" />
                  </motion.div>
                  <span className="text-base sm:text-lg text-foreground">{req}</span>
                </motion.li>
              ))}
            </ul>
            <p className="text-lg sm:text-xl font-semibold text-foreground mb-2">
              Ma quanti possono dire di aver scelto così?
            </p>
            <p className="text-xl sm:text-2xl font-bold text-primary text-glow">
              Pochi. Anzi, pochissimi.
            </p>
          </motion.div>
        </div>

        {/* Problem windows */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass-card p-8 sm:p-12 mb-16"
        >
          <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
            Non è solo un problema di case vecchie.
            <br />
            Molti clienti arrivano da noi anche dopo aver comprato casa nuova,
            scoprendo che le finestre installate dal costruttore sono di bassa qualità.
          </p>
          <p className="text-lg mb-6 text-foreground font-medium">
            Ogni anno centinaia di famiglie in Lombardia ci contattano
            <br />
            perché vivono con finestre che:
          </p>
          <ul className="space-y-3 mb-6">
            {windowProblems.map((problem, index) => (
              <motion.li 
                key={problem} 
                className="flex items-center gap-3 text-muted-foreground group"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <X className="w-5 h-5 text-destructive flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-foreground transition-colors">{problem}</span>
              </motion.li>
            ))}
          </ul>
          <p className="text-lg italic text-muted-foreground">
            Invece di proteggere il comfort di casa,
            <br />
            <span className="text-foreground font-semibold not-italic">le finestre diventano un problema quotidiano.</span>
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
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground leading-tight">
              I nostri clienti, invece,
              <br />
              <span className="text-primary text-glow">vivono in case che consumano fino al 40% in meno</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-5">Finestre che sono:</p>
            <ul className="space-y-3 mb-8">
              {dreamWindowFeatures.map((feature, index) => (
                <motion.li 
                  key={feature} 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <motion.div 
                    className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <Check className="w-3.5 h-3.5 text-primary-foreground" />
                  </motion.div>
                  <span className="text-lg font-medium text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>
            <p className="text-xl font-semibold mb-8 text-foreground">E non per caso.</p>
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="teal" size="lg" onClick={scrollToContact} className="group teal-glow">
                Scopri quanto puoi risparmiare
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <p className="text-muted-foreground mt-4 text-sm sm:text-base">
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
            <div className="glass-card p-8 teal-glow-subtle">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                <motion.div 
                  className="text-center"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.9, type: "spring" }}
                >
                  <p className="text-6xl sm:text-7xl font-bold text-primary text-glow mb-3">-40%</p>
                  <p className="text-lg sm:text-xl text-foreground font-medium">Risparmio medio in bolletta</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};