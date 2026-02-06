 import { HomeHeader } from "@/components/HomeHeader";
 import { Footer } from "@/components/Footer";
 import { SEOHead, createBreadcrumbSchema } from "@/components/SEOHead";
 import { SEOBreadcrumb } from "@/components/shared/SEOBreadcrumb";
 import { Button } from "@/components/ui/button";
 import { motion } from "framer-motion";
 import { Heart, Target, Users, Award, CheckCircle, MapPin, Shield, BadgeCheck, Star } from "lucide-react";
 import { Link } from "react-router-dom";
 
 // Images
import showroomEsterno from "@/assets/showroom/showroom-esterno.jpg";
import showroomInterno from "@/assets/showroom/showroom-interno.jpg";
 
 
 const values = [
   {
     icon: Heart,
     title: "Passione",
     description: "Ogni progetto è una nuova sfida che affrontiamo con entusiasmo e dedizione. Non siamo semplici installatori, siamo artigiani del comfort."
   },
   {
     icon: Target,
     title: "Precisione",
     description: "Attenzione maniacale ai dettagli, dalla misurazione millimetrica all'installazione finale. Ogni finestra deve essere perfetta."
   },
   {
     icon: Users,
     title: "Trasparenza",
     description: "Comunicazione chiara e preventivi dettagliati voce per voce. Nessuna sorpresa, nessun costo nascosto. Mai."
   },
   {
     icon: Award,
     title: "Qualità",
     description: "Solo materiali certificati Made in Italy per risultati che durano 30+ anni. Non scendiamo a compromessi."
   }
 ];
 
 
 const certifications = [
   { name: "Installatore Certificato DOMUS", icon: BadgeCheck },
   { name: "Garanzia 10 Anni Profili", icon: Shield },
   { name: "Made in Italy 100%", icon: Star },
   { name: "Pratica ENEA Inclusa", icon: CheckCircle },
 ];
 
