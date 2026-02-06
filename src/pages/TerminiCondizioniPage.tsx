import { HomeHeader } from "@/components/HomeHeader";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { SEOBreadcrumb } from "@/components/shared/SEOBreadcrumb";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TerminiCondizioniPage = () => {
  const breadcrumbItems = [{ label: "Termini e Condizioni" }];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Termini e Condizioni | I Profili - Condizioni Generali di Utilizzo"
        description="Termini e condizioni d'uso del sito I Profili - Domus Group S.r.l. Leggi le condizioni generali per l'utilizzo dei nostri servizi."
        canonical="https://iprofili.it/termini-condizioni"
      />
      <HomeHeader />

      <main className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SEOBreadcrumb items={breadcrumbItems} />

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Termini e Condizioni
          </h1>
          <p className="text-muted-foreground mb-8">
            Ultimo aggiornamento: Febbraio 2026
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            {/* Definizioni */}
            <AccordionItem value="definizioni" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                1. Definizioni
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>Ai fini dei presenti Termini e Condizioni, si intende per:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>"Sito"</strong>: il sito web www.iprofili.it e tutte le sue pagine</li>
                  <li><strong>"Titolare" o "Società"</strong>: Domus Group S.r.l., con sede in Via Aurelio Saffi 29, Milano, P.IVA 13132010961</li>
                  <li><strong>"Utente"</strong>: qualsiasi persona fisica o giuridica che accede al Sito</li>
                  <li><strong>"Servizi"</strong>: i servizi offerti dalla Società, inclusi installazione di serramenti, consulenza e preventivi</li>
                  <li><strong>"Contenuti"</strong>: tutti i testi, immagini, video, grafica e altri materiali presenti sul Sito</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Oggetto */}
            <AccordionItem value="oggetto" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                2. Oggetto e Accettazione
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>
                  I presenti Termini e Condizioni regolano l'utilizzo del Sito e dei Servizi offerti dalla Società.
                </p>
                <p>
                  L'accesso e l'utilizzo del Sito comportano l'accettazione integrale e senza riserve dei presenti Termini e Condizioni. Se non si accettano tali condizioni, si prega di non utilizzare il Sito.
                </p>
                <p>
                  La Società si riserva il diritto di modificare i presenti Termini in qualsiasi momento. Le modifiche saranno efficaci dalla data di pubblicazione sul Sito.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Servizi Offerti */}
            <AccordionItem value="servizi" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                3. Servizi Offerti
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>La Società offre i seguenti servizi:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Fornitura e installazione di serramenti in PVC</li>
                  <li>Porte interne ed esterne</li>
                  <li>Porte blindate</li>
                  <li>Persiane e scuri</li>
                  <li>Zanzariere</li>
                  <li>Consulenza tecnica e sopralluoghi</li>
                  <li>Preventivi personalizzati</li>
                </ul>
                <p className="mt-4">
                  I servizi sono disponibili principalmente in Lombardia. Per verificare la copertura nella tua zona, contattaci.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Preventivi */}
            <AccordionItem value="preventivi" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                4. Preventivi e Ordini
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <h4 className="font-semibold text-foreground">Richiesta di Preventivo</h4>
                <p>
                  L'Utente può richiedere un preventivo gratuito tramite il form presente sul Sito, telefonicamente o presso il nostro showroom.
                </p>
                <p>
                  Il preventivo viene elaborato sulla base delle informazioni fornite dall'Utente e di un eventuale sopralluogo tecnico.
                </p>

                <h4 className="font-semibold text-foreground mt-4">Validità del Preventivo</h4>
                <p>
                  I preventivi hanno validità di 30 (trenta) giorni dalla data di emissione, salvo diversa indicazione. Trascorso tale termine, la Società si riserva il diritto di aggiornare i prezzi.
                </p>

                <h4 className="font-semibold text-foreground mt-4">Conferma Ordine</h4>
                <p>
                  L'ordine si considera confermato solo con la sottoscrizione del contratto da parte dell'Utente e il versamento dell'acconto previsto.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Prezzi e Pagamenti */}
            <AccordionItem value="prezzi" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                5. Prezzi e Pagamenti
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>
                  I prezzi indicati nei preventivi sono comprensivi di IVA, salvo diversa indicazione. I prezzi possono variare in base a:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Tipologia e dimensioni dei prodotti</li>
                  <li>Personalizzazioni richieste</li>
                  <li>Complessità dell'installazione</li>
                  <li>Eventuali lavori accessori</li>
                </ul>

                <h4 className="font-semibold text-foreground mt-4">Modalità di Pagamento</h4>
                <p>Le modalità di pagamento accettate sono:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Bonifico bancario</li>
                  <li>Assegno bancario</li>
                  <li>Finanziamento (con partner convenzionati)</li>
                </ul>

                <h4 className="font-semibold text-foreground mt-4">Termini di Pagamento</h4>
                <p>
                  Salvo diversi accordi, il pagamento avviene con: 30% all'ordine, 60% alla consegna, saldo a fine lavori.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Garanzie */}
            <AccordionItem value="garanzie" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                6. Garanzie
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>I prodotti forniti dalla Società sono coperti dalle seguenti garanzie:</p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Garanzia legale:</strong> 2 anni dalla consegna, come previsto dal Codice del Consumo</li>
                  <li><strong>Garanzia profili:</strong> fino a 15 anni sui profili in PVC</li>
                  <li><strong>Garanzia vetrocamera:</strong> 10 anni sulla tenuta ermetica</li>
                  <li><strong>Garanzia posa:</strong> 5 anni sull'installazione</li>
                </ul>

                <p className="mt-4">
                  Le garanzie sono valide a condizione che i prodotti siano utilizzati correttamente e sottoposti a manutenzione ordinaria secondo le istruzioni fornite.
                </p>

                <p>
                  Per maggiori dettagli, consulta la nostra pagina <a href="/garanzie" className="text-primary hover:underline">Garanzie</a>.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Proprietà Intellettuale */}
            <AccordionItem value="proprieta" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                7. Proprietà Intellettuale
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>
                  Tutti i Contenuti presenti sul Sito (testi, immagini, loghi, grafica, video, software) sono di proprietà esclusiva della Società o dei suoi licenzianti e sono protetti dalle leggi sul diritto d'autore e sulla proprietà intellettuale.
                </p>
                <p>
                  È vietata qualsiasi riproduzione, distribuzione, modifica o utilizzo dei Contenuti senza autorizzazione scritta della Società.
                </p>
                <p>
                  I marchi "I Profili" e "Domus Group" sono marchi registrati. È vietato l'uso non autorizzato.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Utilizzo del Sito */}
            <AccordionItem value="utilizzo" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                8. Condizioni d'Uso del Sito
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>L'Utente si impegna a utilizzare il Sito in modo lecito e corretto. È vietato:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Utilizzare il Sito per scopi illegali o non autorizzati</li>
                  <li>Tentare di accedere a aree riservate o sistemi informatici</li>
                  <li>Trasmettere virus, malware o codice dannoso</li>
                  <li>Raccogliere dati personali di altri utenti</li>
                  <li>Interferire con il funzionamento del Sito</li>
                  <li>Violare i diritti di proprietà intellettuale</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Limitazione Responsabilità */}
            <AccordionItem value="responsabilita" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                9. Limitazione di Responsabilità
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>
                  La Società si impegna a mantenere il Sito accessibile e funzionante, ma non garantisce che il Sito sia privo di errori o disponibile ininterrottamente.
                </p>
                <p>
                  La Società non è responsabile per:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Danni derivanti dall'uso o dall'impossibilità di utilizzare il Sito</li>
                  <li>Interruzioni, ritardi o malfunzionamenti del Sito</li>
                  <li>Perdita di dati o danni a dispositivi dell'Utente</li>
                  <li>Contenuti di siti terzi collegati tramite link</li>
                  <li>Azioni di terzi non autorizzate</li>
                </ul>
                <p className="mt-4">
                  Le informazioni presenti sul Sito sono fornite a scopo informativo e non costituiscono offerta al pubblico. Per informazioni aggiornate e vincolanti, contattare la Società.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Link Esterni */}
            <AccordionItem value="link" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                10. Link a Siti Esterni
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>
                  Il Sito può contenere link a siti web di terze parti. La Società non ha alcun controllo su tali siti e non è responsabile dei loro contenuti, politiche sulla privacy o pratiche.
                </p>
                <p>
                  L'inclusione di link non implica approvazione o associazione con tali siti. L'Utente accede a siti terzi a proprio rischio.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Privacy */}
            <AccordionItem value="privacy" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                11. Privacy e Cookie
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>
                  Il trattamento dei dati personali è regolato dalla nostra <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
                </p>
                <p>
                  L'utilizzo dei cookie è regolato dalla nostra <a href="/cookie-policy" className="text-primary hover:underline">Cookie Policy</a>.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Legge Applicabile */}
            <AccordionItem value="legge" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                12. Legge Applicabile e Foro Competente
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>
                  I presenti Termini e Condizioni sono regolati dalla legge italiana.
                </p>
                <p>
                  Per qualsiasi controversia derivante dall'interpretazione o dall'esecuzione dei presenti Termini, sarà competente in via esclusiva il <strong>Foro di Milano</strong>, fatta salva l'applicazione delle norme inderogabili a tutela del consumatore.
                </p>
                <p>
                  Per le controversie relative a contratti conclusi online, è disponibile la piattaforma ODR dell'Unione Europea:{" "}
                  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    ec.europa.eu/consumers/odr
                  </a>
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Contatti */}
            <AccordionItem value="contatti" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                13. Contatti
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>Per qualsiasi domanda o chiarimento sui presenti Termini e Condizioni:</p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold text-foreground">Domus Group S.r.l.</p>
                  <p>Via Aurelio Saffi 29, Milano</p>
                  <p>P.IVA: 13132010961</p>
                  <p>Email: <a href="mailto:info@i-profili.it" className="text-primary hover:underline">info@i-profili.it</a></p>
                  <p>PEC: <a href="mailto:domusgroupsrl@legalmail.it" className="text-primary hover:underline">domusgroupsrl@legalmail.it</a></p>
                  <p>Tel: <a href="tel:+393513058029" className="text-primary hover:underline">+39 351 305 8029</a></p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>

      <Footer />
      <MobileBottomBar />
    </div>
  );
};

export default TerminiCondizioniPage;
