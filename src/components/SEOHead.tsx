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
}
 
export const SEOHead = ({
  title,
  description,
  keywords,
  canonical = "https://iprofili.it",
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  ogType = "website",
  article,
  schema,
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
    
    // Keywords meta tag (utile per Bing)
    if (keywords) {
      setMeta("keywords", keywords);
    }

     // Open Graph
     setMeta("og:title", title, true);
     setMeta("og:description", description, true);
     setMeta("og:type", ogType, true);
     setMeta("og:image", ogImage, true);
     setMeta("og:url", canonical, true);
 
     // Twitter
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
   }, [title, description, keywords, canonical, ogImage, ogType, article, schema]);
 
   return null;
 };
 
 // Pre-built schemas for reuse
 export const localBusinessSchema = {
   "@context": "https://schema.org",
   "@type": "LocalBusiness",
   name: "I Profili",
   description: "Installazione serramenti PVC ad alta efficienza energetica in Lombardia",
   url: "https://iprofili.it",
   telephone: "+390212345678",
   email: "info@iprofili.it",
   address: {
     "@type": "PostalAddress",
     addressRegion: "Lombardia",
     addressCountry: "IT",
   },
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
       url: "https://iprofili.it/logo.png",
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