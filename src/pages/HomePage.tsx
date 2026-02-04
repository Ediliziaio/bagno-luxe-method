import { HomeHeader } from "@/components/HomeHeader";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeStats } from "@/components/home/HomeStats";
import { HomeWhyUs } from "@/components/home/HomeWhyUs";
import { HomeVideos } from "@/components/home/HomeVideos";
import { HomeProducts } from "@/components/home/HomeProducts";
import { HomeSystem } from "@/components/home/HomeSystem";
import { HomeServices } from "@/components/home/HomeServices";
import { HomeSteps } from "@/components/home/HomeSteps";
import { HomeServiceOverview } from "@/components/home/HomeServiceOverview";
import { HomeTransparency } from "@/components/home/HomeTransparency";
import { HomeGuarantees } from "@/components/home/HomeGuarantees";
import { HomeTestimonials } from "@/components/home/HomeTestimonials";
import { HomeFinancing } from "@/components/home/HomeFinancing";
import { HomeContact } from "@/components/home/HomeContact";
import { Footer } from "@/components/Footer";

const HomePage = () => {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <HomeHeader />
      <HomeHero />
      <HomeStats />
      <HomeWhyUs />
      <HomeVideos />
      <HomeProducts />
      <HomeSystem />
      <HomeServices />
      <HomeSteps />
      <HomeServiceOverview />
      <HomeTransparency />
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
