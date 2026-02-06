 import { motion } from "framer-motion";
 import { Button } from "@/components/ui/button";
 import { ArrowRight } from "lucide-react";
 import { Link } from "react-router-dom";
 import type { ProductDetail } from "@/data/products";
 
 interface ProductHeroProps {
   product: ProductDetail;
 }
 
 export const ProductHero = ({ product }: ProductHeroProps) => {
   return (
     <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center bg-gradient-to-br from-muted/50 to-background overflow-hidden">
       {/* Background pattern */}
       <div className="absolute inset-0 opacity-5">
         <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
         <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary rounded-full blur-3xl" />
       </div>
 
       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
         {/* Text content */}
         <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6 }}
         >
           <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 uppercase tracking-wider">
             {product.category === "infissi" ? "Infissi" : product.category === "accessori" ? "Accessori" : "Porte"}
           </span>
           
           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
             {product.name}
           </h1>
           
           <p className="text-xl md:text-2xl text-primary font-medium mb-6">
             {product.tagline}
           </p>
           
           <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-xl">
             {product.description}
           </p>
 
           <div className="flex flex-wrap gap-4">
             <Button variant="teal" size="lg" asChild>
               <Link to="/contatti">
                 Richiedi Preventivo
                 <ArrowRight className="ml-2 h-5 w-5" />
               </Link>
             </Button>
             <Button variant="outline" size="lg" asChild>
               <a href="#specifiche">
                 Vedi Specifiche
               </a>
             </Button>
           </div>
         </motion.div>
 
         {/* Image */}
         <motion.div
           initial={{ opacity: 0, x: 30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="relative"
         >
           <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-muted/50 shadow-2xl">
             {product.heroImage !== "/placeholder.svg" ? (
               <img 
                 src={product.heroImage} 
                 alt={product.name}
                 className="w-full h-full object-cover"
               />
             ) : (
               <div className="w-full h-full flex items-center justify-center">
                 <span className="text-8xl font-bold text-primary/20">{product.name.charAt(0)}</span>
               </div>
             )}
           </div>
           
           {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative md:absolute mt-4 md:mt-0 md:-bottom-4 md:-left-4 bg-primary text-primary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-lg inline-block"
            >
              <span className="text-xs sm:text-sm font-medium">Garanzia {product.specifications.find(s => s.label === "Garanzia")?.value || "10 anni"}</span>
            </motion.div>
         </motion.div>
       </div>
     </section>
   );
 };