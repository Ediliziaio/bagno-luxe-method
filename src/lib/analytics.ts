/**
 * Analytics helper per tracciamento Meta Pixel e Google Analytics
 * Rispetta il consenso cookie dell'utente
 */

// Helper per tracciare eventi Meta Pixel in modo sicuro
export const trackMetaEvent = (
  eventName: string,
  eventParams?: Record<string, unknown>
): void => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, eventParams);
  }
};

// Helper per tracciare eventi Google Analytics in modo sicuro
export const trackGAEvent = (
  eventName: string,
  eventParams?: Record<string, unknown>
): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Eventi predefiniti per conversioni - Meta Pixel
export const trackLead = (contentName?: string): void => {
  trackMetaEvent('Lead', {
    content_name: contentName || 'Richiesta Preventivo',
    content_category: 'Serramenti',
  });
  
  // Traccia anche su GA4
  trackGAEvent('generate_lead', {
    content_name: contentName || 'Richiesta Preventivo',
  });
};

export const trackContact = (): void => {
  trackMetaEvent('Contact');
  trackGAEvent('contact');
};

export const trackViewContent = (contentId: string, contentType: string): void => {
  trackMetaEvent('ViewContent', {
    content_ids: [contentId],
    content_type: contentType,
  });
  
  trackGAEvent('view_item', {
    item_id: contentId,
    item_category: contentType,
  });
};

export const trackPhoneClick = (phoneNumber: string): void => {
  trackMetaEvent('Contact', {
    content_name: 'Phone Click',
    content_category: 'Telefono',
  });
  
  trackGAEvent('click', {
    event_category: 'Contact',
    event_label: phoneNumber,
  });
};

export const trackFormStart = (formName: string): void => {
  trackMetaEvent('InitiateCheckout', {
    content_name: formName,
    content_category: 'Form',
  });
  
  trackGAEvent('begin_checkout', {
    item_name: formName,
  });
};
