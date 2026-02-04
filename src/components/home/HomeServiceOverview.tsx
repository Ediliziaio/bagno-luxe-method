import { useRef } from "react";
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
} from "lucide-react";

interface Step {
  number: number;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Phase {
  name: string;
  steps: Step[];
}

const phases: Phase[] = [
  {
    name: "CONSULENZA",
    steps: [
      { number: 1, title: "Chiamata conoscitiva", icon: Phone },
      { number: 2, title: "Primo appuntamento", icon: Users },
      { number: 3, title: "Comprensione esigenze", icon: Search },
    ],
  },
  {
    name: "PROPOSTA",
    steps: [
      { number: 4, title: "Ricerca prodotto", icon: Search },
      { number: 5, title: "Proposta soluzione", icon: FileText },
      { number: 6, title: "Offerta personalizzata", icon: FileText },
      { number: 7, title: "Firma contratto", icon: FileCheck },
    ],
  },
  {
    name: "PRODUZIONE",
    steps: [
      { number: 8, title: "Presa misure", icon: Ruler },
      { number: 9, title: "Produzione", icon: Factory },
      { number: 10, title: "Consegna magazzino", icon: Truck },
      { number: 11, title: "Fissaggio data", icon: Calendar },
    ],
  },
  {
    name: "MONTAGGIO",
    steps: [
      { number: 12, title: "Preparazione area", icon: Wrench },
      { number: 13, title: "Montaggio", icon: Wrench },
      { number: 14, title: "Pulizia finale", icon: Sparkles },
      { number: 15, title: "Collaudo", icon: ClipboardCheck },
      { number: 16, title: "Pratica ENEA", icon: FileCheck },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const phaseVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const HomeServiceOverview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      ref={sectionRef}
      className="section-padding section-light relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
            Il Tuo Percorso
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-primary">16 passaggi</span> curati nei minimi dettagli
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dalla prima chiamata alla pratica ENEA: ogni fase è trasparente e documentata.
          </p>
        </motion.div>

        {/* Phases - Horizontal on desktop, vertical on mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {phases.map((phase, phaseIndex) => (
            <motion.div
              key={phase.name}
              variants={phaseVariants}
              className="light-card p-5 md:p-6 relative group hover:border-primary/30 transition-all duration-300"
            >
              {/* Phase number badge */}
              <div className="absolute -top-3 left-5 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
                FASE {phaseIndex + 1}
              </div>

              {/* Phase name */}
              <h3 className="text-lg font-bold text-primary mt-3 mb-4">
                {phase.name}
              </h3>

              {/* Steps list */}
              <div className="space-y-2.5">
                {phase.steps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.number}
                      className="flex items-center gap-3 text-sm"
                    >
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-muted/50 border border-primary/20 flex items-center justify-center">
                        <span className="text-primary text-xs font-semibold">
                          {step.number.toString().padStart(2, "0")}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 flex-1">
                        <Icon className="w-4 h-4 text-primary/60 flex-shrink-0" />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {step.title}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Connector line - only between phases on desktop */}
              {phaseIndex < phases.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Final Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-10 md:mt-14"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary to-teal-light rounded-full shadow-lg teal-glow">
            <CheckCircle2 className="w-5 h-5 text-white" />
            <span className="text-white font-bold uppercase tracking-wide">
              Tutto Chiaro
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
