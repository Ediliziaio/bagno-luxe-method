import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { 
  AlertTriangle, 
  Construction, 
  Layers, 
  Square, 
  Droplets, 
  ShieldX,
  Bomb,
  Check,
  X,
  UserCheck,
  FileCheck,
  ClipboardList,
  Trash2,
  Wrench,
  CheckCircle
} from "lucide-react";

const problemCards = [
  {
    icon: Construction,
    title: "CANTIERE LASCIATO A METÀ",
    problems: ["Il lavoro è sottopagato", "La squadra non è interna", "Nessuno si assume la responsabilità"],
    results: ["Finestre smontate", "Casa aperta", "Polvere ovunque", "Lavori fermi per giorni o settimane"],
    footer: "Casa invivibile. Stress totale."
  },
  {
    icon: Layers,
    title: "MONTAGGIO SOPRA IL VECCHIO TELAIO",
    subtitle: "IL \"TRUCCO\" PIÙ USATO PER RISPARMIARE",
    problems: ["Montaggio sopra il vecchio telaio", "Senza rimozione completa", "Senza correzione dei ponti termici"],
    results: ["Freddo e caldo che passano dai lati", "Condensa perimetrale", "Muffa nascosta", "Perdita di luce"],
    footer: "È una scorciatoia che paghi per anni."
  },
  {
    icon: Square,
    title: "FINESTRE FUORI BOLLA",
    subtitle: "ERRORE IRREVERSIBILE",
    problems: ["Una posa fatta male porta a finestre storte", "Chiusura imprecisa", "Ferramenta sotto stress"],
    results: ["Ogni regolazione non risolve", "Peggiora nel tempo"],
    footer: "La finestra non è difettosa. È montata male."
  },
  {
    icon: Droplets,
    title: "SCHIUMA OVUNQUE, TECNICA ZERO",
    problems: ["Schiuma in eccesso", "Silicone a vista", "Nessuna sigillatura tecnica"],
    results: ["Infiltrazioni d'aria", "Rumori", "Degrado precoce"],
    footer: "La schiuma non è isolamento. È solo riempimento."
  },
  {
    icon: ShieldX,
    title: "NESSUNA GARANZIA SULLA POSA",
    problems: ["\"Il posatore non lavora più con noi\"", "\"È passato troppo tempo\"", "\"Non è un problema della finestra\""],
    results: ["Nessuna responsabilità", "Nessun supporto", "Nessuna soluzione"],
    footer: "Rimani solo con il problema."
  }
];

const cheapProblems = [
  "Squadre improvvisate",
  "Subappalti non controllati", 
  "Personale a giornata",
  "Nessuna certificazione",
  "Nessuna responsabilità reale"
];

const domusAdvantages = [
  { icon: UserCheck, text: "Posatore qualificato" },
  { icon: FileCheck, text: "Documenti in regola" },
  { icon: ClipboardList, text: "Procedure precise" },
  { icon: Trash2, text: "Rimozione vecchio telaio" },
  { icon: Wrench, text: "Correzione nodo muro-finestra" },
  { icon: CheckCircle, text: "Verifica risultato finale" }
];

const comparisonData = [
  { aspect: "Squadre", cheap: "Esternalizzate", domus: "Qualificate" },
  { aspect: "Cantieri", cheap: "Rischio stop", domus: "Gestiti" },
  { aspect: "Vecchio telaio", cheap: "Spesso lasciato", domus: "Rimosso" },
  { aspect: "Ponti termici", cheap: "Probabili", domus: "Eliminati" },
  { aspect: "Muffa", cheap: "Alto rischio", domus: "Azzerato" },
  { aspect: "Responsabilità", cheap: "Nessuna", domus: "Totale" }
];

const AnimatedCounter = ({ target, suffix = "%", isInView }: { target: number; suffix?: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span className="text-7xl md:text-9xl font-black text-primary">
      {count}{suffix}
    </span>
  );
};

