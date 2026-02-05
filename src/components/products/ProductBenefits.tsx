 import { motion } from "framer-motion";
 import { Check } from "lucide-react";
 
 interface ProductBenefitsProps {
   benefits: string[];
   applications: string[];
   productName: string;
 }
 
 export const ProductBenefits = ({ benefits, applications, productName }: ProductBenefitsProps) => {
   return (
     <section className="py-20 bg-background">
       <div className="max-w-7xl mx-auto px-4 sm:px-6">
         <div className="grid lg:grid-cols-2 gap-12">
           {/* Benefits */}
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
             <h2 className="text-3xl font-bold text-foreground mb-6">
               Vantaggi Chiave
             </h2>
             <p className="text-muted-foreground mb-8">
               Perché scegliere {productName} per la tua casa
             </p>
             
             <ul className="space-y-4">
               {benefits.map((benefit, index) => (
                 <motion.li
                   key={index}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.1 }}
                   className="flex items-start gap-3"
                 >
                   <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                     <Check className="w-4 h-4" />
                   </div>
                   <span className="text-foreground">{benefit}</span>
                 </motion.li>
               ))}
             </ul>
           </motion.div>
 
           {/* Applications */}
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
             <h2 className="text-3xl font-bold text-foreground mb-6">
               Applicazioni Ideali
             </h2>
             <p className="text-muted-foreground mb-8">
               Dove {productName} dà il meglio di sé
             </p>
             
             <div className="grid gap-3">
               {applications.map((app, index) => (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.1 }}
                   className="p-4 bg-muted/50 rounded-lg border border-border/30 hover:border-primary/30 transition-colors"
                 >
                   <span className="text-foreground font-medium">{app}</span>
                 </motion.div>
               ))}
             </div>
           </motion.div>
         </div>
       </div>
     </section>
   );
 };