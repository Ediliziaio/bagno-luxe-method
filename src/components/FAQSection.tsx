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
    <section ref={ref} id="faq" className="section-padding section-gradient-alt relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Domande <span className="text-primary text-glow">frequenti</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
              className="glass-card rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-card/80 transition-colors duration-200"
              >
                <span className="text-lg md:text-xl font-medium pr-4 text-foreground">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                )}
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-6 text-muted-foreground text-lg">
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
