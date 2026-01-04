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
      <div className="glass-card rounded-xl p-6 md:p-8 h-full flex flex-col hover:border-primary/50 transition-all duration-300">
        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-primary text-primary"
            />
          ))}
        </div>

        {/* Quote */}
        <div className="relative flex-1 mb-6">
          <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/30" />
          <p className="text-foreground/90 text-base md:text-lg leading-relaxed pl-4">
            "{testimonial.quote}"
          </p>
        </div>

        {/* Divider */}
        <div className="w-12 h-0.5 bg-primary mb-4 teal-glow-subtle" />

        {/* Author */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-foreground">{testimonial.name}</p>
            <p className="text-muted-foreground text-sm">{testimonial.location}</p>
          </div>
          <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded border border-primary/30">
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
      className="py-20 md:py-32 section-gradient relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/8 rounded-full blur-[80px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            COSA DICONO I <span className="text-primary text-glow">NOSTRI CLIENTI</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Storie vere di famiglie lombarde che hanno scelto I Profili. Bollette ridotte, comfort aumentato.
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
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 border-primary/30 bg-card/50 hover:bg-primary hover:text-primary-foreground hover:border-primary" />
              <CarouselNext className="static translate-y-0 border-primary/30 bg-card/50 hover:bg-primary hover:text-primary-foreground hover:border-primary" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};
