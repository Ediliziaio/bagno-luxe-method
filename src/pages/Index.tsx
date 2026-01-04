import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { PainLoopSection } from "@/components/PainLoopSection";
import { ModernStressSection } from "@/components/ModernStressSection";
import { BathroomSanctuarySection } from "@/components/BathroomSanctuarySection";
import { RenovationNightmareSection } from "@/components/RenovationNightmareSection";
import { WhyArchitettoDelBagnoSection } from "@/components/WhyArchitettoDelBagnoSection";
import { MethodSection } from "@/components/MethodSection";
import { AuthoritySection } from "@/components/AuthoritySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { LogicalCloseSection } from "@/components/LogicalCloseSection";
import { EmotionalCloseSection } from "@/components/EmotionalCloseSection";
import { FAQSection } from "@/components/FAQSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Header />
      <HeroSection />
      <ProblemSection />
      <PainLoopSection />
      <ModernStressSection />
      <BathroomSanctuarySection />
      <RenovationNightmareSection />
      <WhyArchitettoDelBagnoSection />
      <MethodSection />
      <AuthoritySection />
      <TestimonialsSection />
      <LogicalCloseSection />
      <EmotionalCloseSection />
      <FAQSection />
      <ComparisonSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
