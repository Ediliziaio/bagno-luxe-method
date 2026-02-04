import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import homeWindows from "@/assets/home-windows.jpg";
import familyComfort from "@/assets/family-comfort.jpg";

const services = [
  {
    label: "SERVIZI PER",
    title: "PRIVATI",
    description: "Finestre, porte-finestre e portoncini per la tua casa. Migliora il comfort e riduci le bollette.",
    image: homeWindows,
    features: ["Sopralluogo gratuito", "Detrazione 50%", "Garanzia 10 anni"],
  },
  {
    label: "SERVIZI PER",
    title: "AZIENDE",
    description: "Serramenti per uffici, showroom e stabilimenti. Soluzioni su misura per ogni esigenza.",
    image: familyComfort,
    features: ["Preventivi dedicati", "Tempistiche garantite", "Assistenza prioritaria"],
  },
];

export const HomeServices = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contatti");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="servizi" className="section-dark py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-medium uppercase tracking-[0.2em] text-primary mb-4">
            I Nostri Servizi
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Soluzioni per ogni esigenza
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-3xl aspect-[4/5] md:aspect-[3/4]"
            >
              {/* Background image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

              {/* Content */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-2">
                  {service.label}
                </span>
                <h3 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-white/80 mb-4 max-w-sm">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs uppercase tracking-wider text-white/70 bg-white/10 px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-fit border-white/30 text-white hover:bg-white hover:text-primary group/btn"
                  onClick={scrollToContact}
                >
                  Scegli I Profili
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
