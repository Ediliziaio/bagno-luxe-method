import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { UserCheck, Shield, Trash2, Clock, HeadphonesIcon } from "lucide-react";
import windowDetail from "@/assets/window-detail.jpg";

const criteria = [
  {
    number: "01",
    question: "Chi installa le finestre?",
    subtitle: "Posatori certificati con patentino o improvvisati?",
    icon: UserCheck,
  },
  {
    number: "02",
    question: "Cosa succede se c'è un problema?",
    subtitle: "Garanzia scritta o \"vediamo\"?",
    icon: Shield,
  },
  {
    number: "03",
    question: "Il vecchio telaio viene rimosso?",
    subtitle: "Posa completa o montaggio sopra?",
    icon: Trash2,
  },
  {
    number: "04",
    question: "Quanto dura davvero la finestra?",
    subtitle: "10 anni o 30 anni?",
    icon: Clock,
  },
  {
    number: "05",
    question: "Chi risponde tra 5 anni?",
    subtitle: "Assistenza garantita o numero che non risponde?",
    icon: HeadphonesIcon,
  },
];

export const DecisionCriteriaSection = () => {
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
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Le 5 domande da farti{" "}
            <span className="text-primary">prima di firmare</span> qualsiasi preventivo
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Se l'altro serramentista non sa rispondere a queste, hai già la tua risposta.
          </p>
        </motion.div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={windowDetail}
                alt="Posatore certificato al lavoro"
                className="w-full h-auto object-cover"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 bg-primary text-white px-4 py-2 rounded-lg font-semibold text-sm">
                Posatori Certificati
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Questions list */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-5 order-1 lg:order-2"
          >
            {criteria.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    {/* Number badge */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <span className="font-bold text-primary group-hover:text-white">{item.number}</span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                        {item.question}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Icon */}
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
