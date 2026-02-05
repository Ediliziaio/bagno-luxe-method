 import { HomeHeader } from "@/components/HomeHeader";
 import { Footer } from "@/components/Footer";
 import { PageHero } from "@/components/shared/PageHero";
 import { SEOHead, createBreadcrumbSchema } from "@/components/SEOHead";
 import { SEOBreadcrumb } from "@/components/shared/SEOBreadcrumb";
 import { Button } from "@/components/ui/button";
 import { motion } from "framer-motion";
 import { Shield, Clock, FileText, AlertTriangle, Phone } from "lucide-react";
 import { Link } from "react-router-dom";
 
 const guarantees = [
   {
     icon: Shield,
     title: "10 Anni su Profili e Ferramenta",
     description: "Garanzia completa su tutti i componenti strutturali dei serramenti."
   },
   {
     icon: Clock,
     title: "5 Anni sulla Posa in Opera",
     description: "Copertura totale su installazione e manodopera."
   },
   {
     icon: FileText,
     title: "Tutto Scritto nel Contratto",
     description: "Nessuna clausola nascosta, tutto nero su bianco prima della firma."
   },
   {
     icon: AlertTriangle,
     title: "Penali per Ritardi",
     description: "Se non rispettiamo le tempistiche, paga I Profili, non tu."
   }
 ];
 
 const comparison = [
   { aspect: "Garanzia profili", iprofili: "10 anni", others: "2-5 anni" },
   { aspect: "Garanzia posa", iprofili: "5 anni", others: "1 anno o nulla" },
   { aspect: "Penali per ritardi", iprofili: "✓ Incluse", others: "✗ Mai" },
   { aspect: "Preventivo dettagliato", iprofili: "✓ Sempre", others: "Spesso generico" },
   { aspect: "Pratica ENEA inclusa", iprofili: "✓ Gratuita", others: "A pagamento" },
   { aspect: "Assistenza post-vendita", iprofili: "Diretta", others: "Call center" }
 ];
 
 const GaranziePage = () => {
   const breadcrumbSchema = createBreadcrumbSchema([
     { name: "Home", url: "https://iprofili.it" },
     { name: "Garanzie", url: "https://iprofili.it/garanzie" },
   ]);
 
   return (
     <div className="min-h-screen bg-background">
       <SEOHead
         title="Garanzie 10 Anni Infissi | I Profili Serramenti"
         description="Garanzia 10 anni su profili e ferramenta, 5 anni sulla posa. Penali per ritardi scritte in contratto. Trasparenza totale sui tuoi serramenti."
         canonical="https://iprofili.it/garanzie"
         schema={breadcrumbSchema}
       />
       <HomeHeader />
 
       <main className="pt-24 md:pt-32">
         <div className="bg-muted/30">
           <div className="max-w-7xl mx-auto px-4 sm:px-6">
             <SEOBreadcrumb items={[{ label: "Garanzie" }]} />
           </div>
         </div>
 
         <PageHero
           badge="Garanzie"
           title="Garanzie Blindate"
           subtitle="Non promettiamo a voce. Tutto è scritto, firmato e garantito. Perché la tua tranquillità viene prima di tutto."
         />
 
         {/* Guarantees Grid */}
         <section className="py-16 md:py-24 bg-background">
           <div className="max-w-7xl mx-auto px-4 sm:px-6">
             <div className="grid md:grid-cols-2 gap-6">
               {guarantees.map((guarantee, index) => (
                 <motion.div
                   key={guarantee.title}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: index * 0.1 }}
                   className="bg-card border border-border/50 rounded-xl p-8 hover:border-primary/30 transition-colors"
                 >
                   <div className="flex items-start gap-4">
                     <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                       <guarantee.icon className="w-7 h-7 text-primary" />
                     </div>
                     <div>
                       <h3 className="text-xl font-bold text-foreground mb-2">{guarantee.title}</h3>
                       <p className="text-muted-foreground">{guarantee.description}</p>
                     </div>
                   </div>
                 </motion.div>
               ))}
             </div>
           </div>
         </section>
 
         {/* Comparison Table */}
         <section className="py-16 md:py-24 bg-muted/30">
           <div className="max-w-5xl mx-auto px-4 sm:px-6">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-12"
             >
               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                 I Profili vs Altri
               </h2>
               <p className="text-lg text-muted-foreground">
                 Confronta le nostre garanzie con la media del mercato.
               </p>
             </motion.div>
 
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="bg-card border border-border/50 rounded-2xl overflow-hidden"
             >
               <div className="overflow-x-auto">
                 <table className="w-full">
                   <thead>
                     <tr className="border-b border-border/50">
                       <th className="text-left p-4 md:p-6 text-muted-foreground font-medium">Aspetto</th>
                       <th className="text-center p-4 md:p-6 bg-primary/5">
                         <span className="text-primary font-bold">I Profili</span>
                       </th>
                       <th className="text-center p-4 md:p-6 text-muted-foreground font-medium">Altri</th>
                     </tr>
                   </thead>
                   <tbody>
                     {comparison.map((row, index) => (
                       <tr key={row.aspect} className={index < comparison.length - 1 ? "border-b border-border/30" : ""}>
                         <td className="p-4 md:p-6 text-foreground font-medium">{row.aspect}</td>
                         <td className="p-4 md:p-6 text-center bg-primary/5">
                           <span className="text-primary font-semibold">{row.iprofili}</span>
                         </td>
                         <td className="p-4 md:p-6 text-center text-muted-foreground">{row.others}</td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
             </motion.div>
           </div>
         </section>
 
         {/* Download & CTA */}
         <section className="py-16 md:py-24 bg-primary text-primary-foreground">
           <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
             >
               <h2 className="text-3xl md:text-4xl font-bold mb-4">
                 Vuoi Vedere le Garanzie per Iscritto?
               </h2>
               <p className="text-lg text-primary-foreground/80 mb-8">
                 Richiedi un preventivo e riceverai il nostro contratto di garanzia completo.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Button
                   size="lg"
                   className="bg-white text-primary hover:bg-white/90"
                   asChild
                 >
                   <Link to="/contatti">
                     Richiedi Preventivo con Garanzie
                   </Link>
                 </Button>
                 <Button
                   variant="outline"
                   size="lg"
                   className="border-white text-white hover:bg-white/10"
                   asChild
                 >
                   <a href="tel:+390212345678">
                     <Phone className="w-4 h-4 mr-2" />
                     Chiama per Info
                   </a>
                 </Button>
               </div>
             </motion.div>
           </div>
         </section>
       </main>
 
       <Footer />
     </div>
   );
 };
 
 export default GaranziePage;