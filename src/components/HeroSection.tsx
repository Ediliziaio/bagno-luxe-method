import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Thermometer, Euro, Volume2, Wind } from "lucide-react";
import heroWindow from "@/assets/hero-window.jpg";

const painPoints = [
  { icon: Thermometer, text: "Freddo in casa d'inverno" },
  { icon: Euro, text: "Bollette sempre più care" },
  { icon: Volume2, text: "Rumore dalla strada" },
  { icon: Wind, text: "Spifferi e condensa" },
];

export const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("cta-finale")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroWindow} 
          alt="Finestre moderne in PVC" 
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(57,43%,10%)/95%] via-[hsl(57,43%,14%)/90%] to-[hsl(57,43%,14%)/85%]" />
        
        {/* Teal glow effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[80px]" />
        </div>
      </div>

      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary">Finestre in PVC ad Alta Efficienza</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight text-foreground">
            Quanto ti sta costando{" "}
            <span className="text-primary text-glow">NON cambiare</span>{" "}
            le tue finestre?
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8"
        >
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4">
            Ogni mese che passa, il tuo denaro esce dalla finestra. Letteralmente.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground">
            Finestre vecchie = bollette alte + freddo + rumore + disagio
          </p>
        </motion.div>

        {/* Pain Points Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto"
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={point.text}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="flex flex-col items-center gap-2 p-4 glass-card rounded-lg hover:border-primary/50 transition-all duration-300"
            >
              <point.icon className="w-6 h-6 text-destructive" />
              <span className="text-sm text-foreground/80 text-center">{point.text}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="space-y-4"
        >
          <Button variant="teal" size="xl" onClick={scrollToContact} className="teal-glow">
            Richiedi il Preventivo Gratuito
          </Button>
          <p className="text-sm text-muted-foreground">
            Zero impegno • Sopralluogo gratuito • Tutta la Lombardia
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center"
        >
          <motion.div className="w-1.5 h-3 bg-primary rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};
