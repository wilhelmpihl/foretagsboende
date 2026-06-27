# Kassoe Housing — tech.md

**Metod:** firecrawl rawHtml (`script`/`link`/`meta`) av https://kassoehousing.com/, 2026-06-27, grepad i `raw/tech-signals.txt`. Plus markdown-scrapes av undersidor + robots.txt.
**Begränsning:** Direkt `curl -I`/WebFetch mot competitor-domänen blockeras av org-egress-policy (403) → response-headers (server, x-powered-by, CDN) **EJ VERIFIERAT**. Stacken är härledd ur HTML/asset-vägar och plugin-slugs, inte ur HTTP-headers.

| Lager | Fynd | Bevis | Confidence |
|---|---|---|---|
| CMS | **WordPress** | 79× `wp-content`, `wp-includes/js/*`, `wp-json`, `wp-emoji` | hög |
| Tema | **Astra** | `wp-content/themes/astra` (3×) | hög |
| Sidbyggare | **Elementor Pro** | `wp-content/plugins/elementor-pro`, `ElementorProFrontendConfig`, meta `generator: Elementor 4.1.x` | hög |
| Elementor-tillägg | Essential Addons, The Plus Addons, Header-Footer-Elementor | plugin-slugs i kod | hög |
| Lead-formulär | **Contact Form 7** | 17× `wpcf7`, `wp-content/plugins/contact-form-7` | hög |
| Performance/stats | **Jetpack** (+ `stats.wp.com/e-202626.js`, `bilmur.min.js`) | 310× `jetpack`, `stats.wp.com`, `s0.wp.com` | hög |
| SEO | **Yoast SEO Premium** | `yoast-schema-graph`, `yoast.com/product/yoast-seo-premium`, sitemap_index i robots | hög |
| Consent/CMP | **Cookie Information** (DK) | `policy.app.cookieinformation.com/uc.js` | hög |
| Analytics/Tag mgmt | Google **gtag** i **consent-mode** (default denied) | `gtag('consent','default',{ad_storage:'denied'})`, `ads_data_redaction` | medel |
| GA4 mät-ID (`G-`) | Ej hittat laddat direkt | grep negativ (endast gtag-funktion) | medel |
| GTM-container (`GTM-`) | Ej hittad | grep negativ | medel |
| Google Ads (`AW-`) | Ej hittad som conversion-ID | grep negativ; consent-mode antyder avsikt | **låg / EJ VERIFIERAT** |
| Meta Pixel (`fbq`) | Ej hittad | grep negativ | medel |
| B2B visitor-tracking | **Apollo.io website-tracker** | `assets.apollo.io/micro/website-tracker/tracker.iife.js` | hög |
| Kartor | Google Maps JS | `maps.googleapis.com`, `maps.google.com` | hög |
| Kundportal / app-backend | **portal.kassoehousing.com** (separat webapp, `/users/login`, hostar `kassoe.mp4`) | länk + video-src i kod | hög |
| Native mobilapp | **iOS + Android** ("Kassoe Housing App") | App Store id6749769154, Play `com.kassoehousing.kassoehousingapp` (källa /customer) | hög |
| jQuery | Ja (klassisk WP-stack) | `wp-includes/js/jquery/*` | hög |
| WooCommerce-rester | Närvarande i kod (131 träffar) | `woocommerce` i CSS/handles | medel (ej aktiv butik observerad) |
| Chatt/support-widget | **Ingen** (Intercom/Crisp/Tawk/Drift/Zendesk ej funna) | grep negativ ("crisp" = CSS-variabel) | hög |
| Booking engine | Ingen self-serve booking; offert-formulär (`/request-accommodation`) | sidstruktur | hög |
| Hosting/CDN | Okänt (WP-hostat; Jetpack/WP.com-assets via CDN) | indirekt | **låg / EJ VERIFIERAT** |

**Tredjeparts-script (observerat):** Google-ekosystemet (gtag consent-mode, Maps), Apollo.io tracker, Cookie Information, Jetpack/WP.com (stats, gravatar, widgets), Facebook + LinkedIn (sociala länkar/profiler). **Inga** Meta-/TikTok-pixlar eller A/B-verktyg funna i förstasidans markup.

**Subdomäner sedda:** `portal.kassoehousing.com` (kund-/hyresvärdsportal-app), `s.kassoehousing.com` (asset/CDN-subdomän).

**Tolkning för AWP:** Kassoe kör en **klassisk, tung WordPress + Elementor Pro-stack** — flexibel för icke-tekniker men långsammare och mindre SEO-snabb än Rentaborgs Next.js. Däremot har Kassoe något AWP saknar: **egen kundportal + native iOS/Android-app + Apollo-driven outbound-sälj**, vilket gör dem mer "produktifierade" på leverans-/relationssidan. AWP:s företagsboende.se (vanilla JS/Express) är teknikmässigt enklare på alla fronter utom prestanda kontra denna plugin-tunga WP.
