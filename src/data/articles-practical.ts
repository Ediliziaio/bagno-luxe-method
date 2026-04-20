import homeWindows from '@/assets/home-windows.jpg';
import heroWindow from '@/assets/hero-window.jpg';
import windowDetail from '@/assets/window-detail.jpg';
import familyComfort from '@/assets/family-comfort.jpg';
import windowBefore1 from '@/assets/window-before-1.jpg';
import type { Article } from './articles';

export const practicalArticles: Article[] = [
  {
    id: "come-misurare-finestre",
    slug: "come-misurare-finestre-sostituzione-guida-pratica",
    title: "Come Misurare le Finestre per la Sostituzione: Guida Pratica",
    metaTitle: "Come Misurare Finestre per Sostituzione",
    metaDescription: "Guida pratica per misurare correttamente le finestre prima della sostituzione. Errori da evitare, strumenti e schema passo-passo.",
    excerpt: "Misurare male le finestre significa ordinare infissi sbagliati. Ecco il metodo professionale per rilevare le quote in modo corretto.",
    date: "16 Febbraio 2026",
    dateISO: "2026-02-16",
    category: "Guide",
    tags: ["misurazione finestre", "sostituzione infissi", "rilievo misure", "guida pratica", "fai da te infissi"],
    image: windowBefore1,
    imageAlt: "Rilievo misure di una finestra prima della sostituzione dell'infisso",
    author: { name: "Luca Rossi", role: "Installatore Senior" },
    readingTime: "10 min",
    relatedArticles: ["errori-sostituzione-infissi", "preventivo-infissi", "manutenzione-infissi-pvc"],
    content: `
      <p>Sapere <strong>come misurare le finestre per la sostituzione</strong> è il primo passo per non sbagliare l'ordine degli infissi. Un errore di pochi millimetri può costare centinaia di euro.</p>
      <p>La misurazione non è solo prendere altezza e larghezza. Serve capire il tipo di posa esistente, lo spessore del muro, la presenza del cassonetto, la squadratura del foro.</p>

      <h2 id="strumenti">Strumenti necessari per un rilievo preciso</h2>
      <ul>
        <li><strong>Metro a nastro rigido</strong> da almeno 5 metri</li>
        <li><strong>Metro laser</strong> (opzionale) per misure lunghe</li>
        <li><strong>Livella a bolla</strong> da 40-60 cm</li>
        <li><strong>Matita e blocco note</strong> oppure tablet</li>
        <li><strong>Macchina fotografica</strong> o smartphone</li>
        <li><strong>Calibro</strong> per rilevare spessori</li>
      </ul>
      <h3>Quanti rilievi fare per ogni finestra</h3>
      <p>Regola d'oro: <strong>misura sempre in tre punti</strong> sia in larghezza (alto, centro, basso) sia in altezza (sinistra, centro, destra). Il valore da riportare nell'ordine è il <strong>più piccolo</strong>.</p>

      <h2 id="tipi-di-posa">Capire il tipo di posa esistente</h2>
      <h3>Posa in luce (dentro il foro)</h3>
      <p>L'infisso è inserito nel foro murario senza controtelaio a vista. Posa più comune anni 60-80.</p>
      <h3>Posa su controtelaio esistente</h3>
      <p>C'è un telaio in legno o metallo annegato nel muro.</p>
      <h3>Posa a filo esterno o con cappotto</h3>
      <p>Tipica delle case recenti. Richiede <strong>monoblocco o falso telaio</strong>. Se hai il cappotto, chiedi un <a href="/contatti">sopralluogo gratuito</a>.</p>

      <h2 id="rilievo-passo-passo">Il rilievo passo-passo</h2>
      <ol>
        <li><strong>Apri completamente l'anta</strong> e blocca il battente.</li>
        <li><strong>Misura la larghezza in alto</strong>, tra le due spalle del muro.</li>
        <li><strong>Misura la larghezza al centro</strong>, all'altezza del nodo centrale.</li>
        <li><strong>Misura la larghezza in basso</strong>, vicino al davanzale.</li>
        <li><strong>Ripeti per l'altezza</strong> nei tre punti.</li>
        <li><strong>Misura le diagonali</strong>: se differiscono oltre 1 cm, foro fuori squadra.</li>
        <li><strong>Misura lo spessore del muro</strong>.</li>
        <li><strong>Rileva l'altezza del davanzale</strong>.</li>
        <li><strong>Fotografa tutto</strong>.</li>
      </ol>

      <h3>Come misurare con cassonetto tapparella</h3>
      <ul>
        <li>Rilevare <strong>larghezza, altezza e profondità</strong> del vano cassonetto</li>
        <li>Verificare se il cassonetto è <strong>coibentato</strong></li>
        <li>Misurare il <strong>diametro del rullo</strong></li>
      </ul>
      <p>Il cassonetto mal coibentato è responsabile del 20-30% delle dispersioni.</p>

      <h2 id="errori-comuni">Errori comuni da evitare</h2>
      <h3>Misurare l'infisso vecchio invece del foro</h3>
      <p><strong>Misura sempre il foro murario</strong>, non il serramento in opera.</p>
      <h3>Ignorare la squadratura</h3>
      <p>Un foro fuori squadra richiede <strong>falsi telai</strong> o riquadratura.</p>
      <h3>Dimenticare il verso di apertura</h3>
      <p>Ante a destra o a sinistra, apertura interna o esterna, anta-ribalta: scrivilo sempre.</p>
      <h3>Non considerare il battiscopa e il pavimento</h3>
      <p>Se stai ristrutturando, considera lo spessore del pavimento futuro.</p>

      <h2 id="casi-particolari">Casi particolari</h2>
      <h3>Porte-finestre e balconi</h3>
      <ul>
        <li>Presenza di <strong>soglia termica</strong></li>
        <li>Altezza del piano di calpestio</li>
        <li>Pendenza del terrazzo</li>
      </ul>
      <h3>Scorrevoli e alzanti-scorrevoli</h3>
      <p>Per <a href="/prodotti/domus">sistemi alzanti-scorrevoli</a> suggeriamo sempre un sopralluogo tecnico.</p>
      <h3>Lucernari e finestre mansardate</h3>
      <p>Qui serve il modello esatto (Velux, Fakro) con misure standardizzate.</p>

      <h2 id="quando-chiamare-tecnico">Quando conviene chiamare il tecnico</h2>
      <ul>
        <li>Fori fuori squadra di oltre 2 cm</li>
        <li>Case con cappotto termico</li>
        <li>Scorrevoli oltre 3 metri</li>
        <li>Ristrutturazioni con modifica fori</li>
        <li>Condomini con vincoli</li>
      </ul>
      <p>Un <a href="/contatti">sopralluogo tecnico gratuito</a> dura 30 minuti e ti dà un preventivo preciso.</p>

      <h2 id="faq">FAQ</h2>
      <h3>Quanto tolgono gli installatori dalle misure del foro?</h3>
      <p>In <strong>posa a muro</strong> si tolgono 1-1,5 cm per lato. In <strong>posa su controtelaio</strong> solo 2-3 mm. A loro serve la <strong>misura netta del foro</strong>.</p>
      <h3>Posso misurare da solo?</h3>
      <p>Per una stima iniziale sì. Per l'ordine serve rilievo tecnico sul posto.</p>
      <h3>Cosa succede se sbaglio?</h3>
      <p>Se hai dato misure indicative, niente. Se hai firmato l'ordine, costi 200-800 euro a pezzo.</p>
      <h3>Come capisco se il foro è fuori squadra?</h3>
      <p>Misura le due <strong>diagonali</strong>. Se differiscono meno di 5 mm, è in squadra. Oltre 2 cm serve riquadratura.</p>
      <h3>Devo misurare anche il davanzale?</h3>
      <p>Sì, sempre. Nelle sostituzioni moderne il davanzale spesso va sostituito.</p>

      <p>Misurare bene è il 50% del lavoro. L'altro 50% è una <a href="/posa-qualificata">posa qualificata</a>. Per un rilievo professionale gratuito, <a href="/contatti">contattaci</a>.</p>
    `,
  },
  {
    id: "condensa-finestre",
    slug: "condensa-sulle-finestre-cause-e-soluzioni-definitive",
    title: "Condensa sulle Finestre: Cause e Soluzioni Definitive",
    metaTitle: "Condensa sulle Finestre: Cause e Soluzioni",
    metaDescription: "Condensa sulle finestre: vere cause, quando è colpa dell'infisso e soluzioni definitive per eliminarla dalla tua casa.",
    excerpt: "La condensa sulle finestre non è sempre colpa degli infissi. Ecco le vere cause e come risolvere il problema una volta per tutte.",
    date: "16 Febbraio 2026",
    dateISO: "2026-02-16",
    category: "Guide",
    tags: ["condensa finestre", "umidità casa", "muffa serramenti", "ventilazione", "isolamento termico"],
    image: familyComfort,
    imageAlt: "Famiglia in ambiente confortevole senza condensa sulle finestre",
    author: { name: "Marco Bianchi", role: "Consulente Tecnico" },
    readingTime: "11 min",
    relatedArticles: ["manutenzione-infissi-pvc", "guarnizioni-infissi", "sostituzione-vetrocamera"],
    content: `
      <p>La <strong>condensa sulle finestre</strong> è un problema comune delle case italiane. <strong>La condensa non è quasi mai colpa dell'infisso</strong>: nella maggior parte dei casi è colpa dell'ambiente.</p>

      <h2 id="cause">Le vere cause della condensa</h2>
      <p>La <strong>condensa</strong> si forma quando l'aria calda e umida incontra una superficie fredda. Cause principali:</p>
      <ol>
        <li><strong>Troppa umidità nell'ambiente</strong> (cucinare, doccia, bucato, piante, respirazione)</li>
        <li><strong>Scarsa ventilazione</strong> (infissi troppo ermetici)</li>
        <li><strong>Superfici troppo fredde</strong> (vetri singoli, ponti termici)</li>
      </ol>
      <p>Una famiglia di 4 persone produce <strong>10-15 litri di vapore al giorno</strong>.</p>

      <h3>Perché la condensa peggiora con infissi nuovi</h3>
      <p>Gli <strong>infissi vecchi avevano spifferi</strong> che garantivano ricambio d'aria involontario. I nuovi serramenti con <strong>doppia guarnizione</strong> sigillano tutto. La soluzione è <strong>gestire attivamente la ventilazione</strong>.</p>

      <h2 id="differenze">Condensa sul vetro, sul telaio, tra i vetri</h2>
      <h3>Condensa sul vetro interno</h3>
      <p>La più comune. Causa: <strong>umidità ambientale alta</strong>. <strong>Non è un difetto del serramento</strong> se il vetro ha Ug ≤ 1,1 W/m²K.</p>
      <h3>Condensa sul telaio</h3>
      <p>Può indicare <strong>ponte termico</strong>, posa scorretta o umidità estrema. Una <a href="/posa-qualificata">posa qualificata</a> elimina i ponti termici.</p>
      <h3>Condensa tra i vetri (vetrocamera)</h3>
      <p>Difetto grave: la <strong>guarnizione del vetrocamera è rotta</strong> e il vetro va sostituito. Vedi la <a href="/articoli/sostituzione-vetrocamera-quando-conviene-solo-vetro">guida alla sostituzione del vetrocamera</a>.</p>
      <h3>Condensa esterna sul vetro</h3>
      <p>Sorpresa: è <strong>segno di una finestra ottima</strong>. Succede solo con vetri tripli ad alta efficienza.</p>

      <h2 id="soluzioni-comportamentali">Soluzioni comportamentali</h2>
      <h3>Arieggiare correttamente</h3>
      <p>Metodo del <strong>ricambio d'urto</strong>:</p>
      <ul>
        <li>Apri completamente per <strong>5-10 minuti</strong></li>
        <li>Due finestre opposte per corrente</li>
        <li><strong>3 volte al giorno</strong></li>
        <li>Spegni i termosifoni durante il ricambio</li>
      </ul>

      <h3>Gestire le fonti di umidità</h3>
      <ul>
        <li><strong>Cucina</strong>: cappa sempre accesa, coperchi sulle pentole</li>
        <li><strong>Bagno</strong>: finestra aperta o aspiratore dopo doccia</li>
        <li><strong>Bucato</strong>: non asciugare in casa</li>
        <li><strong>Piante</strong>: non troppe in poco spazio</li>
      </ul>

      <h3>Monitorare con un igrometro</h3>
      <p>Costa 10-15 euro. Il valore ideale è tra <strong>40% e 55%</strong>.</p>

      <h2 id="soluzioni-tecniche">Soluzioni tecniche</h2>
      <h3>Deumidificatore</h3>
      <p>Un deumidificatore da 12-20 litri/giorno costa 200-400 euro. Consumo: 200-500W.</p>
      <h3>VMC - Ventilazione Meccanica Controllata</h3>
      <p>È la <strong>soluzione definitiva</strong>:</p>
      <ul>
        <li>Cambia l'aria continuamente</li>
        <li>Recupera fino al <strong>90% del calore</strong></li>
        <li>Filtra pollini e polveri</li>
        <li>Mantiene umidità 45-55%</li>
      </ul>
      <p>Costi: 3.000-8.000 euro, detraibili al 50-65%.</p>
      <h3>Micro-ventilazione sugli infissi</h3>
      <p>I serramenti <a href="/prodotti/domus">Domus di I Profili</a> prevedono <strong>micro-ventilazione</strong>.</p>

      <h2 id="quando-infisso">Quando la condensa è colpa dell'infisso</h2>
      <ul>
        <li><strong>Umidità sotto 55%</strong> ma vetri bagnati: vetro troppo freddo</li>
        <li><strong>Muffa ricorrente</strong> sugli angoli</li>
        <li><strong>Spifferi percettibili</strong>: guarnizioni ko</li>
        <li><strong>Condensa tra i vetri</strong>: vetrocamera rotta</li>
        <li><strong>Alluminio senza taglio termico</strong>: ponte strutturale</li>
      </ul>
      <p>Se la casa ha oltre 25 anni, un <a href="/prodotti">serramento moderno</a> con vetri tripli elimina il 90% della condensa.</p>

      <h2 id="muffa">Condensa e muffa: come prevenire i danni</h2>
      <h3>Come rimuovere la muffa esistente</h3>
      <ol>
        <li>Usa un <strong>antimuffa specifico</strong> (non candeggina)</li>
        <li>Spruzza, lascia 10 minuti, rimuovi</li>
        <li>Ripeti a 7 giorni</li>
        <li>Tratta con <strong>pittura antimuffa</strong></li>
      </ol>
      <h3>Come prevenire</h3>
      <ul>
        <li>Umidità sotto 55%</li>
        <li>Non appoggiare mobili alle pareti esterne</li>
        <li>Non coprire con tende sempre chiuse</li>
        <li>Scalda in modo uniforme</li>
      </ul>

      <h2 id="faq">FAQ</h2>
      <h3>È normale avere condensa in inverno?</h3>
      <p>Leggera condensa mattutina sì. Persistente con gocciolamento no. Un <strong>igrometro</strong> ti dice se il problema è l'ambiente o l'infisso.</p>
      <h3>Ho cambiato gli infissi e ora ho condensa: mi hanno imbrogliato?</h3>
      <p>No, è il paradosso delle case ermetiche. Devi <strong>ventilare attivamente</strong> o installare VMC.</p>
      <h3>La condensa rovina gli infissi?</h3>
      <p>In PVC o alluminio no. Nel legno può rigonfiarlo. Asciuga sempre e fai <a href="/articoli/manutenzione-infissi-pvc-guida-completa">manutenzione annuale</a>.</p>
      <h3>Un deumidificatore risolve?</h3>
      <p>Nei casi di umidità eccessiva sì. Soluzione tampone: la struttura è la <strong>ventilazione controllata</strong>.</p>
      <h3>Quanto costa una VMC per 80 mq?</h3>
      <p>4.000-6.000 euro installata, detraibili al 65%. Risparmio energetico 20-30%.</p>

      <p>La condensa è un problema quasi sempre risolvibile. <a href="/contatti">Chiama I Profili</a>: facciamo un sopralluogo con termoigrometro.</p>
    `,
  },
  {
    id: "manutenzione-infissi-pvc",
    slug: "manutenzione-infissi-pvc-guida-completa",
    title: "Manutenzione Infissi PVC: La Guida Completa per Farli Durare 30 Anni",
    metaTitle: "Manutenzione Infissi PVC: Guida Completa",
    metaDescription: "Manutenzione infissi PVC: guida passo-passo per pulizia, ingrassaggio, regolazione. Fai durare i tuoi serramenti 30 anni.",
    excerpt: "Gli infissi in PVC possono durare decenni se curati bene. Ecco la guida pratica per pulizia, ingrassaggio e controlli periodici.",
    date: "16 Febbraio 2026",
    dateISO: "2026-02-16",
    category: "Guide",
    tags: ["manutenzione PVC", "pulizia infissi", "cura serramenti", "ingrassaggio cerniere", "durata infissi"],
    image: homeWindows,
    imageAlt: "Infissi in PVC ben mantenuti in abitazione moderna",
    author: { name: "Luca Rossi", role: "Installatore Senior" },
    readingTime: "11 min",
    relatedArticles: ["guarnizioni-infissi", "condensa-finestre", "come-misurare-finestre"],
    content: `
      <p>La <strong>manutenzione degli infissi in PVC</strong> è la chiave per farli durare 30 anni e oltre. Con meno di un'ora all'anno di lavoro, mantieni i serramenti come nuovi.</p>

      <h2 id="perche">Perché la manutenzione del PVC conta</h2>
      <p>Un serramento in PVC di qualità ha vita attesa di <strong>40-50 anni</strong>. Le parti che si usurano:</p>
      <ul>
        <li><strong>Guarnizioni EPDM/TPE</strong>: 15-20 anni curate, 8-10 trascurate</li>
        <li><strong>Cerniere e meccanismi</strong>: 20+ anni con ingrassaggio</li>
        <li><strong>Vetrocamera</strong>: 25-30 anni</li>
        <li><strong>Superficie del PVC</strong>: non si degrada, si sporca</li>
      </ul>

      <h2 id="pulizia">Pulizia del PVC</h2>
      <h3>Prodotti SÌ</h3>
      <ul>
        <li><strong>Acqua tiepida</strong> con <strong>sapone neutro</strong></li>
        <li><strong>Panno in microfibra</strong></li>
        <li><strong>Detergenti specifici per PVC</strong></li>
        <li><strong>Alcool etilico</strong> diluito 50% per macchie</li>
      </ul>
      <h3>Prodotti NO</h3>
      <ul>
        <li><strong>Solventi aggressivi</strong> (acetone, diluenti)</li>
        <li><strong>Ammoniaca pura</strong></li>
        <li><strong>Candeggina</strong></li>
        <li><strong>Spugne abrasive</strong></li>
        <li><strong>Antigrasso industriali</strong></li>
      </ul>
      <h3>Come pulire passo-passo</h3>
      <ol>
        <li>Rimuovi polvere con panno asciutto</li>
        <li>Aspira l'acqua dai binari</li>
        <li>Applica acqua e sapone</li>
        <li>Risciacqua</li>
        <li>Asciuga</li>
      </ol>
      <p>Frequenza: <strong>2 volte l'anno</strong> interni, <strong>3-4</strong> esterni in zone smog.</p>

      <h2 id="ingrassaggio">Ingrassaggio cerniere e meccanismi</h2>
      <h3>Cosa usare</h3>
      <ul>
        <li><strong>Olio lubrificante specifico per serramenti</strong></li>
        <li>In alternativa <strong>olio per macchina da cucire</strong></li>
        <li><strong>NON</strong> WD-40 (evapora)</li>
        <li><strong>NON</strong> grassi densi (attirano polvere)</li>
      </ul>
      <h3>Dove ingrassare</h3>
      <ul>
        <li><strong>Cerniere superiore e inferiore</strong></li>
        <li><strong>Dardi di chiusura</strong> ("funghi" metallici)</li>
        <li><strong>Forcella dell'anta-ribalta</strong></li>
        <li><strong>Scontri metallici</strong></li>
      </ul>
      <p>Frequenza: <strong>1 volta l'anno</strong>, idealmente in autunno.</p>

      <h2 id="guarnizioni">Cura delle guarnizioni</h2>
      <h3>Pulizia</h3>
      <p>Panno umido ogni 6 mesi.</p>
      <h3>Trattamento annuale</h3>
      <p><strong>Spray al silicone</strong> o stick al teflon:</p>
      <ul>
        <li>Mantiene la gomma elastica</li>
        <li>Previene l'indurimento</li>
        <li>Evita che si "attacchi" in inverno</li>
      </ul>
      <h3>Quando sostituirle</h3>
      <p>Vedi la <a href="/articoli/guarnizioni-infissi-quando-cambiarle-come-fare">guida alla sostituzione</a>.</p>

      <h2 id="regolazioni">Regolazioni periodiche dell'anta</h2>
      <h3>Regolazione verticale</h3>
      <p>Sulla <strong>cerniera inferiore</strong> c'è una vite (brugola 4mm). Ruota 1/4 di giro in senso orario per alzare.</p>
      <h3>Regolazione orizzontale</h3>
      <p>Sposta l'anta di 2-3 mm a destra/sinistra.</p>
      <h3>Regolazione pressione di chiusura</h3>
      <p>I <strong>dardi di chiusura</strong> sono regolabili con chiavetta.</p>
      <p>Se complesso, <a href="/contatti">chiedi un tecnico</a>: per clienti I Profili è in <a href="/garanzie">garanzia post-vendita</a>.</p>

      <h2 id="controlli">Controlli annuali</h2>
      <ul>
        <li><strong>Chiusura</strong>: fluida con una mano</li>
        <li><strong>Tenuta</strong>: test foglio A4</li>
        <li><strong>Spifferi</strong>: mano lungo il perimetro</li>
        <li><strong>Fori di drenaggio</strong>: non otturati</li>
        <li><strong>Vetrocamera</strong>: nessuna condensa interna</li>
        <li><strong>Silicone esterno</strong>: non staccato</li>
        <li><strong>Zanzariere</strong>: pulisci e lubrifica</li>
      </ul>

      <h2 id="errori">Errori più comuni</h2>
      <h3>Prodotti sbagliati</h3>
      <p>Vediamo infissi opacizzati da solventi. Solo acqua e sapone.</p>
      <h3>Lubrificare con WD-40</h3>
      <p>È uno <strong>sbloccante</strong>, non lubrificante. Evapora.</p>
      <h3>Chiudere persiane su finestre aperte</h3>
      <p>Il vento può deformare le cerniere. Usa sempre il fermabattente.</p>
      <h3>Non pulire i fori di drenaggio</h3>
      <p>Otturati, l'acqua ristagna e danneggia l'acciaio interno.</p>
      <h3>Tirare la maniglia dell'anta-ribalta male</h3>
      <p>Va ruotata, non tirata. Errori possono bloccare l'anta.</p>

      <h2 id="faq">FAQ</h2>
      <h3>Ogni quanto la manutenzione?</h3>
      <p>Pulizia <strong>2 volte l'anno</strong>, ingrassaggio <strong>1 volta</strong>, controllo guarnizioni <strong>1 volta</strong>. Circa 2 ore all'anno per tutta la casa.</p>
      <h3>Posso usare il vapore?</h3>
      <p>Meglio evitare. Può penetrare nelle guarnizioni e bagnare l'acciaio.</p>
      <h3>I profili bianchi si ingialliscono?</h3>
      <p>I PVC moderni sono <strong>stabilizzati UV</strong>. <a href="/prodotti/domus">Domus</a> garantisce contrattualmente la stabilità.</p>
      <h3>Se la maniglia si blocca?</h3>
      <p>Non forzare. Apri l'anta, verifica dardi, ingrassa. Se non si risolve, <a href="/garanzie">garanzia 10 anni</a>.</p>
      <h3>Posso cambiare colore a un infisso PVC?</h3>
      <p>Sì, con <strong>pellicole adesive specifiche</strong> (Renolit, Cover Styl'). 80-150 euro a finestra. Non verniciare con smalti normali.</p>

      <p>Se hai dubbi o serve un tagliando professionale, <a href="/contatti">contattaci</a>.</p>
    `,
  },
  {
    id: "guarnizioni-infissi",
    slug: "guarnizioni-infissi-quando-cambiarle-come-fare",
    title: "Guarnizioni Infissi: Quando Cambiarle e Come Fare",
    metaTitle: "Guarnizioni Infissi: Quando Cambiarle",
    metaDescription: "Guarnizioni infissi: scopri quando sostituirle, come riconoscere l'usura, quali scegliere e il metodo fai-da-te.",
    excerpt: "Le guarnizioni sono il cuore della tenuta di un infisso. Ecco come capire se vanno cambiate e come farlo correttamente.",
    date: "16 Febbraio 2026",
    dateISO: "2026-02-16",
    category: "Guide",
    tags: ["guarnizioni infissi", "sostituzione guarnizioni", "tenuta infissi", "spifferi finestre", "EPDM TPE"],
    image: windowDetail,
    imageAlt: "Dettaglio guarnizione di tenuta di un infisso moderno",
    author: { name: "Luca Rossi", role: "Installatore Senior" },
    readingTime: "10 min",
    relatedArticles: ["manutenzione-infissi-pvc", "condensa-finestre", "errori-sostituzione-infissi"],
    content: `
      <p>Le <strong>guarnizioni degli infissi</strong> sono il cuore della tenuta del serramento. Quando si rovinano, arrivano spifferi, condensa, rumore e bollette in aumento. La buona notizia: sostituirle costa poco e spesso si può fare da soli.</p>

      <h2 id="quando">Quando cambiare le guarnizioni</h2>
      <p>Vita media: 15-20 anni con manutenzione, 8-10 senza.</p>
      <h3>Segnali visivi</h3>
      <ul>
        <li><strong>Gomma schiacciata</strong></li>
        <li><strong>Crepe, fessure o tagli</strong></li>
        <li><strong>Distaccamento</strong> dalla sede</li>
        <li><strong>Indurimento</strong></li>
        <li><strong>Macchie nere</strong> di muffa</li>
        <li><strong>Sfarinamento</strong></li>
      </ul>
      <h3>Segnali funzionali</h3>
      <ul>
        <li><strong>Spifferi</strong></li>
        <li><strong>Rumore esterno</strong> aumentato</li>
        <li><strong>Chiusura</strong> troppo dura o lasca</li>
        <li><strong>Condensa</strong> localizzata</li>
        <li><strong>Acqua</strong> sul davanzale dopo pioggia</li>
        <li><strong>Bollette</strong> aumentate</li>
      </ul>
      <h3>Il test del foglio A4</h3>
      <ol>
        <li>Posiziona un foglio A4 tra anta e telaio</li>
        <li>Chiudi la finestra a chiave</li>
        <li>Prova a tirare il foglio</li>
      </ol>
      <p>Se esce facilmente, la guarnizione non tiene.</p>

      <h2 id="tipi">Tipi di guarnizioni</h2>
      <h3>EPDM (gomma etilene-propilene)</h3>
      <ul>
        <li>Standard degli infissi moderni</li>
        <li>Elasticità -40 a +120 °C</li>
        <li>Resistenza UV eccellente</li>
        <li>Durata 20-25 anni</li>
        <li>Costo 2-4 €/metro</li>
      </ul>
      <p>Le guarnizioni montate sui sistemi <a href="/prodotti/domus">Domus di I Profili</a>.</p>

      <h3>TPE (elastomero termoplastico)</h3>
      <ul>
        <li>Moderna, riciclabile</li>
        <li>Durata 15-20 anni</li>
        <li>Vari colori disponibili</li>
      </ul>

      <h3>Silicone</h3>
      <p>Infissi in <strong>alluminio</strong> o legno. Durata 25+ anni.</p>

      <h3>PVC morbido</h3>
      <p>Economiche, si induriscono in 5-8 anni. <strong>Evitare</strong>.</p>

      <h2 id="come-fare">Come sostituire passo-passo</h2>
      <h3>Strumenti</h3>
      <ul>
        <li>Cacciavite a taglio sottile</li>
        <li>Forbici affilate o cutter</li>
        <li>Panno umido</li>
        <li>Alcool denaturato</li>
        <li>Guarnizione nuova (+1-2 m extra)</li>
        <li>Acqua saponata spray</li>
      </ul>

      <h3>Procedura</h3>
      <ol>
        <li><strong>Identifica il tipo</strong>: taglia un pezzo di 5 cm</li>
        <li><strong>Acquista la giusta</strong>: perimetro + 10%</li>
        <li><strong>Apri l'anta</strong></li>
        <li><strong>Rimuovi la vecchia</strong>: parti dall'angolo</li>
        <li><strong>Pulisci la sede</strong></li>
        <li><strong>Lascia asciugare</strong> 10 minuti</li>
        <li><strong>Inserisci la nuova</strong> partendo da un angolo</li>
        <li><strong>Lavora il perimetro</strong>, unico pezzo continuo</li>
        <li><strong>Angoli</strong>: taglio a 45° o curvatura</li>
        <li><strong>Alla fine</strong>, lascia 2-3 mm extra</li>
        <li><strong>Chiudi l'anta</strong> e verifica con foglio A4</li>
      </ol>

      <h3>Trucchi del mestiere</h3>
      <ul>
        <li>Acqua saponata spray per facilitare</li>
        <li>Se rigida per freddo, lasciala in ambiente caldo</li>
        <li>Non usare colla</li>
        <li>Parti sempre da un angolo</li>
        <li>Sostituisci <strong>sia sull'anta sia sul telaio</strong></li>
      </ul>

      <h2 id="quando-tecnico">Quando chiamare un tecnico</h2>
      <ul>
        <li><strong>Infissi in legno</strong></li>
        <li><strong>Scorrevoli</strong></li>
        <li><strong>Alzanti-scorrevoli</strong></li>
        <li><strong>Guarnizioni incollate</strong></li>
        <li><strong>Infissi in garanzia</strong></li>
      </ul>
      <p>Costo professionale: <strong>50-120 euro a finestra</strong>. Per clienti I Profili in <a href="/garanzie">garanzia 10 anni</a>.</p>

      <h2 id="costi">Costi: fai-da-te vs tecnico</h2>
      <h3>Fai-da-te</h3>
      <ul>
        <li>Guarnizione EPDM: 18 euro</li>
        <li>Strumenti: già in casa</li>
        <li>Tempo: 45 minuti</li>
        <li><strong>Totale: 20 euro/finestra</strong></li>
      </ul>
      <h3>Intervento tecnico</h3>
      <ul>
        <li>Materiale: 20 euro</li>
        <li>Manodopera: 50-100 euro</li>
        <li><strong>Totale: 70-120 euro/finestra</strong></li>
      </ul>

      <h2 id="prevenzione">Come farle durare</h2>
      <ul>
        <li><strong>Pulizia</strong> semestrale</li>
        <li><strong>Trattamento</strong> annuale silicone spray</li>
        <li><strong>Non chiudere con violenza</strong></li>
        <li><strong>Pressione di chiusura</strong> corretta</li>
        <li><strong>Evita</strong> candeggina, ammoniaca, solventi</li>
        <li><strong>Apri regolarmente</strong></li>
      </ul>

      <h2 id="faq">FAQ</h2>
      <h3>Posso sostituire in legno da solo?</h3>
      <p>Sconsigliato. 60-150 euro a finestra con tecnico.</p>
      <h3>Quanto durano le nuove?</h3>
      <p><strong>EPDM di qualità</strong>: 20-25 anni. Economiche PVC: 5-8 anni.</p>
      <h3>Posso usare silicone al posto delle guarnizioni?</h3>
      <p>No. Un'anta che si apre schiaccerebbe il silicone.</p>
      <h3>Perché si stacca dopo la sostituzione?</h3>
      <p>È stata tirata durante l'inserimento. Va posata rilassata.</p>
      <h3>Il mio infisso ha 8 anni e sono già dure. Normale?</h3>
      <p>Se non hai fatto manutenzione, possibile. Verifica la <a href="/garanzie">garanzia</a>.</p>

      <p>Per un controllo professionale, <a href="/contatti">chiama I Profili</a>.</p>
    `,
  },
  {
    id: "sostituzione-vetrocamera",
    slug: "sostituzione-vetrocamera-quando-conviene-solo-vetro",
    title: "Sostituire Solo il Vetrocamera: Quando Conviene (e Quando No)",
    metaTitle: "Sostituire Vetrocamera: Quando Conviene",
    metaDescription: "Sostituzione vetrocamera: quando conviene cambiare solo il vetro invece di tutto l'infisso. Costi, prestazioni, casi pratici.",
    excerpt: "Sostituire solo il vetrocamera può essere rapida ed economica. Ecco quando ha senso e quando invece serve cambiare tutto.",
    date: "16 Febbraio 2026",
    dateISO: "2026-02-16",
    category: "Guide",
    tags: ["vetrocamera", "sostituzione vetro", "isolamento termico", "infisso esistente", "risparmio energetico"],
    image: heroWindow,
    imageAlt: "Vetrocamera ad alta efficienza energetica in un infisso moderno",
    author: { name: "Marco Bianchi", role: "Consulente Tecnico" },
    readingTime: "11 min",
    relatedArticles: ["condensa-finestre", "manutenzione-infissi-pvc", "errori-sostituzione-infissi"],
    content: `
      <p>La <strong>sostituzione del vetrocamera</strong> costa tra il 30% e il 50% di un infisso nuovo. Può essere una soluzione eccellente o un errore da 1.000 euro.</p>

      <h2 id="cos-e">Cos'è il vetrocamera</h2>
      <p>Il <strong>vetrocamera</strong> è l'insieme di due o più lastre di vetro separate da un'intercapedine riempita di gas inerte (argon o krypton).</p>
      <h3>Componenti</h3>
      <ul>
        <li><strong>Lastre di vetro</strong></li>
        <li><strong>Intercapedine</strong> (12-18 mm, argon 90%)</li>
        <li><strong>Canalino distanziatore</strong> (warm edge)</li>
        <li><strong>Sigillatura primaria e secondaria</strong></li>
      </ul>
      <h3>Tipi</h3>
      <ul>
        <li><strong>Doppio vetro standard</strong>: Ug 2,7 W/m²K (vecchi)</li>
        <li><strong>Doppio basso-emissivo argon</strong>: Ug 1,1-1,3 W/m²K</li>
        <li><strong>Triplo basso-emissivo</strong>: Ug 0,5-0,7 W/m²K</li>
        <li><strong>Selettivi</strong>: controllano calore solare</li>
        <li><strong>Stratificati antintrusione</strong></li>
      </ul>
      <p>Un vetro degli anni 90 disperde <strong>4-5 volte più calore</strong> di un triplo moderno.</p>

      <h2 id="quando-conviene">Quando conviene sostituire solo il vetrocamera</h2>
      <h3>Infisso strutturalmente in buono stato</h3>
      <p>Telaio integro, ferramenta funzionante. Il vetrocamera è l'anello debole.</p>
      <h3>Vetrocamera rotta o con condensa interna</h3>
      <p>Gocce tra i due vetri: la sigillatura è andata. Sostituire ripristina le prestazioni.</p>
      <h3>Vetro singolo in infisso recente</h3>
      <p>Raro ma capita. Salto di classe energetica.</p>
      <h3>Budget limitato con obiettivo acustico</h3>
      <p><strong>Vetro stratificato acustico</strong> (Rw 42-45 dB): 150-300 euro contro 800-1.500 per infisso nuovo.</p>
      <h3>Infisso vincolato da beni culturali</h3>
      <p>Centri storici con infissi vincolati: l'unica via è il vetro.</p>

      <h2 id="quando-no">Quando NON conviene</h2>
      <h3>Telaio in alluminio senza taglio termico</h3>
      <p>Il telaio anni 70-80 è un enorme ponte termico. Vetri asciutti e telaio bagnato di condensa.</p>
      <h3>Infisso in legno deteriorato</h3>
      <p>Il problema è la struttura, non il vetro.</p>
      <h3>Ferramenta ko</h3>
      <p>L'aria entra dal perimetro, non dal centro.</p>
      <h3>Guarnizioni perimetrali spaccate</h3>
      <p>Se le <a href="/articoli/guarnizioni-infissi-quando-cambiarle-come-fare">guarnizioni sono da cambiare</a>, fallo insieme.</p>
      <h3>Vuoi accedere a detrazioni Ecobonus</h3>
      <p>La sostituzione solo del vetro <strong>NON accede</strong> al Bonus Ristrutturazione né all'Ecobonus in quasi tutti i casi.</p>
      <h3>Infisso oltre 25 anni</h3>
      <p>Avrai comunque bisogno di rifare tutto in 2-3 anni.</p>

      <h2 id="costi">Costi 2026</h2>
      <h3>Prezzi m²</h3>
      <ul>
        <li><strong>Doppio basso-emissivo argon</strong>: 80-120 €/m²</li>
        <li><strong>Triplo basso-emissivo</strong>: 150-200 €/m²</li>
        <li><strong>Stratificato acustico</strong>: 180-250 €/m²</li>
        <li><strong>Selettivo controllo solare</strong>: 180-230 €/m²</li>
        <li><strong>Antintrusione P4A/P5A</strong>: 200-300 €/m²</li>
      </ul>
      <h3>Finestra 120x140 cm</h3>
      <ul>
        <li>Vetro doppio: <strong>250-350 euro</strong></li>
        <li>Triplo basso-emissivo: <strong>400-550 euro</strong></li>
        <li>Acustico stratificato: <strong>450-600 euro</strong></li>
      </ul>
      <h3>Confronto con infisso nuovo</h3>
      <ul>
        <li>Finestra PVC nuova: <strong>600-1.200 euro</strong></li>
        <li>Con Ecobonus 65%: 210-420 euro netto</li>
        <li>Solo vetro senza bonus: 400-550 euro</li>
      </ul>
      <p>Con l'<strong>Ecobonus</strong>, infisso nuovo completo costa spesso meno.</p>

      <h2 id="procedura">La procedura di sostituzione</h2>
      <h3>Rilievo</h3>
      <ol>
        <li>Misura <strong>larghezza, altezza e spessore</strong> del vetro</li>
        <li>Verifica il <strong>tipo di fermavetro</strong></li>
        <li>Controlla lo <strong>stato del telaio</strong></li>
        <li>Verifica che la ferramenta sopporti il <strong>nuovo peso</strong></li>
        <li>Ordina (produzione 10-20 giorni)</li>
      </ol>
      <h3>Installazione</h3>
      <ol>
        <li>Rimozione fermavetri</li>
        <li>Estrazione del vetro (serve assistente)</li>
        <li>Pulizia sede</li>
        <li>Nuovi spessori in plastica</li>
        <li>Inserimento nuovo vetrocamera</li>
        <li>Ripristino fermavetri con silicone neutro</li>
        <li>Regolazione cerniere per il peso</li>
      </ol>
      <p>Tempo: 1-2 ore a finestra. Serve almeno due persone.</p>

      <h2 id="errori">Errori comuni</h2>
      <h3>Triplo vetro su telai sottili</h3>
      <p>Il triplo pesa 25-30 kg/m². Verifica la <strong>portata della ferramenta</strong>.</p>
      <h3>Risparmiare sul canalino</h3>
      <p>Il <strong>warm edge</strong> è obbligatorio per evitare ponti termici.</p>
      <h3>Orientamento strato basso-emissivo</h3>
      <p>Va nella <strong>faccia 3</strong> del vetrocamera. Al contrario perde metà efficacia.</p>
      <h3>Non sostituire le guarnizioni</h3>
      <p>Approfitta per rifare anche guarnizioni, ingrassaggio, regolazione.</p>

      <h2 id="faq">FAQ</h2>
      <h3>Quanto dura un vetrocamera?</h3>
      <p>Qualità con warm edge: 25-30 anni. Economici: 10-15 anni.</p>
      <h3>Posso passare da doppio a triplo vetro?</h3>
      <p>Solo se il telaio ha <strong>almeno 70 mm di profondità</strong>. I <a href="/prodotti/domus">Domus di I Profili</a> sì.</p>
      <h3>Vale l'Ecobonus 65%?</h3>
      <p>In generale <strong>no</strong>: serve intervento sul componente finestra completo.</p>
      <h3>Quanto risparmio?</h3>
      <p>Da singolo a triplo: <strong>25-40%</strong>. Da doppio anni 90 a triplo: <strong>15-20%</strong>.</p>
      <h3>Il stratificato acustico elimina il rumore?</h3>
      <p>Riduce 10-15 dB. -10 dB = dimezzamento percepito. Per traffico intenso servono 6.2/16/5 con Rw 42+.</p>

      <p>Prima di decidere, fai valutare infisso e telaio. <a href="/contatti">Contatta I Profili</a> per sopralluogo gratuito con accesso alle <a href="/garanzie">nostre garanzie</a>.</p>
    `,
  },
];
