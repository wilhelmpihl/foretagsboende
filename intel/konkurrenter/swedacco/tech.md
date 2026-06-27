# Swedacco — tech.md

**Metod:** firecrawl rawHtml (`<head>`/script/link/meta) av https://www.swedacco.com/, 2026-06-27. Bash-grep mot `raw/homepage-rawhtml.txt`.
**Begränsning:** Direkt `curl -I` blockeras av org-egress-policy (403) → response-headers (server, x-powered-by, CDN) **EJ VERIFIERAT**. Stack härledd ur HTML/asset-vägar.

| Lager | Fynd | Bevis | Confidence |
|---|---|---|---|
| Frontend-framework | **Next.js** (React) | `/_next/static/css/*`, `/_next/static/chunks/{polyfills,webpack,framework}-*.js`, `__NEXT_DATA__`, `buildId` | hög |
| Rendering | SSR/SSG (Next.js) | Next.js + server-renderad meta/innehåll per sida | medel |
| **CMS** | **Storyblok (headless)** | 37 träffar på `storyblok`; bilder via `a.storyblok.com/f/168675/...`, referens `app.storyblok.com` | hög |
| CDN (media) | Storyblok asset-CDN (`a.storyblok.com`) | bild-URL:er | hög |
| CSS | Utility-/komponent-CSS via Next (`/_next/static/css/8b01ec4c9cdaae44.css`) | asset-väg | medel |
| Typsnitt | *Ej tydligt identifierat* — inga `fonts.googleapis/gstatic`-anrop, inga synliga `.woff2` i `<head>`-utdrag | grep negativ på Google Fonts | låg / EJ VERIFIERAT |
| Analytics / Tag mgmt | **Google Tag Manager** `GTM-W9FCDJZ` + **gtag** | grep i rawHtml (GTM-W9FCDJZ ×3, gtag, googletagmanager ×4) | hög |
| Ads / Conversion | **Google Ads** conversion-ID `AW-10996836799` | grep i rawHtml (×2) | hög |
| Meta Pixel | **Ej hittad** (`fbq`/`fbevents`/`connect.facebook` saknas) | grep negativ | hög |
| LinkedIn Insight | **Ej hittad** (`licdn`/`_linkedin_partner_id` saknas; endast nav-länk) | grep negativ | hög |
| Chatt/support-widget | **Ingen** (Intercom/Crisp/Tawk/Drift/HubSpot ej hittade) | grep negativ | medel |
| Cookie-consent | **Ingen plattform i förstasidans markup** (Cookiebot/OneTrust/CookieYes/Iubenda saknas) — separat `/cookies`-sida finns | grep negativ | medel |
| Booking engine | Ingen self-serve booking; enkelt kontakt-/förfrågansformulär (`/contact`) | sidstruktur | hög |
| Hosting/CDN (app) | Trolig Vercel (Next.js-default) — ej verifierat | indirekt | **låg / EJ VERIFIERAT** |

**Tredjeparts-script (observerat):** Google-ekosystemet (GTM, gtag, Google Ads). Storyblok (CMS/media). Sociala länkar (facebook.com/swedacco, instagram.com/swedacco) men **inga sociala spårningspixlar**. Inga A/B-/heatmap-verktyg (Hotjar/Clarity) hittade.

**Tolkning för AWP:** Swedacco kör en modern, SEO-vänlig stack (Next.js + **Storyblok headless CMS**) som ger skalbar sidproduktion (stads- och adressbaserade landningssidor) — överlägset AWP:s företagsboende.se (vanilla JS/Express, 8 listings). Men Swedacco är **engelsk-only** (ingen hreflang/svensk version) och saknar chatt + pristransparens — luckor AWP kan exploatera. Spårnings-setupen är lättare än Rentaborgs (endast Google, ingen Meta).
