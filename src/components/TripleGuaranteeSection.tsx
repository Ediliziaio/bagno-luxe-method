import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Wrench, RefreshCw, CheckCircle2, Infinity, Award, Clock } from "lucide-react";

const guarantees = [
  {
    id: 1,
    icon: Shield,
    secondaryIcon: Infinity,
    title: "PRODOTTO A VITA",
    subtitle: "Mai più preoccupazioni",
    badge: "UNICA IN LOMBARDIA",
    badgeColor: "bg-primary text-white",
    description: "I Profili assicura che i suoi prodotti potranno essere manutenuti a vita dai propri esperti, in modo che siano o restino perfettamente funzionali a vita, a condizione che la costruzione del telaio (telaio e battente) non presenti danni.",
    note: "Ad eccezione delle componenti elettroniche. Le prestazioni richieste ai fini del mantenimento della funzionalità (materiali, ore di lavoro, ecc.) verranno addebitate secondo il listino in vigore al momento dell'intervento.",
    highlight: "∞",
  },
  {
    id: 2,
    icon: Wrench,
    secondaryIcon: Award,
    title: "POSA GARANTITA",
    subtitle: "Installazione perfetta o la rifacciamo",
    badge: "10 ANNI COPERTURA",
    badgeColor: "bg-primary text-white",
    description: "Ogni installazione è eseguita da posatori certificati secondo protocollo I Profili. Se riscontri qualsiasi difetto di posa entro 10 anni, interveniamo gratuitamente.",
    note: "Nessuna scusa, nessun costo aggiuntivo. Il nostro lavoro parla per noi.",
    highlight: "10",
  },
  {
    id: 3,
    icon: RefreshCw,
    secondaryIcon: Clock,
    title: "SODDISFATTO O RIMBORSATO",
    subtitle: "Zero rischi per te",
    badge: "30 GIORNI",
    badgeColor: "bg-primary text-white",
    description: "Se entro 30 giorni dall'installazione non sei completamente soddisfatto del risultato, ti rimborsiamo l'intero importo.",
    note: "Nessuna domanda, nessuna complicazione. Crediamo così tanto nella qualità del nostro lavoro che il rischio lo prendiamo noi.",
    highlight: "30",
  },
];

const GuaranteeCard = ({
  guarantee,
  index,
}: {
  guarantee: (typeof guarantees)[0];
  index: number;
}) => {
  const Icon = guarantee.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="light-card p-8 h-full flex flex-col relative overflow-hidden border-t-4 border-t-primary">
        {/* Background highlight number */}
        <div className="absolute -right-4 -top-4 text-[120px] font-bold text-primary/5 leading-none pointer-events-none select-none">
          {guarantee.highlight}
        </div>
        
        {/* Badge */}
        <div className="mb-6">
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider ${guarantee.badgeColor}`}>
            {guarantee.badge}
          </span>
        </div>
        
        {/* Icon */}
        <div className="mb-6 relative">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
            <Icon className="w-8 h-8 text-primary" />
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
          {guarantee.title}
        </h3>
        
        {/* Subtitle */}
        <p className="text-primary font-semibold mb-4">
          {guarantee.subtitle}
        </p>
        
        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-4 flex-1">
          {guarantee.description}
        </p>
        
        {/* Note - smaller text */}
        <p className="text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4 mt-auto">
          {guarantee.note}
        </p>
        
        {/* Checkmark */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <CheckCircle2 className="w-6 h-6 text-primary" />
        </div>
      </div>
    </motion.div>
  );
};

export const TripleGuaranteeSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      id="garanzia"
      className="section-padding section-light relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header - Belfort style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-6"
          >
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">
              Garanzia Blindata
            </span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            TRIPLA GARANZIA <span className="text-primary">BLINDATA</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Perché dovresti fidarti di chi non garantisce nulla quando puoi avere{" "}
            <span className="text-gray-900 font-semibold">TUTTO garantito</span>?
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {guarantees.map((guarantee, index) => (
            <GuaranteeCard key={guarantee.id} guarantee={guarantee} index={index} />
          ))}
        </div>

        {/* Bottom CTA - Belfort pattern */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
            Altri ti promettono. Noi garantiamo <span className="text-primary">PER ISCRITTO.</span>
          </p>
          <p className="text-gray-500 mb-8">
            Scarica il contratto di garanzia prima ancora di firmare.
          </p>
          
          <a
            href="#contatti"
            className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
          >
            <Shield className="w-5 h-5" />
            Richiedi Preventivo con Tripla Garanzia
          </a>
        </motion.div>
      </div>
    </section>
  );
};
