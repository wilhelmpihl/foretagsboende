# Sweden Casa Solutions — tech.md

**Metod:** Firecrawl rawHtml (`<head>`/script/link/meta + body) av https://www.swedencasasolutions.com/, 2026-06-27. Grep-fynd i `raw/tech-signals.txt`.
**Begränsning:** Direkt `curl -I` blockeras av org-egress-policy (403) → response-headers (server, CDN, x-powered-by) **EJ VERIFIERAT**. Stack härledd ur HTML/asset-vägar/canonical.

| Lager | Fynd | Bevis | Confidence |
|---|---|---|---|
| Site-builder / origin | **Lovable** (AI app-builder, gpt-engineer-lineage) | `canonical`/`og:url` → `casa-embrace-europe.lovable.app`; `/__l5e/events.js` m. `data-commit-sha`+`data-context-token`; og:image på `storage.googleapis.com/gpt-engineer-file-uploads/...` | hög |
| Frontend-framework | **React** (Vite-bundlad) | `modulepreload` `assets/index-*.js`, `InquiryForm-*.js` (hashade Vite-namn); hydration-markörer `<!--$-->`/`<!--/$-->` | hög |
| Rendering | SSR/streaming + hydration | React-stream-kommentarer i server-renderad HTML | medel |
| CSS | Utility-first (Tailwind-stil) | klasser `bg-gold`, `text-foreground/80`, `tracking-[0.18em]` | hög |
| Ikoner | Lucide | `class="lucide lucide-*"` | hög |
| Typsnitt | **Externt Google Fonts** (Cormorant Garamond + Inter) | `<link href="fonts.googleapis.com/css2?...">` + preconnect gstatic | hög |
| Analytics (egen) | **Lovable "flock"** | `/~flock.js` `data-proxy-url="/~api/analytics"` | hög |
| Analytics (Google) | gtag/GTM/GA4 **ej i råmarkup** | grep negativ (cookie-consent-gated, kan injiceras efter "Accept all") | medel |
| Google Ads (AW-) | **Ej hittad** i råmarkup | grep negativ → Google Ads okänt | medel |
| Meta Pixel (fbq) | **Ej hittad** | grep negativ | medel |
| LinkedIn/TikTok-pixel | Ej hittad | grep negativ | medel |
| Chatt/support-widget | Ingen klassisk (Intercom/Crisp/Tawk/Drift ej hittade); **WhatsApp** floating-knapp `wa.me/46793360142` | markup | hög |
| A/B / heatmap (Hotjar/Clarity) | Ej hittad | grep negativ | medel |
| CRM (HubSpot) | Ej hittad i frontend | grep negativ | låg |
| Booking engine | Ingen self-serve; offertformulär (`/contact`, `InquiryForm-*.js`) | sidstruktur | hög |
| Search Console | Verifierad | `google-site-verification: arfn81IQ8rw0TC6fXthkiZQYmJ6dBanC9-IDhmg41l8` | hög |
| Strukturerad data | Schema.org Organization + WebSite + LocalBusiness (`priceRange:"€€€"`, addressLocality Huelva ES) | ld+json i head | hög |
| Hosting/CDN | Trolig Lovable-publish-infra (typ Cloudflare framför) | indirekt (lovable.app-origin) | **låg / EJ VERIFIERAT** |
| Cookie-consent | Egen banner (Accept/Reject/Customize) → analytics/marketing-cookies post-consent | markup | hög |

**Juridik/identitet i kod:** SwedenCasaSolutions S.L., Calle Arce 9, 21110 Aljaraque, Huelva, Spanien · CIF ESB06951248 · info@swedencasasolutions.com · +46 (0)79 336 01 42. areaServed: ES, PT, SE, DK, FI, DE, AT, CH, IT (+ footer FR, BE, NL, NO).

**Tredjeparts-script (observerat):** Endast Lovable-runtime (`/__l5e/events.js`, `/~flock.js`) + Google Fonts. **Inga** Google-tag/Ads-, Meta-, LinkedIn-pixlar i förstasidans råmarkup (men cookie-consent-gating gör betald spårning möjlig efter samtycke → klassa som "okänt" snarare än "nej").

**Tolkning för AWP:** Sajten är en **AI-genererad Lovable-build** — snabb att producera, snygg "premium"-yta, men teknik- och innehållsmässigt tunn (extern font, ingen self-hosting, tunn blogg, AI-copy). Det signalerar en **ung/lättviktig operatör som vill se etablerad ut** (jfr Rentaborgs Next.js-setup som är mer påkostad). AWP:s eget företagsboende.se (vanilla JS/Express) är fortsatt enklare, men SCS:s försprång ligger i SEO-yta + nisch-copy, inte i robust teknik. Den spanska skalbolagsstrukturen + AI-sajt + borttagen prislista är trovärdighetsglapp AWP kan exploatera mot svenska B2B-inköpare.
