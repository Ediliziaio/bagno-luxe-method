import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  LogOut, 
  Menu, 
  X,
  ChevronRight,
  ExternalLink,
  Home
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { href: '/admin/articles', label: 'Articoli', icon: FileText },
];

export const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { user, signOut } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Set noindex meta tag for admin pages
  useEffect(() => {
    let meta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'robots');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'noindex, nofollow');
    
    return () => {
      meta?.remove();
    };
  }, []);

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Mobile header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background border-b border-border h-16 flex items-center px-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 hover:bg-muted rounded-lg"
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
        <span className="ml-4 font-semibold">Admin Panel</span>
      </header>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-full w-64 bg-background border-r border-border transition-transform duration-300",
          "lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-16 flex items-center px-6 border-b border-border">
            <Link to="/" className="font-bold text-lg text-foreground">
              I Profili Admin
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href || 
                             location.pathname.startsWith(item.href + '/');
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                  {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
                </Link>
              );
            })}
          </nav>

          {/* Site link and user section */}
          <div className="p-4 border-t border-border space-y-3">
            {/* Visualizza Sito */}
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              <Home className="w-5 h-5" />
              <span className="font-medium">Visualizza Sito</span>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </a>
            
            {/* User info */}
            <div className="text-sm text-muted-foreground truncate px-4">
              {user?.email}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleSignOut}
              className="w-full justify-start gap-2"
            >
              <LogOut className="w-4 h-4" />
              Esci
            </Button>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="lg:ml-64 pt-16 lg:pt-0 min-h-screen">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};
