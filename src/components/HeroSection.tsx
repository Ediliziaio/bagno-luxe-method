import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Shield, HardHat, FileText, Clock, ChevronDown, Check, Sparkles, Play, X } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Import slider images
import heroWindowSlider from "@/assets/hero-window-slider.jpg";
import windowAfter1 from "@/assets/window-after-1.jpg";
import windowAfter2 from "@/assets/window-after-2.jpg";
import windowAfter3 from "@/assets/window-after-3.jpg";

const sliderImages = [heroWindowSlider, windowAfter1, windowAfter2, windowAfter3];

// Placeholder - sostituire con il tuo video e thumbnail
const heroVideoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";
const heroVideoThumbnail = heroWindowSlider; // Usa una delle immagini esistenti come placeholder

const pageShowsPoints = [
  "Cosa succede davvero quando scegli il prezzo più basso",
  "Cosa ti nascondono i preventivi \"tutto compreso\"",
  "Perché alcune aziende possono garantire 20 anni e altre solo 2",
  "Come evitare di buttare migliaia di euro",
];

const contrastBlocks = [
  {
    icon: Shield,
    title: "GARANZIA A VITA",
    fear: "\"La garanzia? 2 anni, come da legge\"",
    solution: "Prodotto garantito per sempre. Posa garantita 10 anni. Se qualcosa va storto tra 15 anni, è ancora un problema nostro.",
  },
  {
    icon: HardHat,
    title: "POSATORI CERTIFICATI",
    fear: "\"Tanto chi installa è uguale\"",
    solution: "Patentino verificabile. Documenti in regola. In caso di controllo, nessun problema. Né per noi, né per te.",
  },
  {
    icon: FileText,
    title: "TUTTO PER ISCRITTO",
    fear: "\"Stia tranquillo, ci pensiamo noi\"",
    solution: "Ogni promessa è nel contratto. Nero su bianco. Niente sorprese. Niente \"ma io avevo capito che...\"",
  },
  {
    icon: Clock,
    title: "TEMPISTICHE CERTE",
    fear: "\"Iniziamo tra un paio di settimane... più o meno\"",
    solution: "90 giorni dalla conferma o ti rimborsiamo*.",
  },
];

const VideoModal = ({
  videoUrl,
  onClose,
}: {
  videoUrl: string;
  onClose: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-primary transition-colors z-10"
        >
          <X className="w-8 h-8" />
        </button>
        <iframe
          src={videoUrl + "?autoplay=1"}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </motion.div>
    </motion.div>
  );
};

