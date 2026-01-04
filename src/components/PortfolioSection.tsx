import { useState, useCallback, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const projects = [
  {
    id: 1,
    title: "Residenza Porta Nuova",
    description: "Bagno padronale con vasca freestanding e rivestimenti in marmo Calacatta. Un progetto che unisce eleganza senza tempo e funzionalità moderna.",
    features: ["Marmo Calacatta", "Rubinetteria oro satinato", "Vasca freestanding"],
    image: portfolio1,
  },
  {
    id: 2,
    title: "Attico Brera",
    description: "Design contemporaneo con doccia walk-in e pavimento in marmo nero. Contrasti raffinati per un ambiente sofisticato.",
    features: ["Marmo nero Marquina", "Doccia walk-in", "Profili in ottone"],
    image: portfolio2,
  },
  {
    id: 3,
    title: "Villa Sempione",
    description: "Suite bagno con doppio lavabo e specchi retroilluminati. Illuminazione d'atmosfera per un'esperienza spa quotidiana.",
    features: ["Doppio lavabo", "Specchi LED", "Mobile sospeso"],
    image: portfolio3,
  },
  {
    id: 4,
    title: "Loft Navigli",
    description: "Ambiente spa con vasca centrale e materiali naturali. Un rifugio di pace nel cuore della città.",
    features: ["Vasca in pietra", "Legno naturale", "Vetrate a tutta altezza"],
    image: portfolio4,
  },
];

export const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  
  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  useEffect(() => {
    if (!api) return;
    
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const openLightbox = useCallback((project: typeof projects[0], index: number) => {
    setSelectedProject(project);
    setLightboxIndex(index);
  }, []);

  const navigateLightbox = useCallback((direction: "prev" | "next") => {
    const newIndex = direction === "prev" 
      ? (lightboxIndex - 1 + projects.length) % projects.length
      : (lightboxIndex + 1) % projects.length;
    setLightboxIndex(newIndex);
    setSelectedProject(projects[newIndex]);
  }, [lightboxIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === "ArrowLeft") navigateLightbox("prev");
      if (e.key === "ArrowRight") navigateLightbox("next");
      if (e.key === "Escape") setSelectedProject(null);
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, navigateLightbox]);

  return (
    <section ref={ref} id="portfolio" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            I Nostri Progetti
          </h2>
          <p className="text-xl md:text-2xl text-primary font-medium">
            Eccellenza che si vede.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="px-4 md:px-12"
        >
          <Carousel
            setApi={setApi}
            plugins={[autoplayPlugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div
                    onClick={() => openLightbox(project, index)}
                    className="group cursor-pointer relative overflow-hidden border border-primary/20 hover:border-primary/60 transition-all duration-500"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.features.slice(0, 2).map((feature) => (
                          <span
                            key={feature}
                            className="text-xs text-muted-foreground border border-primary/30 px-2 py-1"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 bg-background/80 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="hidden md:flex -right-4 bg-background/80 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground" />
          </Carousel>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  current === index 
                    ? "bg-primary w-6" 
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 bg-background/95 backdrop-blur-xl border-primary/20 overflow-hidden">
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-4 right-4 z-50 p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {selectedProject && (
            <div className="h-full flex flex-col md:flex-row">
              {/* Image section */}
              <div className="relative flex-1 min-h-[40vh] md:min-h-full">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation arrows */}
                <button
                  onClick={() => navigateLightbox("prev")}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-background/60 backdrop-blur-sm border border-primary/30 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => navigateLightbox("next")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-background/60 backdrop-blur-sm border border-primary/30 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Details section */}
              <div className="w-full md:w-96 p-8 flex flex-col justify-center bg-background/80">
                <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
                  Progetto {lightboxIndex + 1} / {projects.length}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {selectedProject.description}
                </p>
                <div className="space-y-3">
                  <span className="text-sm text-primary font-medium tracking-wider uppercase">
                    Caratteristiche
                  </span>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
