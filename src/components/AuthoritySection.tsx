import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Shield, ThumbsUp } from "lucide-react";

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
              Specialisti in finestre PVC.
              <br />
              <span className="text-primary">Non tuttologi.</span>
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-muted-foreground">
              <p>
                I Profili nasce per fare una cosa sola, ma farla meglio di chiunque altro:
                <span className="text-foreground font-medium"> finestre in PVC ad alta efficienza, installate a regola d'arte.</span>
              </p>

              <p>
                Non siamo un'azienda "che fa anche finestre".
                <br />
                Siamo specialisti che lavorano con:
              </p>

              <ul className="space-y-3 text-foreground">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  processi standardizzati e verificati
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  materiali certificati classe A
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  installatori formati e specializzati
                </li>
              </ul>

              <p className="pt-6 border-t border-border text-foreground">
                Questo è il motivo per cui i nostri clienti ci scelgono
                <span className="text-primary font-medium"> non per spendere meno, ma per risparmiare davvero.</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-background border border-border p-8 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">Classe A</p>
                  <p className="text-muted-foreground">Efficienza energetica certificata</p>
                </div>
              </div>
            </div>

            <div className="bg-background border border-border p-8 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">10 anni</p>
                  <p className="text-muted-foreground">Garanzia su prodotto e installazione</p>
                </div>
              </div>
            </div>

            <div className="bg-background border border-border p-8 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <ThumbsUp className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">98%</p>
                  <p className="text-muted-foreground">Clienti soddisfatti in Lombardia</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
