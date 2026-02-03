import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { X, Check } from "lucide-react";

const comparisonData = [
  {
    aspect: "Preventivo",
    others: "Generico, \"a occhio\", poche righe",
    iprofili: "Tecnico, dettagliato, ogni voce spiegata",
  },
  {
    aspect: "Chi installa",
    others: "Personale a giornata, non verificabile",
    iprofili: "Posatori certificati con patentino",
  },
  {
    aspect: "Documenti",
    others: "\"Ce li abbiamo, tranquillo\"",
    iprofili: "Tutto in regola, verificabile in caso di controllo",
  },
  {
    aspect: "Vecchio telaio",
    others: "Spesso lasciato (risparmiano tempo)",
    iprofili: "Sempre rimosso completamente",
  },
  {
    aspect: "Ponti termici",
    others: "Probabili, nessuno li controlla",
    iprofili: "Eliminati e documentati",
  },
  {
    aspect: "Garanzia prodotto",
    others: "24 mesi (obbligo di legge)",
    iprofili: "A VITA",
    highlight: true,
  },
  {
    aspect: "Garanzia posa",
    others: "Nessuna o \"vediamo\"",
    iprofili: "10 anni scritta nel contratto",
    highlight: true,
  },
  {
    aspect: "Tempistiche",
    others: "\"Quando riusciamo\"",
    iprofili: "90 giorni garantiti o rimborso",
  },
  {
    aspect: "Post-vendita",
    others: "Numero che non risponde",
    iprofili: "Assistenza garantita per sempre",
  },
];

export const DirectComparisonSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding section-dark relative overflow-hidden">
      {/* Decorative glow */}
      <motion.div 
        className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[150px]"
        animate={isInView ? { scale: [1, 1.1, 1], opacity: [0.15, 0.2, 0.15] } : {}}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            La differenza che{" "}
            <span className="text-primary text-glow">nessuno ti mostra</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Metti i preventivi uno accanto all'altro. Poi guarda cosa c'è scritto (e cosa no).
          </p>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto overflow-x-auto"
        >
          <div className="min-w-[600px]">
            {/* Table header */}
            <div className="grid grid-cols-3 gap-4 mb-2">
              <div className="p-4">
                <span className="text-muted-foreground font-semibold text-sm uppercase tracking-wider">Aspetto</span>
              </div>
              <div className="p-4 bg-destructive/10 rounded-t-xl">
                <span className="text-destructive font-bold text-sm uppercase tracking-wider">❌ Altri serramentisti</span>
              </div>
              <div className="p-4 bg-primary/20 rounded-t-xl">
                <span className="text-primary font-bold text-sm uppercase tracking-wider">✅ I Profili</span>
              </div>
            </div>

            {/* Table rows */}
            <div className="space-y-2">
              {comparisonData.map((row, index) => (
                <motion.div
                  key={row.aspect}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className={`grid grid-cols-3 gap-4 ${row.highlight ? 'bg-primary/5' : ''}`}
                >
                  <div className="p-4 flex items-center">
                    <span className="text-foreground font-semibold">{row.aspect}</span>
                  </div>
                  <div className="p-4 bg-destructive/5 flex items-start gap-2">
                    <X className="w-4 h-4 text-destructive flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground text-sm">{row.others}</span>
                  </div>
                  <div className="p-4 bg-primary/10 flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span className={`text-sm ${row.highlight ? 'text-primary font-bold' : 'text-foreground'}`}>
                      {row.iprofili}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
