import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const comparisonData = [
  { altri: "Preventivo iniziale \"indicativo\"", noi: "Preventivo chiaro e definito prima di iniziare" },
  { altri: "Più fornitori, nessun responsabile", noi: "Un unico referente dall'inizio alla fine" },
  { altri: "Tempi vaghi e non garantiti", noi: "Tempi certi e pianificati per iscritto" },
  { altri: "Extra e costi imprevisti", noi: "Nessuna sorpresa in corso d'opera" },
  { altri: "Gestione artigianale e improvvisata", noi: "Metodo strutturato e collaudato" },
  { altri: "Lavori che si allungano", noi: "Interventi organizzati e coordinati" },
  { altri: "Materiali scelti in base al prezzo", noi: "Materiali selezionati per durare nel tempo" },
  { altri: "Assistenza frammentata", noi: "Responsabilità totale su tutto il progetto" },
  { altri: "\"Speriamo venga bene\"", noi: "Controllo totale del risultato finale" },
];

export const ComparisonSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="confronto"
      className="py-20 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.03),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl mb-6">
            <span className="text-primary">Architetto del Bagno</span>
            <span className="text-foreground"> vs Tutti gli altri</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Non tutte le ristrutturazioni bagno sono uguali.
            <br />E questa tabella lo rende evidente.
          </p>
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-block px-6 py-2 border border-primary/50 text-primary text-sm tracking-widest uppercase"
          >
            Confronto chiaro e senza filtri
          </motion.span>
        </motion.div>

        {/* Comparison Table - Desktop */}
        <div className="hidden md:block max-w-5xl mx-auto mb-16">
          {/* Table Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4 mb-4"
          >
            <div className="bg-card/50 px-6 py-4 text-center">
              <span className="text-muted-foreground font-semibold tracking-wider uppercase text-sm">
                Altri
              </span>
            </div>
            <div className="bg-card px-6 py-4 text-center border-l-4 border-primary">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                Architetto del Bagno
              </span>
            </div>
          </motion.div>

          {/* Table Rows */}
          {comparisonData.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.08 }}
              className="grid grid-cols-2 gap-4 mb-2 group"
            >
              {/* Altri column */}
              <div className="bg-card/30 px-6 py-4 flex items-center gap-4 transition-opacity duration-300 group-hover:opacity-50">
                <X className="w-5 h-5 text-destructive flex-shrink-0" />
                <span className="text-muted-foreground">{row.altri}</span>
              </div>
              
              {/* Architetto del Bagno column */}
              <div className="bg-card px-6 py-4 flex items-center gap-4 border-l-4 border-primary transition-all duration-300 group-hover:bg-card/90">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{row.noi}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table - Mobile */}
        <div className="md:hidden space-y-4 mb-12">
          {comparisonData.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.06 }}
              className="bg-card rounded-lg overflow-hidden"
            >
              {/* Altri */}
              <div className="px-4 py-3 bg-card/50 flex items-start gap-3 border-b border-border/20">
                <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-muted-foreground/60 uppercase tracking-wider block mb-1">Altri</span>
                  <span className="text-muted-foreground text-sm">{row.altri}</span>
                </div>
              </div>
              {/* Architetto del Bagno */}
              <div className="px-4 py-3 flex items-start gap-3 border-l-4 border-primary">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-primary/80 uppercase tracking-wider block mb-1">Architetto del Bagno</span>
                  <span className="text-foreground text-sm">{row.noi}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Micro-copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-xl text-muted-foreground mb-4 italic">
            La differenza non è quanto spendi oggi,
            <br />ma quanto ti costa rifare tutto domani.
          </p>
          <p className="text-foreground text-lg md:text-xl">
            Con <span className="text-primary font-semibold">Architetto del Bagno</span> non compri una ristrutturazione.
            <br />Compri <span className="text-primary">tranquillità</span>, <span className="text-primary">controllo</span> e un <span className="text-primary">risultato definitivo</span>.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center"
        >
          <p className="text-muted-foreground text-lg mb-6">
            Vuoi sapere se il tuo progetto rientra nel nostro metodo?
          </p>
          <Button variant="gold" size="lg" className="group">
            <span>Richiedi la Consulenza Gratuita</span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
