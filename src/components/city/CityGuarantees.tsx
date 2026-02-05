import { motion } from "framer-motion";
import { Shield, Clock, Wrench, FileText } from "lucide-react";
import type { City } from "@/data/cities";

interface CityGuaranteesProps {
  city: City;
}

const guarantees = [
  {
    icon: Shield,
    title: "Garanzia 10 Anni",
    subtitle: "Su profili e ferramenta",
    description: "Copertura completa su tutti i componenti strutturali dei serramenti. In caso di difetti, interveniamo gratuitamente.",
  },
  {
    icon: Wrench,
    title: "Garanzia 5 Anni",
    subtitle: "Sulla posa in opera",
    description: "La nostra posa certificata è garantita. Qualsiasi problema legato all'installazione viene risolto a nostro carico.",
  },
  {
    icon: Clock,
    title: "Tempi Garantiti",
    subtitle: "Penali contrattuali",
    description: "Se non rispettiamo le tempistiche concordate, penali scritte in contratto a nostro favore. Zero sorprese.",
  },
  {
    icon: FileText,
    title: "Tutto per Iscritto",
    subtitle: "Contratto trasparente",
    description: "Ogni promessa è scritta nel contratto: materiali, tempi, garanzie, penali. Nessun accordo verbale, massima trasparenza.",
  },
];

export const CityGuarantees = ({ city }: CityGuaranteesProps) => {
  return (
    <section className="section-dark section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium uppercase tracking-[0.2em] text-primary mb-4">
            Le Nostre Garanzie
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Le Nostre Garanzie per i Clienti
            <span className="text-primary"> di {city.name}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Non chiediamo fiducia cieca. Mettiamo tutto per iscritto, con garanzie concrete e penali a nostro carico.
          </p>
        </motion.div>

        {/* Guarantees grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={guarantee.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <guarantee.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">{guarantee.title}</h3>
                <span className="text-sm text-primary font-medium block mb-3">{guarantee.subtitle}</span>
                <p className="text-muted-foreground">{guarantee.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-card p-8 text-center"
        >
          <p className="text-lg text-foreground mb-4">
            <strong>Perché ci esponiamo così tanto?</strong>
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Perché sappiamo cosa facciamo. In 15 anni di attività, non abbiamo mai pagato una penale. 
            I nostri clienti a {city.name} e in tutta la Lombardia possono testimoniarlo. 
            Quando sei sicuro della qualità del tuo lavoro, garantire è facile.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
