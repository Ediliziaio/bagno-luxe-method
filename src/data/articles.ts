// Image imports for articles
import homeWindows from '@/assets/home-windows.jpg';
import heroWindow from '@/assets/hero-window.jpg';
import guaranteeContract from '@/assets/guarantee-contract.jpg';
import domusProfile from '@/assets/domus-profile-section.jpg';
import windowAfter1 from '@/assets/window-after-1.jpg';
import windowDetail from '@/assets/window-detail.jpg';
import heroWindowSlider from '@/assets/hero-window-slider.jpg';
import certifiedInstaller from '@/assets/certified-installer.jpg';
import familyComfort from '@/assets/family-comfort.jpg';
import casaGreen from '@/assets/casa-green-directive.jpg';
import windowBefore1 from '@/assets/window-before-1.jpg';
import windowAfter2 from '@/assets/window-after-2.jpg';

export interface Article {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  content: string;
  date: string;
  dateISO: string;
  category: string;
  tags: string[];
  image: string;
  imageAlt: string;
  author: {
    name: string;
    role: string;
  };
  readingTime: string;
  relatedArticles: string[];
}

import { techArticles } from './articles-tech';
import { practicalArticles } from './articles-practical';
import { fiscalArticles } from './articles-fiscal';
import { productArticles } from './articles-products';

