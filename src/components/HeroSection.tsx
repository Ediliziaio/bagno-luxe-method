import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Euro, Clock, TrendingUp, Shield, FileCheck } from "lucide-react";

const impactNumbers = [
  {
    icon: Euro,
    value: "€3.600",
    suffix: "/anno",
    label: "Risparmio medio in bolletta",
    subtext: "su 30 anni = €108.000 in tasca tua",
  },
  {
    icon: Clock,
    value: "0",
    suffix: " ore",
    label: "Di manutenzione per 20 anni",
    subtext: "vs 40+ ore con finestre economiche",
  },
  {
    icon: TrendingUp,
    value: "+15-20",
    suffix: "%",
    label: "Valore del tuo immobile",
    subtext: "classe energetica migliorata",
  },
  {
    icon: Shield,
    value: "€0",
    suffix: "",
    label: "Sorprese e costi imprevisti",
    subtext: "tripla garanzia scritta",
  },
];

const AnimatedNumber = ({ value, suffix, isInView }: { value: string; suffix: string; isInView: boolean }) => {
  const [displayValue, setDisplayValue] = useState(value);
  
  // Simple animation - just fade in the final value
  useEffect(() => {
    if (isInView) {
      setDisplayValue(value);
    }
  }, [isInView, value]);

  return (
    <span>
      {displayValue}
      <span className="text-primary">{suffix}</span>
    </span>
  );
};

export const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    document.getElementById("cta-finale")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="section-padding section-light relative overflow-hidden pt-28 md:pt-32">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-5 py-2.5 rounded-full">
            <FileCheck className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Hai già il preventivo in mano
            </span>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center mb-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Prima di decidere,{" "}
            <span className="text-primary">guarda questi numeri.</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          Ecco cosa cambia davvero scegliendo I Profili rispetto agli altri.
        </motion.p>

        {/* Impact number cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {impactNumbers.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group"
              >
                <div className="light-card p-6 md:p-8 text-center h-full hover:shadow-xl transition-all duration-300 border-t-4 border-t-primary">
                  {/* Icon */}
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>

                  {/* Number */}
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    <AnimatedNumber value={item.value} suffix={item.suffix} isInView={isInView} />
                  </div>

                  {/* Label */}
                  <p className="text-gray-900 font-semibold mb-1">{item.label}</p>
                  
                  {/* Subtext */}
                  <p className="text-gray-500 text-sm">{item.subtext}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
