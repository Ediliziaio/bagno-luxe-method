import { HomeHeader } from "@/components/HomeHeader";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeWhyUs } from "@/components/home/HomeWhyUs";
import { HomeServices } from "@/components/home/HomeServices";
import { HomeSteps } from "@/components/home/HomeSteps";
import { HomeFinancing } from "@/components/home/HomeFinancing";
import { HomeContact } from "@/components/home/HomeContact";
import { Footer } from "@/components/Footer";

const HomePage = () => {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <HomeHeader />
      <HomeHero />
      <HomeWhyUs />
      <HomeServices />
      <HomeSteps />
      <HomeFinancing />
      <HomeContact />
      <Footer />
    </main>
  );
};

export default HomePage;
