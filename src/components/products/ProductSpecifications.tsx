 import { motion } from "framer-motion";
 import type { ProductSpecification } from "@/data/products";
 
 interface ProductSpecificationsProps {
   specifications: ProductSpecification[];
   productName: string;
 }
 
 export const ProductSpecifications = ({ specifications, productName }: ProductSpecificationsProps) => {
   return (
     <section id="specifiche" className="py-20 bg-muted/30">
       <div className="max-w-7xl mx-auto px-4 sm:px-6">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-12"
         >
           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
             Specifiche Tecniche
           </h2>
           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
             Tutti i dettagli tecnici di {productName}
           </p>
         </motion.div>
 
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-3xl mx-auto bg-card rounded-2xl border border-border/50 overflow-hidden shadow-lg"
         >
           <div className="divide-y divide-border/50">
             {specifications.map((spec, index) => (
               <motion.div
                 key={spec.label}
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.05 }}
                 className="flex justify-between items-center p-4 sm:p-5 hover:bg-muted/50 transition-colors"
               >
                 <span className="text-muted-foreground font-medium">
                   {spec.label}
                 </span>
                 <span className="text-foreground font-semibold text-right">
                   {spec.value}
                 </span>
               </motion.div>
             ))}
           </div>
         </motion.div>
       </div>
     </section>
   );
 };