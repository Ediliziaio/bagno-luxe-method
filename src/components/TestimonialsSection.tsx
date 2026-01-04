import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Marco Bianchi",
    location: "Milano - Porta Nuova",
    rating: 5,
    quote:
      "Bolletta del gas diminuita del 35%. Non ci credevo finché non ho visto la prima bolletta dopo l'installazione. Un investimento che si ripaga da solo.",
    project: "5 Finestre + Portafinestra",
  },
  {
    id: 2,
    name: "Giulia Rossi",
    location: "Monza",
    rating: 5,
    quote:
      "Finalmente silenzio! Abitiamo su una strada trafficata e adesso non sentiamo più nulla. I bambini dormono tranquilli.",
    project: "7 Finestre complete",
  },
  {
    id: 3,
    name: "Alessandro Verdi",
    location: "Bergamo",
    rating: 5,
    quote:
      "L'installazione è stata impeccabile. Sono arrivati puntuali, hanno lavorato in modo pulito e in mezza giornata avevano finito tutto.",
    project: "4 Finestre in PVC",
  },
  {
    id: 4,
    name: "Francesca Neri",
    location: "Brescia",
    rating: 5,
    quote:
      "Ho confrontato 5 preventivi. I Profili non era il più economico, ma era l'unico che mi ha spiegato tutto nel dettaglio. Qualità superiore.",
    project: "Casa completa",
  },
  {
    id: 5,
    name: "Roberto Conti",
    location: "Como",
    rating: 5,
    quote:
      "Niente più condensa sui vetri la mattina. La casa è calda in modo uniforme. Avrei dovuto farlo anni fa.",
    project: "6 Finestre + Tapparelle",
  },
];

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <div className="light-card p-6 md:p-8 h-full flex flex-col group cursor-default border-l-4 border-l-primary">
        {/* Rating with animation */}
        <div className="flex gap-1 mb-5">
          {[...Array(testimonial.rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <Star className="w-5 h-5 fill-primary text-primary" />
            </motion.div>
          ))}
        </div>

        {/* Quote with enhanced styling */}
        <div className="relative flex-1 mb-6">
          <Quote className="absolute -top-1 -left-1 w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors duration-300" />
          <p className="text-gray-600 text-base md:text-lg leading-relaxed pl-6 group-hover:text-gray-900 transition-colors">
            "{testimonial.quote}"
          </p>
        </div>

        {/* Divider */}
        <div className="w-16 h-0.5 bg-primary mb-5 group-hover:w-24 transition-all duration-500" />

        {/* Author */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-gray-900">{testimonial.name}</p>
            <p className="text-gray-500 text-sm">{testimonial.location}</p>
          </div>
          <span className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full border border-primary/20 font-medium">
            {testimonial.project}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      id="recensioni"
      className="section-padding section-light relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            COSA DICONO I <span className="text-primary">NOSTRI CLIENTI</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Storie vere di famiglie lombarde che hanno scelto I Profili. 
            <span className="text-gray-900 font-medium"> Bollette ridotte, comfort aumentato.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <TestimonialCard testimonial={testimonial} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-10">
              <CarouselPrevious className="static translate-y-0 border-primary/30 bg-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-300" />
              <CarouselNext className="static translate-y-0 border-primary/30 bg-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-300" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};
