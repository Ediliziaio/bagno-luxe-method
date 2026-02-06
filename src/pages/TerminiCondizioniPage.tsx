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
                  <li><strong>"Titolare", "Venditore" o "Società"</strong>: Domus Group S.r.l., con sede in Via Aurelio Saffi 29, Milano, P.IVA 13132010961</li>
                  <li><strong>"Utente" o "Cliente"</strong>: qualsiasi persona fisica o giuridica che accede al Sito o utilizza i Servizi</li>
                  <li><strong>"Consumatore"</strong>: persona fisica che agisce per scopi estranei all'attività imprenditoriale, commerciale, artigianale o professionale eventualmente svolta (D.Lgs. 206/2005)</li>
                  <li><strong>"Servizi"</strong>: i servizi offerti dalla Società, inclusi fornitura e installazione di serramenti, consulenza e preventivi</li>
                  <li><strong>"Prodotti"</strong>: serramenti, porte, infissi e accessori forniti dalla Società</li>
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
                  I presenti Termini e Condizioni regolano l'utilizzo del Sito e dei Servizi offerti dalla Società, in conformità al D.Lgs. 206/2005 (Codice del Consumo) e al D.Lgs. 70/2003 (commercio elettronico).
                </p>
                <p>
                  L'accesso e l'utilizzo del Sito comportano l'accettazione integrale e senza riserve dei presenti Termini e Condizioni. Se non si accettano tali condizioni, si prega di non utilizzare il Sito.
                </p>
                <p>
                  La Società si riserva il diritto di modificare i presenti Termini in qualsiasi momento. Le modifiche saranno efficaci dalla data di pubblicazione sul Sito e non si applicheranno ai contratti già conclusi.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Informazioni Precontrattuali */}
            <AccordionItem value="precontrattuali" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                3. Informazioni Precontrattuali (Art. 49 Codice Consumo)
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>Prima della conclusione del contratto, il Consumatore è informato su:</p>
                
                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                  <p><strong>Identità del Professionista:</strong> Domus Group S.r.l.</p>
                  <p><strong>Sede Legale:</strong> Via Aurelio Saffi 29, 20123 Milano (MI)</p>
                  <p><strong>Showroom:</strong> Via Daniele Raimondi 37, 21052 Busto Arsizio (VA)</p>
                  <p><strong>P.IVA:</strong> 13132010961</p>
                  <p><strong>Telefono:</strong> <a href="tel:+393501780908" className="text-primary hover:underline">+39 350 178 0908</a></p>
                  <p><strong>Email:</strong> <a href="mailto:info@i-profili.it" className="text-primary hover:underline">info@i-profili.it</a></p>
                  <p><strong>PEC:</strong> <a href="mailto:domusgroupsrl@legalmail.it" className="text-primary hover:underline">domusgroupsrl@legalmail.it</a></p>
                </div>

                <ul className="list-disc pl-6 space-y-1 mt-4">
                  <li>Caratteristiche principali dei beni e servizi (descritte nel preventivo)</li>
                  <li>Prezzo totale comprensivo di IVA e costi di installazione</li>
                  <li>Modalità di pagamento e consegna</li>
                  <li>Esistenza della garanzia legale di conformità</li>
                  <li>Condizioni e modalità di esercizio del diritto di recesso (se applicabile)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Servizi Offerti */}
            <AccordionItem value="servizi" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                4. Servizi Offerti
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
                  <li>Preventivi personalizzati gratuiti</li>
                  <li>Assistenza post-vendita</li>
                </ul>
                <p className="mt-4">
                  I servizi sono disponibili principalmente in Lombardia. Per verificare la copertura nella tua zona, contattaci.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Preventivi e Ordini */}
            <AccordionItem value="preventivi" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                5. Preventivi e Ordini
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <h4 className="font-semibold text-foreground">Richiesta di Preventivo</h4>
                <p>
                  L'Utente può richiedere un preventivo gratuito tramite il form presente sul Sito, telefonicamente o presso il nostro showroom.
                  Il preventivo viene elaborato sulla base delle informazioni fornite dall'Utente e di un sopralluogo tecnico.
                </p>

                <h4 className="font-semibold text-foreground mt-4">Validità del Preventivo</h4>
                <p>
                  I preventivi hanno validità di 30 (trenta) giorni dalla data di emissione, salvo diversa indicazione scritta. Trascorso tale termine, la Società si riserva il diritto di aggiornare i prezzi.
                </p>

                <h4 className="font-semibold text-foreground mt-4">Conferma Ordine e Conclusione del Contratto</h4>
                <p>
                  Il contratto si considera concluso con:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Sottoscrizione del preventivo/contratto da parte del Cliente</li>
                  <li>Versamento dell'acconto previsto</li>
                  <li>Conferma scritta della Società</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Prezzi e Pagamenti */}
            <AccordionItem value="prezzi" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                6. Prezzi e Pagamenti
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>
                  I prezzi indicati nei preventivi sono comprensivi di IVA. L'aliquota IVA applicabile è:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>IVA 22%:</strong> aliquota ordinaria per nuove costruzioni</li>
                  <li><strong>IVA 10%:</strong> per interventi di manutenzione straordinaria, restauro, risanamento conservativo e ristrutturazione edilizia su immobili a prevalente destinazione abitativa (Art. 7, comma 1, lett. b, L. 488/1999)</li>
                  <li><strong>IVA 4%:</strong> per costruzione prima casa con requisiti "Tupini"</li>
                </ul>

                <h4 className="font-semibold text-foreground mt-4">Modalità di Pagamento</h4>
                <p>Le modalità di pagamento accettate sono:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Bonifico bancario</li>
                  <li>Carte di credito/debito (POS)</li>
                  <li>Assegno bancario</li>
                  <li>Finanziamento rateale (tramite partner convenzionati)</li>
                </ul>

                <h4 className="font-semibold text-foreground mt-4">Termini di Pagamento Standard</h4>
                <p>
                  Salvo diversi accordi scritti, il pagamento avviene con:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>30%</strong> alla conferma dell'ordine</li>
                  <li><strong>60%</strong> alla consegna dei materiali</li>
                  <li><strong>10% (saldo)</strong> al termine dei lavori di installazione</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Tempi di Consegna */}
            <AccordionItem value="consegna" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                7. Tempi di Consegna e Installazione
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>
                  I tempi di consegna e installazione sono indicati nel preventivo/contratto e decorrono dalla data di conferma dell'ordine e versamento dell'acconto.
                </p>

                <h4 className="font-semibold text-foreground mt-4">Tempi indicativi:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Produzione:</strong> 4-8 settimane dalla conferma d'ordine (variabile in base al prodotto)</li>
                  <li><strong>Installazione:</strong> concordata con il Cliente dopo la consegna</li>
                </ul>

                <div className="bg-muted/50 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold text-foreground">Ritardo nella consegna (Art. 61 Codice Consumo)</h4>
                  <p className="text-sm mt-1">
                    In caso di ritardo nella consegna oltre il termine pattuito, il Consumatore può:
                  </p>
                  <ul className="list-disc pl-6 text-sm mt-2 space-y-1">
                    <li>Fissare un termine supplementare appropriato</li>
                    <li>Risolvere il contratto se il termine supplementare non viene rispettato</li>
                    <li>Risolvere immediatamente il contratto se il termine era essenziale</li>
                  </ul>
                  <p className="text-sm mt-2">
                    In caso di risoluzione, il Consumatore ha diritto al rimborso di tutte le somme versate entro 14 giorni.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Diritto di Recesso */}
            <AccordionItem value="recesso" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                8. Diritto di Recesso (Artt. 52-59 Codice Consumo)
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>
                  Il Consumatore ha diritto di recedere dal contratto entro <strong>14 giorni</strong> senza indicarne le ragioni e senza penalità.
                </p>

                <h4 className="font-semibold text-foreground mt-4">Decorrenza del termine:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Per i servizi: dalla conclusione del contratto</li>
                  <li>Per i beni: dal giorno in cui il Consumatore acquisisce il possesso fisico dei beni</li>
                </ul>

                <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold text-foreground">⚠️ ESCLUSIONI DAL DIRITTO DI RECESSO (Art. 59 Codice Consumo)</h4>
                  <p className="text-sm mt-2">
                    Il diritto di recesso è <strong>ESCLUSO</strong> per:
                  </p>
                  <ul className="list-disc pl-6 text-sm mt-2 space-y-1">
                    <li><strong>Beni confezionati su misura o chiaramente personalizzati</strong> (Art. 59, lett. c)</li>
                    <li>Beni che rischiano di deteriorarsi o scadere rapidamente</li>
                    <li>Servizi completamente eseguiti, con consenso espresso del Consumatore, prima della scadenza del periodo di recesso</li>
                  </ul>
                  <p className="text-sm mt-3 font-medium">
                    <strong>I SERRAMENTI SU MISURA</strong> (finestre, porte, persiane realizzate secondo le specifiche dimensionali e di design del Cliente) <strong>NON SONO SOGGETTI A RECESSO</strong> in quanto prodotti personalizzati secondo le indicazioni del Cliente.
                  </p>
                </div>

                <h4 className="font-semibold text-foreground mt-4">Modalità di esercizio del recesso (quando applicabile):</h4>
                <p>Inviare comunicazione esplicita a:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Email: <a href="mailto:info@i-profili.it" className="text-primary hover:underline">info@i-profili.it</a></li>
                  <li>PEC: <a href="mailto:domusgroupsrl@legalmail.it" className="text-primary hover:underline">domusgroupsrl@legalmail.it</a></li>
                  <li>Raccomandata A/R: Domus Group S.r.l., Via Aurelio Saffi 29, 20123 Milano</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Garanzia Legale */}
            <AccordionItem value="garanzia-legale" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                9. Garanzia Legale di Conformità (D.Lgs. 170/2021)
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>
                  In conformità alla Direttiva 2019/771 (recepita con D.Lgs. 170/2021), il Venditore risponde dei <strong>difetti di conformità</strong> che si manifestano entro <strong>2 ANNI</strong> dalla consegna del bene.
                </p>

                <div className="bg-muted/50 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold text-foreground">Novità normativa (dal 1° gennaio 2022):</h4>
                  <ul className="list-disc pl-6 text-sm mt-2 space-y-2">
                    <li><strong>Primi 12 mesi:</strong> il difetto si presume esistente al momento della consegna. È il Venditore a dover dimostrare il contrario.</li>
                    <li><strong>Dal 13° al 24° mese:</strong> il Consumatore deve provare che il difetto esisteva al momento della consegna.</li>
                  </ul>
                </div>

                <h4 className="font-semibold text-foreground mt-4">Rimedi a disposizione del Consumatore (in ordine):</h4>
                <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>Riparazione o sostituzione</strong> del bene (a scelta del Consumatore), senza spese, entro un termine ragionevole</li>
                  <li><strong>Riduzione proporzionale del prezzo</strong> (se riparazione/sostituzione impossibile o eccessivamente onerosa)</li>
                  <li><strong>Risoluzione del contratto</strong> (se il difetto è di grave entità)</li>
                </ol>

                <h4 className="font-semibold text-foreground mt-4">Garanzie Commerciali Aggiuntive:</h4>
                <p>Oltre alla garanzia legale, offriamo:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Garanzia profili PVC:</strong> fino a 15 anni</li>
                  <li><strong>Garanzia vetrocamera:</strong> 10 anni sulla tenuta ermetica</li>
                  <li><strong>Garanzia posa:</strong> 5 anni sull'installazione</li>
                </ul>
                <p className="text-sm mt-2">
                  Le garanzie commerciali sono valide a condizione che i prodotti siano utilizzati correttamente e sottoposti a manutenzione ordinaria secondo le istruzioni fornite.
                </p>

                <p className="mt-4">
                  Per maggiori dettagli, consulta la pagina <a href="/garanzie" className="text-primary hover:underline">Garanzie</a>.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Forza Maggiore */}
            <AccordionItem value="forza-maggiore" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                10. Forza Maggiore
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>
                  La Società non è responsabile per ritardi o inadempimenti dovuti a eventi di forza maggiore, ossia eventi imprevedibili, inevitabili e al di fuori del ragionevole controllo della Società, inclusi a titolo esemplificativo:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Catastrofi naturali (terremoti, alluvioni, incendi)</li>
                  <li>Pandemie ed emergenze sanitarie</li>
                  <li>Guerre, atti di terrorismo, sommosse</li>
                  <li>Scioperi e blocchi dei trasporti</li>
                  <li>Provvedimenti delle autorità pubbliche</li>
                  <li>Carenze di materie prime non imputabili alla Società</li>
                  <li>Guasti agli impianti di produzione del fornitore</li>
                </ul>
                <p className="mt-4">
                  In caso di forza maggiore, i termini contrattuali sono sospesi per la durata dell'evento. La Società informerà tempestivamente il Cliente.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Proprietà Intellettuale */}
            <AccordionItem value="proprieta" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                11. Proprietà Intellettuale
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>
                  Tutti i Contenuti presenti sul Sito (testi, immagini, loghi, grafica, video, software) sono di proprietà esclusiva della Società o dei suoi licenzianti e sono protetti dalle leggi sul diritto d'autore e sulla proprietà intellettuale (L. 633/1941).
                </p>
                <p>
                  È vietata qualsiasi riproduzione, distribuzione, modifica o utilizzo dei Contenuti senza autorizzazione scritta della Società.
                </p>
                <p>
                  I marchi "I Profili" e "Domus Group" sono marchi registrati. È vietato l'uso non autorizzato.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Limitazione Responsabilità */}
            <AccordionItem value="responsabilita" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                12. Limitazione di Responsabilità
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
                </ul>
                <p className="mt-4">
                  Le limitazioni di cui sopra non si applicano in caso di dolo o colpa grave della Società, né pregiudicano i diritti inderogabili del Consumatore.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Link Esterni */}
            <AccordionItem value="link" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                13. Link a Siti Esterni
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

            {/* ADR/ODR */}
            <AccordionItem value="adr" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                14. Risoluzione Alternativa delle Controversie (ADR/ODR)
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>
                  In conformità al D.Lgs. 130/2015 e al Regolamento UE 524/2013, in caso di controversia relativa a un contratto concluso online, il Consumatore può ricorrere a procedure di risoluzione alternativa delle controversie (ADR).
                </p>

                <div className="bg-muted/50 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold text-foreground">Piattaforma ODR dell'Unione Europea</h4>
                  <p className="text-sm mt-1">
                    La Commissione Europea mette a disposizione una piattaforma per la risoluzione online delle controversie (ODR):
                  </p>
                  <p className="mt-2">
                    <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                      https://ec.europa.eu/consumers/odr
                    </a>
                  </p>
                </div>

                <h4 className="font-semibold text-foreground mt-4">Altre opzioni di ADR:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Negoziazione Paritetica presso le Camere di Commercio</li>
                  <li>Servizio di Conciliazione della Camera di Commercio di Milano</li>
                  <li>Organismi di mediazione accreditati dal Ministero della Giustizia</li>
                </ul>

                <p className="text-sm mt-4">
                  Email del Venditore per le controversie: <a href="mailto:info@i-profili.it" className="text-primary hover:underline">info@i-profili.it</a>
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Legge Applicabile e Foro */}
            <AccordionItem value="legge" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                15. Legge Applicabile e Foro Competente
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>
                  I presenti Termini e Condizioni sono regolati dalla <strong>legge italiana</strong>.
                </p>
                <p>
                  Per le controversie con Consumatori residenti in Italia, è competente in via esclusiva il <strong>Foro del luogo di residenza o domicilio del Consumatore</strong>, se ubicati in Italia (Art. 66-bis Codice del Consumo).
                </p>
                <p>
                  Per le controversie con clienti professionisti (B2B), è competente in via esclusiva il <strong>Foro di Milano</strong>.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Clausole Vessatorie */}
            <AccordionItem value="vessatorie" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                16. Clausole da Approvare Specificamente (Art. 1341-1342 c.c.)
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>
                  Ai sensi e per gli effetti degli artt. 1341 e 1342 del Codice Civile, il Cliente dichiara di aver letto, compreso e di approvare specificamente le seguenti clausole:
                </p>
                
                <div className="bg-muted/50 p-4 rounded-lg mt-4 space-y-2">
                  <p><strong>Art. 8 - Diritto di Recesso:</strong> Esclusione del diritto di recesso per beni su misura</p>
                  <p><strong>Art. 10 - Forza Maggiore:</strong> Esonero di responsabilità per eventi di forza maggiore</p>
                  <p><strong>Art. 12 - Limitazione di Responsabilità:</strong> Limitazione della responsabilità per danni</p>
                  <p><strong>Art. 13 - Link Esterni:</strong> Esclusione di responsabilità per contenuti di terzi</p>
                  <p><strong>Art. 15 - Foro Competente:</strong> Deroga alla competenza territoriale per clienti B2B</p>
                </div>

                <p className="text-sm mt-4">
                  <em>Nota: La firma/accettazione di queste clausole è richiesta nel contratto individuale di vendita.</em>
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Privacy e Cookie */}
            <AccordionItem value="privacy" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                17. Privacy e Cookie
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

            {/* Contatti */}
            <AccordionItem value="contatti" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                18. Contatti
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>Per qualsiasi domanda o chiarimento sui presenti Termini e Condizioni:</p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold text-foreground">Domus Group S.r.l.</p>
                  <p>Sede Legale: Via Aurelio Saffi 29, 20123 Milano</p>
                  <p>Showroom: Via Daniele Raimondi 37, 21052 Busto Arsizio (VA)</p>
                  <p>P.IVA: 13132010961</p>
                  <p>Email: <a href="mailto:info@i-profili.it" className="text-primary hover:underline">info@i-profili.it</a></p>
                  <p>PEC: <a href="mailto:domusgroupsrl@legalmail.it" className="text-primary hover:underline">domusgroupsrl@legalmail.it</a></p>
                  <p>Tel: <a href="tel:+393501780908" className="text-primary hover:underline">+39 350 178 0908</a></p>
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
