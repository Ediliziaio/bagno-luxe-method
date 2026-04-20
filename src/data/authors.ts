export interface Author {
  slug: string;
  name: string;
  role: string;
  shortBio: string;
  fullBio: string[];
  expertise: string[];
  experience: string;
  certifications: string[];
  sameAs?: string[];
}

export const authors: Record<string, Author> = {
  "marco-bianchi": {
    slug: "marco-bianchi",
    name: "Marco Bianchi",
    role: "Consulente Tecnico",
    shortBio:
      "Consulente tecnico specializzato in efficienza energetica degli edifici e scelta dei serramenti ad alte prestazioni.",
    fullBio: [
      "Marco Bianchi lavora nel settore dei serramenti da oltre 15 anni. Laurea in Ingegneria Edile con specializzazione in fisica tecnica, è diventato uno dei riferimenti di I Profili per le consulenze tecniche più complesse.",
      "La sua passione: aiutare le famiglie lombarde a scegliere la combinazione giusta tra infisso, vetro e posa per ottenere il massimo del comfort con il minimo consumo energetico. In oltre 2.500 sopralluoghi effettuati, ha imparato che ogni casa racconta una storia diversa e che la soluzione giusta non è mai quella del catalogo.",
      "Nei suoi articoli su I Profili trasforma concetti tecnici complessi (trasmittanza Uw, fattore solare g, ponti termici) in guide pratiche per chi sta per affrontare la sostituzione degli infissi. Crede nella trasparenza: niente linguaggio da commerciale, solo numeri, fatti e consigli concreti.",
    ],
    expertise: [
      "Analisi energetica abitazioni",
      "Progettazione infissi su misura",
      "Valutazione ponti termici",
      "Consulenza Ecobonus e detrazioni",
      "Direttiva Case Green e NZEB",
    ],
    experience: "15+ anni nel settore serramenti",
    certifications: [
      "Ingegneria Edile — Politecnico di Milano",
      "Certificato Passivhaus Designer (Darmstadt)",
      "CasaClima Junior",
    ],
  },
  "luca-rossi": {
    slug: "luca-rossi",
    name: "Luca Rossi",
    role: "Installatore Senior",
    shortBio:
      "Installatore certificato UNI 11673 con oltre 10.000 posa di serramenti realizzate in Lombardia.",
    fullBio: [
      "Luca Rossi ha iniziato a lavorare in cantiere a 18 anni come apprendista serramentista. Oggi, 20 anni dopo, è uno degli installatori senior di I Profili e responsabile della formazione dei nuovi posatori.",
      "La sua specialità: la posa qualificata secondo la norma UNI 11673, quella che fa davvero la differenza tra un infisso che mantiene i valori di catalogo per 30 anni e uno che perde tenuta dopo 2-3 anni. Ha installato oltre 10.000 serramenti in tutta la Lombardia, da piccoli appartamenti in condominio a grandi progetti residenziali.",
      "Nei suoi articoli condivide segreti del mestiere che non troverai nei manuali: come riconoscere un foro fuori squadra, quando sostituire le guarnizioni, come fare manutenzione agli infissi PVC per farli durare decenni. Scrive per i privati cittadini che vogliono capire davvero cosa succede quando un tecnico entra in casa.",
    ],
    expertise: [
      "Posa qualificata UNI 11673",
      "Sostituzione infissi in ristrutturazione",
      "Manutenzione e regolazione serramenti",
      "Installazione monoblocchi termici",
      "Rilievo e misurazione fori murari",
    ],
    experience: "20+ anni come installatore serramenti",
    certifications: [
      "Patentino UNI 11673 — Posa Qualificata",
      "Abilitazione ponteggi D.Lgs 81/08",
      "Corso installatore Schüco certificato",
    ],
  },
  "giulia-ferrari": {
    slug: "giulia-ferrari",
    name: "Giulia Ferrari",
    role: "Specialista ENEA",
    shortBio:
      "Esperta di detrazioni fiscali e pratiche ENEA per interventi di riqualificazione energetica residenziale.",
    fullBio: [
      "Giulia Ferrari è diventata un riferimento nel settore dopo aver gestito centinaia di pratiche ENEA per I Profili. Laurea in Economia con specializzazione in diritto tributario, si è specializzata nelle agevolazioni fiscali per l'edilizia: Ecobonus, Bonus Casa, Superbonus, Bonus Barriere Architettoniche.",
      "Il suo lavoro quotidiano: assicurarsi che ogni cliente che sceglie I Profili ottenga il massimo della detrazione, senza perdere un euro per un errore burocratico. Ha gestito personalmente oltre 800 pratiche ENEA senza mai una contestazione dall'Agenzia delle Entrate, e ha salvato decine di clienti da errori che avrebbero fatto perdere anni di detrazioni.",
      "Nei suoi articoli trasforma la burocrazia fiscale in linguaggio comprensibile. Le normative cambiano ogni anno con la Legge di Bilancio: lei legge le circolari, studia le interpretazioni dell'Agenzia, e traduce tutto in guide pratiche che permettono di non sbagliare.",
    ],
    expertise: [
      "Pratiche ENEA per Ecobonus",
      "Bonus Casa e Bonus Ristrutturazione",
      "Superbonus 65% condomini",
      "Bonus Barriere Architettoniche 75%",
      "Asseverazioni e CILA",
    ],
    experience: "10+ anni in fiscalità dell'edilizia",
    certifications: [
      "Laurea in Economia — Università Bocconi",
      "Abilitazione Commercialista",
      "Corso ENEA Specialistico Ecobonus",
    ],
  },
};

export const getAuthorBySlug = (slug: string): Author | undefined => {
  return authors[slug];
};

export const authorNameToSlug = (name: string): string => {
  const map: Record<string, string> = {
    "Marco Bianchi": "marco-bianchi",
    "Luca Rossi": "luca-rossi",
    "Giulia Ferrari": "giulia-ferrari",
  };
  return map[name] || "";
};

export const authorsList: Author[] = Object.values(authors);
