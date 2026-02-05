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