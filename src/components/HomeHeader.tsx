import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/i-profili-logo.png";

const navLinks = [
  { label: "Chi Siamo", href: "#chi-siamo" },
  { label: "Prodotti", href: "#prodotti" },
  { label: "Garanzie", href: "#garanzie" },
  { label: "Contatti", href: "#contatti" },
];

export const HomeHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top bar with urgency badge */}
      <div className="hidden md:block bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
        <span className="mr-2">🔥</span>
        <strong>Bonus 50%</strong> — Approfitta della detrazione fiscale prima che scenda al 36%
        <span className="mx-3">|</span>
        <a href="tel:+390212345678" className="hover:underline inline-flex items-center gap-1">
          <Phone className="w-3.5 h-3.5" />
          02 1234 5678
        </a>
        <span className="mx-3">|</span>
        <a href="mailto:info@iprofili.it" className="hover:underline inline-flex items-center gap-1">
          <Mail className="w-3.5 h-3.5" />
          info@iprofili.it
        </a>
      </div>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "top-0 bg-background/95 backdrop-blur-xl border-b border-border/50 py-3"
            : "md:top-10 top-0 bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="I Profili" 
              className="h-8 md:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 uppercase tracking-wider"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              variant="teal"
              size="default"
              onClick={() => scrollToSection("#contatti")}
            >
              Richiedi Preventivo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl pt-20 md:hidden"
          >
            <nav className="flex flex-col items-center gap-6 p-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.href)}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors uppercase tracking-wider"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4"
              >
                <Button
                  variant="teal"
                  size="lg"
                  onClick={() => scrollToSection("#contatti")}
                >
                  Richiedi Preventivo
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