const stats = [
  { value: "30.000+", label: "Finestre installate" },
  { value: "15+", label: "Anni di esperienza" },
  { value: "98%", label: "Clienti soddisfatti" },
  { value: "10", label: "Anni di garanzia" }
];
 
 const ChiSiamoPage = () => {
   const breadcrumbSchema = createBreadcrumbSchema([
     { name: "Home", url: "https://iprofili.it" },
     { name: "Chi Siamo", url: "https://iprofili.it/chi-siamo" },
   ]);
 
   return (
     <div className="min-h-screen bg-background">
        <SEOHead
          title="Chi Siamo - I Profili | Oltre 15 Anni di Esperienza"
          description="Scopri la storia di I Profili: oltre 15 anni di esperienza, 30.000+ finestre installate in Lombardia. Team certificato, garanzia 10 anni, Sistema Zero Pensieri."
          canonical="https://iprofili.it/chi-siamo"
          schema={breadcrumbSchema}
        />
       <HomeHeader />
 
       <main className="pt-24 md:pt-32">
         {/* Breadcrumb */}
         <div className="bg-muted/30">
           <div className="max-w-7xl mx-auto px-4 sm:px-6">
             <SEOBreadcrumb items={[{ label: "Chi Siamo" }]} />
           </div>
         </div>
 
         {/* Hero with Image */}
          <section className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] min-h-[300px] max-h-[600px] overflow-hidden">
            <img
              src={showroomEsterno}
              alt="Showroom I Profili a Busto Arsizio - esterno con insegna"
              className="absolute inset-0 w-full h-full object-cover"
            />
           <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
           <div className="relative z-10 h-full flex items-end">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 md:pb-16 w-full">
               <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6 }}
               >
                 <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-widest rounded-full mb-4">
                   Chi Siamo
                 </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground max-w-3xl">
                    I Profili: +15 Anni di Serramenti d'Eccellenza in Lombardia
                  </h1>
               </motion.div>
             </div>
           </div>
         </section>
 
         {/* Intro Text */}
         <section className="py-16 md:py-20 bg-background">
           <div className="max-w-4xl mx-auto px-4 sm:px-6">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="text-center"
             >
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Da oltre <strong className="text-foreground">15 anni</strong> aiutiamo le famiglie lombarde a trasformare 
                  le loro case in ambienti più confortevoli, silenziosi e efficienti. 
                  Con oltre <strong className="text-foreground">30.000 finestre installate</strong>, 
                  non siamo semplici installatori: siamo partner per il tuo comfort.
                </p>
             </motion.div>
           </div>
         </section>
 
         {/* La Nostra Storia */}
         <section className="py-16 md:py-24 bg-muted/30">
           <div className="max-w-7xl mx-auto px-4 sm:px-6">
             <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
                    <p className="text-lg">
                      Oltre <strong className="text-foreground">15 anni fa</strong>, in un piccolo laboratorio di Monza, 
                      è nata una visione: rendere accessibile a tutti la qualità premium dei serramenti in PVC.
                    </p>
                    <p>
                      Non volevamo essere "un altro serramentista". Volevamo creare un'esperienza diversa: 
                      <strong className="text-foreground"> trasparenza totale</strong>, tempistiche rispettate, 
                      e un'assistenza che non ti abbandona dopo la firma.
                    </p>
                    <p>
                      Oggi, dopo oltre <strong className="text-foreground">30.000 finestre installate</strong> e +15 anni di lavoro, 
                      il nostro <strong className="text-foreground">Sistema Zero Pensieri</strong> è diventato 
                      il riferimento per chi cerca serramenti senza stress in Lombardia.
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
                <img
                  src={showroomInterno}
                  alt="Interno showroom I Profili con campioni serramenti"
                  className="rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
                />
                  {/* Stats box - hidden on small mobile, visible from sm breakpoint */}
                  <div className="hidden sm:block absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-4 md:p-6 rounded-xl shadow-lg">
                    <div className="text-3xl md:text-4xl font-bold">15+</div>
                    <div className="text-xs md:text-sm uppercase tracking-wider">Anni di Esperienza</div>
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
                 Principi che guidano ogni nostra azione, dal primo contatto all'assistenza post-vendita
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
                   className="bg-card p-8 rounded-xl border border-border/50 text-center hover:border-primary/30 transition-all group"
                 >
                   <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                     <value.icon className="w-8 h-8 text-primary" />
                   </div>
                   <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                   <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                 </motion.div>
               ))}
             </div>
           </div>
         </section>
 
 
         {/* Certificazioni */}
         <section className="py-16 md:py-24 bg-muted/30">
           <div className="max-w-7xl mx-auto px-4 sm:px-6">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-12"
             >
               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                 Certificazioni e Garanzie
               </h2>
               <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                 Lavoriamo solo con i migliori standard del settore
               </p>
             </motion.div>
 
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               {certifications.map((cert, index) => (
                 <motion.div
                   key={cert.name}
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: index * 0.1 }}
                   className="bg-card border border-border/50 rounded-xl p-6 text-center hover:border-primary/30 transition-colors"
                 >
                   <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                     <cert.icon className="w-8 h-8 text-primary" />
                   </div>
                   <p className="text-sm font-medium text-foreground">{cert.name}</p>
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
         <section className="py-16 md:py-24 bg-muted/30">
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
                   {["Sopralluogo gratuito", "Preventivo dettagliato entro 48 ore", "Installazione programmata", "Assistenza locale dedicata"].map((item, i) => (
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
                 className="bg-card border border-border/50 rounded-2xl p-8"
               >
                 <div className="grid grid-cols-3 gap-4">
                   {["Milano", "Monza", "Bergamo", "Brescia", "Como", "Lecco", "Varese", "Pavia", "Lodi"].map((city) => (
                     <div key={city} className="text-center p-3 bg-muted/50 rounded-lg">
                       <span className="text-sm font-medium text-foreground">{city}</span>
                     </div>
                   ))}
                 </div>
                 <p className="text-center text-muted-foreground text-sm mt-6">
                   + Cremona, Mantova, Sondrio
                 </p>
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
                 Pronto a Conoscerci di Persona?
               </h2>
               <p className="text-lg text-muted-foreground mb-8">
                 Prenota una consulenza gratuita e scopri come possiamo trasformare il comfort della tua casa.
               </p>
               <Button variant="teal" size="lg" asChild>
                 <Link to="/contatti">Richiedi Preventivo Gratuito</Link>
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