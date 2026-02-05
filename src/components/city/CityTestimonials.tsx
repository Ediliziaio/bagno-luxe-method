import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import type { City } from "@/data/cities";

interface CityTestimonialsProps {
  city: City;
}

// Testimonianze template (da personalizzare per città)
const getTestimonials = (city: City) => [
  {
    name: "Marco R.",
    location: city.name,
    rating: 5,
    text: `Abbiamo sostituito tutte le finestre del nostro appartamento a ${city.name}. Dalla prima telefonata all'installazione, tutto è stato impeccabile. Il caldo d'estate e il freddo d'inverno sono solo un ricordo. Consigliatissimi!`,
    project: "Appartamento 90mq - 6 finestre",
  },
  {
    name: "Laura B.",
    location: city.name,
    rating: 5,
    text: `Finalmente silenzio! Abitando in zona trafficata a ${city.name}, il rumore era un problema serio. Con i nuovi serramenti la differenza è incredibile. Posatori professionali e puntuali.`,
    project: "Condominio - 4 finestre + porta-finestra",
  },
  {
    name: "Giuseppe M.",
    location: `Provincia di ${city.provinceName}`,
    rating: 5,
    text: `Preventivo dettagliato, nessuna sorpresa finale. I tempi sono stati rispettati alla lettera e la qualità è evidente. La bolletta del riscaldamento è scesa del 35% rispetto all'anno scorso.`,
    project: "Villetta - 12 infissi completi",
  },
];

export const CityTestimonials = ({ city }: CityTestimonialsProps) => {
  const testimonials = getTestimonials(city);

  return (
    <section className="section-light section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium uppercase tracking-[0.2em] text-primary mb-4">
            Testimonianze
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Cosa Dicono i Nostri Clienti
            <span className="text-primary"> a {city.name}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Le opinioni di chi ha già scelto i nostri serramenti nella provincia di {city.provinceName}.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="light-card p-8 relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border/30 pt-4">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                <p className="text-sm text-primary mt-1">{testimonial.project}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rating summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 light-card p-8 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-3xl font-bold mb-2">4.9/5</p>
          <p className="text-muted-foreground">
            Basato su 127 recensioni verificate • Oltre 2.500 clienti soddisfatti in Lombardia
          </p>
        </motion.div>
      </div>
    </section>
  );
};
