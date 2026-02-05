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
     tagline: "Massima luminosità con design minimal",
     description: "Lumier è la soluzione ideale per chi desidera il massimo della luce naturale senza compromessi sull'isolamento. Il telaio ultra-sottile da 70mm permette superfici vetrate più ampie, portando più luce in ogni ambiente della casa.",
     heroImage: "/placeholder.svg",
     gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
     features: [
       { icon: "Sun", title: "Massima Luce", description: "Telaio sottile per superfici vetrate più ampie" },
       { icon: "Ruler", title: "Design Minimal", description: "Linee pulite e contemporanee" },
       { icon: "Thermometer", title: "Ottimo Isolamento", description: "Prestazioni termiche elevate nonostante il profilo ridotto" },
       { icon: "Eye", title: "Vista Panoramica", description: "Cornice ridotta al minimo per una vista senza ostacoli" }
     ],
     specifications: [
       { label: "Profondità telaio", value: "70 mm" },
       { label: "Larghezza profilo visibile", value: "Ridotta del 30%" },
       { label: "Trasmittanza termica Uw", value: "fino a 0.95 W/m²K" },
       { label: "Abbattimento acustico", value: "fino a 42 dB" },
       { label: "Numero guarnizioni", value: "2" },
       { label: "Tipologia vetro", value: "Doppio o triplo vetro" },
       { label: "Garanzia", value: "10 anni" }
     ],
     benefits: [
       "Più luce naturale in ogni ambiente",
       "Design contemporaneo e minimale",
       "Ottimo rapporto qualità-prezzo",
       "Ideale per ambienti moderni"
     ],
     applications: [
       "Appartamenti moderni",
       "Loft e open space",
       "Ambienti con poca luce naturale",
       "Ristrutturazioni design-oriented"
     ],
     relatedProducts: ["domus", "idole", "alum"]
   },
 
   idole: {
     id: "idole",
     name: "Idole",
     category: "infissi",
     tagline: "Design premium per interni esclusivi",
     description: "Idole rappresenta il top di gamma della nostra collezione. Finiture luxury, personalizzazione totale e design italiano esclusivo per chi non accetta compromessi sull'estetica della propria casa.",
     heroImage: "/placeholder.svg",
     gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
     features: [
       { icon: "Crown", title: "Design Premium", description: "Finiture luxury e dettagli esclusivi" },
       { icon: "Palette", title: "Personalizzazione", description: "Configurazione su misura per ogni esigenza" },
       { icon: "Award", title: "Made in Italy", description: "Design e produzione 100% italiana" },
       { icon: "Sparkles", title: "Finiture Speciali", description: "Effetto legno, metallizzati, opachi e lucidi" }
     ],
     specifications: [
       { label: "Profondità telaio", value: "82 mm" },
       { label: "Trasmittanza termica Uw", value: "fino a 0.72 W/m²K" },
       { label: "Abbattimento acustico", value: "fino a 49 dB" },
       { label: "Numero guarnizioni", value: "3" },
       { label: "Finiture disponibili", value: "Oltre 100" },
       { label: "Classe antieffrazione", value: "RC3" },
       { label: "Garanzia", value: "15 anni" }
     ],
     benefits: [
       "Estetica senza compromessi",
       "Prestazioni al top della categoria",
       "Personalizzazione completa",
       "Garanzia estesa 15 anni"
     ],
     applications: [
       "Ville e residenze di prestigio",
       "Appartamenti di lusso",
       "Progetti architettonici esclusivi",
       "Ristrutturazioni high-end"
     ],
     relatedProducts: ["domus", "lumier", "legno-alluminio"]
   },
 
   alum: {
     id: "alum",
     name: "Alum",
     category: "infissi",
     tagline: "Alluminio ad alte prestazioni",
     description: "Alum combina la resistenza e la durabilità dell'alluminio con eccellenti prestazioni termiche grazie al taglio termico evoluto. Perfetto per grandi superfici vetrate e applicazioni architettoniche moderne.",
     heroImage: "/placeholder.svg",
     gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
     features: [
       { icon: "Shield", title: "Resistenza", description: "Alluminio ad alta resistenza meccanica" },
       { icon: "Palette", title: "Colori RAL", description: "Qualsiasi colore RAL disponibile" },
       { icon: "Maximize", title: "Grandi Dimensioni", description: "Ideale per vetrate di grandi dimensioni" },
       { icon: "Thermometer", title: "Taglio Termico", description: "Tecnologia a taglio termico per massimo isolamento" }
     ],
     specifications: [
       { label: "Materiale", value: "Alluminio estruso a taglio termico" },
       { label: "Profondità telaio", value: "65-85 mm" },
       { label: "Trasmittanza termica Uw", value: "fino a 1.0 W/m²K" },
       { label: "Abbattimento acustico", value: "fino a 45 dB" },
       { label: "Colori", value: "Tutti i RAL + effetti speciali" },
       { label: "Garanzia", value: "10 anni" }
     ],
     benefits: [
       "Massima resistenza nel tempo",
       "Nessuna manutenzione richiesta",
       "Libertà cromatica totale",
       "Ideale per grandi vetrate"
     ],
     applications: [
       "Facciate continue",
       "Vetrate scorrevoli di grandi dimensioni",
       "Architettura contemporanea",
       "Edifici commerciali"
     ],
     relatedProducts: ["domus", "lumier", "legno-alluminio"]
   },
 
   "legno-alluminio": {
     id: "legno-alluminio",
     name: "Legno Alluminio",
     category: "infissi",
     tagline: "Il calore del legno, la resistenza dell'alluminio",
     description: "La combinazione perfetta: legno all'interno per calore ed eleganza naturale, alluminio all'esterno per resistenza e zero manutenzione. Il meglio dei due mondi in un unico serramento.",
     heroImage: "/placeholder.svg",
     gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
     features: [
       { icon: "TreeDeciduous", title: "Legno Interno", description: "Calore e bellezza naturale del legno massello" },
       { icon: "Shield", title: "Alluminio Esterno", description: "Protezione totale dagli agenti atmosferici" },
       { icon: "Thermometer", title: "Isolamento Top", description: "Le migliori prestazioni termiche sul mercato" },
       { icon: "Wrench", title: "Zero Manutenzione", description: "L'alluminio esterno non richiede manutenzione" }
     ],
     specifications: [
       { label: "Materiale interno", value: "Legno massello (rovere, pino, frassino)" },
       { label: "Materiale esterno", value: "Alluminio verniciato" },
       { label: "Trasmittanza termica Uw", value: "fino a 0.75 W/m²K" },
       { label: "Abbattimento acustico", value: "fino a 48 dB" },
       { label: "Essenze legno", value: "Rovere, Pino, Frassino, Larice" },
       { label: "Garanzia", value: "10 anni" }
     ],
     benefits: [
       "Ambiente interno caldo e naturale",
       "Esterno resistente e senza manutenzione",
       "Eccellenti prestazioni termoacustiche",
       "Valore estetico superiore"
     ],
     applications: [
       "Ville e case indipendenti",
       "Ristrutturazioni di pregio",
       "Edifici storici",
       "Ambienti rustici moderni"
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
       { name: "Lumier", href: "/prodotti/lumier", description: "Massima luminosità" },
       { name: "Idole", href: "/prodotti/idole", description: "Design esclusivo" },
       { name: "Alum", href: "/prodotti/alum", description: "Alluminio performante" },
       { name: "Legno Alluminio", href: "/prodotti/legno-alluminio", description: "Ibrido naturale" },
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