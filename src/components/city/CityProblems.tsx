import { motion } from "framer-motion";
import { Thermometer, Volume2, Euro, AlertTriangle, Droplets, Wind } from "lucide-react";
import type { City } from "@/data/cities";

interface CityProblemsProps {
  city: City;
}

const problems = [
  {
    icon: Thermometer,
    title: "Dispersione Termica",
    description: "Fino al 40% del calore si disperde attraverso infissi vecchi o mal installati, facendo lievitare le bollette.",
  },
  {
    icon: Volume2,
    title: "Rumore Esterno",
    description: "Traffico, vicini rumorosi e inquinamento acustico che compromettono la qualità della vita in casa.",
  },
  {
    icon: Euro,
    title: "Bollette Elevate",
    description: "Spese di riscaldamento e raffrescamento fuori controllo a causa di serramenti inefficienti.",
  },
  {
    icon: Droplets,
    title: "Condensa e Muffa",
    description: "Gocce sui vetri, condensa sugli infissi e formazione di muffa negli angoli delle finestre.",
  },
  {
    icon: Wind,
    title: "Spifferi e Correnti",
    description: "Aria fredda che entra dalle guarnizioni usurate, creando zone fredde e disagio.",
  },
  {
    icon: AlertTriangle,
    title: "Sicurezza Insufficiente",
    description: "Serramenti datati che non offrono adeguata protezione contro le effrazioni.",
  },
];

export const CityProblems = ({ city }: CityProblemsProps) => {
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
            Il Problema
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Perché a {city.name} le Finestre
            <span className="text-primary"> Fanno la Differenza</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {city.climateNote}
          </p>
        </motion.div>

        {/* Local context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="light-card p-8 mb-12"
        >
          <h3 className="text-xl font-bold mb-4">
            La situazione a {city.name}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {city.localDescription}
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-foreground">Tipologie edilizie comuni:</span>
            {city.commonBuildingTypes.map((type, index) => (
              <span
                key={index}
                className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
              >
                {type}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Problems grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="light-card p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-bold mb-2">{problem.title}</h3>
              <p className="text-muted-foreground text-sm">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid sm:grid-cols-3 gap-6"
        >
          <div className="text-center p-6 light-card">
            <span className="block text-4xl font-bold text-destructive mb-2">40%</span>
            <span className="text-muted-foreground">Dispersione termica attraverso infissi obsoleti</span>
          </div>
          <div className="text-center p-6 light-card">
            <span className="block text-4xl font-bold text-destructive mb-2">€800</span>
            <span className="text-muted-foreground">Spesa extra annua in riscaldamento</span>
          </div>
          <div className="text-center p-6 light-card">
            <span className="block text-4xl font-bold text-destructive mb-2">70%</span>
            <span className="text-muted-foreground">Case in Lombardia con infissi inefficienti</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
