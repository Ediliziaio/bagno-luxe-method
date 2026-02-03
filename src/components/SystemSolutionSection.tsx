import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Factory, Wrench, FileCheck, ChevronDown, ChevronUp, Check, Shield, Clock, RefreshCw, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import windowDetail from "@/assets/window-detail.jpg";

const productFeatures = [
  "Acciaio zincato 2mm a profilo chiuso — Il doppio dello standard. Zero flessioni nel tempo.",
  "3 guarnizioni rinforzate — Non 2. Tripla barriera contro aria, acqua, rumore.",
  "Profilo 76mm — L'equilibrio perfetto. Isola quanto serve, senza creare condensa.",
  "Active Protection Surface — Superficie che non ingiallisce, non si macchia, non richiede manutenzione.",
];

const poseFeatures = [
  "Posatori certificati e formati — Non personale a giornata. Professionisti con patentino verificabile.",
  "Rimozione totale del vecchio telaio — Niente scorciatoie. Via tutto, si riparte da zero.",
  "Correzione dei ponti termici — Il nodo muro-finestra viene sigillato correttamente.",
  "Verifica finale documentata — Ogni installazione viene controllata prima di chiudere il cantiere.",
];

const guarantees = [
  { name: "Prodotto a Vita", duration: "ILLIMITATA", description: "Manutenibilità garantita per sempre" },
  { name: "Posa Certificata", duration: "10 ANNI", description: "Qualsiasi difetto di installazione: interveniamo gratis" },
  { name: "Soddisfatto o Rimborsato", duration: "30 GIORNI", description: "Non sei contento? Ti restituiamo tutto" },
  { name: "Tempistiche Certe", duration: "90 GIORNI", description: "Installazione completata o rimborso €200/settimana" },
];

interface SolutionBlockProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  features?: string[];
  children?: React.ReactNode;
  delay: number;
  isInView: boolean;
}

const SolutionBlock = ({ icon: Icon, title, subtitle, features, children, delay, isInView }: SolutionBlockProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="light-card overflow-hidden"
    >
      {/* Header - always visible */}
      <div 
        className="p-6 md:p-8 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Icon className="w-7 h-7 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{title}</h3>
            <p className="text-primary font-medium">{subtitle}</p>
          </div>
          <button className="text-gray-400 hover:text-primary transition-colors p-2">
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Expandable content */}
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
          <div className="border-t border-gray-100 pt-6">
            {features && (
              <ul className="space-y-3">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            )}
            {children}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const SystemSolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding section-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Non vendiamo finestre.{" "}
            <span className="text-primary">Risolviamo problemi.</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Un sistema completo: prodotto + posa + garanzia. Tutto integrato, tutto garantito.
          </p>
        </motion.div>

        {/* Three solution blocks */}
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Block 1: Prodotto DOMUS */}
          <SolutionBlock
            icon={Factory}
            title="PRODOTTO DOMUS"
            subtitle="Il serramento progettato per durare 30 anni"
            features={productFeatures}
            delay={0.2}
            isInView={isInView}
          />

          {/* Block 2: Posa Certificata */}
          <SolutionBlock
            icon={Wrench}
            title="POSA CERTIFICATA"
            subtitle="I nostri posatori hanno il patentino. In caso di controllo, sono in regola."
            features={poseFeatures}
            delay={0.3}
            isInView={isInView}
          />

          {/* Block 3: Garanzia Totale */}
          <SolutionBlock
            icon={FileCheck}
            title="GARANZIA TOTALE"
            subtitle="Altri promettono. Noi firmiamo."
            delay={0.4}
            isInView={isInView}
          >
            <div className="space-y-4">
              <p className="text-gray-600 mb-4">
                La garanzia legale sugli infissi è di 24 mesi. Ventiquattro mesi per un investimento che dovrebbe durare decenni.
                Noi abbiamo scelto diversamente.
              </p>
              
              {/* Guarantees table */}
              <div className="bg-gray-50 rounded-xl p-4 overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="pb-3 text-gray-900 font-semibold">Garanzia</th>
                      <th className="pb-3 text-gray-900 font-semibold">Durata</th>
                      <th className="pb-3 text-gray-900 font-semibold hidden sm:table-cell">Cosa copre</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {guarantees.map((g, idx) => (
                      <tr key={idx}>
                        <td className="py-3 font-medium text-gray-900">{g.name}</td>
                        <td className="py-3 text-primary font-bold">{g.duration}</td>
                        <td className="py-3 text-gray-600 hidden sm:table-cell">{g.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Download button */}
              <div className="pt-4">
                <Button variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Scarica il PDF della Garanzia Completa
                </Button>
              </div>
            </div>
          </SolutionBlock>
        </div>

        {/* Visual element */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 md:mt-16 max-w-3xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={windowDetail}
              alt="Dettaglio sezione profilo DOMUS"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">Profilo 76mm</span>
                <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">3 Guarnizioni</span>
                <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">Acciaio 2mm</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
