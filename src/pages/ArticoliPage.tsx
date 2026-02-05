import { HomeHeader } from "@/components/HomeHeader";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { SEOHead, createBreadcrumbSchema } from "@/components/SEOHead";
import { SEOBreadcrumb } from "@/components/shared/SEOBreadcrumb";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { usePublicArticles } from "@/hooks/useArticles";
import { motion } from "framer-motion";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const categories = ["Tutti", "Guide", "Bonus Fiscali", "Risparmio", "Normative", "Guide Locali"];

const ArticoliPage = () => {
  const [activeCategory, setActiveCategory] = useState("Tutti");
  const { articles, isLoading, error } = usePublicArticles(activeCategory);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://iprofili.it" },
    { name: "Articoli", url: "https://iprofili.it/articoli" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Blog Infissi: Guide, Bonus Fiscali, Normative | I Profili"
        description="Guide pratiche su infissi, bonus fiscali 2026, direttiva Case Green. Consigli esperti per scegliere i serramenti giusti per la tua casa."
        canonical="https://iprofili.it/articoli"
        schema={breadcrumbSchema}
      />
      <HomeHeader />

      <main className="pt-24 md:pt-32">
        <div className="bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <SEOBreadcrumb items={[{ label: "Articoli" }]} />
          </div>
        </div>

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
            {isLoading ? (
              <div className="flex items-center justify-center py-16">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : error ? (
              <div className="text-center py-16">
                <p className="text-destructive">Errore nel caricamento degli articoli.</p>
              </div>
            ) : articles && articles.length > 0 ? (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {articles.map((article, index) => (
                  <ArticleCard 
                    key={article.id} 
                    id={article.id}
                    slug={article.slug}
                    title={article.title}
                    excerpt={article.excerpt || ''}
                    date={article.date}
                    category={article.category}
                    readingTime={article.reading_time || '5 min'}
                    image={article.image_url || ''}
                    index={index} 
                  />
                ))}
              </motion.div>
            ) : (
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
