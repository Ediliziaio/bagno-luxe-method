import { motion } from "framer-motion";
import { 
  Shield, 
  ShieldCheck, 
  Wrench, 
  Eye, 
  Clock, 
  Award, 
  CheckCircle2,
  Layers,
  ThermometerSun,
  Volume2,
  Droplets,
  BadgeCheck,
  Gift,
  Sparkles
} from "lucide-react";

interface Guarantee {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  highlight?: boolean;
}

interface TechSpec {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const guarantees: Guarantee[] = [
  { icon: Shield, title: "Garanzia a Vita sugli Infissi", highlight: true },
  { icon: ShieldCheck, title: "Garanzia a Vita sulla Ferramenta", highlight: true },
  { icon: Layers, title: "Garanzia a Vita sul Vetro", highlight: true },
  { icon: Wrench, title: "Garanzia a Vita sul Montaggio", highlight: true },
  { icon: Clock, title: "Assistenza Garantita a Vita", highlight: true },
  { icon: Award, title: "Assicurazione valida 10 anni", highlight: true },
];

const services = [
  "Smontaggio",
  "Montaggio",
  "Smaltimento",
  "Trasporto",
];

const certifications = [
  { icon: BadgeCheck, title: "Montaggio Certificato" },
  { icon: Gift, title: "Montaggio Garantito in 90gg*", subtitle: "oltre i 90gg, i serramenti sono in regalo" },
  { icon: Award, title: "Serramento \"Made in Italy\" certificato CE" },
];

const techSpecs: TechSpec[] = [
  {
    icon: Layers,
    title: "Doppio Vetro Premium",
    description: "K termico medio di 1,1, stratificato, di sicurezza, antinfortunio, con alto isolamento acustico e termico. Più leggeri, resistenti ed isolanti dei tripli vetri standard.",
  },
  {
    icon: Eye,
    title: "Vetro SE.BE.S",
    description: "Selettivo all'esterno, basso emissivo all'interno e leggermente specchiato. Garantisce isolamento termico fino a 2 volte superiore e maggiore privacy.",
  },
  {
    icon: ThermometerSun,
    title: "Canalina Calda",
    description: "In materiale completamente polimerico, aiuta ad aumentare l'isolamento termico.",
  },
  {
    icon: Droplets,
    title: "Tripla Guarnizione Premium",
    description: "Di serie, migliora l'isolamento termico e la tenuta a pioggia e vento.",
  },
  {
    icon: Shield,
    title: "Rinforzo in Acciaio",
    description: "Ultra-resistente di serie per massima stabilità strutturale.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function ZeroPensieriOfferSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32 px-4 sm:px-6">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px]" />
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
          <span className="inline-block px-5 py-2 bg-gradient-to-r from-primary to-teal-light text-white rounded-full text-sm font-bold mb-4 uppercase tracking-wider shadow-lg teal-glow">
            Offerta Zero Pensieri
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Privilegi Esclusivi per{" "}
            <span className="text-primary">Clienti Premium</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tutto incluso, nessuna sorpresa. Il pacchetto completo per la massima tranquillità.
          </p>
        </motion.div>

        {/* Services Included */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card p-6 lg:p-8 mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
              <Wrench className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Servizi Inclusi</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {services.map((service) => (
              <span
                key={service}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
              >
                {service}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Guarantees Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-10"
        >
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            <span className="text-primary">6 Garanzie</span> a Vita
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {guarantees.map((guarantee, index) => {
              const Icon = guarantee.icon;
              return (
                <motion.div
                  key={guarantee.title}
                  variants={itemVariants}
                  className="glass-card p-5 flex items-center gap-4 group hover:border-primary/50 glow-pulse"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-teal-light rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-foreground font-medium text-sm lg:text-base">
                    {guarantee.title}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.title}
                  variants={itemVariants}
                  className="glass-card p-5 text-center"
                >
                  <div className="w-14 h-14 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-3">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="text-foreground font-semibold mb-1">{cert.title}</h4>
                  {cert.subtitle && (
                    <p className="text-muted-foreground text-xs italic">{cert.subtitle}</p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6 lg:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-teal-light rounded-full flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-foreground">
              Specifiche Tecniche Premium
            </h3>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {techSpecs.map((spec) => {
              const Icon = spec.icon;
              return (
                <motion.div
                  key={spec.title}
                  variants={itemVariants}
                  className="flex gap-4 p-4 rounded-xl bg-muted/30 border border-white/5 hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold text-sm mb-1">
                      {spec.title}
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {spec.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Bottom Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-muted/50 rounded-full border border-primary/30">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            <span className="text-foreground/80 text-sm font-medium">
              Tutto incluso nel pacchetto Zero Pensieri
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
