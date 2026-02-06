import { motion } from "framer-motion";
import { useState, useCallback } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  backgroundImage?: string;
}

export const PageHero = ({ title, subtitle, badge, backgroundImage }: PageHeroProps) => {
  const hasBackground = !!backgroundImage;
  const [isLoaded, setIsLoaded] = useState(false);
  const handleLoad = useCallback(() => setIsLoaded(true), []);

  return (
    <section className={`relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden ${
      hasBackground ? 'min-h-[40vh] md:min-h-[50vh] flex items-center' : 'bg-gradient-to-b from-muted/50 to-background'
    }`}>
      {/* Background Image with optimized loading */}
      {hasBackground && (
        <>
          {/* Skeleton while loading */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-muted animate-pulse" />
          )}
          {/* Preload image */}
          <img
            src={backgroundImage}
            alt=""
            loading="eager"
            decoding="async"
            fetchPriority="high"
            onLoad={handleLoad}
            className="hidden"
            aria-hidden="true"
          />
          {/* Background with fade-in */}
          <div 
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </>
      )}

      {/* Decorative elements (only when no background) */}
      {!hasBackground && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {badge && (
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className={`inline-block px-4 py-1.5 text-sm font-semibold uppercase tracking-widest rounded-full mb-6 ${
                hasBackground 
                  ? 'bg-white/20 text-white backdrop-blur-sm' 
                  : 'bg-primary/10 text-primary'
              }`}
            >
              {badge}
            </motion.span>
          )}
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
            hasBackground ? 'text-white' : 'text-foreground'
          }`}>
            {title}
          </h1>
          {subtitle && (
            <p className={`text-lg md:text-xl max-w-2xl mx-auto ${
              hasBackground ? 'text-white/90' : 'text-muted-foreground'
            }`}>
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};
