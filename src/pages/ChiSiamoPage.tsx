 import { HomeHeader } from "@/components/HomeHeader";
 import { Footer } from "@/components/Footer";
 import { PageHero } from "@/components/shared/PageHero";
 import { Button } from "@/components/ui/button";
 import { motion } from "framer-motion";
 import { Heart, Target, Users, Award, CheckCircle, MapPin } from "lucide-react";
 import { Link } from "react-router-dom";
 
 const values = [
   {
     icon: Heart,
     title: "Passione",
     description: "Ogni progetto è una nuova sfida che affrontiamo con entusiasmo e dedizione."
   },
   {
     icon: Target,
     title: "Precisione",
     description: "Attenzione maniacale ai dettagli, dalla misurazione all'installazione finale."
   },
   {
     icon: Users,
     title: "Trasparenza",
     description: "Comunicazione chiara e preventivi dettagliati, senza sorprese."
   },
   {
     icon: Award,
     title: "Qualità",
     description: "Solo materiali certificati Made in Italy per risultati che durano nel tempo."
   }
 ];
 
 const stats = [
   { value: "500+", label: "Installazioni completate" },
   { value: "15", label: "Anni di esperienza" },
   { value: "98%", label: "Clienti soddisfatti" },
   { value: "10", label: "Anni di garanzia" }
 ];
 
 const ChiSiamoPage = () => {
   return (
     <div className="min-h-screen bg-background">
       <HomeHeader />
 
       <main className="pt-16 md:pt-24">
         <PageHero
           badge="Chi Siamo"
           title="La Tua Casa Merita il Meglio"
           subtitle="Da oltre 15 anni installiamo serramenti in tutta la Lombardia con passione, precisione e trasparenza totale."
         />
 
         {/* Storia */}
         <section className="py-16 md:py-24 bg-background">
           <div className="max-w-7xl mx-auto px-4 sm:px-6">
             <div className="grid md:grid-cols-2 gap-12 items-center">
               <motion.div
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
               >
                 <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                   La Nostra Storia
                 </h2>
                 <div className="space-y-4 text-muted-foreground">
                   <p>
                     I Profili nasce dalla passione per l'edilizia di qualità e dalla volontà di offrire 
                     ai clienti lombardi un servizio di installazione serramenti all'altezza delle loro aspettative.
                   </p>
                   <p>
                     Nel corso degli anni abbiamo perfezionato il nostro metodo, il <strong className="text-foreground">Sistema 
                     Zero Pensieri</strong>, che garantisce un'esperienza senza stress dalla prima consulenza 
                     alla pratica ENEA.
                   </p>
                   <p>
                     Oggi siamo fieri di essere il punto di riferimento per centinaia di famiglie 
                     che hanno scelto di affidarsi a noi per migliorare il comfort e l'efficienza 
                     energetica delle loro abitazioni.
                   </p>
                 </div>
               </motion.div>
 
               <motion.div
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
                 className="relative"
               >
                 <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                   <div className="text-center">
                     <span className="text-8xl">🏠</span>
                     <p className="text-primary font-semibold mt-4">I Profili dal 2009</p>
                   </div>
                 </div>
               </motion.div>
             </div>
           </div>
         </section>
 
         {/* Valori */}
         <section className="py-16 md:py-24 bg-muted/30">
           <div className="max-w-7xl mx-auto px-4 sm:px-6">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-12"
             >
               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                 I Nostri Valori
               </h2>
               <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                 Principi che guidano ogni nostra azione, dal primo contatto all'assistenza post-vendita.
               </p>
             </motion.div>
 
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {values.map((value, index) => (
                 <motion.div
                   key={value.title}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: index * 0.1 }}
                   className="bg-card p-6 rounded-xl border border-border/50 text-center"
                 >
                   <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                     <value.icon className="w-7 h-7 text-primary" />
                   </div>
                   <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                   <p className="text-sm text-muted-foreground">{value.description}</p>
                 </motion.div>
               ))}
             </div>
           </div>
         </section>
 
         {/* Stats */}
         <section className="py-16 md:py-24 bg-primary text-primary-foreground">
           <div className="max-w-7xl mx-auto px-4 sm:px-6">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               {stats.map((stat, index) => (
                 <motion.div
                   key={stat.label}
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: index * 0.1 }}
                   className="text-center"
                 >
                   <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                   <div className="text-primary-foreground/80 text-sm uppercase tracking-wider">{stat.label}</div>
                 </motion.div>
               ))}
             </div>
           </div>
         </section>
 
         {/* Territorio */}
         <section className="py-16 md:py-24 bg-background">
           <div className="max-w-7xl mx-auto px-4 sm:px-6">
             <div className="grid md:grid-cols-2 gap-12 items-center">
               <motion.div
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
               >
                 <div className="flex items-center gap-3 mb-4">
                   <MapPin className="w-6 h-6 text-primary" />
                   <span className="text-primary font-semibold uppercase tracking-wider text-sm">Zona Servita</span>
                 </div>
                 <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                   Operiamo in Tutta la Lombardia
                 </h2>
                 <p className="text-muted-foreground mb-6">
                   Milano, Monza-Brianza, Bergamo, Brescia, Como, Lecco, Varese, Pavia, Cremona, Mantova, Lodi, Sondrio.
                 </p>
                 <ul className="space-y-3">
                   {["Sopralluogo gratuito", "Preventivo entro 48 ore", "Installazione programmata", "Assistenza locale"].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-foreground">
                       <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                       <span>{item}</span>
                     </li>
                   ))}
                 </ul>
               </motion.div>
 
               <motion.div
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
                 className="bg-muted/50 rounded-2xl p-8 text-center"
               >
                 <span className="text-9xl">🗺️</span>
                 <p className="text-muted-foreground mt-4">Tutta la Lombardia</p>
               </motion.div>
             </div>
           </div>
         </section>
 
         {/* CTA */}
         <section className="py-16 md:py-24 bg-primary/5">
           <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
             >
               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                 Pronto a Conoscerci?
               </h2>
               <p className="text-lg text-muted-foreground mb-8">
                 Prenota una consulenza gratuita e scopri come possiamo migliorare il comfort della tua casa.
               </p>
               <Button variant="teal" size="lg" asChild>
                 <Link to="/contatti">Contattaci Ora</Link>
               </Button>
             </motion.div>
           </div>
         </section>
       </main>
 
       <Footer />
     </div>
   );
 };
 
 export default ChiSiamoPage;