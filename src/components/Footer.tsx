import { motion } from "framer-motion";
import logo from "@/assets/i-profili-logo.png";

export const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border/50 bg-card/60 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-48 bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-12">
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
            <p className="text-muted-foreground leading-relaxed">
              Finestre in PVC ad alta efficienza
              <br />
              Lombardia
            </p>
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
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="mailto:info@iprofili.it" className="hover:text-primary transition-colors duration-300">
                  info@iprofili.it
                </a>
              </li>
              <li>
                <a href="tel:+390212345678" className="hover:text-primary transition-colors duration-300">
                  +39 02 1234 5678
                </a>
              </li>
              <li>Lombardia, Italia</li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Legale
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-300">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-300">
                  Termini e Condizioni
                </a>
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