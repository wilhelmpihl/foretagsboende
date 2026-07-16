# Företagsbostäder — tech.md

**Metod:** firecrawl rawHtml (`script`/`link`/`meta`) av https://www.foretagsbostader.se/, 2026-06-27 + markdown-scrapes av /en, enhetssida. Bash-grep i `raw/homepage-rawhtml.txt`.
**Begränsning:** Direkt `curl -I` blockeras av org-egress-policy (403) → response-headers (server, x-powered-by, CDN) **EJ VERIFIERAT**. Stack härledd ur HTML/asset-vägar/script-src. Pixlar som laddas via GTM-container syns ej i sidkällan → Ads/Meta = okänt.

| Lager | Fynd | Bevis | Confidence |
|---|---|---|---|
| Frontend-framework | **Next.js** (React) | `/_next/static/chunks/*`, `/_next/static/media/*`, meta `next-size-adjust`, `_next-gtm`-script | hög |
| Rendering | SSR/SSG (Next.js), server-renderad meta | komplett server-renderad meta + hreflang per route | hög |
| Headless CMS | **Directus** | alla bilder från `directus.foretagsbostader.se/assets/<uuid>?format=webp&width=...` | hög |
| PMS / booking-backend | **Elina** (hospitality PMS) | enhetsbilder alt-text "Image imported from Elina"; live pris+tillgänglighetsdatum | medel–hög |
| CSS | Utility-first + Bootstrap-variabler | utility-klasser i markup, `--bs-body-font-family`/`--bs-font-sans-serif` | medel |
| Typsnitt | Self-hosted **Cera Pro** (+ Roboto-fallback) | `--font-cera-pro-medium`, `.woff2` lokalt; även `fonts.gstatic` (Roboto) | medel |
| Tag management | **Google Tag Manager** `GTM-TWPGJ5` | `googletagmanager.com/gtm.js?id=GTM-TWPGJ5`, `_next-gtm`, `gtm-init` | hög |
| GA4 (mätning) | Ingen direkt `G-XXXX` i källan (ev. via GTM) | grep negativ för giltigt G-ID | medel |
| Google Ads conversion | Ingen direkt `AW-` i källan (ev. via GTM) | grep negativ | medel |
| Meta Pixel | Ej hittad i källan (`fbq`/connect.facebook = brus) | grep negativ efter rensning | medel |
| Live-chat / support | **Weply.chat** (managed live-chat, crowdio-infra) | `app.weply.chat/widget/97ec65fd...`, `cdn.weply.chat`, crowdio.com trigger-ikoner, "We are online" | hög |
| Booking engine | Hybrid: self-serve browse + priskalkylator + "Send request" (ej helt auto-checkout) | enhetssida priskalkylator; request-quote-formulär | hög |
| Hosting/CDN | EJ VERIFIERAT (Next.js → ev. Vercel; egna `directus.`/`www.`-subdomäner) | indirekt | **låg / EJ VERIFIERAT** |

**Pixel-/tag-inventering (observerat i sidkällan):**
- `GTM-TWPGJ5` (Google Tag Manager) — **enda bekräftade tag-container**. Faktiska taggar inuti (GA4, Google Ads, Meta) **EJ VERIFIERAT** (laddas klientsidigt via container, ej i HTML).
- Weply live-chat-widget (`97ec65fd2d774571bc18f5629fad8151`).
- Inga sociala pixlar (Meta/LinkedIn/TikTok), inga A/B-/heatmap-verktyg (Hotjar/Clarity), inget CMP (Cookiebot/OneTrust) hittade i förstasidans markup.

**Egress-not:** All åtkomst via Firecrawl MCP (direkt curl/WebFetch mot foretagsbostader.se ger 403 per org-policy). Response-headers ej tillgängliga → hosting/CDN och GTM-innehåll ej verifierbart.

**Tolkning för AWP:** Stacken är **mer komplett och driftsmogen** än både Rentaborg (offert-formulär utan booking-backend) och AWP (vanilla JS/Express, ~8 listings). Företagsbostäder kör en riktig PMS (Elina) + headless CMS (Directus) + Next.js-frontend med **live pris och tillgänglighet per enhet** och **mänsklig live-chat**. Det är en industriell, skalbar plattform — AWP kan inte matcha bredden tekniskt; AWP:s vinst måste ligga i nisch-skärpa (industri/arbetare, Volvo-korridoren), verifierade case och personlig snabbhet, inte i feature-paritet.
