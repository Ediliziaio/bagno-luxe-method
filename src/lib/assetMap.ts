// Asset imports per articoli legacy
import homeWindows from '@/assets/home-windows.jpg';
import heroWindow from '@/assets/hero-window.jpg';
import guaranteeContract from '@/assets/guarantee-contract.jpg';
import casaGreenDirective from '@/assets/casa-green-directive.jpg';
import domusProfileSection from '@/assets/domus-profile-section.jpg';
import familyComfort from '@/assets/family-comfort.jpg';
import certifiedInstaller from '@/assets/certified-installer.jpg';
import windowDetail from '@/assets/window-detail.jpg';
import windowAfter1 from '@/assets/window-after-1.jpg';
import windowAfter2 from '@/assets/window-after-2.jpg';
import windowBefore1 from '@/assets/window-before-1.jpg';
import heroWindowSlider from '@/assets/hero-window-slider.jpg';

// Mappa filename -> URL processato da Vite
const articleAssets: Record<string, string> = {
  'home-windows.jpg': homeWindows,
  'hero-window.jpg': heroWindow,
  'guarantee-contract.jpg': guaranteeContract,
  'casa-green-directive.jpg': casaGreenDirective,
  'domus-profile-section.jpg': domusProfileSection,
  'family-comfort.jpg': familyComfort,
  'certified-installer.jpg': certifiedInstaller,
  'window-detail.jpg': windowDetail,
  'window-after-1.jpg': windowAfter1,
  'window-after-2.jpg': windowAfter2,
  'window-before-1.jpg': windowBefore1,
  'hero-window-slider.jpg': heroWindowSlider,
};

/**
 * Risolve un URL immagine da database/storage
 * - URL completi (https://) passano invariati
 * - Path legacy (/src/assets/...) vengono convertiti tramite mappa
 */
export const resolveImageUrl = (url: string | null | undefined): string => {
  if (!url) return '';
  
  // URL completo o blob - ritorna così com'è
  if (url.startsWith('http') || url.startsWith('blob:') || url.startsWith('data:')) {
    return url;
  }
  
  // Path legacy /src/assets/...
  if (url.startsWith('/src/assets/')) {
    const filename = url.replace('/src/assets/', '');
    const resolved = articleAssets[filename];
    if (resolved) return resolved;
    console.warn(`Asset non trovato nella mappa: ${filename}`);
    return '';
  }
  
  // Altro path - ritorna invariato
  return url;
};
