import { motion } from "framer-motion";
import { ChevronDown, Shield, CheckCircle, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Immagini per lo slider
import serramentoPvcGrigio from "@/assets/serramenti-pvc-grigio.jpg";
import serramentoScorrevoloNero from "@/assets/serramenti-scorrevole-nero.webp";
import serramentoModernoNero from "@/assets/serramenti-moderni-nero.webp";
import serramentoPvcBianco from "@/assets/serramenti-pvc-bianco.jpg";

const sliderImages = [
  serramentoPvcGrigio,
  serramentoScorrevoloNero,
  serramentoModernoNero,
  serramentoPvcBianco
];

const trustBadges = [
  { icon: Shield, label: "Garanzia 10 Anni" },
  { icon: CheckCircle, label: "Posa Certificata" },
  { icon: Award, label: "Bonus 50%" },
  { icon: Clock, label: "Made in Italy" },
];

export const HomeHero = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

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

  const scrollToProducts = () => {
    const element = document.querySelector("#prodotti");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <div className="overflow-hidden h-full" ref={emblaRef}>
          <div className="flex h-full">
            {sliderImages.map((img, idx) => (
              <div key={idx} className="flex-[0_0_100%] min-w-0 h-full relative">
                <img
                  src={img}
                  alt={`Serramenti PVC alta efficienza - Finestra ${idx + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading={idx === 0 ? "eager" : "lazy"}
                  decoding="async"
                  fetchPriority={idx === 0 ? "high" : "auto"}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Gradient overlay - sfumatura scura verso nero */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1D1D1C]/60 via-[#1D1D1C]/80 to-[#1D1D1C]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 md:pt-32">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
        >
          Serramenti che trasformano{" "}
          <span className="relative">
            <span className="block sm:inline text-primary">la tua casa</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 origin-left hidden sm:block"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10"
        >
          Da oltre 15 anni aiutiamo le famiglie lombarde a vivere meglio:{" "}
          <strong className="text-white">più caldo d'inverno, più fresco d'estate, più silenzio ogni giorno.</strong>
          <br className="hidden sm:block" />
          <span className="text-white/70 mt-2 block">
            Scopri perché oltre 2.500 clienti ci hanno scelto.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full px-8 h-14"
            onClick={scrollToContact}
          >
            Richiedi Consulenza Gratuita
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white/50 text-white hover:bg-white/10 hover:border-white font-semibold rounded-full px-8 h-14"
            onClick={scrollToProducts}
          >
            Scopri i Nostri Lavori
          </Button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          {trustBadges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-full border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300"
            >
              <badge.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-white">{badge.label}</span>
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
