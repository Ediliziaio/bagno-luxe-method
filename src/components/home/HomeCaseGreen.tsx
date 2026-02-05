import { useRef, useState, useEffect } from "react";
 import { motion, useInView } from "framer-motion";
 import { 
   AlertTriangle, 
   TrendingDown, 
   Calendar, 
   Lock, 
   Leaf, 
   CheckCircle2,
   ArrowRight,
   Home,
 } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Link } from "react-router-dom";
 
 const urgencyStats = [
   { 
     value: "-30%", 
     label: "Svalutazione stimata", 
     sublabel: "per immobili non efficientati",
     icon: TrendingDown,
     color: "text-red-500",
   },
  { 
    value: "4", 
     label: "Anni rimanenti", 
     sublabel: "per adeguarsi alla normativa",
     icon: Calendar,
     color: "text-amber-500",
   },
   { 
     value: "0", 
     label: "Possibilità di vendita", 
     sublabel: "senza classe energetica E",
     icon: Lock,
     color: "text-red-500",
   },
   { 
     value: "1°", 
     label: "Intervento efficace", 
     sublabel: "sostituzione finestre",
     icon: Leaf,
     color: "text-primary",
   },
 ];
 
 const benefits = [
  "Detrazione fiscale 50% garantita fino al 2027",
   "Bollette più leggere dal primo giorno",
   "Valore immobile in crescita immediata",
   "Conformità anticipata alla direttiva UE",
   "Zero rischio blocco vendita/affitto",
 ];
 
 export const HomeCaseGreen = () => {
   const sectionRef = useRef<HTMLElement>(null);
   const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2030-01-01T00:00:00').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };
    
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);
 
   return (
     <section
       ref={sectionRef}
       className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
     >
       {/* Background decorations */}
       <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
         <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
         {/* Grid pattern */}
         <div 
           className="absolute inset-0 opacity-5"
           style={{
             backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
             backgroundSize: "50px 50px",
           }}
         />
       </div>
 
       <div className="container mx-auto px-4 relative z-10">
         {/* Warning Badge */}
         <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.5 }}
           className="flex justify-center mb-8"
         >
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/40 rounded-full">
             <AlertTriangle className="w-4 h-4 text-amber-400" />
             <span className="text-amber-300 text-sm font-semibold uppercase tracking-wider">
               Normativa Europea in Vigore
             </span>
           </div>
         </motion.div>
 
         {/* Header */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
           className="text-center mb-12"
         >
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
             Direttiva <span className="text-primary">Case Green</span> 2030
           </h2>
           <p className="text-lg text-slate-300 max-w-3xl mx-auto">
             Sei pronto per la rivoluzione energetica degli edifici?
           </p>
         </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-12"
          >
            <p className="text-center text-amber-300 text-sm font-semibold uppercase tracking-wider mb-4">
              Tempo rimanente al 2030
            </p>
            <div className="grid grid-cols-4 gap-3 md:gap-4 max-w-lg mx-auto">
              {[
                { value: timeLeft.days, label: "Giorni" },
                { value: timeLeft.hours, label: "Ore" },
                { value: timeLeft.minutes, label: "Minuti" },
                { value: timeLeft.seconds, label: "Secondi" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-500/50 to-red-500/30 rounded-xl blur-sm opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-slate-800/90 border border-amber-500/30 rounded-xl p-3 md:p-4 text-center">
                    <div className={`text-2xl md:text-4xl font-black text-amber-400 ${item.label === "Secondi" ? "animate-pulse" : ""}`}>
                      {item.value.toString().padStart(item.label === "Giorni" ? 1 : 2, '0')}
                    </div>
                    <div className="text-xs md:text-sm text-slate-400 uppercase tracking-wider mt-1">
                      {item.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
 
         {/* Alert Quote Box */}
         <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={isInView ? { opacity: 1, scale: 1 } : {}}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="max-w-4xl mx-auto mb-14"
         >
           <div className="relative">
             <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-primary rounded-2xl opacity-30" />
             <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-700">
               <div className="flex items-start gap-4">
                 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <Home className="w-6 h-6 text-amber-400 animate-float" />
                 </div>
                 <div>
                   <p className="text-slate-200 text-lg md:text-xl leading-relaxed">
                     "L'Unione Europea impone che <strong className="text-white">entro il 2030</strong> tutti gli immobili 
                     residenziali raggiungano almeno la <strong className="text-primary">classe energetica E</strong>, 
                     pena il <strong className="text-amber-400">blocco alla vendita e all'affitto</strong>."
                   </p>
                   <p className="text-slate-400 text-sm mt-3">
                     — Direttiva EPBD (Energy Performance of Buildings Directive)
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </motion.div>
 
         {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-14 mt-14">
           {urgencyStats.map((stat, index) => {
             const Icon = stat.icon;
             return (
               <motion.div
                 key={stat.label}
                 initial={{ opacity: 0, y: 30 }}
                 animate={isInView ? { opacity: 1, y: 0 } : {}}
                 transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-5 md:p-6 text-center group hover:border-primary/50 transition-all duration-300"
               >
                 <div className="flex justify-center mb-3">
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-slate-700/80 to-slate-800/80 border border-slate-600/50 flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 md:w-10 md:h-10" />
                   </div>
                 </div>
                 <div className={`text-3xl md:text-4xl font-black ${stat.color} mb-1`}>
                   {stat.value}
                 </div>
                 <div className="text-white font-semibold text-sm mb-1">
                   {stat.label}
                 </div>
                 <div className="text-slate-400 text-xs">
                   {stat.sublabel}
                 </div>
               </motion.div>
             );
           })}
         </div>
 
         {/* Benefits Section */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6, delay: 0.5 }}
           className="max-w-4xl mx-auto"
         >
           <div className="bg-gradient-to-br from-primary/20 to-teal-light/10 rounded-2xl p-6 md:p-8 border border-primary/30">
             <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
               Non aspettare di essere obbligato. <span className="text-primary">Agisci ora</span> e ottieni:
             </h3>
             
             <div className="grid md:grid-cols-2 gap-4 mb-8">
               {benefits.map((benefit, index) => (
                 <motion.div
                   key={benefit}
                   initial={{ opacity: 0, x: -20 }}
                   animate={isInView ? { opacity: 1, x: 0 } : {}}
                   transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                   className="flex items-center gap-3"
                 >
                   <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center">
                     <CheckCircle2 className="w-4 h-4 text-primary" />
                   </div>
                   <span className="text-slate-200 text-sm md:text-base">{benefit}</span>
                 </motion.div>
               ))}
             </div>
 
             {/* CTA */}
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <Link to="/contatti">
                 <Button variant="teal" size="lg" className="group">
                   Verifica la Tua Situazione
                   <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                 </Button>
               </Link>
               <span className="text-slate-400 text-sm">
                 Consulenza gratuita e senza impegno
               </span>
             </div>
           </div>
         </motion.div>
 
         {/* Bottom urgency text */}
         <motion.p
           initial={{ opacity: 0 }}
           animate={isInView ? { opacity: 1 } : {}}
           transition={{ duration: 0.6, delay: 0.8 }}
           className="text-center text-slate-400 text-sm mt-10 max-w-2xl mx-auto"
         >
           Le finestre sono responsabili fino al <strong className="text-white">25% delle dispersioni termiche</strong>. 
           Sostituirle è il primo passo per migliorare la classe energetica del tuo immobile.
         </motion.p>
       </div>
     </section>
   );
 };