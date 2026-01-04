import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Thermometer, Euro, Volume2, Wind, ArrowDown } from "lucide-react";
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
      {/* Background Image with enhanced overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroWindow} 
          alt="Finestre moderne in PVC" 
          className="w-full h-full object-cover scale-105"
          loading="eager"
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
        
        {/* Animated teal glow orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Particle background */}
      <div className="absolute inset-0 particles-bg opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 glass-card px-5 py-2.5 rounded-full text-sm font-medium border-primary/30">
            <motion.span 
              className="w-2.5 h-2.5 bg-primary rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-primary font-semibold">Finestre in PVC ad Alta Efficienza</span>
          </div>
        </motion.div>

        {/* Main headline with stagger */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-balance leading-[1.1] text-foreground"
        >
          Quanto ti sta costando{" "}
          <motion.span 
            className="text-primary text-glow inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            NON cambiare
          </motion.span>{" "}
          le tue finestre?
        </motion.h1>

        {/* Subheadline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-10"
        >
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-3 leading-relaxed">
            Ogni mese che passa, il tuo denaro esce dalla finestra. <span className="text-foreground font-medium">Letteralmente.</span>
          </p>
          <p className="text-base sm:text-lg text-muted-foreground/80">
            Finestre vecchie = bollette alte + freddo + rumore + disagio
          </p>
        </motion.div>

        {/* Pain Points Grid with enhanced hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12 max-w-3xl mx-auto"
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={point.text}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.7 + index * 0.1,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -4,
                transition: { duration: 0.2 }
              }}
              className="flex flex-col items-center gap-3 p-4 sm:p-5 glass-card cursor-default group"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
              >
                <point.icon className="w-6 h-6 sm:w-7 sm:h-7 text-destructive group-hover:text-destructive/80 transition-colors" />
              </motion.div>
              <span className="text-xs sm:text-sm text-foreground/90 text-center font-medium leading-tight">{point.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button with enhanced glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="space-y-5"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              variant="teal" 
              size="xl" 
              onClick={scrollToContact} 
              className="teal-glow animate-pulse-glow text-base sm:text-lg px-8 sm:px-12"
            >
              Richiedi il Preventivo Gratuito
            </Button>
          </motion.div>
          <p className="text-sm text-muted-foreground/80">
            Zero impegno • Sopralluogo gratuito • Tutta la Lombardia
          </p>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs text-muted-foreground/60 uppercase tracking-widest">Scopri di più</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-12 border-2 border-foreground/20 rounded-full flex justify-center p-2"
        >
          <motion.div 
            className="w-1.5 h-3 bg-primary rounded-full"
            animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};