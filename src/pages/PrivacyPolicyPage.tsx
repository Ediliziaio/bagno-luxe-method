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
        canonical="https://iprofili.it/privacy-policy"
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

            {/* Tipologie di Dati Raccolti */}
            <AccordionItem value="dati" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                2. Tipologie di Dati Raccolti
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
                  <li>Indirizzo IP</li>
                  <li>Tipo di browser e dispositivo</li>
                  <li>Sistema operativo</li>
                  <li>Pagine visitate e tempo di permanenza</li>
                  <li>Dati di navigazione e interazione con il sito</li>
                  <li>Dati di geolocalizzazione approssimativa</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Finalità del Trattamento */}
            <AccordionItem value="finalita" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                3. Finalità del Trattamento
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>I dati personali sono raccolti per le seguenti finalità:</p>
                
                <h4 className="font-semibold text-foreground mt-4">Finalità primarie:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Rispondere alle richieste di contatto e preventivo</li>
                  <li>Gestire la relazione commerciale</li>
                  <li>Fornire i servizi richiesti</li>
                  <li>Adempiere agli obblighi di legge</li>
                </ul>

                <h4 className="font-semibold text-foreground mt-4">Finalità di marketing (previo consenso):</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Invio di comunicazioni promozionali</li>
                  <li>Newsletter e aggiornamenti sui prodotti</li>
                  <li>Remarketing e pubblicità personalizzata</li>
                  <li>Analisi statistiche e miglioramento dei servizi</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Base Giuridica */}
            <AccordionItem value="base-giuridica" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                4. Base Giuridica del Trattamento
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>Il trattamento dei dati personali si basa su:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Consenso dell'interessato</strong> (Art. 6.1.a GDPR) - per attività di marketing e profilazione</li>
                  <li><strong>Esecuzione di un contratto</strong> (Art. 6.1.b GDPR) - per la gestione delle richieste di preventivo e dei contratti</li>
                  <li><strong>Legittimo interesse</strong> (Art. 6.1.f GDPR) - per migliorare i servizi e prevenire frodi</li>
                  <li><strong>Obbligo legale</strong> (Art. 6.1.c GDPR) - per adempimenti fiscali e normativi</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Servizi di Terze Parti */}
            <AccordionItem value="terze-parti" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                5. Servizi di Terze Parti
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-6">
                <p>Questo sito utilizza servizi di terze parti per finalità di analisi, marketing e gestione dei contatti:</p>

                <div className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground">Google Analytics</h4>
                    <p className="text-sm mt-1">Servizio di analisi web fornito da Google LLC. Raccoglie dati anonimi sulla navigazione per finalità statistiche.</p>
                    <p className="text-sm mt-1">Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">policies.google.com/privacy</a></p>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground">Google Ads</h4>
                    <p className="text-sm mt-1">Piattaforma pubblicitaria di Google per campagne di remarketing e conversione.</p>
                    <p className="text-sm mt-1">Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">policies.google.com/privacy</a></p>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground">Meta Pixel (Facebook Ads)</h4>
                    <p className="text-sm mt-1">Strumento di tracciamento di Meta Platforms Inc. per misurare l'efficacia delle campagne pubblicitarie su Facebook e Instagram.</p>
                    <p className="text-sm mt-1">Privacy Policy: <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">facebook.com/privacy/policy</a></p>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground">TikTok Ads</h4>
                    <p className="text-sm mt-1">Piattaforma pubblicitaria di ByteDance Ltd. per campagne video e remarketing.</p>
                    <p className="text-sm mt-1">Privacy Policy: <a href="https://www.tiktok.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">tiktok.com/legal/privacy-policy</a></p>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground">Lead Connector (GoHighLevel)</h4>
                    <p className="text-sm mt-1">Piattaforma CRM per la gestione dei contatti, form di raccolta lead e comunicazioni automatizzate.</p>
                    <p className="text-sm mt-1">Privacy Policy: <a href="https://www.gohighlevel.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">gohighlevel.com/privacy-policy</a></p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Trasferimento Dati */}
            <AccordionItem value="trasferimento" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                6. Trasferimento dei Dati
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>I dati personali potrebbero essere trasferiti verso paesi terzi (extra-UE), in particolare verso gli Stati Uniti, in quanto alcuni dei servizi di terze parti utilizzati hanno sede in tale paese.</p>
                <p>In tali casi, il trasferimento avviene sulla base di:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Decisioni di adeguatezza della Commissione Europea</li>
                  <li>Clausole contrattuali standard approvate dalla Commissione Europea</li>
                  <li>EU-US Data Privacy Framework (per fornitori certificati)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Periodo di Conservazione */}
            <AccordionItem value="conservazione" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                7. Periodo di Conservazione
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>I dati personali sono conservati per il tempo strettamente necessario alle finalità per cui sono stati raccolti:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Dati di contatto e preventivo:</strong> 24 mesi dalla richiesta, o per tutta la durata del rapporto contrattuale + 10 anni per obblighi fiscali</li>
                  <li><strong>Dati di marketing:</strong> fino alla revoca del consenso</li>
                  <li><strong>Dati di navigazione:</strong> 26 mesi (Google Analytics)</li>
                  <li><strong>Cookie di profilazione:</strong> secondo le durate specificate nella Cookie Policy</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Diritti dell'Interessato */}
            <AccordionItem value="diritti" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                8. Diritti dell'Interessato
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>In qualità di interessato, hai il diritto di:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Accesso:</strong> ottenere conferma dell'esistenza di dati che ti riguardano e riceverne copia</li>
                  <li><strong>Rettifica:</strong> correggere dati inesatti o incompleti</li>
                  <li><strong>Cancellazione:</strong> richiedere la cancellazione dei dati ("diritto all'oblio")</li>
                  <li><strong>Limitazione:</strong> limitare il trattamento in determinate circostanze</li>
                  <li><strong>Portabilità:</strong> ricevere i dati in formato strutturato e trasferirli ad altro titolare</li>
                  <li><strong>Opposizione:</strong> opporti al trattamento per motivi legittimi</li>
                  <li><strong>Revoca del consenso:</strong> revocare in qualsiasi momento i consensi prestati</li>
                </ul>
                <p className="mt-4">
                  Per esercitare i tuoi diritti, contattaci a: <a href="mailto:info@i-profili.it" className="text-primary hover:underline">info@i-profili.it</a>
                </p>
                <p className="mt-2">
                  Hai inoltre il diritto di proporre reclamo al <strong>Garante per la Protezione dei Dati Personali</strong> (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.garanteprivacy.it</a>).
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Sicurezza */}
            <AccordionItem value="sicurezza" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                9. Misure di Sicurezza
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>Adottiamo misure tecniche e organizzative adeguate per proteggere i dati personali:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Crittografia SSL/TLS per tutte le comunicazioni</li>
                  <li>Accesso ai dati limitato al personale autorizzato</li>
                  <li>Backup regolari e sistemi di disaster recovery</li>
                  <li>Monitoraggio continuo delle vulnerabilità</li>
                  <li>Formazione del personale sulla protezione dei dati</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Cookie */}
            <AccordionItem value="cookie" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                10. Cookie e Tecnologie di Tracciamento
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>Questo sito utilizza cookie e tecnologie simili. Per informazioni dettagliate, consulta la nostra <a href="/cookie-policy" className="text-primary hover:underline font-medium">Cookie Policy</a>.</p>
              </AccordionContent>
            </AccordionItem>

            {/* Modifiche */}
            <AccordionItem value="modifiche" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                11. Modifiche alla Privacy Policy
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>Ci riserviamo il diritto di modificare questa informativa in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento.</p>
                <p>Ti invitiamo a consultare periodicamente questa pagina per rimanere aggiornato.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-12 p-6 bg-muted/50 rounded-lg">
            <h3 className="font-semibold text-foreground mb-2">Contatti</h3>
            <p className="text-muted-foreground">
              Per qualsiasi domanda riguardante questa Privacy Policy, contattaci a:{" "}
              <a href="mailto:info@i-profili.it" className="text-primary hover:underline">info@i-profili.it</a>
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
