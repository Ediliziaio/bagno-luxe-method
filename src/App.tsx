import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
 import ProdottiPage from "./pages/ProdottiPage";
 import ChiSiamoPage from "./pages/ChiSiamoPage";
 import ContattiPage from "./pages/ContattiPage";
 import GaranziePage from "./pages/GaranziePage";
 import ArticoliPage from "./pages/ArticoliPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/filippo" element={<Index />} />
           <Route path="/prodotti" element={<ProdottiPage />} />
           <Route path="/chi-siamo" element={<ChiSiamoPage />} />
           <Route path="/contatti" element={<ContattiPage />} />
           <Route path="/garanzie" element={<GaranziePage />} />
           <Route path="/articoli" element={<ArticoliPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
