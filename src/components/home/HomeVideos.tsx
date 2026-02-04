import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

interface VideoCard {
  id: string;
  title: string;
  description: string;
  videoId: string;
}

const videos: VideoCard[] = [
  {
    id: "1",
    title: "Chi siamo",
    description: "Scopri I Profili: la nostra storia, i nostri valori e perché oltre 2.500 famiglie ci hanno scelto.",
    videoId: "LQig3e5SVqk",
  },
  {
    id: "2",
    title: "Come lavoriamo",
    description: "Dal sopralluogo al montaggio: guarda il nostro processo di lavoro in azione.",
    videoId: "sou9JDN6E-E",
  },
];

export const HomeVideos = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="section-padding section-light relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
            Video
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Guarda come <span className="text-primary">lavoriamo</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Due minuti per capire perché siamo diversi dagli altri.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="light-card overflow-hidden">
                {/* Thumbnail with play button */}
                <div
                  className="relative aspect-video cursor-pointer overflow-hidden"
                  onClick={() => setActiveVideo(video.videoId)}
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 teal-glow">
                      <Play className="w-7 h-7 md:w-8 md:h-8 text-white ml-1" fill="white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10 md:mt-14"
        >
          <Button
            variant="teal"
            size="lg"
            className="rounded-full px-8"
            onClick={() => {
              const contact = document.getElementById("contatti");
              contact?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Prenota il Tuo Sopralluogo
          </Button>
        </motion.div>
      </div>

      {/* Video Modal */}
      <Dialog open={!!activeVideo} onOpenChange={() => setActiveVideo(null)}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 bg-black border-none">
          <DialogTitle className="sr-only">Video Player</DialogTitle>
          <div className="relative aspect-video">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white hover:text-primary transition-colors z-10"
              aria-label="Chiudi video"
            >
              <X className="w-8 h-8" />
            </button>
            {activeVideo && (
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
                title="Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
