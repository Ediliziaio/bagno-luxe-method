import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const projects = [
  {
    id: 1,
    image: portfolio1,
    title: "Villa Bifamiliare",
    location: "Bergamo, Città Alta",
    result: "-45% bolletta gas",
    resultColor: "bg-green-500",
  },
  {
    id: 2,
    image: portfolio2,
    title: "Appartamento Centro Storico",
    location: "Milano, Navigli",
    result: "-38% dispersione termica",
    resultColor: "bg-primary",
  },
  {
    id: 3,
    image: portfolio3,
    title: "Villetta Indipendente",
    location: "Brescia",
    result: "-52% rumore esterno",
    resultColor: "bg-blue-500",
  },
  {
    id: 4,
    image: portfolio4,
    title: "Condominio Anni '60",
    location: "Monza",
    result: "-40% costi riscaldamento",
    resultColor: "bg-amber-500",
  },
  {
    id: 5,
    image: portfolio5,
    title: "Attico con Terrazzo",
    location: "Como",
    result: "Zero condensa",
    resultColor: "bg-green-500",
  },
  {
    id: 6,
    image: portfolio6,
    title: "Bifamiliare Ristrutturata",
    location: "Varese",
    result: "Da classe G a C",
    resultColor: "bg-primary",
  },
];

export const ResultsGallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding section-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Case come la tua.{" "}
            <span className="text-primary">Risultati misurabili.</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Non parliamo di "qualità". Parliamo di numeri: bollette, rumore, dispersione.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Result badge */}
                <div className={`absolute top-4 right-4 ${project.resultColor} text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg`}>
                  {project.result}
                </div>

                {/* Project info */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-lg mb-1">{project.title}</h3>
                  <p className="text-white/80 text-sm">{project.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
