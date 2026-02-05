 import { HomeHeader } from "@/components/HomeHeader";
 import { Footer } from "@/components/Footer";
 import { PageHero } from "@/components/shared/PageHero";
 import { SEOHead, createBreadcrumbSchema } from "@/components/SEOHead";
 import { SEOBreadcrumb } from "@/components/shared/SEOBreadcrumb";
 import { HomeContact } from "@/components/home/HomeContact";
 import { motion } from "framer-motion";
 import { Phone, Mail, MapPin, Clock } from "lucide-react";
 
 const contactInfo = [
   {
     icon: Phone,
     title: "Telefono",
     value: "+39 02 1234 5678",
     href: "tel:+390212345678"
   },
   {
     icon: Mail,
     title: "Email",
     value: "info@iprofili.it",
     href: "mailto:info@iprofili.it"
   },
   {
     icon: MapPin,
     title: "Zona Servita",
     value: "Tutta la Lombardia",
     href: null
   },
   {
     icon: Clock,
     title: "Orari",
     value: "Lun-Ven: 9:00-18:00",
     href: null
   }
 ];
 
 const ContattiPage = () => {
   const breadcrumbSchema = createBreadcrumbSchema([
     { name: "Home", url: "https://iprofili.it" },
     { name: "Contatti", url: "https://iprofili.it/contatti" },
   ]);
 
   return (
     <div className="min-h-screen bg-background">
       <SEOHead
         title="Contatti - Preventivo Gratuito Infissi | I Profili"
         description="Richiedi un preventivo gratuito per i tuoi infissi. Sopralluogo in tutta la Lombardia. Risposta entro 48 ore. Chiama o compila il form."
         canonical="https://iprofili.it/contatti"
         schema={breadcrumbSchema}
       />
       <HomeHeader />
 
       <main className="pt-24 md:pt-32">
         <div className="bg-muted/30">
           <div className="max-w-7xl mx-auto px-4 sm:px-6">
             <SEOBreadcrumb items={[{ label: "Contatti" }]} />
           </div>
         </div>
 
         <PageHero
           badge="Contatti"
           title="Parliamo del Tuo Progetto"
           subtitle="Siamo qui per rispondere alle tue domande e aiutarti a trovare la soluzione perfetta per la tua casa."
         />
 
         {/* Contact Info Cards */}
         <section className="py-16 bg-background">
           <div className="max-w-7xl mx-auto px-4 sm:px-6">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {contactInfo.map((info, index) => (
                 <motion.div
                   key={info.title}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: index * 0.1 }}
                   className="bg-card border border-border/50 rounded-xl p-6 text-center hover:border-primary/30 transition-colors"
                 >
                   <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                     <info.icon className="w-6 h-6 text-primary" />
                   </div>
                   <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                   {info.href ? (
                     <a
                       href={info.href}
                       className="text-primary hover:underline font-medium"
                     >
                       {info.value}
                     </a>
                   ) : (
                     <p className="text-muted-foreground">{info.value}</p>
                   )}
                 </motion.div>
               ))}
             </div>
           </div>
         </section>
 
         {/* Contact Form (reused) */}
         <HomeContact />
 
         {/* Map / Zone Section */}
         <section className="py-16 md:py-24 bg-muted/30">
           <div className="max-w-7xl mx-auto px-4 sm:px-6">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-12"
             >
               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                 Dove Operiamo
               </h2>
               <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                 Serviamo tutte le province della Lombardia con sopralluogo gratuito.
               </p>
             </motion.div>
 
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="bg-card border border-border/50 rounded-2xl p-8 md:p-12"
             >
               <div className="grid md:grid-cols-3 gap-8">
                 <div>
                   <h3 className="font-bold text-foreground mb-4">Province Principali</h3>
                   <ul className="space-y-2 text-muted-foreground">
                     <li>• Milano</li>
                     <li>• Monza e Brianza</li>
                     <li>• Bergamo</li>
                     <li>• Brescia</li>
                   </ul>
                 </div>
                 <div>
                   <h3 className="font-bold text-foreground mb-4">Altre Province</h3>
                   <ul className="space-y-2 text-muted-foreground">
                     <li>• Como</li>
                     <li>• Lecco</li>
                     <li>• Varese</li>
                     <li>• Pavia</li>
                   </ul>
                 </div>
                 <div>
                   <h3 className="font-bold text-foreground mb-4">Zone Estese</h3>
                   <ul className="space-y-2 text-muted-foreground">
                     <li>• Cremona</li>
                     <li>• Mantova</li>
                     <li>• Lodi</li>
                     <li>• Sondrio</li>
                   </ul>
                 </div>
               </div>
             </motion.div>
           </div>
         </section>
       </main>
 
       <Footer />
     </div>
   );
 };
 
 export default ContattiPage;