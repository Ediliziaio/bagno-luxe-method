 import { motion } from "framer-motion";
 import { ArrowRight, Calendar, Clock } from "lucide-react";
 import { Card, CardContent } from "@/components/ui/card";
 import { Link } from "react-router-dom";
 
 interface ArticleCardProps {
   id: string;
   slug: string;
   title: string;
   excerpt: string;
   date: string;
   category: string;
   readingTime?: string;
   image?: string;
   index: number;
 }
 
 export const ArticleCard = ({ id, slug, title, excerpt, date, category, readingTime, image, index }: ArticleCardProps) => {
   return (
     <motion.div
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.5, delay: index * 0.1 }}
     >
       <Card className="group h-full bg-card hover:bg-card/80 border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden">
         {/* Image */}
         <div className="aspect-[16/9] bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden">
           {image ? (
             <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
           ) : (
             <div className="w-full h-full flex items-center justify-center">
               <span className="text-6xl">📰</span>
             </div>
           )}
           <div className="absolute top-4 left-4">
             <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider rounded-full">
               {category}
             </span>
           </div>
         </div>
 
         <CardContent className="p-6">
           <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
             <Calendar className="w-4 h-4" />
             <span>{date}</span>
             {readingTime && (
               <>
                 <span className="text-muted-foreground/50">•</span>
                 <Clock className="w-4 h-4" />
                 <span>{readingTime}</span>
               </>
             )}
           </div>
 
           <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
             {title}
           </h3>
 
           <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
             {excerpt}
           </p>
 
           <Link
             to={`/articoli/${slug}`}
             className="inline-flex items-center text-primary font-medium text-sm group/link hover:underline"
           >
             Leggi l'articolo
             <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
           </Link>
         </CardContent>
       </Card>
     </motion.div>
   );
 };