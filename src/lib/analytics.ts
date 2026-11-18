/** Consent-aware events. Google page views are managed exclusively by GTM. */
export const trackMetaEvent = (eventName: string, eventParams?: Record<string, unknown>): void => {
  if (typeof window !== 'undefined') window.fbq?.('track', eventName, eventParams);
};

export const trackGAEvent = (eventName: string, _eventParams?: Record<string, unknown>): void => {
  if (typeof window === 'undefined' || !['contact', 'view_item', 'form_start'].includes(eventName)) return;
  const runtime = (window as Window & { EICAnalytics?: { isTrackable: () => boolean } }).EICAnalytics;
  if (!runtime?.isTrackable()) return;
  window.dataLayer = window.dataLayer || [];
  // Fixed event name only: no phone number, form value, or customer identifier.
  window.dataLayer.push({ event: eventName });
};

/** Legacy CTA callback: opening a contact path is not a submitted lead. */
export const trackLead = (_contentName?: string): void => { trackContact(); };
export const trackContact = (): void => { trackMetaEvent('Contact'); trackGAEvent('contact'); };
export const trackViewContent = (contentId: string, contentType: string): void => {
  trackMetaEvent('ViewContent', { content_ids: [contentId], content_type: contentType });
  trackGAEvent('view_item');
};
export const trackPhoneClick = (_phoneNumber: string): void => {
  trackMetaEvent('Contact', { content_name: 'Phone Click', content_category: 'Telefono' });
  trackGAEvent('contact');
};
export const trackFormStart = (_formName: string): void => {
  trackGAEvent('form_start');
};
