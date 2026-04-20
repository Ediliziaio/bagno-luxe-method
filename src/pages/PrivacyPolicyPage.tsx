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

const PrivacyPolicyPage = () => {
  const breadcrumbItems = [{ label: "Privacy Policy" }];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Privacy Policy | I Profili - Informativa sulla Privacy"
        description="Informativa sulla privacy di I Profili - Domus Group S.r.l. Scopri come trattiamo i tuoi dati personali in conformità al GDPR."
        canonical="https://www.i-profili.it/privacy-policy"
      />
      <HomeHeader />

      <main className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SEOBreadcrumb items={breadcrumbItems} />

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Informativa sulla Privacy
          </h1>
          <p className="text-muted-foreground mb-8">
            Ultimo aggiornamento: Febbraio 2026
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            {/* Titolare del Trattamento */}
            <AccordionItem value="titolare" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                1. Titolare del Trattamento
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>
                  Il Titolare del trattamento dei dati personali è:
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold text-foreground">Domus Group S.r.l.</p>
                  <p>Sede Legale: Via Aurelio Saffi 29, Milano</p>
                  <p>P.IVA: 13132010961</p>
                  <p>Email: <a href="mailto:info@i-profili.it" className="text-primary hover:underline">info@i-profili.it</a></p>
                  <p>PEC: <a href="mailto:domusgroupsrl@legalmail.it" className="text-primary hover:underline">domusgroupsrl@legalmail.it</a></p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Referente Privacy */}
            <AccordionItem value="referente-privacy" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                2. Referente Privacy
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>
                  Per l'esercizio dei diritti previsti dal GDPR e per qualsiasi richiesta relativa al trattamento dei dati personali, è possibile contattare il Referente Privacy ai seguenti recapiti:
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p><strong>Email Privacy:</strong> <a href="mailto:privacy@i-profili.it" className="text-primary hover:underline">privacy@i-profili.it</a></p>
                  <p><strong>PEC:</strong> <a href="mailto:domusgroupsrl@legalmail.it" className="text-primary hover:underline">domusgroupsrl@legalmail.it</a></p>
                </div>
                <p className="text-sm">
                  Il Titolare non ha nominato un Responsabile della Protezione dei Dati (DPO) in quanto non rientra nei casi di obbligatorietà previsti dall'Art. 37 GDPR.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Tipologie di Dati Raccolti */}
            <AccordionItem value="dati" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                3. Tipologie di Dati Raccolti
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>Fra i Dati Personali raccolti da questo sito web, in modo autonomo o tramite terze parti, ci sono:</p>
                
                <h4 className="font-semibold text-foreground mt-4">Dati forniti volontariamente dall'Utente:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Nome e cognome</li>
                  <li>Indirizzo email</li>
                  <li>Numero di telefono</li>
                  <li>Indirizzo di residenza</li>
                  <li>Dati relativi alla richiesta di preventivo</li>
                </ul>

                <h4 className="font-semibold text-foreground mt-4">Dati raccolti automaticamente:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Indirizzo IP (anonimizzato per analytics)</li>
                  <li>Tipo di browser e dispositivo</li>
                  <li>Sistema operativo</li>
                  <li>Pagine visitate e tempo di permanenza</li>
                  <li>Dati di navigazione e interazione con il sito</li>
                  <li>Dati di geolocalizzazione approssimativa (a livello regionale)</li>
                </ul>

                <div className="bg-muted/50 p-4 rounded-lg mt-4">
                  <p className="text-sm">
                    <strong>Nota:</strong> Non raccogliamo dati sensibili (origine razziale o etnica, opinioni politiche, convinzioni religiose, dati genetici, dati biometrici, dati relativi alla salute o alla vita sessuale).
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Finalità del Trattamento */}
            <AccordionItem value="finalita" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                4. Finalità del Trattamento
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>I dati personali sono raccolti per le seguenti finalità:</p>
                
                <h4 className="font-semibold text-foreground mt-4">Finalità primarie (senza consenso):</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Rispondere alle richieste di contatto e preventivo</li>
                  <li>Gestire la relazione commerciale e contrattuale</li>
                  <li>Fornire i servizi richiesti (sopralluogo, installazione, assistenza)</li>
                  <li>Adempiere agli obblighi di legge (fiscali, contabili, antiriciclaggio)</li>
                </ul>

                <h4 className="font-semibold text-foreground mt-4">Finalità di marketing (previo consenso esplicito):</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Invio di comunicazioni promozionali via email, SMS, telefono</li>
                  <li>Newsletter e aggiornamenti sui prodotti e servizi</li>
                  <li>Remarketing e pubblicità personalizzata su piattaforme terze</li>
                </ul>

                <h4 className="font-semibold text-foreground mt-4">Finalità statistiche:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Analisi aggregate del traffico web (dati anonimi)</li>
                  <li>Miglioramento dell'esperienza utente sul sito</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Base Giuridica */}
            <AccordionItem value="base-giuridica" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                5. Base Giuridica del Trattamento
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>Il trattamento dei dati personali si basa sulle seguenti basi giuridiche (Art. 6 GDPR):</p>
                
                <div className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground">Consenso dell'interessato (Art. 6.1.a)</h4>
                    <p className="text-sm mt-1">Per attività di marketing diretto, remarketing pubblicitario, profilazione e cookie non necessari. Il consenso è sempre revocabile.</p>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground">Esecuzione di un contratto (Art. 6.1.b)</h4>
                    <p className="text-sm mt-1">Per la gestione delle richieste di preventivo, l'esecuzione dei contratti di fornitura e installazione, l'assistenza post-vendita.</p>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground">Legittimo interesse (Art. 6.1.f)</h4>
                    <p className="text-sm mt-1">Per la prevenzione di frodi, la sicurezza informatica, e l'invio di comunicazioni relative a servizi analoghi già acquistati (soft spam, con diritto di opposizione).</p>
                    <p className="text-sm mt-2 text-muted-foreground">
                      <em>Bilanciamento degli interessi:</em> Il Titolare ha valutato che tali trattamenti non ledono i diritti e le libertà degli interessati, considerando la natura dei dati, le ragionevoli aspettative degli interessati e le misure di sicurezza adottate.
                    </p>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground">Obbligo legale (Art. 6.1.c)</h4>
                    <p className="text-sm mt-1">Per adempimenti fiscali (fatturazione, dichiarazioni IVA), obblighi antiriciclaggio e conservazione documentale prevista dalla legge.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Servizi di Terze Parti */}
            <AccordionItem value="terze-parti" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                6. Servizi di Terze Parti e Destinatari
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-6">
                <p>I dati personali possono essere comunicati alle seguenti categorie di destinatari:</p>

                <h4 className="font-semibold text-foreground">Categorie di destinatari:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Fornitori di servizi IT e hosting</li>
                  <li>Commercialista e consulenti fiscali</li>
                  <li>Istituti di credito (per pagamenti e finanziamenti)</li>
                  <li>Piattaforme pubblicitarie (previo consenso)</li>
                  <li>Autorità pubbliche (su richiesta legale)</li>
                </ul>

                <p className="mt-4">Questo sito utilizza i seguenti servizi di terze parti:</p>

                <div className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground">Google Analytics 4</h4>
                    <p className="text-sm mt-1">Servizio di analisi web fornito da Google LLC. Con anonimizzazione IP attiva, secondo le indicazioni del Garante Privacy italiano.</p>
                    <p className="text-sm mt-1">Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">policies.google.com/privacy</a></p>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground">Google Ads (inclusa Conversion API)</h4>
                    <p className="text-sm mt-1">Piattaforma pubblicitaria per campagne di remarketing e tracciamento conversioni. Include tracciamento sia client-side che server-side.</p>
                    <p className="text-sm mt-1">Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">policies.google.com/privacy</a></p>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground">Meta Pixel (Facebook/Instagram Ads)</h4>
                    <p className="text-sm mt-1">Strumento di tracciamento di Meta Platforms Inc. per campagne pubblicitarie. I dati vengono utilizzati per:</p>
                    <ul className="list-disc pl-6 text-sm mt-1">
                      <li>Creare Custom Audiences e Lookalike Audiences</li>
                      <li>Misurare le conversioni</li>
                      <li>Ottimizzare le campagne pubblicitarie</li>
                    </ul>
                    <p className="text-sm mt-1">Privacy Policy: <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">facebook.com/privacy/policy</a></p>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground">Meta Conversion API (CAPI)</h4>
                    <p className="text-sm mt-1">Tracciamento server-side che invia dati di conversione direttamente ai server di Meta, bypassando le limitazioni dei browser.</p>
                    <p className="text-sm mt-1">I dati trasmessi possono includere: eventi di conversione, dati di contatto hashati (email, telefono), informazioni sul dispositivo.</p>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground">TikTok Ads</h4>
                    <p className="text-sm mt-1">Piattaforma pubblicitaria di ByteDance Ltd. per campagne video e remarketing.</p>
                    <p className="text-sm mt-1">Privacy Policy: <a href="https://www.tiktok.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">tiktok.com/legal/privacy-policy</a></p>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground">Lead Connector (GoHighLevel)</h4>
                    <p className="text-sm mt-1">Piattaforma CRM per la gestione dei contatti, form di raccolta lead, chat e comunicazioni automatizzate (email, SMS).</p>
                    <p className="text-sm mt-1">Privacy Policy: <a href="https://www.gohighlevel.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">gohighlevel.com/privacy-policy</a></p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Profilazione */}
            <AccordionItem value="profilazione" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                7. Profilazione e Decisioni Automatizzate (Art. 22 GDPR)
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>Questo sito effettua attività di profilazione tramite i pixel pubblicitari installati (Meta, Google, TikTok), <strong>previo consenso dell'Utente</strong>.</p>

                <h4 className="font-semibold text-foreground mt-4">Tipologie di profilazione:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Remarketing:</strong> Mostrare annunci personalizzati agli utenti che hanno visitato il sito</li>
                  <li><strong>Creazione di audience:</strong> Raggruppare utenti con comportamenti simili per campagne pubblicitarie</li>
                  <li><strong>Lookalike audiences:</strong> Trovare nuovi potenziali clienti con caratteristiche simili</li>
                  <li><strong>Ottimizzazione delle conversioni:</strong> Mostrare annunci a utenti più propensi all'azione</li>
                </ul>

                <div className="bg-muted/50 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold text-foreground">Decisioni automatizzate</h4>
                  <p className="text-sm mt-1">
                    <strong>Non vengono prese decisioni basate unicamente su trattamenti automatizzati che producano effetti giuridici o incidano significativamente sulla persona</strong> (es. decisioni su credito, assunzioni, accesso a servizi essenziali).
                  </p>
                  <p className="text-sm mt-2">
                    La profilazione è utilizzata esclusivamente per finalità pubblicitarie e l'Utente può opporsi in qualsiasi momento revocando il consenso o utilizzando gli strumenti di opt-out dei singoli fornitori.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Trasferimento Dati */}
            <AccordionItem value="trasferimento" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                8. Trasferimento dei Dati Extra-UE
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>I dati personali potrebbero essere trasferiti verso paesi terzi (extra-UE), in particolare verso gli Stati Uniti, in quanto alcuni dei servizi di terze parti utilizzati hanno sede in tale paese.</p>
                
                <p>In tali casi, il trasferimento avviene sulla base di:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>EU-US Data Privacy Framework (DPF):</strong> Decisione di adeguatezza della Commissione Europea del 10 luglio 2023, per i fornitori certificati (Google, Meta)</li>
                  <li><strong>Clausole contrattuali standard (SCC):</strong> Approvate dalla Commissione Europea, per fornitori non certificati DPF</li>
                  <li><strong>Consenso esplicito:</strong> Per trasferimenti specifici, previo consenso informato dell'interessato</li>
                </ul>

                <div className="bg-muted/50 p-4 rounded-lg mt-4">
                  <p className="text-sm">
                    <strong>Fornitori certificati DPF:</strong> Google LLC, Meta Platforms Inc. È possibile verificare lo stato di certificazione su: <a href="https://www.dataprivacyframework.gov/s/participant-search" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">dataprivacyframework.gov</a>
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Periodo di Conservazione */}
            <AccordionItem value="conservazione" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                9. Periodo di Conservazione
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>I dati personali sono conservati per il tempo strettamente necessario alle finalità per cui sono stati raccolti, secondo il principio di minimizzazione:</p>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 pr-4 font-semibold text-foreground">Tipologia di dati</th>
                        <th className="text-left py-2 font-semibold text-foreground">Periodo di conservazione</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 pr-4">Richieste di contatto/preventivo (non convertite)</td>
                        <td className="py-2">24 mesi dalla richiesta</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4">Dati contrattuali e fatturazione</td>
                        <td className="py-2">10 anni dalla chiusura del contratto (obblighi fiscali)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4">Consenso marketing</td>
                        <td className="py-2">Fino a revoca + 6 mesi per prove del consenso</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4">Dati di navigazione (analytics)</td>
                        <td className="py-2">14 mesi (impostazione GA4)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4">Cookie di profilazione</td>
                        <td className="py-2">Secondo le durate in Cookie Policy</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4">Documentazione garanzie</td>
                        <td className="py-2">Durata della garanzia + 1 anno</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Minori */}
            <AccordionItem value="minori" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                10. Minori (Art. 8 GDPR)
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>
                  Il Sito e i Servizi <strong>non sono destinati a minori di 16 anni</strong>. Non raccogliamo consapevolmente dati personali di minori.
                </p>
                <p>
                  Se un genitore o tutore legale dovesse scoprire che un minore ha fornito dati personali senza autorizzazione, è pregato di contattarci immediatamente a <a href="mailto:privacy@i-profili.it" className="text-primary hover:underline">privacy@i-profili.it</a> per richiederne la cancellazione.
                </p>
                <p>
                  I servizi offerti (installazione serramenti) sono per loro natura rivolti a proprietari immobiliari maggiorenni o a soggetti che agiscono per conto di persone giuridiche.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Diritti dell'Interessato */}
            <AccordionItem value="diritti" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                11. Diritti dell'Interessato (Artt. 15-22 GDPR)
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>In qualità di interessato, hai il diritto di:</p>
                
                <div className="space-y-3">
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p><strong>Accesso (Art. 15):</strong> Ottenere conferma dell'esistenza di dati che ti riguardano e riceverne copia</p>
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p><strong>Rettifica (Art. 16):</strong> Correggere dati inesatti o incompleti</p>
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p><strong>Cancellazione (Art. 17):</strong> Richiedere la cancellazione dei dati ("diritto all'oblio")</p>
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p><strong>Limitazione (Art. 18):</strong> Limitare il trattamento in determinate circostanze</p>
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p><strong>Portabilità (Art. 20):</strong> Ricevere i dati in formato strutturato e trasferirli ad altro titolare</p>
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p><strong>Opposizione (Art. 21):</strong> Opporti al trattamento per motivi legittimi, incluso il marketing diretto</p>
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p><strong>Revoca del consenso (Art. 7):</strong> Revocare in qualsiasi momento i consensi prestati, senza pregiudicare la liceità del trattamento precedente</p>
                  </div>
                </div>

                <h4 className="font-semibold text-foreground mt-4">Come esercitare i diritti:</h4>
                <p>Invia una richiesta a:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Email: <a href="mailto:privacy@i-profili.it" className="text-primary hover:underline">privacy@i-profili.it</a></li>
                  <li>PEC: <a href="mailto:domusgroupsrl@legalmail.it" className="text-primary hover:underline">domusgroupsrl@legalmail.it</a></li>
                </ul>
                <p className="text-sm mt-2">Risponderemo entro 30 giorni dalla ricezione della richiesta.</p>

                <div className="bg-muted/50 p-4 rounded-lg mt-4">
                  <p className="font-semibold text-foreground">Reclamo all'Autorità di Controllo</p>
                  <p className="text-sm mt-1">
                    Hai il diritto di proporre reclamo al <strong>Garante per la Protezione dei Dati Personali</strong>
                  </p>
                  <p className="text-sm mt-1">
                    Sito: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.garanteprivacy.it</a>
                  </p>
                  <p className="text-sm">
                    Email: <a href="mailto:protocollo@gpdp.it" className="text-primary hover:underline">protocollo@gpdp.it</a>
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Sicurezza */}
            <AccordionItem value="sicurezza" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                12. Misure di Sicurezza
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>Adottiamo misure tecniche e organizzative adeguate per proteggere i dati personali (Art. 32 GDPR):</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Crittografia SSL/TLS per tutte le comunicazioni web</li>
                  <li>Accesso ai dati limitato al personale autorizzato e formato</li>
                  <li>Backup regolari e sistemi di disaster recovery</li>
                  <li>Monitoraggio continuo delle vulnerabilità</li>
                  <li>Gestione degli accessi con credenziali individuali</li>
                  <li>Formazione del personale sulla protezione dei dati</li>
                  <li>Procedure di risposta agli incidenti (data breach)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Cookie */}
            <AccordionItem value="cookie" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                13. Cookie e Tecnologie di Tracciamento
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>Questo sito utilizza cookie e tecnologie simili. Per informazioni dettagliate, consulta la nostra <a href="/cookie-policy" className="text-primary hover:underline font-medium">Cookie Policy</a>.</p>
              </AccordionContent>
            </AccordionItem>

            {/* Modifiche */}
            <AccordionItem value="modifiche" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                14. Modifiche alla Privacy Policy
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>Ci riserviamo il diritto di modificare questa informativa in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento.</p>
                <p>In caso di modifiche sostanziali, informeremo gli utenti tramite email o banner sul sito.</p>
                <p>Ti invitiamo a consultare periodicamente questa pagina per rimanere aggiornato.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-12 p-6 bg-muted/50 rounded-lg">
            <h3 className="font-semibold text-foreground mb-2">Contatti Privacy</h3>
            <p className="text-muted-foreground">
              Per qualsiasi domanda riguardante questa Privacy Policy o per esercitare i tuoi diritti:{" "}
              <a href="mailto:privacy@i-profili.it" className="text-primary hover:underline">privacy@i-profili.it</a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
      <MobileBottomBar />
    </div>
  );
};

export default PrivacyPolicyPage;
