# Forenom — tech.md

**Metod:** firecrawl rawHtml (`<head>`/script/link/meta) av https://www.forenom.com/ + markdown-scrapes av nyckelsidor, 2026-06-27. Rå-HTML sparad i `raw/homepage-rawhtml.txt` och Bash-grepad för signaler.
**Begränsning:** Direkt `curl -I` blockeras av org-egress-policy (403) → response-headers (server, x-powered-by, exakt CDN) **EJ VERIFIERAT**. Stack härledd ur HTML/asset-vägar och script-domäner.

| Lager | Fynd | Bevis | Confidence |
|---|---|---|---|
| CMS | **WordPress 6.9.4** | meta `generator="WordPress 6.9.4"` (alla sidor), `wp-content/`, `wp-json/`, `wp-includes/` | hög |
| Tema | Custom-tema **`fcom`** (Forenom.com) | 69 träffar `wp-content/themes/fcom/...` (images/frontpage/...) | hög |
| Sökmodul/listningar | **React-baserad** sök-/boknings-app inbäddad i WP ("ReactWP" page-titlar) | sidtitel "ReactWP: Serviced Apartments Location Page", klient-renderad sökresultatlista, JSON-URL-params | medel |
| Plugins (form) | **Gravity Forms** (lead-modaler) | `#fcom_gravityforms_modal=174` (corporate), `=83` (relocation), `=174` (Göteborg) | hög |
| Plugins (övrigt) | Add-to-Any (delning), SiteOrigin Panels (page builder) | `wp-content/plugins/add-to-any`, `wp-content/plugins/siteorigin-panels` | hög |
| Bild-CDN | **imgix** (`prod-wordpress-forenom.imgix.net`) + `images.forenom.com` | img-URL:er `?auto=compress%2Cformat&ixlib=php-4.1.0` | hög |
| Tag management | **Server-side / first-party GTM** container `GTM-T55GXF` via egen subdomän `gtm.forenom.com` | inline GTM-snippet pekar på `gtm.forenom.com/gtm.js` + `/ns.html` | hög |
| Analytics | GA4 via GTM (förstapartsuppsättning) | GTM laddas first-party; exakt G-ID döljs i container | medel |
| Ads/Conversion | **Meta Pixel** id `446799886155202` (`fbq`, connect.facebook.net/fbevents.js) | grep rawHtml (6 fbq-träffar) | hög |
| Google Ads | Trolig (Google-ekosystem + first-party GTM) men **conversion-ID EJ exponerat** i frontend (server-side) | indirekt | låg / EJ VERIFIERAT |
| Felövervakning | **Sentry** (browser SDK 7.60.0 + captureconsole) | `browser.sentry-cdn.com/7.60.0/bundle.min.js` | hög |
| Chatt/support | **Crisp** live-chat ("Open Chat / Start Chat", "Chatta med oss") | grep `crisp`, UI-text på listnings-/sökresultatsidor | hög |
| Recensioner/social proof | **Trustmary** (testimonial/review-widget) | inline `window.tmary` placeholder + grep `Trustmary` | hög |
| Konvertering/personalisering | **The Hotels Network** (THN) referens i kod | grep `trustmary|thehotelsnetwork` regex i inline-script | medel |
| Bot-/DDoS-skydd | **AWS WAF** (captcha/edge SDK) | `*.edge.sdk.awswaf.com`, `*.edge.captcha-sdk.awswaf.com` | hög |
| JS-bibliotek | jQuery + jquery.matchHeight (via cdnjs) | `cdnjs.cloudflare.com/.../jquery.matchHeight` | hög |
| Browser-stöd | browser-update.org (gammal-browser-nudge) | script-src | medel |
| Hosting | Trolig AWS (WAF edge + "prod-wordpress-forenom" namngivning) | indirekt | låg / EJ VERIFIERAT |
| Konto/inloggning | Self-serve kundkonto (`/login`, `/reservation`, `/payment`, `/password-change`) | URL-map | hög |
| i18n | 7 språk (en/sv/no/da/fi/de/ru), per-språk-subkataloger + hreflang/og:locale:alternate | og:locale:alternate, `/sv` `/nb` `/da` `/fi` `/de` `/ru` | hög |

**Tredjeparts-script (observerat på startsidan):** Google (first-party GTM), Meta (fbevents), Sentry, AddToAny, AWS WAF, cdnjs (jQuery), browser-update.org, Crisp, Trustmary. Robust, mogen martech-stack.

**Arkitekturtolkning:** Klassisk **WordPress-monolit** (eget tema `fcom`) som "skal", med en **React-driven sök-/boknings-applikation** för listningar och `/location-search` (instant online-bokning med priser, filter, kartor, kundkonto, betalning). Server-side GTM = mer motståndskraftig mätning mot adblock/ITP. Detta är en **äkta self-serve bokningsmotor**, inte bara ett offertformulär.

**Tolkning för AWP:** Forenom är teknik- och skalmässigt i en helt annan liga än både Rentaborg och AWP: riktig bokningsmotor (instant book), 9000 enheter i sök-index, first-party-mätning, mogen martech. AWP kan inte matcha bredd/teknik — differentiering måste ligga i nisch (Göteborg/Volvo-ekosystem), personlig service och prisbild för specifika long-stay-arbetarsegment, inte i plattformsbredd.

**Öppna luckor:**
- `EJ VERIFIERAT — orsak: server-side GTM` döljer exakta GA4-/Google Ads-conversion-ID:n.
- `EJ VERIFIERAT — orsak: response-headers blockerade` exakt hosting/CDN-origin.
