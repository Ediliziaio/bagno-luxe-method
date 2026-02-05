import { HomeHeader } from "@/components/HomeHeader";
 import { SEOHead, localBusinessSchema } from "@/components/SEOHead";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeStats } from "@/components/home/HomeStats";
import { HomeWhyUs } from "@/components/home/HomeWhyUs";
import { HomeShowroom } from "@/components/home/HomeShowroom";
import { HomeVideos } from "@/components/home/HomeVideos";
import { HomeProducts } from "@/components/home/HomeProducts";
import { HomeSystem } from "@/components/home/HomeSystem";
import { HomeServices } from "@/components/home/HomeServices";
import { HomeSteps } from "@/components/home/HomeSteps";
import { HomeServiceOverview } from "@/components/home/HomeServiceOverview";
import { HomeTransparency } from "@/components/home/HomeTransparency";
import { HomeCaseGreen } from "@/components/home/HomeCaseGreen";
import { HomeGuarantees } from "@/components/home/HomeGuarantees";
import { HomeTestimonials } from "@/components/home/HomeTestimonials";
import { HomeFinancing } from "@/components/home/HomeFinancing";
import { HomeContact } from "@/components/home/HomeContact";
import { Footer } from "@/components/Footer";

const HomePage = () => {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
       <SEOHead
         title="I Profili | Finestre PVC Alta Efficienza - Lombardia"
         description="Finestre in PVC ad alta efficienza energetica. Risparmia fino al 40% in bolletta. Garanzia 10 anni, bonus 50%. Preventivo gratuito in Lombardia."
         canonical="https://iprofili.it"
         schema={localBusinessSchema}
       />
      <HomeHeader />
      <HomeHero />
      <HomeStats />
      <HomeWhyUs />
      <HomeShowroom />
      <HomeVideos />
      <HomeProducts />
      <HomeSystem />
      <HomeServices />
      <HomeSteps />
      <HomeServiceOverview />
      <HomeTransparency />
      <HomeCaseGreen />
      <div id="garanzie">
        <HomeGuarantees />
      </div>
      <HomeTestimonials />
      <HomeFinancing />
      <HomeContact />
      <Footer />
    </main>
  );
};

export default HomePage;
