import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Ban, TrendingDown, AlertTriangle, ThermometerSun, Check, Clock, Calendar, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import casaGreenImage from "@/assets/casa-green-directive.jpg";

const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

const DaysCountdown = () => {
  const [days, setDays] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const target = new Date("2030-01-01").getTime();
    const now = new Date().getTime();
    const difference = Math.floor((target - now) / (1000 * 60 * 60 * 24));
    
    if (isInView) {
      const duration = 2500;
      const steps = 80;
      const increment = difference / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= difference) {
          setDays(difference);
          clearInterval(timer);
        } else {
          setDays(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-7xl md:text-9xl font-display font-bold text-green-400 tabular-nums">
        {days.toLocaleString('it-IT')}
      </div>
      <p className="text-xl md:text-2xl text-foreground/80 mt-2">giorni al 2030</p>
    </div>
  );
};

const consequenceCards = [
  {
    icon: Ban,
    title: "BLOCCO VENDITA",
    description: "Non potrai vendere né affittare il tuo immobile se non raggiunge la Classe E. Il tuo patrimonio resta bloccato.",
  },
  {
    icon: TrendingDown,
    title: "CROLLO VALORE",
    description: "Le case in classe F e G perderanno fino al 30% del valore di mercato. Chi compra oggi cerca case efficienti.",
  },
  {
    icon: AlertTriangle,
    title: "MULTE SALATE",
    description: "Sanzioni previste per i proprietari inadempienti. L'Italia dovrà recepire la direttiva con penalità specifiche.",
  },
];

const windowBenefits = [
  "Passaggio immediato di 1-2 classi energetiche",
  "Risparmio fino al 45% sulle bollette gas",
  "Aumento valore immobile del 15-20%",
  "Accesso a detrazioni fiscali fino al 65%",
  "Nessun intervento strutturale invasivo",
];

const timelineSteps = [
  { year: "2025", label: "Prime misure attive", active: true },
  { year: "2028", label: "Controlli intensificati", active: false },
  { year: "2030", label: "Classe E obbligatoria", active: false, critical: true },
  { year: "2033", label: "Classe D obbligatoria", active: false },
  { year: "2050", label: "Zero emissioni", active: false, final: true },
];

const scrollToContact = () => {
  const element = document.getElementById("cta-finale");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const CaseGreenSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="section-dark py-20 md:py-32 relative overflow-hidden"
    >
      {/* Green gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-6 border border-green-500/30"
          >
            <Leaf className="w-4 h-4 inline mr-2" />
            Direttiva Europea Case Green
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            CASE GREEN 2030:
            <br />
            <span className="text-green-400">LA TUA CASA È PRONTA?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
            L'Europa ha deciso. Entro il 2030 la tua casa dovrà raggiungere almeno la <strong className="text-foreground">Classe E</strong>. Altrimenti...
          </p>
        </motion.div>

        {/* Image + Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid md:grid-cols-2 gap-8 items-center mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <img 
              src={casaGreenImage} 
              alt="Direttiva Europea Case Green - Casa efficiente classe A" 
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold text-foreground">
              La Direttiva EPBD IV è Legge
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              L'Unione Europea ha approvato la <strong className="text-green-400">Direttiva Case Green (EPBD IV)</strong> che obbliga tutti gli edifici residenziali a raggiungere standard minimi di efficienza energetica.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              L'Italia dovrà recepire la normativa con scadenze precise: <strong className="text-foreground">Classe E entro il 2030</strong> e <strong className="text-foreground">Classe D entro il 2033</strong>.
            </p>
          </div>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 md:p-12 rounded-2xl mb-16 max-w-2xl mx-auto text-center border border-green-500/20"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Clock className="w-6 h-6 text-green-400" />
            <span className="text-lg text-foreground/70 uppercase tracking-wider">Il conto alla rovescia</span>
          </div>
          
          <DaysCountdown />
          
          <p className="text-lg text-foreground/60 mt-6">
            E il <span className="text-amber-400 font-bold">74%</span> delle case italiane non è a norma.
          </p>
        </motion.div>

        {/* Consequences */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-center text-foreground mb-10">
            COSA SUCCEDE SE NON TI ADEGUI
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {consequenceCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card p-6 rounded-xl border border-amber-500/30 hover:border-amber-500/60 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full bg-amber-500/20 flex items-center justify-center mb-4 group-hover:bg-amber-500/30 transition-colors">
                  <card.icon className="w-7 h-7 text-amber-400" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{card.title}</h4>
                <p className="text-foreground/70 leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 74% Statistic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-20 py-12"
        >
          <div className="text-8xl md:text-[10rem] font-display font-bold text-green-400 leading-none mb-4">
            <AnimatedCounter target={74} suffix="%" />
          </div>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
            DELLE CASE ITALIANE È IN CLASSE F O G
          </h3>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Se la tua casa è tra queste, hai un problema serio. E il tempo stringe.
          </p>
        </motion.div>

        {/* Windows Solution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-card p-8 md:p-12 rounded-2xl mb-20 border border-primary/30 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <ThermometerSun className="w-8 h-8 text-primary" />
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                LE FINESTRE SONO LA CHIAVE
              </h3>
            </div>
            
            <p className="text-xl text-primary font-semibold mb-8">
              Le finestre sono responsabili del 25-40% della dispersione termica della tua casa.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {windowBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground/90">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-center text-foreground mb-10">
            LA ROADMAP EUROPEA
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-6 left-0 right-0 h-1 bg-foreground/10 hidden md:block" />
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-2">
              {timelineSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="text-center relative"
                >
                  <div
                    className={`w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center relative z-10 ${
                      step.critical
                        ? "bg-amber-500 text-background"
                        : step.final
                        ? "bg-green-500 text-background"
                        : step.active
                        ? "bg-green-500 text-background"
                        : "bg-foreground/20 text-foreground/60"
                    }`}
                  >
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div
                    className={`text-2xl font-bold mb-1 ${
                      step.critical ? "text-amber-400" : step.final ? "text-green-400" : step.active ? "text-green-400" : "text-foreground"
                    }`}
                  >
                    {step.year}
                  </div>
                  <div className="text-sm text-foreground/60">{step.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center"
        >
          <div className="glass-card p-8 md:p-12 rounded-2xl max-w-3xl mx-auto border border-green-500/20">
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed">
              Non aspettare che il problema diventi irreversibile.
              <br />
              <strong className="text-amber-400">
                Ogni mese che passa, il costo della ristrutturazione aumenta
                e il valore della tua casa diminuisce.
              </strong>
            </p>
            
            <Button
              variant="teal"
              size="xl"
              onClick={scrollToContact}
              className="group"
            >
              Scopri Come Adeguare la Tua Casa
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
