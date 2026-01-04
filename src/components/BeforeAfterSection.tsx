import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, Move, TrendingDown, Thermometer, Volume2, Euro } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

// Immagini realistiche di finestre italiane
import beforeImage1 from "@/assets/window-before-1.jpg";
import afterImage1 from "@/assets/window-after-1.jpg";
import beforeImage2 from "@/assets/window-before-2.jpg";
import afterImage2 from "@/assets/window-after-2.jpg";
import beforeImage3 from "@/assets/window-before-3.jpg";
import afterImage3 from "@/assets/window-after-3.jpg";
import beforeImage4 from "@/assets/window-before-4.jpg";
import afterImage4 from "@/assets/window-after-4.jpg";

const projects = [
  {
    id: 1,
    title: "Villa Bifamiliare",
    location: "Bergamo - Città Alta",
    beforeImage: beforeImage1,
    afterImage: afterImage1,
    description: "Da infissi in legno anni '70 a PVC classe A con vetro triplo",
    savings: "-45% bolletta gas",
    savingsIcon: Euro,
  },
  {
    id: 2,
    title: "Appartamento Centro Storico",
    location: "Milano - Navigli",
    beforeImage: beforeImage2,
    afterImage: afterImage2,
    description: "Sostituzione 8 finestre senza opere murarie",
    savings: "-38% dispersione termica",
    savingsIcon: Thermometer,
  },
  {
    id: 3,
    title: "Villetta Indipendente",
    location: "Brescia",
    beforeImage: beforeImage3,
    afterImage: afterImage3,
    description: "Finestre con cassonetto coibentato integrato",
    savings: "-52% rumore esterno",
    savingsIcon: Volume2,
  },
  {
    id: 4,
    title: "Condominio Anni '60",
    location: "Monza",
    beforeImage: beforeImage4,
    afterImage: afterImage4,
    description: "12 unità abitative rinnovate in 3 settimane",
    savings: "-40% costi riscaldamento",
    savingsIcon: TrendingDown,
  },
];

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  onDragStateChange?: (isDragging: boolean) => void;
}

const BeforeAfterSlider = ({ beforeImage, afterImage, onDragStateChange }: BeforeAfterSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleDragStart = useCallback(() => {
    setIsDragging(true);
    onDragStateChange?.(true);
  }, [onDragStateChange]);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    onDragStateChange?.(false);
  }, [onDragStateChange]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation();
    handleDragStart();
    handleMove(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.stopPropagation();
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.stopPropagation();
    handleDragEnd();
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[3/4] sm:aspect-[4/3] md:aspect-[4/3] overflow-hidden rounded-lg cursor-grab active:cursor-grabbing select-none border border-primary/20"
      style={{ touchAction: isDragging ? 'none' : 'pan-y' }}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onMouseMove={handleMouseMove}
    >
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt="Finestra dopo l'installazione"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt="Finestra prima della sostituzione"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Drag feedback overlay */}
      <div 
        className={`absolute inset-0 bg-primary/5 pointer-events-none transition-opacity duration-200 ${
          isDragging ? 'opacity-100' : 'opacity-0'
        }`} 
      />

      {/* Extended touch area for slider */}
      <div
        className="absolute top-0 bottom-0 w-16 md:w-12 z-20 cursor-grab active:cursor-grabbing"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slider Line */}
        <div 
          className="absolute top-0 bottom-0 left-1/2 w-1 bg-primary shadow-[0_0_20px_rgba(212,175,55,0.5)] -translate-x-1/2"
        />
        
        {/* Handle */}
        <div 
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            w-14 h-14 md:w-12 md:h-12 
            bg-primary rounded-full flex items-center justify-center shadow-lg
            transition-transform duration-150
            ${isDragging ? 'scale-110 ring-4 ring-primary/40' : ''}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary-foreground w-6 h-6 md:w-5 md:h-5"
          >
            <path d="m18 8-4 4 4 4" />
            <path d="m6 8 4 4-4 4" />
          </svg>
        </div>
      </div>

      {/* Labels - repositioned for mobile */}
      <div className="absolute bottom-3 left-3 md:top-4 md:bottom-auto md:left-4 bg-background/90 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1.5 rounded text-xs md:text-sm font-semibold tracking-wider z-20">
        PRIMA
      </div>
      <div className="absolute bottom-3 right-3 md:top-4 md:bottom-auto md:right-4 bg-primary px-2 py-1 md:px-3 md:py-1.5 rounded text-xs md:text-sm font-semibold tracking-wider text-primary-foreground z-20">
        DOPO
      </div>
    </div>
  );
};

