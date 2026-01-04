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
        <img src={windowDetail} alt="" className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/97 to-card" />
      <motion.div 
        className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"
        animate={isInView ? { opacity: [0.1, 0.15, 0.1] } : {}}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-primary/6 rounded-full blur-[80px]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
            Specializzati in <span className="text-primary text-glow">finestre PVC</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Non facciamo tutto. Facciamo una cosa sola, <span className="text-foreground font-medium">e la facciamo bene.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 sm:p-12 mb-16"
        >
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { title: "Processi standardizzati", desc: "Ogni installazione segue lo stesso metodo" },
              { title: "Materiali certificati", desc: "Solo PVC classe A da fornitori europei" },
              { title: "Installatori formati", desc: "Team interno secondo standard I Profili" }
            ].map((item, index) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group"
              >
                <p className="text-primary font-semibold mb-2 group-hover:text-glow-subtle transition-all">{item.title}</p>
                <p className="text-muted-foreground text-sm sm:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 25, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: 0.4 + index * 0.1,
                type: "spring",
                stiffness: 150
              }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="glass-card p-6 text-center group cursor-default"
            >
              <motion.div 
                className="w-14 h-14 mx-auto mb-4 bg-primary/15 rounded-xl flex items-center justify-center group-hover:bg-primary/25 transition-all duration-300"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <item.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <motion.p 
                className="text-2xl sm:text-3xl font-bold text-primary mb-1.5"
                initial={{ scale: 0.9 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
              >
                {item.value}
              </motion.p>
              <p className="text-xs sm:text-sm text-muted-foreground">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};