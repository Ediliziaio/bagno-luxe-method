// Import immagini locali per prodotti
import serramentiPvcBianco from '@/assets/serramenti-pvc-bianco.jpg';
import serramentiScorrevoloNero from '@/assets/serramenti-scorrevole-nero.webp';
import serramentiModerniNero from '@/assets/serramenti-moderni-nero.webp';
import serramentiPvcGrigio from '@/assets/serramenti-pvc-grigio.jpg';
import heroWindow from '@/assets/hero-window.jpg';
import windowAfter1 from '@/assets/window-after-1.jpg';
import windowAfter2 from '@/assets/window-after-2.jpg';
import windowAfter3 from '@/assets/window-after-3.jpg';
import domusProfileSection from '@/assets/domus-profile-section.jpg';
import heroWindowSlider from '@/assets/hero-window-slider.jpg';
import windowDetail from '@/assets/window-detail.jpg';

export interface ProductFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductDetail {
  id: string;
  name: string;
  category: "infissi" | "accessori" | "porte";
  tagline: string;
  description: string;
  heroImage: string;
  gallery: string[];
  features: ProductFeature[];
  specifications: ProductSpecification[];
  benefits: string[];
  applications: string[];
  relatedProducts: string[];
}

export const products: Record<string, ProductDetail> = {
  // INFISSI
  domus: {
    id: "domus",
    name: "Domus",
    category: "infissi",
    tagline: "La finestra dallo stile semplice, essenziale ed elegante",
    description: "Domus è la finestra in PVC dallo stile semplice, essenziale ed elegante. Grazie allo spessore dell'anta e del telaio da 76mm con anima in acciaio zincato da 2mm a profilo chiuso, garantisce un elevato isolamento termico e acustico e una stabilità strutturale che dura oltre 30 anni. Il giusto compromesso tra qualità, prestazioni e prezzo. La Titanium Technology conferisce ai profili eccellenti caratteristiche tecniche: eccezionali proprietà termiche, elevata rigidità, straordinaria lucentezza e resistenza superiore allo scolorimento. Profili ecologici e privi di piombo.",
    heroImage: serramentiPvcBianco,
    gallery: [
      serramentiPvcBianco,
      heroWindowSlider,
      windowDetail
    ],
    features: [
      { icon: "Ruler", title: "Profilo 76mm", description: "Profondità telaio e anta per massimo isolamento" },
      { icon: "Layers", title: "6 Camere", description: "Sistema multicamera per isolamento superiore" },
      { icon: "Shield", title: "Acciaio 2mm", description: "Anima in acciaio zincato a profilo chiuso, durata 30+ anni" },
      { icon: "Thermometer", title: "Uw 0,85", description: "Trasmittanza termica eccellente" },
      { icon: "Leaf", title: "Titanium Technology", description: "PVC ecologico senza piombo" },
      { icon: "Sparkles", title: "Saldatura Invisibile", description: "Finitura estetica eccellente" },
      { icon: "Droplets", title: "2/3 Guarnizioni", description: "Alta memoria elastica anti-spiffero" }
    ],
    specifications: [
      { label: "Profondità telaio", value: "76 mm" },
      { label: "Trasmittanza termica Uw", value: "0,85 W/m²K" },
      { label: "Numero camere", value: "6" },
      { label: "Guarnizioni", value: "2/3 alta memoria elastica" },
      { label: "Anima in acciaio", value: "2mm zincato a profilo chiuso" },
      { label: "Tecnologia", value: "Titanium Technology" },
      { label: "Garanzia", value: "10 anni" }
    ],
    benefits: [
      "Stile semplice, essenziale ed elegante",
      "Acciaio 2mm a profilo chiuso per stabilità 30+ anni",
      "Titanium Technology - PVC ecologico senza piombo",
      "Saldatura invisibile per finitura estetica eccellente",
      "Eccezionali proprietà termiche e acustiche",
      "Resistenza superiore allo scolorimento"
    ],
    applications: [
      "Ristrutturazioni residenziali",
      "Nuove costruzioni",
      "Sostituzione infissi esistenti",
      "Edifici in classe A e superiori",
      "Zone climatiche rigide"
    ],
    relatedProducts: ["lumier", "idole", "alum"]
  },
 
  lumier: {
    id: "lumier",
    name: "Lumier",
    category: "infissi",
    tagline: "La finestra in PVC che ti porta il 27% in più di luce in casa",
    description: "Lumier è una finestra moderna, caratterizzata da un'ottima estetica e dai profili di telaio e anta di spessore ridotto. Assicura il passaggio di un'elevata quantità di luce, caratteristica molto importante soprattutto nell'edilizia meno recente, contraddistinta da finestre alte e strette. La struttura si distingue per i suoi eccellenti parametri statici e di resistenza, garantendo una maggiore durata nel tempo. Questo sistema con un alto livello di tenuta costituisce la soluzione ideale per tutti coloro che non si accontentano solo di un design elegante, ma cercano anche prestazioni superiori in termini di isolamento termico e acustico.",
    heroImage: serramentiScorrevoloNero,
    gallery: [
      serramentiScorrevoloNero,
      heroWindow,
      windowAfter1
    ],
    features: [
      { icon: "Sun", title: "+27% Luce Naturale", description: "Profili ridotti per massima superficie vetrata" },
      { icon: "Ruler", title: "Profilo 70mm", description: "Telaio e anta di spessore ridotto per design minimale" },
      { icon: "Thermometer", title: "Uw 0,85", description: "Eccellente isolamento termico" },
      { icon: "Leaf", title: "Titanium Technology", description: "PVC ecologico senza piombo" },
      { icon: "Shield", title: "2/3 Guarnizioni", description: "Alto livello di tenuta e isolamento" },
      { icon: "Move", title: "Montante Mobile 42mm", description: "Sezione centrale ridotta a 112mm" }
    ],
    specifications: [
      { label: "Profondità telaio", value: "70 mm" },
      { label: "Trasmittanza termica Uw", value: "0,85 W/m²K" },
      { label: "Guarnizioni", value: "2/3" },
      { label: "Montante mobile", value: "42 mm" },
      { label: "Sezione centrale", value: "112 mm" },
      { label: "Tecnologia", value: "Titanium Technology (PVC senza piombo)" },
      { label: "Opzioni", value: "Maniglia centrale disponibile" }
    ],
    benefits: [
      "+27% di luce naturale in ogni ambiente",
      "Profili ultra-sottili per design contemporaneo",
      "Eccellente isolamento termico Uw 0,85",
      "PVC ecologico Titanium Technology",
      "Ideale per edifici storici e finestre alte",
      "Parametri statici e resistenza superiori"
    ],
    applications: [
      "Appartamenti con finestre alte e strette",
      "Edifici storici e ristrutturazioni",
      "Ambienti con poca luce naturale",
      "Design contemporaneo e minimale"
    ],
    relatedProducts: ["domus", "idole", "alum"]
  },
 
  idole: {
    id: "idole",
    name: "Idole",
    category: "infissi",
    tagline: "La Finestra in PVC con Carter in Alluminio - Design moderno e prestazioni energetiche eccellenti",
    description: "Idole è un serramento versatile e intelligente, perfetto per chi apprezza il fascino moderno dell'alluminio senza voler rinunciare ai vantaggi del PVC. È possibile combinare in un unico serramento le prestazioni isolanti del PVC con la robustezza e l'estetica contemporanea dell'alluminio. All'interno presenta un profilo in PVC dalle linee definite e moderne con eccellente isolamento termico e acustico. All'esterno si distingue per il rivestimento in alluminio Aluskin, disponibile in tutti i colori della gamma RAL.",
    heroImage: serramentiModerniNero,
    gallery: [
      serramentiModerniNero,
      heroWindowSlider,
      windowAfter2
    ],
    features: [
      { icon: "Layers", title: "PVC + Alluminio", description: "Interno in PVC isolante, esterno in alluminio Aluskin" },
      { icon: "Palette", title: "Tutti i Colori RAL", description: "Rivestimento esterno disponibile in qualsiasi colore RAL" },
      { icon: "Thermometer", title: "Isolamento Eccellente", description: "Vetrocamere basso-emissive per massime prestazioni" },
      { icon: "Leaf", title: "Titanium Technology", description: "PVC ecologico senza piombo" },
      { icon: "Sparkles", title: "Idole Neo", description: "Variante con saldatura invisibile e drenaggio innovativo" },
      { icon: "Shield", title: "Longevità Superiore", description: "Resistenza e durata nel tempo garantite" }
    ],
    specifications: [
      { label: "Materiale interno", value: "PVC Titanium Technology" },
      { label: "Materiale esterno", value: "Alluminio Aluskin" },
      { label: "Finiture esterne", value: "Tutti i colori RAL" },
      { label: "Guarnizioni", value: "Elastomeri termoplastici" },
      { label: "Vetrocamere", value: "Basso-emissive" },
      { label: "Variante", value: "Idole Neo (saldatura invisibile)" }
    ],
    benefits: [
      "Il fascino dell'alluminio con i vantaggi del PVC",
      "Personalizzazione totale con gamma RAL completa",
      "Eccellente isolamento termico e acustico",
      "PVC ecologico Titanium Technology",
      "Disponibile versione Neo con saldatura invisibile",
      "Longevità e resistenza superiori"
    ],
    applications: [
      "Abitazioni moderne con estetica contemporanea",
      "Ristrutturazioni con esigenze di personalizzazione",
      "Edifici con requisiti estetici elevati",
      "Progetti che richiedono colori RAL specifici"
    ],
    relatedProducts: ["domus", "lumier", "legno-alluminio"]
  },
 
  alum: {
    id: "alum",
    name: "Tempra",
    category: "infissi",
    tagline: "La luce si fa spazio",
    description: "Tempra è un infisso in alluminio a taglio termico di nuova progettazione. È stato studiato per una tipologia di clientela attenta al design ma anche alla prestazione termica. La fase produttiva esalta tutte le caratteristiche tipiche dei prodotti in alluminio: leggerezza, grande resistenza e percezione di solidità costruttiva, integrate con un'innovativa soluzione per il taglio termico (barra di poliammide). La costruzione a \"gusci\" permette di realizzare facilmente il bicolore mentre le due ante con nodo centrale asimmetrico garantiscono una maggior superficie vetrata. Disponibile con doppio e triplo vetro (Uw=1,1).",
    heroImage: serramentiPvcGrigio,
    gallery: [
      serramentiPvcGrigio,
      heroWindow,
      windowAfter3
    ],
    features: [
      { icon: "Ruler", title: "Design Moderno", description: "Geometrie squadrate e minimo impatto visivo" },
      { icon: "Sun", title: "+20% Luce", description: "Sezioni ridotte e nodo centrale asimmetrico per maggior superficie vetrata" },
      { icon: "Clock", title: "20 Anni Garanzia", description: "Durata garantita nel tempo" },
      { icon: "Wrench", title: "Zero Manutenzione", description: "Totale assenza di manutenzione nel tempo" },
      { icon: "Palette", title: "Opzione Bicolore", description: "Costruzione a gusci per personalizzazione interna/esterna" },
      { icon: "Thermometer", title: "Detrazione Fiscale", description: "Valori trasmittanza conformi per bonus 50%" }
    ],
    specifications: [
      { label: "Materiale", value: "Alluminio a taglio termico con barra poliammide" },
      { label: "Trasmittanza termica Uw", value: "1,1 W/m²K con triplo vetro" },
      { label: "Garanzia", value: "20 anni" },
      { label: "Vetro", value: "Doppio o triplo" },
      { label: "Costruzione", value: "A gusci per opzione bicolore" },
      { label: "Nodo centrale", value: "Asimmetrico per +20% luce" }
    ],
    benefits: [
      "Design moderno con geometrie squadrate",
      "+20% di luce grazie a sezioni ridotte",
      "20 anni di garanzia",
      "Zero manutenzione",
      "Possibilità bicolore interno/esterno",
      "Conforme per detrazione fiscale 50%"
    ],
    applications: [
      "Abitazioni moderne con design contemporaneo",
      "Ristrutturazioni con focus su luce naturale",
      "Edifici residenziali e commerciali",
      "Progetti architettonici di pregio"
    ],
    relatedProducts: ["domus", "lumier", "legno-alluminio"]
  },
 
  "legno-alluminio": {
    id: "legno-alluminio",
    name: "Skywood",
    category: "infissi",
    tagline: "Eleganza unica - Il calore del legno, la resistenza dell'alluminio",
    description: "Il nuovo profilo anta dello Skywood EVO Original, rivisitato in stile moderno, trova ispirazione dal passato. La forma elegante e le linee morbide, unite al grande impatto del legno massello, rendono questo infisso ideale sia per abitazioni in stile classico che per quelle con un design più contemporaneo. Lo Skywood EVO Original è un prodotto misto Alluminio/Legno di nuova concezione, che unisce alle prestazioni eccezionali della struttura in alluminio a taglio termico tutto il calore e l'eleganza del legno. Un'ottima soluzione per chi ricerca il risparmio energetico.",
    heroImage: heroWindow,
    gallery: [
      heroWindow,
      windowDetail,
      heroWindowSlider
    ],
    features: [
      { icon: "Ruler", title: "Design Moderno", description: "Geometrie squadrate e minimo impatto visivo" },
      { icon: "Sun", title: "+20% Luce", description: "Sezioni ridotte e nodo centrale asimmetrico" },
      { icon: "Clock", title: "20 Anni Garanzia", description: "Durata garantita nel tempo" },
      { icon: "Wrench", title: "Zero Manutenzione", description: "L'alluminio esterno non richiede manutenzione" },
      { icon: "TreeDeciduous", title: "Legno Massello", description: "Calore ed eleganza naturale all'interno" },
      { icon: "Thermometer", title: "Risparmio Energetico", description: "Eccellenti prestazioni termiche" }
    ],
    specifications: [
      { label: "Materiale interno", value: "Legno massello" },
      { label: "Materiale esterno", value: "Alluminio a taglio termico" },
      { label: "Trasmittanza Uw standard", value: "1,4 W/m²K" },
      { label: "Trasmittanza Uw triplex", value: "1,1 W/m²K" },
      { label: "Garanzia", value: "20 anni" },
      { label: "Profilo", value: "EVO Original stile moderno" }
    ],
    benefits: [
      "Design moderno ispirato alla tradizione",
      "+20% di luce con sezioni ridotte",
      "20 anni di garanzia",
      "Zero manutenzione esterna",
      "Legno massello per calore interno",
      "Ottimo risparmio energetico"
    ],
    applications: [
      "Abitazioni in stile classico",
      "Design contemporaneo",
      "Ville e case indipendenti",
      "Ristrutturazioni di pregio"
    ],
    relatedProducts: ["domus", "idole", "alum"]
  },
 
   // ACCESSORI
  persiane: {
    id: "persiane",
    name: "Persiane",
    category: "accessori",
    tagline: "Eleganza italiana e controllo totale della luce",
    description: "Le persiane in alluminio uniscono design italiano e funzionalità superiore. Lamelle orientabili per regolare luce e ventilazione con precisione millimetrica. Resistenza garantita agli agenti atmosferici, manutenzione minima e durata nel tempo. Disponibili a battente o scorrevoli, anche motorizzate. La soluzione perfetta per chi cerca protezione, privacy e stile senza compromessi.",
    heroImage: new URL("@/assets/products/persiane-hero.jpg", import.meta.url).href,
    gallery: [
      new URL("@/assets/products/persiane-gallery-1.jpg", import.meta.url).href,
      new URL("@/assets/products/persiane-gallery-2.jpg", import.meta.url).href,
      new URL("@/assets/products/persiane-gallery-3.jpg", import.meta.url).href
    ],
    features: [
      { icon: "Sun", title: "Lamelle Orientabili", description: "Controllo preciso della luce e ventilazione" },
      { icon: "Columns", title: "Doghe Verticali/Orizzontali", description: "Oscuramento totale con privacy garantita" },
      { icon: "ArrowLeftRight", title: "Versione Scorrevole", description: "Scorrevole in luce o a scomparsa" },
      { icon: "Zap", title: "Sistema Automatizzato", description: "Motorizzazione con tasto opzionale" },
      { icon: "Shield", title: "Protezione Privacy", description: "Sicurezza da sguardi esterni" },
      { icon: "Cloud", title: "Resistenza Atmosferica", description: "Alluminio resistente agli agenti atmosferici" },
      { icon: "Palette", title: "Cromie Multiple", description: "Diverse finiture per ogni stile architettonico" },
      { icon: "FileCheck", title: "Normative Rispettate", description: "Conformi alle normative paesaggistiche" }
    ],
    specifications: [
      { label: "Materiale", value: "Alluminio estruso di alta qualità" },
      { label: "Lamelle", value: "Fisse, orientabili, doghe verticali/orizzontali" },
      { label: "Apertura", value: "Battente, scorrevole in luce, a scomparsa" },
      { label: "Automazione", value: "Sistema motorizzato opzionale" },
      { label: "Finiture", value: "Molteplici cromie e texture disponibili" },
      { label: "Accessori", value: "Cardini robusti, cerniere a scomparsa" },
      { label: "Garanzia", value: "5 anni" }
    ],
    benefits: [
      "Controllo preciso di illuminazione e aerazione",
      "Lamelle fisse o orientabili a scelta",
      "Versione scorrevole anche a scomparsa",
      "Sistema automatizzato disponibile",
      "Resistenza agli agenti atmosferici",
      "Conformi alle normative paesaggistiche"
    ],
    applications: [
      "Abitazioni moderne e tradizionali",
      "Ville e case indipendenti",
      "Centri storici",
      "Edifici con vincoli paesaggistici"
    ],
    relatedProducts: ["tapparelle", "zanzariere", "cassonetti"]
  },
 
  tapparelle: {
    id: "tapparelle",
    name: "Tapparelle",
    category: "accessori",
    tagline: "Leggerezza, resistenza e efficienza energetica",
    description: "Le tapparelle in alluminio combinano leggerezza, resistenza (anche alla corrosione) e bassa manutenzione. Queste caratteristiche ne garantiscono la durabilità nel tempo, da 15 a 30 anni. Migliorano la sicurezza e l'efficienza energetica dell'abitazione con un design moderno e versatile. Disponibili con coibentazione in poliuretano espanso per stabilità della temperatura interna. Modelli: Maxi Nova (poliuretano bassa densità), Secur Maxi (alta densità, grandi superfici), Aria Luce HD (lamelle perforate per luce anche da chiuse).",
    heroImage: windowAfter1,
    gallery: [
      windowAfter1,
      windowAfter2,
      windowAfter3
    ],
    features: [
      { icon: "Thermometer", title: "Coibentazione Termica", description: "Poliuretano espanso per stabilità temperatura" },
      { icon: "Feather", title: "Struttura Leggera", description: "Lamelle 37-55mm solide e leggere" },
      { icon: "Clock", title: "Durata 15-30 Anni", description: "Garanzia di durabilità nel tempo" },
      { icon: "Wind", title: "Resistenza Vento", description: "120-180% superiore al PVC" },
      { icon: "Shield", title: "Anti-Sollevamento", description: "Sistemi di sicurezza integrati" },
      { icon: "Droplets", title: "Anticorrosione", description: "Trattamento protettivo duraturo" },
      { icon: "Volume2", title: "Isolamento Acustico", description: "Abbattimento rumori integrato" },
      { icon: "Receipt", title: "Bonus Sicurezza 2026", description: "Detrazione fiscale disponibile" }
    ],
    specifications: [
      { label: "Materiale", value: "Lega di alluminio" },
      { label: "Larghezza lamelle", value: "37-55 mm" },
      { label: "Spessore lamelle", value: "0,18-0,21 mm" },
      { label: "Coibentazione", value: "Poliuretano espanso (bassa/alta densità)" },
      { label: "Meccanismo", value: "Cinghia o catenella" },
      { label: "Trattamento", value: "Anodizzazione o polimeri protettivi" },
      { label: "Modelli", value: "Maxi Nova, Secur Maxi, Aria Luce HD" },
      { label: "Garanzia durabilità", value: "15-30 anni" }
    ],
    benefits: [
      "Leggerezza e resistenza alla corrosione",
      "Coibentazione termica con poliuretano espanso",
      "Durabilità garantita da 15 a 30 anni",
      "Resistenza al vento superiore al PVC",
      "Sistemi di sicurezza anti-sollevamento",
      "Bonus sicurezza 2026 con detrazione fiscale"
    ],
    applications: [
      "Abitazioni moderne",
      "Camere da letto",
      "Uffici",
      "Ristrutturazioni energetiche"
    ],
    relatedProducts: ["persiane", "zanzariere", "cassonetti"]
  },
 
  zanzariere: {
    id: "zanzariere",
    name: "Zanzariere",
    category: "accessori",
    tagline: "Aria fresca senza insetti - Comfort naturale tutto l'anno",
    description: "Le nostre zanzariere garantiscono protezione al 99% dagli insetti mantenendo la circolazione d'aria e la luce naturale. Niente più repellenti chimici: un ambiente più sano per tutta la famiglia. 5 modelli disponibili per ogni esigenza: Estetika (anti-cimici, clic-clak), Neoscenica (per porte, antivento Anima21), Bora Top (scorrimento laterale brevettato), Wind (verticale, push up), Evo Zip (motorizzata, grandi dimensioni).",
    heroImage: new URL("@/assets/products/zanzariere-hero.jpg", import.meta.url).href,
    gallery: [
      new URL("@/assets/products/zanzariere-gallery-1.jpg", import.meta.url).href,
      new URL("@/assets/products/zanzariere-gallery-2.jpg", import.meta.url).href,
      new URL("@/assets/products/zanzariere-gallery-3.jpg", import.meta.url).href
    ],
    features: [
      { icon: "Bug", title: "Protezione 99%", description: "Barriera quasi totale contro gli insetti" },
      { icon: "Grid3x3", title: "Mesh Anti-Insetti", description: "Fibra di vetro o poliestere, aperture <1mm" },
      { icon: "Magnet", title: "Meccanismi Magnetici", description: "Chiusura magnetica o a strappo" },
      { icon: "Shield", title: "Carroarmato", description: "Applicato sul fondo per robustezza" },
      { icon: "Wind", title: "Sistema Antivento", description: "Anima21 per stabilità in caso di vento" },
      { icon: "Zap", title: "Versione Motorizzata", description: "Evo Zip con radiocomando" },
      { icon: "Wrench", title: "Bassa Manutenzione", description: "Robustezza e facilità di pulizia" },
      { icon: "MousePointerClick", title: "Clic-Clak", description: "Installazione senza viti" }
    ],
    specifications: [
      { label: "Rete", value: "Fibra di vetro, poliestere, Nera Strong" },
      { label: "Guida", value: "Alluminio estruso (min 1,8mm)" },
      { label: "Colori", value: "Bianco, grigio, avorio, nero" },
      { label: "Tipologie", value: "Laterale, verticale, motorizzata" },
      { label: "Sistema", value: "Clic-clak, push up, telescopico" },
      { label: "Modelli", value: "Estetika, Neoscenica, Bora Top, Wind, Evo Zip" },
      { label: "Protezione", value: "Fino al 99%" }
    ],
    benefits: [
      "Protezione insetti fino al 99%",
      "Circolazione d'aria e luce naturale",
      "Nessun repellente chimico necessario",
      "5 modelli per ogni esigenza",
      "Sistema antivento disponibile",
      "Versione motorizzata con radiocomando"
    ],
    applications: [
      "Finestre e porte finestre",
      "Porte d'ingresso",
      "Ambienti con verde circostante",
      "Grandi aperture e zone ventilate"
    ],
    relatedProducts: ["persiane", "tapparelle", "cassonetti"]
  },
 
  cassonetti: {
    id: "cassonetti",
    name: "Cassonetti",
    category: "accessori",
    tagline: "Cassonetti in PVC certificati - Isolamento termico e acustico",
    description: "I cassonetti in PVC rappresentano la soluzione ideale per rivestire l'avvolgibile delle finestre. Perfetti per sostituire i vecchi cassonetti in legno o metallo, dal design moderno e pulito, assicurano eccellenti valori di isolamento termico. Facili da installare, si adattano a tutte le tipologie di finestre e porte-finestre. Sistema cassonetto con profilo principale multicamera termosaldato sui 4 lati. Ignifughi, impermeabili e 100% riciclabili.",
    heroImage: domusProfileSection,
    gallery: [
      domusProfileSection,
      windowDetail,
      heroWindowSlider
    ],
    features: [
      { icon: "Layers", title: "PVC Multicamera", description: "Profilo termosaldato sui 4 lati" },
      { icon: "Wind", title: "Tenuta Aria", description: "Guarnizione multifunzionale integrata" },
      { icon: "Ruler", title: "Pannelli 10/24mm", description: "Spessore a scelta per ogni esigenza" },
      { icon: "Wrench", title: "Ispezione Facile", description: "Rimozione semplice per accesso al vano" },
      { icon: "Receipt", title: "Bonus Fiscali", description: "Certificati per detrazioni" },
      { icon: "Flame", title: "Ignifughi", description: "Resistenza al fuoco garantita" },
      { icon: "Droplets", title: "Impermeabili", description: "Protezione totale dall'acqua" },
      { icon: "Recycle", title: "100% Riciclabili", description: "Materiali eco-sostenibili" }
    ],
    specifications: [
      { label: "Materiale", value: "PVC multicamera" },
      { label: "Spessore profilo", value: "21 mm" },
      { label: "Pannelli", value: "10 mm o 24 mm" },
      { label: "Termosaldatura", value: "4 lati" },
      { label: "Certificazioni", value: "Complete per bonus fiscali" },
      { label: "Tenuta", value: "Aria e rumori garantita" },
      { label: "Garanzia", value: "10 anni" }
    ],
    benefits: [
      "Isolamento termico elevato",
      "Insonorizzato e indeformabile",
      "Facile da pulire e manutenere",
      "Certificati per bonus fiscali",
      "Ignifughi e impermeabili",
      "100% riciclabili ed eco-sostenibili"
    ],
    applications: [
      "Sostituzione cassonetti in legno/metallo",
      "Nuove costruzioni",
      "Ristrutturazioni energetiche",
      "Edifici ad alta efficienza"
    ],
    relatedProducts: ["tapparelle", "persiane", "zanzariere"]
  },
 
   // PORTE
   "porte-interno": {
     id: "porte-interno",
     name: "Porte da Interno",
     category: "porte",
     tagline: "Design elegante per ogni ambiente della casa",
     description: "Porte interne di alta qualità che trasformano ogni ambiente. Battente o scorrevole, in legno, laccate o con vetro: soluzioni su misura per ogni stile. Finiture pregiate, isolamento acustico fino a 32 dB e personalizzazione completa. La qualità italiana che fa la differenza in ogni dettaglio.",
    heroImage: new URL("@/assets/products/porte-interno-hero.jpg", import.meta.url).href,
    gallery: [
      new URL("@/assets/products/porte-interno-gallery-1.jpg", import.meta.url).href,
      new URL("@/assets/products/porte-interno-gallery-2.jpg", import.meta.url).href,
      new URL("@/assets/products/porte-interno-gallery-3.jpg", import.meta.url).href
    ],
     features: [
       { icon: "DoorOpen", title: "Battente o Scorrevole", description: "Soluzioni per ogni esigenza di spazio" },
       { icon: "Palette", title: "Finiture Premium", description: "Laccate, laminate, in legno, vetro" },
       { icon: "Ruler", title: "Su Misura", description: "Dimensioni completamente personalizzabili" },
       { icon: "Volume2", title: "Insonorizzate", description: "Abbattimento acustico fino a 32 dB" }
     ],
     specifications: [
       { label: "Tipologie", value: "Battente, Scorrevole a scomparsa, Scorrevole esterno" },
       { label: "Materiali anta", value: "Legno tamburato, MDF, Vetro temperato" },
       { label: "Finiture", value: "Laccato opaco/lucido, Laminato, Impiallacciato, Vetro" },
       { label: "Spessore anta", value: "40-45 mm" },
       { label: "Abbattimento acustico", value: "Fino a 32 dB" },
       { label: "Produzione", value: "Qualità certificata" },
       { label: "Garanzia", value: "5 anni" }
     ],
     benefits: [
       "Design contemporaneo premium",
       "Ampia scelta di finiture premium",
       "Soluzioni salvaspazio scorrevoli",
       "Isolamento acustico fino a 32 dB",
       "Personalizzazione completa",
       "Qualità costruttiva italiana"
     ],
     applications: [
       "Abitazioni private",
       "Uffici e studi professionali",
       "Strutture ricettive",
       "Ristrutturazioni di pregio"
     ],
     relatedProducts: ["porta-blindata"]
   },
 
   "porta-blindata": {
     id: "porta-blindata",
     name: "Porta Blindata",
     category: "porte",
     tagline: "Sicurezza certificata Classe 3 e Classe 4 - Protezione totale",
     description: "Porte blindate certificate fino a Classe 4 (EN 1627): la massima protezione per la tua casa. Cilindro europeo anti-bumping, anti-picking e anti-trapano. Fino a 15 punti di chiusura e 18 punti di ancoraggio. Isolamento termoacustico superiore con design completamente personalizzabile.",
    heroImage: new URL("@/assets/products/porta-blindata-hero.jpg", import.meta.url).href,
    gallery: [
      new URL("@/assets/products/porta-blindata-gallery-1.jpg", import.meta.url).href,
      new URL("@/assets/products/porta-blindata-gallery-2.jpg", import.meta.url).href,
      new URL("@/assets/products/porta-blindata-gallery-3.jpg", import.meta.url).href
    ],
     features: [
       { icon: "Shield", title: "Classe 3 e Classe 4", description: "Sicurezza certificata EN 1627" },
       { icon: "Lock", title: "Cilindro Europeo", description: "Anti-bumping, anti-picking e anti-trapano" },
       { icon: "Thermometer", title: "Coibentata", description: "Isolamento termico e acustico superiore" },
       { icon: "Palette", title: "Design Premium", description: "Oltre 50 pannelli personalizzabili" }
     ],
     specifications: [
       { label: "Classe antieffrazione", value: "Classe 3 e Classe 4 (EN 1627)" },
       { label: "Punti di chiusura", value: "Fino a 15" },
       { label: "Punti di ancoraggio", value: "Fino a 18" },
       { label: "Serratura", value: "Cilindro europeo anti-bumping/picking/trapano" },
       { label: "Spessore porta", value: "80-100 mm" },
       { label: "Trasmittanza termica", value: "1.8 W/m²K" },
       { label: "Abbattimento acustico", value: "40 dB" },
       { label: "Pannelli", value: "Oltre 50 modelli" },
       { label: "Garanzia", value: "10 anni" }
     ],
     benefits: [
       "Sicurezza certificata Classe 3 e Classe 4",
       "Cilindro europeo anti-effrazione",
       "Fino a 15 punti di chiusura",
       "Isolamento termoacustico superiore",
       "Design completamente personalizzabile",
       "Installazione professionale inclusa"
     ],
     applications: [
       "Ingresso principale abitazioni",
       "Appartamenti in condominio",
       "Ville e case indipendenti",
       "Uffici e studi professionali"
     ],
     relatedProducts: ["porte-interno"]
   }
 };
 
 export const getProductById = (id: string): ProductDetail | undefined => {
   return products[id];
 };
 
 export const getProductsByCategory = (category: "infissi" | "accessori" | "porte"): ProductDetail[] => {
   return Object.values(products).filter(p => p.category === category);
 };
 
 export const getRelatedProducts = (productId: string): ProductDetail[] => {
   const product = products[productId];
   if (!product) return [];
   return product.relatedProducts.map(id => products[id]).filter(Boolean);
 };
 
