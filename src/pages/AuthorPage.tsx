import { useParams, Navigate, Link } from "react-router-dom";
import { useMemo } from "react";
import { HomeHeader } from "@/components/HomeHeader";
import { Footer } from "@/components/Footer";
import { SEOHead, createBreadcrumbSchema } from "@/components/SEOHead";
import { SEOBreadcrumb } from "@/components/shared/SEOBreadcrumb";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { motion } from "framer-motion";
import { User, Award, Briefcase, ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAuthorBySlug, authorNameToSlug } from "@/data/authors";
import { articles as allArticles } from "@/data/articles";

const AuthorPage = () => {
  const { authorSlug } = useParams<{ authorSlug: string }>();

  const author = useMemo(
    () => (authorSlug ? getAuthorBySlug(authorSlug) : undefined),
    [authorSlug]
  );

  const authorArticles = useMemo(() => {
    if (!author) return [];
    return allArticles
      .filter((a) => authorNameToSlug(a.author.name) === author.slug)
      .sort((a, b) => (a.dateISO < b.dateISO ? 1 : -1));
  }, [author]);

  if (!authorSlug || !author) {
    return <Navigate to="/chi-siamo" replace />;
  }

  const authorUrl = `https://www.i-profili.it/team/${author.slug}`;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${authorUrl}#person`,
    name: author.name,
    jobTitle: author.role,
    description: author.shortBio,
    url: authorUrl,
    worksFor: {
      "@type": "Organization",
      name: "I Profili - Domus Group S.r.l.",
      url: "https://www.i-profili.it",
    },
    knowsAbout: author.expertise,
    hasCredential: author.certifications.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      name: c,
    })),
  };

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://www.i-profili.it" },
    { name: "Team", url: "https://www.i-profili.it/chi-siamo" },
    { name: author.name, url: authorUrl },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${author.name} — ${author.role} | I Profili`}
        description={author.shortBio.slice(0, 155)}
        canonical={authorUrl}
        schema={{ ...personSchema, ...breadcrumbSchema }}
      />
      <HomeHeader />

      <main className="pt-24 md:pt-32">
        <div className="bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <SEOBreadcrumb
              items={[
                { label: "Chi Siamo", href: "/chi-siamo" },
                { label: author.name },
              ]}
            />
          </div>
        </div>

        {/* Hero */}
        <section className="py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                <User className="w-16 h-16 md:w-20 md:h-20 text-primary" />
              </div>
              <div className="flex-1">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-3">
                  {author.role}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  {author.name}
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  {author.shortBio}
                </p>
                <div className="flex flex-wrap gap-6 text-sm">
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <Briefcase className="w-4 h-4 text-primary" />
                    {author.experience}
                  </span>
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <Award className="w-4 h-4 text-primary" />
                    {author.certifications.length} certificazioni
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Full Bio */}
        <section className="py-12 bg-muted/20 border-y border-border/50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">Chi è {author.name.split(" ")[0]}</h2>
            <div className="space-y-4">
              {author.fullBio.map((paragraph, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-primary" />
                  Aree di competenza
                </h2>
                <ul className="space-y-3">
                  {author.expertise.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Award className="w-6 h-6 text-primary" />
                  Formazione e certificazioni
                </h2>
                <ul className="space-y-3">
                  {author.certifications.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Articles by author */}
        {authorArticles.length > 0 && (
          <section className="py-16 md:py-24 bg-muted/20 border-t border-border/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Articoli firmati da {author.name.split(" ")[0]}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {authorArticles.map((article, i) => (
                  <ArticleCard
                    key={article.id}
                    id={article.id}
                    slug={article.slug}
                    title={article.title}
                    excerpt={article.excerpt}
                    date={article.date}
                    category={article.category}
                    readingTime={article.readingTime}
                    image={article.image}
                    index={i}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Back CTA */}
        <section className="py-12 border-t border-border/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <Button variant="ghost" asChild>
              <Link to="/articoli" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Torna a tutti gli articoli
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AuthorPage;
