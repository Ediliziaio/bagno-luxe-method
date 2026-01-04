import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import detailBathroom from "@/assets/detail-bathroom.jpg";

export const AuthoritySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8">
              Specialisti del bagno.
              <br />
              <span className="text-primary">Non generalisti.</span>
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-muted-foreground">
              <p>
                Architetto del Bagno nasce per fare una cosa sola, ma farla meglio di chiunque altro:
                <span className="text-foreground font-medium"> ristrutturazioni bagno complete, senza compromessi.</span>
              </p>

              <p>
                Non siamo un'impresa "che fa anche bagni".
                <br />
                Siamo specialisti che lavorano con:
              </p>

              <ul className="space-y-3 text-foreground">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  processi chiari
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  responsabilità totale
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  standard premium
                </li>
              </ul>

              <p className="pt-6 border-t border-border text-foreground">
                Questo è il motivo per cui i nostri clienti ci scelgono
                <span className="text-primary font-medium"> non per spendere meno, ma per dormire tranquilli.</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={detailBathroom}
                alt="Dettaglio rubinetto in ottone su marmo bianco"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
