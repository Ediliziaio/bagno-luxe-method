import { lazy, Suspense } from "react";
import { HomeHeader } from "@/components/HomeHeader";
import { SEOHead, localBusinessSchema } from "@/components/SEOHead";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeStats } from "@/components/home/HomeStats";
import { HomeWhyUs } from "@/components/home/HomeWhyUs";
import { MobileBottomBar } from "@/components/MobileBottomBar";

// Lazy load componenti sotto la piega per velocizzare il caricamento iniziale
const HomeVideos = lazy(() => import("@/components/home/HomeVideos").then(m => ({ default: m.HomeVideos })));
const HomeProducts = lazy(() => import("@/components/home/HomeProducts").then(m => ({ default: m.HomeProducts })));
const HomeSystem = lazy(() => import("@/components/home/HomeSystem").then(m => ({ default: m.HomeSystem })));
const HomeServices = lazy(() => import("@/components/home/HomeServices").then(m => ({ default: m.HomeServices })));
const HomeSteps = lazy(() => import("@/components/home/HomeSteps").then(m => ({ default: m.HomeSteps })));
const HomeServiceOverview = lazy(() => import("@/components/home/HomeServiceOverview").then(m => ({ default: m.HomeServiceOverview })));
const HomeTransparency = lazy(() => import("@/components/home/HomeTransparency").then(m => ({ default: m.HomeTransparency })));
const HomeCaseGreen = lazy(() => import("@/components/home/HomeCaseGreen").then(m => ({ default: m.HomeCaseGreen })));
const HomeGuarantees = lazy(() => import("@/components/home/HomeGuarantees").then(m => ({ default: m.HomeGuarantees })));
const HomeTestimonials = lazy(() => import("@/components/home/HomeTestimonials").then(m => ({ default: m.HomeTestimonials })));
const HomeFinancing = lazy(() => import("@/components/home/HomeFinancing").then(m => ({ default: m.HomeFinancing })));
const HomeContact = lazy(() => import("@/components/home/HomeContact").then(m => ({ default: m.HomeContact })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

// Skeleton loader minimalista per i componenti lazy
const SectionSkeleton = () => (
  <div className="py-16 animate-pulse">
    <div className="max-w-6xl mx-auto px-4">
      <div className="h-8 bg-muted rounded w-1/3 mx-auto mb-8" />
      <div className="h-4 bg-muted rounded w-2/3 mx-auto" />
    </div>
  </div>
);

const HomePage = () => {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
       <SEOHead
         title="I Profili | Finestre PVC Alta Efficienza - Lombardia"
         description="Finestre in PVC ad alta efficienza energetica. Risparmia fino al 40% in bolletta. Garanzia 10 anni, bonus 50%. Preventivo gratuito in Lombardia."
         keywords="finestre PVC Lombardia, serramenti efficienza energetica, sostituzione finestre Milano, infissi PVC Monza, finestre risparmio energetico, bonus infissi 50%, serramenti Varese, finestre Bergamo, infissi Como"
         canonical="https://iprofili.it"
         schema={localBusinessSchema}
       />
      <HomeHeader />
      <HomeHero />
      <HomeStats />
      <HomeWhyUs />
      
      <Suspense fallback={<SectionSkeleton />}>
        <HomeVideos />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <HomeProducts />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <HomeSystem />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <HomeServices />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <HomeSteps />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <HomeServiceOverview />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <HomeTransparency />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <HomeCaseGreen />
      </Suspense>
      <div id="garanzie">
        <Suspense fallback={<SectionSkeleton />}>
          <HomeGuarantees />
        </Suspense>
      </div>
      <Suspense fallback={<SectionSkeleton />}>
        <HomeTestimonials />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <HomeFinancing />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <HomeContact />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Footer />
      </Suspense>
      <MobileBottomBar />
      {/* Spacer per evitare che il contenuto sia nascosto dalla barra mobile */}
      <div className="h-16 md:hidden" />
    </main>
  );
};

export default HomePage;
