import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const marqueeItems = [
  "isolamento termico",
  "risparmio energetico",
  "comfort acustico",
  "design italiano",
  "garanzia 10 anni",
  "posa certificata",
  "bonus 50%",
  "tempistiche garantite",
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
            Stanco di preventivi confusi{" "}
            <span className="block sm:inline">e tempistiche infinite?</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/80 mb-6 max-w-3xl mx-auto space-y-4"
          >
            <p>
              La maggior parte delle aziende ti promette "consegna rapida" e poi aspetti mesi. 
              Ti dicono "garanzia inclusa" ma se chiami dopo 3 anni non risponde nessuno.
            </p>
            <p className="text-white font-semibold text-xl">
              Con I Profili è diverso:
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-left inline-block mb-8 space-y-3"
          >
            {[
              "Tempistiche scritte nel contratto (90 giorni o rimborso)",
              "Posatori nostri dipendenti, non subappaltatori",
              "Garanzia 10 anni sulla posa, non sui convenevoli",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-white/90">
                <span className="text-white font-bold text-xl leading-none mt-0.5">✓</span>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-[#1D1D1C] text-white hover:bg-[#1D1D1C]/90 font-bold group shadow-lg border-2 border-white/20"
              onClick={() => {
                const element = document.querySelector("#garanzie");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Vedi le Nostre Garanzie
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
          animation: marquee 40s linear infinite;
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