export const menuCategories = [
  {
    title: "Infissi",
    items: [
      { name: "Domus", href: "/prodotti/domus", description: "Sistema 76mm premium" },
      { name: "Lumier", href: "/prodotti/lumier", description: "+27% luce naturale" },
      { name: "Idole", href: "/prodotti/idole", description: "PVC + Alluminio Aluskin" },
      { name: "Tempra", href: "/prodotti/alum", description: "Alluminio taglio termico" },
      { name: "Skywood", href: "/prodotti/legno-alluminio", description: "Legno + Alluminio" },
    ]
  },
   {
     title: "Accessori",
     items: [
       { name: "Persiane", href: "/prodotti/persiane", description: "Protezione tradizionale" },
       { name: "Tapparelle", href: "/prodotti/tapparelle", description: "Avvolgibili coibentate" },
       { name: "Zanzariere", href: "/prodotti/zanzariere", description: "Anti-insetti" },
       { name: "Cassonetti", href: "/prodotti/cassonetti", description: "Coibentati" },
     ]
   },
   {
     title: "Porte",
     items: [
       { name: "Porte da Interno", href: "/prodotti/porte-interno", description: "Design Premium" },
       { name: "Porta Blindata", href: "/prodotti/porta-blindata", description: "Sicurezza Classe 3 e 4" },
     ]
   }
 ];