import { motion } from "framer-motion";
import { Shield, Layers, Ruler, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Shield,
    title: "Anima in Acciaio 2mm",
    description: "Il doppio dello standard di mercato. Profilo chiuso, non aperto. Stabilità garantita per 30 anni senza deformazioni.",
  },
  {
    icon: Layers,
    title: "3 Guarnizioni",
    description: "Tripla barriera contro spifferi, acqua e rumore. Mentre altri usano 2 guarnizioni, noi ne mettiamo 3.",
  },
  {
    icon: Ruler,
    title: "Profilo 76mm",
    description: "L'equilibrio perfetto tra isolamento termico e dimensioni. Né troppo sottile, né troppo ingombrante.",
  },
];

export const HomeSystem = () => {
  return (
    <section className="section-dark py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-sm font-medium uppercase tracking-[0.2em] text-primary mb-4">
              Il Cuore del Prodotto
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sistema DOMUS:{" "}
              <span className="text-primary">costruito per durare 30 anni</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Non tutti i serramenti in PVC sono uguali. Il Sistema DOMUS è progettato 
              con specifiche tecniche superiori: più acciaio, più guarnizioni, più isolamento. 
              È la differenza tra un infisso che dura e uno che delude.
            </p>

            <Button
              variant="teal"
              size="lg"
              className="group"
              onClick={() => {
                window.location.href = "/filippo#domus";
              }}
            >
              Scopri i Dettagli Tecnici
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Right: Feature cards */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 flex items-start gap-5"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
