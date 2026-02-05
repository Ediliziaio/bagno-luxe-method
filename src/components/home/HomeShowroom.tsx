import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Showroom images
import showroomEsterno from "@/assets/showroom/showroom-esterno.jpg";
import showroomFinestre from "@/assets/showroom/showroom-finestre.jpg";
import showroomInterno from "@/assets/showroom/showroom-interno.jpg";

const images = [
  { 
    src: showroomEsterno, 
    alt: "Esterno showroom I Profili a Busto Arsizio",
    label: "Esterno Showroom"
  },
  { 
    src: showroomFinestre, 
    alt: "Interno showroom con esposizione finestre",
    label: "Esposizione Finestre"
  },
  { 
    src: showroomInterno, 
    alt: "Interno showroom con logo e campioni prodotti",
    label: "Campioni Prodotti"
  },
];

export const HomeShowroom = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold uppercase tracking-widest rounded-full mb-4">
            <MapPin className="w-4 h-4" />
            Showroom
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vieni a Trovarci nello Showroom
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tocca con mano la qualità dei nostri serramenti. 
            Ti aspettiamo a <strong className="text-foreground">Busto Arsizio</strong> per mostrarti tutte le finiture e i modelli disponibili.
          </p>
        </motion.div>

        {/* Images Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {images.map((image, index) => (
            <motion.div
              key={image.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary/90 text-primary-foreground px-3 py-1.5 rounded-full text-sm font-medium">
                    {image.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Address & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 bg-card border border-border/50 rounded-2xl p-6 md:p-8"
        >
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">Showroom I Profili</span>
            </div>
            <p className="text-muted-foreground">
              Via Bruno Raimondi 5, 21052 Busto Arsizio (VA)
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Aperto: Lun-Ven 9:00-18:00 | Sab su appuntamento
            </p>
          </div>
          
          <Button variant="teal" size="lg" asChild>
            <Link to="/contatti">
              Prenota una Visita
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
