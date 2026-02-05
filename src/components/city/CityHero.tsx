import { motion } from "framer-motion";
import { MapPin, Shield, CheckCircle, Award, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { City } from "@/data/cities";

// Import immagine hero
import serramentoPvcGrigio from "@/assets/serramenti-pvc-grigio.jpg";

interface CityHeroProps {
  city: City;
}

export const CityHero = ({ city }: CityHeroProps) => {
  const scrollToContact = () => {
    const element = document.querySelector("#contatti-citta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={serramentoPvcGrigio}
          alt={`Serramenti PVC ${city.name} - Infissi alta efficienza energetica`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1D1D1C]/70 via-[#1D1D1C]/85 to-[#1D1D1C]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center pt-28 md:pt-36">
        {/* Badge Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30 mb-6"
        >
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-white">
            {city.provinceName} • Lombardia
          </span>
        </motion.div>

        {/* H1 - SEO Keyword */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
        >
          Serramenti {city.name}
          <span className="block text-2xl sm:text-3xl md:text-4xl text-primary mt-2">
            Infissi PVC Alta Efficienza Energetica
          </span>
        </motion.h1>

        {/* Subtitle with keywords */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8"
        >
          Cerchi <strong className="text-white">infissi a {city.name}</strong>? 
          Siamo specialisti in <strong className="text-white">finestre in PVC</strong> ad alta efficienza energetica. 
          Posa certificata, garanzia 10 anni, preventivo gratuito in tutta la provincia di {city.provinceName}.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mb-10"
        >
          <div className="text-center">
            <span className="block text-3xl md:text-4xl font-bold text-primary">2.500+</span>
            <span className="text-sm text-white/70">Clienti Soddisfatti</span>
          </div>
          <div className="w-px bg-white/20 hidden sm:block" />
          <div className="text-center">
            <span className="block text-3xl md:text-4xl font-bold text-primary">15+</span>
            <span className="text-sm text-white/70">Anni Esperienza</span>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full px-8 h-14"
            onClick={scrollToContact}
          >
            Preventivo Gratuito a {city.name}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/50 text-white hover:bg-white/10 hover:border-white font-semibold rounded-full px-8 h-14"
            asChild
          >
            <a href="tel:+393501780908">
              <Phone className="w-5 h-5 mr-2" />
              +39 350 178 0908
            </a>
          </Button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {[
            { icon: Shield, label: "Garanzia 10 Anni" },
            { icon: CheckCircle, label: "Posa Certificata" },
            { icon: Award, label: "Bonus 50%" },
          ].map((badge, index) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-full border border-white/20"
            >
              <badge.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-white">{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
