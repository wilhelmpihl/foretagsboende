# Rentaborg — tech.md

**Metod:** firecrawl rawHtml (`<head>`/script/link/meta) av https://rentaborg.com/, 2026-06-27.
**Begränsning:** Direkt `curl -I` blockeras av org-egress-policy (403) → response-headers (server, x-powered-by, CDN) **EJ VERIFIERAT**. Stack härledd ur HTML/asset-vägar.

| Lager | Fynd | Bevis | Confidence |
|---|---|---|---|
| Frontend-framework | **Next.js** (React) | `/_next/static/chunks/*`, `/_next/static/media/*`, meta `next-size-adjust` | hög |
| Rendering | SSR/SSG (Next.js) | Next.js + komplett server-renderad meta/innehåll | medel |
| CSS | Utility-first (Tailwind-liknande) | utility-klassnamn i markup | medel |
| Typsnitt | Self-hosted via `next/font` | `/_next/static/media/*.woff2` (inga externa Google Fonts-anrop) | hög |
| Analytics/Tag mgmt | Google **gtag** + Google Tag Manager | `gtag`, `googletagmanager` i kod | hög |
| Ads/Conversion | **Google Ads** conversion-ID `AW-17443560069` | grep i rawHtml | hög |
| Meta Pixel | Ej hittad (`fbq` saknas) | grep negativ | medel |
| Chatt/support-widget | Ingen (Intercom/Crisp/Tawk/Drift ej hittade) | grep negativ | medel |
| Booking engine | Ingen self-serve booking; offert-formulär (`/get-quote`) | sidstruktur | hög |
| CMS | Ingen klassisk CMS-signal (ej WordPress/Webflow) | grep negativ | medel |
| Hosting/CDN | Trolig Vercel (Next.js-default) | indirekt | **låg / EJ VERIFIERAT** |

**Tredjeparts-script (observerat):** Google-ekosystemet (gtag, GTM, Google Ads). Inga sociala pixlar (Meta/LinkedIn/TikTok) eller A/B-verktyg hittade i förstasidans markup.

**Tolkning för AWP:** Modern, snabb, SEO-vänlig stack (Next.js + programmatiska sidor) är en del av Rentaborgs hävstång. AWP:s företagsboende.se (vanilla JS/Express, 8 listings) är teknik- och innehållsmässigt underlägset för organisk räckvidd.
