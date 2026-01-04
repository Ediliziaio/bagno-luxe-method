import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote, Play, X, CheckCircle2, Calendar } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Video testimonianze
const videoTestimonials = [
  {
    id: 1,
    name: "Mario Rossi",
    location: "Milano - Porta Nuova",
    headline: "Da 180€ a 105€ di gas al mese",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    installDate: "Marzo 2024",
    projectType: "7 Finestre PVC",
  },
  {
    id: 2,
    name: "Giulia Bianchi",
    location: "Bergamo - Centro",
    headline: "Finalmente silenzio in camera da letto",
    thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    installDate: "Gennaio 2024",
    projectType: "5 Finestre + Portafinestra",
  },
];

// Testimonianze scritte - copy stile Belfort (problema → decisione → risultato)
const testimonials = [
  {
    id: 1,
    name: "Marco Bianchi",
    location: "Milano - Porta Nuova",
    rating: 5,
    quote:
      "Pagavo 280€ di gas al mese. Dopo 5 preventivi ho scelto I Profili - non il più economico, ma l'unico che mi ha mostrato i dati tecnici. Prima bolletta dopo l'installazione: 182€. Un investimento che si ripaga in 4 anni.",
    project: "5 Finestre + Portafinestra",
    installDate: "Febbraio 2024",
    verified: true,
  },
  {
    id: 2,
    name: "Giulia Rossi",
    location: "Monza",
    rating: 5,
    quote:
      "Abitiamo su una strada trafficata. I bambini non dormivano, noi eravamo esausti. Dopo aver cambiato le finestre è come vivere in un'altra casa. Silenzio totale, anche con le ambulanze che passano.",
    project: "7 Finestre complete",
    installDate: "Marzo 2024",
    verified: true,
  },
  {
    id: 3,
    name: "Alessandro Verdi",
    location: "Bergamo",
    rating: 5,
    quote:
      "Ero terrorizzato dai lavori - ho un negozio, non potevo fermarmi. Sono arrivati alle 7, hanno lavorato senza sosta e alle 14 avevano finito tutto. Zero polvere, zero problemi. Impressionante.",
    project: "4 Finestre in PVC",
    installDate: "Aprile 2024",
    verified: true,
  },
  {
    id: 4,
    name: "Francesca Neri",
    location: "Brescia",
    rating: 5,
    quote:
      "Il preventivo di I Profili costava 800€ in più degli altri. Ma solo loro mi hanno fatto vedere il certificato di trasmittanza termica. Dopo un inverno, ho capito perché: casa calda con il termostato a 19°C invece che a 22°C.",
    project: "Casa completa - 12 infissi",
    installDate: "Novembre 2023",
    verified: true,
  },
  {
    id: 5,
    name: "Roberto Conti",
    location: "Como",
    rating: 5,
    quote:
      "Ogni mattina passavo 10 minuti ad asciugare la condensa dai vetri. Muffa negli angoli, pareti fredde. Ora i vetri sono sempre asciutti e le pareti hanno la stessa temperatura del centro stanza. Dovevo farlo 10 anni fa.",
    project: "6 Finestre + Tapparelle",
    installDate: "Gennaio 2024",
    verified: true,
  },
];

const VideoTestimonialCard = ({
  testimonial,
  index,
  onPlay,
}: {
  testimonial: (typeof videoTestimonials)[0];
  index: number;
  onPlay: (videoUrl: string) => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
      onClick={() => onPlay(testimonial.videoUrl)}
    >
      <div className="light-card overflow-hidden">
        {/* Video Thumbnail */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={testimonial.thumbnail}
            alt={testimonial.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Play button overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/30">
              <Play className="w-7 h-7 md:w-8 md:h-8 text-white fill-white ml-1" />
            </div>
          </div>
          {/* Duration badge */}
          <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
            2:45
          </div>
        </div>
        
        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
            "{testimonial.headline}"
          </h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-700 font-medium">{testimonial.name}</p>
              <p className="text-gray-500 text-sm">{testimonial.location}</p>
            </div>
            <div className="text-right">
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                {testimonial.projectType}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <div className="light-card p-6 md:p-8 h-full flex flex-col group cursor-default border-l-4 border-l-primary">
        {/* Header: Rating + Verified */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <Star className="w-5 h-5 fill-primary text-primary" />
              </motion.div>
            ))}
          </div>
          {testimonial.verified && (
            <div className="flex items-center gap-1 text-green-600 text-xs font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verificato</span>
            </div>
          )}
        </div>

        {/* Quote with enhanced styling */}
        <div className="relative flex-1 mb-6">
          <Quote className="absolute -top-1 -left-1 w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors duration-300" />
          <p className="text-gray-600 text-base md:text-lg leading-relaxed pl-6 group-hover:text-gray-900 transition-colors">
            "{testimonial.quote}"
          </p>
        </div>

        {/* Install date */}
        <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-4">
          <Calendar className="w-3 h-3" />
          <span>Installazione: {testimonial.installDate}</span>
        </div>

        {/* Divider */}
        <div className="w-16 h-0.5 bg-primary mb-5 group-hover:w-24 transition-all duration-500" />

        {/* Author */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-gray-900">{testimonial.name}</p>
            <p className="text-gray-500 text-sm">{testimonial.location}</p>
          </div>
          <span className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full border border-primary/20 font-medium">
            {testimonial.project}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

// Video Modal Component
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

export const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      <section
        ref={sectionRef}
        id="recensioni"
        className="section-padding section-light relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Header - Belfort style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-14 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-5 text-gray-900">
              NON CREDERCI SULLA PAROLA.{" "}
              <span className="text-primary">ASCOLTALI.</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              <span className="text-gray-900 font-semibold">427 famiglie lombarde</span> hanno già scelto I Profili.
              Ecco cosa dicono...
            </p>
          </motion.div>

          {/* VIDEO TESTIMONIALS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Play className="w-5 h-5 text-primary" />
              Video Testimonianze
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {videoTestimonials.map((testimonial, index) => (
                <VideoTestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  index={index}
                  onPlay={setActiveVideo}
                />
              ))}
            </div>
          </motion.div>

          {/* WRITTEN TESTIMONIALS CAROUSEL */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-6xl mx-auto"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Quote className="w-5 h-5 text-primary" />
              Recensioni Verificate
            </h3>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={testimonial.id}
                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <TestimonialCard testimonial={testimonial} index={index} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-10">
                <CarouselPrevious className="static translate-y-0 border-primary/30 bg-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-300" />
                <CarouselNext className="static translate-y-0 border-primary/30 bg-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-300" />
              </div>
            </Carousel>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <VideoModal videoUrl={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </>
  );
};
