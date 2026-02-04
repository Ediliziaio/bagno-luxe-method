import { motion } from "framer-motion";
import { Infinity, Clock, RefreshCcw, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const guarantees = [
  {
    icon: Infinity,
    title: "Prodotto a Vita",
    description: "Manutenibilità garantita per sempre. Troverai sempre i pezzi di ricambio.",
    highlight: "A VITA",
  },
  {
    icon: Clock,
    title: "Posa 10 Anni",
    description: "Qualsiasi difetto di installazione? Interveniamo gratis per 10 anni.",
    highlight: "10 ANNI",
  },
  {
    icon: RefreshCcw,
    title: "Soddisfatto o Rimborsato",
    description: "Non sei convinto? Hai 30 giorni per ripensarci. Ti rimborsiamo tutto.",
    highlight: "30 GIORNI",
  },
  {
    icon: Calendar,
    title: "Tempistiche Garantite",
    description: "Installazione in 90 giorni o ti rimborsiamo €200 per ogni settimana di ritardo.",
    highlight: "€200/SETT",
  },
];

export const HomeGuarantees = () => {
  return (
    <section className="section-dark py-20 sm:py-28 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-medium uppercase tracking-[0.2em] text-primary mb-4">
            Garanzie Blindate
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Scritte nel contratto.{" "}
            <span className="text-primary">Nessuna scappatoia.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Non promettiamo a voce. Tutto è scritto nero su bianco nel contratto. 
            Se non manteniamo, paghi meno tu.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={guarantee.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 text-center relative overflow-hidden group"
            >
              {/* Highlight badge */}
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                {guarantee.highlight}
              </div>

              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <guarantee.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2">
                {guarantee.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {guarantee.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground group"
            onClick={() => {
              window.location.href = "/filippo#garanzie";
            }}
          >
            Vedi Tutte le Garanzie
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
