import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Ho paura dei costi.",
    answer: "Proprio per questo definiamo tutto prima. Ricevi un preventivo dettagliato e trasparente prima di iniziare qualsiasi lavoro."
  },
  {
    question: "Ho paura dei tempi.",
    answer: "I tempi sono pianificati e rispettati. Li mettiamo per iscritto, perché il tuo tempo ha valore."
  },
  {
    question: "Devo pensarci.",
    answer: "Ogni mese che aspetti, i costi aumentano. La consulenza è gratuita e senza impegno: ti aiuta a decidere con più informazioni, non meno."
  },
  {
    question: "E se durante i lavori emergono problemi imprevisti?",
    answer: "Con il nostro sopralluogo tecnico approfondito, identifichiamo in anticipo ogni criticità. Se dovessero emergere imprevisti, li gestiamo noi senza costi aggiuntivi a sorpresa - è scritto nel contratto."
  },
  {
    question: "Quanto dura una ristrutturazione completa?",
    answer: "Un bagno completo richiede mediamente 10-15 giorni lavorativi. Definiamo insieme le date esatte e le rispettiamo, perché sappiamo quanto sia importante avere certezze."
  },
  {
    question: "Posso rimanere in casa durante i lavori?",
    answer: "Assolutamente sì. Organizziamo il cantiere per minimizzare i disagi e, quando possibile, manteniamo funzionante un secondo bagno. La tua routine quotidiana è una priorità."
  },
  {
    question: "Come funziona la consulenza gratuita?",
    answer: "Un nostro tecnico viene a casa tua, analizza lo spazio, ascolta le tue esigenze e ti propone soluzioni concrete. Nessun obbligo, nessuna pressione - solo informazioni per decidere con chiarezza."
  },
  {
    question: "Che garanzia offrite sui lavori?",
    answer: "Offriamo garanzia completa su tutti i lavori eseguiti e sui materiali installati. In caso di problemi, interveniamo noi - senza costi aggiuntivi e senza scuse."
  },
  {
    question: "Ho avuto brutte esperienze con altre imprese...",
    answer: "È proprio per questo che esiste Architetto del Bagno. Un unico referente, tempi certi, budget chiaro - tutto ciò che le \"altre imprese\" non ti hanno dato. Leggi le recensioni dei nostri clienti."
  }
];

export const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={ref} id="faq" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
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
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="border border-border"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-card transition-colors duration-200"
              >
                <span className="text-lg md:text-xl font-medium pr-4">"{faq.question}"</span>
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
