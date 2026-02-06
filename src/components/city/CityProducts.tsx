import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import type { City } from "@/data/cities";

// Import immagini prodotti
import serramentoPvcBianco from "@/assets/serramenti-pvc-bianco.jpg";
import serramentoModernoNero from "@/assets/serramenti-moderni-nero.webp";
import serramentoScorrevoloNero from "@/assets/serramenti-scorrevole-nero.webp";

interface CityProductsProps {
  city: City;
}

const products = [
  {
    id: "finestre-pvc",
    name: "Finestre in PVC",
    description: "Serramenti in PVC ad alta efficienza energetica, isolamento termico classe A+, abbattimento acustico fino a 45dB.",
    image: serramentoPvcBianco,
    features: ["Isolamento termico Uw 0.8", "Abbattimento acustico 45dB", "7 camere interne", "25+ colori disponibili"],
  },
  {
    id: "porte-finestre",
    name: "Porte-Finestre",
    description: "Porte-finestre scorrevoli e a battente, ideali per terrazzi e balconi. Massima luminosità e facilità di accesso.",
    image: serramentoModernoNero,
    features: ["Soglia ribassata", "Vetro di sicurezza", "Maniglia ergonomica", "Sistema anti-effrazione"],
  },
  {
    id: "scorrevoli",
    name: "Scorrevoli Minimal",
    description: "Sistemi scorrevoli a scomparsa con profili ultra-sottili. Design moderno per spazi contemporanei.",
    image: serramentoScorrevoloNero,
    features: ["Profilo 20mm", "Vetro fino a 60mm", "Guide a scomparsa", "Apertura motorizzata"],
  },
];

export const CityProducts = ({ city }: CityProductsProps) => {
  return (
    <section className="section-dark section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium uppercase tracking-[0.2em] text-primary mb-4">
            I Nostri Prodotti
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            I Migliori Infissi per {city.name}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Serramenti selezionati per le specifiche esigenze climatiche di {city.name} e provincia di {city.provinceName}. 
            Prodotti con certificazione di qualità.
          </p>
        </motion.div>

        {/* Products grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.name} ${city.name} - Infissi PVC alta efficienza`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to={`/prodotti/${product.id}`}>
                  <Button variant="outline" className="w-full group/btn">
                    Scopri di più
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/prodotti">
            <Button variant="teal" size="lg">
              Vedi Tutti i Prodotti
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
