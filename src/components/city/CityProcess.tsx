import { motion } from "framer-motion";
import { ClipboardCheck, Calculator, Factory, Wrench, CheckCircle } from "lucide-react";
import type { City } from "@/data/cities";

interface CityProcessProps {
  city: City;
}

const steps = [
  {
    icon: ClipboardCheck,
    title: "Sopralluogo",
    timing: "Entro 48 ore",
    description: "Un nostro tecnico viene a casa tua per valutare lo stato degli infissi, prendere le misure e capire le tue esigenze.",
  },
  {
    icon: Calculator,
    title: "Preventivo",
    timing: "In 7 giorni",
    description: "Ricevi un preventivo dettagliato e trasparente, con tutte le voci di costo chiare e senza sorprese.",
  },
  {
    icon: Factory,
    title: "Produzione",
    timing: "4-6 settimane",
    description: "I tuoi serramenti vengono prodotti su misura in Italia, con materiali certificati e controlli qualità rigorosi.",
  },
  {
    icon: Wrench,
    title: "Installazione",
    timing: "1-2 giorni",
    description: "I nostri posatori certificati installano i serramenti seguendo un protocollo a 7 fasi, senza polvere né disagi.",
  },
  {
    icon: CheckCircle,
    title: "Collaudo",
    timing: "Stesso giorno",
    description: "Verifichiamo insieme il perfetto funzionamento di ogni serramento e ti spieghiamo manutenzione e garanzie.",
  },
];

export const CityProcess = ({ city }: CityProcessProps) => {
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
            Il Nostro Metodo
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Come Installiamo i Tuoi
            <span className="text-primary"> Serramenti a {city.name}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un processo collaudato in oltre 2.500 installazioni. Tempi certi, qualità garantita, zero pensieri per te.
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 -translate-y-1/2" />

          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Step number */}
                <div className="lg:absolute lg:-top-4 lg:left-1/2 lg:-translate-x-1/2 mb-4 lg:mb-0">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-lg mx-auto lg:mx-0">
                    {index + 1}
                  </div>
                </div>

                {/* Card */}
                <div className="glass-card p-6 text-center lg:mt-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{step.title}</h3>
                  <span className="text-sm text-primary font-medium block mb-3">{step.timing}</span>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Guarantee banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-card p-8 text-center"
        >
          <p className="text-lg text-foreground mb-2">
            <strong>Garanzia Tempi Certi:</strong> Se non rispettiamo le tempistiche concordate, 
          </p>
          <p className="text-2xl font-bold text-primary">
            Penali scritte in contratto a nostro carico
          </p>
          <p className="text-muted-foreground mt-2">
            Per i clienti di {city.name}, garantiamo sopralluogo entro 48 ore dalla richiesta.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
