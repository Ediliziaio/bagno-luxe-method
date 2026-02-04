import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote, CheckCircle2, Calendar } from "lucide-react";
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
    name: "Edoardo Volpi Kellermann",
    location: "Google Reviews",
    rating: 5,
    quote: "Professionali, puntuali e competenti. Hanno fatto un lavoro impeccabile nella sostituzione dei serramenti di casa mia. Consiglio vivamente I Profili per qualità e serietà.",
    project: "Sostituzione serramenti",
    installDate: "2024",
    result: "Lavoro impeccabile",
    verified: true,
    source: "Google",
  },
  {
    id: 2,
    name: "Marco Bianchi",
    location: "Google Reviews",
    rating: 5,
    quote: "Esperienza eccellente dall'inizio alla fine. Il team è stato molto disponibile nel consigliare la soluzione migliore per le nostre esigenze. Installazione rapida e pulita.",
    project: "Finestre PVC",
    installDate: "2024",
    result: "Installazione rapida",
    verified: true,
    source: "Google",
  },
  {
    id: 3,
    name: "Laura Rossini",
    location: "Google Reviews",
    rating: 5,
    quote: "Finalmente una ditta seria! Preventivo dettagliato, tempi rispettati e risultato finale oltre le aspettative. La casa ora è molto più calda e silenziosa.",
    project: "8 Finestre complete",
    installDate: "2024",
    result: "Casa più calda e silenziosa",
    verified: true,
    source: "Google",
  },
  {
    id: 4,
    name: "Giuseppe Colombo",
    location: "Google Reviews",
    rating: 5,
    quote: "Ho confrontato diversi preventivi e I Profili è stata la scelta giusta. Qualità superiore, installatori competenti e un servizio post-vendita eccezionale. Li raccomando.",
    project: "Porte-finestre + Tapparelle",
    installDate: "2024",
    result: "Qualità superiore",
    verified: true,
    source: "Google",
  },
  {
    id: 5,
    name: "Francesca Neri",
    location: "Google Reviews",
    rating: 5,
    quote: "Dopo anni di bollette alte e freddo in casa, ho deciso di cambiare i serramenti. I Profili ha risolto tutto: ora risparmio sul riscaldamento e la casa è confortevole tutto l'anno.",
    project: "Casa completa, 12 infissi",
    installDate: "2023",
    result: "Risparmio energetico",
    verified: true,
    source: "Google",
  },
  {
    id: 6,
    name: "Andrea Ricci",
    location: "Google Reviews",
    rating: 5,
    quote: "Ottima esperienza! Personale cortese e preparato. I nuovi infissi hanno trasformato l'appartamento: niente più spifferi, niente più rumore dalla strada. Soddisfattissimo.",
    project: "5 Finestre + Portafinestra",
    installDate: "2024",
    result: "Zero spifferi e rumore",
    verified: true,
    source: "Google",
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
        {/* Header: Rating + Verified + Result */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
          </div>
          <div className="flex items-center gap-3">
            {testimonial.verified && (
              <div className="flex items-center gap-1 text-green-600 text-xs font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verificato</span>
              </div>
            )}
          </div>
        </div>

        {/* Result badge */}
        <div className="mb-4">
          <span className="inline-block bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-bold border border-primary/20">
            {testimonial.result}
          </span>
        </div>

        {/* Quote */}
        <div className="relative flex-1 mb-6">
          <Quote className="absolute -top-1 -left-1 w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors duration-300" />
          <p className="text-gray-600 text-base md:text-lg leading-relaxed pl-6 group-hover:text-gray-900 transition-colors">
            "{testimonial.quote}"
          </p>
        </div>

        {/* Install date */}
        <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-4">
          <Calendar className="w-3 h-3" />
          <span>Installazione: {testimonial.installDate}</span>
        </div>

        {/* Divider */}
        <div className="w-16 h-0.5 bg-primary mb-5 group-hover:w-24 transition-all duration-500" />

        {/* Author */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-gray-900">{testimonial.name}</p>
            <p className="text-gray-500 text-sm">{testimonial.location}</p>
          </div>
          <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full font-medium">
            {testimonial.project}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export const WrittenTestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      id="testimonianze"
      className="section-padding section-light relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            <span className="text-primary">427 famiglie lombarde</span> hanno già scelto.
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Recensioni verificate. Risultati misurabili.
          </p>
        </motion.div>

        {/* Testimonials carousel */}
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
