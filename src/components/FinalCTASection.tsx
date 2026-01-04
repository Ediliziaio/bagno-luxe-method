import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ArrowRight, Shield, Clock, CheckCircle } from "lucide-react";

const guarantees = [
  { icon: Shield, text: "Garanzia 10 anni" },
  { icon: Clock, text: "Sopralluogo gratuito" },
  { icon: CheckCircle, text: "Preventivo senza impegno" }
];

export const FinalCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cta-finale" ref={ref} className="section-padding section-accent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 via-transparent to-white/5" />
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-white/10 rounded-full blur-[200px]"
        animate={isInView ? { scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] } : {}}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div 
            className="inline-flex items-center gap-3 bg-white/15 text-white px-6 py-3 rounded-full mb-8 border border-white/20"
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <span className="font-semibold uppercase tracking-wider text-sm">Pronto a iniziare?</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Richiedi il tuo{" "}
            <span className="opacity-90">preventivo gratuito</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Nessun obbligo, nessuna pressione. Solo un sopralluogo professionale 
            per capire se possiamo aiutarti a migliorare il comfort di casa tua.
          </p>

          {/* Guarantees */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            {guarantees.map((item, index) => (
              <motion.div 
                key={item.text}
                className="flex items-center gap-2 text-white/90"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm sm:text-base font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
            className="mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button 
                size="xl" 
                className="btn-white text-lg sm:text-xl px-10 sm:px-14 py-6 sm:py-7 h-auto group"
                onClick={() => window.location.href = 'tel:+390000000000'}
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
                Chiama Ora
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <p className="text-white/70 mt-4 text-sm sm:text-base">
              Oppure compila il form e ti ricontattiamo entro 24 ore
            </p>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              { icon: Phone, label: "Telefono", value: "000 000 0000", href: "tel:+390000000000" },
              { icon: Mail, label: "Email", value: "info@iprofili.it", href: "mailto:info@iprofili.it" },
              { icon: MapPin, label: "Area servita", value: "Tutta la Lombardia", href: null }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                whileHover={item.href ? { y: -4, scale: 1.02 } : {}}
                className={`bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/15 ${item.href ? 'cursor-pointer hover:bg-white/15' : ''} transition-all duration-300`}
                onClick={() => item.href && (window.location.href = item.href)}
              >
                <item.icon className="w-6 h-6 text-white/80 mx-auto mb-2" />
                <p className="text-white/60 text-sm mb-1">{item.label}</p>
                <p className="text-white font-semibold">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
