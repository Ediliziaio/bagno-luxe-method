import { motion } from "framer-motion";
import { Percent, CreditCard, FileCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Percent,
    title: "Detrazione 50%",
    description: "Recupera la metà della spesa in 10 rate annuali con l'Ecobonus.",
  },
  {
    icon: CreditCard,
    title: "Pagamento Rateizzato",
    description: "Finanziamenti personalizzati a tasso zero o agevolato.",
  },
  {
    icon: FileCheck,
    title: "Pratiche Incluse",
    description: "Gestiamo noi tutta la documentazione per le detrazioni fiscali.",
  },
];

export const HomeFinancing = () => {
  return (
    <section className="section-dark py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-sm font-medium uppercase tracking-[0.2em] text-primary mb-4">
              Finanziamenti
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Approfitta dei finanziamenti,{" "}
              <span className="text-primary">senza rinunce</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Non rimandare il comfort per motivi economici. Offriamo soluzioni di pagamento 
              flessibili e ti aiutiamo ad ottenere tutte le agevolazioni fiscali disponibili. 
              I nuovi serramenti si ripagano da soli grazie al risparmio energetico.
            </p>

            <Button
              variant="teal"
              size="lg"
              className="group"
              onClick={() => {
                const element = document.querySelector("#contatti");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Richiedi Informazioni
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Right: Benefits cards */}
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 flex items-start gap-5"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
