import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ProductCard } from "./ProductCard";

// Import immagini locali
import serramentiPvcBianco from '@/assets/serramenti-pvc-bianco.jpg';
import serramentiScorrevoloNero from '@/assets/serramenti-scorrevole-nero.webp';
import serramentiModerniNero from '@/assets/serramenti-moderni-nero.webp';
import serramentiPvcGrigio from '@/assets/serramenti-pvc-grigio.jpg';
import heroWindow from '@/assets/hero-window.jpg';
import windowAfter1 from '@/assets/window-after-1.jpg';
import domusProfileSection from '@/assets/domus-profile-section.jpg';
import persianeHero from '@/assets/products/persiane-hero.jpg';
import zanzariereHero from '@/assets/products/zanzariere-hero.jpg';
import porteInternoHero from '@/assets/products/porte-interno-hero.jpg';
import portaBlindataHero from '@/assets/products/porta-blindata-hero.jpg';

interface Product {
  id: string;
  name: string;
  description: string;
  features?: string[];
  image?: string;
}

interface ProductCategory {
  name: string;
  products: Product[];
}

const productCategories: Record<string, ProductCategory> = {
  infissi: {
    name: "Infissi",
    products: [
      { id: "domus", name: "Domus", description: "Il nostro sistema principale a 76mm con tripla guarnizione. Massimo isolamento termico e acustico per il comfort della tua casa.", features: ["76mm", "Acciaio 2mm", "3 guarnizioni"], image: serramentiPvcBianco },
      { id: "lumier", name: "Lumier", description: "Finestre progettate per massimizzare la luce naturale. Telaio sottile e vetrate ampie per ambienti luminosi.", features: ["Telaio sottile", "Vetro grande", "Design minimale"], image: serramentiScorrevoloNero },
      { id: "idole", name: "Idole", description: "La linea premium per chi cerca l'eccellenza. Design esclusivo e finiture personalizzabili per interni di prestigio.", features: ["Finiture luxury", "Personalizzabile", "Design italiano"], image: serramentiModerniNero },
      { id: "alum", name: "Tempra", description: "Infissi in alluminio ad alte prestazioni. Resistenza superiore e ampia gamma di colori RAL disponibili.", features: ["Alluminio", "Resistenza", "Colori RAL"], image: serramentiPvcGrigio },
      { id: "legno-alluminio", name: "Skywood", description: "Il calore estetico del legno all'interno e la resistenza dell'alluminio all'esterno. Il meglio di entrambi i mondi.", features: ["Legno interno", "Alluminio esterno", "Isolamento top"], image: heroWindow },
    ]
  },
  oscuranti: {
    name: "Oscuranti e Accessori",
    products: [
      { id: "persiane", name: "Persiane", description: "Eleganza italiana e controllo totale della luce. Lamelle orientabili, resistenza garantita, design premium.", features: ["Alluminio", "Motorizzate", "Su misura"], image: persianeHero },
      { id: "tapparelle", name: "Tapparelle", description: "Avvolgibili motorizzate e manuali per ogni esigenza. Isolamento termico e protezione dagli agenti atmosferici.", features: ["Motorizzate", "Manuali", "Coibentate"], image: windowAfter1 },
      { id: "zanzariere", name: "Zanzariere", description: "Aria fresca senza insetti - protezione al 99%. Estetika, Neoscenica, Bora Top, Wind e Evo Zip motorizzata.", features: ["5 modelli", "Motorizzata", "Antivento"], image: zanzariereHero },
      { id: "cassonetti", name: "Cassonetti", description: "Cassonetti coibentati anti ponte termico. Eliminano dispersioni e condense per un comfort ottimale.", features: ["Coibentati", "Anti condensa", "Isolanti"], image: domusProfileSection },
    ]
  },
  porte: {
    name: "Porte",
    products: [
      { id: "porte-interno", name: "Porte da Interno", description: "Design elegante per ogni ambiente. Battente o scorrevole, isolamento acustico fino a 32 dB.", features: ["Design Premium", "32 dB", "Su misura"], image: porteInternoHero },
      { id: "porta-blindata", name: "Porta Blindata", description: "Sicurezza certificata Classe 3 e Classe 4 EN 1627. Fino a 15 punti di chiusura, cilindro anti-effrazione.", features: ["Classe 3 e 4", "15 punti", "Anti-effrazione"], image: portaBlindataHero },
    ]
  }
};

export const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState("tutti");

  const allProducts = Object.values(productCategories).flatMap(cat => cat.products);

  const getProducts = () => {
    if (activeCategory === "tutti") return allProducts;
    return productCategories[activeCategory]?.products || [];
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Category Tabs */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto p-0 mb-12">
            <TabsTrigger
              value="tutti"
              className="px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full border border-border/50 data-[state=active]:border-primary transition-all"
            >
              Tutti
            </TabsTrigger>
            {Object.entries(productCategories).map(([key, category]) => (
              <TabsTrigger
                key={key}
                value={key}
                className="px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full border border-border/50 data-[state=active]:border-primary transition-all"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Products Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {getProducts().map((product, index) => (
              <ProductCard key={product.id} {...product} index={index} />
            ))}
          </motion.div>
        </Tabs>
      </div>
    </section>
  );
};
