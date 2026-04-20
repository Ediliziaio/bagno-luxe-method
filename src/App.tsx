import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CookieConsentBanner } from "@/components/CookieConsentBanner";
import HomePage from "./pages/HomePage";

// Lazy-load tutte le altre pagine: code splitting per pagina, TTI e LCP migliori
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ProdottiPage = lazy(() => import("./pages/ProdottiPage"));
const ChiSiamoPage = lazy(() => import("./pages/ChiSiamoPage"));
const ContattiPage = lazy(() => import("./pages/ContattiPage"));
const GaranziePage = lazy(() => import("./pages/GaranziePage"));
const GaranzieCertificatoPage = lazy(() => import("./pages/GaranzieCertificatoPage"));
const PosaQualificataPage = lazy(() => import("./pages/PosaQualificataPage"));
const ArticoliPage = lazy(() => import("./pages/ArticoliPage"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"));
const ArticleDetailPage = lazy(() => import("./pages/ArticleDetailPage"));
const CityLandingPage = lazy(() => import("./pages/CityLandingPage"));
const AuthorPage = lazy(() => import("./pages/AuthorPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const CookiePolicyPage = lazy(() => import("./pages/CookiePolicyPage"));
const TerminiCondizioniPage = lazy(() => import("./pages/TerminiCondizioniPage"));

const queryClient = new QueryClient();

const PageFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/filippo" element={<Index />} />
            <Route path="/prodotti" element={<ProdottiPage />} />
            <Route path="/prodotti/:productId" element={<ProductDetailPage />} />
            <Route path="/chi-siamo" element={<ChiSiamoPage />} />
            <Route path="/contatti" element={<ContattiPage />} />
            <Route path="/garanzie" element={<GaranziePage />} />
            <Route path="/garanziecertificato" element={<GaranzieCertificatoPage />} />
            <Route path="/posa-qualificata" element={<PosaQualificataPage />} />
            <Route path="/articoli" element={<ArticoliPage />} />
            <Route path="/articoli/:articleSlug" element={<ArticleDetailPage />} />

            {/* City SEO Landing Pages */}
            <Route path="/serramenti/:citySlug" element={<CityLandingPage />} />

            {/* Author bio pages */}
            <Route path="/team/:authorSlug" element={<AuthorPage />} />

            {/* Legal Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
            <Route path="/termini-condizioni" element={<TerminiCondizioniPage />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <CookieConsentBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
