import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cities as allCities, type City } from "@/data/cities";

interface CityNearbyProps {
  city: City;
}

export const CityNearby = ({ city }: CityNearbyProps) => {
  // Take up to 9 other cities from same province, fallback: 6 same province + 3 Lombardia top
  const sameProvince = allCities
    .filter((c) => c.province === city.province && c.slug !== city.slug)
    .sort((a, b) => b.population - a.population)
    .slice(0, 9);

  const otherProvinces = allCities
    .filter((c) => c.province !== city.province)
    .sort((a, b) => b.population - a.population)
    .slice(0, 6);

  const nearby = sameProvince.length >= 6 ? sameProvince : [...sameProvince, ...otherProvinces].slice(0, 9);

  if (nearby.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-muted/30 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider rounded-full mb-4">
            <MapPin className="w-4 h-4" />
            Serviamo anche
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Infissi nelle città vicine a {city.name}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Operiamo in tutta la provincia di {city.provinceName} e in Lombardia. Scopri il nostro servizio nella tua zona.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
          {nearby.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
            >
              <Link
                to={`/serramenti/${c.slug}`}
                className="group flex items-center justify-between bg-card border border-border/50 hover:border-primary/40 rounded-xl px-4 py-3 transition-colors"
                title={`Infissi e serramenti a ${c.name}`}
              >
                <div>
                  <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                    Infissi {c.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {c.provinceName}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            Vedi tutte le zone servite
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
