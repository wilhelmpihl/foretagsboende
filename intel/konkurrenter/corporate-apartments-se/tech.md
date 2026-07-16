# Corporate Apartments (Sweden) — tech.md

**Metod:** firecrawl rawHtml (`<head>`/script/link/meta) av https://www.corporate-apartments.se/, 2026-06-27. Ad-stack korsverifierad mot Google Ads Transparency + Meta Ad Library.
**Begränsning:** Direkt `curl -I` blockeras av org-egress-policy (403) → response-headers (server, x-powered-by, CDN) **EJ VERIFIERAT**. Stack härledd ur HTML/asset-vägar.

| Lager | Fynd | Bevis | Confidence |
|---|---|---|---|
| Frontend-framework | **Astro** (static-site generator) | `data-astro-cid-ijm65bxw` attribut, `/_astro/BaseLayout.D1mCMbj5.css` | hög |
| Rendering | Statisk / server-renderad (ej SPA) | Astro + full HTML i källan, inga `/_next/` | hög |
| CSS-ramverk | **Bootstrap 5.3.3** (CDN) | `cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js`, `navbar`/`col-lg-*`/`offcanvas`-klasser | hög |
| Ikoner | **Font Awesome** | `fa fa-wrench`, `fa fa-globe`, `fa fa-facebook` etc. | hög |
| Typsnitt | EJ VERIFIERAT (ingen self-host/Google Fonts i head) | inga `fonts.googleapis`/`woff2`-länkar i head | låg |
| Analytics | **Google Analytics 4** `G-K8YPM9FKJF` | `googletagmanager.com/gtag/js?id=G-K8YPM9FKJF` | hög |
| Tag manager | **Google Tag Manager** `GTM-MWHQLQ9` | inline GTM-snippet + noscript-iframe | hög |
| Analytics (2:a) | **Plausible** (privacy-vänlig) | `plausible.io/js/script.js` data-domain="corporate-apartments.se" | hög |
| Meta Pixel | **Installerad** — ID `403789254006725` | `fbq('init','403789254006725'); fbq('track','PageView')` + noscript tr-img | hög |
| B2B intent / de-anon | **Albacross** konto `89620593` | `window._nQc="89620593"`, `serve.albacross.com/track.js` | hög |
| Consent management | **Termly** | `app.termly.io/resource-blocker/79ac8856-...` (autoBlock=off) | hög |
| Ads/Conversion (Google) | **Google Ads AKTIV** (advertiser "Corporate Apartments Swedrent AB") | Google Ads Transparency: 2 verifierade creatives → corporate-apartments.se (AR12582950465727102977) | hög |
| Ads (Meta) — aktiv? | Pixel finns; aktiva kampanjer EJ bekräftade | Ej funnen som annonsör i Meta Ad Library (kw "corporate apartments", SE) | medel |
| AW conversion-ID inline | Ej i `<head>` (konvertering troligen via GTM) | grep AW- negativ; GTM närvarande | medel |
| Strukturerad data | **JSON-LD LodgingBusiness** | schema.org LodgingBusiness, currencies USD/SEK/EUR/PLN/NOK | hög |
| Chatt/support-widget | **Ingen** (Intercom/Crisp/Tawk/Drift ej hittade) | grep negativ | medel |
| Booking engine | Ingen self-serve booking; lead-formulär POST→/contactus-thank-you | sidstruktur | hög |
| Kund-portal / backoffice | Eget system antytt | `/web/login`, `/helpdesk`, `/report-a-problem`, bokningsnummer-fält | medel |
| CMS | Trolig egen/headless (blogg sedan 2017, i18n en/sv/pl) | bloggstruktur + Astro-build; ej WordPress/Webflow-signal | låg |
| Hosting/CDN | EJ VERIFIERAT (headers blockerade) | Astro static → kan vara Netlify/Vercel/egen | **låg / EJ VERIFIERAT** |

**Tredjeparts-script (observerat):** Google (GTM, GA4, Google Ads via GTM), Plausible, Meta Pixel, Albacross, Termly, Bootstrap (jsDelivr CDN), Facebook fbevents.js. **Tyngre martech-stack än Rentaborg** (Rentaborg saknade Meta-pixel, Albacross och Plausible).

**Tolkning för AWP:** Corporate Apartments kör en **mogen men teknik-konservativ** setup: Astro+Bootstrap (snabb att underhålla, men daterad känsla) kombinerat med en **professionell B2B-martech-stack** (Albacross företags-deanon + GA4/Plausible dubbel-mätning + bekräftad Google Ads + Meta-pixel). Detta är en seriös, datadriven B2B-säljmaskin — men frontend-UX och innehåll (404:ande fastighetssidor, åldrad blogg, ingen pristransparens, ingen chatt) är svaga punkter. AWP kan inte vinna på "operatörsdjup" (de har 15 år, 200+ enheter, apart-hotell), men kan vinna på **modern UX, pristransparens, verifierade referenser och snabbare svarskanal (chatt/WhatsApp)**.
