import { motion } from "framer-motion";
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
  CheckCircle2 
} from "lucide-react";

interface Step {
  number: number;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Phase {
  name: string;
  color: string;
  steps: Step[];
}

const phases: Phase[] = [
  {
    name: "CONSULENZA",
    color: "from-primary/80 to-primary",
    steps: [
      { number: 1, title: "Chiamata conoscitiva", icon: Phone },
      { number: 2, title: "Primo appuntamento e consulenza", icon: Users },
      { number: 3, title: "Comprensione delle esigenze", icon: Search },
    ],
  },
  {
    name: "PROPOSTA",
    color: "from-primary to-teal-light",
    steps: [
      { number: 4, title: "Ricerca del prodotto adatto", icon: Search },
      { number: 5, title: "Proposta della soluzione", icon: FileText },
      { number: 6, title: "Formulazione dell'offerta personalizzata", icon: FileText },
      { number: 7, title: "Accettazione offerta (firma contratto)", icon: FileCheck },
    ],
  },
  {
    name: "PRODUZIONE",
    color: "from-teal-light to-primary",
    steps: [
      { number: 8, title: "Presa misure tecnica per produzione", icon: Ruler },
      { number: 9, title: "Produzione serramenti", icon: Factory },
      { number: 10, title: "Consegna presso nostro magazzino", icon: Truck },
      { number: 11, title: "Chiamata per fissare la data di montaggio", icon: Calendar },
    ],
  },
  {
    name: "MONTAGGIO",
    color: "from-primary to-primary/80",
    steps: [
      { number: 12, title: "Preparazione area di lavoro", icon: Wrench },
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
      staggerChildren: 0.1,
    },
  },
};

const phaseVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export function ServiceOverviewSection() {
  return (
    <section className="section-dark section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
            Il Tuo Percorso
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Panoramica del Servizio
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dalla prima chiamata alla pratica ENEA: ogni passaggio è curato nei minimi dettagli
          </p>
        </motion.div>

        {/* Timeline Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Central Line - visible on desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px">
            <div className="h-full bg-gradient-to-b from-primary/50 via-primary to-primary/50" />
          </div>

          {/* Phases */}
          <div className="space-y-12 lg:space-y-16">
            {phases.map((phase, phaseIndex) => (
              <motion.div
                key={phase.name}
                variants={phaseVariants}
                className={`relative ${phaseIndex % 2 === 0 ? "lg:pr-[52%]" : "lg:pl-[52%]"}`}
              >
                {/* Phase Card */}
                <div className="glass-card p-6 lg:p-8 relative">
                  {/* Phase connector dot - desktop */}
                  <div 
                    className={`hidden lg:flex absolute top-8 ${
                      phaseIndex % 2 === 0 ? "-right-[calc(2%+16px)]" : "-left-[calc(2%+16px)]"
                    } w-8 h-8 bg-gradient-to-br ${phase.color} rounded-full items-center justify-center shadow-lg teal-glow`}
                  >
                    <span className="text-white text-xs font-bold">{phaseIndex + 1}</span>
                  </div>

                  {/* Phase Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-10 h-10 lg:hidden bg-gradient-to-br ${phase.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <span className="text-white text-sm font-bold">{phaseIndex + 1}</span>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-primary">
                      FASE {phaseIndex + 1}: {phase.name}
                    </h3>
                  </div>

                  {/* Steps */}
                  <div className="space-y-4">
                    {phase.steps.map((step, stepIndex) => {
                      const Icon = step.icon;
                      return (
                        <motion.div
                          key={step.number}
                          variants={stepVariants}
                          className="flex items-start gap-4 group"
                        >
                          {/* Step Number Circle */}
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted/50 border border-primary/30 flex items-center justify-center group-hover:border-primary/60 group-hover:bg-primary/10 transition-all duration-300">
                            <span className="text-primary text-sm font-semibold">
                              {step.number.toString().padStart(2, "0")}
                            </span>
                          </div>

                          {/* Step Content */}
                          <div className="flex items-center gap-3 flex-1 py-2">
                            <Icon className="w-5 h-5 text-primary/70 flex-shrink-0" />
                            <span className="text-foreground/90 text-sm lg:text-base">
                              {step.title}
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mt-12"
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-teal-light rounded-full shadow-lg teal-glow">
              <CheckCircle2 className="w-6 h-6 text-white" />
              <span className="text-white font-bold text-lg uppercase tracking-wide">
                Tutto Chiaro
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
