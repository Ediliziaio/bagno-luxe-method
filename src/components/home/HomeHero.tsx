import { motion } from "framer-motion";
import { ChevronDown, Shield, CheckCircle, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustBadges = [
  { icon: Shield, label: "Garanzia 10 Anni" },
  { icon: CheckCircle, label: "Posa Certificata" },
  { icon: Award, label: "Bonus 50%" },
  { icon: Clock, label: "Made in Italy" },
];

export const HomeHero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contatti");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToNext = () => {
    const element = document.querySelector("#chi-siamo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-accent pt-20 md:pt-32">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)`
        }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Urgency badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full border border-white/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Bonus 50% — Ancora per poco
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
        >
          Finestre nuove in 90 giorni{" "}
          <span className="relative">
            <span className="block sm:inline">o ti rimborsiamo €200 a settimana</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -bottom-2 left-0 right-0 h-1 bg-white/30 origin-left hidden sm:block"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8"
        >
          Serramenti in PVC con <strong>garanzia 10 anni sulla posa</strong>.
          <br className="hidden sm:block" />
          Sopralluogo gratuito in 48 ore. Senza impegno.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <Button
            size="xl"
            className="bg-white text-primary hover:bg-white/90 font-bold shadow-lg"
            onClick={scrollToContact}
          >
            Prenota Sopralluogo Gratuito
          </Button>
          <Button
            variant="outline"
            size="xl"
            className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
            onClick={() => {
              const element = document.querySelector("#prodotti");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Vedi i Prodotti
          </Button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-6"
        >
          {trustBadges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-white/20"
            >
              <badge.icon className="w-4 h-4 text-white" />
              <span className="text-xs sm:text-sm font-medium text-white">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors cursor-pointer"
        aria-label="Scorri verso il basso"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  );
};
