import { useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, CheckCircle, Clock, Star, Send } from "lucide-react";
import type { City } from "@/data/cities";

interface CityCTAProps {
  city: City;
}

export const CityCTA = ({ city }: CityCTAProps) => {
  // Carica script Lead Connector
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="contatti-citta" className="section-dark py-20 sm:py-28 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-medium uppercase tracking-[0.2em] text-primary mb-4">
            Contattaci
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Richiedi il Tuo Preventivo Gratuito
            <span className="text-primary"> a {city.name}</span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              Risposta entro 24 ore
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              Sopralluogo in 48 ore
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-2">
              <Send className="w-4 h-4 text-primary" />
              Preventivo in 7 giorni
            </span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Lead Connector Form Iframe */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-4 overflow-hidden"
          >
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/he1mdWP7boFO61FVF2Pz"
              style={{ width: '100%', height: '673px', border: 'none', borderRadius: '4px' }}
              id="inline-he1mdWP7boFO61FVF2Pz"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Modulo Sito Web"
              data-height="673"
              data-layout-iframe-id="inline-he1mdWP7boFO61FVF2Pz"
              data-form-id="he1mdWP7boFO61FVF2Pz"
              title="Modulo Sito Web"
            />
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">Showroom</h4>
                  <p className="text-muted-foreground">
                    Via Bruno Raimondi, 5
                    <br />
                    21052 Busto Arsizio (VA)
                  </p>
                  <p className="text-sm text-primary mt-1">
                    {city.distanceFromShowroom === 0 
                      ? "Siamo qui!" 
                      : `A soli ${city.distanceFromShowroom} km da ${city.name}`}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">Telefono</h4>
                  <a
                    href="tel:+393501780908"
                    className="text-muted-foreground hover:text-primary transition-colors text-lg font-medium"
                  >
                    +39 350 178 0908
                  </a>
                  <p className="text-sm text-muted-foreground">Lun-Ven 9:00-18:00</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">Email</h4>
                  <a
                    href="mailto:info@i-profili.it"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@i-profili.it
                  </a>
                </div>
              </div>
            </div>

            {/* Social proof */}
            <div className="mt-12 pt-8 border-t border-border/30">
              <div className="glass-card p-6">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                  <span className="ml-2 font-bold text-foreground">4.9/5</span>
                </div>
                <p className="text-muted-foreground text-sm mb-3">
                  Basato su 127 recensioni verificate
                </p>
                <p className="text-foreground font-medium">
                  "Oltre 2.500 famiglie soddisfatte in Lombardia"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
