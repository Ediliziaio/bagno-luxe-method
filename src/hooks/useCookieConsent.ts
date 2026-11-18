import { useState, useEffect, useCallback } from "react";

export type ConsentPreferences = { necessary: boolean; analytics: boolean; marketing: boolean };
const STORAGE_KEY = 'cookie_consent';
const CHANGE_EVENT = 'iprofili:consent-changed';
const OPEN_EVENT = 'iprofili:open-cookie-preferences';
const defaults: ConsentPreferences = { necessary: true, analytics: false, marketing: false };

function readSaved(): ConsentPreferences | null {
  if (typeof window === 'undefined') return null;
  try {
    const p = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    return p && typeof p.analytics === 'boolean' && typeof p.marketing === 'boolean'
      ? { necessary: true, analytics: p.analytics, marketing: p.marketing } : null;
  } catch { return null; }
}

/** CMP state only. Google and the existing Meta pixel have one shared loader. */
export const useCookieConsent = () => {
  const [preferences, setPreferences] = useState<ConsentPreferences | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  useEffect(() => {
    const saved = readSaved(); setPreferences(saved); setShowBanner(!saved);
    const onChange = () => { setPreferences(readSaved()); setShowBanner(false); };
    const onOpen = () => { setPreferences(readSaved()); setShowBanner(true); };
    window.addEventListener(CHANGE_EVENT, onChange);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => { window.removeEventListener(CHANGE_EVENT, onChange); window.removeEventListener(OPEN_EVENT, onOpen); };
  }, []);
  const savePreferences = useCallback((prefs: ConsentPreferences) => {
    const saved = { necessary: true, analytics: prefs.analytics === true, marketing: prefs.marketing === true };
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(saved)); } catch { /* choice still reaches the current page */ }
    setPreferences(saved); setShowBanner(false);
    window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: saved }));
  }, []);
  const acceptAll = useCallback(() => savePreferences({ necessary: true, analytics: true, marketing: true }), [savePreferences]);
  const rejectAll = useCallback(() => savePreferences(defaults), [savePreferences]);
  const openSettings = useCallback(() => { window.dispatchEvent(new Event(OPEN_EVENT)); }, []);
  return { preferences: preferences || defaults, showBanner, acceptAll, rejectAll, savePreferences, openSettings };
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}
