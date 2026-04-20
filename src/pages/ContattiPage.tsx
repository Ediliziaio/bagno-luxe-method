import { HomeHeader } from "@/components/HomeHeader";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { SEOHead, createBreadcrumbSchema, contactPageSchema } from "@/components/SEOHead";
import { SEOBreadcrumb } from "@/components/shared/SEOBreadcrumb";
import { HomeContact } from "@/components/home/HomeContact";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import heroContatti from "@/assets/heroes/hero-contatti.jpg";
 
const contactInfo = [
  {
    icon: Phone,
    title: "Telefono",
    value: "+39 351 305 8029",
    href: "tel:+393513058029"
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@i-profili.it",
    href: "mailto:info@i-profili.it"
  },
  {
    icon: MapPin,
    title: "Showroom",
    value: "Busto Arsizio (VA)",
    href: null
  },
  {
    icon: Clock,
    title: "Orari",
    value: "Lun-Ven: 9:00-18:00",
    href: null
  }
];

const locations = [
  {
    title: "Showroom Busto Arsizio",
    address: "Via Bruno Raimondi, 5",
    city: "21052 Busto Arsizio (VA)",
    isPrimary: true
  },
  {
    title: "Sede Legale",
    address: "Via Aurelio Saffi, 29",
    city: "20123 Milano",
    isPrimary: false
  },
  {
    title: "Magazzino Bolgare",
    address: "Via Passerera, 52",
    city: "24060 Bolgare (BG)",
    isPrimary: false
  },
  {
    title: "Ufficio e Magazzino Mezzate",
    address: "Via G. Marconi",
    city: "20068 Mezzate (MI)",
    isPrimary: false
  }
];
 
 const ContattiPage = () => {
   const breadcrumbSchema = createBreadcrumbSchema([
     { name: "Home", url: "https://www.i-profili.it" },
     { name: "Contatti", url: "https://www.i-profili.it/contatti" },
   ]);
 
   return (
     <div className="min-h-screen bg-background">
        <SEOHead
          title="Contatti - Preventivo Gratuito Infissi | I Profili"
          description="Richiedi un preventivo gratuito per i tuoi infissi. Sopralluogo in tutta la Lombardia. Risposta entro 48 ore. Chiama o compila il form."
          keywords="contatti I Profili, preventivo infissi gratis, sopralluogo finestre Lombardia, telefono serramentista Milano, email infissi Monza, showroom serramenti Busto Arsizio"
          canonical="https://www.i-profili.it/contatti"
          schema={{ ...breadcrumbSchema, ...contactPageSchema }}
        />
       <HomeHeader />
 
       <main className="pt-24 md:pt-32">
         <div className="bg-muted/30">
           <div className="max-w-7xl mx-auto px-4 sm:px-6">
             <SEOBreadcrumb items={[{ label: "Contatti" }]} />
           </div>
         </div>
 
        <PageHero
          badge="Contatti"
          title="Parliamo del Tuo Progetto"
          subtitle="Siamo qui per rispondere alle tue domande e aiutarti a trovare la soluzione perfetta per la tua casa."
          backgroundImage={heroContatti}
        />
 
         {/* Contact Info Cards */}
         <section className="py-16 bg-background">
           <div className="max-w-7xl mx-auto px-4 sm:px-6">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {contactInfo.map((info, index) => (
                 <motion.div
                   key={info.title}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: index * 0.1 }}
                   className="bg-card border border-border/50 rounded-xl p-6 text-center hover:border-primary/30 transition-colors"
                 >
                   <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                     <info.icon className="w-6 h-6 text-primary" />
                   </div>
                   <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                   {info.href ? (
                     <a
                       href={info.href}
                       className="text-primary hover:underline font-medium"
                     >
                       {info.value}
                     </a>
                   ) : (
                     <p className="text-muted-foreground">{info.value}</p>
                   )}
                 </motion.div>
               ))}
             </div>
           </div>
         </section>
 
        {/* Locations Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Le Nostre Sedi
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Showroom, uffici e magazzini al servizio della Lombardia.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {locations.map((location, index) => (
                <motion.div
                  key={location.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-card border rounded-xl p-6 ${
                    location.isPrimary 
                      ? "border-primary/50 ring-2 ring-primary/20" 
                      : "border-border/50"
                  }`}
                >
                  {location.isPrimary && (
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                      Showroom Principale
                    </span>
                  )}
                  <h3 className="font-bold text-foreground mb-2">{location.title}</h3>
                  <p className="text-muted-foreground text-sm">{location.address}</p>
                  <p className="text-muted-foreground text-sm">{location.city}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form (reused) */}
        <HomeContact />

        {/* Map / Zone Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Dove Operiamo
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Serviamo tutte le province della Lombardia con sopralluogo gratuito.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border/50 rounded-2xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-bold text-foreground mb-4">Province Principali</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Milano</li>
                    <li>• Monza e Brianza</li>
                    <li>• Bergamo</li>
                    <li>• Brescia</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-4">Altre Province</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Como</li>
                    <li>• Lecco</li>
                    <li>• Varese</li>
                    <li>• Pavia</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-4">Zone Estese</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Cremona</li>
                    <li>• Mantova</li>
                    <li>• Lodi</li>
                    <li>• Sondrio</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Data Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border/50 rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Dati Aziendali
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Domus Group S.r.l.</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li><span className="text-foreground/70">P.IVA:</span> 13132010961</li>
                    <li><span className="text-foreground/70">Capitale Sociale:</span> €20.000,00</li>
                    <li><span className="text-foreground/70">SDI:</span> USAL8PV</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Contatti Amministrativi</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>
                      <span className="text-foreground/70">PEC:</span>{" "}
                      <a href="mailto:domusgroupsrl@legalmail.it" className="hover:text-primary transition-colors">
                        domusgroupsrl@legalmail.it
                      </a>
                    </li>
                    <li>
                      <span className="text-foreground/70">Amministrazione:</span>{" "}
                      <a href="mailto:Amministrazione@domusgroupitalia.it" className="hover:text-primary transition-colors">
                        Amministrazione@domusgroupitalia.it
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContattiPage;