import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CookieConsentBanner } from "@/components/CookieConsentBanner";
import HomePage from "./pages/HomePage";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProdottiPage from "./pages/ProdottiPage";
import ChiSiamoPage from "./pages/ChiSiamoPage";
import ContattiPage from "./pages/ContattiPage";
import GaranziePage from "./pages/GaranziePage";
import GaranzieCertificatoPage from "./pages/GaranzieCertificatoPage";
import PosaQualificataPage from "./pages/PosaQualificataPage";
import ArticoliPage from "./pages/ArticoliPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import CityLandingPage from "./pages/CityLandingPage";
// Legal pages
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import TerminiCondizioniPage from "./pages/TerminiCondizioniPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
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

          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/termini-condizioni" element={<TerminiCondizioniPage />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsentBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