const originalArticles: Article[] = [
  // ============================================
  // ARTICOLO 1: INFISSI MILANO
  // ============================================
  {
    id: "infissi-milano",
    slug: "infissi-milano-guida-completa-2026",
    title: "Infissi a Milano: Guida Completa alla Sostituzione nel 2026",
    metaTitle: "Infissi Milano 2026: Prezzi, Bonus e Installatori | Guida",
    metaDescription: "Tutto sugli infissi a Milano: prezzi medi, bonus 50%, installatori certificati. Guida completa con tempistiche e consigli pratici per milanesi.",
    excerpt: "Sostituire gli infissi a Milano non è come farlo altrove. Tra normative condominiali, traffico e costi metropolitani, ecco tutto quello che devi sapere.",
    date: "3 Febbraio 2026",
    dateISO: "2026-02-03",
    category: "Guide",
    tags: ["infissi Milano", "serramenti Milano", "finestre Milano", "bonus 50% Milano"],
    image: homeWindows,
    imageAlt: "Infissi moderni in un appartamento a Milano",
    author: {
      name: "Marco Bianchi",
      role: "Consulente Tecnico",
    },
    readingTime: "10 min",
    relatedArticles: ["serramenti-lombardia", "preventivo-infissi", "bonus-50-2025"],
    content: `
      <p><strong>Sostituire gli infissi a Milano non è come farlo altrove.</strong></p>

      <p>Tra normative condominiali che sembrano progettate per complicarti la vita, traffico che rende ogni trasporto un'odissea, e costi "metropolitani" che lievitano senza motivo apparente, rischi di spendere molto più del necessario — o peggio, di ritrovarti con un lavoro che non risolve i tuoi problemi.</p>

      <p>In questa guida ti svelo esattamente cosa aspettarti, quanto costa davvero sostituire gli infissi a Milano nel 2026, e come evitare le trappole più comuni.</p>

      <h2 id="perche-milano">Perché Milano ha esigenze specifiche per gli infissi</h2>

      <p>Se abiti a Milano, probabilmente conosci bene questa situazione: <strong>inverni umidi e freddi</strong> che ti costringono a tenere i termosifoni al massimo, <strong>estati afose</strong> dove l'aria condizionata non smette mai di girare, e un <strong>rumore di fondo costante</strong> che ti impedisce di rilassarti anche a finestre chiuse.</p>

      <p>Il clima milanese è classificato come <strong>zona climatica E</strong>, con inverni lunghi (oltre 2.400 gradi-giorno) e temperature che oscillano tra i -5°C e i 35°C. Questo significa che i tuoi infissi devono lavorare duramente tutto l'anno.</p>

      <p>Ma c'è un problema ancora più sottovalutato: <strong>l'inquinamento acustico</strong>. Secondo i dati ARPA, il 70% delle abitazioni milanesi supera i limiti di rumore consigliati. Se i tuoi vecchi infissi non abbattono almeno 40 dB, stai vivendo in una casa molto più rumorosa del necessario.</p>

      <h2 id="normative-condominio">La giungla delle normative condominiali</h2>

      <p>Ecco il primo ostacolo che nessuno ti dice: in un condominio milanese, <strong>non puoi semplicemente scegliere gli infissi che vuoi</strong>.</p>

      <p>Nella maggior parte dei casi ti troverai a dover rispettare:</p>

      <ul>
        <li><strong>Colore esterno obbligato:</strong> il regolamento condominiale impone lo stesso colore per tutti</li>
        <li><strong>Approvazione assembleare:</strong> spesso serve il via libera dell'assemblea per modifiche estetiche</li>
        <li><strong>Vincoli della Soprintendenza:</strong> nel centro storico (Zona 1) e in molte aree tutelate servono permessi specifici che allungano i tempi di mesi</li>
      </ul>

      <p>La buona notizia? <strong>Noi ci occupiamo di tutto questo per te.</strong> Il nostro team verifica preventivamente tutti i vincoli e prepara la documentazione necessaria, evitandoti brutte sorprese a lavori già iniziati.</p>

      <h2 id="quartieri">Cosa serve davvero nel TUO quartiere</h2>

      <h3>Centro storico, Brera, Magenta</h3>

      <p>Zone con <strong>vincoli architettonici stringenti</strong>. I nuovi infissi devono riprodurre fedelmente l'estetica originale. Qui consigliamo PVC effetto legno o legno-alluminio per rispettare il contesto senza rinunciare alle prestazioni.</p>

      <h3>Navigli, Porta Romana, Isola</h3>

      <p>Palazzi d'epoca con <strong>finestre ad arco, forme irregolari, misure non standard</strong>. Molti installatori si rifiutano o chiedono supplementi esagerati. Noi produciamo su misura qualsiasi forma, anche le più complesse.</p>

      <h3>CityLife, Porta Nuova, Rogoredo</h3>

      <p>Architettura contemporanea che richiede <strong>grandi vetrate e design minimale</strong>. Il nostro sistema Lumier con profili ultra-sottili è perfetto per questi contesti.</p>

      <h3>Bovisa, Bicocca, Lambrate, zone periferiche</h3>

      <p>Priorità al <strong>rapporto qualità-prezzo</strong>. Il sistema Domus offre prestazioni top a costi accessibili — la scelta ideale per famiglie.</p>

      <h2 id="prezzi-milano">Prezzi reali degli infissi a Milano nel 2026</h2>

      <p>Parliamoci chiaro: a Milano i prezzi sono <strong>più alti del 10-15%</strong> rispetto alla provincia. Perché? Costi logistici (ZTL, parcheggi, trasporti), maggiori complessità condominiali, e una domanda più alta.</p>

      <table>
        <tr><th>Tipologia</th><th>Prezzo medio al mq (installato)</th></tr>
        <tr><td>PVC standard 5 camere</td><td>280-350€</td></tr>
        <tr><td>PVC premium 6 camere (Domus)</td><td>400-550€</td></tr>
        <tr><td>Alluminio a taglio termico</td><td>450-650€</td></tr>
        <tr><td>Legno-alluminio</td><td>600-900€</td></tr>
      </table>

      <p><em>Prezzi indicativi per finestre standard 120x140 cm. I costi finali dipendono da dimensioni, tipologia di apertura e accessori scelti.</em></p>

      <h2 id="tempistiche">Quanto tempo ci vuole realmente?</h2>

      <p>Per un appartamento medio (5-7 finestre), ecco le tempistiche reali:</p>

      <ul>
        <li><strong>Sopralluogo e preventivo:</strong> 3-5 giorni lavorativi</li>
        <li><strong>Produzione:</strong> 4-6 settimane dalla conferma</li>
        <li><strong>Installazione:</strong> 1-2 giorni</li>
        <li><strong>Totale dalla firma:</strong> 5-7 settimane</li>
      </ul>

      <p>⚠️ <strong>Attenzione:</strong> in periodi di alta richiesta (marzo-maggio, settembre-novembre) i tempi si allungano. Se vuoi completare i lavori prima dell'inverno, devi muoverti ORA.</p>

      <h2 id="case-study">Caso reale: Mario, 45 anni, Navigli</h2>

      <p><strong>Situazione di partenza:</strong></p>

      <ul>
        <li>Appartamento 85mq con 6 finestre ad arco</li>
        <li>Infissi in legno anni '70, pieni di spifferi</li>
        <li>Condensa ogni mattina, macchie di muffa sugli stipiti</li>
        <li>Bolletta gas: 280€/mese in inverno</li>
        <li>Rumore costante dal traffico di Corso di Porta Ticinese</li>
      </ul>

      <p><strong>Cosa abbiamo fatto:</strong></p>

      <p>Sistema Domus con vetro triplo, cassonetti coibentati nuovi, persiane in alluminio effetto legno per rispettare l'estetica del palazzo.</p>

      <p><strong>Risultato dopo 6 mesi:</strong></p>

      <ul>
        <li>Bolletta gas: 170€/mese <strong>(-40%)</strong></li>
        <li>Zero condensa, muffa eliminata</li>
        <li>Rumore traffico abbattuto del 70%</li>
        <li>Investimento che si ripaga in 6 anni con il bonus 50%</li>
      </ul>

      <p><em>"Non pensavo che la differenza fosse così drammatica. Avrei dovuto farlo 5 anni prima."</em></p>

      <h2 id="conclusioni">Perché oltre 500 famiglie milanesi hanno scelto noi</h2>

      <p>Siamo specializzati in installazioni a Milano da oltre 15 anni. Conosciamo ogni quartiere, ogni normativa, ogni problematica logistica.</p>

      <p>Con il nostro <strong>Sistema Zero Pensieri</strong> ottieni:</p>

      <ul>
        <li>Sopralluogo gratuito entro 3 giorni</li>
        <li>Gestione pratiche condominiali inclusa</li>
        <li>Pratica ENEA per il bonus 50% gratuita</li>
        <li>Garanzia 10 anni su prodotto e posa</li>
        <li>Penali contrattuali se ritardiamo</li>
      </ul>

      <p><strong><a href="/contatti">→ Richiedi un sopralluogo gratuito a Milano</a></strong></p>

      <p>Scopri perché il 94% dei nostri clienti ci consiglierebbe a un amico.</p>
    `,
  },

  // ============================================
  // ARTICOLO 2: SERRAMENTI LOMBARDIA
  // ============================================
  {
    id: "serramenti-lombardia",
    slug: "serramenti-lombardia-come-scegliere-2026",
    title: "I Migliori Serramenti in Lombardia: Come Scegliere nel 2026",
    metaTitle: "Serramenti Lombardia 2026: Guida alla Scelta | I Profili",
    metaDescription: "Guida ai serramenti in Lombardia. Confronto materiali, zone climatiche E ed F, e consigli per scegliere l'installatore giusto nella tua provincia.",
    excerpt: "Il tuo vicino ha messo infissi nuovi e risparmia 400€ l'anno. Tu hai fatto lo stesso lavoro, ma le bollette sono uguali. Perché?",
    date: "1 Febbraio 2026",
    dateISO: "2026-02-01",
    category: "Guide",
    tags: ["serramenti Lombardia", "infissi Lombardia", "zone climatiche", "installatori certificati"],
    image: heroWindow,
    imageAlt: "Mappa della Lombardia con zone climatiche per serramenti",
    author: {
      name: "Marco Bianchi",
      role: "Consulente Tecnico",
    },
    readingTime: "9 min",
    relatedArticles: ["infissi-milano", "preventivo-infissi", "come-scegliere-infissi"],
    content: `
      <p><strong>Il tuo vicino di casa ha messo infissi nuovi e dice di risparmiare 400€ l'anno.</strong></p>

      <p>Tu hai fatto lo stesso lavoro, stesso tipo di finestre, stesso installatore. Ma le tue bollette? Praticamente uguali a prima.</p>

      <p>Com'è possibile?</p>

      <p>La risposta è più semplice di quanto pensi: probabilmente i tuoi infissi <strong>non sono adatti alla tua zona climatica</strong>. E nessuno te l'ha detto.</p>

      <p>La Lombardia non è tutta uguale. Tra un appartamento a Milano e una villetta a Livigno ci sono differenze enormi — e i tuoi serramenti devono riflettere queste differenze, altrimenti stai buttando soldi dalla finestra. Letteralmente.</p>

      <h2 id="zone-climatiche">Le zone climatiche in Lombardia: perché sono cruciali</h2>

      <p>La normativa italiana divide il territorio in <strong>zone climatiche da A a F</strong>, basate su quanti gradi-giorno ha la tua località (cioè quanta energia serve per riscaldarla).</p>

      <p>In Lombardia esistono due zone principali:</p>

      <h3>Zona E — La maggior parte della regione</h3>

      <p>Include: Milano, Brescia, Bergamo, Monza, Varese, Como, Pavia, Lodi, Cremona, Mantova e la maggior parte dei comuni.</p>

      <ul>
        <li><strong>Trasmittanza massima per legge (Uw):</strong> 1.4 W/m²K</li>
        <li><strong>Trasmittanza consigliata per risparmio reale:</strong> 1.0 W/m²K o inferiore</li>
        <li><strong>Vetro minimo:</strong> doppio vetro basso emissivo</li>
      </ul>

      <h3>Zona F — Aree montane</h3>

      <p>Include: Sondrio, Valtellina, zone prealpine sopra i 900m di altitudine.</p>

      <ul>
        <li><strong>Trasmittanza massima per legge (Uw):</strong> 1.0 W/m²K</li>
        <li><strong>Trasmittanza consigliata:</strong> 0.8 W/m²K</li>
        <li><strong>Vetro minimo:</strong> triplo vetro obbligatorio</li>
      </ul>

      <p>⚠️ <strong>L'errore più costoso:</strong> comprare infissi online o da un rivenditore che non conosce la tua zona climatica. Potresti ritrovarti con prodotti che non rispettano i requisiti minimi — e quindi niente bonus fiscali.</p>

      <h2 id="province">Cosa serve nella TUA provincia</h2>

      <h3>Milano e Monza-Brianza</h3>

      <p>Le zone più densamente popolate. Qui la priorità è l'<strong>isolamento acustico</strong> (traffico intenso in quasi ogni quartiere) oltre a quello termico. Mercato competitivo con molte opzioni — ma anche molti "improvvisati".</p>

      <h3>Bergamo e Brescia</h3>

      <p>Province industriali con buon potere d'acquisto. Forte richiesta di <strong>prodotti premium</strong> e soluzioni su misura per ville e case indipendenti. Zone montane (Val Seriana, Valle Camonica) richiedono specifiche da zona F.</p>

      <h3>Como e Varese</h3>

      <p>Molte ville storiche e case indipendenti sul lago. Alta richiesta di <strong>legno-alluminio</strong> e soluzioni esteticamente curate. Attenzione ai vincoli paesaggistici nelle zone lacustri.</p>

      <h3>Sondrio e Valtellina</h3>

      <p><strong>Prestazioni termiche estreme</strong> sono la priorità assoluta. Triplo vetro obbligatorio, profili con spessore aumentato, cassonetti super-isolati. Non risparmiare qui = spendere molto di più in riscaldamento per 25 anni.</p>

      <h2 id="errore-comune">L'errore che costa caro: comprare online senza verifiche</h2>

      <p>Ogni mese riceviamo chiamate disperate:</p>

      <blockquote>
        <p>"Ho comprato gli infissi su internet, sembravano ottimi. Ora l'installatore dice che non rispettano i valori per il bonus. Devo ricomprare tutto."</p>
      </blockquote>

      <p>Il problema? Molti infissi venduti online sono pensati per zone climatiche più miti (zona C o D). In Lombardia non bastano.</p>

      <p><strong>Prima di acquistare, verifica SEMPRE:</strong></p>

      <ul>
        <li>Il valore Uw (trasmittanza termica) del sistema completo</li>
        <li>Che sia certificato per la tua zona climatica</li>
        <li>Che l'installatore fornisca la documentazione per il bonus</li>
      </ul>

      <h2 id="certificazioni">5 certificazioni da richiedere sempre</h2>

      <p>Quando scegli un installatore in Lombardia, non fidarti solo delle parole. Verifica sempre:</p>

      <ol>
        <li><strong>Certificazione EN 14351:</strong> obbligatoria per la marcatura CE</li>
        <li><strong>Garanzia scritta:</strong> minimo 5 anni su prodotto E posa</li>
        <li><strong>Assicurazione RC:</strong> copertura per eventuali danni durante i lavori</li>
        <li><strong>Schede tecniche:</strong> con valori Uw certificati</li>
        <li><strong>Referenze verificabili:</strong> almeno 3 clienti che puoi contattare</li>
      </ol>

      <h2 id="criteri-scelta">Come scegliere l'installatore giusto: 5 criteri</h2>

      <ol>
        <li><strong>Esperienza locale:</strong> da quanti anni opera nella tua provincia? Conosce le normative specifiche?</li>
        <li><strong>Preventivo dettagliato:</strong> tutte le voci devono essere chiare e separate (prodotto, posa, smaltimento, pratiche)</li>
        <li><strong>Showroom visitabile:</strong> poter toccare i prodotti con mano è fondamentale</li>
        <li><strong>Recensioni online:</strong> controlla Google, Facebook, Trustpilot — ma cerca quelle dettagliate, non solo le stelle</li>
        <li><strong>Garanzie scritte nel contratto:</strong> diffida delle promesse solo verbali</li>
      </ol>

      <h2 id="conclusioni">Operiamo in tutta la Lombardia</h2>

      <p>I Profili copre <strong>tutte le 12 province lombarde</strong> con un network di installatori certificati e formati direttamente da noi.</p>

      <p>Che tu sia in centro a Milano o in un comune montano della Valtellina, garantiamo:</p>

      <ul>
        <li>Stesso livello di qualità e assistenza</li>
        <li>Prodotti certificati per la tua zona climatica</li>
        <li>Preventivo trasparente senza sorprese</li>
        <li>Garanzia 10 anni su tutto</li>
      </ul>

      <p><strong><a href="/contatti">→ Richiedi un sopralluogo gratuito nella tua zona</a></strong></p>
    `,
  },

  // ============================================
  // ARTICOLO 3: PREVENTIVO INFISSI
  // ============================================
  {
    id: "preventivo-infissi",
    slug: "preventivo-infissi-cosa-controllare",
    title: "Preventivo Infissi: 10 Voci da Controllare Prima di Firmare",
    metaTitle: "Preventivo Infissi: 10 Voci Essenziali da Controllare",
    metaDescription: "Come leggere un preventivo infissi senza sorprese. Le 10 voci essenziali, i costi nascosti e cosa pretendere dall'installatore.",
    excerpt: "Hai ricevuto 3 preventivi e non capisci perché uno costa 4.000€ e l'altro 8.000€? Non sei tu a non capire — sono molti preventivi a essere volutamente confusi.",
    date: "28 Gennaio 2026",
    dateISO: "2026-01-28",
    category: "Guide",
    tags: ["preventivo infissi", "costi infissi", "confronto preventivi", "guida acquisto"],
    image: guaranteeContract,
    imageAlt: "Preventivo dettagliato per infissi con voci evidenziate",
    author: {
      name: "Laura Colombo",
      role: "Consulente Fiscale",
    },
    readingTime: "8 min",
    relatedArticles: ["infissi-milano", "prezzi-pvc", "costi-sostituzione"],
    content: `
      <p><strong>Hai ricevuto 3 preventivi e non capisci perché uno costa 4.000€ e l'altro 8.000€ per lo stesso lavoro?</strong></p>

      <p>Non sei tu a non capire. Sono molti preventivi a essere <strong>volutamente confusi</strong>.</p>

      <p>Ecco la verità scomoda: alcuni installatori usano preventivi vaghi per nascondere costi extra che emergeranno solo a lavori iniziati. A quel punto, sei in trappola.</p>

      <p>In questa guida ti mostro le <strong>10 voci che DEVONO essere presenti</strong> in un preventivo serio — e come riconoscere i segnali d'allarme.</p>

      <h2 id="voce-1">1. Descrizione precisa dei prodotti</h2>

      <p>Ogni infisso deve indicare:</p>

      <ul>
        <li><strong>Marca e modello</strong> del profilo (es. "Domus 76mm 6 camere")</li>
        <li><strong>Tipo di vetro</strong> con valori specifici (doppio, triplo, Ug 1.1, ecc.)</li>
        <li><strong>Colore</strong> interno ed esterno</li>
        <li><strong>Tipologia apertura</strong> (battente, anta-ribalta, scorrevole)</li>
      </ul>

      <p>🚩 <strong>Red flag:</strong> descrizioni generiche come "infisso in PVC bianco" o "vetro standard". Significano: "ti metterò quello che costa meno a me".</p>

      <h2 id="voce-2">2. Misure precise di ogni singolo infisso</h2>

      <p>Ogni finestra deve avere le sue misure esatte (larghezza x altezza in mm). Non solo il conteggio totale.</p>

      <p>🚩 <strong>Red flag:</strong> preventivi "a corpo" che indicano solo il numero di finestre senza dimensioni. Potresti ritrovarti con maggiorazioni assurde se una finestra è 10cm più grande del previsto.</p>

      <h2 id="voce-3">3. Costo di installazione separato e dettagliato</h2>

      <p>La posa deve essere una voce a parte e deve specificare:</p>

      <ul>
        <li>Tipologia di posa (a filo muro, in battuta, con controtelaio)</li>
        <li>Materiali di sigillatura (quali schiume, siliconi, nastri)</li>
        <li>Ore di lavoro previste</li>
      </ul>

      <p>🚩 <strong>Red flag:</strong> "posa inclusa" senza alcun dettaglio. Spesso significa posa approssimativa che vanifica le prestazioni dell'infisso.</p>

      <h2 id="voce-4">4. Rimozione e smaltimento vecchi infissi</h2>

      <p>Lo smaltimento costa tipicamente <strong>20-40€ per infisso</strong>. Se non è indicato, ti verrà addebitato a sorpresa.</p>

      <p>🚩 <strong>Red flag:</strong> nessuna menzione dello smaltimento = costo che spunterà dopo.</p>

      <h2 id="voce-5">5. Cassonetti e controtelai</h2>

      <p>I vecchi cassonetti sono spesso il punto debole dell'isolamento — un "buco" termico che vanifica i nuovi infissi.</p>

      <p>Il preventivo deve indicare chiaramente:</p>

      <ul>
        <li>Se i cassonetti sono inclusi o esclusi</li>
        <li>Tipologia (coibentato, ispezionabile)</li>
        <li>Eventuali adattamenti murari necessari</li>
      </ul>

      <p>🚩 <strong>Red flag:</strong> cassonetti non menzionati. Preparati a una "scoperta" da 1.000-2.000€ durante i lavori.</p>

      <h2 id="voce-6">6. Accessori: maniglie, soglie, coprifili</h2>

      <p>Sembrano dettagli, ma possono aggiungere <strong>centinaia di euro</strong> al totale.</p>

      <ul>
        <li>Maniglie: sono incluse? Quali modelli?</li>
        <li>Soglie: in alluminio, in marmo, in PVC?</li>
        <li>Coprifili: inclusi o extra?</li>
      </ul>

      <h2 id="voce-7">7. Opere murarie e ripristini</h2>

      <p><strong>La voce più subdola.</strong> Il preventivo deve indicare:</p>

      <ul>
        <li>Cosa è incluso (stuccatura base? tinteggiatura?)</li>
        <li>Cosa è escluso e a quale costo aggiuntivo</li>
        <li>Chi si occupa della pulizia finale</li>
      </ul>

      <p>🚩 <strong>Red flag:</strong> "eventuali opere murarie escluse". Traduzione: "ti chiederò altri soldi per qualsiasi cosa".</p>

      <h2 id="voce-8">8. Tempistiche garantite</h2>

      <p>Un preventivo serio indica:</p>

      <ul>
        <li>Data prevista di consegna</li>
        <li>Durata dell'installazione</li>
        <li><strong>Penali per ritardi</strong> (noi le includiamo sempre!)</li>
      </ul>

      <p>🚩 <strong>Red flag:</strong> tempistiche vaghe tipo "4-6 settimane circa". Potrebbero diventare 4-6 mesi.</p>

      <h2 id="voce-9">9. Garanzie scritte e dettagliate</h2>

      <p>Cerca queste garanzie specifiche:</p>

      <ul>
        <li><strong>Garanzia prodotto:</strong> almeno 10 anni</li>
        <li><strong>Garanzia posa:</strong> almeno 5 anni</li>
        <li><strong>Garanzia vetri:</strong> specifica per rottura termica</li>
      </ul>

      <p>🚩 <strong>Red flag:</strong> "garanzia come da legge" senza specificare cosa copre. Spesso significa: niente.</p>

      <h2 id="voce-10">10. Gestione pratiche bonus fiscali</h2>

      <p>Per ottenere il bonus 50% ti serve:</p>

      <ul>
        <li>Pratica ENEA (chi la prepara? è inclusa?)</li>
        <li>Documentazione tecnica completa</li>
        <li>Asseverazione se richiesta</li>
      </ul>

      <p>Con I Profili la pratica ENEA è <strong>sempre inclusa gratuitamente</strong>.</p>

      <h2 id="confronto">Come confrontare preventivi diversi</h2>

      <p><strong>Mai confrontare solo i totali!</strong></p>

      <p>Crea una tabella con tutte le voci e confronta riga per riga. Il preventivo più economico potrebbe avere molti "esclusi" che lo renderanno il più caro a fine lavori.</p>

      <h2 id="richiedi">Richiedi un preventivo che non nasconde nulla</h2>

      <p>I nostri preventivi seguono tutti questi criteri. Ogni voce è chiara, dettagliata, senza sorprese.</p>

      <p>Se ricevi un nostro preventivo e poi ne trovi uno più conveniente (a parità di voci), <strong>ti garantiamo lo stesso prezzo</strong>.</p>

      <p><strong><a href="/contatti">→ Richiedi il tuo preventivo trasparente</a></strong></p>
    `,
  },

  // ============================================
  // ARTICOLO 4: PREZZI PVC
  // ============================================
  {
    id: "prezzi-pvc",
    slug: "prezzi-infissi-pvc-2026-listino",
    title: "Prezzi Infissi PVC nel 2026: Listino Aggiornato e Confronto",
    metaTitle: "Prezzi Infissi PVC 2026: Listino Completo | I Profili",
    metaDescription: "Quanto costano gli infissi in PVC nel 2026? Listino prezzi aggiornato, confronto tra fasce e come risparmiare senza rinunciare alla qualità.",
    excerpt: "\"Quanto costa una finestra in PVC?\" È la prima domanda che tutti fanno. La risposta onesta: dipende. Ma dopo questa guida, saprai esattamente cosa aspettarti.",
    date: "25 Gennaio 2026",
    dateISO: "2026-01-25",
    category: "Guide",
    tags: ["prezzi infissi PVC", "listino infissi", "costo finestre", "preventivo infissi"],
    image: domusProfile,
    imageAlt: "Listino prezzi infissi PVC con tabella comparativa",
    author: {
      name: "Marco Bianchi",
      role: "Consulente Tecnico",
    },
    readingTime: "11 min",
    relatedArticles: ["preventivo-infissi", "costi-sostituzione", "come-scegliere-infissi"],
    content: `
      <p><strong>"Quanto costa una finestra in PVC?"</strong></p>

      <p>È la prima domanda che tutti fanno. Ed è giusto così — prima di tutto vuoi capire se rientra nel tuo budget.</p>

      <p>La risposta onesta? <strong>Dipende.</strong> Ma non preoccuparti: dopo aver letto questa guida, saprai esattamente cosa aspettarti e — cosa più importante — come evitare di pagare il 40% in più del necessario.</p>

      <h2 id="prezzi-riferimento">Listino prezzi 2026 per tipologia</h2>

      <p>Ecco i prezzi reali di mercato per una finestra standard <strong>120x140 cm</strong>, installazione professionale inclusa:</p>

      <table>
        <tr><th>Categoria</th><th>Prezzo finestra</th><th>Cosa include</th></tr>
        <tr><td><strong>Entry-level</strong></td><td>300-400€</td><td>PVC 5 camere, doppio vetro base, apertura battente</td></tr>
        <tr><td><strong>Standard</strong></td><td>450-600€</td><td>PVC 6 camere, doppio vetro basso emissivo, anta-ribalta</td></tr>
        <tr><td><strong>Premium</strong></td><td>650-900€</td><td>PVC 6+ camere, triplo vetro, sicurezza RC2</td></tr>
        <tr><td><strong>Top di gamma</strong></td><td>900-1.200€</td><td>Sistemi evoluti, RC3, finiture speciali</td></tr>
      </table>

      <p><em>Il nostro sistema Domus si colloca nella fascia Premium con prezzi da 550-700€ per finestra standard — il miglior rapporto qualità/prezzo per il clima lombardo.</em></p>

      <h2 id="fattori-prezzo">Gli 8 fattori che fanno aumentare (o diminuire) il prezzo</h2>

      <h3>1. Numero di camere del profilo</h3>

      <p>I profili PVC vanno da 3 a 7 camere d'aria. Più camere = migliore isolamento = prezzo più alto.</p>

      <p><strong>Per la Lombardia consigliamo minimo 5 camere</strong> (6 camere per prestazioni ottimali).</p>

      <h3>2. Tipologia di vetro</h3>

      <ul>
        <li><strong>Doppio vetro standard:</strong> prezzo base</li>
        <li><strong>Doppio vetro basso emissivo:</strong> +15-20%</li>
        <li><strong>Triplo vetro:</strong> +30-40%</li>
        <li><strong>Vetro stratificato acustico:</strong> +10-15%</li>
      </ul>

      <h3>3. Tipo di apertura</h3>

      <ul>
        <li><strong>Battente:</strong> più economico</li>
        <li><strong>Anta-ribalta:</strong> +10-15% (consigliato per praticità)</li>
        <li><strong>Scorrevole alzante:</strong> +50-80%</li>
        <li><strong>Bilico (basculante):</strong> +20-30%</li>
      </ul>

      <h3>4. Dimensioni</h3>

      <p>Il prezzo al mq diminuisce con dimensioni maggiori, ma il totale aumenta. Finestre molto grandi (oltre 180cm) richiedono rinforzi strutturali extra.</p>

      <h3>5. Colore e finiture</h3>

      <ul>
        <li><strong>Bianco:</strong> prezzo base</li>
        <li><strong>Pellicolato tinta unita:</strong> +10-15%</li>
        <li><strong>Effetto legno:</strong> +15-25%</li>
        <li><strong>Bicolore (esterno/interno diversi):</strong> +20-30%</li>
      </ul>

      <h3>6. Classe di sicurezza</h3>

      <ul>
        <li><strong>Standard:</strong> incluso</li>
        <li><strong>RC1:</strong> +5-10%</li>
        <li><strong>RC2:</strong> +15-25% (consigliato per piano terra)</li>
        <li><strong>RC3:</strong> +30-40%</li>
      </ul>

      <h3>7. Accessori</h3>

      <p>Maniglie design, sensori antintrusione, microventilazione: ogni extra ha il suo costo, da 20€ a 150€ per finestra.</p>

      <h3>8. Qualità della posa</h3>

      <p>Una posa professionale con materiali certificati costa di più (80-150€ vs 30-50€). Ma è l'unica che garantisce le prestazioni promesse. <strong>Risparmiare qui significa buttare via tutti i benefici.</strong></p>

      <h2 id="esempio-appartamento">Esempio reale: quanto costa un appartamento tipo</h2>

      <p><strong>Scenario:</strong> appartamento 85mq a Milano con 5 finestre + 1 portafinestra</p>

      <table>
        <tr><th>Voce</th><th>Quantità</th><th>Prezzo unitario</th><th>Totale</th></tr>
        <tr><td>Finestra 120x140 Domus</td><td>4</td><td>550€</td><td>2.200€</td></tr>
        <tr><td>Finestra 80x120 Domus</td><td>1</td><td>450€</td><td>450€</td></tr>
        <tr><td>Portafinestra 140x240</td><td>1</td><td>850€</td><td>850€</td></tr>
        <tr><td>Cassonetti coibentati</td><td>6</td><td>180€</td><td>1.080€</td></tr>
        <tr><td>Smaltimento vecchi infissi</td><td>6</td><td>30€</td><td>180€</td></tr>
        <tr><td><strong>TOTALE LORDO</strong></td><td></td><td></td><td><strong>4.760€</strong></td></tr>
        <tr><td>Bonus 50%</td><td></td><td></td><td>-2.380€</td></tr>
        <tr><td><strong>COSTO EFFETTIVO</strong></td><td></td><td></td><td><strong>2.380€</strong></td></tr>
      </table>

      <h2 id="risparmio">5 modi per risparmiare senza rinunciare alla qualità</h2>

      <ol>
        <li><strong>Approfitta del bonus 50%:</strong> dimezza il costo effettivo (ma affrettati, potrebbe scendere al 36%)</li>
        <li><strong>Sostituisci tutte le finestre insieme:</strong> i costi di cantiere vengono ripartiti</li>
        <li><strong>Scegli PVC invece di alluminio:</strong> stesso comfort, 20-30% in meno</li>
        <li><strong>Evita finiture speciali dove non servono:</strong> bianco interno costa meno</li>
        <li><strong>Confronta preventivi voce per voce:</strong> non solo il totale!</li>
      </ol>

      <h2 id="roi">Quando recuperi l'investimento?</h2>

      <p>Con un risparmio medio di 400-600€/anno in bollette, l'investimento si ripaga in <strong>5-7 anni</strong> (con bonus). Dopo, è puro risparmio per i successivi 25+ anni di vita degli infissi.</p>

      <h2 id="preventivo">Quanto costa per casa TUA?</h2>

      <p>Ogni situazione è diversa. <a href="/contatti"><strong>Richiedi un sopralluogo gratuito</strong></a> e ricevi un preventivo dettagliato su misura — senza impegno.</p>
    `,
  },

  // ============================================
  // ARTICOLO 5: COSTI SOSTITUZIONE
  // ============================================
  {
    id: "costi-sostituzione",
    slug: "sostituzione-finestre-costi-2026",
    title: "Sostituzione Finestre: Tutti i Costi da Considerare nel 2026",
    metaTitle: "Costi Sostituzione Finestre 2026: Guida Completa",
    metaDescription: "Costi reali per sostituire le finestre: infissi, posa, smaltimento, pratiche. Budget completo con esempi per appartamento e villa.",
    excerpt: "Pensavi di spendere 3.000€ e alla fine il conto è arrivato a 5.500€. Il problema non è che ti hanno fregato — è che nessuno ti aveva spiegato tutte le voci di costo.",
    date: "22 Gennaio 2026",
    dateISO: "2026-01-22",
    category: "Risparmio",
    tags: ["costi sostituzione finestre", "budget infissi", "spese infissi", "quanto costa"],
    image: windowAfter1,
    imageAlt: "Calcolatrice con budget per sostituzione finestre",
    author: {
      name: "Laura Colombo",
      role: "Consulente Fiscale",
    },
    readingTime: "9 min",
    relatedArticles: ["prezzi-pvc", "preventivo-infissi", "bonus-50-2025"],
    content: `
      <p><strong>Pensavi di spendere 3.000€ per le nuove finestre. Alla fine il conto è arrivato a 5.500€.</strong></p>

      <p>Ti suona familiare?</p>

      <p>Non è necessariamente che ti abbiano fregato. Il problema è che nessuno ti aveva spiegato <strong>tutte le voci di costo</strong> che compongono una sostituzione di finestre.</p>

      <p>Il prezzo degli infissi è solo una parte — spesso nemmeno la maggiore. In questa guida ti mostro esattamente cosa aspettarti, voce per voce, così potrai pianificare un budget realistico.</p>

      <h2 id="voci-costo">Le 7 voci di costo che devi conoscere</h2>

      <h3 id="infissi">1. Costo degli infissi (50-60% del totale)</h3>

      <p>La voce principale, ma non l'unica. Per PVC di qualità:</p>

      <ul>
        <li>Finestra standard (120x140): 450-650€</li>
        <li>Portafinestra (140x240): 700-1.000€</li>
        <li>Scorrevole grande (300x240): 1.500-2.500€</li>
      </ul>

      <h3 id="posa">2. Posa in opera (15-20% del totale)</h3>

      <p>Una posa professionale costa <strong>80-150€ per infisso</strong> e include:</p>

      <ul>
        <li>Rimozione accurata del vecchio infisso</li>
        <li>Preparazione del vano murario</li>
        <li>Montaggio con livellamento preciso</li>
        <li>Sigillatura e isolamento termico</li>
        <li>Regolazione della ferramenta</li>
      </ul>

      <p>⚠️ <strong>Attenzione:</strong> la posa "low cost" (30-50€) spesso significa lavoro approssimativo che vanifica le prestazioni dell'infisso. Un infisso da 800€ con posa scarsa può rendere come uno da 300€.</p>

      <h3 id="cassonetti">3. Cassonetti (10-15% del totale)</h3>

      <p>I cassonetti delle tapparelle sono spesso i <strong>grandi dimenticati</strong>. Se i tuoi hanno più di 20 anni, sono probabilmente un "buco" termico enorme.</p>

      <ul>
        <li>Cassonetto coibentato standard: 150-250€</li>
        <li>Cassonetto ispezionabile premium: 250-400€</li>
      </ul>

      <p><strong>Il nostro consiglio:</strong> non ha senso mettere infissi nuovi e tenere cassonetti vecchi non isolati. È come comprare una porta blindata e lasciare la finestra aperta.</p>

      <h3 id="smaltimento">4. Smaltimento (2-5% del totale)</h3>

      <p>I vecchi infissi sono rifiuti speciali e vanno smaltiti correttamente:</p>

      <ul>
        <li>Smaltimento per infisso: 20-40€</li>
        <li>Smaltimento cassonetto: 30-50€</li>
      </ul>

      <h3 id="opere-murarie">5. Opere murarie e ripristini (5-15% del totale)</h3>

      <p>Questa voce è molto variabile a seconda della situazione esistente:</p>

      <ul>
        <li>Stuccatura base: solitamente inclusa</li>
        <li>Ripristino davanzale interno: 30-50€ per finestra</li>
        <li>Tinteggiatura locale: 50-100€ per finestra</li>
        <li>Adattamento murario (se misure diverse): da valutare</li>
      </ul>

      <h3 id="accessori">6. Accessori opzionali</h3>

      <p>Non obbligatori, ma spesso utili:</p>

      <ul>
        <li>Tapparelle motorizzate: 250-400€ per finestra</li>
        <li>Zanzariere: 80-150€ per finestra</li>
        <li>Sensori antintrusione: 50-100€ per finestra</li>
        <li>Tende oscuranti integrate: 150-300€ per finestra</li>
      </ul>

      <h3 id="pratiche">7. Pratiche burocratiche (1-3% del totale)</h3>

      <ul>
        <li>Pratica ENEA per bonus 50%: 100-300€ (noi la includiamo GRATIS)</li>
        <li>Eventuale pratica edilizia: 200-500€ (se richiesta)</li>
        <li>Pratica condominiale: variabile</li>
      </ul>

      <h2 id="esempio-appartamento">Budget reale: appartamento 80mq</h2>

      <p><strong>Scenario:</strong> 5 finestre + 1 portafinestra, infissi anni '80</p>

      <table>
        <tr><th>Voce</th><th>Costo</th></tr>
        <tr><td>Infissi PVC premium (6 pezzi)</td><td>3.500€</td></tr>
        <tr><td>Cassonetti coibentati</td><td>1.200€</td></tr>
        <tr><td>Posa professionale</td><td>700€</td></tr>
        <tr><td>Smaltimento</td><td>200€</td></tr>
        <tr><td>Ripristini murari</td><td>400€</td></tr>
        <tr><td><strong>TOTALE LORDO</strong></td><td><strong>6.000€</strong></td></tr>
        <tr><td>Bonus 50%</td><td>-3.000€</td></tr>
        <tr><td><strong>COSTO EFFETTIVO</strong></td><td><strong>3.000€</strong></td></tr>
      </table>

      <h2 id="esempio-villa">Budget reale: villa 150mq</h2>

      <p><strong>Scenario:</strong> 10 finestre + 3 portafinestre + 1 scorrevole grande</p>

      <table>
        <tr><th>Voce</th><th>Costo</th></tr>
        <tr><td>Infissi PVC premium (14 pezzi)</td><td>10.500€</td></tr>
        <tr><td>Cassonetti coibentati</td><td>2.400€</td></tr>
        <tr><td>Posa professionale</td><td>1.800€</td></tr>
        <tr><td>Smaltimento</td><td>450€</td></tr>
        <tr><td>Ripristini murari</td><td>850€</td></tr>
        <tr><td><strong>TOTALE LORDO</strong></td><td><strong>16.000€</strong></td></tr>
        <tr><td>Bonus 50%</td><td>-8.000€</td></tr>
        <tr><td><strong>COSTO EFFETTIVO</strong></td><td><strong>8.000€</strong></td></tr>
      </table>

      <h2 id="finanziamento">Non hai tutto il budget? Ecco le opzioni</h2>

      <p>Offriamo diverse soluzioni di pagamento:</p>

      <ul>
        <li><strong>Tasso zero fino a 24 mesi:</strong> dividi la spesa senza interessi</li>
        <li><strong>Finanziamento fino a 60 mesi:</strong> rate comode anche per grandi lavori</li>
        <li><strong>Pagamento 50% + 50%:</strong> metà all'ordine, metà a fine lavori</li>
      </ul>

      <h2 id="preventivo">Calcola il TUO budget reale</h2>

      <p>Ogni casa è diversa. <a href="/contatti"><strong>Richiedi un sopralluogo gratuito</strong></a> e ricevi un preventivo completo, con tutte le voci chiare e separate.</p>

      <p>Nessuna sorpresa. Mai.</p>
    `,
  },

  // ============================================
  // ARTICOLO 6: ISOLAMENTO TERMICO
  // ============================================
  {
    id: "isolamento-termico",
    slug: "isolamento-termico-finestre-guida",
    title: "Isolamento Termico Finestre: Come Eliminare Spifferi e Condensa",
    metaTitle: "Isolamento Termico Finestre: Guida Completa | I Profili",
    metaDescription: "Guida tecnica all'isolamento termico delle finestre. Trasmittanza, vetri basso emissivi, guarnizioni: tutto quello che devi sapere.",
    excerpt: "Ti svegli la mattina e trovi le finestre grondanti d'acqua. I muri vicino ai serramenti hanno macchie scure. Questi non sono \"problemi normali\" — sono sintomi di infissi che non funzionano.",
    date: "18 Gennaio 2026",
    dateISO: "2026-01-18",
    category: "Guide",
    tags: ["isolamento termico", "trasmittanza", "vetri basso emissivi", "condensa finestre"],
    image: windowDetail,
    imageAlt: "Schema isolamento termico finestra con trasmittanza",
    author: {
      name: "Marco Bianchi",
      role: "Consulente Tecnico",
    },
    readingTime: "10 min",
    relatedArticles: ["risparmio-energetico", "come-scegliere-infissi", "pvc-vs-alluminio"],
    content: `
      <p><strong>Ti svegli la mattina e trovi le finestre grondanti d'acqua.</strong></p>

      <p>I muri vicino ai serramenti hanno macchie scure che tornano ogni inverno. D'inverno, stare seduto vicino alla finestra significa congelare — anche con il riscaldamento al massimo.</p>

      <p>Se ti riconosci in questa descrizione, sappi una cosa: <strong>questi non sono "problemi normali" di una casa.</strong></p>

      <p>Sono sintomi chiari e inequivocabili di infissi che non isolano. E mentre tu sopporti il disagio, stai letteralmente riscaldando l'esterno — pagando bollette molto più alte del necessario.</p>

      <h2 id="sintomi">I 5 sintomi di un isolamento insufficiente</h2>

      <p>Fai questo check veloce:</p>

      <ul>
        <li>✓ Spifferi percepibili vicino alle finestre chiuse</li>
        <li>✓ Condensa o brina sui vetri al mattino</li>
        <li>✓ Zone fredde vicino ai serramenti</li>
        <li>✓ Muffa sugli stipiti o intorno al telaio</li>
        <li>✓ Bollette elevate nonostante il riscaldamento sempre acceso</li>
      </ul>

      <p>Se hai risposto sì ad almeno 2 di questi punti, i tuoi infissi sono un problema serio.</p>

      <h2 id="trasmittanza">La trasmittanza termica spiegata senza tecnicismi</h2>

      <p>La <strong>trasmittanza termica (Uw)</strong> è semplicemente una misura di quanto calore passa attraverso la finestra. Si misura in W/m²K.</p>

      <p>Pensa a questo valore come a un "voto" dell'infisso:</p>

      <table>
        <tr><th>Valore Uw</th><th>Giudizio</th><th>Cosa significa per te</th></tr>
        <tr><td>> 2.5</td><td>Insufficiente</td><td>Stai riscaldando il giardino del vicino</td></tr>
        <tr><td>1.4 - 2.5</td><td>Sufficiente</td><td>Il minimo di legge, ma potresti fare meglio</td></tr>
        <tr><td>1.0 - 1.4</td><td>Buono</td><td>Risparmio tangibile in bolletta</td></tr>
        <tr><td>0.8 - 1.0</td><td>Ottimo</td><td>Comfort eccellente, risparmio massimo</td></tr>
        <tr><td>< 0.8</td><td>Eccellente</td><td>Standard da casa passiva</td></tr>
      </table>

      <p><strong>Per la Lombardia</strong> (zona E) la legge richiede massimo 1.4, ma per un risparmio reale in bolletta consigliamo <strong>Uw ≤ 1.0</strong>.</p>

      <h2 id="test-fai-da-te">Fai questi 4 test (ci vogliono 5 minuti)</h2>

      <p>Vuoi capire subito come stanno le tue finestre? Prova questi test:</p>

      <h3>Test 1: La candela</h3>

      <p>Accendi una candela e passala lentamente lungo i bordi della finestra chiusa. Se la fiamma oscilla o tremola, c'è uno spiffero.</p>

      <h3>Test 2: La mano</h3>

      <p>In inverno, avvicina la mano a 10 cm dal vetro. Se senti già freddo a quella distanza, l'isolamento è scarso.</p>

      <h3>Test 3: La condensa</h3>

      <p>Se la mattina trovi regolarmente condensa all'interno del vetro (non nel canalino), la finestra non isola abbastanza.</p>

      <h3>Test 4: Il foglio di carta</h3>

      <p>Chiudi la finestra su un foglio di carta. Se riesci a sfilarlo facilmente, le guarnizioni sono usurate e non tengono più.</p>

      <p><strong>Hai "fallito" almeno un test?</strong> È il momento di valutare seriamente la sostituzione.</p>

      <h2 id="componenti">I 4 elementi che determinano l'isolamento</h2>

      <h3>1. Il vetro (vale l'80% dell'isolamento)</h3>

      <ul>
        <li><strong>Vetro singolo:</strong> isolamento quasi nullo (Ug ~5.8)</li>
        <li><strong>Doppio vetro standard:</strong> meglio, ma non abbastanza (Ug ~2.8)</li>
        <li><strong>Doppio vetro basso emissivo:</strong> la scelta minima per la Lombardia (Ug ~1.1)</li>
        <li><strong>Triplo vetro basso emissivo:</strong> il top per risparmio massimo (Ug ~0.5-0.7)</li>
      </ul>

      <h3>2. Il telaio (profilo)</h3>

      <ul>
        <li><strong>Alluminio senza taglio termico:</strong> pessimo, conduce il freddo (Uf ~7.0)</li>
        <li><strong>PVC 5 camere:</strong> buono (Uf ~1.3-1.5)</li>
        <li><strong>PVC 6+ camere:</strong> ottimo (Uf ~1.0-1.2)</li>
      </ul>

      <h3>3. Il distanziale del vetro</h3>

      <p>Il bordo tra le lastre di vetro è spesso il punto debole. I distanziali "warm edge" (bordo caldo) riducono il ponte termico del 10-15%.</p>

      <h3>4. Le guarnizioni</h3>

      <ul>
        <li><strong>1 guarnizione:</strong> tenuta base</li>
        <li><strong>2 guarnizioni:</strong> buona tenuta</li>
        <li><strong>3 guarnizioni:</strong> tenuta ottimale (come nel nostro sistema Domus)</li>
      </ul>

      <h2 id="condensa">Come eliminare definitivamente la condensa</h2>

      <p>La condensa si forma quando l'aria umida della casa incontra una superficie fredda (il vetro). Con infissi ben isolati:</p>

      <ol>
        <li>La superficie interna del vetro resta calda</li>
        <li>L'umidità non si condensa</li>
        <li>Niente condensa = niente muffa = aria più sana</li>
      </ol>

      <p><strong>Nota importante:</strong> se la tua casa è molto umida (cucina senza cappa, bagno senza areazione), anche i migliori infissi potrebbero non bastare. In questi casi consigliamo infissi con microventilazione integrata.</p>

      <h2 id="soluzione">La nostra soluzione: il sistema Domus</h2>

      <p>Il sistema <strong>Domus</strong> è progettato specificamente per il clima lombardo:</p>

      <ul>
        <li>Profilo 76mm a 6 camere (Uf 1.0)</li>
        <li>Tripla guarnizione ad alta memoria elastica</li>
        <li>Triplo vetro basso emissivo (Ug 0.6)</li>
        <li>Distanziali warm edge</li>
        <li><strong>Trasmittanza finale Uw: 0.79 W/m²K</strong></li>
      </ul>

      <p>Con valori come questi, addio condensa, addio spifferi, addio bollette esagerate.</p>

      <p><strong><a href="/contatti">→ Vuoi eliminare condensa e spifferi? Richiedi un sopralluogo gratuito</a></strong></p>
    `,
  },

  // ============================================
  // ARTICOLO 7: COME SCEGLIERE INFISSI
  // ============================================
  {
    id: "come-scegliere-infissi",
    slug: "come-scegliere-infissi-pvc-lombardia",
    title: "Come Scegliere gli Infissi Giusti per la Tua Casa",
    metaTitle: "Come Scegliere Infissi PVC nel 2026 | Guida Completa",
    metaDescription: "Guida definitiva alla scelta degli infissi in PVC, alluminio e legno-alluminio. Confronto materiali, prezzi e consigli per la Lombardia.",
    excerpt: "PVC, alluminio, legno-alluminio... Più cerchi informazioni, più ti confondi. Questa guida ti darà una risposta chiara in 5 minuti.",
    date: "15 Gennaio 2026",
    dateISO: "2026-01-15",
    category: "Guide",
    tags: ["infissi PVC", "serramenti Lombardia", "guida acquisto"],
    image: heroWindowSlider,
    imageAlt: "Confronto tra diversi tipi di infissi PVC e alluminio",
    author: {
      name: "Marco Bianchi",
      role: "Consulente Tecnico",
    },
    readingTime: "8 min",
    relatedArticles: ["pvc-vs-alluminio", "errori-sostituzione-infissi"],
    content: `
      <p><strong>PVC, alluminio, legno-alluminio...</strong></p>

      <p>Più cerchi informazioni online, più ti confondi. Ogni sito dice qualcosa di diverso. Ogni venditore spinge il "suo" materiale.</p>

      <p>Questa guida è diversa. Ti darò una risposta chiara in 5 minuti: <strong>quale materiale fa per TE</strong>, in base alla TUA situazione specifica.</p>

      <p>Niente tecnicismi inutili. Solo quello che ti serve per decidere.</p>

      <h2 id="3-domande">Rispondi a queste 3 domande</h2>

      <p>Prima di guardare i materiali, chiediti:</p>

      <ol>
        <li><strong>Qual è il tuo budget?</strong> (basso, medio, alto)</li>
        <li><strong>Cosa ti interessa di più?</strong> (risparmio bollette, estetica, zero manutenzione)</li>
        <li><strong>Hai vincoli architettonici?</strong> (centro storico, condominio con regolamento, villa moderna)</li>
      </ol>

      <p>Tieni a mente le risposte. Ti serviranno tra poco.</p>

      <h2 id="confronto">I 3 materiali a confronto</h2>

      <h3>Infissi in PVC</h3>

      <p><strong>Ideale per:</strong> la maggior parte delle case, specialmente appartamenti e villette dove il budget conta.</p>

      <p><strong>Vantaggi:</strong></p>

      <ul>
        <li>Miglior rapporto qualità-prezzo in assoluto</li>
        <li>Eccellente isolamento termico (Uw fino a 0.8 W/m²K)</li>
        <li>Zero manutenzione — basta pulire con acqua</li>
        <li>Durata 30+ anni senza problemi</li>
        <li>Ampia gamma di colori ed effetto legno</li>
      </ul>

      <p><strong>Svantaggi:</strong></p>

      <ul>
        <li>Profili leggermente più spessi dell'alluminio</li>
        <li>Non adatto per vetrate molto grandi (oltre 3 metri)</li>
      </ul>

      <p><strong>Prezzo indicativo:</strong> 450-700€ per finestra standard installata</p>

      <h3>Infissi in Alluminio</h3>

      <p><strong>Ideale per:</strong> architettura moderna, grandi vetrate, edifici commerciali.</p>

      <p><strong>Vantaggi:</strong></p>

      <ul>
        <li>Design minimale con profili ultra-sottili</li>
        <li>Massima resistenza strutturale</li>
        <li>Perfetto per scorrevoli e grandi superfici</li>
        <li>Look contemporaneo</li>
      </ul>

      <p><strong>Svantaggi:</strong></p>

      <ul>
        <li>Più costoso del PVC (20-30% in più)</li>
        <li>Isolamento termico inferiore (richiede taglio termico di qualità)</li>
        <li>Possibile ossidazione nel tempo</li>
      </ul>

      <p><strong>Prezzo indicativo:</strong> 600-1.000€ per finestra standard installata</p>

      <h3>Infissi in Legno-Alluminio</h3>

      <p><strong>Ideale per:</strong> case di pregio, contesti storici, chi vuole il massimo comfort.</p>

      <p><strong>Vantaggi:</strong></p>

      <ul>
        <li>Estetica premium del legno all'interno</li>
        <li>Resistenza dell'alluminio all'esterno</li>
        <li>Eccellente isolamento termico e acustico</li>
        <li>Valorizza l'immobile</li>
      </ul>

      <p><strong>Svantaggi:</strong></p>

      <ul>
        <li>Costo elevato (40-60% più del PVC)</li>
        <li>Manutenzione del legno interno (verniciatura ogni 10-15 anni)</li>
        <li>Tempi di produzione più lunghi</li>
      </ul>

      <p><strong>Prezzo indicativo:</strong> 800-1.400€ per finestra standard installata</p>

      <h2 id="flowchart">La decisione in 30 secondi</h2>

      <p><strong>Il tuo budget è limitato?</strong></p>

      <p>→ <strong>Scegli PVC.</strong> Otterrai le migliori prestazioni per i tuoi soldi.</p>

      <p><strong>Hai grandi vetrate o vuoi un design ultra-minimale?</strong></p>

      <p>→ <strong>Scegli Alluminio</strong> (con taglio termico di qualità).</p>

      <p><strong>Vuoi il massimo comfort e l'estetica del legno, senza pensieri esterni?</strong></p>

      <p>→ <strong>Scegli Legno-Alluminio.</strong></p>

      <p><strong>Non sai cosa scegliere e vuoi il consiglio più sicuro?</strong></p>

      <p>→ <strong>Scegli PVC.</strong> È la scelta giusta nel 80% dei casi.</p>

      <h2 id="criteri">I 5 criteri che contano davvero</h2>

      <ol>
        <li><strong>Isolamento termico (Uw):</strong> per la Lombardia cerca valori ≤ 1.0</li>
        <li><strong>Isolamento acustico:</strong> se vivi in zona trafficata, almeno 40 dB</li>
        <li><strong>Sicurezza:</strong> classe RC2 per piani terra e accessibili</li>
        <li><strong>Estetica:</strong> valuta il colore e lo stile che si integra con la casa</li>
        <li><strong>Garanzia:</strong> minimo 10 anni su prodotto, 5 sulla posa</li>
      </ol>

      <h2 id="conclusioni">Il nostro consiglio per la Lombardia</h2>

      <p>Per la <strong>maggior parte delle case in Lombardia</strong>, gli infissi in PVC rappresentano la scelta ottimale. Combinano prestazioni eccellenti, durabilità e un prezzo accessibile.</p>

      <p>Il nostro sistema <strong>Domus</strong> in PVC offre:</p>

      <ul>
        <li>Trasmittanza Uw 0.79 (tra le migliori sul mercato)</li>
        <li>6 camere per isolamento massimo</li>
        <li>Tripla guarnizione</li>
        <li>Garanzia 10 anni</li>
      </ul>

      <p>Vuoi una consulenza personalizzata? <a href="/contatti"><strong>Contattaci per un sopralluogo gratuito</strong></a> — ti aiuteremo a scegliere la soluzione perfetta per la tua casa.</p>
    `,
  },

  // ============================================
  // ARTICOLO 8: BONUS 50%
  // ============================================
  {
    id: "bonus-50-2025",
    slug: "bonus-infissi-50-2026-guida-completa",
    title: "Bonus Infissi 50%: Tutto Quello che Devi Sapere nel 2026",
    metaTitle: "Bonus Infissi 50% 2026: Guida Completa | I Profili",
    metaDescription: "Guida completa al bonus infissi 50% nel 2026. Requisiti, documenti, scadenze e come ottenerlo. Potrebbe scendere al 36%, agisci ora!",
    excerpt: "Il bonus infissi 50% sta per scendere al 36%. Se stai rimandando la decisione, stai letteralmente buttando via migliaia di euro.",
    date: "10 Gennaio 2026",
    dateISO: "2026-01-10",
    category: "Bonus Fiscali",
    tags: ["bonus infissi", "detrazione fiscale", "ecobonus 2026"],
    image: certifiedInstaller,
    imageAlt: "Documenti per bonus infissi 50%",
    author: {
      name: "Laura Colombo",
      role: "Consulente Fiscale",
    },
    readingTime: "6 min",
    relatedArticles: ["direttiva-case-green", "risparmio-energetico"],
    content: `
      <p><strong>Il bonus infissi 50% sta per scendere al 36%.</strong></p>

      <p>Sembra un dettaglio, ma facciamo due conti: su un intervento da 8.000€, la differenza è di <strong>1.120€ che ti metti in tasca o butti via.</strong></p>

      <p>Se stai rimandando la decisione, stai letteralmente buttando via soldi. Ecco tutto quello che devi sapere per agire ORA — prima che sia troppo tardi.</p>

      <h2 id="cos-e">Cos'è il Bonus Infissi 50%?</h2>

      <p>Il Bonus Infissi è una <strong>detrazione fiscale del 50%</strong> che ti permette di recuperare metà delle spese sostenute per sostituire finestre e serramenti.</p>

      <p>Come funziona in pratica:</p>

      <ul>
        <li>Spendi 10.000€ per nuovi infissi</li>
        <li>Detrai 5.000€ in 10 anni (500€/anno)</li>
        <li>Costo effettivo: solo 5.000€</li>
      </ul>

      <p>È come uno sconto del 50% pagato dallo Stato.</p>

      <h2 id="urgency">Perché devi muoverti ADESSO</h2>

      <p><strong>⚠️ Dal 2027 il bonus scenderà al 36%.</strong></p>

      <p>Questo significa:</p>

      <table>
        <tr><th>Spesa</th><th>Bonus 50% (2026)</th><th>Bonus 36% (2027)</th><th>Differenza</th></tr>
        <tr><td>6.000€</td><td>3.000€</td><td>2.160€</td><td>-840€</td></tr>
        <tr><td>10.000€</td><td>5.000€</td><td>3.600€</td><td>-1.400€</td></tr>
        <tr><td>15.000€</td><td>7.500€</td><td>5.400€</td><td>-2.100€</td></tr>
      </table>

      <p>Aspettare il 2027 ti costa centinaia o migliaia di euro in meno di detrazione.</p>

      <h2 id="requisiti">Requisiti per accedere al bonus</h2>

      <p>Per ottenere la detrazione devi rispettare questi requisiti:</p>

      <ol>
        <li><strong>Sostituzione di infissi esistenti</strong> (non nuova installazione in ampliamenti)</li>
        <li><strong>Miglioramento delle prestazioni energetiche</strong> (i nuovi infissi devono avere trasmittanza migliore)</li>
        <li><strong>Pagamento con bonifico parlante</strong> (deve indicare riferimento normativo, CF/P.IVA del fornitore, CF del beneficiario)</li>
        <li><strong>Comunicazione ENEA</strong> entro 90 giorni dalla fine lavori</li>
      </ol>

      <h2 id="documenti">Documenti da conservare</h2>

      <p>Per non perdere il diritto alla detrazione, conserva:</p>

      <ul>
        <li>Fattura dettagliata con descrizione degli infissi</li>
        <li>Ricevuta del bonifico parlante</li>
        <li>Schede tecniche dei prodotti installati</li>
        <li>Attestazione del fornitore sui valori di trasmittanza</li>
        <li>Ricevuta della comunicazione ENEA</li>
      </ul>

      <h2 id="cosa-facciamo">Cosa facciamo NOI per te</h2>

      <p>Con il nostro <strong>Sistema Zero Pensieri</strong>, non devi preoccuparti di nulla:</p>

      <ul>
        <li>✓ <strong>Pratica ENEA inclusa gratuitamente</strong> (risparmio 100-300€)</li>
        <li>✓ Tutta la documentazione tecnica preparata da noi</li>
        <li>✓ Fattura già pronta per la detrazione</li>
        <li>✓ Istruzioni chiare per il bonifico parlante</li>
        <li>✓ Assistenza post-vendita per qualsiasi dubbio fiscale</li>
      </ul>

      <h2 id="esempio">Esempio pratico di calcolo</h2>

      <p><strong>Scenario:</strong> appartamento con 6 infissi, spesa totale 7.200€</p>

      <table>
        <tr><th>Voce</th><th>Importo</th></tr>
        <tr><td>Spesa sostenuta</td><td>7.200€</td></tr>
        <tr><td>Detrazione 50%</td><td>3.600€</td></tr>
        <tr><td>Recupero annuo (10 anni)</td><td>360€/anno</td></tr>
        <tr><td><strong>Costo effettivo</strong></td><td><strong>3.600€</strong></td></tr>
      </table>

      <p>In pratica, paghi la metà.</p>

      <h2 id="scadenze">Le scadenze da rispettare</h2>

      <ul>
        <li><strong>Fine lavori:</strong> 31 dicembre 2026 per il bonus al 50%</li>
        <li><strong>Comunicazione ENEA:</strong> entro 90 giorni dalla fine lavori</li>
        <li><strong>Pagamento:</strong> sempre con bonifico parlante</li>
      </ul>

      <p>⚠️ <strong>Attenzione ai tempi:</strong> considera 4-6 settimane per la produzione e 1-2 giorni per l'installazione. Se vuoi il bonus al 50%, devi ordinare entro ottobre/novembre 2026.</p>

      <h2 id="agisci">Non aspettare il 2027</h2>

      <p>Ogni mese che passa è un rischio:</p>

      <ul>
        <li>I tempi di attesa si allungano con l'avvicinarsi della scadenza</li>
        <li>I prezzi potrebbero aumentare per la domanda</li>
        <li>Il bonus scenderà sicuramente al 36%</li>
      </ul>

      <p><strong><a href="/contatti">→ Richiedi un preventivo ora e blocca il bonus al 50%</a></strong></p>
    `,
  },

  // ============================================
  // ARTICOLO 9: RISPARMIO ENERGETICO
  // ============================================
  {
    id: "risparmio-energetico",
    slug: "risparmio-energetico-infissi-quanto-si-risparmia",
    title: "Quanto Puoi Risparmiare con Infissi ad Alta Efficienza?",
    metaTitle: "Risparmio Energetico Infissi: Calcola Quanto Risparmi",
    metaDescription: "Analisi reale del risparmio in bolletta dopo la sostituzione dei serramenti. Dati concreti e testimonianze clienti dalla Lombardia.",
    excerpt: "\"Ma poi quanto risparmio davvero?\" È la domanda giusta. Ecco i numeri reali dei nostri clienti lombardi — non stime teoriche, ma bollette vere.",
    date: "5 Gennaio 2026",
    dateISO: "2026-01-05",
    category: "Risparmio",
    tags: ["risparmio bolletta", "efficienza energetica", "isolamento termico"],
    image: familyComfort,
    imageAlt: "Grafico risparmio energetico con nuovi infissi",
    author: {
      name: "Marco Bianchi",
      role: "Consulente Tecnico",
    },
    readingTime: "5 min",
    relatedArticles: ["come-scegliere-infissi", "bonus-50-2025"],
    content: `
      <p><strong>"Ma poi quanto risparmio davvero?"</strong></p>

      <p>È la domanda più onesta che puoi fare. E meriti una risposta altrettanto onesta — non le solite promesse vaghe tipo "risparmierai tanto".</p>

      <p>Ecco i numeri reali dei nostri clienti lombardi. Non stime teoriche, ma <strong>bollette vere, prima e dopo</strong>.</p>

      <h2 id="risparmio-medio">Il risparmio medio reale</h2>

      <p>In base ai dati raccolti su oltre 500 installazioni in Lombardia, la sostituzione degli infissi porta a un <strong>risparmio medio del 25-40%</strong> sulla bolletta del riscaldamento.</p>

      <p>In euro, significa:</p>

      <ul>
        <li><strong>Appartamento 70-90 mq:</strong> 300-500€/anno</li>
        <li><strong>Appartamento 100-120 mq:</strong> 450-650€/anno</li>
        <li><strong>Villa 150-200 mq:</strong> 600-900€/anno</li>
      </ul>

      <h2 id="caso-1">Caso reale #1: Famiglia Rossi, Milano (Bovisa)</h2>

      <p><strong>Situazione iniziale:</strong></p>

      <ul>
        <li>Appartamento 90 mq, infissi in legno anni '80</li>
        <li>Bolletta gas invernale: 250€/mese</li>
        <li>Problemi: spifferi continui, condensa ogni mattina, freddo vicino alle finestre</li>
      </ul>

      <p><strong>Intervento:</strong> 6 infissi Domus PVC con triplo vetro, cassonetti coibentati nuovi</p>

      <p><strong>Risultato dopo 1 anno:</strong></p>

      <ul>
        <li>Bolletta gas invernale: 160€/mese</li>
        <li><strong>Risparmio annuo: 540€</strong></li>
        <li>Zero condensa</li>
        <li>Temperatura uniforme in casa</li>
      </ul>

      <h2 id="caso-2">Caso reale #2: Marco, Bergamo (centro)</h2>

      <p><strong>Situazione iniziale:</strong></p>

      <ul>
        <li>Appartamento 110 mq in palazzo anni '60</li>
        <li>Infissi in alluminio senza taglio termico</li>
        <li>Bolletta gas: 320€/mese in inverno</li>
        <li>Rumore del traffico insopportabile</li>
      </ul>

      <p><strong>Intervento:</strong> 8 infissi Domus PVC con vetro stratificato acustico</p>

      <p><strong>Risultato dopo 1 anno:</strong></p>

      <ul>
        <li>Bolletta gas: 195€/mese</li>
        <li><strong>Risparmio annuo: 750€</strong></li>
        <li>Rumore abbattuto del 70%</li>
        <li>"Finalmente posso dormire con la finestra dalla parte della strada"</li>
      </ul>

      <h2 id="caso-3">Caso reale #3: Famiglia Bianchi, villa a Monza</h2>

      <p><strong>Situazione iniziale:</strong></p>

      <ul>
        <li>Villa 180 mq con 14 infissi</li>
        <li>Serramenti in legno vecchi di 35 anni</li>
        <li>Spesa riscaldamento: 2.800€/anno</li>
        <li>Casa fredda nonostante termosifoni al massimo</li>
      </ul>

      <p><strong>Intervento:</strong> 14 infissi Domus, 2 scorrevoli alzanti, tutti i cassonetti sostituiti</p>

      <p><strong>Risultato dopo 1 anno:</strong></p>

      <ul>
        <li>Spesa riscaldamento: 1.750€/anno</li>
        <li><strong>Risparmio annuo: 1.050€</strong></li>
        <li>Casa confortevole anche con termosifoni più bassi</li>
        <li>Classe energetica: da G a D</li>
      </ul>

      <h2 id="roi">In quanto tempo recuperi l'investimento?</h2>

      <p>Facciamo un calcolo realistico:</p>

      <table>
        <tr><th>Investimento</th><th>Risparmio annuo</th><th>Con Bonus 50%</th><th>Payback</th></tr>
        <tr><td>6.000€</td><td>450€</td><td>3.000€ effettivi</td><td>6-7 anni</td></tr>
        <tr><td>10.000€</td><td>600€</td><td>5.000€ effettivi</td><td>8-9 anni</td></tr>
        <tr><td>15.000€</td><td>850€</td><td>7.500€ effettivi</td><td>8-9 anni</td></tr>
      </table>

      <p>Dopo il payback, è <strong>puro risparmio</strong> per i successivi 20-25 anni di vita degli infissi.</p>

      <h2 id="oltre-risparmio">Oltre il risparmio economico</h2>

      <p>I benefici che non si misurano in euro ma cambiano la qualità della vita:</p>

      <ul>
        <li><strong>Niente più condensa:</strong> addio muffa e aria più sana</li>
        <li><strong>Silenzio:</strong> abbattimento rumori fino a 45 dB</li>
        <li><strong>Comfort termico:</strong> temperatura uniforme in ogni stanza</li>
        <li><strong>Valore immobile:</strong> classe energetica migliore = casa che vale di più</li>
        <li><strong>Sicurezza:</strong> infissi moderni sono molto più difficili da forzare</li>
      </ul>

      <h2 id="calcola">Calcola il TUO risparmio</h2>

      <p>Ogni casa è diversa. I numeri che abbiamo mostrato sono casi reali, ma il tuo risparmio dipende dalla situazione specifica.</p>

      <p><a href="/contatti"><strong>→ Richiedi un sopralluogo gratuito</strong></a> e ti forniremo una stima personalizzata del risparmio che puoi ottenere.</p>
    `,
  },

  // ============================================
  // ARTICOLO 10: DIRETTIVA CASE GREEN
  // ============================================
  {
    id: "direttiva-case-green",
    slug: "direttiva-case-green-2030-cosa-fare",
    title: "Direttiva Case Green: Cosa Cambia per i Proprietari di Casa",
    metaTitle: "Direttiva Case Green 2030: Cosa Fare Ora | Guida",
    metaDescription: "L'Europa impone nuovi standard energetici entro il 2030. Scopri cosa significa per la tua casa e come prepararti con i serramenti giusti.",
    excerpt: "Entro il 2030, la tua casa dovrà essere in classe E o rischi sanzioni e svalutazione. Sembra lontano, ma 4 anni passano in fretta.",
    date: "28 Dicembre 2025",
    dateISO: "2025-12-28",
    category: "Normative",
    tags: ["case green", "normativa europea", "efficienza energetica"],
    image: casaGreen,
    imageAlt: "Casa efficiente con classe energetica A",
    author: {
      name: "Laura Colombo",
      role: "Consulente Fiscale",
    },
    readingTime: "7 min",
    relatedArticles: ["bonus-50-2025", "risparmio-energetico"],
    content: `
      <p><strong>Entro il 2030, la tua casa dovrà essere in classe energetica E.</strong></p>

      <p>Entro il 2033, classe D.</p>

      <p>Sembra lontano, ma pensa a quanto velocemente sono passati gli ultimi 4 anni. E milioni di italiani stanno già correndo ai ripari.</p>

      <p>Tu?</p>

      <h2 id="cosa-prevede">Cosa dice la Direttiva Case Green</h2>

      <p>La Direttiva Europea EPBD (Energy Performance of Buildings Directive) è legge. Non è più una proposta, non è più in discussione.</p>

      <p>Ecco le scadenze:</p>

      <ul>
        <li><strong>2030:</strong> tutti gli edifici residenziali devono raggiungere almeno la <strong>classe E</strong></li>
        <li><strong>2033:</strong> obiettivo <strong>classe D</strong></li>
        <li><strong>2050:</strong> tutti gli edifici devono essere a emissioni zero</li>
      </ul>

      <h2 id="situazione-italia">La situazione in Italia è critica</h2>

      <p>Secondo i dati ENEA:</p>

      <ul>
        <li><strong>60% degli edifici italiani</strong> è attualmente in classe F o G</li>
        <li>Oltre <strong>9 milioni di abitazioni</strong> devono essere ristrutturate</li>
        <li>Il tempo medio per un intervento completo è di 6-12 mesi</li>
      </ul>

      <p>Tradotto: se tutti aspettano l'ultimo momento, ci sarà un ingorgo di lavori — prezzi alle stelle e tempi di attesa infiniti.</p>

      <h2 id="conseguenze">Cosa rischi se non ti adegui</h2>

      <h3>1. Svalutazione dell'immobile</h3>

      <p>Le case in classe F e G stanno già perdendo valore. Secondo i dati di mercato, la differenza di prezzo tra una casa in classe A e una in classe G può arrivare al <strong>30%</strong>.</p>

      <h3>2. Difficoltà di vendita</h3>

      <p>Chi compra oggi guarda la classe energetica. Una casa inefficiente è sempre meno appetibile — e richiede sconti importanti.</p>

      <h3>3. Bollette sempre più alte</h3>

      <p>Con i costi dell'energia in aumento, una casa inefficiente ti costa sempre di più ogni anno che passa.</p>

      <h3>4. Possibili sanzioni</h3>

      <p>Non sono ancora definite, ma la Direttiva prevede che gli Stati membri introducano misure per garantire il rispetto degli obiettivi. Potrebbero arrivare.</p>

      <h2 id="infissi">Perché gli infissi sono il PRIMO passo</h2>

      <p>Tra tutti gli interventi possibili, la sostituzione degli infissi è:</p>

      <ul>
        <li><strong>Uno dei più efficaci:</strong> può far guadagnare 1-2 classi energetiche</li>
        <li><strong>Uno dei meno invasivi:</strong> 1-2 giorni di lavoro, nessun cantiere</li>
        <li><strong>Uno dei più accessibili:</strong> costo contenuto rispetto a cappotto o caldaia</li>
        <li><strong>Immediatamente tangibile:</strong> senti subito la differenza in comfort e bollette</li>
      </ul>

      <p>Per molte case, sostituire gli infissi è sufficiente per passare da G/F a E — l'obiettivo del 2030.</p>

      <h2 id="timeline">Timeline: cosa fare e quando</h2>

      <table>
        <tr><th>Anno</th><th>Cosa succede</th><th>Cosa dovresti fare</th></tr>
        <tr><td><strong>2026</strong></td><td>Bonus 50% ancora attivo</td><td>Sostituire infissi ORA per massimo risparmio</td></tr>
        <tr><td><strong>2027</strong></td><td>Bonus scende al 36%</td><td>Valutare altri interventi (caldaia, VMC)</td></tr>
        <tr><td><strong>2028-2029</strong></td><td>Corsa agli adeguamenti</td><td>Evitare la ressa, i prezzi saliranno</td></tr>
        <tr><td><strong>2030</strong></td><td>Scadenza classe E</td><td>Essere già in regola</td></tr>
      </table>

      <h2 id="agire-ora">4 motivi per agire ORA</h2>

      <ol>
        <li><strong>Bonus 50% ancora disponibile</strong> — potrebbe scendere o sparire</li>
        <li><strong>Eviti la corsa dell'ultimo momento</strong> — prezzi normali e tempi ragionevoli</li>
        <li><strong>Inizi subito a risparmiare</strong> — ogni mese che aspetti è denaro perso</li>
        <li><strong>Valorizzi il tuo immobile</strong> — più facile da vendere o affittare</li>
      </ol>

      <h2 id="primo-passo">Il primo passo: capire dove sei</h2>

      <p>Conosci la classe energetica della tua casa? Se non hai un APE (Attestato di Prestazione Energetica) recente, è il momento di farlo.</p>

      <p>In alternativa, <a href="/contatti"><strong>richiedi un sopralluogo gratuito</strong></a>. Ti aiuteremo a capire:</p>

      <ul>
        <li>Qual è lo stato attuale dei tuoi infissi</li>
        <li>Quanto puoi migliorare sostituendoli</li>
        <li>Che impatto avrà sulla classe energetica</li>
        <li>Quanto puoi risparmiare in bolletta</li>
      </ul>

      <p>Non aspettare che sia troppo tardi.</p>
    `,
  },

  // ============================================
  // ARTICOLO 11: 5 ERRORI
  // ============================================
  {
    id: "errori-sostituzione-infissi",
    slug: "5-errori-sostituzione-infissi-da-evitare",
    title: "5 Errori da Evitare nella Sostituzione degli Infissi",
    metaTitle: "5 Errori Sostituzione Infissi da Evitare | I Profili",
    metaDescription: "Gli sbagli più comuni che fanno lievitare i costi e rovinano il risultato. Guida pratica per evitarli e ottenere il massimo dai nuovi serramenti.",
    excerpt: "\"Ho appena messo infissi nuovi e ho ancora condensa.\" Ogni settimana riceviamo chiamate così. Ecco i 5 errori che hanno fatto — e come evitarli.",
    date: "20 Dicembre 2025",
    dateISO: "2025-12-20",
    category: "Guide",
    tags: ["errori infissi", "guida pratica", "consigli"],
    image: windowBefore1,
    imageAlt: "Installazione corretta di infissi in PVC",
    author: {
      name: "Marco Bianchi",
      role: "Consulente Tecnico",
    },
    readingTime: "6 min",
    relatedArticles: ["come-scegliere-infissi", "pvc-vs-alluminio"],
    content: `
      <p><strong>Ogni settimana riceviamo chiamate disperate:</strong></p>

      <blockquote>
        <p>"Ho appena messo infissi nuovi e ho ancora condensa."</p>
        <p>"Il preventivo era 4.000€, alla fine ho pagato 7.000€."</p>
        <p>"L'installatore è sparito e ora ho infiltrazioni."</p>
      </blockquote>

      <p>Storie diverse, ma errori comuni. Ecco i <strong>5 sbagli più frequenti</strong> che fanno lievitare i costi e rovinano il risultato — e come evitarli.</p>

      <h2 id="errore-1">Errore #1: Scegliere solo in base al prezzo più basso</h2>

      <p><strong>La storia:</strong> Luca ha ricevuto 3 preventivi. Ha scelto il più economico, 30% in meno degli altri. "Che affare!" pensava.</p>

      <p>6 mesi dopo: i sigillanti si sono staccati, gli infissi "ballano" nel telaio, l'installatore non risponde più al telefono.</p>

      <p><strong>Perché succede:</strong> Il preventivo più basso spesso nasconde:</p>

      <ul>
        <li>Materiali di scarsa qualità (profili sottili, vetri base)</li>
        <li>Posa approssimativa (meno ore = meno cura)</li>
        <li>Garanzie inesistenti o non rispettate</li>
        <li>Costi nascosti che emergono dopo</li>
      </ul>

      <p><strong>Come evitarlo:</strong> Confronta i preventivi voce per voce, non solo i totali. Se un prezzo è molto più basso, chiediti cosa manca.</p>

      <h2 id="errore-2">Errore #2: Sottovalutare la qualità della posa</h2>

      <p><strong>La storia:</strong> Maria ha comprato infissi eccellenti, top di gamma. Ma ha "risparmiato" sulla posa, affidandola a un tuttofare.</p>

      <p>Risultato: spifferi ovunque, condensa peggio di prima, prestazioni termiche da infisso entry-level.</p>

      <p><strong>Perché succede:</strong> Un infisso da 1.000€ installato male perde il 70% delle sue prestazioni. La posa non è un optional — è fondamentale quanto il prodotto.</p>

      <p><strong>Come evitarlo:</strong> Scegli installatori certificati con garanzia scritta sulla posa. Noi offriamo 5 anni di garanzia sul montaggio.</p>

      <h2 id="errore-3">Errore #3: Non considerare la ventilazione</h2>

      <p><strong>La storia:</strong> Giovanni ha messo infissi nuovissimi, super-ermetici. Dopo 2 mesi, la condensa era peggio di prima. Come è possibile?</p>

      <p><strong>Perché succede:</strong> I vecchi infissi "respiravano" (cioè avevano spifferi). Quelli nuovi no. Se la casa non ha un ricambio d'aria adeguato, l'umidità resta intrappolata e si condensa.</p>

      <p><strong>Come evitarlo:</strong> Valuta infissi con microventilazione integrata o considera l'installazione di un sistema VMC (Ventilazione Meccanica Controllata).</p>

      <h2 id="errore-4">Errore #4: Trascurare i cassonetti</h2>

      <p><strong>La storia:</strong> Paolo ha investito 8.000€ in infissi premium. Ma ha tenuto i vecchi cassonetti "per risparmiare".</p>

      <p>Risultato: i cassonetti sono "buchi" termici. Disperdono quanto i vecchi infissi. Tutto l'investimento dimezzato.</p>

      <p><strong>Perché succede:</strong> I cassonetti delle tapparelle sono spesso il punto debole ignorato. I vecchi modelli non sono isolati e annullano i benefici dei nuovi infissi.</p>

      <p><strong>Come evitarlo:</strong> Includi sempre i cassonetti nel preventivo. Non ha senso mettere una porta blindata e lasciare la finestra aperta.</p>

      <h2 id="errore-5">Errore #5: Fidarsi di garanzie solo verbali</h2>

      <p><strong>La storia:</strong> "10 anni di garanzia!" aveva promesso l'installatore a Francesca. Quando dopo 3 anni una finestra ha iniziato a fare acqua, lui non si è più fatto trovare.</p>

      <p><strong>Perché succede:</strong> Le promesse verbali non valgono nulla. Senza garanzia scritta nel contratto, non hai tutele legali.</p>

      <p><strong>Come evitarlo:</strong> Esigi sempre:</p>

      <ul>
        <li>Garanzia scritta nel contratto</li>
        <li>Dettaglio di cosa copre (prodotto, posa, vetri)</li>
        <li>Durata specifica (minimo 10 anni prodotto, 5 anni posa)</li>
        <li>Penali per ritardi (noi le includiamo sempre!)</li>
      </ul>

      <h2 id="soluzione">La nostra risposta: il Sistema Zero Pensieri</h2>

      <p>Abbiamo creato il nostro sistema proprio per eliminare tutti questi rischi:</p>

      <ul>
        <li><strong>Preventivo trasparente:</strong> ogni voce è chiara, nessuna sorpresa</li>
        <li><strong>Posa certificata:</strong> installatori formati, garanzia 5 anni</li>
        <li><strong>Valutazione completa:</strong> ti consigliamo sempre sui cassonetti e la ventilazione</li>
        <li><strong>Garanzie scritte:</strong> 10 anni prodotto, tutto nero su bianco</li>
        <li><strong>Referenze verificabili:</strong> chiedi a chi ha già lavorato con noi</li>
      </ul>

      <p><a href="/contatti"><strong>→ Richiedi un preventivo senza rischi</strong></a></p>
    `,
  },

  // ============================================
  // ARTICOLO 12: PVC VS ALLUMINIO
  // ============================================
  {
    id: "pvc-vs-alluminio",
    slug: "pvc-vs-alluminio-quale-scegliere-infissi",
    title: "PVC vs Alluminio: Quale Scegliere per i Tuoi Infissi?",
    metaTitle: "PVC vs Alluminio Infissi: Confronto Completo 2026",
    metaDescription: "Confronto dettagliato tra infissi in PVC e alluminio. Pro, contro, prezzi e situazioni ideali per ciascun materiale.",
    excerpt: "PVC o alluminio? La risposta dipende da UNA sola cosa: cosa ti serve davvero. In 3 minuti saprai quale scegliere.",
    date: "15 Dicembre 2025",
    dateISO: "2025-12-15",
    category: "Guide",
    tags: ["PVC", "alluminio", "confronto materiali"],
    image: windowAfter2,
    imageAlt: "Confronto visivo tra infisso PVC e alluminio",
    author: {
      name: "Marco Bianchi",
      role: "Consulente Tecnico",
    },
    readingTime: "7 min",
    relatedArticles: ["come-scegliere-infissi", "errori-sostituzione-infissi"],
    content: `
      <p><strong>PVC o alluminio?</strong></p>

      <p>È la domanda che tutti fanno. E la risposta che trovi online di solito è: "dipende".</p>

      <p>Che non ti aiuta per niente.</p>

      <p>Questa guida è diversa. In 3 minuti saprai esattamente quale scegliere — basandoti su cosa ti serve davvero, non su tecnicismi inutili.</p>

      <h2 id="confronto-diretto">Il confronto diretto</h2>

      <table>
        <tr><th>Caratteristica</th><th>PVC</th><th>Alluminio</th><th>Vincitore</th></tr>
        <tr><td><strong>Isolamento termico</strong></td><td>Uw 0.8-1.2</td><td>Uw 1.2-1.8</td><td>PVC</td></tr>
        <tr><td><strong>Prezzo</strong></td><td>Base</td><td>+20-30%</td><td>PVC</td></tr>
        <tr><td><strong>Manutenzione</strong></td><td>Zero</td><td>Minima</td><td>PVC</td></tr>
        <tr><td><strong>Estetica minimale</strong></td><td>Profili medi</td><td>Profili sottili</td><td>Alluminio</td></tr>
        <tr><td><strong>Grandi dimensioni</strong></td><td>Fino a 2.5m</td><td>Oltre 3m</td><td>Alluminio</td></tr>
        <tr><td><strong>Durata</strong></td><td>30+ anni</td><td>40+ anni</td><td>Pari</td></tr>
      </table>

      <h2 id="isolamento">Isolamento termico</h2>

      <p><strong>PVC:</strong> eccellente isolamento naturale. I profili a 6 camere raggiungono Uw 0.8-1.0 W/m²K senza sforzo.</p>

      <p><strong>Alluminio:</strong> il metallo conduce il calore, quindi serve un "taglio termico" (una barriera isolante nel profilo). Anche i migliori alluminio faticano a scendere sotto Uw 1.2.</p>

      <p><strong>Verdetto:</strong> se l'isolamento è la priorità, <strong>PVC vince</strong>.</p>

      <h2 id="estetica">Estetica e design</h2>

      <p><strong>PVC:</strong> i profili sono più spessi (70-90mm) per garantire l'isolamento. Ampia gamma di colori, anche effetto legno molto realistico.</p>

      <p><strong>Alluminio:</strong> profili sottilissimi (anche 35mm), linee minimali, design contemporaneo. Perfetto per architettura moderna.</p>

      <p><strong>Verdetto:</strong> per un look ultra-minimale, <strong>alluminio vince</strong>. Per tutto il resto, pari.</p>

      <h2 id="manutenzione">Manutenzione nel tempo</h2>

      <p><strong>PVC:</strong> zero manutenzione. Basta pulire con acqua e sapone. Non sbiadisce, non si rovina, non serve verniciatura.</p>

      <p><strong>Alluminio:</strong> manutenzione minima, ma nel tempo può ossidarsi, soprattutto in zone marine o molto inquinate. Può richiedere trattamenti periodici.</p>

      <p><strong>Verdetto:</strong> <strong>PVC vince</strong> per semplicità.</p>

      <h2 id="prezzo">Prezzo</h2>

      <p><strong>PVC:</strong> il più economico tra i materiali di qualità.</p>

      <p><strong>Alluminio:</strong> costa mediamente il 20-30% in più a parità di prestazioni.</p>

      <p><strong>Verdetto:</strong> <strong>PVC vince</strong> sul portafoglio.</p>

      <h2 id="dimensioni">Per grandi vetrate</h2>

      <p><strong>PVC:</strong> ottimo fino a 2.5 metri. Oltre, servono rinforzi in acciaio che aumentano peso e costo.</p>

      <p><strong>Alluminio:</strong> la resistenza strutturale permette vetrate anche oltre 3 metri senza problemi.</p>

      <p><strong>Verdetto:</strong> per scorrevoli grandi e vetrate ampie, <strong>alluminio vince</strong>.</p>

      <h2 id="scegli-pvc">Scegli PVC se...</h2>

      <ul>
        <li>✓ Cerchi il <strong>miglior rapporto qualità-prezzo</strong></li>
        <li>✓ Vuoi <strong>zero manutenzione</strong></li>
        <li>✓ L'<strong>isolamento termico</strong> è la tua priorità</li>
        <li>✓ Le tue finestre sono di dimensioni standard o medie</li>
        <li>✓ Vivi in <strong>appartamento o villetta</strong></li>
      </ul>

      <h2 id="scegli-alluminio">Scegli Alluminio se...</h2>

      <ul>
        <li>✓ Hai <strong>grandi vetrate</strong> (oltre 2.5m)</li>
        <li>✓ Vuoi un <strong>design ultra-minimale</strong></li>
        <li>✓ La tua casa ha <strong>architettura moderna</strong></li>
        <li>✓ Il <strong>budget non è un problema</strong></li>
        <li>✓ Stai progettando <strong>scorrevoli di grandi dimensioni</strong></li>
      </ul>

      <h2 id="verdetto">Il verdetto finale</h2>

      <p>Per l'<strong>80% delle case in Lombardia</strong>, il PVC è la scelta giusta. Offre le migliori prestazioni termiche, zero manutenzione e un prezzo accessibile.</p>

      <p>L'alluminio ha senso in situazioni specifiche: grandi vetrate, design contemporaneo spinto, scorrevoli importanti.</p>

      <p>Non sai cosa scegliere? <a href="/contatti"><strong>Contattaci per una consulenza gratuita</strong></a>. Ti aiuteremo a trovare la soluzione perfetta per la TUA casa.</p>
    `,
  },
];

export const articles: Article[] = [
  ...originalArticles,
  ...techArticles,
  ...practicalArticles,
  ...fiscalArticles,
  ...productArticles,
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find((article) => article.slug === slug || article.id === slug);
};

export const getRelatedArticles = (articleId: string): Article[] => {
  const article = articles.find((a) => a.id === articleId);
  if (!article) return [];
  return articles.filter((a) => article.relatedArticles.includes(a.id));
};

export const getArticlesByCategory = (category: string): Article[] => {
  if (category === "Tutti") return articles;
  return articles.filter((article) => article.category === category);
};
