# Strawberry / Företagsbostäder — tech.md

**Metod:** firecrawl rawHtml (script/link/meta) av (a) `https://www.strawberryhotels.com/corporate-apartments/` och (b) `https://www.foretagsbostader.se/en`, samt markdown-scrape av Göteborg-listsidor, 2026-06-27.
**Begränsning:** Direkt `curl -I` blockeras av org-egress-policy (403) → response-headers (server, x-powered-by, CDN) **EJ VERIFIERAT**. Stack härledd ur HTML/asset-vägar/script-domäner. Rå-HTML sparad i `raw/foretagsbostader-home-rawhtml.txt` och `raw/strawberry-corporate-apartments-rawhtml.txt`.

> **Viktig modell-distinktion:** Två separata sajter/stackar. Strawberry-hotellsajten är bara marknadsföringsytan; den verkliga produkten/bokningen ligger på Företagsbostäder.

## A) Företagsbostäder (foretagsbostader.se) — den verkliga produkten/booking-motorn
| Lager | Fynd | Bevis | Confidence |
|---|---|---|---|
| Frontend-framework | **Next.js** (React) | `/_next/static/*` (179 träffar), meta `next-size-adjust` | hög |
| Rendering | SSR/SSG (Next.js) | server-renderad meta + listdata | medel |
| Headless CMS / media | **Directus** | `directus.foretagsbostader.se/assets/*` (85 träffar) på alla bilder | hög |
| Hosting / perf | **Vercel** (+ Vercel Speed Insights) | `@vercel/speed-insights/next`, `/script.js` | hög |
| Booking/inventory | **Egen lägenhets-/tillgänglighetsmotor** (live listpris, "Available today", datum) | listsidor med pris+status | hög |
| Typsnitt | Self-hosted **Cera Pro** via next/font | `/_next/static/media/Cera_Pro_*.woff2` | hög |
| Tag manager | **Google Tag Manager** `GTM-TWPGJ5` | grep rawHtml | hög |
| Analytics (GA4) | Sannolikt via GTM | googletagmanager-anrop; ingen lös `G-`-tagg synlig | medel |
| Live-chat | **Crowdio** (crowdio.com widget) | `files.crowdio.com/widget/trigger-icons/*`, "We are online" | hög |
| Meta Pixel | **Ej hittad** (`connect.facebook.net` = 0) | grep negativ | hög |
| Google Ads conv. | **Ej hittad** (ingen `AW-`-tagg) | grep negativ | medel |
| Cookie-consent | Ingen vendor (Cookiebot/OneTrust/Cookieinformation) hittad i markup | grep negativ | medel |
| Sociala länkar | facebook.com/foretagsbostader, linkedin (profil-länkar, ej pixlar) | grep | hög |

## B) Strawberry (strawberryhotels.com/corporate-apartments/) — marknadsförings-/SEO-yta
| Lager | Fynd | Bevis | Confidence |
|---|---|---|---|
| Headless CMS / media | **Contentful** | `images.ctfassets.net/*` (20 träffar) | hög |
| Personalisering / A-B | **Dynamic Yield** | `cdn-eu.dynamicyield.com`, `st-eu.dynamicyield.com`, `rcom-eu.dynamicyield.com` | hög |
| Tag manager | **Google Tag Manager** `GTM-MDVQDL2` | grep rawHtml | hög |
| Innehåll/roll | Tunn per-stad-sida; CTA länkar till foretagsbostader.se | sidstruktur | hög |
| Övriga koncern-domäner | jobs.strawberryhotels.com, strawberry.se, youtube/linkedin/instagram/facebook (embeds/länkar) | script-domäner | hög |
| Cookie-consent | Ingen vendor identifierad i markup | grep negativ | låg |

**Tredjeparts-script (observerat):** FB = Google (GTM) + Vercel + Crowdio. Strawberry = Google (GTM) + Dynamic Yield + Contentful. Inga sociala annons-pixlar (Meta/LinkedIn/TikTok) på någondera produktyta.

**Tolkning för AWP:**
- Företagsbostäder är **tekniskt och innehållsmässigt avsevärt mer kapabelt** än AWP:s företagsboende.se (vanilla JS/Express, 8 listings): riktig Next.js-stack, headless CMS (Directus), live-tillgänglighet/pris-motor, live-chat och Vercel-prestanda.
- De har **transparent self-serve prissättning + chatt**, vilket tar bort två av de svagheter AWP kunde exploatera mot Rentaborg.
- AWP:s realistiska kil mot denna jätte är **nisch-fokus** (industri/bygg/Volvo-långtid 30–90 nätter, lokal Göteborgs-expertis, äkta lokala referenser), inte teknik eller skala.
