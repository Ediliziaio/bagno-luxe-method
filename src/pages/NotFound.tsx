import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Phone, FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    
    // Set noindex meta tag for 404 pages
    const metaRobots = document.querySelector('meta[name="robots"]') || document.createElement('meta');
    metaRobots.setAttribute('name', 'robots');
    metaRobots.setAttribute('content', 'noindex, nofollow');
    if (!document.querySelector('meta[name="robots"]')) {
      document.head.appendChild(metaRobots);
    }
    
    // Update title
    document.title = "Pagina non trovata | I Profili";
    
    return () => {
      // Cleanup on unmount
      const meta = document.querySelector('meta[name="robots"][content="noindex, nofollow"]');
      if (meta) meta.remove();
    };
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4">
      <div className="text-center max-w-lg">
        {/* Icon */}
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <FileQuestion className="w-12 h-12 text-primary" />
        </div>
        
        {/* Error Code */}
        <h1 className="text-7xl md:text-8xl font-bold text-primary mb-4">404</h1>
        
        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
          Pagina non trovata
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          La pagina che stai cercando non esiste o è stata spostata. 
          Torna alla homepage o contattaci per assistenza.
        </p>
        
        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="teal" size="lg" asChild>
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Torna alla Home
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/contatti">
              <Phone className="w-4 h-4 mr-2" />
              Contattaci
            </Link>
          </Button>
        </div>
        
        {/* Back link */}
        <button 
          onClick={() => window.history.back()}
          className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Torna indietro
        </button>
        
        {/* Suggested Pages */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">Pagine utili:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/prodotti" className="text-primary hover:underline">Prodotti</Link>
            <span className="text-muted-foreground/50">•</span>
            <Link to="/garanzie" className="text-primary hover:underline">Garanzie</Link>
            <span className="text-muted-foreground/50">•</span>
            <Link to="/chi-siamo" className="text-primary hover:underline">Chi Siamo</Link>
            <span className="text-muted-foreground/50">•</span>
            <Link to="/articoli" className="text-primary hover:underline">Blog</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
