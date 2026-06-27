# StayEasy — tech.md

**Metod:** firecrawl rawHtml (`<head>`/script/link/meta) av https://stayeasy.se/, 2026-06-27, sparad i `raw/homepage-rawhtml.txt` + Bash-grep. Metadata korsläst från /service, /about-us, /contact, /faq, listing.
**Begränsning:** Direkt `curl -I` blockeras av org-egress-policy (403) → response-headers (server, x-powered-by, exakt CDN/origin) **EJ VERIFIERAT**. Stack härledd ur HTML/asset-vägar + `generator`-meta.

| Lager | Fynd | Bevis | Confidence |
|---|---|---|---|
| CMS | **WordPress 7.0** | `generator: WordPress 7.0`; `/wp-content/`, `/wp-includes/` | hög |
| Sidbyggare | **Elementor 4.1.4** | `generator: Elementor 4.1.4`; elementor-klasser/assets | hög |
| Prestanda/cache | **WP Rocket 3.22.0.3** | `generator: WP Rocket 3.22.0.3` | hög |
| Frontend | PHP-renderad WP-tema (zak-*-klasser), jQuery | markup-klasser, `jquery` i kod | hög |
| CSS | Tema- + Elementor-CSS (ej utility-framework) | markup; WooCommerce-CSS-rester (ej aktiv butik) | medel |
| Typsnitt | **Google Fonts (extern)** | `fonts.googleapis.com` + `fonts.gstatic.com` (+ lokala .woff2) | hög |
| Tag management | **Google Tag Manager** `GTM-WKLDRGC6` | `googletagmanager.com/gtm.js?id=GTM-WKLDRGC6` + dataLayer-init | hög |
| Analytics (GA4) | Trolig via GTM, ej direkt gtag-snutt i HTML | inget `G-`/`gtag/js` i markup; GTM kan ladda GA4 | medel |
| Ads/Conversion | **Ingen** Google Ads-tag i kod (`AW-` saknas) | grep negativ | medel |
| Meta Pixel | **Ingen** (`fbq` saknas) | grep negativ | medel |
| Chatt/support-widget | **Ingen** (Intercom/Crisp/Tawk/Drift/HubSpot ej hittade) | grep negativ | medel |
| Booking engine | **Ingen self-serve** — `mailto:info@stayeasy.se` (subject = lägenhetskod) + enkelt kontaktformulär | sidstruktur, listing-CTA | hög |
| e-handel | WooCommerce-CSS finns men ingen aktiv butik/checkout | CSS-rester, ingen kassa | låg |
| Cookie/consent | GDPR Cookie Consent-plugin (CookieLawInfo) | cookie-tabell i markup | hög |
| Hosting/CDN | **one.com** (managed WordPress) | media via `usercontent.one/wp/stayeasy.se/...` | hög |

**Pixlar / tredjeparts-script (observerat):** Google Tag Manager (`GTM-WKLDRGC6`), Google Fonts. **Inga** sociala annons-pixlar (Meta/LinkedIn/TikTok som spårning), **inga** A/B-/heatmap-verktyg (Hotjar/Clarity), **ingen** chatt. Sociala länkar (FB/LinkedIn/Instagram) är bara länkar, ej pixlar.

**Egress-not:** Konkurrentdomäner får ej nås med direkt curl/WebFetch (org-policy, 403). All hämtning skedde via Firecrawl MCP (proxy `basic`). Meta Ad Library / Google Ads Transparency är JS-renderade och gav inga laddade annonskort via enkel scrape → annons-status **EJ VERIFIERAT** (varken bekräftad eller utesluten).

**Tolkning för AWP:** StayEasys stack är en **klassisk SMB-WordPress** (Elementor + one.com) — billig, underhållsvänlig, men tyngre och mindre SEO-/prestanda-optimerad än Rentaborgs Next.js. Deras SEO-hävstång kommer av **volym** (200+ auto-genererade lägenhetssidor + 5 språk + Yoast), inte av modern teknik. Bokningsflödet (mailto, ingen availability/betalning) är primitivt — här är AWP:s företagsboende.se i nivå eller bättre om instant-förfrågan/kvalificerande formulär byggs. Tekniskt utgör StayEasy inget hot mot AWP; deras styrka är lokal portfölj + relationer, inte plattform.
