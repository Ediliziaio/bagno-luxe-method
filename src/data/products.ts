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
     tagline: "Il sistema principale per il massimo comfort abitativo",
     description: "Domus rappresenta l'eccellenza nel mondo degli infissi in PVC. Con un profilo da 76mm e tripla guarnizione, offre prestazioni termiche e acustiche superiori. L'acciaio zincato da 2mm a profilo chiuso garantisce una stabilità strutturale che dura oltre 30 anni, eliminando definitivamente problemi di condensa e muffe.",
     heroImage: "/placeholder.svg",
     gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
     features: [
       { icon: "Thermometer", title: "Isolamento Termico", description: "Trasmittanza Uw fino a 0.79 W/m²K per un risparmio energetico fino al 40%" },
       { icon: "Volume2", title: "Isolamento Acustico", description: "Abbattimento fino a 47 dB per un silenzio totale in casa" },
       { icon: "Shield", title: "Sicurezza RC2", description: "Classe antieffrazione RC2 di serie, opzionale RC3" },
       { icon: "Droplets", title: "Zero Condensa", description: "Tripla guarnizione elimina condensa e muffe" },
       { icon: "Clock", title: "Durabilità 30 Anni", description: "Acciaio 2mm zincato per stabilità garantita nel tempo" },
       { icon: "Sun", title: "Vetro Selettivo", description: "Sistema SE.BE.S con vetro selettivo esterno e basso emissivo interno" }
     ],
     specifications: [
       { label: "Profondità telaio", value: "76 mm" },
       { label: "Spessore acciaio", value: "2 mm zincato a profilo chiuso" },
       { label: "Numero guarnizioni", value: "3 (alta memoria elastica)" },
       { label: "Trasmittanza termica Uw", value: "fino a 0.79 W/m²K" },
       { label: "Abbattimento acustico", value: "fino a 47 dB" },
       { label: "Classe antieffrazione", value: "RC2 (opzionale RC3)" },
       { label: "Numero camere", value: "6 camere" },
       { label: "Tipologia vetro", value: "Triplo vetro SE.BE.S" },
       { label: "Colorazioni disponibili", value: "Oltre 50 finiture" },
       { label: "Garanzia", value: "10 anni" }
     ],
     benefits: [
       "Massimo isolamento termico - risparmio energetico fino al 40%",
       "Tripla guarnizione anti-spiffero con alta memoria elastica",
       "Acciaio 2mm a profilo chiuso per stabilità 30 anni",
       "Zero condensa e muffe garantite",
       "Vetro SE.BE.S selettivo per comfort tutto l'anno",
       "Compatibile con Bonus 50% detrazione fiscale"
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
     tagline: "Protezione e stile tradizionale italiano",
     description: "Le nostre persiane combinano l'estetica tradizionale italiana con materiali moderni e performanti. Disponibili in legno, alluminio e PVC, con lamelle orientabili per il controllo perfetto della luce.",
     heroImage: "/placeholder.svg",
     gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
     features: [
       { icon: "Sun", title: "Controllo Luce", description: "Lamelle orientabili per regolare l'illuminazione" },
       { icon: "Shield", title: "Protezione", description: "Sicurezza aggiuntiva per la casa" },
       { icon: "Palette", title: "Personalizzazione", description: "Colori e finiture su misura" },
       { icon: "Wind", title: "Ventilazione", description: "Areazione controllata anche a persiana chiusa" }
     ],
     specifications: [
       { label: "Materiali", value: "Legno, Alluminio, PVC" },
       { label: "Lamelle", value: "Fisse o orientabili" },
       { label: "Apertura", value: "A libro, scorrevole, battente" },
       { label: "Motorizzazione", value: "Opzionale" },
       { label: "Colori", value: "Oltre 30 finiture" },
       { label: "Garanzia", value: "5 anni" }
     ],
     benefits: [
       "Estetica tipica italiana",
       "Controllo totale della luce",
       "Sicurezza aggiuntiva",
       "Materiali durevoli"
     ],
     applications: [
       "Case tradizionali",
       "Ville in stile classico",
       "Centri storici",
       "Ristrutturazioni conservative"
     ],
     relatedProducts: ["tapparelle", "zanzariere", "cassonetti"]
   },
 
   tapparelle: {
     id: "tapparelle",
     name: "Tapparelle",
     category: "accessori",
     tagline: "Avvolgibili coibentate per ogni esigenza",
     description: "Tapparelle avvolgibili moderne e performanti, disponibili in PVC coibentato e alluminio. Motorizzazione integrata con domotica per il massimo comfort quotidiano.",
     heroImage: "/placeholder.svg",
     gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
     features: [
       { icon: "Thermometer", title: "Coibentazione", description: "Stecche coibentate per isolamento termico" },
       { icon: "Zap", title: "Motorizzazione", description: "Motori silenziosi con telecomando o domotica" },
       { icon: "Moon", title: "Oscuramento", description: "Oscuramento totale per riposo ottimale" },
       { icon: "Shield", title: "Antieffrazione", description: "Sistemi di blocco di sicurezza" }
     ],
     specifications: [
       { label: "Materiali", value: "PVC coibentato, Alluminio" },
       { label: "Stecca", value: "Coibentata in poliuretano" },
       { label: "Motorizzazione", value: "Somfy, Nice, Came" },
       { label: "Integrazione domotica", value: "Wi-Fi, Alexa, Google Home" },
       { label: "Colori", value: "Oltre 20 finiture" },
       { label: "Garanzia", value: "5 anni" }
     ],
     benefits: [
       "Isolamento termico aggiuntivo",
       "Comfort con motorizzazione",
       "Oscuramento completo",
       "Integrazione smart home"
     ],
     applications: [
       "Abitazioni moderne",
       "Camere da letto",
       "Uffici",
       "Ristrutturazioni con upgrade domotico"
     ],
     relatedProducts: ["persiane", "zanzariere", "cassonetti"]
   },
 
   zanzariere: {
     id: "zanzariere",
     name: "Zanzariere",
     category: "accessori",
     tagline: "Protezione dagli insetti tutto l'anno",
     description: "Zanzariere di alta qualità disponibili in versione a rullo, plissettate e fisse. Rete antipolline opzionale per chi soffre di allergie.",
     heroImage: "/placeholder.svg",
     gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
     features: [
       { icon: "Bug", title: "Anti-Insetti", description: "Rete fitta per protezione completa" },
       { icon: "Wind", title: "Ventilazione", description: "Areazione naturale senza insetti" },
       { icon: "Flower2", title: "Antipolline", description: "Rete speciale per allergici" },
       { icon: "Eye", title: "Invisibili", description: "Design discreto e minimale" }
     ],
     specifications: [
       { label: "Tipologie", value: "A rullo, Plissettate, Fisse" },
       { label: "Rete standard", value: "Fibra di vetro plastificata" },
       { label: "Rete antipolline", value: "Pollentec® opzionale" },
       { label: "Guide", value: "Alluminio anodizzato" },
       { label: "Colori", value: "Bianco, Grigio, RAL a richiesta" },
       { label: "Garanzia", value: "3 anni" }
     ],
     benefits: [
       "Protezione totale dagli insetti",
       "Areazione naturale garantita",
       "Opzione antipolline per allergici",
       "Installazione su misura"
     ],
     applications: [
       "Finestre e porte finestre",
       "Porte d'ingresso",
       "Ambienti con verde circostante",
       "Case con soggetti allergici"
     ],
     relatedProducts: ["persiane", "tapparelle", "cassonetti"]
   },
 
   cassonetti: {
     id: "cassonetti",
     name: "Cassonetti",
     category: "accessori",
     tagline: "Cassonetti coibentati anti ponte termico",
     description: "Cassonetti ad alta coibentazione che eliminano definitivamente i ponti termici. Portello d'ispezione per manutenzione facilitata senza smontare la tapparella.",
     heroImage: "/placeholder.svg",
     gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
     features: [
       { icon: "Thermometer", title: "Coibentazione", description: "Eliminazione totale dei ponti termici" },
       { icon: "Wrench", title: "Ispezionabile", description: "Portello per manutenzione facilitata" },
       { icon: "Volume2", title: "Insonorizzato", description: "Abbattimento acustico integrato" },
       { icon: "Zap", title: "Predisposizione Motore", description: "Pronto per motorizzazione tapparella" }
     ],
     specifications: [
       { label: "Materiale", value: "EPS ad alta densità + PVC" },
       { label: "Spessore isolante", value: "30-50 mm" },
       { label: "Trasmittanza", value: "0.35 W/m²K" },
       { label: "Portello ispezione", value: "Standard su tutti i modelli" },
       { label: "Dimensioni", value: "Su misura" },
       { label: "Garanzia", value: "10 anni" }
     ],
     benefits: [
       "Zero ponti termici",
       "Risparmio energetico significativo",
       "Manutenzione semplificata",
       "Silenziosità garantita"
     ],
     applications: [
       "Sostituzione cassonetti esistenti",
       "Nuove installazioni",
       "Riqualificazione energetica",
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