import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div>
            <img 
              src={logo} 
              alt="Architetto del Bagno" 
              className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto mb-4 md:mb-6"
            />
            <p className="text-muted-foreground">
              Ristrutturazioni bagno premium
              <br />
              Milano e provincia
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Contatti
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>info@architettodelbagno.it</li>
              <li>+39 02 1234 5678</li>
              <li>Milano, Italia</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Legale
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors duration-200">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors duration-200">
                  Termini e Condizioni
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Architetto del Bagno. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm text-muted-foreground">Milano e provincia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
