import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Phone, Ruler, Wrench, Shield } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Consulenza e sopralluogo gratuito",
    description: "Veniamo a casa tua per analizzare le finestre esistenti, ascoltare le tue esigenze e proporti la soluzione più adatta.",
  },
  {
    number: "02",
    icon: Ruler,
    title: "Preventivo dettagliato",
    description: "Ti forniamo un preventivo chiaro e completo, senza costi nascosti. Spieghiamo ogni voce e rispondiamo a tutte le domande.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Installazione professionale",
    description: "Il nostro team interno installa le finestre seguendo procedure standardizzate, con attenzione a ogni dettaglio.",
  },
  {
    number: "04",
    icon: Shield,
    title: "Garanzia e assistenza",
    description: "10 anni di garanzia sui materiali e sull'installazione. Servizio post-vendita sempre disponibile.",
  },
];

export const MethodSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="metodo" className="section-padding section-accent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 via-transparent to-white/5" />
      <motion.div 
        className="absolute top-1/4 right-0 w-96 h-96 bg-white/10 rounded-full blur-[150px]"
        animate={isInView ? { opacity: [0.1, 0.15, 0.1] } : {}}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-white/5 rounded-full blur-[100px]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-3 bg-white/15 text-white px-6 py-3 rounded-full mb-8 border border-white/20"
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Check className="w-5 h-5" />
            <span className="font-semibold uppercase tracking-wider text-sm">Il Nostro Metodo</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            Il metodo <span className="opacity-90">I Profili</span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Un processo chiaro, senza sorprese, dall'inizio alla fine.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.2 + index * 0.12,
                type: "spring",
                stiffness: 150
              }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-sm p-7 rounded-2xl border border-white/20 group hover:bg-white/15 transition-all duration-300"
            >
              {/* Step number */}
              <motion.div 
                className="text-5xl font-bold text-white/30 mb-4 group-hover:text-white/50 transition-colors"
                initial={{ scale: 0.8 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
              >
                {step.number}
              </motion.div>

              {/* Icon */}
              <motion.div 
                className="w-14 h-14 bg-white/15 rounded-xl flex items-center justify-center mb-5 group-hover:bg-white/25 transition-all duration-300"
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                <step.icon className="w-7 h-7 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-white leading-tight">
                {step.title}
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-xl md:text-2xl font-semibold text-white">
            Un unico interlocutore. Zero stress.
          </p>
          <p className="text-white/80 mt-2">
            Dalla consulenza all'assistenza, ci pensiamo noi.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
