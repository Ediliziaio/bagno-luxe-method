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
    location: "Milano Centro",
    rating: 5,
    quote:
      "Finalmente una ristrutturazione senza sorprese. Tempi rispettati, preventivo rispettato. Il bagno è esattamente come lo avevo immaginato.",
    project: "Bagno Padronale",
  },
  {
    id: 2,
    name: "Giulia Rossi",
    location: "Porta Nuova",
    rating: 5,
    quote:
      "Avevo paura del solito cantiere infinito. Invece in 3 settimane avevo il mio bagno nuovo. Professionalità assoluta.",
    project: "Bagno Ospiti",
  },
  {
    id: 3,
    name: "Alessandro Verdi",
    location: "Brera",
    rating: 5,
    quote:
      "Ho rifatto 2 bagni con loro. La differenza rispetto ad altre esperienze è abissale. Un unico referente, zero stress.",
    project: "2 Bagni Completi",
  },
  {
    id: 4,
    name: "Francesca Neri",
    location: "Navigli",
    rating: 5,
    quote:
      "Materiali di qualità superiore e una cura nei dettagli che non mi aspettavo. Vale ogni centesimo.",
    project: "Suite Bagno",
  },
  {
    id: 5,
    name: "Roberto Conti",
    location: "Isola",
    rating: 5,
    quote:
      "Dal primo sopralluogo alla consegna: tutto perfetto. Il preventivo era quello finale, nessun extra.",
    project: "Ristrutturazione Totale",
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
      <div className="bg-card border border-primary/20 rounded-lg p-6 md:p-8 h-full flex flex-col hover:border-primary/40 transition-colors duration-300">
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
          <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
          <p className="text-foreground/90 text-base md:text-lg leading-relaxed pl-4">
            "{testimonial.quote}"
          </p>
        </div>

        {/* Divider */}
        <div className="w-12 h-0.5 bg-primary mb-4" />

        {/* Author */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-foreground">{testimonial.name}</p>
            <p className="text-muted-foreground text-sm">{testimonial.location}</p>
          </div>
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
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
      className="py-20 md:py-32 bg-secondary/30"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            COSA DICONO I <span className="text-primary">NOSTRI CLIENTI</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Storie vere di trasformazioni riuscite. Nessun compromesso, solo risultati.
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
              <CarouselPrevious className="static translate-y-0 border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary" />
              <CarouselNext className="static translate-y-0 border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};
