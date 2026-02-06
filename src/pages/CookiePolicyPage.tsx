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

const CookiePolicyPage = () => {
  const breadcrumbItems = [{ label: "Cookie Policy" }];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Cookie Policy | I Profili - Informativa sui Cookie"
        description="Cookie Policy di I Profili - Domus Group S.r.l. Scopri quali cookie utilizziamo e come gestire le tue preferenze."
        canonical="https://iprofili.it/cookie-policy"
      />
      <HomeHeader />

      <main className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SEOBreadcrumb items={breadcrumbItems} />

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Cookie Policy
          </h1>
          <p className="text-muted-foreground mb-8">
            Ultimo aggiornamento: Febbraio 2026
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            {/* Cosa sono i Cookie */}
            <AccordionItem value="cosa-sono" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                1. Cosa sono i Cookie
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>
                  I cookie sono piccoli file di testo che i siti web visitati inviano al browser dell'utente, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva.
                </p>
                <p>
                  I cookie possono essere "di sessione" (temporanei, eliminati alla chiusura del browser) o "persistenti" (rimangono sul dispositivo per un periodo determinato o fino alla cancellazione manuale).
                </p>
                <p>
                  Oltre ai cookie, questo sito può utilizzare altre tecnologie di tracciamento simili come pixel tag, web beacon e local storage.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Tipologie di Cookie */}
            <AccordionItem value="tipologie" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                2. Tipologie di Cookie Utilizzati
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground">Cookie Tecnici (Necessari)</h4>
                  <p className="mt-1">Essenziali per il funzionamento del sito. Non richiedono consenso.</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Cookie di sessione per la navigazione</li>
                    <li>Cookie per le preferenze di lingua</li>
                    <li>Cookie per la sicurezza</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground">Cookie Analytics</h4>
                  <p className="mt-1">Raccolgono informazioni aggregate sull'utilizzo del sito per finalità statistiche.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground">Cookie di Marketing/Profilazione</h4>
                  <p className="mt-1">Utilizzati per tracciare i visitatori e mostrare annunci personalizzati.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Google Analytics */}
            <AccordionItem value="google-analytics" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                3. Google Analytics
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>Utilizziamo Google Analytics per analizzare l'utilizzo del sito web.</p>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 pr-4 font-semibold text-foreground">Cookie</th>
                        <th className="text-left py-2 pr-4 font-semibold text-foreground">Durata</th>
                        <th className="text-left py-2 font-semibold text-foreground">Descrizione</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono text-xs">_ga</td>
                        <td className="py-2 pr-4">2 anni</td>
                        <td className="py-2">Distingue gli utenti</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono text-xs">_gid</td>
                        <td className="py-2 pr-4">24 ore</td>
                        <td className="py-2">Distingue gli utenti</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono text-xs">_gat</td>
                        <td className="py-2 pr-4">1 minuto</td>
                        <td className="py-2">Limita la frequenza delle richieste</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-4">
                  <strong>Opt-out:</strong>{" "}
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Installa il componente aggiuntivo del browser
                  </a>
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Google Ads */}
            <AccordionItem value="google-ads" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                4. Google Ads
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>Utilizziamo Google Ads per campagne pubblicitarie e remarketing.</p>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 pr-4 font-semibold text-foreground">Cookie</th>
                        <th className="text-left py-2 pr-4 font-semibold text-foreground">Durata</th>
                        <th className="text-left py-2 font-semibold text-foreground">Descrizione</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono text-xs">_gcl_au</td>
                        <td className="py-2 pr-4">90 giorni</td>
                        <td className="py-2">Traccia le conversioni</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono text-xs">_gac_*</td>
                        <td className="py-2 pr-4">90 giorni</td>
                        <td className="py-2">Informazioni sulla campagna</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono text-xs">IDE</td>
                        <td className="py-2 pr-4">13 mesi</td>
                        <td className="py-2">Pubblicità DoubleClick</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-4">
                  <strong>Opt-out:</strong>{" "}
                  <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Gestisci le impostazioni annunci Google
                  </a>
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Meta Pixel */}
            <AccordionItem value="meta-pixel" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                5. Meta Pixel (Facebook Ads)
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>Utilizziamo Meta Pixel per tracciare le conversioni e creare audience per campagne pubblicitarie su Facebook e Instagram.</p>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 pr-4 font-semibold text-foreground">Cookie</th>
                        <th className="text-left py-2 pr-4 font-semibold text-foreground">Durata</th>
                        <th className="text-left py-2 font-semibold text-foreground">Descrizione</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono text-xs">_fbp</td>
                        <td className="py-2 pr-4">3 mesi</td>
                        <td className="py-2">Identifica i browser per la pubblicità</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono text-xs">fr</td>
                        <td className="py-2 pr-4">3 mesi</td>
                        <td className="py-2">Pubblicità e remarketing</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono text-xs">_fbc</td>
                        <td className="py-2 pr-4">3 mesi</td>
                        <td className="py-2">Traccia i clic sugli annunci</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-4">
                  <strong>Opt-out:</strong>{" "}
                  <a href="https://www.facebook.com/settings?tab=ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Gestisci le preferenze pubblicitarie Facebook
                  </a>
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* TikTok Ads */}
            <AccordionItem value="tiktok" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                6. TikTok Ads
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>Utilizziamo TikTok Pixel per campagne pubblicitarie e remarketing su TikTok.</p>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 pr-4 font-semibold text-foreground">Cookie</th>
                        <th className="text-left py-2 pr-4 font-semibold text-foreground">Durata</th>
                        <th className="text-left py-2 font-semibold text-foreground">Descrizione</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono text-xs">_ttp</td>
                        <td className="py-2 pr-4">13 mesi</td>
                        <td className="py-2">Traccia le attività sul sito</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono text-xs">tt_*</td>
                        <td className="py-2 pr-4">Varia</td>
                        <td className="py-2">Cookie di sessione e tracciamento</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-4">
                  <strong>Opt-out:</strong>{" "}
                  <a href="https://www.tiktok.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Gestisci le impostazioni privacy TikTok
                  </a>
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Lead Connector */}
            <AccordionItem value="lead-connector" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                7. Lead Connector (GoHighLevel)
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>Utilizziamo Lead Connector (GoHighLevel) per la gestione dei form di contatto e la comunicazione con i potenziali clienti.</p>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 pr-4 font-semibold text-foreground">Cookie</th>
                        <th className="text-left py-2 pr-4 font-semibold text-foreground">Durata</th>
                        <th className="text-left py-2 font-semibold text-foreground">Descrizione</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono text-xs">lc_*</td>
                        <td className="py-2 pr-4">Sessione</td>
                        <td className="py-2">Cookie di sessione per i form</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono text-xs">ghl_*</td>
                        <td className="py-2 pr-4">30 giorni</td>
                        <td className="py-2">Tracciamento lead e conversioni</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-4">
                  <strong>Privacy Policy:</strong>{" "}
                  <a href="https://www.gohighlevel.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    gohighlevel.com/privacy-policy
                  </a>
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Come Gestire i Cookie */}
            <AccordionItem value="gestione" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                8. Come Gestire i Cookie
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>Puoi gestire le tue preferenze sui cookie in diversi modi:</p>

                <h4 className="font-semibold text-foreground mt-4">Impostazioni del Browser</h4>
                <p>La maggior parte dei browser consente di gestire i cookie attraverso le impostazioni. Ecco i link alle guide dei principali browser:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
                  <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
                </ul>

                <h4 className="font-semibold text-foreground mt-4">Strumenti di Opt-out Specifici</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Digital Advertising Alliance (DAA)</a></li>
                  <li><a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Your Online Choices (Europa)</a></li>
                  <li><a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Network Advertising Initiative</a></li>
                </ul>

                <div className="bg-muted/50 p-4 rounded-lg mt-4">
                  <p className="text-sm">
                    <strong>Nota:</strong> Disabilitando alcuni cookie, alcune funzionalità del sito potrebbero non essere disponibili o funzionare correttamente.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Aggiornamenti */}
            <AccordionItem value="aggiornamenti" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                9. Aggiornamenti della Cookie Policy
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>Questa Cookie Policy può essere aggiornata periodicamente. Ti invitiamo a consultare regolarmente questa pagina per rimanere informato sulle nostre pratiche relative ai cookie.</p>
                <p>La data dell'ultimo aggiornamento è indicata in alto alla pagina.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-12 p-6 bg-muted/50 rounded-lg">
            <h3 className="font-semibold text-foreground mb-2">Contatti</h3>
            <p className="text-muted-foreground">
              Per qualsiasi domanda riguardante questa Cookie Policy, contattaci a:{" "}
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

export default CookiePolicyPage;
