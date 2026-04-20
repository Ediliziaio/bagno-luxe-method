import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  article?: {
    publishedTime: string;
    author: string;
    section: string;
  };
  schema?: object;
  noindex?: boolean;
}

export const SEOHead = ({
  title,
  description,
  keywords,
  canonical = "https://www.i-profili.it",
  ogImage = "https://www.i-profili.it/og-image.jpg",
  ogType = "website",
  article,
  schema,
  noindex = false,
}: SEOHeadProps) => {
   useEffect(() => {
     // Update document title
     document.title = title;
 
     // Helper to update or create meta tags
     const setMeta = (name: string, content: string, isProperty = false) => {
       const attr = isProperty ? "property" : "name";
       let meta = document.querySelector(`meta[${attr}="${name}"]`);
       if (!meta) {
         meta = document.createElement("meta");
         meta.setAttribute(attr, name);
         document.head.appendChild(meta);
       }
       meta.setAttribute("content", content);
     };
 
    // Basic meta tags
    setMeta("description", description);

    // Robots directive
    setMeta("robots", noindex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");

    // Keywords meta tag (utile per Bing)
    if (keywords) {
      setMeta("keywords", keywords);
    }

     // Open Graph
     setMeta("og:title", title, true);
     setMeta("og:description", description, true);
     setMeta("og:type", ogType, true);
     setMeta("og:image", ogImage, true);
     setMeta("og:image:width", "1200", true);
     setMeta("og:image:height", "630", true);
     setMeta("og:url", canonical, true);
     setMeta("og:site_name", "I Profili", true);
     setMeta("og:locale", "it_IT", true);

     // Twitter
     setMeta("twitter:card", "summary_large_image");
     setMeta("twitter:title", title);
     setMeta("twitter:description", description);
     setMeta("twitter:image", ogImage);
 
     // Article specific
     if (article) {
       setMeta("article:published_time", article.publishedTime, true);
       setMeta("article:author", article.author, true);
       setMeta("article:section", article.section, true);
     }
 
     // Canonical link
     let canonicalLink = document.querySelector('link[rel="canonical"]');
     if (!canonicalLink) {
       canonicalLink = document.createElement("link");
       canonicalLink.setAttribute("rel", "canonical");
       document.head.appendChild(canonicalLink);
     }
     canonicalLink.setAttribute("href", canonical);
 
     // Schema.org JSON-LD
     if (schema) {
       // Remove existing schema
       const existingSchema = document.querySelector('script[data-seo-schema="true"]');
       if (existingSchema) {
         existingSchema.remove();
       }
       // Add new schema
       const schemaScript = document.createElement("script");
       schemaScript.type = "application/ld+json";
       schemaScript.setAttribute("data-seo-schema", "true");
       schemaScript.textContent = JSON.stringify(schema);
       document.head.appendChild(schemaScript);
     }
 
     return () => {
       // Cleanup schema on unmount
       const schemaScript = document.querySelector('script[data-seo-schema="true"]');
       if (schemaScript) {
         schemaScript.remove();
       }
     };
   }, [title, description, keywords, canonical, ogImage, ogType, article, schema, noindex]);
 
   return null;
 };
 
 // Pre-built schemas for reuse
 export const organizationSchema = {
   "@context": "https://schema.org",
   "@type": "Organization",
   name: "I Profili - Domus Group S.r.l.",
   alternateName: "I Profili",
   url: "https://www.i-profili.it",
   logo: "https://www.i-profili.it/logo.png",
   description: "Installazione serramenti PVC ad alta efficienza energetica in Lombardia. Sistema Zero Pensieri con garanzia 10 anni.",
   telephone: "+39 351 305 8029",
   email: "info@i-profili.it",
   address: {
     "@type": "PostalAddress",
     streetAddress: "Via Bruno Raimondi, 5",
     addressLocality: "Busto Arsizio",
     addressRegion: "VA",
     postalCode: "21052",
     addressCountry: "IT",
   },
   geo: {
     "@type": "GeoCoordinates",
     latitude: "45.6119",
     longitude: "8.8515",
   },
   areaServed: {
     "@type": "State",
     name: "Lombardia",
   },
   sameAs: [
     "https://www.facebook.com/iprofili",
     "https://www.instagram.com/iprofili",
   ],
 };

 export const localBusinessSchema = {
   "@context": "https://schema.org",
   "@type": "LocalBusiness",
   "@id": "https://www.i-profili.it/#localbusiness",
   name: "I Profili",
   description: "Installazione serramenti PVC ad alta efficienza energetica in Lombardia",
   url: "https://www.i-profili.it",
   telephone: "+39 351 305 8029",
   email: "info@i-profili.it",
   address: {
     "@type": "PostalAddress",
     streetAddress: "Via Bruno Raimondi, 5",
     addressLocality: "Busto Arsizio",
     addressRegion: "VA",
     postalCode: "21052",
     addressCountry: "IT",
   },
   geo: {
     "@type": "GeoCoordinates",
     latitude: "45.6119",
     longitude: "8.8515",
   },
   openingHoursSpecification: [
     {
       "@type": "OpeningHoursSpecification",
       dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
       opens: "09:00",
       closes: "18:00",
     },
   ],
   areaServed: {
     "@type": "State",
     name: "Lombardia",
   },
   priceRange: "€€",
   aggregateRating: {
     "@type": "AggregateRating",
     ratingValue: "4.9",
     reviewCount: "127",
   },
   sameAs: [
     "https://www.facebook.com/iprofili",
     "https://www.instagram.com/iprofili",
   ],
 };
 
 export const websiteSchema = {
   "@context": "https://schema.org",
   "@type": "WebSite",
   name: "I Profili",
   alternateName: "I Profili Serramenti",
   url: "https://www.i-profili.it",
   publisher: {
     "@type": "Organization",
     name: "I Profili - Domus Group S.r.l.",
   },
 };

 export const contactPageSchema = {
   "@context": "https://schema.org",
   "@type": "ContactPage",
   name: "Contatti I Profili",
   description: "Richiedi un preventivo gratuito per i tuoi infissi. Sopralluogo in tutta la Lombardia.",
   url: "https://www.i-profili.it/contatti",
   mainEntity: organizationSchema,
 };

 export const serviceSchema = {
   "@context": "https://schema.org",
   "@type": "Service",
   name: "Posa Qualificata Serramenti",
   description: "Installazione certificata di serramenti con garanzia 10 anni sulla posa. Posatori formati secondo normativa UNI 11673.",
   provider: {
     "@type": "Organization",
     name: "I Profili - Domus Group S.r.l.",
   },
   areaServed: {
     "@type": "State",
     name: "Lombardia",
   },
   serviceType: "Installazione Serramenti",
 };
 
 export const createProductSchema = (product: {
   name: string;
   description: string;
   image?: string;
 }) => ({
   "@context": "https://schema.org",
   "@type": "Product",
   name: product.name,
   description: product.description,
   image: product.image,
   brand: {
     "@type": "Brand",
     name: "I Profili",
   },
   manufacturer: {
     "@type": "Organization",
     name: "I Profili",
   },
   offers: {
     "@type": "Offer",
     priceCurrency: "EUR",
     availability: "https://schema.org/InStock",
     seller: {
       "@type": "Organization",
       name: "I Profili",
     },
   },
 });
 
 export const createArticleSchema = (article: {
   title: string;
   description: string;
   datePublished: string;
   author: string;
   image?: string;
   url: string;
 }) => ({
   "@context": "https://schema.org",
   "@type": "Article",
   headline: article.title,
   description: article.description,
   datePublished: article.datePublished,
   dateModified: article.datePublished,
   author: {
     "@type": "Person",
     name: article.author,
   },
   publisher: {
     "@type": "Organization",
     name: "I Profili",
     logo: {
       "@type": "ImageObject",
       url: "https://www.i-profili.it/logo.png",
     },
   },
   image: article.image,
   mainEntityOfPage: {
     "@type": "WebPage",
     "@id": article.url,
   },
 });
 
 export const createBreadcrumbSchema = (
   items: { name: string; url: string }[]
 ) => ({
   "@context": "https://schema.org",
   "@type": "BreadcrumbList",
   itemListElement: items.map((item, index) => ({
     "@type": "ListItem",
     position: index + 1,
     name: item.name,
     item: item.url,
   })),
 });