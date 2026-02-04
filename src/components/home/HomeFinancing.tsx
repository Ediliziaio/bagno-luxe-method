import { motion } from "framer-motion";
import { Percent, CreditCard, FileCheck, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Percent,
    title: "Detrazione 50%",
    description: "Recupera la metà della spesa in 10 rate annuali. Nel 2025 scende al 36%!",
  },
  {
    icon: CreditCard,
    title: "Fino a 120 Rate",
    description: "Finanziamenti personalizzati a tasso agevolato. Paga comodamente.",
  },
  {
    icon: FileCheck,
    title: "Pratiche ENEA Incluse",
    description: "Gestiamo noi tutta la documentazione per le detrazioni fiscali.",
  },
  {
    icon: Clock,
    title: "Sconto in Fattura",
    description: "Dove disponibile, applichi subito lo sconto senza attendere 10 anni.",
  },
];

export const HomeFinancing = () => {
  return (
    <section className="section-accent-gradient py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full border border-white/30 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Urgente: Bonus in scadenza
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Bonus 50%:{" "}
              <span className="block">ancora per poco</span>
            </h2>
            <p className="text-white/90 text-lg mb-8">
              <strong>Nel 2025 la detrazione scende al 36%.</strong> Significa che 
              su €10.000 di spesa perdi €1.400 di risparmio. Non rimandare: 
              approfitta ora del 50% prima che sia troppo tardi.
            </p>

            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold group"
              onClick={() => {
                const element = document.querySelector("#contatti");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Calcola Quanto Risparmi
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Right: Benefits cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/15 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {benefit.title}
                </h3>
                <p className="text-white/80 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
