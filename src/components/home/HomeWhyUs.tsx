import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const marqueeItems = [
  "isolamento termico",
  "risparmio energetico",
  "comfort acustico",
  "design italiano",
  "garanzia 10 anni",
  "posa certificata",
];

export const HomeWhyUs = () => {
  return (
    <section id="chi-siamo" className="relative overflow-hidden">
      {/* Main content */}
      <div className="section-accent py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium uppercase tracking-[0.2em] text-white/70 mb-4"
          >
            Perché sceglierci
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
          >
            I Profili: la qualità che fa la differenza
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Da oltre 20 anni installiamo serramenti in PVC di alta qualità in tutta la Lombardia. 
            Il nostro sistema integrato garantisce isolamento termico superiore, risparmio in bolletta 
            e comfort acustico certificato. Ogni progetto è seguito da esperti qualificati, 
            dalla consulenza iniziale alla posa certificata.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold"
              onClick={() => {
                const element = document.querySelector("#contatti");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Conosci I Profili
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="bg-background py-6 overflow-hidden border-y border-border/30">
        <div className="marquee-container">
          <div className="marquee-content">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={index} className="flex items-center gap-4 mx-8">
                <span className="text-sm md:text-base font-medium uppercase tracking-widest text-foreground/80">
                  {item}
                </span>
                <span className="w-2 h-2 bg-primary rounded-full" />
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
        }
        .marquee-content {
          display: flex;
          animation: marquee 30s linear infinite;
          width: max-content;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
};
