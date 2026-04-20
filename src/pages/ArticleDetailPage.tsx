import { useParams, Navigate, Link } from "react-router-dom";
import { useMemo } from "react";
import { HomeHeader } from "@/components/HomeHeader";
import { Footer } from "@/components/Footer";
import { SEOHead, createArticleSchema, createBreadcrumbSchema } from "@/components/SEOHead";
import { SEOBreadcrumb } from "@/components/shared/SEOBreadcrumb";
import { LeadConnectorForm } from "@/components/shared/LeadConnectorForm";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowLeft, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import DOMPurify from "dompurify";
import { articles as allArticles, type Article } from "@/data/articles";
import { authorNameToSlug } from "@/data/authors";

const TableOfContents = ({ content }: { content: string }) => {
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

const AuthorBox = ({ name, role }: { name: string; role: string }) => {
  const slug = authorNameToSlug(name);
  const content = (
    <>
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
        <User className="w-8 h-8 text-primary" />
      </div>
      <div className="flex-1">
        <p className="font-bold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
      {slug && <span className="text-sm text-primary font-medium">Leggi la bio →</span>}
    </>
  );

  if (!slug) {
    return (
      <div className="bg-muted/50 rounded-xl p-6 flex items-center gap-4">
        {content}
      </div>
    );
  }

  return (
    <Link
      to={`/team/${slug}`}
      className="bg-muted/50 hover:bg-muted rounded-xl p-6 flex items-center gap-4 transition-colors group"
    >
      {content}
    </Link>
  );
};

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

  const article = useMemo(
    () => allArticles.find((a) => a.slug === articleSlug),
    [articleSlug]
  );

  const relatedArticles = useMemo(() => {
    if (!article) return [];
    return allArticles
      .filter(
        (a) =>
          a.slug !== article.slug &&
          (article.relatedArticles.includes(a.id) ||
            article.relatedArticles.includes(a.slug))
      )
      .slice(0, 3);
  }, [article]);

  if (!articleSlug) {
    return <Navigate to="/articoli" replace />;
  }

  if (!article) {
    return <Navigate to="/articoli" replace />;
  }

  const articleUrl = `https://www.i-profili.it/articoli/${article.slug}`;

  const breadcrumbItems = [
    { label: "Articoli", href: "/articoli" },
    { label: article.category, href: `/articoli?categoria=${article.category}` },
    { label: article.title },
  ];

  const authorSlug = authorNameToSlug(article.author.name);
  const articleSchema = createArticleSchema({
    title: article.title,
    description: article.metaDescription || article.excerpt,
    datePublished: article.dateISO,
    author: article.author.name,
    authorSlug: authorSlug || undefined,
    image: article.image,
    url: articleUrl,
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://www.i-profili.it" },
    { name: "Articoli", url: "https://www.i-profili.it/articoli" },
    { name: article.title, url: articleUrl },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={article.metaTitle || article.title}
        description={article.metaDescription || article.excerpt}
        canonical={articleUrl}
        ogType="article"
        ogImage={article.image?.startsWith("http") ? article.image : `https://www.i-profili.it${article.image}`}
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
          {article.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="aspect-[16/9] bg-muted rounded-2xl mb-14 overflow-hidden"
            >
              <img
                src={article.image}
                alt={article.imageAlt || article.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          )}

          {/* Table of Contents */}
          <TableOfContents content={article.content} />

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg max-w-none article-content"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(article.content, {
                ALLOWED_TAGS: ['p', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'a', 'img', 'blockquote', 'code', 'pre', 'br', 'span', 'div', 'table', 'thead', 'tbody', 'tr', 'th', 'td'],
                ALLOWED_ATTR: ['href', 'src', 'alt', 'class', 'id', 'target', 'rel', 'title', 'width', 'height']
              })
            }}
          />

          {/* Tags */}
          {article.tags.length > 0 && (
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
          )}

          {/* Author Box */}
          <div className="mt-14">
            <AuthorBox name={article.author.name} role={article.author.role} />
          </div>

          {/* CTA with Lead Connector Form */}
          <div className="mt-16 bg-primary/5 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Vuoi saperne di più?
            </h3>
            <p className="text-muted-foreground mb-6">
              I nostri esperti sono pronti a rispondere alle tue domande e a fornirti un preventivo gratuito.
            </p>
            <LeadConnectorForm height={600} className="mt-6" />
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
