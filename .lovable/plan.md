
# Piano: Creazione Pagine Legali (Privacy, Cookie, Termini)

## Panoramica

Creeremo 3 nuove pagine legali complete e conformi al GDPR italiano, includendo tutti i servizi di tracciamento e marketing utilizzati.

---

## Servizi di Tracciamento da Includere

| Categoria | Servizi |
|-----------|---------|
| **Advertising** | Facebook Ads (Meta Pixel), Google Ads, TikTok Ads |
| **CRM/Marketing** | Lead Connector (GoHighLevel) |
| **Analytics** | Google Analytics |
| **Form** | LeadConnectorHQ (form embed) |

---

## File da Creare

### 1. `src/pages/PrivacyPolicyPage.tsx`
Informativa completa sulla privacy conforme GDPR:
- Titolare del trattamento (Domus Group S.r.l.)
- Tipologie di dati raccolti
- Finalita del trattamento
- Base giuridica
- Cookie e tecnologie di tracciamento
- Servizi di terze parti (Facebook, Google, TikTok, Lead Connector)
- Diritti dell'interessato (accesso, rettifica, cancellazione, portabilita)
- Periodo di conservazione
- Contatti DPO

### 2. `src/pages/CookiePolicyPage.tsx`
Policy dettagliata sui cookie:
- Cosa sono i cookie
- Tipologie: tecnici, analytics, marketing/profilazione
- Elenco dettagliato cookie per servizio:
  - **Meta Pixel (Facebook)**: _fbp, fr
  - **Google Ads**: _gcl_au, _gac_*
  - **Google Analytics**: _ga, _gid, _gat
  - **TikTok**: _ttp, tt_*
  - **Lead Connector**: vari cookie di sessione
- Come gestire/disabilitare i cookie
- Link a opt-out per ogni piattaforma

### 3. `src/pages/TerminiCondizioniPage.tsx`
Termini e condizioni d'uso:
- Definizioni
- Oggetto del servizio
- Condizioni d'uso del sito
- Proprieta intellettuale
- Limitazione di responsabilita
- Preventivi e contratti
- Garanzie
- Foro competente (Milano)
- Legge applicabile

---

## File da Modificare

### `src/App.tsx`
Aggiungere 3 nuove route:
```typescript
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import TerminiCondizioniPage from "./pages/TerminiCondizioniPage";

// ...nelle Routes:
<Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
<Route path="/cookie-policy" element={<CookiePolicyPage />} />
<Route path="/termini-condizioni" element={<TerminiCondizioniPage />} />
```

### `src/components/Footer.tsx`
Aggiornare i link nella sezione "Legale" (linee 147-161):
```typescript
<li>
  <Link to="/privacy-policy" className="hover:text-primary transition-colors duration-300">
    Privacy Policy
  </Link>
</li>
<li>
  <Link to="/cookie-policy" className="hover:text-primary transition-colors duration-300">
    Cookie Policy
  </Link>
</li>
<li>
  <Link to="/termini-condizioni" className="hover:text-primary transition-colors duration-300">
    Termini e Condizioni
  </Link>
</li>
```

---

## Struttura delle Pagine

Ogni pagina legale avra:
- **Header**: HomeHeader (navigazione standard)
- **Breadcrumb**: SEOBreadcrumb per navigazione e SEO
- **SEOHead**: Meta tag e schema.org appropriati
- **Contenuto**: Accordion per sezioni espandibili (UX migliore su mobile)
- **Footer**: Footer standard
- **Design**: Consistente con le altre pagine (bg-background, tipografia standard)

---

## Dati Aziendali da Includere

```text
Titolare: Domus Group S.r.l.
Sede Legale: Via Aurelio Saffi 29, Milano
P.IVA: 13132010961
Email: info@i-profili.it
PEC: domusgroupsrl@legalmail.it
```

---

## Sitemap

Le nuove pagine verranno automaticamente indicizzate. Suggerisco di aggiornare anche `scripts/generate-sitemap.ts` per includere le nuove rotte.

---

## Risultato Finale

- 3 pagine legali complete e conformi GDPR
- Link funzionanti nel footer
- SEO ottimizzato con meta tag e schema.org
- Design responsive consistente con il sito
- Informazioni complete su tutti i servizi di tracciamento (Facebook, Google, TikTok, Lead Connector)
