import { useParams, Navigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead, createBreadcrumbSchema } from "@/components/SEOHead";
import { CityHero } from "@/components/city/CityHero";
import { CityProblems } from "@/components/city/CityProblems";
import { CityProducts } from "@/components/city/CityProducts";
import { CityWhyUs } from "@/components/city/CityWhyUs";
import { CityProcess } from "@/components/city/CityProcess";
import { CityTestimonials } from "@/components/city/CityTestimonials";
import { CityBenefits } from "@/components/city/CityBenefits";
import { CityGuarantees } from "@/components/city/CityGuarantees";
import { CityFAQ, generateFAQSchema } from "@/components/city/CityFAQ";
import { CityCTA } from "@/components/city/CityCTA";
import { getCityBySlug } from "@/data/cities";

// Schema helper per le landing page città
const createCityLandingSchema = (city: {
  name: string;
  slug: string;
  provinceName: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "I Profili",
  description: `Installazione serramenti PVC ad alta efficienza energetica a ${city.name} e provincia di ${city.provinceName}`,
  url: `https://www.i-profili.it/serramenti/${city.slug}`,
  telephone: "+39-350-178-0908",
  email: "info@i-profili.it",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Bruno Raimondi, 5",
    addressLocality: "Busto Arsizio",
    addressRegion: "VA",
    postalCode: "21052",
    addressCountry: "IT",
  },
  areaServed: {
    "@type": "City",
    name: city.name,
  },
  priceRange: "€€",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
  },
});

const createServiceSchema = (city: { name: string; provinceName: string }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: `Installazione Serramenti ${city.name}`,
  description: `Installazione professionale di infissi e serramenti in PVC a ${city.name}. Posa certificata, garanzia 10 anni, preventivo gratuito.`,
  provider: {
    "@type": "LocalBusiness",
    name: "I Profili",
  },
  areaServed: {
    "@type": "City",
    name: city.name,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serramenti",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Finestre in PVC",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Porte-finestre",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sistemi scorrevoli",
        },
      },
    ],
  },
});

const CityLandingPage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  
  const city = citySlug ? getCityBySlug(citySlug) : undefined;

  // Redirect to 404 if city not found
  if (!city) {
    return <Navigate to="/404" replace />;
  }

  // Combined schema with all structured data
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      createCityLandingSchema(city),
      createServiceSchema(city),
      generateFAQSchema(city),
      createBreadcrumbSchema([
        { name: "Home", url: "https://www.i-profili.it" },
        { name: `Serramenti ${city.name}`, url: `https://www.i-profili.it/serramenti/${city.slug}` },
      ]),
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`Infissi ${city.name} - Finestre e Serramenti PVC | I Profili`}
        description={`Infissi ${city.name}: serramenti PVC alta efficienza, finestre con garanzia 10 anni. Preventivo gratuito, posa certificata, bonus 50%. ☎ 350 178 0908`}
        keywords={`infissi ${city.name.toLowerCase()}, finestre ${city.name.toLowerCase()}, serramenti ${city.name.toLowerCase()}, serramenti PVC ${city.provinceName.toLowerCase()}, sostituzione finestre ${city.name.toLowerCase()}`}
        canonical={`https://www.i-profili.it/serramenti/${city.slug}`}
        schema={combinedSchema}
      />
      <Header />
      <main>
        <CityHero city={city} />
        <CityProblems city={city} />
        <CityProducts city={city} />
        <CityWhyUs city={city} />
        <CityProcess city={city} />
        <CityTestimonials city={city} />
        <CityBenefits city={city} />
        <CityGuarantees city={city} />
        <CityFAQ city={city} />
        <CityCTA city={city} />
      </main>
      <Footer />
    </div>
  );
};

export default CityLandingPage;
