import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Shield, ThumbsUp } from "lucide-react";
import windowDetail from "@/assets/window-detail.jpg";

const achievements = [
  { icon: Award, value: "Classe A", label: "Efficienza energetica certificata" },
  { icon: Shield, value: "10 anni", label: "Garanzia completa" },
  { icon: ThumbsUp, value: "98%", label: "Clienti soddisfatti" },
  { icon: Users, value: "500+", label: "Installazioni in Lombardia" }
];

export const AuthoritySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding section-gradient-alt relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img src={windowDetail} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-card" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Specializzati in <span className="text-primary text-glow">finestre PVC</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Non facciamo tutto. Facciamo una cosa sola, e la facciamo bene.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 sm:p-12 rounded-xl mb-16"
        >
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-primary font-semibold mb-2">Processi standardizzati</p>
              <p className="text-muted-foreground">Ogni installazione segue lo stesso metodo</p>
            </div>
            <div>
              <p className="text-primary font-semibold mb-2">Materiali certificati</p>
              <p className="text-muted-foreground">Solo PVC classe A da fornitori europei</p>
            </div>
            <div>
              <p className="text-primary font-semibold mb-2">Installatori formati</p>
              <p className="text-muted-foreground">Team interno secondo standard I Profili</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="glass-card p-6 rounded-xl text-center hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/20 rounded-lg flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-3xl font-bold text-primary mb-1">{item.value}</p>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
