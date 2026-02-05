 import { Link } from "react-router-dom";
 import { ChevronRight, Home } from "lucide-react";
 
 interface BreadcrumbItem {
   label: string;
   href?: string;
 }
 
 interface SEOBreadcrumbProps {
   items: BreadcrumbItem[];
 }
 
 export const SEOBreadcrumb = ({ items }: SEOBreadcrumbProps) => {
   return (
     <nav aria-label="Breadcrumb" className="py-4">
       <ol className="flex flex-wrap items-center gap-1.5 text-sm">
         <li className="flex items-center gap-1.5">
           <Link
             to="/"
             className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
           >
             <Home className="w-4 h-4" />
             <span className="sr-only">Home</span>
           </Link>
           <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
         </li>
         {items.map((item, index) => (
           <li key={index} className="flex items-center gap-1.5">
             {item.href ? (
               <Link
                 to={item.href}
                 className="text-muted-foreground hover:text-primary transition-colors"
               >
                 {item.label}
               </Link>
             ) : (
               <span className="text-foreground font-medium">{item.label}</span>
             )}
             {index < items.length - 1 && (
               <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
             )}
           </li>
         ))}
       </ol>
     </nav>
   );
 };