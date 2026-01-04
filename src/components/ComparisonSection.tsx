import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const comparisonData = [
  { altri: "Preventivo \"a occhio\" o generico", noi: "Sopralluogo tecnico e preventivo dettagliato" },
  { altri: "Venditori che spariscono dopo la firma", noi: "Un referente unico dall'inizio alla fine" },
  { altri: "Tempi vaghi e sempre in ritardo", noi: "Date certe e rispettate" },
  { altri: "Installazione frettolosa", noi: "Installazione certificata con sigillatura termica" },
  { altri: "Garanzia solo sul prodotto", noi: "Garanzia 10 anni su prodotto e installazione" },
  { altri: "Materiali di bassa qualità nascosti", noi: "Solo PVC classe A certificato" },
  { altri: "Nessun supporto post-vendita", noi: "Assistenza garantita anche dopo anni" },
  { altri: "\"Speriamo funzioni\"", noi: "Risparmio garantito e misurabile" },
];

export const ComparisonSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    document.getElementById("cta-finale")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="confronto"
      className="py-20 md:py-32 section-gradient relative overflow-hidden"
    >
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-1/4 left-0 w-96 h-96 bg-primary/8 rounded-full blur-[120px]"
        animate={isInView ? { x: [0, 15, 0] } : {}}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-primary/6 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 md:mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-5xl lg:text-6xl mb-6 text-foreground">
            <span className="text-primary text-glow">I Profili</span>
            <span className="text-foreground"> vs Altri serramentisti</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Non tutte le finestre sono uguali. Non tutti gli installatori nemmeno.
            <br /><span className="text-foreground font-medium">E questa tabella lo rende evidente.</span>
          </p>
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-block px-6 py-2.5 border border-primary/40 text-primary text-sm tracking-widest uppercase rounded-full bg-primary/10 font-medium"
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
            <div className="glass-card px-6 py-4 text-center">
              <span className="text-muted-foreground font-semibold tracking-wider uppercase text-sm">
                Altri
              </span>
            </div>
            <div className="glass-card px-6 py-4 text-center border-l-4 border-primary teal-glow-subtle">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                I Profili
              </span>
            </div>
          </motion.div>

          {/* Table Rows */}
          {comparisonData.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.06 }}
              whileHover={{ scale: 1.01 }}
              className="grid grid-cols-2 gap-4 mb-2 group"
            >
              {/* Altri column */}
              <div className="glass-card px-6 py-4 flex items-center gap-4 transition-opacity duration-300 group-hover:opacity-60">
                <X className="w-5 h-5 text-destructive flex-shrink-0" />
                <span className="text-muted-foreground text-sm sm:text-base">{row.altri}</span>
              </div>
              
              {/* I Profili column */}
              <div className="glass-card px-6 py-4 flex items-center gap-4 border-l-4 border-primary transition-all duration-300 group-hover:bg-card/90">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground text-sm sm:text-base">{row.noi}</span>
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
              transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
              className="glass-card overflow-hidden"
            >
              {/* Altri */}
              <div className="px-4 py-3 bg-card/30 flex items-start gap-3 border-b border-border/20">
                <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-muted-foreground/60 uppercase tracking-wider block mb-1">Altri</span>
                  <span className="text-muted-foreground text-sm">{row.altri}</span>
                </div>
              </div>
              {/* I Profili */}
              <div className="px-4 py-3 flex items-start gap-3 border-l-4 border-primary">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-primary/80 uppercase tracking-wider block mb-1">I Profili</span>
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
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-xl text-muted-foreground mb-4 italic leading-relaxed">
            La differenza non è quanto spendi oggi,
            <br />ma quanto risparmi ogni mese per i prossimi 30 anni.
          </p>
          <p className="text-foreground text-lg md:text-xl">
            Con <span className="text-primary font-semibold">I Profili</span> non compri finestre.
            <br />Compri <span className="text-primary">risparmio</span>, <span className="text-primary">comfort</span> e <span className="text-primary">tranquillità</span>.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <p className="text-muted-foreground text-lg mb-6">
            Vuoi sapere quanto puoi risparmiare?
          </p>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button variant="teal" size="lg" onClick={scrollToContact} className="teal-glow">
              Richiedi il Sopralluogo Gratuito
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};