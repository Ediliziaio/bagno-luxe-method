import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Edoardo Volpi Kellermann",
    rating: 5,
    quote: "Professionali, puntuali e competenti. Hanno fatto un lavoro impeccabile nella sostituzione dei serramenti di casa mia. Consiglio vivamente I Profili per qualità e serietà.",
    result: "Lavoro impeccabile",
  },
  {
    id: 2,
    name: "Marco Bianchi",
    rating: 5,
    quote: "Esperienza eccellente dall'inizio alla fine. Il team è stato molto disponibile nel consigliare la soluzione migliore per le nostre esigenze. Installazione rapida e pulita.",
    result: "Installazione rapida",
  },
  {
    id: 3,
    name: "Laura Rossini",
    rating: 5,
    quote: "Finalmente una ditta seria! Preventivo dettagliato, tempi rispettati e risultato finale oltre le aspettative. La casa ora è molto più calda e silenziosa.",
    result: "Casa più calda e silenziosa",
  },
  {
    id: 4,
    name: "Giuseppe Colombo",
    rating: 5,
    quote: "Ho confrontato diversi preventivi e I Profili è stata la scelta giusta. Qualità superiore, installatori competenti e un servizio post-vendita eccezionale.",
    result: "Qualità superiore",
  },
  {
    id: 5,
    name: "Francesca Neri",
    rating: 5,
    quote: "Dopo anni di bollette alte e freddo in casa, ho deciso di cambiare i serramenti. I Profili ha risolto tutto: ora risparmio sul riscaldamento e la casa è confortevole tutto l'anno.",
    result: "Risparmio energetico",
  },
  {
    id: 6,
    name: "Andrea Ricci",
    rating: 5,
    quote: "Ottima esperienza! Personale cortese e preparato. I nuovi infissi hanno trasformato l'appartamento: niente più spifferi, niente più rumore dalla strada.",
    result: "Zero spifferi e rumore",
  },
];

export const HomeTestimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  return (
    <section
      ref={sectionRef}
      className="section-padding section-light relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
            Recensioni Verificate
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Cosa dicono i <span className="text-primary">nostri clienti</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oltre 400 famiglie lombarde hanno già scelto I Profili.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="overflow-hidden"
          ref={emblaRef}
        >
          <div className="flex -ml-4">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <div className="light-card p-6 h-full flex flex-col border-l-4 border-l-primary">
                  {/* Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-green-600 text-xs font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Google</span>
                    </div>
                  </div>

                  {/* Result badge */}
                  <div className="mb-3">
                    <span className="inline-block bg-primary/10 text-primary px-2.5 py-1 rounded-full text-xs font-bold">
                      {testimonial.result}
                    </span>
                  </div>

                  {/* Quote */}
                  <div className="relative flex-1 mb-4">
                    <Quote className="absolute -top-1 -left-1 w-6 h-6 text-primary/20" />
                    <p className="text-muted-foreground text-sm leading-relaxed pl-5 line-clamp-4">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-12 h-0.5 bg-primary mb-4" />

                  {/* Author */}
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Button
            variant="tealOutline"
            size="lg"
            className="rounded-full px-8"
            onClick={() => {
              window.open("https://www.google.com/search?q=I+Profili+recensioni", "_blank");
            }}
          >
            Leggi tutte le recensioni
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
