import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { DecisionCriteriaSection } from "@/components/DecisionCriteriaSection";
import { DecisionCenterSection } from "@/components/DecisionCenterSection";
import { SystemSolutionSection } from "@/components/SystemSolutionSection";
import { DomusProductDetailSection } from "@/components/DomusProductDetailSection";
import { VideoTestimonialsSection } from "@/components/VideoTestimonialsSection";
import { ResultsGallerySection } from "@/components/ResultsGallerySection";
import { DirectComparisonSection } from "@/components/DirectComparisonSection";
import { HiddenTruthsSection } from "@/components/HiddenTruthsSection";
import { UrgencySection } from "@/components/UrgencySection";
import { WrittenTestimonialsSection } from "@/components/WrittenTestimonialsSection";
import { GuaranteesDetailedSection } from "@/components/GuaranteesDetailedSection";
import { ServiceOverviewSection } from "@/components/ServiceOverviewSection";
import { ZeroPensieriOfferSection } from "@/components/ZeroPensieriOfferSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <SEOHead
        title="Offerta Esclusiva Infissi I Profili | Pagina Riservata"
        description="Pagina riservata ai clienti I Profili: offerta Sistema Zero Pensieri con garanzia 10 anni."
        canonical="https://www.i-profili.it/filippo"
        noindex
      />
      <Header />
      {/* 1. Hero - Obiettivi in Numeri */}
      <HeroSection />
      {/* 2. Criteri Decisionali - 5 Domande */}
      <DecisionCriteriaSection />
      {/* 3. Centro Decisionale - Emozionale */}
      <DecisionCenterSection />
      {/* 4. Sistema I Profili - Prodotto + Posa + Garanzia */}
      <SystemSolutionSection />
      {/* 5. Dettaglio Prodotto DOMUS */}
      <DomusProductDetailSection />
      {/* 6. Video Testimonianze */}
      <VideoTestimonialsSection />
      {/* 6. Galleria Risultati */}
      <ResultsGallerySection />
      {/* 7. Confronto Diretto */}
      <DirectComparisonSection />
      {/* 8. Verità Scomode - Paura */}
      <HiddenTruthsSection />
      {/* 9. Urgenza */}
      <UrgencySection />
      {/* 10. Testimonianze Scritte */}
      <WrittenTestimonialsSection />
      {/* 11. Garanzie Dettagliate */}
      <GuaranteesDetailedSection />
      {/* 12. Panoramica Servizio */}
      <ServiceOverviewSection />
      {/* 13. Offerta Zero Pensieri */}
      <ZeroPensieriOfferSection />
      {/* 14. CTA Finale */}
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
