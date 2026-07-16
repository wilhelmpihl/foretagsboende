# National Corporate Housing — tech.md

**Metod:** firecrawl rawHtml (`<head>`/script/link/meta, includeTags script/link/meta) av https://www.nationalcorporatehousing.com/, 2026-06-27, sparad i `raw/homepage-rawhtml.txt` (~247 KB) och grepad.
**Begränsning:** Direkt `curl -I` blockeras av org-egress-policy (403) → response-headers (server, x-powered-by, CDN) **EJ VERIFIERAT**. Stack härledd ur HTML/asset-vägar och script-src.

| Lager | Fynd | Bevis | Confidence |
|---|---|---|---|
| CMS / plattform | **Kentico Xperience DXP** (.NET) | `/_content/Kentico.Xperience.AiAgents/...`, `/_content/Kentico.Content.Web.Rcl/...`, `getContentAsset/...`, `Kentico.FormWidget`, `kentico.updatableFormHelper.submitForm` | hög |
| Backend-runtime | ASP.NET / .NET (Kentico Xperience) | Kentico = .NET-baserad DXP; `_content/*.Rcl` (Razor Class Library) | hög |
| Rendering | Server-renderad (MVC/Razor) | server-renderad meta/innehåll, Razor-bundles | medel |
| Tag management | **Google Tag Manager** `GTM-P6ZP2B` | `googletagmanager.com/gtm.js?id=GTM-P6ZP2B` (3 träffar) | hög |
| Analytics (GA4) | Trolig via GTM-container, ej direkt i HTML | inget direkt `G-`/`gtag('config')` i markup; GTM kan ladda GA4 | medel |
| Ads/Conversion | **Ingen direkt** Google Ads/DoubleClick/remarketing-tag i HTML | grep negativ på `googleadservices`/`AW-`/`doubleclick`/`gclid` → ev. via GTM | medel (ads=okänt) |
| Meta Pixel | Ej hittad (`fbq`/`connect.facebook` saknas) | grep negativ | medel |
| Övriga sociala pixlar | Ej hittade (LinkedIn/Bing/TikTok/Pinterest) | grep negativ | medel |
| Chatt / AI-widget | **Kentico Xperience AI Agents** (AI-chatt/assistent) | `Kentico.Xperience.AiAgents/aiagents/{vendors,main,styles}.js` | hög |
| Formulär | Kentico Form Widget + system form components | `KenticoFormWidget`, `systemFormComponents.min.js`, `kentico.updatableFormHelper` | hög |
| Bot-/spam-skydd | **Google reCAPTCHA** (v2 explicit + api.js) | `gstatic.com/recaptcha/...`, `google.com/recaptcha/api.js?...render=explicit` | hög |
| Typsnitt | **Roboto via Google Fonts** (gstatic, ej self-hosted) | `//fonts.gstatic.com/s/roboto/v48/*.woff2` | hög |
| Egen JS-bundle | Versionerad ES-module | `<script type="module" src="/js/main.CdALYQJn.js">` | hög |
| Media/DAM | Kentico media library | `getContentAsset/{guid}/...` URL-mönster, bilder = stockfoto (`AdobeStock_*`) | hög |
| Strukturerad data | ld+json present | `<script type="application/ld+json">` i HTML | hög |
| Hosting/CDN | `EJ VERIFIERAT` (headers blockerade); assets serveras från egen domän | — | låg |

**Tredjeparts-script (observerat på startsidan):** Google Tag Manager, Google reCAPTCHA, Google Fonts (Roboto). Kentico Xperience AI Agents (förstaparts-host). **Inga** sociala annons-pixlar (Meta/LinkedIn/TikTok/Bing) eller A/B-/heatmap-verktyg (Hotjar/Clarity) i startsidans markup.

**Tolkning för AWP:** National kör en tung enterprise-stack (Kentico Xperience DXP + .NET + GTM + AI-chatt) byggd för global skala och programmatiska geo-landningssidor — tekniskt överlägsen AWP:s vanilla JS/Express. MEN: stacken används för att skala SEO-skal i marknader utan lokal drift (Sverige-sidan är ett mall-genererat skal utan pris/inventory). AWP:s hävstång mot dem är **inte** teknik utan **verkligt lokalt erbjudande**: faktisk Göteborg-inventory, svenskt språk/kontaktväg, transparent pris och äkta lokal närvaro där National bara har en engelskspråkig landningssida.