export const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showVideoModal, setShowVideoModal] = useState(false);

  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  return (
    <>
      <section ref={ref} className="relative min-h-screen overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0 z-0">
          <div className="overflow-hidden h-full" ref={emblaRef}>
            <div className="flex h-full">
              {sliderImages.map((img, idx) => (
                <div key={idx} className="flex-[0_0_100%] min-w-0 h-full relative">
                  <img
                    src={img}
                    alt={`Finestra moderna ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Dark overlay - intensified to 90% */}
          <div className="absolute inset-0 bg-[#1D1D1C]/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 pb-12 md:pb-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 md:mb-8"
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-primary/20 border border-primary/30 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
              <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">
                Hai già il tuo progetto unico per la tua casa
              </span>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center mb-6 md:mb-8"
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight max-w-4xl mx-auto px-2">
              Stai per fare un investimento{" "}
              <span className="text-primary">IMPORTANTE PER LA TUA CASA E VITA.</span>
              <br className="hidden sm:block" />
              <span className="block sm:inline"> </span>
              <span className="text-white">Prenditi 5 minuti per non sbagliarlo.</span>
            </h1>
          </motion.div>

          {/* Video Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto mb-8 md:mb-12"
          >
            <div 
              className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden border-2 border-primary/30 cursor-pointer group hover:border-primary/60 transition-all duration-300 shadow-[0_0_30px_rgba(8,103,129,0.2)]"
              onClick={() => setShowVideoModal(true)}
            >
              {/* Thumbnail */}
              <img 
                src={heroVideoThumbnail} 
                alt="Video presentazione"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Play overlay */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/40 animate-pulse">
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white fill-white ml-1" />
                </div>
              </div>
              
              {/* Badge */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-black/70 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full backdrop-blur-sm flex items-center gap-1.5">
                <Play className="w-3 h-3 fill-white" />
                <span>Guarda il video</span>
              </div>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 text-center max-w-2xl mx-auto mb-8 md:mb-10 italic px-4"
          >
            Le finestre le vedrai ogni giorno per i prossimi 30 anni. Non è una decisione da prendere guardando solo il prezzo.
          </motion.p>

          {/* Narrative copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-center max-w-2xl mx-auto mb-8 md:mb-10 px-4"
          >
            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
              Hai fatto il sopralluogo. Hai il preventivo.
              <br />
              Magari ne hai anche altri da confrontare.
            </p>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              Ma prima di firmare qualsiasi cosa, c'è qualcosa che devi sapere.
              <br />
              <span className="text-white font-medium">
                Qualcosa che gli altri preventivi non ti dicono.
              </span>
              <br />
              <span className="hidden sm:inline">Qualcosa che scoprirai solo tra 2, 5, 10 anni — quando sarà troppo tardi.</span>
              <span className="sm:hidden">Qualcosa che scoprirai solo quando sarà troppo tardi.</span>
            </p>
          </motion.div>

          {/* "Questa pagina ti mostra" list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="max-w-xl mx-auto mb-8 md:mb-10 px-4"
          >
            <p className="text-white font-semibold text-center mb-3 sm:mb-4 text-base sm:text-lg">
              Questa pagina ti mostra:
            </p>
            <ul className="space-y-2 sm:space-y-3">
              {pageShowsPoints.map((point, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                  className="flex items-start gap-2 sm:gap-3"
                >
                  <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" />
                  </div>
                  <span className="text-white text-sm sm:text-base">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Final phrase */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="text-center text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 md:mb-16 px-4"
          >
            <span className="text-white font-medium">Non ti chiediamo di scegliere noi.</span>
            <br />
            Ti chiediamo di scegliere con tutte le informazioni.
          </motion.p>

          {/* Separator */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="w-full max-w-xs sm:max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-8 md:mb-12"
          />

          {/* Section title for contrast blocks */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="text-lg sm:text-xl md:text-2xl font-bold text-white text-center mb-6 md:mb-10 uppercase tracking-wide px-4"
          >
            Cosa cambia scegliendo <span className="text-primary">I Profili</span>
          </motion.h2>

          {/* 4 Contrast blocks */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto mb-10 md:mb-16 px-2"
          >
            {contrastBlocks.map((block, index) => {
              const Icon = block.icon;
              return (
                <motion.div
                  key={block.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                  className="group"
                >
                  <div className="glass-card p-4 sm:p-5 md:p-6 h-full border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(8,103,129,0.2)]">
                    {/* Icon */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-3 md:mb-4 rounded-xl sm:rounded-2xl bg-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary group-hover:text-white transition-colors" />
                    </div>

                    {/* Title */}
                    <h3 className="text-white font-bold text-center uppercase tracking-wide text-xs sm:text-sm mb-3 md:mb-4">
                      {block.title}
                    </h3>

                    {/* Fear phrase */}
                    <p className="text-gray-500 text-xs sm:text-sm text-center italic mb-3 md:mb-4">
                      {block.fear}
                    </p>

                    {/* Solution */}
                    <p className="text-gray-300 text-xs sm:text-sm text-center leading-relaxed">
                      {block.solution}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.7 }}
            className="flex flex-col items-center gap-1.5 sm:gap-2"
          >
            <span className="text-gray-400 text-xs sm:text-sm">Continua a leggere</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideoModal && (
          <VideoModal 
            videoUrl={heroVideoUrl} 
            onClose={() => setShowVideoModal(false)} 
          />
        )}
      </AnimatePresence>
    </>
  );
};
