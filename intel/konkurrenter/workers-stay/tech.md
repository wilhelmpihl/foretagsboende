# Workers Stay — tech.md

**Metod:** firecrawl rawHtml (`formats:["rawHtml"]`, `includeTags:["script","link","meta"]`) av https://workersstay.com/, 2026-06-27, + Bash-grep i `raw/homepage-rawhtml.txt`. Komplement: firecrawl_map (371 URL:er), /about, /reservation/goteborg.
**Begränsning (egress-not):** Direkt `curl`/WebFetch mot competitor-domän blockeras av org-egress-policy (403) → HTTP response-headers (server, x-powered-by, CDN, cache) **EJ VERIFIERAT**. Stack härledd ur HTML/asset-vägar/inline-script.

## Stack-tabell

| Lager | Fynd | Bevis | Confidence |
|---|---|---|---|
| Frontend-framework | **Vite + React (SPA)** | `/assets/index-BlLs_y6Y.js` + `/assets/index-Cl2XBr-6.css` (Vite-hashade namn), **inga** `/_next/`-vägar | hög |
| Rendering | Klient-renderad SPA med server-injicerad SEO-HTML/JSON-LD | Fullt utbyggd `<head>` + 8 JSON-LD-block, men SPA-asset-mönster | medel |
| CSS | Utility-first (Tailwind-liknande klasser) | `class="text-foreground/60 hover:text-foreground transition-colors"` i markup | medel |
| Typsnitt | **Google Fonts (externt)** — ej self-hosted | `fonts.googleapis.com` (3 hits) + `gstatic` | hög |
| Analytics/Tag mgmt | Google **gtag** + Google Tag Manager | `gtag` (11), `googletagmanager.com/gtag/js` (5) | hög |
| Ads/Conversion #1 | **Google Ads** `AW-18075940627` (laddad direkt "for verification") | grep rawHtml | hög |
| Ads/Conversion #2 | **Google Ads** `AW-17159979002` (`allow_enhanced_conversions: true`) | grep rawHtml | hög |
| Meta Pixel | **Live** — `fbq('init','32808262188787589')` + `track PageView` | `connect.facebook.net/fbevents.js`, fbevents (2) | hög |
| GA4 | **Placeholder, ej konfigurerad** | `gtag('config','G-XXXXXXXXXX')` (literal) | hög |
| Microsoft Clarity | **Placeholder, ej konfigurerad** | `clarity.ms/tag/CLARITY_PROJECT_ID` (literal) | hög |
| Consent/CMP | Egen cookie-banner; gtag consent default = **allt granted** | `gtag('consent','default',{ad_storage:'granted',...})` | hög |
| Live-chat/support-widget | **Ingen** (Intercom/Crisp/Tawk/Drift ej funna) → WhatsApp istället | grep negativ; `wa.me`/+46 73 694 29 93 i markup | hög |
| Booking engine | **Ja, self-serve** på subdomän `booking.workersstay.com` (+ /de /fr /es property-sidor) | firecrawl_map | hög |
| Inventory-källa | **Hospitable** PMS + **Airbnb** | `assets.hospitable.com/property_images/*`, `a0.muscache.com` (muscache 1) | hög |
| Betalning | Ingen Stripe-checkout i frontend (`data-crm-theme="stripe"` = UI-temanamn, ej Stripe.js) | grep | medel |
| CMS | Ingen klassisk CMS-signal (ej WordPress/Webflow/Shopify/Framer) | grep negativ | hög |
| Hosting/CDN | `EJ VERIFIERAT` (response-headers blockerade) | — | **låg / EJ VERIFIERAT** |

## Pixel- & tagg-inventering (sammanfattning)
- **Google Ads:** AW-18075940627, AW-17159979002 (två separata conversion-konton, enhanced conversions på) — **aktiv Google Ads (hög)**.
- **Meta Pixel:** 32808262188787589, PageView — **aktiv Meta-spårning (hög)**.
- **GTM/gtag:** ja.
- **Google Fonts:** externt (prestanda-/GDPR-not).
- **Placeholders (oanvända/slarviga):** GA4 `G-XXXXXXXXXX`, Clarity `CLARITY_PROJECT_ID` → indikerar mall-/snabbygge där tracking-setupen inte slutförts.
- **Ej funna:** HubSpot, Intercom, Crisp, Tawk, Drift, Hotjar, riktig Segment, TikTok-pixel, LinkedIn Insight, Bing UET, reCAPTCHA.

## JSON-LD / strukturerad data
8× `application/ld+json` (FAQPage, AggregateRating, Organization). `sameAs` listar LinkedIn /company/workers-stay, FB profil 61574257059539, Airbnb /users/show/workersstay. Tydlig satsning på rich results + AI-svar (AEO).

## Tolkning för AWP
- Workers Stay är **annonsmässigt mer aggressivt** än både AWP och Rentaborg: 2 Google Ads-konton + Meta Pixel live + bred programmatisk SEO + OTA-distribution + self-serve bokning samtidigt. Det är den tyngsta digitala motståndaren i AWP:s exakta nisch.
- Men stacken har **slarvspår** (placeholder-pixlar, valuta-blandning "€25 SEK", externa fonts, consent-default-granted trots "GDPR compliant"-badge) → snabbt skalat mall-bygge, inte djup teknisk mognad. AWP kan inte matcha annonsbredden men kan vinna på **trovärdighet, lokal substans och verifierbara referenser**.
- AWP:s företagsboende.se (vanilla JS/Express, få listningar) är teknik- och räckviddsmässigt underlägset; gapet mot Workers Stay är ännu större än mot Rentaborg p.g.a. den extra OTA-/bokningsmotor-dimensionen.
