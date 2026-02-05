import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  Phone,
  Users,
  Search,
  FileText,
  Ruler,
  Factory,
  Truck,
  Calendar,
  Wrench,
  Sparkles,
  ClipboardCheck,
  FileCheck,
  CheckCircle2,
  MessageCircle,
  Handshake,
  Settings,
} from "lucide-react";

interface Step {
  number: number;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Phase {
  name: string;
  romanNumeral: string;
  phaseIcon: React.ComponentType<{ className?: string }>;
  steps: Step[];
}

const phases: Phase[] = [
  {
    name: "CONSULENZA",
    romanNumeral: "I",
    phaseIcon: MessageCircle,
    steps: [
      { number: 1, title: "Chiamata conoscitiva", icon: Phone },
      { number: 2, title: "Primo appuntamento", icon: Users },
      { number: 3, title: "Comprensione esigenze", icon: Search },
    ],
  },
  {
    name: "PROPOSTA",
    romanNumeral: "II",
    phaseIcon: FileText,
    steps: [
      { number: 4, title: "Ricerca prodotto", icon: Search },
      { number: 5, title: "Proposta soluzione", icon: FileText },
      { number: 6, title: "Offerta personalizzata", icon: FileText },
      { number: 7, title: "Firma contratto", icon: FileCheck },
    ],
  },
  {
    name: "PRODUZIONE",
    romanNumeral: "III",
    phaseIcon: Factory,
    steps: [
      { number: 8, title: "Presa misure", icon: Ruler },
      { number: 9, title: "Produzione", icon: Factory },
      { number: 10, title: "Consegna magazzino", icon: Truck },
      { number: 11, title: "Fissaggio data", icon: Calendar },
    ],
  },
  {
    name: "MONTAGGIO",
    romanNumeral: "IV",
    phaseIcon: Settings,
    steps: [
      { number: 12, title: "Preparazione area", icon: Wrench },
      { number: 13, title: "Montaggio", icon: Wrench },
      { number: 14, title: "Pulizia finale", icon: Sparkles },
      { number: 15, title: "Collaudo", icon: ClipboardCheck },
      { number: 16, title: "Pratica ENEA", icon: FileCheck },
    ],
  },
];

export const HomeServiceOverview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView && count < 16) {
      const timer = setTimeout(() => setCount((c) => c + 1), 80);
      return () => clearTimeout(timer);
    }
  }, [isInView, count]);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 section-light relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary/8 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
            Il Tuo Percorso
          </span>
          
          {/* Animated Number */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.span
              className="text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-primary via-teal-light to-primary bg-clip-text text-transparent"
              style={{
                textShadow: "0 0 60px rgba(8, 103, 129, 0.3)",
              }}
            >
              {count}
            </motion.span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            passaggi curati nei minimi dettagli
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dalla prima chiamata alla pratica ENEA: ogni fase è trasparente e documentata.
          </p>
        </motion.div>

        {/* Timeline Header - Desktop Only */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden lg:block relative max-w-5xl mx-auto mb-12"
        >
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2">
            <div className="h-full bg-gradient-to-r from-primary/20 via-primary to-primary/20 rounded-full" />
          </div>
          
          {/* Timeline Nodes */}
          <div className="relative flex justify-between px-8">
            {phases.map((phase, index) => {
              const PhaseIcon = phase.phaseIcon;
              return (
                <motion.div
                  key={phase.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-teal-light flex items-center justify-center shadow-lg teal-glow">
                    <PhaseIcon className="w-6 h-6 text-white" />
                  </div>
                  <span className="mt-3 text-sm font-bold text-primary uppercase tracking-wider">
                    {phase.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Phase Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {phases.map((phase, phaseIndex) => (
            <motion.div
              key={phase.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + phaseIndex * 0.1 }}
              className="relative group"
            >
              {/* Gradient border on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-teal-light rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              
              <div className="relative bg-card border border-border/50 rounded-2xl p-6 h-full transition-all duration-300 group-hover:border-transparent">
                {/* Phase Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-teal-light flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-sm">{phase.romanNumeral}</span>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Fase {phaseIndex + 1}</span>
                    <h3 className="text-lg font-bold text-primary leading-tight">{phase.name}</h3>
                  </div>
                </div>

                {/* Steps list */}
                <div className="space-y-3">
                  {phase.steps.map((step, stepIndex) => {
                    const Icon = step.icon;
                    return (
                      <motion.div
                        key={step.number}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 + phaseIndex * 0.1 + stepIndex * 0.05 }}
                        className="flex items-center gap-3 group/step"
                      >
                        {/* Step number with gradient border */}
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary to-teal-light rounded-full opacity-0 group-hover/step:opacity-100 transition-opacity" />
                          <div className="relative w-8 h-8 rounded-full bg-muted/80 border border-primary/30 flex items-center justify-center group-hover/step:bg-transparent transition-colors">
                            <span className="text-primary text-xs font-bold group-hover/step:text-white transition-colors">
                              {step.number.toString().padStart(2, "0")}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                          <Icon className="w-4 h-4 text-primary/60 flex-shrink-0 group-hover/step:text-primary/90 transition-colors" />
                          <span className="text-muted-foreground text-sm group-hover/step:text-primary transition-colors truncate">
                            {step.title}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Connector to next phase - Mobile only */}
                {phaseIndex < phases.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-4">
                    <div className="w-0.5 h-6 bg-gradient-to-b from-primary to-primary/30" />
                    </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-12 md:mt-16"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-teal-light rounded-full blur opacity-60 group-hover:opacity-100 transition-opacity animate-pulse" />
            <div className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-teal-light rounded-full shadow-xl">
              <CheckCircle2 className="w-6 h-6 text-white" />
              <span className="text-white font-bold text-lg uppercase tracking-wide">
                Tutto Chiaro
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
