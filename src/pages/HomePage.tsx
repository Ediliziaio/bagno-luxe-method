import { HomeHeader } from "@/components/HomeHeader";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeStats } from "@/components/home/HomeStats";
import { HomeWhyUs } from "@/components/home/HomeWhyUs";
import { HomeProducts } from "@/components/home/HomeProducts";
import { HomeSystem } from "@/components/home/HomeSystem";
import { HomeServices } from "@/components/home/HomeServices";
import { HomeSteps } from "@/components/home/HomeSteps";
import { HomeGuarantees } from "@/components/home/HomeGuarantees";
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
      <HomeProducts />
      <HomeSystem />
      <HomeServices />
      <HomeSteps />
      <div id="garanzie">
        <HomeGuarantees />
      </div>
      <HomeFinancing />
      <HomeContact />
      <Footer />
    </main>
  );
};

export default HomePage;
