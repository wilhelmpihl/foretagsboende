# Homelike — tech.md

**Metod:** Försök till firecrawl rawHtml av https://www.homelike.com/ misslyckades — **alla** scrape-försök gav `ERR_TUNNEL_CONNECTION_FAILED` (proxy auto/basic/stealth/enhanced) eller timeout. Direkt `curl -I`/WebFetch blockeras dessutom av org-egress (403). Live-domänens tech kunde därför **inte** grep:as direkt.
**Workaround:** Tech härledd från (a) alias-/efterträdardomän **thehomelike.com → spacest.com** (scrape-bar) och (b) publika beskrivningar av historiska Homelike. Datum: 2026-06-27.

## Status-kontext
- homelike.com / thehomelike.com drivs idag av **Spacest.com** (uppköp ~juli 2025). Ursprungliga Homelike GmbH:s plattform togs ur drift 2025-03-28. Tabellen nedan gäller därför nuvarande operatör (Spacest), med historiska Homelike-noteringar där känt.

| Lager | Fynd | Bevis | Confidence |
|---|---|---|---|
| Live homelike.com (direkt) | **Oåtkomlig för scrape** | ERR_TUNNEL_CONNECTION_FAILED i alla proxy-lägen | hög (att den blockerar) |
| Frontend-framework (Spacest) | **Next.js** (React) | `next-head-count` meta i spacest.com `<head>` | medel–hög |
| Rendering | SSR/SSG (Next.js) | server-renderad meta/innehåll | medel |
| Booking-engine (Spacest) | **Self-serve med betalning** (förauktorisering → charge) | spacest.com/how-works | hög |
| Betalmetoder | Bankgiro, kort, **PayPal**, **Klarna** | footer-ikoner spacest.com | hög |
| Site-verifieringar | **Bing** (`msvalidate.01`), **Facebook domain verification**, `impact-site-verification` (affiliate/Impact) | spacest.com-metadata | hög |
| Analytics/Ads-pixlar | **EJ VERIFIERAT** (G-/GTM-/AW-/fbq/hotjar/clarity ej grep:bara — live-domän blockerad) | — | låg |
| Chatt/support | **WhatsApp** + e-post + help-sida (ingen synlig live-chat-widget) | spacest.com | medel |
| Blog/CMS | blog.roomlessrent.com (kopplat till Roomless/Spacest-gruppen) | footer-länk | medel |
| Hosting/CDN | EJ VERIFIERAT | — | låg |

## Historiska Homelike (tech, från publika källor)
- Custom **B2B booking-plattform** ("end-to-end booking chain", "as easy as booking hotel rooms"). Källa: newswire 2018, wellfound.
- Corporate-features: individuella corporate logins, user-/rights-management, travel-policy-konfiguration, 3:e-parts-integrationer.
- **VAT-fakturering**, **e-signerade online-hyresavtal**, **premiumförsäkring via AXA**.
- Leverantörssida: **unit management system** (bokningar, fakturor, hyresavtal, unit performance).
- Confidence hög (väldokumenterat i press), men exakta SDK:er/pixlar EJ VERIFIERAT.

## Tolkning för AWP
- Homelike var tekniskt **långt före** en operatör som AWP: full self-serve booking-engine, corporate dashboards, e-sign, momsfaktura, försäkrings-API. Ändå **dog bolaget av olönsamhet** — tech-överlägsenhet räckte inte i ett asset-light marknadsplatsupplägg med tunna marginaler.
- Lärdom: AWP behöver inte matcha Homelikes tech-djup för att vinna i Göteborg-industri-long-stay. Eget/kontrollerat utbud + B2B-relationer + lokal leverans slår en utbudslös plattform i just den nischen.
- Den nuvarande homelike.com (Spacest) är en **B2C/expat-marknadsplats utan Sverige-supply** → tekniskt irrelevant som direkt hot mot AWP i Göteborg idag.
