import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useCallback } from "react";
import { 
  AlertTriangle, 
  XCircle, 
  CheckCircle2, 
  Shield, 
  Award, 
  Phone, 
  ArrowRight,
  Thermometer,
  Euro,
  Droplets,
  FileX,
  GraduationCap,
  Layers,
  Wrench,
  Clock,
  BadgeCheck,
  Scale
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { HomeHeader } from "@/components/HomeHeader";
import { Footer } from "@/components/Footer";
import { SEOHead, serviceSchema, createBreadcrumbSchema } from "@/components/SEOHead";
import { SEOBreadcrumb } from "@/components/shared/SEOBreadcrumb";
import finestraAntracite from "@/assets/showroom/finestra-antracite.jpg";
import heroPosaQualificata from "@/assets/heroes/hero-posa-qualificata.jpg";


const fatalErrors = [
  {
    icon: Layers,
    title: "Posa sopra il vecchio telaio",
    problems: ["Crea ponti termici permanenti", "Condensa e muffa garantite"],
  },
  {
    icon: Droplets,
    title: "Schiuma senza sigillatura tecnica",
    problems: ["La schiuma non è impermeabile", "Infiltrazioni d'acqua e aria"],
  },
  {
    icon: Scale,
    title: "Finestre fuori bolla",
    problems: ["Chiusura imperfetta", "Usura prematura della ferramenta"],
  },
  {
    icon: Wrench,
    title: "Nessuna preparazione del vano",
    problems: ["Controtelaio instabile", "Crepe e fessurazioni nel tempo"],
  },
  {
    icon: GraduationCap,
    title: "Personale non formato",
    problems: ["Nessuna responsabilità personale", "Zero garanzia sulla posa"],
  },
];

const consequences = [
  {
    icon: Thermometer,
    value: "+40%",
    label: "bollette",
    description: "Dispersione termica da posa errata",
  },
  {
    icon: Euro,
    value: "€5.000",
    label: "in danni",
    description: "Costo medio per riparare una posa sbagliata",
  },
  {
    icon: Droplets,
    value: "Muffa",
    label: "e condensa",
    description: "Problemi di salute per tutta la famiglia",
  },
  {
    icon: FileX,
    value: "Garanzia",
    label: "nulla",
    description: "Nessun produttore copre danni da cattiva posa",
  },
];

const guarantees = [
  {
    icon: Award,
    title: "Posatori con Patentino",
    description: "Qualificato e formato",
    detail: "Formazione continua obbligatoria",
  },
  {
    icon: XCircle,
    title: "Rimozione Totale Telaio",
    description: "Mai sovrapposizione",
    detail: "Correzione completa del vano murario",
  },
  {
    icon: Layers,
    title: "Sistema Posa a 3 Strati",
    description: "Strato impermeabile + termico + traspirante",
    detail: "Sigillatura completa certificata",
  },
  {
    icon: Shield,
    title: "Sigillatura Perimetrale",
    description: "Nastri autoespandenti",
    detail: "Membrane certificate a norma",
  },
  {
    icon: Wrench,
    title: "Controtelaio Isolato",
    description: "Taglio termico integrato",
    detail: "Ancoraggio professionale certificato",
  },
  {
    icon: BadgeCheck,
    title: "Collaudo Strumentale",
    description: "Test tenuta aria (Blower Door)",
    detail: "Verifica termica a infrarossi",
  },
  {
    icon: Clock,
    title: "Garanzia 10 Anni Posa",
    description: "Scritta nel contratto",
    detail: "Intervento garantito entro 48h",
  },
];

const comparisonData = [
  { aspect: "Telaio vecchio", standard: "Lasciato in sede", certified: "Rimosso completamente" },
  { aspect: "Sigillatura", standard: "Solo schiuma", certified: "Sistema 3 strati" },
  { aspect: "Controtelaio", standard: "Generico", certified: "Isolato taglio termico" },
  { aspect: "Posatori", standard: "Improvvisati", certified: "Qualificati e formati" },
  { aspect: "Garanzia posa", standard: "1 anno (o nulla)", certified: "10 anni" },
  { aspect: "Collaudo", standard: "Visivo", certified: "Strumentale" },
];

const certifications = [
  { name: "Posa Certificata", description: "Installazione professionale" },
  { name: "Prodotti Certificati", description: "Conformità normativa" },
  { name: "Marcatura CE", description: "Conformità europea" },
  { name: "Assicurazione Pro", description: "Copertura professionale" },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Posa Qualificata", href: "/posa-qualificata" },
];

// Optimized hero background component with content inside
const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleLoad = useCallback(() => setIsLoaded(true), []);

  return (
    <section className="relative py-20 md:py-32 min-h-[50vh] md:min-h-[60vh] flex items-center overflow-hidden">
      {/* Skeleton background */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      {/* Preload image */}
      <img
        src={heroPosaQualificata}
        alt=""
        loading="eager"
        decoding="async"
        fetchPriority="high"
        onLoad={handleLoad}
        className="hidden"
        aria-hidden="true"
      />
      {/* Background image with fade-in */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: `url(${heroPosaQualificata})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 text-white backdrop-blur-sm text-sm font-semibold uppercase tracking-widest rounded-full mb-6"
          >
            <AlertTriangle className="w-4 h-4" />
            Posa Qualificata
          </motion.span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Il <span className="text-destructive">70%</span> dei problemi agli infissi nasce da una{" "}
            <span className="text-destructive">posa sbagliata</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            La finestra più costosa diventa inutile se installata male. 
            Scopri perché la <strong className="text-white">posa certificata</strong> fa tutta la differenza.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="teal" size="lg" asChild>
              <a href="#metodo">
                Scopri il Metodo
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Link to="/contatti">
                <Phone className="w-5 h-5 mr-2" />
                Richiedi Posatore Certificato
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const PosaQualificataPage = () => {
  return (
    <>
      <SEOHead
        title="Posa Qualificata Serramenti UNI 11673 | I Profili"
        description="Il 70% dei problemi agli infissi nasce da una posa sbagliata. Posa certificata I Profili: patentino UNI 11673, garanzia 10 anni."
        keywords="posa qualificata serramenti, posatori certificati UNI 11673, installazione finestre professionale, garanzia posa 10 anni, sigillatura infissi 3 strati, errori posa finestre, posatore con patentino Lombardia"
        canonical="https://www.i-profili.it/posa-qualificata"
        schema={serviceSchema}
      />
      <HomeHeader />
      
      <main className="pt-20 md:pt-32">
        <SEOBreadcrumb items={breadcrumbItems} />

        {/* Hero Section */}
        <HeroSection />

        {/* 5 Errori Fatali Section */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 bg-destructive/10 text-destructive text-sm font-semibold uppercase tracking-widest rounded-full mb-4">
                Attenzione
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                I 5 Errori Fatali della Cattiva Posa
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Questi sono gli errori che i posatori improvvisati commettono ogni giorno. 
                E che pagherai tu per anni.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fatalErrors.map((error, index) => (
                <motion.div
                  key={error.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background border border-destructive/20 rounded-2xl p-6 hover:border-destructive/40 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                    <error.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{error.title}</h3>
                  <ul className="space-y-2">
                    {error.problems.map((problem) => (
                      <li key={problem} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                        {problem}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Consequences Section */}
        <section className="py-20 md:py-28 bg-destructive/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 bg-destructive/10 text-destructive text-sm font-semibold uppercase tracking-widest rounded-full mb-4">
                Le Conseguenze
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Cosa Succede Quando la Posa è Sbagliata
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I danni di una cattiva posa non si vedono subito. Ma li pagherai per anni.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {consequences.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background rounded-2xl p-6 text-center border border-border hover:border-destructive/30 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-destructive" />
                  </div>
                  <div className="text-3xl font-bold text-destructive mb-1">{item.value}</div>
                  <div className="text-lg font-medium text-foreground mb-2">{item.label}</div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Il Sistema di Posa Certificata */}
        <section id="metodo" className="py-20 md:py-28 bg-background scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold uppercase tracking-widest rounded-full mb-4">
                La Soluzione
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Posa Certificata: 7 Garanzie che Altri Non Possono Darti
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Il nostro sistema di posa certificata elimina ogni rischio e ti garantisce 
                prestazioni perfette per almeno 10 anni.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {guarantees.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-6 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/80 mb-1">{item.description}</p>
                  <p className="text-xs text-muted-foreground">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold uppercase tracking-widest rounded-full mb-4">
                Confronto
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Posa Standard vs Posa Certificata I Profili
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Vedi con i tuoi occhi la differenza tra chi improvvisa e chi lavora con metodo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Desktop: Table view */}
              <div className="hidden md:block bg-background rounded-2xl border border-border overflow-hidden shadow-lg">
                <div className="grid grid-cols-3 bg-muted/50 border-b border-border">
                  <div className="p-4 font-semibold text-foreground">Aspetto</div>
                  <div className="p-4 font-semibold text-destructive text-center border-l border-border">
                    Posa Standard
                  </div>
                  <div className="p-4 font-semibold text-primary text-center border-l border-border">
                    I Profili
                  </div>
                </div>
                {comparisonData.map((row, index) => (
                  <div
                    key={row.aspect}
                    className={`grid grid-cols-3 ${index < comparisonData.length - 1 ? "border-b border-border" : ""}`}
                  >
                    <div className="p-4 text-sm font-medium text-foreground">{row.aspect}</div>
                    <div className="p-4 text-sm text-muted-foreground text-center border-l border-border flex items-center justify-center gap-2">
                      <XCircle className="w-4 h-4 text-destructive shrink-0" />
                      {row.standard}
                    </div>
                    <div className="p-4 text-sm text-foreground text-center border-l border-border flex items-center justify-center gap-2 bg-primary/5">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {row.certified}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile: Card stack view */}
              <div className="md:hidden space-y-4">
                {comparisonData.map((row) => (
                  <div
                    key={row.aspect}
                    className="bg-background rounded-xl border border-border overflow-hidden shadow-md"
                  >
                    <div className="bg-muted/50 px-4 py-3 border-b border-border">
                      <span className="font-semibold text-foreground text-sm">{row.aspect}</span>
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-border">
                      <div className="p-4">
                        <div className="text-xs text-destructive font-semibold uppercase tracking-wider mb-2">Standard</div>
                        <div className="flex items-start gap-2 text-sm text-muted-foreground">
                          <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                          <span>{row.standard}</span>
                        </div>
                      </div>
                      <div className="p-4 bg-primary/5">
                        <div className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">I Profili</div>
                        <div className="flex items-start gap-2 text-sm text-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{row.certified}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Il Posatore Certificato */}
        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold uppercase tracking-widest rounded-full mb-4">
                  Il Professionista
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Non un Operaio. Un Professionista Certificato.
                </h2>
                <p className="text-muted-foreground mb-8">
                  I nostri posatori non sono semplici operai. Sono tecnici qualificati con 
                  certificazione nazionale, formazione continua e responsabilità personale 
                  sul lavoro svolto.
                </p>

                <ul className="space-y-4">
                  {[
                    "Formazione qualificata per installazione serramenti",
                    "Formazione tecnica annuale obbligatoria",
                    "Assicurato e in regola contributiva",
                    "Equipaggiamento professionale certificato",
                    "Responsabile personalmente del lavoro",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src={finestraAntracite}
                  alt="Finestra in PVC grigio antracite - posa certificata"
                  className="aspect-[4/3] rounded-2xl w-full object-cover shadow-lg"
                />
                
                {/* Badge overlay */}
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold">UNI 11673</div>
                  <div className="text-xs uppercase tracking-wider opacity-80">Certificato</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Certificazioni e Normativa */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold uppercase tracking-widest rounded-full mb-4">
                Certificazioni
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Garanzia di Qualità Certificata
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background rounded-xl p-6 text-center border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="font-semibold text-foreground mb-1">{cert.name}</div>
                  <div className="text-sm text-muted-foreground">{cert.description}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-background border border-primary/20 rounded-2xl p-6 md:p-8 text-center max-w-3xl mx-auto mb-16"
            >
              <p className="text-muted-foreground">
                <strong className="text-foreground">Dal 2020</strong> la normativa UNI 11673 definisce i requisiti 
                per la posa qualificata dei serramenti. <strong className="text-primary">I Profili è tra le poche 
                aziende in Lombardia</strong> con posatori interni certificati secondo questa norma.
              </p>
            </motion.div>

          </div>
        </section>

        {/* CTA Finale */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-primary/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <AlertTriangle className="w-16 h-16 text-primary-foreground/80 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Non Rischiare con la Tua Casa
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Richiedi un sopralluogo con un posatore certificato. 
                Senza impegno, senza costi nascosti.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-background text-primary hover:bg-background/90"
                  asChild
                >
                  <Link to="/contatti">
                    Prenota Sopralluogo con Posatore Certificato
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <a href="tel:+390212345678">
                    <Phone className="w-5 h-5 mr-2" />
                    Chiama Ora: 02 1234 5678
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PosaQualificataPage;
