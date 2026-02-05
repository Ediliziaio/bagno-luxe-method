import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const interventionTypes = [
  "Sostituzione infissi esistenti",
  "Nuova costruzione/ristrutturazione",
  "Solo preventivo informativo",
  "Altro",
];

export const HomeContact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interventionType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", interventionType: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contatti" className="section-dark py-20 sm:py-28 border-t border-border/30">
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
            Richiedi il sopralluogo gratuito
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              Ti ricontattiamo entro 24 ore
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
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <CheckCircle className="w-16 h-16 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Richiesta Inviata!
                </h3>
                <p className="text-muted-foreground">
                  Ti ricontatteremo entro 24 ore.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    name="name"
                    placeholder="Nome e Cognome *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground h-12"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Telefono *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground h-12"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground h-12"
                  />
                </div>
                <div>
                  <select
                    name="interventionType"
                    value={formData.interventionType}
                    onChange={handleChange}
                    className="w-full bg-background/50 border border-border text-foreground rounded-md px-3 h-12 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="" className="text-muted-foreground">Tipo di intervento</option>
                    {interventionTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Descrivi brevemente il tuo progetto (opzionale)"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-background/50 border border-border text-foreground placeholder:text-muted-foreground rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  variant="teal"
                  size="lg"
                  className="w-full font-bold group"
                >
                  Prenota Sopralluogo Gratuito
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Inviando il form accetti la nostra Privacy Policy
                </p>
              </form>
            )}
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
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">Telefono</h4>
                  <a
                    href="tel:+393513058029"
                    className="text-muted-foreground hover:text-primary transition-colors text-lg font-medium"
                  >
                    +39 351 305 8029
                  </a>
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
