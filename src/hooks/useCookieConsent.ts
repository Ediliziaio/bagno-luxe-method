import { useState, useEffect, useCallback } from "react";

export type ConsentPreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const CONSENT_STORAGE_KEY = "cookie_consent";
const GTM_ID = "GTM-M45Z2DJV";
const GA4_ID = "G-NC4YX4H4MS";
const META_PIXEL_ID = "1571488960639710";

const defaultPreferences: ConsentPreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export const useCookieConsent = () => {
  const [preferences, setPreferences] = useState<ConsentPreferences | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  // Load saved preferences on mount
  useEffect(() => {
    const saved = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as ConsentPreferences;
        setPreferences(parsed);
        setShowBanner(false);
      } catch {
        setShowBanner(true);
      }
    } else {
      setShowBanner(true);
    }
  }, []);

  // Load tracking scripts when preferences change
  useEffect(() => {
    if (preferences?.analytics || preferences?.marketing) {
      loadTrackingScripts(preferences);
    }
  }, [preferences]);

  const loadTrackingScripts = useCallback((prefs: ConsentPreferences) => {
    // Load Google Tag Manager
    if ((prefs.analytics || prefs.marketing) && !document.getElementById("gtm-script")) {
      // GTM Script
      const gtmScript = document.createElement("script");
      gtmScript.id = "gtm-script";
      gtmScript.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `;
      document.head.appendChild(gtmScript);

      // GTM noscript iframe
      const noscript = document.createElement("noscript");
      noscript.id = "gtm-noscript";
      noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
      document.body.insertBefore(noscript, document.body.firstChild);
    }

    // Load Google Analytics 4
    if (prefs.analytics && !document.getElementById("ga4-script")) {
      const ga4Script = document.createElement("script");
      ga4Script.id = "ga4-script";
      ga4Script.async = true;
      ga4Script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
      document.head.appendChild(ga4Script);

      const ga4Config = document.createElement("script");
      ga4Config.id = "ga4-config";
      ga4Config.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA4_ID}', {
          anonymize_ip: true,
          cookie_flags: 'SameSite=None;Secure'
        });
      `;
      document.head.appendChild(ga4Config);
    }

    // Load Meta (Facebook) Pixel
    if (prefs.marketing && !document.getElementById("meta-pixel-script")) {
      const metaPixelScript = document.createElement("script");
      metaPixelScript.id = "meta-pixel-script";
      metaPixelScript.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${META_PIXEL_ID}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(metaPixelScript);

      // Meta Pixel noscript fallback
      const metaNoscript = document.createElement("noscript");
      metaNoscript.id = "meta-pixel-noscript";
      metaNoscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1" />`;
      document.body.appendChild(metaNoscript);
    }

    // Update consent mode for Google
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: prefs.analytics ? 'granted' : 'denied',
        ad_storage: prefs.marketing ? 'granted' : 'denied',
        ad_user_data: prefs.marketing ? 'granted' : 'denied',
        ad_personalization: prefs.marketing ? 'granted' : 'denied',
      });
    }
  }, []);

  const acceptAll = useCallback(() => {
    const allAccepted: ConsentPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(allAccepted));
    setPreferences(allAccepted);
    setShowBanner(false);
  }, []);

  const rejectAll = useCallback(() => {
    const onlyNecessary: ConsentPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(onlyNecessary));
    setPreferences(onlyNecessary);
    setShowBanner(false);
  }, []);

  const savePreferences = useCallback((prefs: ConsentPreferences) => {
    const finalPrefs = { ...prefs, necessary: true };
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(finalPrefs));
    setPreferences(finalPrefs);
    setShowBanner(false);
  }, []);

  const openSettings = useCallback(() => {
    setShowBanner(true);
  }, []);

  return {
    preferences: preferences || defaultPreferences,
    showBanner,
    acceptAll,
    rejectAll,
    savePreferences,
    openSettings,
  };
};

// Extend Window interface for gtag and fbq
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}
