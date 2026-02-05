 import { motion } from "framer-motion";
 import { ArrowRight } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Card, CardContent } from "@/components/ui/card";
 
 interface ProductCardProps {
   id: string;
   name: string;
   description: string;
   features?: string[];
   image?: string;
   index: number;
 }
 
 export const ProductCard = ({ name, description, features, image, index }: ProductCardProps) => {
   return (
     <motion.div
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.5, delay: index * 0.1 }}
     >
       <Card className="group h-full bg-card hover:bg-card/80 border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden">
         {/* Image placeholder */}
         <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden">
           {image ? (
             <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
           ) : (
             <div className="w-full h-full flex items-center justify-center">
               <span className="text-4xl font-bold text-primary/20">{name.charAt(0)}</span>
             </div>
           )}
           <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
         </div>
 
         <CardContent className="p-6">
           <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
             {name}
           </h3>
           <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
             {description}
           </p>
 
           {features && features.length > 0 && (
             <div className="flex flex-wrap gap-2 mb-4">
               {features.slice(0, 3).map((feature, i) => (
                 <span
                   key={i}
                   className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                 >
                   {feature}
                 </span>
               ))}
             </div>
           )}
 
           <Button variant="ghost" size="sm" className="group/btn p-0 h-auto text-primary hover:text-primary">
             Scopri di più
             <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
           </Button>
         </CardContent>
       </Card>
     </motion.div>
   );
 };