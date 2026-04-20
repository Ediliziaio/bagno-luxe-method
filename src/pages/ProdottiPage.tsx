 import { HomeHeader } from "@/components/HomeHeader";
 import { Footer } from "@/components/Footer";
 import { PageHero } from "@/components/shared/PageHero";
 import { SEOHead, createBreadcrumbSchema } from "@/components/SEOHead";
 import { SEOBreadcrumb } from "@/components/shared/SEOBreadcrumb";
 import { ProductGrid } from "@/components/products/ProductGrid";
 import { Button } from "@/components/ui/button";
 import { motion } from "framer-motion";
 import { Phone } from "lucide-react";
 import { Link } from "react-router-dom";
 
 const ProdottiPage = () => {
   const breadcrumbSchema = createBreadcrumbSchema([
     { name: "Home", url: "https://www.i-profili.it" },
     { name: "Prodotti", url: "https://www.i-profili.it/prodotti" },
   ]);
 
   return (
     <div className="min-h-screen bg-background">
        <SEOHead
          title="Catalogo Infissi PVC Alluminio Legno | I Profili"
          description="Scopri la gamma completa di infissi: Domus, Lumier, Idole, Alum. Finestre, porte-finestre, persiane e tapparelle. Preventivo gratuito in Lombardia."
          keywords="catalogo infissi PVC, finestre alluminio Lombardia, serramenti legno-alluminio, porte finestre Milano, persiane alluminio, tapparelle motorizzate, infissi Domus, finestre Lumier"
          canonical="https://www.i-profili.it/prodotti"
          schema={breadcrumbSchema}
        />
       <HomeHeader />
 
       <main className="pt-24 md:pt-32">
         <div className="bg-muted/30">
           <div className="max-w-7xl mx-auto px-4 sm:px-6">
             <SEOBreadcrumb items={[{ label: "Prodotti" }]} />
           </div>
         </div>
 
         <PageHero
           badge="Catalogo"
           title="I Nostri Prodotti"
           subtitle="Infissi in PVC, alluminio e legno-alluminio di alta qualità. Scopri la soluzione perfetta per la tua casa."
         />
 
         <ProductGrid />
 
         {/* CTA Section */}
         <section className="py-16 md:py-24 bg-primary/5">
           <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
             >
               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                 Non sai quale prodotto scegliere?
               </h2>
               <p className="text-lg text-muted-foreground mb-8">
                 I nostri consulenti ti aiuteranno a trovare la soluzione ideale per le tue esigenze e il tuo budget.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Button variant="teal" size="lg" asChild>
                   <Link to="/contatti">
                     Richiedi Consulenza Gratuita
                   </Link>
                 </Button>
                 <Button variant="tealOutline" size="lg" asChild>
                   <a href="tel:+390212345678">
                     <Phone className="w-4 h-4 mr-2" />
                     Chiama Ora
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
 
 export default ProdottiPage;