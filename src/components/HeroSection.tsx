import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import { Euro, Clock, TrendingUp, Shield, FileCheck } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Import slider images
import heroWindowSlider from "@/assets/hero-window-slider.jpg";
import windowAfter1 from "@/assets/window-after-1.jpg";
import windowAfter2 from "@/assets/window-after-2.jpg";
import windowAfter3 from "@/assets/window-after-3.jpg";

const sliderImages = [heroWindowSlider, windowAfter1, windowAfter2, windowAfter3];

const impactNumbers = [
  {
    icon: Euro,
    value: "€3.600",
    suffix: "/anno",
    label: "Risparmio medio in bolletta",
    subtext: "su 30 anni = €108.000 in tasca tua",
  },
  {
    icon: Clock,
    value: "0",
    suffix: " ore",
    label: "Di manutenzione per 20 anni",
    subtext: "vs 40+ ore con finestre economiche",
  },
  {
    icon: TrendingUp,
    value: "+15-20",
    suffix: "%",
    label: "Valore del tuo immobile",
    subtext: "classe energetica migliorata",
  },
  {
    icon: Shield,
    value: "€0",
    suffix: "",
    label: "Sorprese e costi imprevisti",
    subtext: "tripla garanzia scritta",
  },
];

const AnimatedNumber = ({ value, suffix, isInView }: { value: string; suffix: string; isInView: boolean }) => {
  const [displayValue, setDisplayValue] = useState(value);
  
  useEffect(() => {
    if (isInView) {
      setDisplayValue(value);
    }
  }, [isInView, value]);

  return (
    <span>
      {displayValue}
      <span className="text-primary">{suffix}</span>
    </span>
  );
};

export const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
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
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#1D1D1C]/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-28 md:pt-32 pb-16 md:pb-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 px-5 py-2.5 rounded-full backdrop-blur-sm">
            <FileCheck className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Hai già il preventivo in mano
            </span>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center mb-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Prima di decidere,{" "}
            <span className="text-primary">guarda questi numeri.</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          Ecco cosa cambia davvero scegliendo I Profili rispetto agli altri.
        </motion.p>

        {/* Impact number cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {impactNumbers.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group"
              >
                <div className="glass-card p-6 md:p-8 text-center h-full border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]">
                  {/* Icon */}
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>

                  {/* Number */}
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    <AnimatedNumber value={item.value} suffix={item.suffix} isInView={isInView} />
                  </div>

                  {/* Label */}
                  <p className="text-white font-semibold mb-1">{item.label}</p>
                  
                  {/* Subtext */}
                  <p className="text-gray-400 text-sm">{item.subtext}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Slider dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center gap-2 mt-12"
        >
          {sliderImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === selectedIndex
                  ? "bg-primary w-8"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Vai alla slide ${idx + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
