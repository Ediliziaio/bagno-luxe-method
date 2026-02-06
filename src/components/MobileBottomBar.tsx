import { useState, useEffect } from "react";
import { Phone, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const MobileBottomBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show when scrolling up, hide when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 safe-area-inset-bottom"
        >
          <div className="grid grid-cols-2 gap-2 p-3">
            {/* Call Button */}
            <a
              href="tel:+393501780908"
              className="flex items-center justify-center gap-2 bg-card border border-border/50 text-foreground py-3 px-4 rounded-xl font-medium transition-all active:scale-[0.98] min-h-[48px]"
            >
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-sm">Chiama</span>
            </a>

            {/* CTA Button */}
            <Link
              to="/contatti"
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 px-4 rounded-xl font-medium transition-all active:scale-[0.98] min-h-[48px]"
            >
              <FileText className="w-5 h-5" />
              <span className="text-sm">Preventivo</span>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
