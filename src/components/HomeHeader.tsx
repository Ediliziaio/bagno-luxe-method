 import { useState, useEffect } from "react";
 import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
 import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
 import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
 } from "@/components/ui/navigation-menu";
 import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
 import { menuCategories } from "@/data/products";
import logo from "@/assets/i-profili-logo.png";

const standardNavLinks = [
  { label: "Chi Siamo", href: "/chi-siamo" },
  { label: "Posa Qualificata", href: "/posa-qualificata" },
  { label: "Garanzie", href: "/garanzie" },
  { label: "Articoli", href: "/articoli" },
  { label: "Contatti", href: "/contatti" },
];

export const HomeHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [openCategories, setOpenCategories] = useState<string[]>([]);
   const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 
   const closeMobileMenu = () => {
     setIsMobileMenuOpen(false);
   };
 
   const isActive = (href: string) => location.pathname === href;
   const isProductsActive = () => location.pathname.startsWith("/prodotti");
 
   const toggleCategory = (title: string) => {
     setOpenCategories(prev => 
       prev.includes(title) 
         ? prev.filter(c => c !== title)
         : [...prev, title]
     );
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
            <NavigationMenu>
              <NavigationMenuList>
                {/* Products Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={`text-sm font-medium uppercase tracking-wider bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent ${
                      isProductsActive() ? "text-primary" : "text-foreground/80 hover:text-primary"
                    }`}
                  >
                    Prodotti
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-background border border-border shadow-xl rounded-lg p-6 min-w-[500px]">
                    <div className="grid grid-cols-3 gap-6">
                      {menuCategories.map((category) => (
                        <div key={category.title}>
                          <h4 className="font-semibold text-primary mb-3 text-sm uppercase tracking-wider">
                            {category.title}
                          </h4>
                          <ul className="space-y-2">
                            {category.items.map((item) => (
                              <li key={item.href}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    to={item.href}
                                    className="block text-sm text-foreground/80 hover:text-primary transition-colors py-1"
                                  >
                                    {item.name}
                                    {item.description && (
                                      <span className="block text-xs text-muted-foreground mt-0.5">
                                        {item.description}
                                      </span>
                                    )}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <Link 
                        to="/prodotti" 
                        className="text-sm text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1"
                      >
                        Vedi tutti i prodotti →
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
 
            {/* Standard Nav Links */}
            {standardNavLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors duration-300 uppercase tracking-wider ${
                  isActive(link.href)
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              variant="teal"
              size="default"
               asChild
            >
               <Link to="/contatti">Richiedi Preventivo</Link>
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
              {/* Products Collapsible */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 }}
                className="w-full max-w-xs"
              >
                <Collapsible>
                  <CollapsibleTrigger className={`flex items-center justify-between w-full text-lg font-medium uppercase tracking-wider ${
                    isProductsActive() ? "text-primary" : "text-foreground hover:text-primary"
                  }`}>
                    Prodotti
                    <ChevronDown className="w-5 h-5 transition-transform data-[state=open]:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 space-y-4">
                    {menuCategories.map((category) => (
                      <Collapsible key={category.title}>
                        <CollapsibleTrigger 
                          onClick={() => toggleCategory(category.title)}
                          className="flex items-center justify-between w-full text-sm font-semibold text-primary uppercase tracking-wider py-2"
                        >
                          {category.title}
                          <ChevronDown className={`w-4 h-4 transition-transform ${openCategories.includes(category.title) ? 'rotate-180' : ''}`} />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="pl-4 space-y-2">
                          {category.items.map((item) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              onClick={closeMobileMenu}
                              className="block text-sm text-foreground/80 hover:text-primary py-1"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </CollapsibleContent>
                      </Collapsible>
                    ))}
                    <Link
                      to="/prodotti"
                      onClick={closeMobileMenu}
                      className="block text-sm text-primary font-medium pt-2"
                    >
                      Tutti i prodotti →
                    </Link>
                  </CollapsibleContent>
                </Collapsible>
              </motion.div>
 
              {/* Standard Nav Links */}
              {standardNavLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index + 1) * 0.1 }}
                >
                  <Link
                    to={link.href}
                    onClick={closeMobileMenu}
                    className={`text-lg font-medium transition-colors uppercase tracking-wider ${
                      isActive(link.href)
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                 className="mt-4"
              >
                <Button
                  variant="teal"
                  size="lg"
                   asChild
                >
                   <Link to="/contatti" onClick={closeMobileMenu}>
                     Richiedi Preventivo
                   </Link>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
