import { HomeHeader } from "@/components/HomeHeader";
import { Footer } from "@/components/Footer";
import { SEOHead, createBreadcrumbSchema } from "@/components/SEOHead";
import { SEOBreadcrumb } from "@/components/shared/SEOBreadcrumb";
import { motion } from "framer-motion";
import { FileText, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const GaranzieCertificatoPage = () => {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://www.i-profili.it" },
    { name: "Garanzie", url: "https://www.i-profili.it/garanzie" },
    { name: "Allegato A", url: "https://www.i-profili.it/garanziecertificato" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Allegato A – Garanzie Contrattuali | I Profili"
        description="Allegato A al contratto di fornitura e posa in opera di infissi. Disciplina completa delle garanzie contrattuali offerte da Domus Group S.r.l."
        canonical="https://www.i-profili.it/garanziecertificato"
        schema={breadcrumbSchema}
      />
      <HomeHeader />

      <main className="pt-24 md:pt-32">
        <div className="bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <SEOBreadcrumb
              items={[
                { label: "Garanzie", href: "/garanzie" },
                { label: "Allegato A" },
              ]}
            />
          </div>
        </div>

        {/* Header */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                ALLEGATO A – DISCIPLINA DELLE GARANZIE CONTRATTUALI
              </h1>
              <p className="text-lg text-muted-foreground">
                Parte integrante e sostanziale del Contratto di Fornitura e Posa in Opera di Infissi
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border/50 rounded-2xl p-6 md:p-10"
            >
              <div className="prose prose-neutral max-w-none text-foreground">
                {/* PREMESSE */}
                <h2 className="text-xl font-bold text-foreground mt-0 mb-4">PREMESSE</h2>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  VISTO che in data odierna le parti hanno sottoscritto contratto avente ad oggetto la fornitura e posa in opera di infissi e serramenti;
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  CONSIDERATO che Domus Group S.r.l. intende offrire al Cliente garanzie ulteriori rispetto a quelle previste dalla normativa vigente, quale espressione della qualità dei prodotti forniti e della professionalità dei servizi prestati;
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  RILEVATO che Domus Group S.r.l., con sede legale in Via Aurelio Saffi 29, CAP 20123, P. IVA 13132010961, Capitale Sociale € 20.000,00, PEC: domusgroupsrl@legalmail.it, seleziona esclusivamente prodotti certificati e conformi alle normative europee in materia di sicurezza, isolamento termico e acustico;
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  TUTTO CIÒ PREMESSO le parti convengono e stipulano quanto segue.
                </p>

                {/* ART. 1 */}
                <h2 className="text-xl font-bold text-foreground mt-8 mb-4">ART. 1 – DEFINIZIONI</h2>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  1.1 "Azienda": Domus Group S.r.l., con sede legale in Via Aurelio Saffi 29, CAP 20123, P. IVA 13132010961, in persona del legale rappresentante pro tempore.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  1.2 "Cliente": il soggetto identificato nel contratto principale.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  1.3 "Prodotti": infissi, serramenti, vetrocamera, ferramenta, accessori e componenti oggetto della fornitura.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  1.4 "Posa in opera": l'attività di installazione eseguita direttamente dall'Azienda o da personale qualificato incaricato dalla stessa.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  1.5 "Difetto": qualsiasi non conformità rispetto alle caratteristiche tecniche dichiarate nel contratto, nel progetto o previste dalla normativa vigente.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  1.6 "Danno strutturale": compromissione dell'integrità fisica del telaio fisso o dell'anta mobile tale da pregiudicarne funzionalità e sicurezza.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  1.7 "Giorni lavorativi": tutti i giorni dal lunedì al venerdì, con esclusione delle festività nazionali e delle chiusure aziendali comunicate.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Sono altresì esclusi dal computo dei giorni lavorativi, ai fini di qualsiasi termine contrattuale:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-6">
                  <li>il periodo compreso tra il 10 dicembre e il 10 gennaio di ogni anno;</li>
                  <li>il periodo compreso tra il 7 agosto e il 7 settembre di ogni anno;</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  in quanto trattasi di periodi di sospensione produttiva della filiera fornitori e dei processi logistici, non imputabili all'Azienda.
                </p>

                {/* ART. 2 */}
                <h2 className="text-xl font-bold text-foreground mt-8 mb-4">ART. 2 – NATURA E LIMITI DELLE GARANZIE</h2>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  2.1 Le garanzie previste dal presente allegato sono aggiuntive rispetto alla garanzia legale di conformità ex artt. 128-135 D.Lgs. 206/2005.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  2.2 Le presenti garanzie non limitano i diritti inderogabili del Consumatore.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  2.3 Le garanzie decorrono dalla data di ultimazione della posa risultante da verbale sottoscritto.
                </p>

                {/* ART. 3 */}
                <h2 className="text-xl font-bold text-foreground mt-8 mb-4">ART. 3 – GARANZIE SUL PRODOTTO</h2>
                <p className="text-muted-foreground leading-relaxed mb-2 font-semibold">
                  3.1 Garanzia decennale (10 anni)
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  L'Azienda garantisce per dieci anni:
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  a) scolorimento innaturale e crepatura profili PVC, esclusi giunti di saldatura; b) difetti superficiali profili alluminio anodizzato o verniciato;
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La garanzia su alluminio decade in ambienti ad elevata concentrazione salina (distanza mare inferiore a 1.000 metri o zone industriali saline).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2 font-semibold">
                  3.2 Garanzia quinquennale (5 anni)
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  a) difetti pannelli portoncini; b) corrosione accessori con trattamento PVD.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2 font-semibold">
                  3.3 Garanzia triennale (3 anni)
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  a) malfunzionamento ferramenta; b) difetti cassonetti, avvolgibili, veneziane.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2 font-semibold">
                  3.4 Esclusioni
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Sono esclusi danni da uso improprio, incuria, mancata manutenzione, eventi atmosferici eccezionali, tentativi di effrazione, interventi non autorizzati, vizi strutturali immobile, componenti elettroniche.
                </p>

                {/* ART. 4 */}
                <h2 className="text-xl font-bold text-foreground mt-8 mb-4">ART. 4 – GARANZIA DI MANUTENIBILITÀ TRENTENNALE</h2>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  4.1 L'Azienda garantisce la possibilità tecnica di manutenzione per 30 anni dalla produzione.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  4.2 L'impegno consiste nel mantenere disponibilità ricambi compatibili o equivalenti.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  4.3 Gli interventi sono a titolo oneroso secondo listino vigente.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  4.4 Non costituisce garanzia di funzionamento perpetuo ma impegno alla continuità del servizio tecnico.
                </p>

                {/* ART. 5 */}
                <h2 className="text-xl font-bold text-foreground mt-8 mb-4">ART. 5 – GARANZIA DI POSA QUALIFICATA</h2>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  5.1 La posa sarà eseguita nel rispetto degli standard professionali aziendali.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  5.2 Copre esclusivamente difetti imputabili direttamente alla posa.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  5.3 Durata: 10 anni dalla consegna.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  5.4 Intervento entro 15 giorni lavorativi dall'accertamento positivo.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  5.5 Esclusioni: assestamenti strutturali, lavori successivi, interventi terzi.
                </p>

                {/* ART. 6 */}
                <h2 className="text-xl font-bold text-foreground mt-8 mb-4">ART. 6 – GARANZIA DI PREZZO BLOCCATO</h2>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  6.1 Il prezzo pattuito è fisso e invariabile.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  6.2 Nessun costo occulto potrà essere applicato.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  6.3 Varianti richieste dal Cliente saranno oggetto di accordo scritto separato.
                </p>

                {/* ART. 7 */}
                <h2 className="text-xl font-bold text-foreground mt-8 mb-4">ART. 7 – TERMINI DI ESECUZIONE E INDENNIZZO</h2>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  7.1 I termini hanno natura non essenziale ai sensi art. 1457 c.c.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  7.2 Termine orientativo: 90 giorni lavorativi dal verificarsi cumulativo di rilievo misure, conferma ordine, accredito acconto.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  7.3 Il termine è sospeso automaticamente nei casi di:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4">
                  <li>periodi indicati all'art. 1.7;</li>
                  <li>forza maggiore ex art. 1218 c.c.;</li>
                  <li>ritardi fornitori;</li>
                  <li>indisponibilità materiali;</li>
                  <li>varianti Cliente;</li>
                  <li>impedimenti logistici;</li>
                  <li>ritardi Cliente o terzi.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  7.4 Qualora il ritardo superi 30 giorni lavorativi rispetto al termine indicativo e sia esclusivamente imputabile all'Azienda, questa riconoscerà:
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4 font-semibold">
                  Euro 200,00 per ogni settimana intera di ritardo.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  7.5 L'indennizzo costituisce l'unico rimedio riconosciuto per il ritardo ed esclude ogni ulteriore richiesta risarcitoria per danni indiretti, lucro cessante o mancato godimento.
                </p>

                {/* ART. 8 */}
                <h2 className="text-xl font-bold text-foreground mt-8 mb-4">ART. 8 – OBBLIGHI DEL CLIENTE</h2>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Il Cliente si impegna a:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-6">
                  <li>eseguire manutenzione ordinaria;</li>
                  <li>segnalare tempestivamente difetti;</li>
                  <li>non consentire interventi non autorizzati;</li>
                  <li>garantire accesso tecnico;</li>
                  <li>conservare documentazione contrattuale.</li>
                </ul>

                {/* ART. 9 */}
                <h2 className="text-xl font-bold text-foreground mt-8 mb-4">ART. 9 – PROCEDURA DI ATTIVAZIONE</h2>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  9.1 Segnalazione via PEC a: domusgroupsrl@legalmail.it oppure raccomandata a: Domus Group S.r.l. – Via Aurelio Saffi 29 – CAP 20123
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  9.2 Sopralluogo entro 30 giorni lavorativi.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  9.3 Comunicazione esito entro 30 giorni lavorativi.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  9.4 In caso di contestazione, possibile perizia tecnica con costi a carico parte soccombente.
                </p>

                {/* ART. 10 */}
                <h2 className="text-xl font-bold text-foreground mt-8 mb-4">ART. 10 – DOCUMENTAZIONE DI RIFERIMENTO</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Manuale uso e manutenzione, schede tecniche, progetto e verbale consegna costituiscono parte integrante.
                </p>

                {/* ART. 11 */}
                <h2 className="text-xl font-bold text-foreground mt-8 mb-4">ART. 11 – IMPOSSIBILITÀ SOPRAVVENUTA (ART. 1256 C.C.)</h2>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  11.1 Qualora la prestazione divenga impossibile per causa non imputabile all'Azienda, l'obbligazione si estingue o si sospende.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  11.2 In caso di impossibilità temporanea, i termini sono sospesi automaticamente e non maturano indennizzi.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  11.3 In caso di impossibilità parziale, il contratto rimane valido per la parte eseguibile.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  11.4 In caso di impossibilità definitiva non imputabile all'Azienda, il contratto si risolve limitatamente alla parte impossibile senza diritto a risarcimento.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Sono incluse indisponibilità materie prime, crisi energetiche, blocchi logistici, eventi geopolitici, modifiche normative sopravvenute.
                </p>

                {/* ART. 12 */}
                <h2 className="text-xl font-bold text-foreground mt-8 mb-4">ART. 12 – DISPOSIZIONI FINALI</h2>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  12.1 Il presente allegato è parte integrante del contratto.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  12.2 Le clausole nulle non invalidano l'intero documento.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  12.3 Ai sensi degli artt. 1341 e 1342 c.c., il Cliente approva specificamente le clausole relative a esclusioni, limitazioni rimedi, sospensioni e impossibilità sopravvenuta.
                </p>

                {/* FIRME */}
                <div className="mt-12 pt-8 border-t border-border">
                  <h2 className="text-xl font-bold text-foreground mb-6">FIRME</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Luogo e data _______________________
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-foreground font-semibold mb-2">Domus Group S.r.l.</p>
                      <p className="text-muted-foreground text-sm">Via Aurelio Saffi 29 – CAP 20123</p>
                      <p className="text-muted-foreground text-sm">P. IVA 13132010961</p>
                      <p className="text-muted-foreground text-sm">Capitale Sociale € 20.000,00</p>
                      <p className="text-muted-foreground text-sm mb-4">PEC domusgroupsrl@legalmail.it</p>
                      <p className="text-muted-foreground text-sm">(Timbro e firma)</p>
                    </div>
                    <div>
                      <p className="text-foreground font-semibold mb-2">Il Cliente</p>
                      <p className="text-muted-foreground text-sm mb-4">_______________________</p>
                    </div>
                  </div>
                </div>

                {/* Approvazione specifica */}
                <div className="mt-8 p-6 bg-muted/30 rounded-lg border border-border">
                  <p className="text-foreground font-semibold mb-4">
                    Approvazione specifica ex artt. 1341-1342 c.c.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Il Cliente dichiara di aver preso visione e di approvare specificamente le clausole contenute negli articoli: Art. 3.4 (Esclusioni), Art. 4.4 (Limiti manutenibilità), Art. 5.5 (Esclusioni posa), Art. 7 (Termini e indennizzo), Art. 11 (Impossibilità sopravvenuta), Art. 12.3 (Clausole vessatorie).
                  </p>
                  <p className="text-muted-foreground text-sm mt-4">
                    Firma per approvazione specifica: _______________________
                  </p>
                </div>
              </div>

              {/* Back Button */}
              <div className="mt-10 pt-6 border-t border-border">
                <Button variant="outline" asChild>
                  <Link to="/garanzie" className="gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Torna alle Garanzie
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GaranzieCertificatoPage;
