import { motion } from "framer-motion";
import { MapPin, Users, Clock, Award, Wrench, Shield } from "lucide-react";
import type { City } from "@/data/cities";

interface CityWhyUsProps {
  city: City;
}

export const CityWhyUs = ({ city }: CityWhyUsProps) => {
  const reasons = [
    {
      icon: MapPin,
      title: "Vicinanza al Tuo Territorio",
      description: city.distanceFromShowroom === 0 
        ? `Il nostro showroom si trova proprio a ${city.name}. Siamo a disposizione per qualsiasi esigenza, con tempi di intervento immediati.`
        : `Il nostro showroom a Busto Arsizio dista solo ${city.distanceFromShowroom} km da ${city.name}. Garantiamo sopralluogo in 48 ore e interventi rapidi.`,
    },
    {
      icon: Users,
      title: "Posatori che Conoscono la Zona",
      description: `I nostri installatori operano regolarmente a ${city.name} e conoscono le specificità degli edifici locali: ${city.commonBuildingTypes.slice(0, 2).join(", ").toLowerCase()} e molto altro.`,
    },
    {
      icon: Clock,
      title: "Tempi Certi Garantiti",
      description: `Per i clienti di ${city.name} garantiamo: sopralluogo in 48 ore, preventivo in 7 giorni, installazione in 4-6 settimane. Penali scritte in contratto per ritardi.`,
    },
    {
      icon: Award,
      title: "Esperienza Consolidata",
      description: `Oltre 15 anni di esperienza e più di 2.500 clienti soddisfatti in Lombardia. Decine di installazioni già completate nella provincia di ${city.provinceName}.`,
    },
    {
      icon: Wrench,
      title: "Posa Certificata",
      description: "I nostri posatori sono certificati e seguono un protocollo di installazione a 7 fasi. La posa corretta è il 70% del risultato finale.",
    },
    {
      icon: Shield,
      title: "Garanzia Totale",
      description: "Garanzia 10 anni su profili e ferramenta, 5 anni sulla posa in opera. Assistenza post-vendita a vita per tutti i clienti.",
    },
  ];

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
            Perché Noi
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Perché Siamo il Partner Ideale per i Tuoi
            <span className="text-primary"> Infissi a {city.name}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Non siamo solo venditori di finestre. Siamo partner per il comfort della tua casa a {city.name}.
          </p>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="light-card p-8"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid sm:grid-cols-4 gap-6"
        >
          <div className="text-center p-6">
            <span className="block text-4xl font-bold text-primary mb-2">15+</span>
            <span className="text-muted-foreground">Anni di Esperienza</span>
          </div>
          <div className="text-center p-6">
            <span className="block text-4xl font-bold text-primary mb-2">2.500+</span>
            <span className="text-muted-foreground">Clienti Soddisfatti</span>
          </div>
          <div className="text-center p-6">
            <span className="block text-4xl font-bold text-primary mb-2">30.000+</span>
            <span className="text-muted-foreground">Finestre Installate</span>
          </div>
          <div className="text-center p-6">
            <span className="block text-4xl font-bold text-primary mb-2">4.9/5</span>
            <span className="text-muted-foreground">Valutazione Media</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
