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
    heroImage: "https://www.i-profili.it/wp-content/uploads/2024/09/quanto-costa-una-finestra-in-pvc.jpg",
    gallery: [
      "https://www.i-profili.it/wp-content/uploads/2024/09/quanto-costa-una-finestra-in-pvc.jpg",
      "https://www.i-profili.it/wp-content/uploads/2024/09/foto-infissi-in-pvc-1.jpg",
      "https://www.i-profili.it/wp-content/uploads/2024/09/Serramenti-in-PVC-1024x628.jpg"
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
    heroImage: "https://www.i-profili.it/wp-content/uploads/2024/08/L21lZGlhL191cGxvYWQvc2VjdGlvbnMvaW5zcGlyYXRpb25zL29rbmEtaS1kcnp3aS1iYWxrb25vd2UtaWdsby1saWdodC5qcGc.webp",
    gallery: [
      "https://www.i-profili.it/wp-content/uploads/2024/08/L21lZGlhL191cGxvYWQvc2VjdGlvbnMvaW5zcGlyYXRpb25zL29rbmEtaS1kcnp3aS1iYWxrb25vd2UtaWdsby1saWdodC5qcGc.webp",
      "https://www.i-profili.it/wp-content/uploads/2024/08/L21lZGlhL191cGxvYWQvc2VjdGlvbnMvaW5zcGlyYXRpb25zL3N5cGlhbG5pYS9va25vLWlnbG8tbGlnaHQtbmFzdG9sYXRlay5qcGc-1.webp",
      "https://www.i-profili.it/wp-content/uploads/2024/08/L21lZGlhL191cGxvYWQvc2VjdGlvbnMvaW5zcGlyYXRpb25zL3NhbG9uL29rbmFfaWdsb19saWdodF9zYWxvbi5qcGc-1024x630.webp",
      "https://www.i-profili.it/wp-content/uploads/elementor/thumbs/as-slim-nodo-france-ambientazione-misure-01-7239361f88ec2e6d0d1df4f332ece9e6-1024x748-1-qt4kj7zee1y74ojndnhc26547k5us74xolctbn8m1s.jpg",
      "https://www.i-profili.it/wp-content/uploads/2024/08/Progetto-senza-titolo-46.png"
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
    heroImage: "https://www.i-profili.it/wp-content/uploads/2024/09/WnD-finestra-pvc-infissi-aluskin-1.webp",
    gallery: [
      "https://www.i-profili.it/wp-content/uploads/2024/09/WnD-finestra-pvc-infissi-aluskin-1.webp",
      "https://www.i-profili.it/wp-content/uploads/2024/09/GEALAN-KONTUR-Aluschale-08-800x800-1.jpg",
      "https://www.i-profili.it/wp-content/uploads/2024/09/WnD-finestre-PVC-aluskin-dettaglio.webp",
      "https://www.i-profili.it/wp-content/uploads/elementor/thumbs/11-quuq3ecdx3t23u0j8ruur3xslkqiwhp0kumcnbq274.jpg"
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
    heroImage: "https://www.i-profili.it/wp-content/uploads/2024/09/sitogallerytempra1000x1000-292-1000x1000-1.jpg",
    gallery: [
      "https://www.i-profili.it/wp-content/uploads/2024/09/sitogallerytempra1000x1000-292-1000x1000-1.jpg",
      "https://www.i-profili.it/wp-content/uploads/2024/09/AirSlideWood-Korus-ambientata-donna.jpg",
      "https://www.i-profili.it/wp-content/uploads/2024/09/sitogallerytempra11000x1000-293-1000x1000-1.jpg"
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
    heroImage: "https://www.i-profili.it/wp-content/uploads/2024/09/skywood-evo-original-ambientato-letto-1.jpg",
    gallery: [
      "https://www.i-profili.it/wp-content/uploads/2024/09/skywood-evo-original-ambientato-letto-1.jpg",
      "https://www.i-profili.it/wp-content/uploads/2024/09/infissi-in-legno-alluminio.jpg",
      "https://www.i-profili.it/wp-content/uploads/2024/09/skywood-evo-ambientato-interno-1024x691.jpg"
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
    tagline: "Persiane in alluminio per illuminazione e aerazione ottimali",
    description: "Le persiane in alluminio sono progettate per regolare il livello di illuminazione e aerazione degli ambienti. Disponibili con lamelle fisse o orientabili, permettono di dosare la luce e la ventilazione a piacere. Le lamelle fisse o ovaline mantengono la privacy consentendo l'ingresso della luce. Le doghe verticali e orizzontali permettono di oscurare interamente gli spazi garantendo privacy ed essenzialità. Disponibili anche in versione scorrevole con sistema automatizzato.",
    heroImage: "https://www.metrabuilding.com/wp-content/uploads/2023/12/persiane-lamelle-fisse-e-orientabili-01.jpg",
    gallery: [
      "https://www.metrabuilding.com/wp-content/uploads/2023/12/persiane-lamelle-fisse-e-orientabili-01.jpg",
      "https://www.metrabuilding.com/wp-content/uploads/2023/12/persiane-doghe-verticali-e-orizzontali-01.jpg",
      "https://www.metrabuilding.com/wp-content/uploads/2023/12/persiane-scorrevoli-01.jpg"
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
      { label: "Materiale", value: "Alluminio" },
      { label: "Lamelle", value: "Fisse, orientabili, doghe verticali/orizzontali" },
      { label: "Apertura", value: "Battente, scorrevole in luce, a scomparsa" },
      { label: "Automazione", value: "Sistema motorizzato opzionale" },
      { label: "Finiture", value: "Molteplici cromie disponibili" },
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
    heroImage: "https://sunsystemgroupsrl.it/wp-content/uploads/2023/11/tapparella-alluminio-bianca-miniorienta-mvline.jpg",
    gallery: [
      "https://sunsystemgroupsrl.it/wp-content/uploads/2023/11/tapparella-alluminio-bianca-miniorienta-mvline.jpg",
      "https://sunsystemgroupsrl.it/wp-content/uploads/2023/11/tapparella-alluminio-aria-luce-mvline.jpg",
      "https://sunsystemgroupsrl.it/wp-content/uploads/2023/11/tapparella-alluminio-solaria-mvline-1024x683.jpg"
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
    tagline: "Protezione dagli insetti con circolazione d'aria e luce naturale",
    description: "Le zanzariere proteggono dagli insetti molesti consentendo la circolazione d'aria e il passaggio della luce naturale. Grazie alle zanzariere, l'ambiente interno è più confortevole e salutare perché non è necessario utilizzare repellenti chimici. Percentuale di protezione fino al 99%, ampia compatibilità con porte e finestre, facilità d'uso e design discreto. Modelli disponibili: Estetika (anti-cimici, clic-clak), Neoscenica (per porte, antivento Anima21), Bora Top (scorrimento laterale brevettato), Wind (verticale, push up), Evo Zip (motorizzata, grandi dimensioni).",
    heroImage: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
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
    heroImage: "https://italinfissi.it/wp-content/uploads/2024/03/cassonetti-pvc-02.png",
    gallery: [
      "https://italinfissi.it/wp-content/uploads/2024/03/cassonetti-pvc-02.png",
      "https://italinfissi.it/wp-content/uploads/2024/03/cassonetto-pvc-italinfissi.jpg",
      "https://italinfissi.it/wp-content/uploads/2024/03/cassonetti-certificati.jpg"
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
     tagline: "Design e funzionalità per ogni ambiente",
     description: "Porte da interno di alta qualità, disponibili in versione battente e scorrevole. Finiture moderne e classiche per integrarsi perfettamente con ogni stile d'arredo.",
     heroImage: "/placeholder.svg",
     gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
     features: [
       { icon: "DoorOpen", title: "Battente o Scorrevole", description: "Soluzioni per ogni esigenza di spazio" },
       { icon: "Palette", title: "Finiture", description: "Laccate, laminate, in legno, vetro" },
       { icon: "Ruler", title: "Su Misura", description: "Dimensioni personalizzate" },
       { icon: "Volume2", title: "Insonorizzate", description: "Versioni fonoassorbenti disponibili" }
     ],
     specifications: [
       { label: "Tipologie", value: "Battente, Scorrevole a scomparsa, Scorrevole esterno" },
       { label: "Materiali anta", value: "Legno tamburato, MDF, Vetro" },
       { label: "Finiture", value: "Laccato, Laminato, Impiallacciato, Vetro" },
       { label: "Spessore anta", value: "40-45 mm" },
       { label: "Abbattimento acustico", value: "fino a 32 dB" },
       { label: "Garanzia", value: "5 anni" }
     ],
     benefits: [
       "Design contemporaneo",
       "Ampia scelta di finiture",
       "Soluzioni salvaspazio",
       "Qualità costruttiva italiana"
     ],
     applications: [
       "Abitazioni private",
       "Uffici",
       "Strutture ricettive",
       "Ristrutturazioni"
     ],
     relatedProducts: ["porta-blindata"]
   },
 
   "porta-blindata": {
     id: "porta-blindata",
     name: "Porta Blindata",
     category: "porte",
     tagline: "Sicurezza certificata per la tua casa",
     description: "Porte blindate certificate Classe 3 che combinano massima sicurezza con design elegante. Pannelli personalizzabili per integrarsi con ogni stile architettonico.",
     heroImage: "/placeholder.svg",
     gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
     features: [
       { icon: "Shield", title: "Classe 3", description: "Massima sicurezza certificata" },
       { icon: "Lock", title: "Serratura Europea", description: "Cilindro europeo anti-bumping e anti-picking" },
       { icon: "Thermometer", title: "Coibentata", description: "Isolamento termico e acustico" },
       { icon: "Palette", title: "Design", description: "Pannelli interni ed esterni personalizzabili" }
     ],
     specifications: [
       { label: "Classe antieffrazione", value: "Classe 3 (EN 1627)" },
       { label: "Serratura", value: "Cilindro europeo con 3 mandate" },
       { label: "Spessore porta", value: "80-100 mm" },
       { label: "Trasmittanza termica", value: "1.8 W/m²K" },
       { label: "Abbattimento acustico", value: "40 dB" },
       { label: "Pannelli", value: "Oltre 50 modelli" },
       { label: "Garanzia", value: "10 anni" }
     ],
     benefits: [
       "Sicurezza certificata",
       "Isolamento termoacustico",
       "Estetica personalizzabile",
       "Installazione professionale"
     ],
     applications: [
       "Ingresso principale abitazioni",
       "Appartamenti",
       "Ville",
       "Uffici"
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
       { name: "Porte da Interno", href: "/prodotti/porte-interno", description: "Design funzionale" },
       { name: "Porta Blindata", href: "/prodotti/porta-blindata", description: "Sicurezza Classe 3" },
     ]
   }
 ];