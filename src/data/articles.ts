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
 
 export const articles: Article[] = [
   // NUOVI ARTICOLI SEO-ORIENTED
   {
     id: "infissi-milano",
     slug: "infissi-milano-guida-completa-2026",
     title: "Infissi a Milano: Guida Completa alla Sostituzione nel 2026",
     metaTitle: "Infissi Milano 2026: Prezzi, Bonus e Installatori | Guida",
     metaDescription: "Tutto sugli infissi a Milano: prezzi medi, bonus 50%, installatori certificati. Guida completa con tempistiche e consigli pratici per milanesi.",
     excerpt: "Guida completa agli infissi a Milano: dalle normative condominiali ai prezzi quartiere per quartiere, tutto quello che devi sapere prima di sostituire i serramenti.",
     date: "3 Febbraio 2026",
     dateISO: "2026-02-03",
     category: "Guide",
     tags: ["infissi Milano", "serramenti Milano", "finestre Milano", "bonus 50% Milano"],
     image: "/placeholder.svg",
     imageAlt: "Infissi moderni in un appartamento a Milano",
     author: {
       name: "Marco Bianchi",
       role: "Consulente Tecnico",
     },
     readingTime: "10 min",
     relatedArticles: ["serramenti-lombardia", "preventivo-infissi", "bonus-50-2025"],
     content: `
       <h2 id="perche-milano">Perché Milano ha esigenze specifiche per gli infissi</h2>
       <p>Milano presenta sfide uniche per chi deve sostituire gli infissi. Il <strong>clima continentale</strong> con inverni rigidi (temperature fino a -5°C) e estati afose (oltre 35°C) richiede serramenti con prestazioni termiche superiori.</p>
       <p>Inoltre, l'<strong>inquinamento acustico</strong> del traffico urbano rende fondamentale un abbattimento sonoro di almeno 40 dB per vivere in tranquillità.</p>
       
       <h2 id="normative-condominio">Normative condominiali a Milano</h2>
       <p>La maggior parte degli appartamenti milanesi si trova in <strong>condominio</strong>, e questo comporta vincoli specifici:</p>
       <ul>
         <li><strong>Colore esterno uniforme:</strong> molti regolamenti impongono lo stesso colore per tutti gli infissi</li>
         <li><strong>Autorizzazione assembleare:</strong> spesso necessaria per modifiche estetiche</li>
         <li><strong>Vincoli storici:</strong> in zona 1 (centro storico) e aree tutelate servono permessi specifici</li>
       </ul>
       <p>Il nostro team si occupa di verificare tutte le normative applicabili prima di procedere.</p>
       
       <h2 id="quartieri">Infissi per quartiere: esigenze diverse</h2>
       <h3>Centro storico e Brera</h3>
       <p>Vincoli architettonici richiedono infissi con <strong>estetica tradizionale</strong>. Consigliamo PVC effetto legno o legno-alluminio per rispettare il contesto storico mantenendo prestazioni moderne.</p>
       
       <h3>Navigli e Porta Romana</h3>
       <p>Zone caratterizzate da <strong>palazzi d'epoca</strong> con finestre ad arco o forme irregolari. Produciamo su misura qualsiasi forma, anche le più complesse.</p>
       
       <h3>City Life e Porta Nuova</h3>
       <p>Architettura moderna che richiede <strong>grandi vetrate</strong> e design minimale. Il nostro sistema Lumier con profili ultra-sottili è perfetto per questi contesti.</p>
       
       <h3>Zone periferiche (Bovisa, Bicocca, Lambrate)</h3>
       <p>Priorità al <strong>rapporto qualità-prezzo</strong>. Il sistema Domus offre prestazioni top a costi accessibili, ideale per famiglie.</p>
       
       <h2 id="prezzi-milano">Prezzi medi infissi a Milano nel 2026</h2>
       <p>I prezzi a Milano sono mediamente più alti del 10-15% rispetto alla provincia, principalmente per i costi logistici (ZTL, parcheggio, trasporto).</p>
       <table>
         <tr><th>Tipologia</th><th>Prezzo medio al mq (installato)</th></tr>
         <tr><td>PVC standard 5 camere</td><td>280-350€</td></tr>
         <tr><td>PVC premium 6 camere (Domus)</td><td>400-550€</td></tr>
         <tr><td>Alluminio a taglio termico</td><td>450-650€</td></tr>
         <tr><td>Legno-alluminio</td><td>600-900€</td></tr>
       </table>
       <p><strong>Nota:</strong> prezzi indicativi per finestre standard 120x140 cm. I prezzi finali dipendono da dimensioni, tipologia di apertura e accessori.</p>
       
       <h2 id="tempistiche">Tempistiche di installazione a Milano</h2>
       <p>Per un appartamento medio (5-7 finestre) le tempistiche sono:</p>
       <ul>
         <li><strong>Sopralluogo e preventivo:</strong> 3-5 giorni lavorativi</li>
         <li><strong>Produzione:</strong> 4-6 settimane dalla conferma ordine</li>
         <li><strong>Installazione:</strong> 1-2 giorni</li>
         <li><strong>Totale dalla firma:</strong> 5-7 settimane</li>
       </ul>
       <p>⚠️ In periodi di alta richiesta (marzo-maggio, settembre-novembre) i tempi possono allungarsi. Consigliamo di prenotare con anticipo.</p>
       
       <h2 id="case-study">Caso studio: appartamento Navigli</h2>
       <p><strong>Cliente:</strong> Mario, 45 anni, appartamento 85mq con 6 finestre ad arco</p>
       <p><strong>Problema:</strong> Infissi in legno anni '70, spifferi, condensa continua, bollette gas da 280€/mese in inverno</p>
       <p><strong>Soluzione:</strong> Sistema Domus con vetro triplo, cassonetti coibentati, persiane in alluminio effetto legno</p>
       <p><strong>Risultato:</strong></p>
       <ul>
         <li>Bolletta gas ridotta a 170€/mese (-40%)</li>
         <li>Zero condensa e muffe</li>
         <li>Rumore traffico abbattuto del 70%</li>
         <li>Investimento recuperato in 6 anni con bonus 50%</li>
       </ul>
       
       <h2 id="conclusioni">Perché scegliere I Profili a Milano</h2>
       <p>Siamo specializzati in installazioni a Milano da oltre 15 anni. Conosciamo ogni quartiere, ogni normativa, ogni problematica logistica.</p>
       <p>Offriamo <strong>sopralluogo gratuito</strong>, gestione pratiche condominiali inclusa, e il nostro Sistema Zero Pensieri con garanzia 10 anni.</p>
       <p><a href="/contatti">Richiedi un preventivo gratuito</a> e scopri perché oltre 500 famiglie milanesi hanno scelto noi.</p>
     `,
   },
   {
     id: "serramenti-lombardia",
     slug: "serramenti-lombardia-come-scegliere-2026",
     title: "I Migliori Serramenti in Lombardia: Come Scegliere nel 2026",
     metaTitle: "Serramenti Lombardia 2026: Guida alla Scelta | I Profili",
     metaDescription: "Guida ai serramenti in Lombardia. Confronto materiali, zone climatiche E ed F, e consigli per scegliere l'installatore giusto nella tua provincia.",
     excerpt: "Guida completa ai serramenti in Lombardia: dalle zone climatiche ai produttori locali, tutto per fare la scelta giusta nella tua provincia.",
     date: "1 Febbraio 2026",
     dateISO: "2026-02-01",
     category: "Guide",
     tags: ["serramenti Lombardia", "infissi Lombardia", "zone climatiche", "installatori certificati"],
     image: "/placeholder.svg",
     imageAlt: "Mappa della Lombardia con zone climatiche per serramenti",
     author: {
       name: "Marco Bianchi",
       role: "Consulente Tecnico",
     },
     readingTime: "9 min",
     relatedArticles: ["infissi-milano", "preventivo-infissi", "come-scegliere-infissi"],
     content: `
       <h2 id="lombardia-clima">Il clima lombardo e gli infissi</h2>
       <p>La Lombardia è una delle regioni italiane con il <strong>maggior range climatico</strong>: dalle zone alpine della Valtellina (zona F) alla pianura padana (zona E). Questo impatta direttamente sui requisiti dei serramenti.</p>
       
       <h2 id="zone-climatiche">Zone climatiche in Lombardia</h2>
       <p>La normativa italiana divide il territorio in zone climatiche da A a F. In Lombardia troviamo:</p>
       <h3>Zona E (la maggior parte della regione)</h3>
       <p>Include Milano, Brescia, Bergamo, Monza, Varese, Como, Pavia, Lodi, Cremona, Mantova.</p>
       <ul>
         <li><strong>Trasmittanza massima richiesta (Uw):</strong> 1.4 W/m²K</li>
         <li><strong>Consigliato:</strong> 1.0 W/m²K o inferiore per bonus fiscali</li>
         <li><strong>Vetro:</strong> doppio vetro basso emissivo o triplo vetro</li>
       </ul>
       
       <h3>Zona F (aree montane)</h3>
       <p>Include Sondrio, Valtellina, zone prealpine sopra i 900m.</p>
       <ul>
         <li><strong>Trasmittanza massima richiesta (Uw):</strong> 1.0 W/m²K</li>
         <li><strong>Consigliato:</strong> 0.8 W/m²K per prestazioni ottimali</li>
         <li><strong>Vetro:</strong> triplo vetro obbligatorio</li>
       </ul>
       
       <h2 id="province">Serramenti provincia per provincia</h2>
       <h3>Milano e Monza-Brianza</h3>
       <p>Le zone più densamente popolate. Priorità a <strong>isolamento acustico</strong> (traffico intenso) e design contemporaneo. Mercato competitivo con molte opzioni.</p>
       
       <h3>Bergamo e Brescia</h3>
       <p>Zone industriali con buon potere d'acquisto. Forte richiesta di <strong>prodotti premium</strong> e soluzioni su misura per ville.</p>
       
       <h3>Como e Varese</h3>
       <p>Molte ville storiche e case indipendenti. Alta richiesta di <strong>legno-alluminio</strong> e soluzioni esteticamente curate.</p>
       
       <h3>Sondrio e zone montane</h3>
       <p><strong>Prestazioni termiche estreme</strong> sono la priorità. Triplo vetro obbligatorio, profili con spessore aumentato.</p>
       
       <h2 id="produttori">Produttori locali vs nazionali</h2>
       <p>La Lombardia ospita alcuni dei migliori produttori di serramenti italiani. Ecco cosa considerare:</p>
       <h3>Vantaggi produttori locali</h3>
       <ul>
         <li>Tempistiche di consegna più brevi</li>
         <li>Assistenza post-vendita più rapida</li>
         <li>Conoscenza delle normative regionali</li>
         <li>Minor impatto ambientale per trasporto</li>
       </ul>
       <h3>Quando scegliere brand nazionali</h3>
       <ul>
         <li>Progetti di grandi dimensioni</li>
         <li>Richieste molto specifiche di design</li>
         <li>Budget elevato per prodotti luxury</li>
       </ul>
       
       <h2 id="certificazioni">Certificazioni da richiedere</h2>
       <p>Quando scegli un installatore in Lombardia, verifica sempre:</p>
       <ul>
         <li><strong>Certificazione EN 14351:</strong> obbligatoria per marcatura CE</li>
         <li><strong>Garanzia scritta:</strong> minimo 5 anni su prodotto e posa</li>
         <li><strong>Assicurazione RC:</strong> copertura per eventuali danni</li>
         <li><strong>Referenze verificabili:</strong> almeno 3 clienti contattabili</li>
       </ul>
       
       <h2 id="come-scegliere">5 criteri per scegliere l'installatore giusto</h2>
       <ol>
         <li><strong>Esperienza locale:</strong> quanti anni opera nella tua provincia?</li>
         <li><strong>Preventivo dettagliato:</strong> tutte le voci devono essere chiare</li>
         <li><strong>Showroom visitabile:</strong> poter toccare i prodotti è fondamentale</li>
         <li><strong>Recensioni online:</strong> controlla Google, Facebook, Trustpilot</li>
         <li><strong>Garanzie scritte:</strong> diffida di promesse solo verbali</li>
       </ol>
       
       <h2 id="conclusioni">Operiamo in tutta la Lombardia</h2>
       <p>I Profili copre <strong>tutte le province lombarde</strong> con un network di installatori certificati. Che tu sia a Milano centro o in un comune montano della Valtellina, garantiamo lo stesso livello di qualità e assistenza.</p>
       <p><a href="/contatti">Contattaci</a> per un sopralluogo gratuito nella tua zona.</p>
     `,
   },
   {
     id: "preventivo-infissi",
     slug: "preventivo-infissi-cosa-controllare",
     title: "Preventivo Infissi: 10 Voci da Controllare Prima di Firmare",
     metaTitle: "Preventivo Infissi: 10 Voci Essenziali da Controllare",
     metaDescription: "Come leggere un preventivo infissi senza sorprese. Le 10 voci essenziali, i costi nascosti e cosa pretendere dall'installatore.",
     excerpt: "Guida pratica per leggere un preventivo infissi: le 10 voci che devi controllare, i costi nascosti da evitare e le red flags che segnalano problemi.",
     date: "28 Gennaio 2026",
     dateISO: "2026-01-28",
     category: "Guide",
     tags: ["preventivo infissi", "costi infissi", "confronto preventivi", "guida acquisto"],
     image: "/placeholder.svg",
     imageAlt: "Preventivo dettagliato per infissi con voci evidenziate",
     author: {
       name: "Laura Colombo",
       role: "Consulente Fiscale",
     },
     readingTime: "8 min",
     relatedArticles: ["infissi-milano", "prezzi-pvc", "costi-sostituzione"],
     content: `
       <h2 id="introduzione">Perché il preventivo è così importante</h2>
       <p>Un preventivo ben fatto è la base di un'installazione senza sorprese. Purtroppo, molti preventivi sono volutamente vaghi per nascondere <strong>costi extra</strong> che emergeranno solo a lavori iniziati.</p>
       <p>Ecco le 10 voci che devi sempre controllare.</p>
       
       <h2 id="voce-1">1. Descrizione precisa dei prodotti</h2>
       <p>Deve essere indicato:</p>
       <ul>
         <li><strong>Marca e modello</strong> del profilo (es. "Domus 76mm 6 camere")</li>
         <li><strong>Tipo di vetro</strong> (doppio, triplo, basso emissivo, valori Ug)</li>
         <li><strong>Colore</strong> interno ed esterno</li>
         <li><strong>Tipologia apertura</strong> (battente, anta-ribalta, scorrevole)</li>
       </ul>
       <p>🚩 <strong>Red flag:</strong> descrizioni generiche come "infisso in PVC bianco"</p>
       
       <h2 id="voce-2">2. Misure precise di ogni infisso</h2>
       <p>Ogni finestra deve avere le sue misure (larghezza x altezza). Diffida di preventivi "a corpo" che non specificano le dimensioni.</p>
       
       <h2 id="voce-3">3. Costo di installazione (posa in opera)</h2>
       <p>La posa deve essere voce separata e specificare:</p>
       <ul>
         <li>Tipologia posa (a filo muro, in battuta, con controtelaio)</li>
         <li>Materiali di sigillatura (schiume, siliconi, nastri)</li>
         <li>Ore di lavoro previste</li>
       </ul>
       <p>🚩 <strong>Red flag:</strong> posa inclusa senza dettagli = spesso posa approssimativa</p>
       
       <h2 id="voce-4">4. Rimozione e smaltimento vecchi infissi</h2>
       <p>Lo smaltimento ha costi (tipicamente <strong>20-40€ per infisso</strong>). Se non è indicato, probabilmente ti verrà addebitato a sorpresa.</p>
       
       <h2 id="voce-5">5. Cassonetti e controtelai</h2>
       <p>I vecchi cassonetti sono spesso il punto debole dell'isolamento. Il preventivo deve specificare:</p>
       <ul>
         <li>Se i cassonetti sono inclusi o esclusi</li>
         <li>Tipologia (coibentato, ispezionabile)</li>
         <li>Eventuale adattamento murario necessario</li>
       </ul>
       
       <h2 id="voce-6">6. Accessori: maniglie, soglie, coprifili</h2>
       <p>Sembrano dettagli, ma possono aggiungere <strong>centinaia di euro</strong> al totale. Chiedi sempre che siano specificati.</p>
       
       <h2 id="voce-7">7. Opere murarie e ripristini</h2>
       <p>La voce più subdola. Deve indicare:</p>
       <ul>
         <li>Cosa è incluso (stuccatura base, tinteggiatura?)</li>
         <li>Cosa è escluso e a che costo</li>
         <li>Chi si occupa della pulizia finale</li>
       </ul>
       
       <h2 id="voce-8">8. Tempistiche garantite</h2>
       <p>Un preventivo serio indica:</p>
       <ul>
         <li>Data prevista di consegna</li>
         <li>Durata installazione</li>
         <li>Penali per ritardi (noi le includiamo sempre!)</li>
       </ul>
       
       <h2 id="voce-9">9. Garanzie scritte</h2>
       <p>Cerca:</p>
       <ul>
         <li><strong>Garanzia prodotto:</strong> almeno 10 anni</li>
         <li><strong>Garanzia posa:</strong> almeno 5 anni</li>
         <li><strong>Garanzia vetri:</strong> specifica per rottura termica</li>
       </ul>
       
       <h2 id="voce-10">10. Gestione pratiche bonus fiscali</h2>
       <p>Per il bonus 50% serve:</p>
       <ul>
         <li>Pratica ENEA (chi la fa? è inclusa?)</li>
         <li>Documentazione tecnica per detrazione</li>
         <li>Asseverazione se richiesta</li>
       </ul>
       <p>Con I Profili la pratica ENEA è <strong>sempre inclusa gratuitamente</strong>.</p>
       
       <h2 id="confronto">Come confrontare più preventivi</h2>
       <p>Non confrontare mai solo il totale! Crea una tabella con tutte le voci e confronta voce per voce. Il preventivo più economico potrebbe avere molti "esclusi" che lo renderanno più caro.</p>
       
       <h2 id="richiedi">Richiedi un preventivo trasparente</h2>
       <p>I nostri preventivi seguono tutti questi criteri. Ogni voce è chiara, dettagliata e senza sorprese.</p>
       <p><a href="/contatti">Richiedi il tuo preventivo gratuito</a></p>
     `,
   },
   {
     id: "prezzi-pvc",
     slug: "prezzi-infissi-pvc-2026-listino",
     title: "Prezzi Infissi PVC nel 2026: Listino Aggiornato e Confronto",
     metaTitle: "Prezzi Infissi PVC 2026: Listino Completo | I Profili",
     metaDescription: "Quanto costano gli infissi in PVC nel 2026? Listino prezzi aggiornato, confronto tra fasce e come risparmiare senza rinunciare alla qualità.",
     excerpt: "Listino prezzi infissi PVC aggiornato al 2026: quanto costa una finestra, quali fattori influenzano il prezzo, confronto tra fasce entry-level e premium.",
     date: "25 Gennaio 2026",
     dateISO: "2026-01-25",
     category: "Guide",
     tags: ["prezzi infissi PVC", "listino infissi", "costo finestre", "preventivo infissi"],
     image: "/placeholder.svg",
     imageAlt: "Listino prezzi infissi PVC con tabella comparativa",
     author: {
       name: "Marco Bianchi",
       role: "Consulente Tecnico",
     },
     readingTime: "11 min",
     relatedArticles: ["preventivo-infissi", "costi-sostituzione", "come-scegliere-infissi"],
     content: `
       <h2 id="quanto-costa">Quanto costa un infisso in PVC nel 2026?</h2>
       <p>La domanda più frequente che riceviamo. La risposta dipende da molti fattori, ma ecco una <strong>guida realistica</strong> basata sui prezzi di mercato.</p>
       
       <h2 id="prezzi-riferimento">Prezzi di riferimento per tipologia</h2>
       <p>Prezzi indicativi per finestra standard <strong>120x140 cm</strong>, installazione inclusa:</p>
       <table>
         <tr><th>Categoria</th><th>Prezzo finestra singola</th><th>Caratteristiche</th></tr>
         <tr><td><strong>Entry-level</strong></td><td>300-400€</td><td>PVC 5 camere, doppio vetro, apertura battente</td></tr>
         <tr><td><strong>Standard</strong></td><td>450-600€</td><td>PVC 6 camere, doppio vetro basso emissivo, anta-ribalta</td></tr>
         <tr><td><strong>Premium</strong></td><td>650-900€</td><td>PVC 6+ camere, triplo vetro, sicurezza RC2</td></tr>
         <tr><td><strong>Top di gamma</strong></td><td>900-1.200€</td><td>Sistemi evoluti, RC3, finiture speciali</td></tr>
       </table>
       
       <h2 id="fattori-prezzo">8 fattori che influenzano il prezzo</h2>
       <h3>1. Numero di camere del profilo</h3>
       <p>Da 3 a 7 camere. Più camere = migliore isolamento = prezzo più alto. Per la Lombardia consigliamo <strong>minimo 5 camere</strong>.</p>
       
       <h3>2. Tipologia di vetro</h3>
       <ul>
         <li><strong>Doppio vetro standard:</strong> base di partenza</li>
         <li><strong>Doppio vetro basso emissivo:</strong> +15-20%</li>
         <li><strong>Triplo vetro:</strong> +30-40%</li>
         <li><strong>Vetro stratificato acustico:</strong> +10-15%</li>
       </ul>
       
       <h3>3. Tipo di apertura</h3>
       <ul>
         <li><strong>Battente:</strong> più economico</li>
         <li><strong>Anta-ribalta:</strong> +10-15%</li>
         <li><strong>Scorrevole alzante:</strong> +50-80%</li>
         <li><strong>Bilico (basculante):</strong> +20-30%</li>
       </ul>
       
       <h3>4. Dimensioni</h3>
       <p>Il prezzo al mq diminuisce con dimensioni maggiori, ma il totale aumenta. Finestre molto grandi richiedono rinforzi strutturali extra.</p>
       
       <h3>5. Colore e finiture</h3>
       <ul>
         <li><strong>Bianco:</strong> base</li>
         <li><strong>Pellicolato tinta unita:</strong> +10-15%</li>
         <li><strong>Effetto legno:</strong> +15-25%</li>
         <li><strong>Bicolore (esterno/interno diversi):</strong> +20-30%</li>
       </ul>
       
       <h3>6. Classe di sicurezza</h3>
       <ul>
         <li><strong>Standard:</strong> incluso</li>
         <li><strong>RC1:</strong> +5-10%</li>
         <li><strong>RC2:</strong> +15-25%</li>
         <li><strong>RC3:</strong> +30-40%</li>
       </ul>
       
       <h3>7. Accessori</h3>
       <p>Maniglie design, sensori antintrusione, microventilazione: ogni extra ha il suo costo.</p>
       
       <h3>8. Qualità della posa</h3>
       <p>Una posa professionale con materiali certificati costa di più, ma è l'unica che garantisce le prestazioni promesse.</p>
       
       <h2 id="esempio-appartamento">Esempio: preventivo appartamento tipo</h2>
       <p><strong>Scenario:</strong> appartamento 85mq a Milano con 5 finestre + 1 portafinestra</p>
       <table>
         <tr><th>Voce</th><th>Quantità</th><th>Prezzo unitario</th><th>Totale</th></tr>
         <tr><td>Finestra 120x140 Domus</td><td>4</td><td>550€</td><td>2.200€</td></tr>
         <tr><td>Finestra 80x120 Domus</td><td>1</td><td>450€</td><td>450€</td></tr>
         <tr><td>Portafinestra 140x240</td><td>1</td><td>850€</td><td>850€</td></tr>
         <tr><td>Cassonetti coibentati</td><td>6</td><td>180€</td><td>1.080€</td></tr>
         <tr><td>Smaltimento</td><td>6</td><td>30€</td><td>180€</td></tr>
         <tr><td><strong>TOTALE</strong></td><td></td><td></td><td><strong>4.760€</strong></td></tr>
       </table>
       <p><strong>Con bonus 50%:</strong> costo effettivo 2.380€</p>
       
       <h2 id="roi">Ritorno dell'investimento</h2>
       <p>Considerando un risparmio medio di 400-600€/anno in bollette, l'investimento si ripaga in <strong>5-7 anni</strong> (con bonus). Dopo, è puro risparmio per i successivi 25+ anni.</p>
       
       <h2 id="risparmio-senza-rinunciare">Come risparmiare senza rinunciare alla qualità</h2>
       <ol>
         <li><strong>Approfitta del bonus 50%:</strong> dimezza il costo effettivo</li>
         <li><strong>Sostituisci tutte le finestre insieme:</strong> costi di cantiere ripartiti</li>
         <li><strong>Scegli PVC invece di alluminio:</strong> stesso comfort, 20% meno</li>
         <li><strong>Evita finiture speciali dove non servono:</strong> bianco interno costa meno</li>
         <li><strong>Confronta preventivi:</strong> ma voce per voce, non solo il totale</li>
       </ol>
       
       <h2 id="preventivo">Richiedi un preventivo personalizzato</h2>
       <p>Ogni casa è diversa. <a href="/contatti">Contattaci</a> per un sopralluogo gratuito e un preventivo su misura senza impegno.</p>
     `,
   },
   {
     id: "costi-sostituzione",
     slug: "sostituzione-finestre-costi-2026",
     title: "Sostituzione Finestre: Tutti i Costi da Considerare nel 2026",
     metaTitle: "Costi Sostituzione Finestre 2026: Guida Completa",
     metaDescription: "Costi reali per sostituire le finestre: infissi, posa, smaltimento, pratiche. Budget completo con esempi per appartamento e villa.",
     excerpt: "Guida completa ai costi di sostituzione finestre nel 2026: non solo gli infissi, ma tutte le voci che devi considerare per un budget realistico.",
     date: "22 Gennaio 2026",
     dateISO: "2026-01-22",
     category: "Risparmio",
     tags: ["costi sostituzione finestre", "budget infissi", "spese infissi", "quanto costa"],
     image: "/placeholder.svg",
     imageAlt: "Calcolatrice con budget per sostituzione finestre",
     author: {
       name: "Laura Colombo",
       role: "Consulente Fiscale",
     },
     readingTime: "9 min",
     relatedArticles: ["prezzi-pvc", "preventivo-infissi", "bonus-50-2025"],
     content: `
       <h2 id="oltre-infissi">Oltre il costo degli infissi</h2>
       <p>Quando pianifichi la sostituzione delle finestre, il costo degli infissi è solo una parte. Ecco <strong>tutte le voci</strong> da considerare per un budget realistico.</p>
       
       <h2 id="voci-costo">Le 7 voci di costo principali</h2>
       
       <h3 id="infissi">1. Costo infissi (50-60% del totale)</h3>
       <p>La voce principale. Per PVC di qualità:</p>
       <ul>
         <li>Finestra standard (120x140): 450-650€</li>
         <li>Portafinestra (140x240): 700-1.000€</li>
         <li>Scorrevole grande (300x240): 1.500-2.500€</li>
       </ul>
       
       <h3 id="posa">2. Posa in opera (15-20% del totale)</h3>
       <p>Una posa professionale costa <strong>80-150€ per infisso</strong> e include:</p>
       <ul>
         <li>Rimozione vecchio infisso</li>
         <li>Preparazione vano</li>
         <li>Montaggio nuovo infisso</li>
         <li>Sigillatura e isolamento</li>
         <li>Regolazione ferramenta</li>
       </ul>
       <p>⚠️ La posa "low cost" (30-50€) significa spesso lavoro approssimativo che vanifica le prestazioni dell'infisso.</p>
       
       <h3 id="cassonetti">3. Cassonetti (10-15% del totale)</h3>
       <p>Spesso dimenticati, i cassonetti sono cruciali:</p>
       <ul>
         <li>Cassonetto coibentato standard: 150-250€</li>
         <li>Cassonetto ispezionabile premium: 250-400€</li>
       </ul>
       <p><strong>Consiglio:</strong> non ha senso mettere infissi nuovi e tenere cassonetti vecchi non isolati.</p>
       
       <h3 id="smaltimento">4. Smaltimento (2-5% del totale)</h3>
       <p>I vecchi infissi sono rifiuti speciali:</p>
       <ul>
         <li>Smaltimento per infisso: 20-40€</li>
         <li>Smaltimento cassonetto: 30-50€</li>
       </ul>
       
       <h3 id="opere-murarie">5. Opere murarie e ripristini (5-15% del totale)</h3>
       <p>Variabile a seconda della situazione esistente:</p>
       <ul>
         <li>Stuccatura base: inclusa solitamente</li>
         <li>Ripristino davanzale interno: 30-50€ per finestra</li>
         <li>Tinteggiatura locale: 50-100€ per finestra</li>
         <li>Adattamento murario (se misure diverse): da valutare</li>
       </ul>
       
       <h3 id="accessori">6. Accessori opzionali</h3>
       <p>Non obbligatori ma spesso utili:</p>
       <ul>
         <li>Tapparelle motorizzate: 250-400€ per finestra</li>
         <li>Zanzariere: 80-150€ per finestra</li>
         <li>Sensori antintrusione: 50-100€ per finestra</li>
       </ul>
       
       <h3 id="pratiche">7. Pratiche burocratiche (1-3% del totale)</h3>
       <ul>
         <li>Pratica ENEA per bonus 50%: 100-300€ (noi la includiamo gratis)</li>
         <li>Eventuale pratica edilizia: 200-500€ (se richiesta)</li>
       </ul>
       
       <h2 id="esempio-appartamento">Esempio budget: appartamento 80mq</h2>
       <p><strong>5 finestre + 1 portafinestra, infissi anni '80</strong></p>
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
       
       <h2 id="esempio-villa">Esempio budget: villa 150mq</h2>
       <p><strong>10 finestre + 3 portafinestre + 1 scorrevole</strong></p>
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
       
       <h2 id="finanziamento">Opzioni di pagamento</h2>
       <p>Per agevolare l'investimento offriamo:</p>
       <ul>
         <li><strong>Tasso zero</strong> fino a 24 mesi</li>
         <li><strong>Finanziamento</strong> fino a 60 mesi</li>
         <li><strong>Pagamento</strong> 50% all'ordine, 50% a fine lavori</li>
       </ul>
       
       <h2 id="preventivo">Calcola il tuo budget</h2>
       <p><a href="/contatti">Richiedi un preventivo personalizzato</a> per conoscere i costi esatti per la tua situazione.</p>
     `,
   },
   {
     id: "isolamento-termico",
     slug: "isolamento-termico-finestre-guida",
     title: "Isolamento Termico Finestre: Come Eliminare Spifferi e Condensa",
     metaTitle: "Isolamento Termico Finestre: Guida Completa | I Profili",
     metaDescription: "Guida tecnica all'isolamento termico delle finestre. Trasmittanza, vetri basso emissivi, guarnizioni: tutto quello che devi sapere.",
     excerpt: "Guida tecnica all'isolamento termico delle finestre: cos'è la trasmittanza, come funzionano i vetri basso emissivi, e come eliminare definitivamente spifferi e condensa.",
     date: "18 Gennaio 2026",
     dateISO: "2026-01-18",
     category: "Guide",
     tags: ["isolamento termico", "trasmittanza", "vetri basso emissivi", "condensa finestre"],
     image: "/placeholder.svg",
     imageAlt: "Schema isolamento termico finestra con trasmittanza",
     author: {
       name: "Marco Bianchi",
       role: "Consulente Tecnico",
     },
     readingTime: "10 min",
     relatedArticles: ["risparmio-energetico", "come-scegliere-infissi", "pvc-vs-alluminio"],
     content: `
       <h2 id="perche-isolamento">Perché l'isolamento termico delle finestre è cruciale</h2>
       <p>Le finestre sono responsabili fino al <strong>30% della dispersione termica</strong> di un'abitazione. Con infissi vecchi o mal isolati, è come avere un "buco" nella parete da cui esce (o entra) calore.</p>
       <p>I sintomi di cattivo isolamento:</p>
       <ul>
         <li>Spifferi percepibili vicino alle finestre</li>
         <li>Condensa o brina sui vetri</li>
         <li>Zone fredde vicino ai serramenti</li>
         <li>Muffa sugli stipiti o intorno al telaio</li>
         <li>Bollette elevate nonostante il riscaldamento acceso</li>
       </ul>
       
       <h2 id="trasmittanza">Cos'è la trasmittanza termica (Uw)</h2>
       <p>La <strong>trasmittanza termica</strong> (simbolo Uw) misura quanto calore passa attraverso la finestra. Si misura in <strong>W/m²K</strong> (Watt per metro quadrato per grado Kelvin).</p>
       <p><strong>Regola base:</strong> più basso è il valore, migliore è l'isolamento.</p>
       <table>
         <tr><th>Valore Uw</th><th>Giudizio</th><th>Tipologia</th></tr>
         <tr><td>&gt; 2.5</td><td>Scarso</td><td>Vecchi infissi in legno o alluminio senza taglio termico</td></tr>
         <tr><td>1.4 - 2.5</td><td>Sufficiente</td><td>Infissi base con doppio vetro</td></tr>
         <tr><td>1.0 - 1.4</td><td>Buono</td><td>Infissi moderni con vetro basso emissivo</td></tr>
         <tr><td>0.8 - 1.0</td><td>Ottimo</td><td>Infissi premium con triplo vetro</td></tr>
         <tr><td>&lt; 0.8</td><td>Eccellente</td><td>Top di gamma per case passive</td></tr>
       </table>
       <p><strong>Per la Lombardia</strong> (zona climatica E) la normativa richiede Uw ≤ 1.4, ma per il bonus fiscale e prestazioni reali consigliamo <strong>Uw ≤ 1.0</strong>.</p>
       
       <h2 id="componenti">I 4 componenti dell'isolamento</h2>
       
       <h3>1. Il vetro (Ug)</h3>
       <p>Il vetro rappresenta ~80% della superficie. Tipologie:</p>
       <ul>
         <li><strong>Vetro singolo:</strong> Ug ~5.8 (da evitare)</li>
         <li><strong>Doppio vetro standard:</strong> Ug ~2.8</li>
         <li><strong>Doppio vetro basso emissivo:</strong> Ug ~1.1</li>
         <li><strong>Triplo vetro basso emissivo:</strong> Ug ~0.5-0.7</li>
       </ul>
       
       <h3>2. Il telaio (Uf)</h3>
       <p>Il materiale del profilo impatta molto:</p>
       <ul>
         <li><strong>Alluminio senza taglio termico:</strong> Uf ~7.0 (pessimo)</li>
         <li><strong>Alluminio con taglio termico:</strong> Uf ~2.0-3.0</li>
         <li><strong>PVC 5 camere:</strong> Uf ~1.3-1.5</li>
         <li><strong>PVC 6+ camere:</strong> Uf ~1.0-1.2</li>
         <li><strong>Legno:</strong> Uf ~1.2-1.5</li>
       </ul>
       
       <h3>3. Il distanziale del vetro (Ψg)</h3>
       <p>Il distanziale che separa le lastre di vetro è spesso trascurato. I distanziali "warm edge" riducono il ponte termico del 10-15%.</p>
       
       <h3>4. Le guarnizioni</h3>
       <p>Numero e qualità delle guarnizioni determinano la tenuta all'aria:</p>
       <ul>
         <li><strong>1 guarnizione:</strong> tenuta base</li>
         <li><strong>2 guarnizioni:</strong> buona tenuta</li>
         <li><strong>3 guarnizioni:</strong> tenuta ottimale (nostro sistema Domus)</li>
       </ul>
       
       <h2 id="vetri-basso-emissivi">Come funzionano i vetri basso emissivi</h2>
       <p>I vetri <strong>basso emissivi</strong> hanno uno strato metallico invisibile che riflette il calore verso l'interno della casa:</p>
       <ul>
         <li>D'inverno: il calore del riscaldamento viene "rimandato" dentro</li>
         <li>D'estate: combinati con vetri selettivi, riducono l'ingresso di calore solare</li>
       </ul>
       <p>Il nostro sistema <strong>SE.BE.S</strong> combina vetro selettivo esterno e basso emissivo interno per il massimo comfort tutto l'anno.</p>
       
       <h2 id="condensa">Come eliminare la condensa</h2>
       <p>La condensa si forma quando l'aria umida incontra una superficie fredda. Con infissi ben isolati:</p>
       <ol>
         <li>La superficie interna del vetro resta calda (sopra il punto di rugiada)</li>
         <li>L'umidità non si condensa</li>
         <li>Niente condensa = niente muffa</li>
       </ol>
       <p><strong>Attenzione:</strong> in case molto umide, anche con infissi nuovi serve una corretta ventilazione. Consigliamo infissi con microventilazione o VMC.</p>
       
       <h2 id="test-isolamento">Test pratico: le tue finestre isolano bene?</h2>
       <p>Prova questi test fai-da-te:</p>
       <ol>
         <li><strong>Test candela:</strong> accendi una candela vicino ai bordi della finestra chiusa. Se la fiamma oscilla, c'è uno spiffero.</li>
         <li><strong>Test mano:</strong> in inverno, avvicina la mano al vetro. Se senti freddo a 10cm, l'isolamento è scarso.</li>
         <li><strong>Test condensa:</strong> se si forma condensa regolarmente, l'isolamento è insufficiente.</li>
         <li><strong>Test carta:</strong> chiudi la finestra su un foglio. Se esce facilmente, le guarnizioni sono usurate.</li>
       </ol>
       
       <h2 id="soluzione">La soluzione: il sistema Domus</h2>
       <p>Il nostro sistema <strong>Domus</strong> è progettato per l'isolamento massimo:</p>
       <ul>
         <li>Profilo 76mm a 6 camere (Uf 1.0)</li>
         <li>Tripla guarnizione ad alta memoria elastica</li>
         <li>Triplo vetro basso emissivo SE.BE.S (Ug 0.6)</li>
         <li>Distanziali warm edge</li>
         <li><strong>Uw finale: 0.79 W/m²K</strong></li>
       </ul>
       <p><a href="/contatti">Scopri di più</a> e richiedi un sopralluogo gratuito.</p>
     `,
   },
   {
     id: "come-scegliere-infissi",
     slug: "come-scegliere-infissi-pvc-lombardia",
     title: "Come Scegliere gli Infissi Giusti per la Tua Casa",
     metaTitle: "Come Scegliere Infissi PVC nel 2026 | Guida Completa",
     metaDescription: "Guida definitiva alla scelta degli infissi in PVC, alluminio e legno-alluminio. Confronto materiali, prezzi e consigli per la Lombardia.",
     excerpt: "Una guida completa per orientarsi tra PVC, alluminio e legno-alluminio. Scopri quale materiale è più adatto alle tue esigenze e al tuo budget.",
     date: "15 Gennaio 2026",
     dateISO: "2026-01-15",
     category: "Guide",
     tags: ["infissi PVC", "serramenti Lombardia", "guida acquisto"],
     image: "/placeholder.svg",
     imageAlt: "Confronto tra diversi tipi di infissi PVC e alluminio",
     author: {
       name: "Marco Bianchi",
       role: "Consulente Tecnico",
     },
     readingTime: "8 min",
     relatedArticles: ["pvc-vs-alluminio", "errori-sostituzione-infissi"],
     content: `
       <h2 id="importanza-infissi">Perché gli infissi sono così importanti?</h2>
       <p>Gli infissi rappresentano fino al <strong>30% della dispersione termica</strong> di un'abitazione. Scegliere quelli giusti significa risparmiare centinaia di euro ogni anno in bollette e vivere in un ambiente più confortevole.</p>
       <p>Nel 2026, con la Direttiva Case Green alle porte e i costi energetici in aumento, investire in serramenti di qualità non è più un optional ma una necessità.</p>
       
       <h2 id="confronto-materiali">PVC vs Alluminio vs Legno-Alluminio: il confronto definitivo</h2>
       <h3>Infissi in PVC</h3>
       <p><strong>Vantaggi:</strong></p>
       <ul>
         <li>Miglior rapporto qualità-prezzo</li>
         <li>Eccellente isolamento termico (Uw fino a 0.8 W/m²K)</li>
         <li>Zero manutenzione</li>
         <li>Durata 30+ anni</li>
       </ul>
       <p><strong>Ideale per:</strong> la maggior parte delle abitazioni, soprattutto appartamenti e villette.</p>
       
       <h3>Infissi in Alluminio</h3>
       <p><strong>Vantaggi:</strong></p>
       <ul>
         <li>Design minimale e profili sottili</li>
         <li>Massima resistenza strutturale</li>
         <li>Ideale per grandi vetrate</li>
       </ul>
       <p><strong>Ideale per:</strong> edifici commerciali, architettura moderna, grandi superfici vetrate.</p>
       
       <h3>Infissi in Legno-Alluminio</h3>
       <p><strong>Vantaggi:</strong></p>
       <ul>
         <li>Estetica premium del legno all'interno</li>
         <li>Resistenza dell'alluminio all'esterno</li>
         <li>Eccellente isolamento</li>
       </ul>
       <p><strong>Ideale per:</strong> abitazioni di pregio, contesti storici, chi cerca il massimo comfort.</p>
       
       <h2 id="come-scegliere">Come scegliere: 5 criteri fondamentali</h2>
       <ol>
         <li><strong>Budget:</strong> definisci quanto vuoi investire. Il PVC offre il miglior rapporto qualità-prezzo.</li>
         <li><strong>Esposizione:</strong> finestre a nord richiedono vetri ad alto isolamento termico.</li>
         <li><strong>Rumore:</strong> se abiti in zona trafficata, considera vetri stratificati acustici.</li>
         <li><strong>Estetica:</strong> valuta il colore e lo stile che si integra meglio con la tua casa.</li>
         <li><strong>Bonus fiscali:</strong> verifica di poter accedere alla detrazione del 50%.</li>
       </ol>
       
       <h2 id="conclusioni">Conclusioni</h2>
       <p>Per la maggior parte delle case in Lombardia, gli <strong>infissi in PVC</strong> rappresentano la scelta ottimale: combinano prestazioni eccellenti, durabilità e un prezzo accessibile.</p>
       <p>Vuoi una consulenza personalizzata? <a href="/contatti">Contattaci per un preventivo gratuito</a>.</p>
     `,
   },
   {
     id: "bonus-50-2025",
     slug: "bonus-infissi-50-2026-guida-completa",
     title: "Bonus Infissi 50%: Tutto Quello che Devi Sapere nel 2026",
     metaTitle: "Bonus Infissi 50% 2026: Guida Completa | I Profili",
     metaDescription: "Guida completa al bonus infissi 50% nel 2026. Requisiti, documenti, scadenze e come ottenerlo. Potrebbe scendere al 36%, agisci ora!",
     excerpt: "La detrazione fiscale del 50% è ancora attiva ma potrebbe scendere al 36%. Ecco come approfittarne prima che sia troppo tardi.",
     date: "10 Gennaio 2026",
     dateISO: "2026-01-10",
     category: "Bonus Fiscali",
     tags: ["bonus infissi", "detrazione fiscale", "ecobonus 2026"],
     image: "/placeholder.svg",
     imageAlt: "Documenti per bonus infissi 50%",
     author: {
       name: "Laura Colombo",
       role: "Consulente Fiscale",
     },
     readingTime: "6 min",
     relatedArticles: ["direttiva-case-green", "risparmio-energetico"],
     content: `
       <h2 id="cos-e-bonus">Cos'è il Bonus Infissi 50%?</h2>
       <p>Il Bonus Infissi è una <strong>detrazione fiscale del 50%</strong> sulle spese sostenute per la sostituzione di finestre e serramenti. La detrazione viene recuperata in 10 anni nelle dichiarazioni dei redditi.</p>
       <p><strong>Attenzione:</strong> dal 2027 il bonus potrebbe scendere al 36%. Agire nel 2026 significa massimizzare il risparmio.</p>
       
       <h2 id="requisiti">Requisiti per accedere al bonus</h2>
       <ul>
         <li>Sostituzione di infissi esistenti (non nuova installazione)</li>
         <li>Miglioramento delle prestazioni energetiche</li>
         <li>Pagamento con bonifico parlante</li>
         <li>Comunicazione ENEA entro 90 giorni</li>
       </ul>
       
       <h2 id="documenti">Documenti necessari</h2>
       <ol>
         <li>Fattura con dettaglio degli infissi</li>
         <li>Ricevuta del bonifico parlante</li>
         <li>Schede tecniche dei prodotti</li>
         <li>Attestazione del fornitore sui valori di trasmittanza</li>
       </ol>
       
       <h2 id="esempio-calcolo">Esempio pratico di calcolo</h2>
       <p>Se spendi <strong>10.000€</strong> per nuovi infissi:</p>
       <ul>
         <li>Detrazione totale: 5.000€ (50%)</li>
         <li>Recupero annuo: 500€ per 10 anni</li>
         <li>Costo effettivo: 5.000€</li>
       </ul>
       
       <h2 id="cosa-facciamo">Cosa fa I Profili per te</h2>
       <p>Con il nostro Sistema Zero Pensieri, la pratica ENEA è <strong>inclusa gratuitamente</strong>. Ti forniamo tutti i documenti necessari e ti guidiamo passo passo.</p>
       <p><a href="/contatti">Richiedi un preventivo</a> e scopri quanto puoi risparmiare.</p>
     `,
   },
   {
     id: "risparmio-energetico",
     slug: "risparmio-energetico-infissi-quanto-si-risparmia",
     title: "Quanto Puoi Risparmiare con Infissi ad Alta Efficienza?",
     metaTitle: "Risparmio Energetico Infissi: Calcola Quanto Risparmi",
     metaDescription: "Analisi reale del risparmio in bolletta dopo la sostituzione dei serramenti. Dati concreti e testimonianze clienti dalla Lombardia.",
     excerpt: "Analisi reale del risparmio in bolletta dopo la sostituzione dei serramenti. Dati e testimonianze dei nostri clienti.",
     date: "5 Gennaio 2026",
     dateISO: "2026-01-05",
     category: "Risparmio",
     tags: ["risparmio bolletta", "efficienza energetica", "isolamento termico"],
     image: "/placeholder.svg",
     imageAlt: "Grafico risparmio energetico con nuovi infissi",
     author: {
       name: "Marco Bianchi",
       role: "Consulente Tecnico",
     },
     readingTime: "5 min",
     relatedArticles: ["come-scegliere-infissi", "bonus-50-2025"],
     content: `
       <h2 id="quanto-si-risparmia">Quanto si risparmia davvero?</h2>
       <p>In base ai dati raccolti dai nostri clienti in Lombardia, la sostituzione degli infissi porta a un <strong>risparmio medio del 25-40%</strong> sulla bolletta del riscaldamento.</p>
       
       <h2 id="caso-studio">Caso studio: appartamento a Milano</h2>
       <p><strong>Situazione iniziale:</strong></p>
       <ul>
         <li>Appartamento 90 mq, infissi in legno anni '80</li>
         <li>Bolletta gas invernale: 250€/mese</li>
         <li>Problemi: spifferi, condensa, freddo</li>
       </ul>
       <p><strong>Dopo l'intervento:</strong></p>
       <ul>
         <li>Infissi PVC Domus 6 camere</li>
         <li>Bolletta gas invernale: 160€/mese</li>
         <li>Risparmio annuo: circa 540€</li>
       </ul>
       
       <h2 id="roi">Ritorno dell'investimento</h2>
       <p>Considerando il bonus 50%, l'investimento si ripaga in <strong>5-7 anni</strong>. Dopo, è tutto risparmio netto per i successivi 25+ anni.</p>
       
       <h2 id="comfort">Oltre il risparmio: il comfort</h2>
       <p>I benefici non sono solo economici:</p>
       <ul>
         <li>Niente più condensa e muffa</li>
         <li>Silenziosità: abbattimento rumori fino a 45 dB</li>
         <li>Temperatura uniforme in tutta la casa</li>
         <li>Valorizzazione dell'immobile</li>
       </ul>
     `,
   },
   {
     id: "direttiva-case-green",
     slug: "direttiva-case-green-2030-cosa-fare",
     title: "Direttiva Case Green: Cosa Cambia per i Proprietari di Casa",
     metaTitle: "Direttiva Case Green 2030: Cosa Fare Ora | Guida",
     metaDescription: "L'Europa impone nuovi standard energetici entro il 2030. Scopri cosa significa per la tua casa e come prepararti con i serramenti giusti.",
     excerpt: "L'Europa impone nuovi standard energetici. Ecco cosa significa per la tua abitazione e come prepararti in anticipo.",
     date: "28 Dicembre 2025",
     dateISO: "2025-12-28",
     category: "Normative",
     tags: ["case green", "normativa europea", "efficienza energetica"],
     image: "/placeholder.svg",
     imageAlt: "Casa efficiente con classe energetica A",
     author: {
       name: "Laura Colombo",
       role: "Consulente Fiscale",
     },
     readingTime: "7 min",
     relatedArticles: ["bonus-50-2025", "risparmio-energetico"],
     content: `
       <h2 id="cosa-prevede">Cosa prevede la Direttiva Case Green?</h2>
       <p>La Direttiva Europea EPBD (Energy Performance of Buildings Directive) stabilisce che entro il <strong>2030</strong> tutti gli edifici residenziali dovranno raggiungere almeno la <strong>classe energetica E</strong>.</p>
       <p>Entro il 2033, l'obiettivo sale alla classe D.</p>
       
       <h2 id="situazione-italia">La situazione in Italia</h2>
       <p>Secondo l'ENEA, oltre il <strong>60% degli edifici italiani</strong> è attualmente in classe F o G. Questo significa milioni di abitazioni da efficientare nei prossimi 4 anni.</p>
       
       <h2 id="conseguenze">Conseguenze per chi non si adegua</h2>
       <ul>
         <li><strong>Svalutazione immobiliare:</strong> fino al 30% in meno</li>
         <li><strong>Difficoltà di vendita:</strong> case inefficienti sempre meno appetibili</li>
         <li><strong>Costi energetici:</strong> bollette sempre più alte</li>
         <li><strong>Possibili sanzioni:</strong> ancora da definire, ma probabili</li>
       </ul>
       
       <h2 id="ruolo-infissi">Il ruolo degli infissi nell'efficientamento</h2>
       <p>La sostituzione degli infissi è uno degli interventi più efficaci per migliorare la classe energetica. Può far guadagnare <strong>1-2 classi</strong> con un investimento contenuto rispetto ad altri interventi.</p>
       
       <h2 id="agire-ora">Perché agire ora</h2>
       <ol>
         <li>Bonus 50% ancora disponibile (potrebbe scendere)</li>
         <li>Eviti la corsa dell'ultimo momento</li>
         <li>Inizi subito a risparmiare in bolletta</li>
         <li>Valorizzi il tuo immobile</li>
       </ol>
     `,
   },
   {
     id: "errori-sostituzione-infissi",
     slug: "5-errori-sostituzione-infissi-da-evitare",
     title: "5 Errori da Evitare nella Sostituzione degli Infissi",
     metaTitle: "5 Errori Sostituzione Infissi da Evitare | I Profili",
     metaDescription: "Gli sbagli più comuni che fanno lievitare i costi e rovinano il risultato. Guida pratica per evitarli e ottenere il massimo dai nuovi serramenti.",
     excerpt: "Gli sbagli più comuni che fanno lievitare i costi e rovinano il risultato finale. Impara dagli errori degli altri.",
     date: "20 Dicembre 2025",
     dateISO: "2025-12-20",
     category: "Guide",
     tags: ["errori infissi", "guida pratica", "consigli"],
     image: "/placeholder.svg",
     imageAlt: "Installazione corretta di infissi in PVC",
     author: {
       name: "Marco Bianchi",
       role: "Consulente Tecnico",
     },
     readingTime: "6 min",
     relatedArticles: ["come-scegliere-infissi", "pvc-vs-alluminio"],
     content: `
       <h2 id="errore-1">Errore #1: Scegliere solo in base al prezzo</h2>
       <p>Il preventivo più basso spesso nasconde:</p>
       <ul>
         <li>Materiali di scarsa qualità</li>
         <li>Installazione approssimativa</li>
         <li>Garanzie inesistenti</li>
         <li>Costi nascosti che emergono dopo</li>
       </ul>
       <p><strong>Soluzione:</strong> confronta preventivi dettagliati voce per voce, non solo il totale.</p>
       
       <h2 id="errore-2">Errore #2: Ignorare la qualità della posa</h2>
       <p>Un infisso eccellente installato male perde il 70% delle sue prestazioni. La posa è cruciale quanto il prodotto.</p>
       <p><strong>Soluzione:</strong> scegli installatori certificati con garanzia sulla posa (noi offriamo 5 anni).</p>
       
       <h2 id="errore-3">Errore #3: Non considerare la ventilazione</h2>
       <p>Infissi troppo ermetici in case vecchie possono causare problemi di condensa e muffa se non si gestisce il ricambio d'aria.</p>
       <p><strong>Soluzione:</strong> valuta VMC o infissi con microventilazione integrata.</p>
       
       <h2 id="errore-4">Errore #4: Trascurare i cassonetti</h2>
       <p>I vecchi cassonetti delle tapparelle sono "buchi" termici. Sostituirli è fondamentale per l'isolamento.</p>
       <p><strong>Soluzione:</strong> includi sempre i cassonetti nel preventivo.</p>
       
       <h2 id="errore-5">Errore #5: Non verificare le garanzie</h2>
       <p>Molte aziende promettono a voce ma non mettono nulla per iscritto.</p>
       <p><strong>Soluzione:</strong> esigi garanzie scritte nel contratto, con penali per ritardi incluse.</p>
     `,
   },
   {
     id: "pvc-vs-alluminio",
     slug: "pvc-vs-alluminio-quale-scegliere-infissi",
     title: "PVC vs Alluminio: Quale Scegliere per i Tuoi Infissi?",
     metaTitle: "PVC vs Alluminio Infissi: Confronto Completo 2026",
     metaDescription: "Confronto dettagliato tra infissi in PVC e alluminio. Pro, contro, prezzi e situazioni ideali per ciascun materiale.",
     excerpt: "Confronto dettagliato tra i due materiali più diffusi. Pro, contro e situazioni ideali per ciascuno.",
     date: "15 Dicembre 2025",
     dateISO: "2025-12-15",
     category: "Guide",
     tags: ["PVC", "alluminio", "confronto materiali"],
     image: "/placeholder.svg",
     imageAlt: "Confronto visivo tra infisso PVC e alluminio",
     author: {
       name: "Marco Bianchi",
       role: "Consulente Tecnico",
     },
     readingTime: "7 min",
     relatedArticles: ["come-scegliere-infissi", "errori-sostituzione-infissi"],
     content: `
       <h2 id="introduzione">Il dilemma PVC vs Alluminio</h2>
       <p>È una delle domande più frequenti: meglio PVC o alluminio? La risposta dipende dalle tue esigenze specifiche.</p>
       
       <h2 id="isolamento">Isolamento termico</h2>
       <p><strong>PVC:</strong> eccellente isolamento naturale, Uw 0.8-1.2 W/m²K</p>
       <p><strong>Alluminio:</strong> richiede taglio termico, Uw 1.2-1.8 W/m²K</p>
       <p><strong>Vincitore:</strong> PVC</p>
       
       <h2 id="estetica">Estetica e design</h2>
       <p><strong>PVC:</strong> profili più spessi, ampia gamma colori</p>
       <p><strong>Alluminio:</strong> profili sottili, design minimale</p>
       <p><strong>Vincitore:</strong> Alluminio per design moderno, pari per classico</p>
       
       <h2 id="manutenzione">Manutenzione</h2>
       <p><strong>PVC:</strong> zero manutenzione, basta pulire con acqua</p>
       <p><strong>Alluminio:</strong> manutenzione minima, possibile ossidazione</p>
       <p><strong>Vincitore:</strong> PVC</p>
       
       <h2 id="prezzo">Prezzo</h2>
       <p><strong>PVC:</strong> più economico del 20-30%</p>
       <p><strong>Alluminio:</strong> costo superiore</p>
       <p><strong>Vincitore:</strong> PVC</p>
       
       <h2 id="quando-scegliere">Quando scegliere cosa</h2>
       <p><strong>Scegli PVC se:</strong></p>
       <ul>
         <li>Cerchi il miglior rapporto qualità-prezzo</li>
         <li>Vuoi zero manutenzione</li>
         <li>L'isolamento termico è prioritario</li>
       </ul>
       <p><strong>Scegli Alluminio se:</strong></p>
       <ul>
         <li>Hai grandi vetrate o scorrevoli</li>
         <li>Vuoi un design minimale</li>
         <li>Il budget non è un problema</li>
       </ul>
     `,
   },
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