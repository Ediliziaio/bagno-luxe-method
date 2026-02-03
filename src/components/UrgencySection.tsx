import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingDown, Home, Calendar, Clock, Users } from "lucide-react";

const urgencyPoints = [
  {
    icon: TrendingDown,
    title: "Bollette più alte ogni mese",
    description: "Ogni mese che passa, le tue vecchie finestre ti costano soldi in dispersione termica.",
  },
  {
    icon: Home,
    title: "Valore immobile che scende",
    description: "Case con classe energetica bassa perdono valore sul mercato ogni anno.",
  },
  {
    icon: Calendar,
    title: "Costi che aumentano",
    description: "I costi di materiali e manodopera aumentano ogni anno. Prima agisci, meno spendi.",
  },
  {
    icon: Clock,
    title: "Scadenze Direttiva Case Green",
    description: "L'UE richiede miglioramenti energetici obbligatori entro il 2030. Non aspettare l'ultimo momento.",
  },
  {
    icon: Users,
    title: "Liste d'attesa",
    description: "Le aziende serie hanno liste d'attesa. Chi ti dice 'iniziamo domani' probabilmente ha un problema.",
  },
];

export const UrgencySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(15, 80%, 50%) 0%, hsl(25, 90%, 45%) 100%)' }}>
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-5" />
      <motion.div 
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[200px]"
        animate={isInView ? { scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] } : {}}
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
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Non è una questione di sconto.{" "}
            <span className="opacity-90">È una questione di qualità.</span>
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Ecco perché aspettare ti costa più di quanto pensi.
          </p>
        </motion.div>

        {/* Intro text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <p className="text-white/90 text-lg leading-relaxed">
            Non ti diremo "offerta valida solo oggi". Non ti diremo "ultimi pezzi disponibili".
            <br />
            <strong className="text-white">Ti diciamo la verità:</strong>
          </p>
        </motion.div>

        {/* Urgency points */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {urgencyPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white/15 backdrop-blur-sm p-6 rounded-2xl border border-white/20 h-full hover:bg-white/20 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{point.title}</h3>
                  <p className="text-white/80 text-sm">{point.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Final message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center">
            <p className="text-white text-lg md:text-xl leading-relaxed mb-4">
              <strong>I Profili lavora su prenotazione.</strong> Pianifichiamo ogni cantiere con anticipo.
              Garantiamo qualità, non velocità a tutti i costi.
            </p>
            <p className="text-white/90">
              Se aspetti troppo: potresti non trovare posto prima dell'inverno, i prezzi aumenteranno,
              e passerai un altro inverno con freddo, rumore e bollette alte.
            </p>
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-white text-xl font-bold">
                La domanda non è "se" cambiare le finestre.{" "}
                <span className="text-yellow-200">È "con chi" farlo.</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
