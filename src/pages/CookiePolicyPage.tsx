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
        canonical="https://www.i-profili.it/cookie-policy"
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

            {/* Banner e Consenso */}
            <AccordionItem value="consenso" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                2. Banner di Consenso e Gestione Preferenze
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>
                  In conformità alle Linee Guida del Garante Privacy italiano (giugno 2021) e al Regolamento ePrivacy, al primo accesso al sito viene mostrato un <strong>banner informativo</strong> che permette di:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Accettare tutti i cookie</strong>: abilita tutti i cookie, inclusi quelli di profilazione</li>
                  <li><strong>Rifiutare i cookie non necessari</strong>: vengono installati solo i cookie tecnici essenziali</li>
                  <li><strong>Personalizzare le preferenze</strong>: scegliere categorie specifiche di cookie</li>
                </ul>

                <div className="bg-muted/50 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold text-foreground">Modifica delle preferenze</h4>
                  <p className="text-sm mt-1">
                    Le preferenze possono essere modificate in qualsiasi momento cliccando sul link "Gestisci Cookie" presente nel footer del sito, oppure eliminando i cookie dal browser.
                  </p>
                </div>

                <p className="mt-4 text-sm">
                  <strong>Principio del consenso preventivo:</strong> I cookie di profilazione e marketing vengono installati solo dopo aver ottenuto il consenso esplicito dell'utente. I cookie tecnici necessari al funzionamento del sito non richiedono consenso.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Tipologie di Cookie */}
            <AccordionItem value="tipologie" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                3. Tipologie di Cookie Utilizzati
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-6">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground">Cookie di Prima Parte</h4>
                  <p className="text-sm mt-1">Installati direttamente dal sito www.i-profili.it. Includono cookie tecnici e di sessione per il funzionamento del sito.</p>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground">Cookie di Terza Parte</h4>
                  <p className="text-sm mt-1">Installati da domini diversi (Google, Meta, TikTok, GoHighLevel). Utilizzati per analytics e pubblicità.</p>
                </div>

                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b bg-muted/30">
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Categoria</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Consenso</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Descrizione</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium text-foreground">Tecnici (necessari)</td>
                        <td className="py-3 px-4">Non richiesto</td>
                        <td className="py-3 px-4">Essenziali per navigazione, sicurezza, preferenze</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium text-foreground">Analytics (statistici)</td>
                        <td className="py-3 px-4">Dipende*</td>
                        <td className="py-3 px-4">Raccolta dati aggregati sull'utilizzo del sito</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium text-foreground">Marketing/Profilazione</td>
                        <td className="py-3 px-4">Richiesto</td>
                        <td className="py-3 px-4">Remarketing, pubblicità personalizzata, audience</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-sm">
                  *Vedi sezione Google Analytics 4 per dettagli sull'anonimizzazione IP.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Google Analytics */}
            <AccordionItem value="google-analytics" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                4. Google Analytics 4 (con Anonimizzazione IP)
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>Utilizziamo Google Analytics 4 per analizzare l'utilizzo del sito web.</p>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground">Anonimizzazione IP attiva</h4>
                  <p className="text-sm mt-1">
                    GA4 è configurato con l'anonimizzazione dell'indirizzo IP. Secondo le indicazioni del Garante Privacy italiano, con questa configurazione e le misure supplementari adottate (es. disabilitazione della condivisione dati con altri prodotti Google), il trattamento può configurarsi come statistico aggregato.
                  </p>
                  <p className="text-sm mt-2">
                    <strong>Nota:</strong> Applichiamo comunque il principio di precauzione richiedendo il consenso per la categoria "Analytics".
                  </p>
                </div>
                
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 pr-4 font-semibold text-foreground">Cookie</th>
                        <th className="text-left py-2 pr-4 font-semibold text-foreground">Tipo</th>
                        <th className="text-left py-2 pr-4 font-semibold text-foreground">Durata</th>
                        <th className="text-left py-2 font-semibold text-foreground">Descrizione</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono text-xs">_ga</td>
                        <td className="py-2 pr-4">3ª parte</td>
                        <td className="py-2 pr-4">2 anni</td>
                        <td className="py-2">Distingue gli utenti</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono text-xs">_ga_*</td>
                        <td className="py-2 pr-4">3ª parte</td>
                        <td className="py-2 pr-4">2 anni</td>
                        <td className="py-2">Mantiene lo stato della sessione</td>
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
                5. Google Ads e Conversion API
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>Utilizziamo Google Ads per campagne pubblicitarie, remarketing e tracciamento conversioni.</p>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground">Tracciamento Server-Side (Enhanced Conversions)</h4>
                  <p className="text-sm mt-1">
                    Oltre al tracciamento client-side (cookie), utilizziamo Enhanced Conversions, che invia dati di conversione hashati direttamente ai server di Google per migliorare l'attribuzione delle conversioni.
                  </p>
                  <p className="text-sm mt-2">
                    I dati trasmessi (email, telefono) sono sottoposti a hashing SHA-256 prima dell'invio.
                  </p>
                </div>
                
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 pr-4 font-semibold text-foreground">Cookie</th>
                        <th className="text-left py-2 pr-4 font-semibold text-foreground">Tipo</th>
                        <th className="text-left py-2 pr-4 font-semibold text-foreground">Durata</th>
                        <th className="text-left py-2 font-semibold text-foreground">Descrizione</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono text-xs">_gcl_au</td>
                        <td className="py-2 pr-4">1ª parte</td>
                        <td className="py-2 pr-4">90 giorni</td>
                        <td className="py-2">Traccia le conversioni</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono text-xs">_gcl_aw</td>
                        <td className="py-2 pr-4">1ª parte</td>
                        <td className="py-2 pr-4">90 giorni</td>
                        <td className="py-2">Collega clic su annunci a conversioni</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono text-xs">IDE</td>
                        <td className="py-2 pr-4">3ª parte</td>
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
                6. Meta Pixel e Conversion API (CAPI)
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>Utilizziamo Meta Pixel per tracciare le conversioni e creare audience per campagne pubblicitarie su Facebook e Instagram.</p>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground">Meta Conversion API (CAPI) - Tracciamento Server-Side</h4>
                  <p className="text-sm mt-1">
                    In aggiunta al Pixel client-side, utilizziamo Meta Conversion API (CAPI), che invia eventi di conversione direttamente dai nostri server a Meta. Questo bypassa le limitazioni dei browser (ITP, blocco cookie di terze parti) e migliora l'accuratezza del tracciamento.
                  </p>
                  <p className="text-sm mt-2">
                    <strong>Dati trasmessi via CAPI:</strong> eventi di conversione (PageView, Lead, Purchase), dati hashati (email, telefono, nome), informazioni tecniche (IP, user agent).
                  </p>
                </div>
                
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 pr-4 font-semibold text-foreground">Cookie</th>
                        <th className="text-left py-2 pr-4 font-semibold text-foreground">Tipo</th>
                        <th className="text-left py-2 pr-4 font-semibold text-foreground">Durata</th>
                        <th className="text-left py-2 font-semibold text-foreground">Descrizione</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono text-xs">_fbp</td>
                        <td className="py-2 pr-4">1ª parte</td>
                        <td className="py-2 pr-4">3 mesi</td>
                        <td className="py-2">Identifica i browser per la pubblicità</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono text-xs">_fbc</td>
                        <td className="py-2 pr-4">1ª parte</td>
                        <td className="py-2 pr-4">3 mesi</td>
                        <td className="py-2">Traccia i clic sugli annunci (fbclid)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono text-xs">fr</td>
                        <td className="py-2 pr-4">3ª parte</td>
                        <td className="py-2 pr-4">3 mesi</td>
                        <td className="py-2">Pubblicità e remarketing</td>
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
                7. TikTok Ads
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>Utilizziamo TikTok Pixel per campagne pubblicitarie e remarketing su TikTok.</p>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 pr-4 font-semibold text-foreground">Cookie</th>
                        <th className="text-left py-2 pr-4 font-semibold text-foreground">Tipo</th>
                        <th className="text-left py-2 pr-4 font-semibold text-foreground">Durata</th>
                        <th className="text-left py-2 font-semibold text-foreground">Descrizione</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono text-xs">_ttp</td>
                        <td className="py-2 pr-4">1ª parte</td>
                        <td className="py-2 pr-4">13 mesi</td>
                        <td className="py-2">Traccia le attività sul sito</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono text-xs">tt_*</td>
                        <td className="py-2 pr-4">3ª parte</td>
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
                8. Lead Connector (GoHighLevel)
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>Utilizziamo Lead Connector (GoHighLevel) per la gestione dei form di contatto, chat dal vivo e comunicazione con i potenziali clienti.</p>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 pr-4 font-semibold text-foreground">Cookie</th>
                        <th className="text-left py-2 pr-4 font-semibold text-foreground">Tipo</th>
                        <th className="text-left py-2 pr-4 font-semibold text-foreground">Durata</th>
                        <th className="text-left py-2 font-semibold text-foreground">Descrizione</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono text-xs">lc_*</td>
                        <td className="py-2 pr-4">1ª parte</td>
                        <td className="py-2 pr-4">Sessione</td>
                        <td className="py-2">Cookie di sessione per i form</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono text-xs">ghl_*</td>
                        <td className="py-2 pr-4">3ª parte</td>
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
                9. Come Gestire i Cookie
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>Puoi gestire le tue preferenze sui cookie in diversi modi:</p>

                <h4 className="font-semibold text-foreground mt-4">1. Banner Cookie del Sito</h4>
                <p>Modifica le preferenze cliccando su "Gestisci Cookie" nel footer o rivisitando il sito dopo aver cancellato i cookie.</p>

                <h4 className="font-semibold text-foreground mt-4">2. Impostazioni del Browser</h4>
                <p>La maggior parte dei browser consente di gestire i cookie attraverso le impostazioni:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
                  <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
                </ul>

                <h4 className="font-semibold text-foreground mt-4">3. Strumenti di Opt-out per Pubblicità</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Digital Advertising Alliance (DAA)</a></li>
                  <li><a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Your Online Choices (Europa)</a></li>
                  <li><a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Network Advertising Initiative</a></li>
                </ul>

                <div className="bg-muted/50 p-4 rounded-lg mt-4">
                  <p className="text-sm">
                    <strong>Nota:</strong> Disabilitando alcuni cookie, alcune funzionalità del sito potrebbero non essere disponibili o funzionare correttamente. La disabilitazione dei cookie non blocca il tracciamento server-side (Conversion API).
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Aggiornamenti */}
            <AccordionItem value="aggiornamenti" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                10. Aggiornamenti della Cookie Policy
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>
                  La presente Cookie Policy può essere aggiornata periodicamente per riflettere modifiche nelle tecnologie di tracciamento utilizzate o nella normativa applicabile.
                </p>
                <p>
                  Ti invitiamo a consultare regolarmente questa pagina. La data di ultimo aggiornamento è indicata in alto.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Contatti */}
            <AccordionItem value="contatti" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold">
                11. Contatti
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>Per qualsiasi domanda sulla presente Cookie Policy:</p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold text-foreground">Domus Group S.r.l.</p>
                  <p>Via Aurelio Saffi 29, Milano</p>
                  <p>Email: <a href="mailto:privacy@i-profili.it" className="text-primary hover:underline">privacy@i-profili.it</a></p>
                  <p>PEC: <a href="mailto:domusgroupsrl@legalmail.it" className="text-primary hover:underline">domusgroupsrl@legalmail.it</a></p>
                </div>
                <p className="mt-4">
                  Per informazioni sul trattamento dei dati personali, consulta la nostra <a href="/privacy-policy" className="text-primary hover:underline font-medium">Privacy Policy</a>.
                </p>
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

export default CookiePolicyPage;
