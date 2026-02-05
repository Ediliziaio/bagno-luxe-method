import { motion } from "framer-motion";
import { Percent, CreditCard, FileText, Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { City } from "@/data/cities";

interface CityBenefitsProps {
  city: City;
}

export const CityBenefits = ({ city }: CityBenefitsProps) => {
  const scrollToContact = () => {
    const element = document.querySelector("#contatti-citta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-accent section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium uppercase tracking-[0.2em] text-white/80 mb-4">
            Incentivi e Bonus
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Bonus Infissi 2026: Risparmia sui Tuoi
            <span className="block">Serramenti a {city.name}</span>
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Approfitta degli incentivi fiscali ancora disponibili. Ti guidiamo in tutto l'iter burocratico.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4">
              <Percent className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Detrazione 50%</h3>
            <p className="text-white/80 text-sm">
              Bonus ristrutturazione: recupera la metà della spesa in 10 anni
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Finanziamento</h3>
            <p className="text-white/80 text-sm">
              Pagamenti dilazionati fino a 60 mesi a tasso agevolato
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Pratica Gestita</h3>
            <p className="text-white/80 text-sm">
              Ci occupiamo noi di tutta la documentazione ENEA e fiscale
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-card p-6 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Ecobonus</h3>
            <p className="text-white/80 text-sm">
              Detrazioni maggiorate per interventi di efficientamento energetico
            </p>
          </motion.div>
        </div>

        {/* Case Green Alert */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 mb-12"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-4">
                Direttiva Case Green: Prepara la Tua Casa a {city.name}
              </h3>
              <p className="text-white/90 mb-4">
                La Direttiva Europea Case Green richiede che entro il <strong>2030</strong> tutti gli edifici 
                residenziali raggiungano almeno la classe energetica E. La sostituzione degli infissi è uno 
                degli interventi più efficaci per migliorare la classe energetica della tua casa.
              </p>
              <p className="text-white/80 text-sm">
                Non aspettare che i prezzi aumentino. Intervieni ora e approfitta degli incentivi ancora disponibili.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-2">2030</div>
              <div className="text-white/80">Scadenza EU</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="btn-white"
            onClick={scrollToContact}
          >
            Richiedi Consulenza sui Bonus
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
