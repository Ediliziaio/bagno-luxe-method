import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play, X } from "lucide-react";

const videoTestimonials = [
  {
    id: 1,
    name: "Cliente I Profili",
    location: "Lombardia",
    headline: "La nostra esperienza con I Profili",
    thumbnail: "https://img.youtube.com/vi/sou9JDN6E-E/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/sou9JDN6E-E",
    projectType: "Sostituzione serramenti",
    duration: "3:00",
  },
  {
    id: 2,
    name: "Testimonianza Cliente",
    location: "Lombardia",
    headline: "Perché abbiamo scelto I Profili",
    thumbnail: "https://img.youtube.com/vi/EugIN-UNM7E/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/EugIN-UNM7E",
    projectType: "Finestre PVC",
    duration: "2:30",
  },
  {
    id: 3,
    name: "Famiglia Lombarda",
    location: "Lombardia",
    headline: "Il risultato dopo l'installazione",
    thumbnail: "https://img.youtube.com/vi/LQig3e5SVqk/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/LQig3e5SVqk",
    projectType: "Casa completa",
    duration: "4:00",
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

export const VideoTestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      <section ref={ref} className="section-padding section-light relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Non crederci sulla parola.{" "}
              <span className="text-primary">Guardali.</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Due famiglie lombarde raccontano la loro esperienza con I Profili.
            </p>
          </motion.div>

          {/* Video cards */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {videoTestimonials.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="group cursor-pointer"
                onClick={() => setActiveVideo(video.videoUrl)}
              >
                <div className="light-card overflow-hidden">
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Play overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/30">
                        <Play className="w-7 h-7 md:w-8 md:h-8 text-white fill-white ml-1" />
                      </div>
                    </div>
                    {/* Duration badge */}
                    <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      "{video.headline}"
                    </h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-700 font-medium">{video.name}</p>
                        <p className="text-gray-500 text-sm">{video.location}</p>
                      </div>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                        {video.projectType}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <VideoModal videoUrl={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </>
  );
};