export const BeforeAfterSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isSliderDragging, setIsSliderDragging] = useState(false);

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = useCallback(() => api?.scrollNext(), [api]);

  useEffect(() => {
    if (!api) return;
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Disable carousel drag when slider is being dragged
  useEffect(() => {
    if (!api) return;
    
    if (isSliderDragging) {
      api.reInit({ watchDrag: false });
    } else {
      api.reInit({ watchDrag: true });
    }
  }, [api, isSliderDragging]);

  return (
    <section
      ref={sectionRef}
      id="trasformazione"
      className="py-16 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl md:text-5xl font-bold mb-3 md:mb-4">
            DA VECCHIE FINESTRE A <span className="text-primary">RISPARMIO GARANTITO</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Trascina per vedere la differenza. Risultati reali, misurabili in bolletta.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative">
            {/* Desktop Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-30 bg-background/80 backdrop-blur-sm border-primary/30 hover:bg-primary hover:text-primary-foreground hidden md:flex"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-30 bg-background/80 backdrop-blur-sm border-primary/30 hover:bg-primary hover:text-primary-foreground hidden md:flex"
              onClick={scrollNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            <Carousel
              setApi={setApi}
              opts={{ loop: true }}
              className="w-full"
            >
              <CarouselContent>
                {projects.map((project) => (
                  <CarouselItem key={project.id}>
                    <BeforeAfterSlider
                      beforeImage={project.beforeImage}
                      afterImage={project.afterImage}
                      onDragStateChange={setIsSliderDragging}
                    />
                    {/* Project Info - compact on mobile */}
                    <div className="mt-4 md:mt-6 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <h3 className="text-lg md:text-2xl font-bold">
                          {project.title}
                        </h3>
                        {/* Savings Badge */}
                        <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs md:text-sm font-semibold border border-primary/20">
                          <project.savingsIcon className="w-3 h-3 md:w-4 md:h-4" />
                          {project.savings}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center justify-center gap-1 md:gap-2">
                        <div className="flex items-center gap-1 text-primary">
                          <MapPin className="h-3 w-3 md:h-4 md:w-4" />
                          <span className="text-xs md:text-sm font-medium">{project.location}</span>
                        </div>
                        <span className="text-muted-foreground text-xs md:text-sm">— {project.description}</span>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Mobile Navigation - larger buttons */}
            <div className="flex justify-center gap-6 mt-5 md:hidden">
              <Button
                variant="outline"
                size="lg"
                className="h-12 w-12 bg-background/80 backdrop-blur-sm border-primary/30 hover:bg-primary hover:text-primary-foreground"
                onClick={scrollPrev}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 w-12 bg-background/80 backdrop-blur-sm border-primary/30 hover:bg-primary hover:text-primary-foreground"
                onClick={scrollNext}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            {/* Dots - larger on mobile */}
            <div className="flex justify-center gap-3 md:gap-2 mt-5 md:mt-6">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-3 md:h-2.5 rounded-full transition-all duration-300 ${
                    current === index
                      ? "bg-primary w-8 md:w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-3 md:w-2.5"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Instructions - different for mobile/desktop */}
          <div className="text-center mt-5 md:mt-6">
            {/* Mobile instruction */}
            <p className="md:hidden text-muted-foreground text-xs flex items-center justify-center gap-2">
              <Move className="h-3 w-3" />
              <span>Trascina per confrontare</span>
              <span className="text-muted-foreground/50">•</span>
              <span>Scorri per altri progetti</span>
            </p>
            {/* Desktop instruction */}
            <p className="hidden md:block text-muted-foreground text-sm">
              ← Trascina il cursore per confrontare →
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
