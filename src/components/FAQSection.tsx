import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Quanto costa cambiare le finestre?",
    answer: "Il costo dipende dal numero di finestre, dalle dimensioni e dal tipo di installazione. Ma il vero costo è quello che paghi OGNI MESE con le vecchie finestre. Durante il sopralluogo gratuito ti diamo un preventivo dettagliato e ti calcoliamo il risparmio reale in bolletta."
  },
  {
    question: "Quanto tempo ci vuole per l'installazione?",
    answer: "Mediamente installiamo 4-6 finestre in una sola giornata. Per case complete, 2-3 giorni. Lavoriamo in modo pulito e professionale, minimizzando il disagio."
  },
  {
    question: "Il PVC è un buon materiale?",
    answer: "Il PVC è oggi il materiale più usato per serramenti ad alta efficienza in Europa. Non richiede manutenzione, dura 30+ anni, isola perfettamente dal freddo e dal rumore. Ed è più economico dell'alluminio a parità di prestazioni."
  },
  {
    question: "Che garanzia offrite?",
    answer: "10 anni di garanzia completa su prodotto e installazione. Se qualcosa non funziona, interveniamo noi senza costi aggiuntivi. È scritto nero su bianco."
  },
  {
    question: "Servite anche condomini?",
    answer: "Assolutamente sì. Lavoriamo sia con privati che con amministratori di condominio. Per i condomini offriamo condizioni speciali e gestiamo tutta la burocrazia, incluse le pratiche per le detrazioni fiscali."
  },
  {
    question: "Ci sono agevolazioni fiscali?",
    answer: "Sì, la sostituzione di finestre rientra nelle detrazioni fiscali per riqualificazione energetica. Ti aiutiamo con tutta la documentazione necessaria per ottenere il massimo beneficio."
  },
  {
    question: "Posso vedere dei lavori già fatti?",
    answer: "Certo. Durante il sopralluogo possiamo mostrarti foto e referenze di installazioni simili alla tua nella tua zona. Molti nostri clienti sono felici di condividere la loro esperienza."
  },
  {
    question: "Il sopralluogo è davvero gratuito?",
    answer: "Sì, 100% gratuito e senza impegno. Un nostro tecnico viene a casa tua, analizza le finestre attuali, ti spiega cosa si può fare e ti lascia un preventivo dettagliato. Nessuna pressione, nessun obbligo."
  }
];

export const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={ref} id="faq" className="section-padding section-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Domande <span className="text-primary">frequenti</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + index * 0.05 }}
              className="light-card overflow-hidden"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-5 sm:p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-all duration-300 group"
                whileHover={{ x: 4 }}
              >
                <span className="text-base sm:text-lg md:text-xl font-medium pr-4 text-gray-900 group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-primary" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                  )}
                </motion.div>
              </motion.button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="px-5 sm:px-6 pb-6 text-gray-600 text-base sm:text-lg leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
