 import { HomeHeader } from "@/components/HomeHeader";
 import { Footer } from "@/components/Footer";
 import { PageHero } from "@/components/shared/PageHero";
 import { ArticleCard } from "@/components/articles/ArticleCard";
 import { motion } from "framer-motion";
 import { useState } from "react";
 
 const articles = [
   {
     id: "come-scegliere-infissi",
     title: "Come Scegliere gli Infissi Giusti per la Tua Casa",
     excerpt: "Una guida completa per orientarsi tra PVC, alluminio e legno-alluminio. Scopri quale materiale è più adatto alle tue esigenze e al tuo budget.",
     date: "15 Gennaio 2025",
     category: "Guide"
   },
   {
     id: "bonus-50-2025",
     title: "Bonus Infissi 50%: Tutto Quello che Devi Sapere nel 2025",
     excerpt: "La detrazione fiscale del 50% è ancora attiva ma potrebbe scendere al 36%. Ecco come approfittarne prima che sia troppo tardi.",
     date: "10 Gennaio 2025",
     category: "Bonus Fiscali"
   },
   {
     id: "risparmio-energetico",
     title: "Quanto Puoi Risparmiare con Infissi ad Alta Efficienza?",
     excerpt: "Analisi reale del risparmio in bolletta dopo la sostituzione dei serramenti. Dati e testimonianze dei nostri clienti.",
     date: "5 Gennaio 2025",
     category: "Risparmio"
   },
   {
     id: "direttiva-case-green",
     title: "Direttiva Case Green: Cosa Cambia per i Proprietari di Casa",
     excerpt: "L'Europa impone nuovi standard energetici. Ecco cosa significa per la tua abitazione e come prepararti in anticipo.",
     date: "28 Dicembre 2024",
     category: "Normative"
   },
   {
     id: "errori-sostituzione-infissi",
     title: "5 Errori da Evitare nella Sostituzione degli Infissi",
     excerpt: "Gli sbagli più comuni che fanno lievitare i costi e rovinano il risultato finale. Impara dagli errori degli altri.",
     date: "20 Dicembre 2024",
     category: "Guide"
   },
   {
     id: "pvc-vs-alluminio",
     title: "PVC vs Alluminio: Quale Scegliere?",
     excerpt: "Confronto dettagliato tra i due materiali più diffusi. Pro, contro e situazioni ideali per ciascuno.",
     date: "15 Dicembre 2024",
     category: "Guide"
   }
 ];
 
 const categories = ["Tutti", "Guide", "Bonus Fiscali", "Risparmio", "Normative"];
 
 const ArticoliPage = () => {
   const [activeCategory, setActiveCategory] = useState("Tutti");
 
   const filteredArticles = activeCategory === "Tutti"
     ? articles
     : articles.filter(article => article.category === activeCategory);
 
   return (
     <div className="min-h-screen bg-background">
       <HomeHeader />
 
       <main className="pt-16 md:pt-24">
         <PageHero
           badge="Blog"
           title="Articoli & Approfondimenti"
           subtitle="Guide pratiche, novità fiscali e consigli per prendere decisioni informate sui tuoi serramenti."
         />
 
         {/* Category Filters */}
         <section className="py-8 bg-background border-b border-border/50">
           <div className="max-w-7xl mx-auto px-4 sm:px-6">
             <div className="flex flex-wrap justify-center gap-3">
               {categories.map((category) => (
                 <button
                   key={category}
                   onClick={() => setActiveCategory(category)}
                   className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                     activeCategory === category
                       ? "bg-primary text-primary-foreground"
                       : "bg-muted text-muted-foreground hover:bg-muted/80"
                   }`}
                 >
                   {category}
                 </button>
               ))}
             </div>
           </div>
         </section>
 
         {/* Articles Grid */}
         <section className="py-16 md:py-24 bg-background">
           <div className="max-w-7xl mx-auto px-4 sm:px-6">
             <motion.div
               key={activeCategory}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.3 }}
               className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
             >
               {filteredArticles.map((article, index) => (
                 <ArticleCard key={article.id} {...article} index={index} />
               ))}
             </motion.div>
 
             {filteredArticles.length === 0 && (
               <div className="text-center py-16">
                 <p className="text-muted-foreground">Nessun articolo in questa categoria.</p>
               </div>
             )}
           </div>
         </section>
       </main>
 
       <Footer />
     </div>
   );
 };
 
 export default ArticoliPage;