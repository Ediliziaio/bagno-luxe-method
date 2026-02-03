import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Wrench, RefreshCw, Clock, ChevronDown, ChevronUp, Download, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import guaranteeContract from "@/assets/guarantee-contract.jpg";

const guaranteeComparison = [
  { type: "Prodotto", market: "24 mesi (obbligo legale)", iprofili: "A VITA", meaning: "Se qualcosa si rompe tra 15 anni, lo ripariamo noi" },
  { type: "Posa", market: "Nessuna o \"vediamo\"", iprofili: "10 ANNI", meaning: "Qualsiasi difetto di installazione: interveniamo gratis" },
  { type: "Soddisfazione", market: "Mai sentita", iprofili: "30 GIORNI", meaning: "Non sei contento? Rimborso totale, nessuna domanda" },
  { type: "Tempistiche", market: "\"Quando riusciamo\"", iprofili: "90 GIORNI", meaning: "O ti rimborsiamo €200 per ogni settimana di ritardo" },
];

const guaranteeDetails = [
  {
    id: "prodotto",
    icon: Shield,
    title: "GARANZIA PRODOTTO A VITA",
    subtitle: "Cosa significa \"a vita\"?",
    content: `I Profili garantisce che i propri infissi potranno essere manutenuti a vita dai nostri tecnici, in modo che restino perfettamente funzionali per sempre.

**Condizioni:**
• La struttura del telaio non deve presentare danni strutturali
• Sono escluse le componenti elettroniche
• I costi di materiali e manodopera seguono il listino in vigore

**Perché lo facciamo:** Perché sappiamo come sono fatte le nostre finestre. E sappiamo che dureranno.`,
  },
  {
    id: "posa",
    icon: Wrench,
    title: "GARANZIA POSA 10 ANNI",
    subtitle: "Cosa copre:",
    content: `**Cosa copre:**
• Difetti di installazione imputabili a noi
• Non conformità rispetto agli standard dichiarati
• Anomalie funzionali derivanti dalla posa

**Cosa NON copre:**
• Difetti da condizioni strutturali preesistenti
• Interventi di terzi
• Manomissioni

**In caso di problema:** Interveniamo gratuitamente. Nessuna scusa, nessun costo aggiuntivo.`,
  },
  {
    id: "tempistiche",
    icon: Clock,
    title: "GARANZIA TEMPISTICHE CERTE",
    subtitle: "90 giorni o rimborso",
    content: `**L'impegno:** Installazione completata entro 90 giorni lavorativi dalla conferma ordine.

**Se sbuchiamo:** €200 di rimborso per ogni settimana intera di ritardo, fino al 10% del valore contrattuale.

**Quando NON si applica:**
• Ritardi per indisponibilità del cliente
• Modifiche richieste in corso d'opera
• Cause di forza maggiore
• Irregolarità nei pagamenti

**Perché lo facciamo:** Perché pianifichiamo ogni cantiere. E manteniamo le promesse.`,
  },
  {
    id: "soddisfatto",
    icon: RefreshCw,
    title: "SODDISFATTO O RIMBORSATO",
    subtitle: "Zero rischi per te",
    content: `**L'impegno:** Se entro 30 giorni dall'installazione non sei completamente soddisfatto del risultato, ti rimborsiamo l'intero importo.

**Nessuna domanda, nessuna complicazione.** 

Crediamo così tanto nella qualità del nostro lavoro che il rischio lo prendiamo noi.

**Perché lo facciamo:** Perché siamo sicuri che non ci servirà mai usare questa garanzia.`,
  },
];

const GuaranteeDetailCard = ({ guarantee, index, isInView }: { guarantee: typeof guaranteeDetails[0]; index: number; isInView: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = guarantee.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
    >
      <div className={`light-card overflow-hidden ${isExpanded ? 'ring-2 ring-primary/30' : ''}`}>
        <div
          className="p-5 md:p-6 cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-gray-900 mb-1">{guarantee.title}</h3>
              <p className="text-primary text-sm font-medium">{guarantee.subtitle}</p>
            </div>
            <button className="text-gray-400 hover:text-primary transition-colors p-2 flex-shrink-0">
              {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
            <div className="border-t border-gray-100 pt-5">
              <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                {guarantee.content.split('\n').map((line, idx) => {
                  if (line.startsWith('**') && line.endsWith('**')) {
                    return <p key={idx} className="font-bold text-gray-900 mt-4 mb-2">{line.replace(/\*\*/g, '')}</p>;
                  }
                  if (line.startsWith('•')) {
                    return <p key={idx} className="ml-4">{line}</p>;
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

export const GuaranteesDetailedSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding section-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-6">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Garanzia Blindata</span>
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Altri promettono. Noi firmiamo{" "}
            <span className="text-primary">PER ISCRITTO.</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ecco cosa ti garantiamo, nero su bianco, nel contratto.
          </p>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12 overflow-x-auto"
        >
          <div className="min-w-[600px] bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-100">
              <div className="p-4 font-semibold text-gray-900">Tipo</div>
              <div className="p-4 font-semibold text-destructive flex items-center gap-2">
                <X className="w-4 h-4" /> Standard mercato
              </div>
              <div className="p-4 font-semibold text-primary flex items-center gap-2">
                <Check className="w-4 h-4" /> I Profili
              </div>
              <div className="p-4 font-semibold text-gray-900 hidden md:block">Cosa significa per te</div>
            </div>

            {/* Table rows */}
            {guaranteeComparison.map((row, idx) => (
              <div key={row.type} className={`grid grid-cols-4 ${idx !== guaranteeComparison.length - 1 ? 'border-b border-gray-50' : ''}`}>
                <div className="p-4 font-medium text-gray-900">{row.type}</div>
                <div className="p-4 text-gray-500 text-sm">{row.market}</div>
                <div className="p-4 text-primary font-bold">{row.iprofili}</div>
                <div className="p-4 text-gray-600 text-sm hidden md:block">{row.meaning}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Detailed guarantee cards */}
        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          {guaranteeDetails.map((guarantee, index) => (
            <GuaranteeDetailCard key={guarantee.id} guarantee={guarantee} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={guaranteeContract} 
                  alt="Contratto garanzia a vita con timbro"
                  className="w-full h-auto"
                />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  📄 Scarica il contratto di garanzia PRIMA di firmare.
                </h3>
                <p className="text-gray-600 mb-6">
                  Nessun altro serramentista te lo farà vedere in anticipo. Noi sì. 
                  Perché non abbiamo nulla da nascondere.
                </p>
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 w-full md:w-auto">
                  <Download className="w-5 h-5 mr-2" />
                  Scarica il PDF della Garanzia Completa
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
