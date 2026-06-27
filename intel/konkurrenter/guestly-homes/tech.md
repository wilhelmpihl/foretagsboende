# Guestly Homes — tech.md

**Metod:** firecrawl rawHtml (`script`/`link`/`meta`) av https://guestlyhomes.com/ + markdown-metadata från /about, /boden, /contact, /work-with-us. Bash-grep på sparad rawHtml. 2026-06-27.
**Begränsning:** Direkt `curl -I` blockeras av org-egress (403) → response-headers (server, x-powered-by, CDN) **EJ VERIFIERAT**. Stack härledd ur HTML/asset-vägar + scrape-`generator`-meta.

| Lager | Fynd | Bevis | Confidence |
|---|---|---|---|
| CMS | **WordPress 7.0** | `generator`-meta "WordPress 7.0"; `/wp-content/`, `/wp-includes/` | hög |
| Page builder | **Elementor + Elementor Pro 4.0.9** | `/wp-content/plugins/elementor*`, `generator`-meta | hög |
| Tema | **Homey** (real-estate-tema) + `connect-child-theme-main` | `/wp-content/themes/homey`, `/wp-content/themes/connect-child-theme-main` | hög |
| STR-marknadsplugin | **Boostly Connect** (`Boostly-Connect-main`) | `/wp-content/plugins/Boostly-Connect-main` (48 träffar), `boostly-excerpt`, `widget_boostly_hostfully_booking_widget` | hög |
| Bokningsmotor (frontend) | **Hostfully** booking-widget (via Boostly) + egen subdomän `book.guestlyhomes.com` | `platform.hostfully.com` dns-prefetch, `widget_boostly_hostfully_booking_widget` | hög |
| PMS / backend | **Boom** (dvr-dashboard) på `app.guestlyhomes.com` + owner-app `app.guestlyhomes.se` | map: app.guestlyhomes.com → "Boom"; ads/CTA → app.guestlyhomes.se | hög |
| Betalning | **Stripe** | `js.stripe.com` dns-prefetch + "StripeM-Inner" i DOM | hög |
| Revenue mgmt | **PriceLabs** (partner) | /about partner-logo | medel |
| Ops/cleaning | **Breezeway** (partner) | /about partner-logo | medel |
| CRM / marketing | **HubSpot** (portal-ID `20202904`) | `js.hs-scripts.com/20202904.js`, `static.hsappstatic.net`, `meetings.hubspot.com/benjamin-gaudet`, `author: HubSpot, Inc.` | hög |
| Callback-widget | **Callpage** ("free callback in 28 seconds") | `cdn-widget.callpage.io`, `#callpage` CSS, widget i alla sidor | hög |
| Callback/lead-call | **Convolo.ai** | `app.convolo.ai/js/icallback.js?key=02cebdc1ba8bf1116216749c3dea3d99` | hög |
| Chatbot | **"Filippa AI"** guest experience 24/7 (kanal-agnostisk) | /about team-kort "Filippa AI Guest Experience 24/7" | medel |
| Reviews/widgets | **Elfsight** (All-in-One Reviews, m.fl.) | `static.elfsight.com`, `elfsightcdn.com`, `elfsight-app-*` IDs | hög |
| Consent/cookie | **Iubenda** | `cdn.iubenda.com`, `cs.iubenda.com` | hög |
| Analytics | **GA4 `G-WBQV0DW8Y7`** + **GTM `GTM-W382F98`** | rawHtml-grep | hög |
| UX-analytics | **Microsoft Clarity** | `clarity` i kod (8 träffar) | hög |
| Meta Pixel | Ingen `fbq` inline, men `connect.facebook.net` dns-prefetch (pixel troligen via GTM) | rawHtml-grep | medel |
| Ikoner/typsnitt | **FontAwesome** (kit.fontawesome.com), Google Fonts (Karla via Elementor) | `kit.fontawesome.com`, `font-family: Karla` | hög |
| Cache/perf | **WP Rocket 3.21.3** | `generator`-meta, `data-rocket-*` attribut | hög |
| Hosting/CDN | EJ VERIFIERAT (cdnjs/cloudflare för libs syns men ej origin-CDN) | indirekt | låg |

**Tredjeparts-script (observerat):** WordPress/Elementor-ekosystem, Boostly+Hostfully (booking), Stripe, HubSpot, Callpage, Convolo, Elfsight, Iubenda, FontAwesome, GA4/GTM/Clarity. Tung tredjeparts-belastning.

**Subdomäner:** book.guestlyhomes.com (boknings-frontend), app.guestlyhomes.com (Boom PMS), app.guestlyhomes.se (owner-app), guest.guestlyhomes.com (gästportal-login), status.guestlyhomes.com (status), dev.guestlyhomes.com (staging — läckte i map), book uses Hostfully.

**Tolkning för AWP:** Guestly har en **mogen, vertikalt integrerad operatörsstack** (PMS + revenue mgmt + cleaning-ops + CRM + AI-support + flerspråkig SEO-WP) — mycket mer komplett drift än både AWP:s företagsboende.se och Rentaborgs marknadsföringssajt. Men stacken är **WP/Elementor-tung och transaktions-/OTA-orienterad**, inte byggd för B2B-inköpsfunnel. Trovärdighetsrisk: oredigerade Boostly-engelska-templates (`[INSERT BUSINESS NAME]`, US-telefon) syns publikt. AWP:s konkurrensfönster i Göteborg ligger i B2B-funnel/paketering, inte i drift-tech (där Guestly är starkt).
