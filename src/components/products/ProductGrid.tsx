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
      { id: "domus", name: "Domus", description: "Il nostro sistema principale a 76mm con tripla guarnizione. Massimo isolamento termico e acustico per il comfort della tua casa.", features: ["76mm", "Acciaio 2mm", "3 guarnizioni"], image: "https://www.i-profili.it/wp-content/uploads/2024/09/quanto-costa-una-finestra-in-pvc.jpg" },
      { id: "lumier", name: "Lumier", description: "Finestre progettate per massimizzare la luce naturale. Telaio sottile e vetrate ampie per ambienti luminosi.", features: ["Telaio sottile", "Vetro grande", "Design minimale"], image: "https://www.i-profili.it/wp-content/uploads/2024/11/okna-i-drzwi-balkonowe-iglo-light.webp" },
      { id: "idole", name: "Idole", description: "La linea premium per chi cerca l'eccellenza. Design esclusivo e finiture personalizzabili per interni di prestigio.", features: ["Finiture luxury", "Personalizzabile", "Design italiano"], image: "https://www.i-profili.it/wp-content/uploads/2024/09/WnD-finestra-pvc-infissi-aluskin-1.webp" },
      { id: "alum", name: "Alum", description: "Infissi in alluminio ad alte prestazioni. Resistenza superiore e ampia gamma di colori RAL disponibili.", features: ["Alluminio", "Resistenza", "Colori RAL"], image: "https://www.i-profili.it/wp-content/uploads/2024/11/sitogallerytempra1000x1000-292.jpg" },
      { id: "legno-alluminio", name: "Legno Alluminio", description: "Il calore estetico del legno all'interno e la resistenza dell'alluminio all'esterno. Il meglio di entrambi i mondi.", features: ["Legno interno", "Alluminio esterno", "Isolamento top"], image: "https://www.i-profili.it/wp-content/uploads/2024/11/skywood-evo-original-ambientato-letto-1.jpg" },
    ]
  },
  oscuranti: {
    name: "Oscuranti e Accessori",
    products: [
      { id: "persiane", name: "Persiane", description: "Protezione solare e privacy in stile tradizionale italiano. Disponibili in legno, alluminio e PVC.", features: ["Legno", "Alluminio", "PVC"], image: "https://www.dledil.com/wp-content/uploads/2021/06/persiane-alluminio-4.jpg" },
      { id: "tapparelle", name: "Tapparelle", description: "Avvolgibili motorizzate e manuali per ogni esigenza. Isolamento termico e protezione dagli agenti atmosferici.", features: ["Motorizzate", "Manuali", "Coibentate"], image: "https://sunsystemgroupsrl.it/wp-content/uploads/2023/11/tapparella-alluminio-bianca-miniorienta-mvline.jpg" },
      { id: "zanzariere", name: "Zanzariere", description: "Protezione dagli insetti tutto l'anno senza rinunciare all'aria fresca. Modelli a rullo, plissettate e fisse.", features: ["A rullo", "Plissettate", "Fisse"], image: "https://sunsystemgroupsrl.it/wp-content/uploads/2023/11/zanzariera-estetika.jpg" },
      { id: "cassonetti", name: "Cassonetti", description: "Cassonetti coibentati anti ponte termico. Eliminano dispersioni e condense per un comfort ottimale.", features: ["Coibentati", "Anti condensa", "Isolanti"], image: "https://italinfissi.it/wp-content/uploads/2024/03/cassonetti-pvc-02.png" },
    ]
  },
  porte: {
    name: "Porte",
    products: [
      { id: "porte-interno", name: "Porte da Interno", description: "Design e funzionalità per ogni ambiente della tua casa. Finiture moderne e classiche, a battente e scorrevoli.", features: ["Battente", "Scorrevoli", "Personalizzabili"], image: "https://www.garofoli.com/media/CACHE/images/images/products/gallery/MIRAQUADRA_04-MQ221FN_1200px/ec8aac28f78ddaf10cebd3f19e2ddc2a.jpg" },
      { id: "porta-blindata", name: "Porta Blindata", description: "Sicurezza certificata classe 3 per proteggere la tua famiglia. Design elegante che non rinuncia all'estetica.", features: ["Classe 3", "Certificata", "Design elegante"], image: "https://oikos.it/wp-content/uploads/2023/08/synua-porta-blindata-moderna-oikos-1.jpg" },
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