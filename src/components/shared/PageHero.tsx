 import { motion } from "framer-motion";
 
 interface PageHeroProps {
   title: string;
   subtitle?: string;
   badge?: string;
 }
 
 export const PageHero = ({ title, subtitle, badge }: PageHeroProps) => {
   return (
     <section className="relative py-24 md:py-32 bg-gradient-to-b from-muted/50 to-background overflow-hidden">
       {/* Decorative elements */}
       <div className="absolute inset-0 overflow-hidden">
         <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
       </div>
 
       <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="text-center"
         >
           {badge && (
             <motion.span
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.1 }}
               className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold uppercase tracking-widest rounded-full mb-6"
             >
               {badge}
             </motion.span>
           )}
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
             {title}
           </h1>
           {subtitle && (
             <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
               {subtitle}
             </p>
           )}
         </motion.div>
       </div>
     </section>
   );
 };