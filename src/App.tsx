import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import HomePage from "./pages/HomePage";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProdottiPage from "./pages/ProdottiPage";
import ChiSiamoPage from "./pages/ChiSiamoPage";
import ContattiPage from "./pages/ContattiPage";
import GaranziePage from "./pages/GaranziePage";
import PosaQualificataPage from "./pages/PosaQualificataPage";
import ArticoliPage from "./pages/ArticoliPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";

// Admin pages
import AdminLogin from "./pages/admin/AdminLogin";
import AdminArticles from "./pages/admin/AdminArticles";
import AdminArticleForm from "./pages/admin/AdminArticleForm";
import { ProtectedRoute } from "./components/admin/ProtectedRoute";

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
          <Route path="/posa-qualificata" element={<PosaQualificataPage />} />
          <Route path="/articoli" element={<ArticoliPage />} />
          <Route path="/articoli/:articleSlug" element={<ArticleDetailPage />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminArticles />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/articles"
            element={
              <ProtectedRoute>
                <AdminArticles />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/articles/new"
            element={
              <ProtectedRoute>
                <AdminArticleForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/articles/edit/:id"
            element={
              <ProtectedRoute>
                <AdminArticleForm />
              </ProtectedRoute>
            }
          />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
