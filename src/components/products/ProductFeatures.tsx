 import { motion } from "framer-motion";
 import * as LucideIcons from "lucide-react";
 import type { ProductFeature } from "@/data/products";
 
 interface ProductFeaturesProps {
   features: ProductFeature[];
   productName: string;
 }
 
 export const ProductFeatures = ({ features, productName }: ProductFeaturesProps) => {
   const getIcon = (iconName: string) => {
     const Icon = (LucideIcons as any)[iconName];
     return Icon ? <Icon className="w-8 h-8" /> : <LucideIcons.Star className="w-8 h-8" />;
   };
 
   return (
     <section className="py-20 bg-background">
       <div className="max-w-7xl mx-auto px-4 sm:px-6">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-12"
         >
           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
             Caratteristiche Principali
           </h2>
           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
             Scopri cosa rende {productName} la scelta ideale per la tua casa
           </p>
         </motion.div>
 
         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
           {features.map((feature, index) => (
             <motion.div
               key={feature.title}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className="group p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
             >
               <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                 {getIcon(feature.icon)}
               </div>
               <h3 className="text-xl font-semibold text-foreground mb-2">
                 {feature.title}
               </h3>
               <p className="text-muted-foreground">
                 {feature.description}
               </p>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };