 import { motion } from "framer-motion";
 import { Link } from "react-router-dom";
 import { ArrowRight } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Card, CardContent } from "@/components/ui/card";
 import type { ProductDetail } from "@/data/products";
 
 interface RelatedProductsProps {
   products: ProductDetail[];
 }
 
 export const RelatedProducts = ({ products }: RelatedProductsProps) => {
   if (products.length === 0) return null;
 
   return (
     <section className="py-20 bg-muted/30">
       <div className="max-w-7xl mx-auto px-4 sm:px-6">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-12"
         >
           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
             Prodotti Correlati
           </h2>
           <p className="text-muted-foreground text-lg">
             Scopri altri prodotti che potrebbero interessarti
           </p>
         </motion.div>
 
         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
           {products.map((product, index) => (
             <motion.div
               key={product.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
             >
               <Card className="group h-full bg-card hover:bg-card/80 border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden">
                 <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden">
                   {product.heroImage !== "/placeholder.svg" ? (
                     <img 
                       src={product.heroImage} 
                       alt={product.name}
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                     />
                   ) : (
                     <div className="w-full h-full flex items-center justify-center">
                       <span className="text-4xl font-bold text-primary/20">{product.name.charAt(0)}</span>
                     </div>
                   )}
                 </div>
 
                 <CardContent className="p-6">
                   <span className="text-xs font-medium text-primary uppercase tracking-wider">
                     {product.category === "infissi" ? "Infissi" : product.category === "accessori" ? "Accessori" : "Porte"}
                   </span>
                   <h3 className="text-xl font-bold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">
                     {product.name}
                   </h3>
                   <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                     {product.tagline}
                   </p>
 
                   <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary" asChild>
                     <Link to={`/prodotti/${product.id}`}>
                       Scopri di più
                       <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                     </Link>
                   </Button>
                 </CardContent>
               </Card>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };