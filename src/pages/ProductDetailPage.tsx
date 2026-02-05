 import { useParams, Navigate, Link } from "react-router-dom";
 import { HomeHeader } from "@/components/HomeHeader";
 import { Footer } from "@/components/Footer";
 import { SEOHead, createProductSchema, createBreadcrumbSchema } from "@/components/SEOHead";
 import { ProductHero } from "@/components/products/ProductHero";
 import { ProductFeatures } from "@/components/products/ProductFeatures";
 import { ProductSpecifications } from "@/components/products/ProductSpecifications";
 import { ProductBenefits } from "@/components/products/ProductBenefits";
 import { RelatedProducts } from "@/components/products/RelatedProducts";
 import { ProductCTA } from "@/components/products/ProductCTA";
 import { getProductById, getRelatedProducts } from "@/data/products";
 import { ChevronRight } from "lucide-react";
 
 const ProductDetailPage = () => {
   const { productId } = useParams<{ productId: string }>();
   
   if (!productId) {
     return <Navigate to="/prodotti" replace />;
   }
 
   const product = getProductById(productId);
 
   if (!product) {
     return <Navigate to="/prodotti" replace />;
   }
 
   const relatedProducts = getRelatedProducts(productId);
   const productUrl = `https://iprofili.it/prodotti/${productId}`;
 
   const productSchema = createProductSchema({
     name: product.name,
     description: product.tagline,
   });
 
   const breadcrumbSchema = createBreadcrumbSchema([
     { name: "Home", url: "https://iprofili.it" },
     { name: "Prodotti", url: "https://iprofili.it/prodotti" },
     { name: product.name, url: productUrl },
   ]);
 
   return (
     <div className="min-h-screen bg-background">
       <SEOHead
         title={`${product.name} - Infissi ${product.category} | I Profili`}
         description={`${product.tagline}. Scopri caratteristiche, prestazioni e richiedi preventivo gratuito per ${product.name}.`}
         canonical={productUrl}
         schema={{ ...productSchema, ...breadcrumbSchema }}
       />
       <HomeHeader />
       
       {/* Breadcrumb */}
       <div className="pt-24 md:pt-32 bg-muted/30">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
           <nav className="flex items-center gap-2 text-sm text-muted-foreground">
             <Link to="/" className="hover:text-primary transition-colors">Home</Link>
             <ChevronRight className="w-4 h-4" />
             <Link to="/prodotti" className="hover:text-primary transition-colors">Prodotti</Link>
             <ChevronRight className="w-4 h-4" />
             <span className="text-foreground font-medium">{product.name}</span>
           </nav>
         </div>
       </div>
 
       <ProductHero product={product} />
       
       <ProductFeatures features={product.features} productName={product.name} />
       
       <ProductSpecifications specifications={product.specifications} productName={product.name} />
       
       <ProductBenefits 
         benefits={product.benefits} 
         applications={product.applications} 
         productName={product.name} 
       />
       
       <ProductCTA productName={product.name} />
       
       <RelatedProducts products={relatedProducts} />
       
       <Footer />
     </div>
   );
 };
 
 export default ProductDetailPage;