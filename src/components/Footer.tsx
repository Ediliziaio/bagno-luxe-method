import { motion } from "framer-motion";
 import { Link } from "react-router-dom";
import logo from "@/assets/i-profili-logo.png";
 
 const footerLinks = [
   { label: "Prodotti", href: "/prodotti" },
   { label: "Chi Siamo", href: "/chi-siamo" },
   { label: "Garanzie", href: "/garanzie" },
   { label: "Articoli", href: "/articoli" },
   { label: "Contatti", href: "/contatti" },
 ];

export const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border/50 bg-card/60 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-48 bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2.5 mb-4 group">
              <img 
                src={logo} 
                alt="I Profili" 
                className="h-10 md:h-12 w-auto"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Finestre in PVC ad alta efficienza
              <br />
              Lombardia
            </p>
             {/* Navigation Links */}
             <nav className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
               {footerLinks.map((link) => (
                 <Link
                   key={link.href}
                   to={link.href}
                   className="text-sm text-muted-foreground hover:text-primary transition-colors"
                 >
                   {link.label}
                 </Link>
               ))}
             </nav>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Contatti
            </h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>
                <a href="mailto:info@i-profili.it" className="hover:text-primary transition-colors duration-300">
                  info@i-profili.it
                </a>
              </li>
              <li>
                <a href="tel:+393513058029" className="hover:text-primary transition-colors duration-300">
                  +39 351 305 8029
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Sedi */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Sedi
            </h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>
                <span className="text-foreground/80 font-medium">Showroom:</span>
                <br />Via Bruno Raimondi 5, Busto Arsizio (VA)
              </li>
              <li>
                <span className="text-foreground/80 font-medium">Sede Legale:</span>
                <br />Via Aurelio Saffi 29, Milano
              </li>
              <li>
                <span className="text-foreground/80 font-medium">Magazzino:</span>
                <br />Via Passerera 52, Bolgare (BG)
              </li>
              <li>
                <span className="text-foreground/80 font-medium">Ufficio:</span>
                <br />Via G. Marconi, Mezzate (MI)
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Azienda
            </h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="font-medium text-foreground/80">Domus Group S.r.l.</li>
              <li>P.IVA: 13132010961</li>
              <li>Capitale Sociale: €20.000,00</li>
              <li>SDI: USAL8PV</li>
              <li>
                <a href="mailto:domusgroupsrl@legalmail.it" className="hover:text-primary transition-colors duration-300">
                  PEC: domusgroupsrl@legalmail.it
                </a>
              </li>
              <li>
                <a href="mailto:Amministrazione@domusgroupitalia.it" className="hover:text-primary transition-colors duration-300">
                  Amministrazione@domusgroupitalia.it
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Legale
            </h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>
                <Link to="/privacy-policy" className="hover:text-primary transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="hover:text-primary transition-colors duration-300">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/termini-condizioni" className="hover:text-primary transition-colors duration-300">
                  Termini e Condizioni
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div 
          className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} I Profili. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-2.5">
            <motion.span 
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm text-muted-foreground">Serviamo tutta la Lombardia</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};