export const PosaDisasterSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const counterRef = useRef<HTMLDivElement>(null);
  const counterInView = useInView(counterRef, { once: true, amount: 0.5 });

  const scrollToContact = () => {
    const element = document.getElementById("cta-finale");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-destructive rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-destructive rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 bg-destructive/20 text-destructive px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-destructive/30">
            <AlertTriangle className="w-4 h-4" />
            ATTENZIONE CRITICA
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            LA POSA IN OPERA:<br />
            <span className="text-destructive">DOVE NASCONO I PEGGIORI DISASTRI</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Il vero incubo non è comprare una finestra sbagliata.<br />
            <strong className="text-foreground">È far entrare in casa le persone sbagliate per montarla.</strong>
          </p>
          <p className="text-base text-muted-foreground mt-4 max-w-2xl mx-auto">
            Questo è il punto dove saltano fuori i problemi più gravi. Quelli che non puoi prevedere dal preventivo. Quelli che scopri quando è troppo tardi.
          </p>
        </motion.div>

        {/* Dangerous Phrase Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-destructive/10 border-2 border-destructive/40 rounded-2xl p-6 md:p-10 text-center">
            <p className="text-destructive font-bold text-sm mb-4 tracking-wider">
              ❌ LA FRASE PIÙ PERICOLOSA DI TUTTA LA TRATTATIVA
            </p>
            <p className="text-2xl md:text-4xl font-black text-foreground mb-6">
              "TANTO LA POSA È COMPRESA"
            </p>
            <p className="text-muted-foreground mb-6 text-base md:text-lg">
              Quando il prezzo è molto basso, qualcuno deve pagare il conto.<br />
              <strong className="text-foreground">E quasi sempre quel qualcuno è la posa in opera.</strong>
            </p>
            <div className="bg-background/50 rounded-xl p-4 md:p-6">
              <p className="text-sm font-semibold text-muted-foreground mb-4">In pratica significa:</p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {cheapProblems.map((problem, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 text-sm text-destructive"
                  >
                    <X className="w-4 h-4 flex-shrink-0" />
                    <span>{problem}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-primary font-semibold text-sm">
                👉 Chi entra in casa tua non sempre è un posatore qualificato.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Problem Cards Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl md:text-3xl font-bold text-center mb-4"
          >
            COSA PUÒ ANDARE STORTO
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-muted-foreground text-center mb-10"
          >
            (E succede molto più spesso di quanto pensi)
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problemCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group bg-card border border-destructive/20 rounded-xl overflow-hidden hover:border-destructive/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-destructive/10"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                      <card.icon className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm md:text-base">{card.title}</h4>
                      {card.subtitle && (
                        <p className="text-xs text-muted-foreground">{card.subtitle}</p>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-muted-foreground mb-2">Succede quando:</p>
                    <ul className="space-y-1">
                      {card.problems.map((problem, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-destructive mt-1">•</span>
                          {problem}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-muted-foreground mb-2">Risultato:</p>
                    <ul className="space-y-1">
                      {card.results.map((result, i) => (
                        <li key={i} className="text-sm text-foreground flex items-start gap-2">
                          <X className="w-3 h-3 text-destructive mt-1 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-destructive/10 px-6 py-3 border-t border-destructive/20">
                  <p className="text-destructive font-semibold text-sm">
                    👉 {card.footer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Truth Bomb Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <div className="bg-destructive/20 border-2 border-destructive rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-4 left-4">
              <Bomb className="w-8 h-8 text-destructive animate-pulse" />
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-destructive mb-4">
              LA VERITÀ CHE FA MALE
            </h4>
            <p className="text-xl md:text-2xl font-black text-foreground mb-6">
              Una finestra eccellente montata male<br />
              diventa un pessimo serramento.
            </p>
            <p className="text-muted-foreground text-lg">
              E il danno è doppio:
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4">
              <span className="flex items-center gap-2 text-destructive font-semibold">
                <X className="w-5 h-5" /> Hai speso tanto
              </span>
              <span className="hidden md:block text-muted-foreground">+</span>
              <span className="flex items-center gap-2 text-destructive font-semibold">
                <X className="w-5 h-5" /> Devi rifare tutto
              </span>
            </div>
          </div>
        </motion.div>

        {/* 50% Statistic */}
        <motion.div
          ref={counterRef}
          initial={{ opacity: 0, y: 30 }}
          animate={counterInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <AnimatedCounter target={50} isInView={counterInView} />
          <p className="text-xl md:text-2xl font-bold text-foreground mt-4 mb-6">
            LA POSA IN OPERA È IL 50% DEL RISULTATO<br />
            <span className="text-muted-foreground font-normal">(Almeno)</span>
          </p>
          <div className="max-w-xl mx-auto">
            <p className="text-muted-foreground mb-4">La posa decide:</p>
            <div className="grid grid-cols-2 gap-3">
              {["Isolamento reale", "Assenza di muffa", "Durata nel tempo", "Comfort quotidiano"].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 bg-primary/5 rounded-lg px-4 py-2"
                >
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-destructive font-semibold mt-6">
              Una posa sbagliata annulla ogni caratteristica tecnica della finestra.
            </p>
          </div>
        </motion.div>

        {/* DOMUS Solution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-primary/5 border-2 border-primary/30 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Check className="w-10 h-10 text-primary" />
            </div>
            <div className="text-center mb-8">
              <h4 className="text-2xl md:text-3xl font-black text-primary mb-2">
                LA POSA QUALIFICATA DOMUS
              </h4>
              <p className="text-lg text-muted-foreground">
                (NESSUNA SORPRESA)
              </p>
            </div>
            <p className="text-center text-foreground mb-8 text-lg">
              Con DOMUS la posa non è delegata.<br />
              <strong>È parte integrante del sistema.</strong>
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {domusAdvantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  className="flex items-center gap-3 bg-background/50 rounded-lg px-4 py-3 border border-primary/20"
                >
                  <advantage.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{advantage.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-primary font-semibold text-lg">
                👉 La finestra lavora come è stata progettata.
              </p>
              <p className="text-foreground font-bold mt-2">
                E la casa resta protetta.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h4 className="text-xl md:text-2xl font-bold text-center mb-6">
            CONFRONTO FINALE – POSA
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-muted-foreground">Aspetto</th>
                  <th className="py-3 px-4 text-center text-sm font-semibold text-destructive">Posa economica</th>
                  <th className="py-3 px-4 text-center text-sm font-semibold text-primary">Posa DOMUS</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                  >
                    <td className="py-3 px-4 text-sm font-medium text-foreground">{row.aspect}</td>
                    <td className="py-3 px-4 text-center">
                      <span className="inline-flex items-center gap-1 text-sm text-destructive">
                        <X className="w-3 h-3" />
                        {row.cheap}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className="inline-flex items-center gap-1 text-sm text-primary font-semibold">
                        <Check className="w-3 h-3" />
                        {row.domus}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Final Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
            <blockquote className="text-xl md:text-2xl font-bold text-foreground mb-6 italic">
              "Se monti male una finestra costosa,<br />
              non hai sbagliato prodotto.<br />
              <span className="text-primary not-italic">Hai sbagliato tutto."</span>
            </blockquote>
            <p className="text-primary font-bold text-lg mb-8">
              DOMUS elimina anche questo rischio.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
            >
              Richiedi Preventivo con Posa Certificata
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
