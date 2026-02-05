 import { useState } from "react";
 import { motion } from "framer-motion";
 import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
 import { ProductCard } from "./ProductCard";
 
 interface Product {
   id: string;
   name: string;
   description: string;
   features?: string[];
   image?: string;
 }
 
 interface ProductCategory {
   name: string;
   products: Product[];
 }
 
 const productCategories: Record<string, ProductCategory> = {
   infissi: {
     name: "Infissi",
     products: [
       { id: "domus", name: "Domus", description: "Il nostro sistema principale a 76mm con tripla guarnizione. Massimo isolamento termico e acustico per il comfort della tua casa.", features: ["76mm", "Acciaio 2mm", "3 guarnizioni"] },
       { id: "lumier", name: "Lumier", description: "Finestre progettate per massimizzare la luce naturale. Telaio sottile e vetrate ampie per ambienti luminosi.", features: ["Telaio sottile", "Vetro grande", "Design minimale"] },
       { id: "idole", name: "Idole", description: "La linea premium per chi cerca l'eccellenza. Design esclusivo e finiture personalizzabili per interni di prestigio.", features: ["Finiture luxury", "Personalizzabile", "Design italiano"] },
       { id: "alum", name: "Alum", description: "Infissi in alluminio ad alte prestazioni. Resistenza superiore e ampia gamma di colori RAL disponibili.", features: ["Alluminio", "Resistenza", "Colori RAL"] },
       { id: "legno-alluminio", name: "Legno Alluminio", description: "Il calore estetico del legno all'interno e la resistenza dell'alluminio all'esterno. Il meglio di entrambi i mondi.", features: ["Legno interno", "Alluminio esterno", "Isolamento top"] },
     ]
   },
   oscuranti: {
     name: "Oscuranti e Accessori",
     products: [
       { id: "persiane", name: "Persiane", description: "Protezione solare e privacy in stile tradizionale italiano. Disponibili in legno, alluminio e PVC.", features: ["Legno", "Alluminio", "PVC"] },
       { id: "tapparelle", name: "Tapparelle", description: "Avvolgibili motorizzate e manuali per ogni esigenza. Isolamento termico e protezione dagli agenti atmosferici.", features: ["Motorizzate", "Manuali", "Coibentate"] },
       { id: "zanzariere", name: "Zanzariere", description: "Protezione dagli insetti tutto l'anno senza rinunciare all'aria fresca. Modelli a rullo, plissettate e fisse.", features: ["A rullo", "Plissettate", "Fisse"] },
       { id: "cassonetti", name: "Cassonetti", description: "Cassonetti coibentati anti ponte termico. Eliminano dispersioni e condense per un comfort ottimale.", features: ["Coibentati", "Anti condensa", "Isolanti"] },
     ]
   },
   porte: {
     name: "Porte",
     products: [
       { id: "porte-interno", name: "Porte da Interno", description: "Design e funzionalità per ogni ambiente della tua casa. Finiture moderne e classiche, a battente e scorrevoli.", features: ["Battente", "Scorrevoli", "Personalizzabili"] },
       { id: "porta-blindata", name: "Porta Blindata", description: "Sicurezza certificata classe 3 per proteggere la tua famiglia. Design elegante che non rinuncia all'estetica.", features: ["Classe 3", "Certificata", "Design elegante"] },
     ]
   }
 };
 
 export const ProductGrid = () => {
   const [activeCategory, setActiveCategory] = useState("tutti");
 
   const allProducts = Object.values(productCategories).flatMap(cat => cat.products);
 
   const getProducts = () => {
     if (activeCategory === "tutti") return allProducts;
     return productCategories[activeCategory]?.products || [];
   };
 
   return (
     <section className="py-16 md:py-24 bg-background">
       <div className="max-w-7xl mx-auto px-4 sm:px-6">
         {/* Category Tabs */}
         <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
           <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto p-0 mb-12">
             <TabsTrigger
               value="tutti"
               className="px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full border border-border/50 data-[state=active]:border-primary transition-all"
             >
               Tutti
             </TabsTrigger>
             {Object.entries(productCategories).map(([key, category]) => (
               <TabsTrigger
                 key={key}
                 value={key}
                 className="px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full border border-border/50 data-[state=active]:border-primary transition-all"
               >
                 {category.name}
               </TabsTrigger>
             ))}
           </TabsList>
 
           {/* Products Grid */}
           <motion.div
             key={activeCategory}
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.3 }}
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
           >
             {getProducts().map((product, index) => (
               <ProductCard key={product.id} {...product} index={index} />
             ))}
           </motion.div>
         </Tabs>
       </div>
     </section>
   );
 };