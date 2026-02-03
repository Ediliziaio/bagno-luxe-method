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
    name: "Marco B.",
    location: "Milano, Porta Nuova",
    rating: 5,
    quote: "Pagavo €280 di gas al mese. Dopo 5 preventivi ho scelto I Profili — non il più economico, ma l'unico che mi ha mostrato i dati tecnici. Prima bolletta dopo l'installazione: €182. Un investimento che si ripaga in 4 anni.",
    project: "5 Finestre + Portafinestra",
    installDate: "Febbraio 2024",
    result: "-35% bolletta gas",
    verified: true,
  },
  {
    id: 2,
    name: "Giulia R.",
    location: "Monza",
    rating: 5,
    quote: "Abitiamo su una strada trafficata. I bambini non dormivano, noi eravamo esausti. Dopo aver cambiato le finestre è come vivere in un'altra casa. Silenzio totale, anche con le ambulanze che passano.",
    project: "7 Finestre complete",
    installDate: "Marzo 2024",
    result: "-52% rumore percepito",
    verified: true,
  },
  {
    id: 3,
    name: "Francesca N.",
    location: "Brescia",
    rating: 5,
    quote: "Il preventivo di I Profili costava €800 in più degli altri. Ma solo loro mi hanno fatto vedere il certificato di trasmittanza termica. Dopo un inverno, ho capito perché: casa calda con il termostato a 19°C invece che a 22°C.",
    project: "Casa completa, 12 infissi",
    installDate: "Novembre 2023",
    result: "3°C in meno al termostato",
    verified: true,
  },
  {
    id: 4,
    name: "Alessandro V.",
    location: "Bergamo",
    rating: 5,
    quote: "Ero terrorizzato dai lavori — ho un negozio, non potevo fermarmi. Sono arrivati alle 7, hanno lavorato senza sosta e alle 14 avevano finito tutto. Zero polvere, zero problemi. Impressionante.",
    project: "4 Finestre in PVC",
    installDate: "Aprile 2024",
    result: "Installazione in 1 giorno",
    verified: true,
  },
  {
    id: 5,
    name: "Roberto C.",
    location: "Como",
    rating: 5,
    quote: "Ogni mattina passavo 10 minuti ad asciugare la condensa dai vetri. Muffa negli angoli, pareti fredde. Ora i vetri sono sempre asciutti e le pareti hanno la stessa temperatura del centro stanza. Dovevo farlo 10 anni fa.",
    project: "6 Finestre + Tapparelle",
    installDate: "Gennaio 2024",
    result: "Zero condensa",
    verified: true,
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
