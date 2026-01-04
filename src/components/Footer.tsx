export const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border bg-card/50 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center teal-glow-subtle">
                <span className="text-primary-foreground font-playfair font-bold text-xl">iP</span>
              </div>
              <span className="font-playfair font-bold text-xl text-foreground">I Profili</span>
            </div>
            <p className="text-muted-foreground">
              Finestre in PVC ad alta efficienza
              <br />
              Lombardia
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Contatti
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>info@iprofili.it</li>
              <li>+39 02 1234 5678</li>
              <li>Lombardia, Italia</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Legale
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-200">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-200">
                  Termini e Condizioni
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} I Profili. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Serviamo tutta la Lombardia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
