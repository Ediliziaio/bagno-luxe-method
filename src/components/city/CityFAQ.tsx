import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { City } from "@/data/cities";
import { generateCityFAQs } from "@/data/cities";

interface CityFAQProps {
  city: City;
}

export const CityFAQ = ({ city }: CityFAQProps) => {
  const faqs = generateCityFAQs(city);

  return (
    <section className="section-light section-padding">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-medium uppercase tracking-[0.2em] text-primary mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Domande Frequenti sui
            <span className="text-primary"> Serramenti a {city.name}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Le risposte alle domande più comuni dei nostri clienti nella provincia di {city.provinceName}.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="light-card px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Non hai trovato la risposta che cercavi?
          </p>
          <a
            href="tel:+393513058029"
            className="text-primary font-semibold hover:underline"
          >
            Chiamaci al +39 351 305 8029
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// Helper per generare lo schema FAQPage
export const generateFAQSchema = (city: City) => {
  const faqs = generateCityFAQs(city);
  
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
};
