import { motion } from "framer-motion";
import { ArrowRight, Home, Thermometer, Volume2, Euro } from "lucide-react";
import { Button } from "@/components/ui/button";
import serramentoPvcBianco from "@/assets/serramenti-pvc-bianco.jpg";

const benefits = [
  { icon: Thermometer, label: "Isolamento termico superiore" },
  { icon: Volume2, label: "Comfort acustico certificato" },
  { icon: Euro, label: "Risparmio in bolletta" },
  { icon: Home, label: "Valorizza il tuo immobile" },
];

export const HomeServices = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contatti");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="servizi" className="section-dark py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden aspect-[4/3]"
          >
            <img
              src={serramentoPvcBianco}
              alt="Serramenti per la tua casa"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Overlay badge */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
                  Servizio completo per
                </p>
                <p className="text-2xl font-bold text-primary">
                  Casa Tua
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-sm font-medium uppercase tracking-[0.2em] text-primary mb-4">
              Serramenti per Privati
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Finestre, porte-finestre e portoncini{" "}
              <span className="text-primary">per la tua casa</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Dalla villetta all'appartamento, progettiamo e installiamo serramenti 
              su misura per ogni esigenza. Migliora il comfort abitativo, 
              riduci le bollette e aumenta il valore del tuo immobile.
            </p>

            {/* Benefits grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-foreground/90"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{benefit.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Feature tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["Sopralluogo gratuito", "Detrazione 50%", "Garanzia 10 anni", "Finanziamento"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs uppercase tracking-wider text-primary bg-primary/10 px-3 py-1.5 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Button
              variant="teal"
              size="lg"
              className="group"
              onClick={scrollToContact}
            >
              Richiedi Sopralluogo Gratuito
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
