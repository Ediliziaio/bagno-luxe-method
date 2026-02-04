import { motion } from "framer-motion";
import { ClipboardCheck, Calculator, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Sopralluogo Gratuito",
    description:
      "Veniamo a casa tua entro 48 ore. Misuriamo, analizziamo, ti diamo un preventivo scritto. Se non ti convince, nessun problema.",
  },
  {
    number: "02",
    icon: Calculator,
    title: "Preventivo Trasparente",
    description:
      "Nessun costo nascosto. Prezzo finito, tutto incluso: smontaggio vecchi infissi, posa, smaltimento, pratiche bonus.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Installazione in 90 Giorni",
    description:
      "Posatori certificati nostri dipendenti. Tempi garantiti per contratto. Se sforiamo, ti rimborsiamo €200/settimana.",
  },
];

export const HomeSteps = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contatti");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-light py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium uppercase tracking-[0.2em] text-primary mb-4">
            Come Lavoriamo
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            3 step, zero pensieri
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Dalla prima chiamata all'installazione finale, gestiamo tutto noi. 
            Tu ti rilassi, noi lavoriamo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-border" />
              )}

              <div className="light-card p-8 text-center relative z-10 h-full">
                {/* Number badge */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground text-lg font-bold mb-6">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                  <step.icon className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Button
            variant="default"
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold group"
            onClick={scrollToContact}
          >
            Prenota il Tuo Sopralluogo
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
