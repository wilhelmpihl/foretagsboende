# Ombyggnadsplan — företagsboende.se på modern stack

*Beslutsunderlag, juli 2026. Bygger på konkurrentanalysen i `intel/SYNTES.md` (lärdom L1/L7:
programmatisk SEO + modern stack är fältets standard och AWP:s största strukturella lucka).*

## 1. Beslutsfråga & rekommendation

**Fråga:** Ska företagsboende.se byggas om från dagens Express + statiska HTML-sidor till en
modern stack med programmatisk SEO — och i så fall hur?

**Rekommendation:** Ja, men i faser och utan brådska. Snabbvinsterna (implementerade juli 2026)
täcker positionering, pristransparens, lead-kvalificering och teknisk SEO-grund på nuvarande
stack. Ombyggnaden blir motiverad **när innehållsvolymen växer** — konkret trigger: när fler än
4–5 nischade landningssidor behövs (varje ny sida är i dag manuell HTML-duplicering), eller när
flerspråk (EN/PL) ska lanseras.

## 2. Nuläge

| | |
|---|---|
| Stack | Node.js/Express 4, 6 statiska HTML-sidor med inline CSS/JS (index = ~2 600 rader), ingen build |
| Data | Guesty PMS (listings via OAuth, 60 min cache), filbaserad JSON-"DB", leads → Resend + Make-webhook |
| SEO | Grunden lagd (sitemap/robots/meta/JSON-LD/404), men varje ny sida = manuell duplicering |
| Styrkor | Enkel drift (Render), inga byggberoenden, konverteringsytan är genomarbetad |
| Begränsningar | Ingen sidmall/komponentåteranvändning, ingen i18n, inget CMS — innehåll kräver kodändring |

## 3. Målarkitektur

- **Next.js (App Router)** på Vercel eller Render. Statisk generering + ISR för landnings-/
  stadssidor, server routes för API.
- **Headless CMS:** rekommendation **Sanity** (generöst gratis-tier, bra svenska tecken,
  strukturerat innehåll för programmatiska sidor, ingen egen server). Alternativ **Payload**
  (self-hosted i samma Next-app, ingen extern tjänst, mer drift). Beslut vid projektstart.
- **Guesty-integrationen** (`services/guesty.js`) portas nästan rakt av till en server-modul +
  route handlers; listing-cache ersätts av ISR/`revalidate`.
- **Lead-flödet återanvänds oförändrat:** POST till egen API-route → enquiries-lagring +
  Resend (`MAIL_FROM`) + Make-webhook. Bransch-fältet och valideringen från snabbvinsterna följer med.
- **Portalen** (login/portal, JWT) berörs inte i fas 1–3 — den bor kvar på Express bakom
  subdomän (t.ex. `portal.företagsboende.se`) tills sist, eller ersätts separat.

## 4. Programmatisk SEO-modell

Dimensioner: **stad × bransch × yrke × vistelselängd**.

- URL-schema: `/goteborg/volvo-torslanda`, `/goteborg/bygg`, `/goteborg/montorer`,
  `/goteborg/langtidsboende`, senare `/stockholm/...`
- En sidmall + CMS-dokument per kombination (rubrik, lokal copy, FAQ, pendlingsdata, referens).
- **Doorway-riskhantering:** endast kombinationer med *unikt, användbart innehåll* publiceras
  och indexeras (noindex på tunna varianter tills de fyllts). Kvalitet före kvantitet — det är
  också konkurrenternas svaghet (Workers Stays 371 URL:er är tunna; Corporate Apartments
  404:ar). 
- Intern länkning: nav/footer-kluster per stad + relaterade-sidor-block; sitemap genereras
  automatiskt ur CMS.
- Dagens `/volvo-torslanda` och `/byggprojekt-goteborg` får 301 till nya URL:er.

## 5. Flerspråk (EN/PL)

`next-intl` med locale-prefix (`/en/...`, `/pl/...`), hreflang automatiskt, innehåll som
fält-per-språk i CMS. Prioritet: EN för arbetsgivare, PL för arbetskraftskommunikation
(konkurrenterna Workers Stay/StayEasy/Corporate Apartments kör alla PL).

## 6. Migrationsfaser

| Fas | Innehåll | Effort (grovt) |
|---|---|---|
| 1. Bas-sajt | Next.js-skal, design-tokens från nuvarande sajt, startsida + befintliga landningssidor som mallar, Guesty + lead-API portade | ~1 vecka |
| 2. Programmatisk modell | CMS-schema, sidmall, 10–20 första kombinationssidorna, automatisk sitemap, intern länkning | ~1–2 veckor |
| 3. Flerspråk | next-intl, EN först, PL därefter; översättning av mallar + kärnsidor | ~1 vecka |
| 4. Cutover & SEO-skydd | Parallelldrift på staging → DNS-växling → 301-karta för alla gamla URL:er → Search Console-verifiering | ~3–5 dagar |

Portalen flyttas **inte** i dessa faser (subdomän-lösning enligt §3).

## 7. Vad återanvänds

- `services/guesty.js` (OAuth/cache-logik), `utils/mailer.js`-flödet (Resend + Make), enquiry-
  datamodellen inkl. bransch-fältet, all copy och design-tokens (`assets/landing.css` är i
  praktiken designsystemets frö), robots/JSON-LD-mönstren.

## 8. Risker & beslutspunkter

| Risk | Hantering |
|---|---|
| SEO-tapp vid migrering | Fullständig 301-karta + oförändrade title/description + Search Console-övervakning; migrera först när nuvarande sidor faktiskt rankar (annars finns inget att tappa) |
| Doorway-klassning av programmatiska sidor | Publicera endast ifyllda sidor; unik lokal data per sida (pendlingstider, arbetsgivare, FAQ) |
| CMS-inlärning för ägaren | Sanity Studio är enkel; alternativt sköts innehållet inledningsvis av utvecklare |
| Dubbel drift under övergång | Tidsboxa parallelldriften (max 2–4 veckor) |
| Portal-JWT-kompatibilitet | Portalen rörs inte; cookies/domän ses över först i separat beslut |

**Beslutspunkter för ägaren innan start:** (1) Vercel eller Render som host, (2) Sanity eller
Payload, (3) budget/tidsram för fas 1–2, (4) bekräfta kanoniskt domännamn och att GA4 +
Search Console är på plats innan cutover (för att kunna mäta effekten).
