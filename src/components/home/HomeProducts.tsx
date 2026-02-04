import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import windowAfter1 from "@/assets/window-after-1.jpg";
import windowAfter2 from "@/assets/window-after-2.jpg";
import windowAfter3 from "@/assets/window-after-3.jpg";
import windowAfter4 from "@/assets/window-after-4.jpg";
import afterBathroom1 from "@/assets/after-bathroom-1-new.jpg";
import afterBathroom2 from "@/assets/after-bathroom-2-new.jpg";

const products = [
  {
    title: "Finestre",
    description: "Sistema DOMUS 76mm con tripla guarnizione",
    image: windowAfter1,
  },
  {
    title: "Porte-Finestre",
    description: "Massima luminosità, massimo isolamento",
    image: windowAfter2,
  },
  {
    title: "Portoncini d'Ingresso",
    description: "Sicurezza e design per la tua casa",
    image: windowAfter3,
  },
  {
    title: "Tapparelle",
    description: "Avvolgibili motorizzate e manuali",
    image: windowAfter4,
  },
  {
    title: "Zanzariere",
    description: "Protezione tutto l'anno",
    image: afterBathroom1,
  },
  {
    title: "Cassonetti Coibentati",
    description: "Stop ai ponti termici",
    image: afterBathroom2,
  },
];

export const HomeProducts = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contatti");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

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
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ogni prodotto è realizzato con il Sistema DOMUS: profili da 76mm, 
            anima in acciaio zincato e tripla guarnizione per durare 30 anni.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={scrollToContact}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              {/* Background image */}
              <img
                src={product.image}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                  {product.title}
                </h3>
                <p className="text-white/70 text-sm hidden sm:block mb-2">
                  {product.description}
                </p>
                <div className="flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Richiedi info
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
