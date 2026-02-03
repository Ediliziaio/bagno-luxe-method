import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, FileText, ArrowRight } from "lucide-react";

export const FinalCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="cta-finale" 
      ref={ref} 
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, hsl(0, 70%, 50%) 0%, hsl(15, 80%, 45%) 100%)' }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-white/10 rounded-full blur-[200px]"
        animate={isInView ? { scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] } : {}}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
            Hai il preventivo. Hai le informazioni.{" "}
            <span className="opacity-90">Hai visto i numeri.</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-4">
            Ora la decisione è tua.
          </p>
        </motion.div>

        {/* Supporting text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10"
        >
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Se hai domande, dubbi, o vuoi rivedere qualcosa insieme — siamo qui.
            <br />
            Se sei pronto a procedere — siamo qui.
            <br />
            <strong className="text-white">Ma ricorda: ogni mese che passa, le tue vecchie finestre ti costano soldi.</strong>
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          {/* Primary CTA */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button 
              size="xl" 
              className="bg-white text-gray-900 hover:bg-white/90 text-lg px-10 py-6 h-auto font-bold shadow-xl group"
              onClick={() => window.location.href = 'tel:+390000000000'}
            >
              <Phone className="w-5 h-5 mr-3" />
              Parla con il tuo consulente
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              variant="outline"
              size="lg" 
              className="border-2 border-white text-white hover:bg-white/10 text-base px-8 py-5 h-auto font-semibold"
            >
              <FileText className="w-4 h-4 mr-2" />
              Rivedi il tuo preventivo
            </Button>
          </motion.div>
        </motion.div>

        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-8 border-t border-white/20"
        >
          <p className="text-white/70 text-sm">
            <strong className="text-white">I Profili</strong> — Finestre ad Alta Efficienza
          </p>
          <p className="text-white/60 text-sm mt-1">
            Tutta la Lombardia | Posatori Certificati | Garanzia a Vita
          </p>
        </motion.div>
      </div>
    </section>
  );
};
