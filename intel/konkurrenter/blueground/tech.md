# Blueground — tech.md

**Metod:** firecrawl rawHtml (script/link/meta) av https://www.theblueground.com/, 2026-06-27 (sparad `raw/home-rawhtml-head.txt`, 164 KB). Bash-grep mot pixlar/framework/script-domäner.
**Begränsning:** Direkt `curl -I` blockeras av org-egress-policy (403) → response-headers (server, x-powered-by) **EJ VERIFIERAT**. Stack härledd ur HTML/asset-vägar. Priser och B2B-formulär laddas via JS (ej i statisk markup).

| Lager | Fynd | Bevis | Confidence |
|---|---|---|---|
| Frontend-framework | **Custom React-SPA** (webpack code-splitting) | `cdn.theblueground.com/website/static/js/runtime.[hash].bundle.js`, `common.[hash].bundle.js`, `home.[hash].bundle.js` + numrerade chunk-bundlar (18368, 26296…) | hög |
| Byggverktyg | Webpack (hashade `.bundle.js` + per-route CSS `home.[hash].css`, `UiDialog.[hash].css`) | asset-namngivning | hög |
| Rendering | Klient-renderad SPA (innehåll/pris hydreras via JS) | priser ej i statisk markup; "Add dates" datumväljare laddar listor | hög |
| Egen CDN | **cdn.theblueground.com** (JS/CSS/img), **photos2.theblueground.com** (objektfoton m. `?quality=low`-transform) | 762 referenser i markup | hög |
| Tag management | **Google Tag Manager** `GTM-M2VZ79W` (+ gtag laddas via GTM) | grep rawHtml | hög |
| Google Ads conversion | **Ej hittad i statisk markup** (kan laddas via GTM-container) | grep negativ på AW-* | medel (okänt) |
| Meta Pixel | Ej hittad i statisk markup (`fbq` saknas; kan ligga i GTM) | grep negativ | medel (okänt) |
| CDN/edge + analytics | **Cloudflare** (cloudflareinsights, `data-cf-beacon`) | grep rawHtml | hög |
| Cookie-consent | **OneTrust** (cdn.cookielaw.org) | grep rawHtml | hög |
| Auth/konto | Google-login (accounts.google.com) → kund-/gästkonton | script-domän | hög |
| Booking engine | **Egen self-serve booking** (real-time listings, instant book, online-betalning) | startsida + Trustpilot company text | hög |
| Gäst-app | Egen mobilapp (support/städ/maintenance) | startsida + B4B-FAQ | hög |
| CMS | Ingen klassisk CMS-signal (ej WordPress/Webflow/Shopify/Next.js) | grep negativ | medel |
| Hosting | EJ VERIFIERAT (Cloudflare framför; origin okänt) | — | låg |

**Tredjeparts-script (observerat i statisk markup):** Google (GTM/gtag), Cloudflare Insights, OneTrust, Google accounts, inbäddningar (YouTube, Instagram, Twitter, LinkedIn, Facebook). Inga A/B-verktyg, ingen synlig chat-widget i statisk markup.

**Tolkning för AWP:** Blueground är teknik-benchmarket — egenbyggd SPA + booking-engine + gäst-app + flerspråkig programmatisk SEO på egen CDN, byggt för global skala och **instant book**. AWP:s företagsboende.se (vanilla JS/Express, fåtal listings, offert-flöde) är inte i samma teknikliga. Men: Blueground har **ingen Göteborgs-närvaro**, så teknik-överlägsenheten omsätts inte i lokal konkurrens om Volvo-/industri-ICP:n. AWP konkurrerar inte mot stacken — utan mot frånvaron.
