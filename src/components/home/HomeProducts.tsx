import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products as productData } from "@/data/products";

const featuredProducts = [
  { id: "domus", ...productData.domus },
  { id: "lumier", ...productData.lumier },
  { id: "idole", ...productData.idole },
  { id: "alum", ...productData.alum },
  { id: "legno-alluminio", ...productData["legno-alluminio"] },
  { id: "persiane", ...productData.persiane },
];

export const HomeProducts = () => {
  return (
    <section id="prodotti" className="section-light py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-medium uppercase tracking-[0.2em] text-primary mb-4">
            I Nostri Prodotti
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Serramenti in PVC ad alto isolamento
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/prodotti/${product.id}`}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] block"
              >
                {/* Background image */}
                <img
                  src={product.heroImage}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    {product.name}
                  </h3>
                  <p className="text-white/70 text-sm hidden sm:block mb-2">
                    {product.tagline}
                  </p>
                  <div className="flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Scopri di più
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
