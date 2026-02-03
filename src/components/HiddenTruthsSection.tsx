import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { AlertTriangle, ChevronDown, ChevronUp, Euro, Wrench, Clock, Shield } from "lucide-react";

const hiddenTruths = [
  {
    id: 1,
    icon: Euro,
    title: "Prezzi troppo bassi?",
    subtitle: "Ecco cosa sta succedendo davvero.",
    content: `Negli ultimi anni abbiamo visto un fenomeno preoccupante nel nostro settore.

Aziende che fanno preventivi bassissimi. Prezzi che sembrano impossibili.

**Come fanno?**

Semplice: usano i tuoi soldi per pagare la merce di altri clienti.

Funziona così:
• Prendono il tuo acconto
• Lo usano per pagare fornitori di lavori precedenti
• Intanto cercano nuovi clienti per finanziare il tuo lavoro
• E il ciclo continua... finché non si spezza

**Cosa succede a te?**
• Tempistiche che slittano di settimane, poi mesi
• Telefonate senza risposta
• Cantiere fermo a metà
• Finestre smontate, casa aperta
• E alla fine: azienda sparita, soldi persi`,
  },
  {
    id: 2,
    icon: Wrench,
    title: '"Tanto la posa è compresa"',
    subtitle: "La frase più pericolosa di tutta la trattativa.",
    content: `Quando il prezzo è molto basso, qualcuno deve pagare il conto. E quasi sempre quel qualcuno è la qualità dell'installazione.

**In pratica significa:**
• Squadre messe insieme all'ultimo
• Personale senza certificazione
• Nessuna formazione specifica
• Nessuna responsabilità reale

Chi entra in casa tua potrebbe non essere un posatore qualificato.

E se domani arriva un controllo? Se c'è un incidente? Se qualcosa va storto?

**I nostri posatori hanno il patentino. Sono certificati. In caso di controllo, tutto è in regola.**

Puoi dire lo stesso di chi ti ha fatto l'altro preventivo?`,
  },
  {
    id: 3,
    icon: Euro,
    title: '"Risparmio il 30% oggi"',
    subtitle: "Il 30% risparmiato oggi può costarti il 100% domani.",
    content: `**Esempio concreto:**
| Preventivo finestra standard | €10.000 |
| Preventivo DOMUS I Profili | €13.000 |
| "Risparmio" immediato | -€3.000 |

Sembra una vittoria. Ma guarda cosa succede dopo.

**COSTI NASCOSTI NEI PROSSIMI 10 ANNI:**
• Bollette extra (dispersione termica): +€3.000 — €6.000
• Manutenzioni e regolazioni: +€2.000 — €4.000
• Danni da condensa e muffa: +€1.500 — €3.000
• Perdita valore immobile: -5% / -10%
• Se devi rifare tutto: +€13.000 (spesa doppia)

**Totale reale del "risparmio": da +€6.500 a +€13.000 di costi aggiuntivi.**

Senza contare il disagio quotidiano: il freddo che non capisci da dove arriva, le finestre che non chiudono più bene, i muri che si macchiano.`,
  },
  {
    id: 4,
    icon: Clock,
    title: '"Montiamo sopra il vecchio telaio"',
    subtitle: "La scorciatoia che paghi per anni.",
    content: `**Perché lo fanno?** Perché è più veloce. Costa meno a loro. E tu non te ne accorgi subito.

**Ma cosa succede davvero:**
• Freddo e caldo passano dai lati (ponte termico non corretto)
• Condensa perimetrale ogni mattina
• Muffa nascosta che cresce dietro il telaio
• Perdita di luce (il nuovo telaio si somma al vecchio)
• Impossibile correggere senza rifare tutto

**I Profili rimuove SEMPRE il vecchio telaio.**
Non ci sono eccezioni. Non ci sono scorciatoie.`,
  },
  {
    id: 5,
    icon: Shield,
    title: '"La garanzia? 2 anni, come da legge"',
    subtitle: "La garanzia minima per un investimento che dovrebbe durare 30 anni.",
    content: `La garanzia minima di legge è **24 mesi**.

Per un investimento di migliaia di euro.
Per qualcosa che dovrebbe durare 30 anni.
Per l'elemento che incide di più sul comfort della tua casa.

**24 mesi.**

Perché le altre aziende non offrono di più?
Perché non possono permetterselo. Perché sanno che i problemi arrivano dopo.

**Noi garantiamo:**
• Prodotto a **VITA**
• Posa per **10 ANNI**
• Soddisfatto o rimborsato **30 GIORNI**

Perché possiamo. Perché sappiamo come sono fatte le nostre finestre. E sappiamo come le installiamo.`,
  },
];

const TruthCard = ({ truth, index, isInView }: { truth: typeof hiddenTruths[0]; index: number; isInView: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = truth.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="group"
    >
      <div className={`glass-card overflow-hidden border-l-4 border-l-amber-500 ${isExpanded ? 'ring-1 ring-amber-500/50' : ''}`}>
        {/* Header */}
        <div
          className="p-5 md:p-6 cursor-pointer hover:bg-white/5 transition-colors"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
              <Icon className="w-6 h-6 text-amber-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">{truth.title}</h3>
              <p className="text-amber-400/80 text-sm">{truth.subtitle}</p>
            </div>
            <button className="text-muted-foreground hover:text-amber-400 transition-colors p-2 flex-shrink-0">
              {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Expandable content */}
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
            <div className="border-t border-white/10 pt-5">
              <div className="text-muted-foreground text-sm md:text-base leading-relaxed whitespace-pre-line">
                {truth.content.split('\n').map((line, idx) => {
                  if (line.startsWith('**') && line.endsWith('**')) {
                    return <p key={idx} className="font-bold text-foreground mt-4 mb-2">{line.replace(/\*\*/g, '')}</p>;
                  }
                  if (line.startsWith('•')) {
                    return <p key={idx} className="ml-4">{line}</p>;
                  }
                  if (line.startsWith('|')) {
                    return <p key={idx} className="font-mono text-sm bg-white/5 px-2 py-1 rounded my-1">{line}</p>;
                  }
                  return <p key={idx} className={line === '' ? 'h-2' : ''}>{line}</p>;
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const HiddenTruthsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding section-dark relative overflow-hidden">
      {/* Navy/dark overlay pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(220,30%,10%)] to-background" />
      
      {/* Warning glow */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[200px]"
        animate={isInView ? { scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] } : {}}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with warning badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 px-4 py-2 rounded-full mb-6">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Attenzione</span>
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Le verità scomode che{" "}
            <span className="text-amber-400">nessun venditore ti dirà</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Quello che scopri solo quando è troppo tardi.
          </p>
        </motion.div>

        {/* Truth cards */}
        <div className="max-w-3xl mx-auto space-y-4">
          {hiddenTruths.map((truth, index) => (
            <TruthCard key={truth.id} truth={truth} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};
