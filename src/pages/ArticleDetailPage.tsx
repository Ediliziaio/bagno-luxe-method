 import { useParams, Navigate, Link } from "react-router-dom";
 import { HomeHeader } from "@/components/HomeHeader";
 import { Footer } from "@/components/Footer";
 import { SEOHead, createArticleSchema, createBreadcrumbSchema } from "@/components/SEOHead";
 import { SEOBreadcrumb } from "@/components/shared/SEOBreadcrumb";
 import { getArticleBySlug, getRelatedArticles, Article } from "@/data/articles";
 import { motion } from "framer-motion";
 import { Calendar, Clock, User, ArrowLeft, ArrowRight, Tag } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
const TableOfContents = ({ content }: { content: string }) => {
  // Extract headings from content
  const headings = content.match(/<h2[^>]*id="([^"]*)"[^>]*>([^<]*)<\/h2>/g) || [];
  const toc = headings.map((heading) => {
    const idMatch = heading.match(/id="([^"]*)"/);
    const textMatch = heading.match(/>([^<]*)</);
    return {
      id: idMatch?.[1] || "",
      text: textMatch?.[1] || "",
    };
  });

  if (toc.length === 0) return null;

  return (
    <nav className="bg-muted/50 rounded-xl p-8 mb-14">
      <h3 className="font-bold text-foreground mb-5 text-lg">Indice</h3>
      <ul className="space-y-3">
        {toc.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
 
 const AuthorBox = ({ author }: { author: Article["author"] }) => (
   <div className="bg-muted/50 rounded-xl p-6 flex items-center gap-4">
     <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
       <User className="w-8 h-8 text-primary" />
     </div>
     <div>
       <p className="font-bold text-foreground">{author.name}</p>
       <p className="text-sm text-muted-foreground">{author.role}</p>
     </div>
   </div>
 );
 
const RelatedArticlesSection = ({ articles }: { articles: Article[] }) => {
  if (articles.length === 0) return null;

  return (
    <section className="py-16 border-t border-border/50">
      <h2 className="text-2xl font-bold text-foreground mb-8">Articoli Correlati</h2>
       <div className="grid md:grid-cols-2 gap-6">
         {articles.map((article) => (
           <Link
             key={article.id}
             to={`/articoli/${article.slug}`}
             className="group bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-colors"
           >
             <span className="text-xs text-primary font-medium uppercase tracking-wider">
               {article.category}
             </span>
             <h3 className="text-lg font-bold text-foreground mt-2 group-hover:text-primary transition-colors">
               {article.title}
             </h3>
             <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
               {article.excerpt}
             </p>
           </Link>
         ))}
       </div>
     </section>
   );
 };
 
 const ArticleDetailPage = () => {
   const { articleSlug } = useParams<{ articleSlug: string }>();
 
   if (!articleSlug) {
     return <Navigate to="/articoli" replace />;
   }
 
   const article = getArticleBySlug(articleSlug);
 
   if (!article) {
     return <Navigate to="/articoli" replace />;
   }
 
   const relatedArticles = getRelatedArticles(article.id);
   const articleUrl = `https://iprofili.it/articoli/${article.slug}`;
 
   const breadcrumbItems = [
     { label: "Articoli", href: "/articoli" },
     { label: article.category, href: `/articoli?categoria=${article.category}` },
     { label: article.title },
   ];
 
   const articleSchema = createArticleSchema({
     title: article.title,
     description: article.metaDescription,
     datePublished: article.dateISO,
     author: article.author.name,
     image: article.image,
     url: articleUrl,
   });
 
   const breadcrumbSchema = createBreadcrumbSchema([
     { name: "Home", url: "https://iprofili.it" },
     { name: "Articoli", url: "https://iprofili.it/articoli" },
     { name: article.title, url: articleUrl },
   ]);
 
   return (
     <div className="min-h-screen bg-background">
       <SEOHead
         title={article.metaTitle}
         description={article.metaDescription}
         canonical={articleUrl}
         ogType="article"
         article={{
           publishedTime: article.dateISO,
           author: article.author.name,
           section: article.category,
         }}
         schema={{ ...articleSchema, ...breadcrumbSchema }}
       />
 
       <HomeHeader />
 
       <main className="pt-24 md:pt-32">
         {/* Breadcrumb */}
         <div className="bg-muted/30">
           <div className="max-w-4xl mx-auto px-4 sm:px-6">
             <SEOBreadcrumb items={breadcrumbItems} />
           </div>
         </div>
 
         {/* Article Header */}
         <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-14"
            >
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-5">
                {article.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
                {article.title}
              </h1>
             <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
               <span className="flex items-center gap-1.5">
                 <Calendar className="w-4 h-4" />
                 {article.date}
               </span>
               <span className="flex items-center gap-1.5">
                 <Clock className="w-4 h-4" />
                 {article.readingTime} di lettura
               </span>
               <span className="flex items-center gap-1.5">
                 <User className="w-4 h-4" />
                 {article.author.name}
               </span>
             </div>
           </motion.header>
 
            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="aspect-[16/9] bg-muted rounded-2xl mb-14 overflow-hidden"
            >
             <img
               src={article.image}
               alt={article.imageAlt}
               className="w-full h-full object-cover"
             />
           </motion.div>
 
           {/* Table of Contents */}
           <TableOfContents content={article.content} />
 
            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose prose-lg max-w-none 
                prose-headings:text-foreground prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-14 prose-h2:mb-6
                prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground
                prose-ul:text-muted-foreground prose-ul:my-6 
                prose-ol:text-muted-foreground prose-ol:my-6
                prose-li:my-2"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
 
            {/* Tags */}
            <div className="flex flex-wrap items-center gap-3 mt-16 pt-8 border-t border-border/50">
             <Tag className="w-4 h-4 text-muted-foreground" />
             {article.tags.map((tag) => (
               <span
                 key={tag}
                 className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
               >
                 {tag}
               </span>
             ))}
           </div>
 
            {/* Author Box */}
            <div className="mt-14">
              <AuthorBox author={article.author} />
            </div>

            {/* CTA */}
            <div className="mt-16 bg-primary/5 rounded-2xl p-10 text-center">
             <h3 className="text-2xl font-bold text-foreground mb-3">
               Vuoi saperne di più?
             </h3>
             <p className="text-muted-foreground mb-6">
               I nostri esperti sono pronti a rispondere alle tue domande e a fornirti un preventivo gratuito.
             </p>
             <Button variant="teal" size="lg" asChild>
               <Link to="/contatti">Richiedi Consulenza Gratuita</Link>
             </Button>
           </div>
 
           {/* Related Articles */}
           <RelatedArticlesSection articles={relatedArticles} />
 
           {/* Back to Articles */}
           <div className="mt-12 pt-6 border-t border-border/50">
             <Button variant="ghost" asChild>
               <Link to="/articoli" className="flex items-center gap-2">
                 <ArrowLeft className="w-4 h-4" />
                 Torna agli Articoli
               </Link>
             </Button>
           </div>
         </article>
       </main>
 
       <Footer />
     </div>
   );
 };
 
 export default ArticleDetailPage;