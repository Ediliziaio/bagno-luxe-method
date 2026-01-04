import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Thermometer, Volume2, CloudRain, Zap, Shield } from "lucide-react";
import windowDetail from "@/assets/window-detail.jpg";

const windowProblems = [
  {
    icon: Thermometer,
    title: "Dispersione termica fino al 40%",
    description: "Le finestre vecchie sono la prima causa di perdita di calore in casa. Il 40% dell'energia che paghi esce direttamente dalla finestra."
  },
  {
    icon: Volume2,
    title: "Rumore dalla strada",
    description: "Traffico, clacson, vicini rumorosi. Le vecchie finestre non isolano acusticamente, trasformando casa tua in una piazza pubblica."
  },
  {
    icon: CloudRain,
    title: "Condensa e muffa",
    description: "I vetri freddi creano condensa. La condensa crea muffa. La muffa danneggia la salute e il valore della tua casa."
  },
  {
    icon: Zap,
    title: "Bollette sempre più alte",
    description: "Ogni aumento del gas si traduce in bollette più care. E con finestre inefficienti, butti letteralmente soldi dalla finestra."
  },
  {
    icon: Shield,
    title: "Sicurezza compromessa",
    description: "Finestre vecchie significa serrature deboli. Un invito per i malintenzionati, soprattutto ai piani bassi."
  }
];

export const ModernStressSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding section-dark relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-10">
        <img src={windowDetail} alt="" className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/97 to-background" />
      
      {/* Decorative glows */}
      <motion.div 
        className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px]"
        animate={isInView ? { scale: [1, 1.15, 1] } : {}}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
            Le tue finestre vecchie
            <br />
            <span className="text-primary text-glow">ti stanno sabotando</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Non è solo una questione estetica. Le finestre sono il punto più debole
            dell'involucro termico di casa tua. <span className="text-foreground font-medium">E ogni giorno che passa, paghi le conseguenze.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {windowProblems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card p-6 sm:p-7 group cursor-default"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div 
                  className="w-12 h-12 flex items-center justify-center bg-primary/15 text-primary rounded-xl group-hover:bg-primary/25 transition-all duration-300"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <problem.icon className="w-6 h-6" />
                </motion.div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg sm:text-xl text-muted-foreground mb-4">
            E tu quanto stai pagando ogni mese per questi problemi?
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Le nuove finestre <span className="text-primary text-glow">si ripagano da sole</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
