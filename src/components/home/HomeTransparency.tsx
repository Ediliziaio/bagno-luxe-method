import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FileText,
  Euro,
  Calendar,
  ShieldCheck,
  AlertCircle,
  Award,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const transparencyPoints = [
  {
    icon: FileText,
    title: "Preventivo dettagliato",
    description: "Ogni voce spiegata, nessuna sorpresa",
  },
  {
    icon: Euro,
    title: "Nessun costo nascosto",
    description: "Il prezzo finale è quello che paghi",
  },
  {
    icon: Calendar,
    title: "Tempistiche nel contratto",
    description: "Data di consegna scritta e garantita",
  },
  {
    icon: AlertCircle,
    title: "Penali per ritardi",
    description: "Se ritardiamo, ti rimborsiamo",
  },
  {
    icon: ShieldCheck,
    title: "Garanzie firmate",
    description: "10 anni sulla posa, per iscritto",
  },
  {
    icon: Award,
    title: "Materiali certificati",
    description: "Qualità garantita e tracciabile",
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const HomeTransparency = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="section-padding section-dark relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
              Trasparenza Totale
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Tutto <span className="text-primary">nero su bianco</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Siamo gli unici che mettono ogni dettaglio per iscritto. Senza brutte sorprese.
            </p>
          </motion.div>

          {/* Points Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          >
            {transparencyPoints.map((point) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  variants={itemVariants}
                  className="glass-card p-6 group hover:border-primary/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {point.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Badge + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="text-foreground font-semibold">
                Zero sorprese, zero problemi
              </span>
            </div>
            <div>
              <Button
                variant="teal"
                size="lg"
                className="rounded-full px-8"
                onClick={() => {
                  const garanzie = document.getElementById("garanzie");
                  garanzie?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Scopri le Nostre Garanzie
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
