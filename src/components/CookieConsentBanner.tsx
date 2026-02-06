import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Settings, X, Check, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useCookieConsent, ConsentPreferences } from "@/hooks/useCookieConsent";
import { Link } from "react-router-dom";

export const CookieConsentBanner = () => {
  const { preferences, showBanner, acceptAll, rejectAll, savePreferences } = useCookieConsent();
  const [showDetails, setShowDetails] = useState(false);
  const [tempPrefs, setTempPrefs] = useState<ConsentPreferences>(preferences);

  if (!showBanner) return null;

  const handleSavePreferences = () => {
    savePreferences(tempPrefs);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
      >
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="p-6 pb-4 border-b border-border/50">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                <Cookie className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Utilizziamo i cookie 🍪
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Questo sito utilizza cookie per migliorare la tua esperienza, analizzare il traffico
                  e personalizzare i contenuti. Puoi scegliere quali cookie accettare.{" "}
                  <Link to="/cookie-policy" className="text-primary hover:underline">
                    Cookie Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Details Panel */}
          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-4 space-y-4 bg-muted/30">
                  {/* Necessary Cookies */}
                  <div className="flex items-center justify-between p-4 bg-card rounded-lg border border-border/50">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-green-500" />
                      <div>
                        <p className="font-medium text-foreground">Cookie Necessari</p>
                        <p className="text-xs text-muted-foreground">
                          Essenziali per il funzionamento del sito
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-green-600 font-medium">Sempre attivi</span>
                      <Check className="w-4 h-4 text-green-500" />
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="flex items-center justify-between p-4 bg-card rounded-lg border border-border/50">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded bg-blue-500/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-blue-500">A</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Cookie Analitici</p>
                        <p className="text-xs text-muted-foreground">
                          Google Analytics per capire come usi il sito
                        </p>
                      </div>
                    </div>
                    <Switch
                      checked={tempPrefs.analytics}
                      onCheckedChange={(checked) =>
                        setTempPrefs((prev) => ({ ...prev, analytics: checked }))
                      }
                    />
                  </div>

                  {/* Marketing Cookies */}
                  <div className="flex items-center justify-between p-4 bg-card rounded-lg border border-border/50">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded bg-purple-500/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-purple-500">M</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Cookie di Marketing</p>
                        <p className="text-xs text-muted-foreground">
                          Facebook, Google Ads, TikTok per pubblicità personalizzata
                        </p>
                      </div>
                    </div>
                    <Switch
                      checked={tempPrefs.marketing}
                      onCheckedChange={(checked) =>
                        setTempPrefs((prev) => ({ ...prev, marketing: checked }))
                      }
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Actions */}
          <div className="p-6 pt-4 flex flex-col sm:flex-row gap-3 justify-between items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setShowDetails(!showDetails);
                setTempPrefs(preferences);
              }}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <Settings className="w-4 h-4" />
              {showDetails ? "Nascondi opzioni" : "Personalizza"}
            </Button>

            <div className="flex gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={rejectAll}
                className="min-w-[120px]"
              >
                Rifiuta tutti
              </Button>
              
              {showDetails ? (
                <Button
                  variant="teal"
                  size="sm"
                  onClick={handleSavePreferences}
                  className="min-w-[120px]"
                >
                  Salva preferenze
                </Button>
              ) : (
                <Button
                  variant="teal"
                  size="sm"
                  onClick={acceptAll}
                  className="min-w-[120px]"
                >
                  Accetta tutti
                </Button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
