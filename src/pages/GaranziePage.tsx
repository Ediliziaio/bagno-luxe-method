import { HomeHeader } from "@/components/HomeHeader";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { SEOHead, createBreadcrumbSchema } from "@/components/SEOHead";
import { SEOBreadcrumb } from "@/components/shared/SEOBreadcrumb";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield, Clock, FileText, Wrench, Euro, Timer, CheckCircle, ExternalLink, X, Check } from "lucide-react";
import heroGaranzie from "@/assets/heroes/hero-garanzie.jpg";
import { Link } from "react-router-dom";
const productWarranties = [{
  coverage: "Scolorimento e crepature profili PVC/alluminio",
  years: "10 anni",
  others: "2 anni"
}, {
  coverage: "Condensa interna al vetrocamera",
  years: "10 anni",
  others: "Esclusa"
}, {
  coverage: "Pannelli portoncini d'ingresso",
  years: "5 anni",
  others: "1 anno"
}, {
  coverage: "Maniglie e accessori PVD",
  years: "5 anni",
  others: "6 mesi"
}, {
  coverage: "Funzionalità ferramenta",
  years: "3 anni",
  others: "1 anno"
}, {
  coverage: "Profili avvolgibili e veneziane",
  years: "3 anni",
  others: "1 anno"
}];
const mainComparison = [{
  aspect: "Garanzia profili",
  iprofili: "10 anni",
  others: "2 anni (obbligo)"
}, {
  aspect: "Garanzia posa",
  iprofili: "10 anni",
  others: "1 anno o nulla"
}, {
  aspect: "Manutenibilità",
  iprofili: "30 anni",
  others: "Non garantita"
}, {
  aspect: "Penali ritardo",
  iprofili: "€200/settimana",
  others: "Mai"
}, {
  aspect: "Prezzo bloccato",
  iprofili: "Garantito",
  others: "Costi extra"
}, {
  aspect: "Assistenza",
  iprofili: "Diretta",
  others: "Call center"
}];
const attachedDocuments = ["Contratto di fornitura e posa in opera", "Allegato A – Disciplina delle Garanzie Contrattuali", "Capitolato tecnico", "Verbale di consegna e collaudo", "Manuale d'uso e manutenzione"];
const GaranziePage = () => {
  const breadcrumbSchema = createBreadcrumbSchema([{
    name: "Home",
    url: "https://iprofili.it"
  }, {
    name: "Garanzie",
    url: "https://iprofili.it/garanzie"
  }]);
  return <div className="min-h-screen bg-background">
      <SEOHead title="Garanzie 10 Anni Infissi | I Profili Serramenti" description="Garanzia 10 anni su profili e ferramenta, 10 anni sulla posa. Penali per ritardi scritte in contratto. Trasparenza totale sui tuoi serramenti." canonical="https://iprofili.it/garanzie" schema={breadcrumbSchema} />
      <HomeHeader />

      <main className="pt-24 md:pt-32">
        <div className="bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <SEOBreadcrumb items={[{
            label: "Garanzie"
          }]} />
          </div>
        </div>

        <PageHero badge="Garanzie" title="Garanzie Blindate" subtitle="Non promettiamo a voce. Tutto è scritto, firmato e garantito. Perché la tua tranquillità viene prima di tutto." backgroundImage={heroGaranzie} />

        {/* Intro Certificato */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="bg-card border border-border/50 rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground leading-relaxed">Con il presente certificato, I Profili 
attesta che gli infissi installati presso l'immobile indicato sono coperti dal sistema di garanzie di seguito descritto, come da Allegato A al contratto di fornitura.<strong className="text-foreground">I Profili S.r.l.</strong> attesta che gli infissi installati presso l'immobile indicato sono coperti dal sistema di garanzie di seguito descritto, come da Allegato A al contratto di fornitura.
                  </p>
                  <p className="text-sm text-muted-foreground mt-3">
                    Le presenti garanzie si intendono aggiuntive e non sostitutive rispetto alla garanzia legale di conformità prevista dal Codice del Consumo (D.Lgs. 206/2005).
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Comparison Table */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                I Profili vs La Concorrenza
              </h2>
              <p className="text-lg text-muted-foreground">
                Confronta le nostre garanzie con la media del mercato. La differenza è <strong className="text-primary">enorme</strong>.
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} className="bg-card border border-border/50 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto scrollbar-mobile">
                <table className="w-full min-w-[400px]">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left p-4 md:p-6 text-muted-foreground font-medium text-sm min-w-[140px]">Aspetto</th>
                      <th className="text-center p-4 md:p-6 bg-primary/5 min-w-[120px]">
                        <div className="flex items-center justify-center gap-2">
                          <Check className="w-5 h-5 text-primary" />
                          <span className="text-primary font-bold text-sm">I Profili</span>
                        </div>
                      </th>
                      <th className="text-center p-4 md:p-6 min-w-[120px]">
                        <div className="flex items-center justify-center gap-2">
                          <X className="w-5 h-5 text-destructive" />
                          <span className="text-muted-foreground font-medium text-sm">Altri</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {mainComparison.map((row, index) => <tr key={row.aspect} className={index < mainComparison.length - 1 ? "border-b border-border/30" : ""}>
                        <td className="p-4 md:p-6 text-foreground font-medium text-sm">{row.aspect}</td>
                        <td className="p-4 md:p-6 text-center bg-primary/5">
                          <span className="text-primary font-bold text-sm">{row.iprofili}</span>
                        </td>
                        <td className="p-4 md:p-6 text-center text-muted-foreground text-sm">{row.others}</td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Le 5 Garanzie in Dettaglio */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Le Tue 5 Garanzie
              </h2>
              <p className="text-lg text-muted-foreground">
                Tutto scritto nero su bianco nel contratto. Nessuna clausola nascosta.
              </p>
            </motion.div>

            <div className="space-y-6">
              {/* ① Garanzie sul Prodotto */}
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.1
            }} className="bg-card border border-border/50 rounded-2xl p-6 md:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-lg">①</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">Garanzie sul Prodotto</h3>
                    <p className="text-muted-foreground">I tuoi nuovi infissi sono garantiti contro difetti di fabbricazione</p>
                  </div>
                </div>

                <div className="overflow-x-auto scrollbar-mobile mb-6">
                  <table className="w-full min-w-[500px]">
                    <thead>
                      <tr className="border-b border-border/50">
                        <th className="text-left p-3 text-muted-foreground font-medium text-sm">Copertura</th>
                        <th className="text-center p-3 bg-primary/5">
                          <span className="text-primary font-bold text-sm">I Profili</span>
                        </th>
                        <th className="text-center p-3 text-muted-foreground font-medium text-sm">Altri</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productWarranties.map((row, index) => <tr key={row.coverage} className={index < productWarranties.length - 1 ? "border-b border-border/30" : ""}>
                          <td className="p-3 text-foreground text-sm">{row.coverage}</td>
                          <td className="p-3 text-center bg-primary/5">
                            <span className="text-primary font-bold text-sm">{row.years}</span>
                          </td>
                          <td className="p-3 text-center text-muted-foreground text-sm">{row.others}</td>
                        </tr>)}
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <p className="text-sm text-destructive flex items-start gap-2">
                    <X className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span><strong>Gli altri?</strong> Solo i 2 anni obbligatori per legge. Poi sei da solo.</span>
                  </p>
                </div>
              </motion.div>

              {/* ② Manutenibilità 30 Anni */}
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.2
            }} className="bg-card border border-border/50 rounded-2xl p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-lg">②</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">Manutenibilità Garantita 30 Anni</h3>
                    <p className="text-muted-foreground">Non ti abbandoniamo dopo l'acquisto</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Ci impegniamo a garantire che i tuoi infissi possano essere manutentati dal nostro personale tecnico qualificato per <strong className="text-foreground">trent'anni</strong> dalla data di produzione, affinché restino perfettamente funzionali nel tempo.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Per tre decenni avrai la certezza di poter contare su di noi per qualsiasi intervento di manutenzione ordinaria o straordinaria, con disponibilità di ricambi compatibili e personale specializzato.
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  <em>Condizioni: struttura portante integra; escluse componenti elettroniche. Gli interventi sono a titolo oneroso secondo listino vigente.</em>
                </p>

                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <p className="text-sm text-destructive flex items-start gap-2">
                    <X className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span><strong>Gli altri?</strong> Dopo 5 anni non trovi più i ricambi. "Mi dispiace, quel modello non lo facciamo più."</span>
                  </p>
                </div>
              </motion.div>

              {/* ③ Posa Qualificata 10 Anni */}
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.3
            }} className="bg-card border border-border/50 rounded-2xl p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-lg">③</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">Garanzia Posa Qualificata – 10 Anni</h3>
                    <p className="text-muted-foreground">Posa qualificata professionale</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  L'installazione è eseguita da personale qualificato secondo i nostri standard professionali.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Per dieci anni garantiamo l'assenza di difetti riconducibili alla nostra attività di posa: infiltrazioni, difetti di tenuta termica e acustica, malfunzionamenti dei meccanismi di apertura. In caso di difformità accertata e imputabile a noi, <strong className="text-foreground">interveniamo a nostre spese</strong>.
                </p>

                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <p className="text-sm text-destructive flex items-start gap-2">
                    <X className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span><strong>Gli altri?</strong> 1 anno se va bene, poi "deve aver toccato qualcosa lei".</span>
                  </p>
                </div>
              </motion.div>

              {/* ④ Prezzo Bloccato */}
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.4
            }} className="bg-card border border-border/50 rounded-2xl p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-lg">④</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">Garanzia Prezzo Bloccato</h3>
                    <p className="text-muted-foreground">Nessun costo nascosto, nessuna sorpresa</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Il prezzo che hai pagato è quello pattuito. Eventuali aumenti delle materie prime o dei listini dei fornitori intervenuti dopo la firma del contratto <strong className="text-foreground">non hanno inciso e non incideranno</strong> sul tuo investimento.
                </p>

                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <p className="text-sm text-destructive flex items-start gap-2">
                    <X className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span><strong>Gli altri?</strong> "Ah, sono aumentate le materie prime... saranno 800€ in più."</span>
                  </p>
                </div>
              </motion.div>

              {/* ⑤ Tempistiche con Indennizzo */}
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.5
            }} className="bg-card border border-border/50 rounded-2xl p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-lg">⑤</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">Garanzia Tempistiche – Indennizzo per Ritardo</h3>
                    <p className="text-muted-foreground">90 giorni o ti rimborsiamo</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Ci impegniamo a completare l'installazione entro <strong className="text-foreground">90 giorni lavorativi</strong> dalla conferma ordine.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  In caso di ritardo per cause a noi imputabili, hai diritto a un indennizzo di <strong className="text-foreground">€200 per ogni settimana intera di ritardo</strong>, fino al 10% del valore contrattuale.
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  <em>Esclusioni: ritardi per indisponibilità del cliente, modifiche richieste in corso d'opera, cause di forza maggiore, irregolarità nei pagamenti.</em>
                </p>

                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <p className="text-sm text-destructive flex items-start gap-2">
                    <X className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span><strong>Gli altri?</strong> "Arriviamo quando riusciamo, abbiate pazienza."</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Documenti Allegati */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Documenti Allegati
              </h2>
              <p className="text-muted-foreground">
                Il presente certificato è valido unitamente a:
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="bg-card border border-border/50 rounded-2xl p-6 md:p-8">
              <ul className="space-y-3">
                {attachedDocuments.map((doc, index) => <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{doc}</span>
                  </li>)}
              </ul>

              <div className="mt-6 pt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  Ti raccomandiamo di conservare tutta la documentazione per l'intera durata delle garanzie.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Box Allegato A */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="bg-card border border-primary/20 rounded-2xl p-6 md:p-8 text-center">
              <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Condizioni Complete
              </h3>
              <p className="text-muted-foreground mb-6">
                Le condizioni complete, le esclusioni e le modalità di attivazione sono dettagliate nell'Allegato A al contratto.
              </p>
              <Button variant="outline" className="gap-2" asChild>
                <Link to="/garanziecertificato">
                  <FileText className="w-4 h-4" />
                  Consulta l'Allegato A
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* CTA Finale */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Vuoi Queste Garanzie per i Tuoi Infissi?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Richiedi un preventivo e riceverai il nostro contratto di garanzia completo.
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/contatti">
                  Richiedi Preventivo con Garanzie
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default GaranziePage;