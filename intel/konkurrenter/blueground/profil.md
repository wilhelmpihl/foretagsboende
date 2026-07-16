# Blueground — konkurrentprofil

> **TL;DR**
> - **Positionering:** "Feel at home, free to roam." Världens största operatör av möblerade, flexibla månadsboenden (mid-/long-stay, från 1 månad). Tech-driven: *search live listings → book instantly → move in*. Egen gäst-app för support/städ. (källa: startsida, Trustpilot company text — hög)
> - **Segment:** Bred — privat relocation/digital nomad **+** stark B2B-arm "Blueground for Business" (/furnished-corporate-apartments). B2B-claim: "Trusted by 4,000+ companies" (Google, Uber, EY, Tesla, BCG, Goldman Sachs, Adidas, Sony, Coca-Cola, Disney som referenser). (källa: startsida + B4B-sida — hög)
> - **Geografi:** ~30–40 kärnstäder i egen drift (USA, Europa, Mellanöstern, Asien, Sydamerika) + "on-demand"/partner-nätverk i fler. **Ingen kärnnärvaro i Sverige.** Endast **Linköping** finns — via partner-network (partner "vanderoslo"), under /m/-prefix = partner/on-demand, ej egen inventory. **Inget Göteborg, inget Stockholm.** (källa: startsida-stadslista, firecrawl_map, firecrawl_search → linkoping-swe — hög)
> - **Prismodell:** Per enhet/månad, **transparent online-pris bakom datum-väljare** (instant book). Endast hyra ingår i listpris; all-inclusive (städ, el, avgifter) **på begäran**. Corporate 30–50% billigare än hotell. Min-stay 1 månad (kortare i vissa städer på begäran). (källa: B4B-FAQ — hög)
> - **Stack-essens:** Custom React-SPA, webpack-bundlar på egen CDN (cdn.theblueground.com), GTM, Cloudflare, OneTrust. Egen booking-engine + gäst-app. Skala + real-time tillgänglighet är moaten. (källa: rawHtml — hög)
> - **Största styrka/svaghet:** Styrka = global skala, kapital ($180M @ $750M värdering), äkta blue-chip-kundlogos, **self-serve instant-book online** + transparent pris. Svaghet = **ingen lokal Göteborg/Sverige-närvaro**, white-collar/premium-fokus (ej industri/bygg/worker-ICP), och **återkommande Trustpilot-klagomål om deposition/återbetalning, kontrakt som sägs upp mitt i löptid, och långsam felavhjälpning**. (källa: Trustpilot, geografi — hög)

**Källor:** scrape 2026-06-27 av startsida, /furnished-corporate-apartments, /m/corporate-apartments/linkoping-swe, /furnished-apartments-berlin-de, Trustpilot, firecrawl_map+search (se `raw/`).
**Domän:** theblueground.com · **HQ:** New York (106 W 32nd St) + R&D Aten, Grekland · **B4B-kontakt:** bgforbusiness@theblueground.com; US +1 917 259 1206, EU (Aten) +30 210 70 08 610, UAE +971 44 272 217.

---

## Modul 1 — Marknad & positionering
- **Value prop (hög):** "The home that moves with you for a month, a year, or longer" — designat möblerat boende med **streamlined tech**: sök live-listningar, boka direkt, flytta in, hantera allt i app. Konsumentnära varumärke med premiumkänsla. (källa: startsida)
- **ICP (hög):** Dubbel. (a) Privat: relocation, mellan-leases, remote work, längre resor. (b) **B2B "Blueground for Business":** HR/travel managers, business travelers, finance managers. Branscher som lyfts: Government & Military, Healthcare, Entertainment + generellt "4,000+ companies, SMEs & NGOs". (källa: B4B-sida)
- **Segment (hög):** Mid-to-long-stay möblerat. Tre underprodukter på startsidan: **Live@Blueground** (årsboende, lägre pris), **Blueground for Business** (corporate travelers), **Studentground** (studentrabatt). White-collar/professional tyngdpunkt — **inte** blue-collar/projekt-arbetar-housing.
- **Geografi (hög):** Egen drift i ~30–40 globala affärsstäder (NYC, SF, Boston, Chicago, LA, Miami, London, Paris, Berlin, Madrid, Barcelona, Wien, Zürich, Dubai, Tel Aviv, Singapore, Tokyo, São Paulo m.fl.). **Norden i princip frånvarande.** Linköping existerar endast som **partner-network/on-demand** (foton från partner "vanderoslo", /m/-URL). **Göteborg saknas helt** i både privat- och corporate-stadslistor. (källa: startsida, B4B-sida, firecrawl_map, firecrawl_search)
- **Pris/paketering (hög):** Per lägenhet/månad. **Listpris = endast hyra**; all-inclusive månadsspaket (städ/restock, el, gemensamma avgifter) erbjuds **på begäran**. Inga managementavgifter. Corporate 30–50% billigare än likvärdiga hotell. Deposition + exit-städ/restock-avgift kan **efterges/reduceras för enterprise**. (källa: B4B-FAQ)
- **Differentiering/moat (hög):** Skala + kapital + **real-time online-bokning** (instant book, ej offert-väntan) + konsekvent kvalitet/design + egen gäst-app. Custom korporata bokningskoder. Företaget: ~$467M total finansiering enligt sekundärkällor (Series D $45M mars 2024), egen About-sida historiskt "$180M @ $750M värdering, 5,000+ lägenheter, ~1,000 anställda". *Exakta aktuella siffror EJ VERIFIERAT — sekundärkällor (Caplight/Tracxn/Startupintros) spretar mellan $274M–$467M och 798–1000 anställda; medel/låg.*

## Modul 2 — Trafik & annonsering
- **Organiskt — programmatisk SEO (hög):** Mycket stor footprint. firecrawl_map visar systematiska sidor: stad → kvarter (/s/) → antal sovrum (/f/bedrooms_N) → **× 6 språk (en/es/fr/de/ja/ko)**, plus separata /m/corporate-apartments/-städer, /p/-objektsidor, blogg per stad/tema. Per-stad sitemaps (sitemap.nyc.xml, .lon.xml, .ber.xml …). Detta är benchmarkt för programmatisk SEO i branschen. (källa: firecrawl_map)
- **Betalt — Google Ads (okänt/medel):** GTM (GTM-M2VZ79W) finns men **ingen AW-conversion-ID** hittad i startsidans rawHtml (kan laddas via GTM-container, ej i statisk markup). Givet skala + kommersiella stadssökord är **paid search mycket sannolik**, men *EJ VERIFIERAT i kod — Google Ads Transparency ej hämtad.* Riktning: ja, men obekräftat på kod-nivå.
- **Betalt — Meta (okänt):** Ingen `fbq`/Meta-pixel i statisk markup (kan ligga i GTM). FB/IG länkade. *Meta Ad Library EJ VERIFIERAT.*
- **Socialt (hög):** Facebook, Instagram, LinkedIn, Twitter/X (@theblueground), YouTube (video-testimonials) länkade. Engineering-blogg (engineering.theblueground.com) = arbetsgivarvarumärke/tech-rekrytering.
- **Recensioner/rykte (hög):** Trustpilot 4.1/5 av 2 196 recensioner, claimed + betald prenumeration, svarar på 84% av negativa. Stark recensionsvolym = SEO/trust-tillgång. (källa: Trustpilot)
- **Kanalmix-bedömning:** Största hävstången = **massiv flerspråkig programmatisk SEO + varumärke/PR + recensionsvolym**, sannolikt understött av paid search. Brand-sökningar drivs av riskkapitalsynlighet.

## Modul 3 — SEO & content
- **Teknisk SEO (hög):** Komplett OG/Twitter-meta, theme-color, hreflang via 6-språks-URL:er, per-stad-sitemaps + sitemap_index. robots tillåter index. Stark i18n-arkitektur. (källa: rawHtml, firecrawl_map)
- **Keyword-portfölj (hög):** "furnished apartments [stad]", "corporate housing [stad]", "serviced apartments", "[antal] bedroom apartments [stad]", "furnished [kvarter] [stad]", "student housing", "vacation rentals [stad]". Long-tail × stad × kvarter × sovrum × språk.
- **Content-strategi (hög):** Programmatiska listnings-/stads-/kvarterssidor + omfattande blogg (navigate-your-lease, shape-your-lifestyle, per-stad-guider, broker-spotlights). Tydlig topical authority kring "furnished/corporate housing".
- **Backlink/domänstyrka (medel):** EJ VERIFIERAT med backlink-verktyg, men hög: etablerad domän (claimed Trustpilot 2017), tung PR (TechCrunch/funding-täckning), 2 196 recensioner. Sannolikt hög DA jämfört med nordiska nischaktörer.
- **Core Web Vitals (låg):** EJ VERIFIERAT — PSI ej körd. Custom SPA + bild-tunga sidor kan ge tyngre LCP; CDN + Cloudflare hjälper.

## Modul 4 — Funnel & landningssida
Se `funnel.md`. Sammanfattning:
- **Två funnels.** (a) **Privat/self-serve:** Hero med sökruta (Where? / When?) → instant-book-flöde (real-time listings, datumväljare, pris, "confirm with a click, pay securely"). (b) **B2B:** B4B-landningssida → "Let's connect"-CTA → account manager + corporate booking codes (delvis self-serve, delvis säljledd).
- **Self-serve booking (hög):** Kärnan är **instant book online** — "Search our live listings online, book instantly, and move in easily." Detta skiljer Blueground skarpt från offert-ledda nordiska aktörer (Rentaborg/AWP). Priser laddas dynamiskt bakom datumväljare (ej i statisk HTML).
- **Lead capture B2B (medel):** B4B-sidan är lättare på formulär — primär CTA "Let's connect" + direkt e-post/telefon till bgforbusiness@. Exakta fält i B2B-formuläret *EJ VERIFIERAT* (JS-renderat, ej i statisk markup).
- **Konverteringselement (hög):** Äkta blue-chip-kundlogos (Google/Tesla/Goldman Sachs/Adidas/Sony), namngivna testimonials med titel+företag (Disney VFX-manager, Coca-Cola payroll-specialist), video-stories, Trustpilot 4.1. Trovärdighet betydligt starkare än nordiska nischaktörer.

## Modul 5 — Tech stack
Se `tech.md`. Essens: **custom React-SPA** (webpack-bundlar: runtime/common/home.[hash].bundle.js på cdn.theblueground.com), **GTM** (GTM-M2VZ79W), **Cloudflare** (cloudflareinsights/cf-beacon), **OneTrust** cookie-consent (cdn.cookielaw.org), Google-login (accounts.google.com → gäst-/kundkonton). Egen booking-engine + foto-CDN (photos2.theblueground.com med on-the-fly quality-params) + gäst-app. Ingen WordPress/Webflow/Shopify/Next.js.

## Modul 6 — Erbjudande & leverans
- **Tjänsteflöde (hög):** Self-serve: sök live → se 3D-tours/foton → boka direkt → betala → flytta in → support via app. B2B: account manager, corporate codes, gruppdiscount, flexibel betalning (kort/banköverföring/centraliserad fakturering). (källa: startsida + B4B-FAQ)
- **Vad ingår (hög):** Möblerat designat, fullt kök, smart-TV, hög-hastighets-WiFi, linne/handdukar, Welcome Kit. **El/städ/avgifter ingår EJ i listpris** — all-inclusive-paket på begäran. WFH-bundle (kontorsmöbler) som tillval. Brand-perks (Equinox/HelloFresh/Hertz). (källa: B4B-FAQ)
- **Villkor (hög):** Min-stay 1 månad (kortare i utvalda städer på begäran). Kontrakt kan tecknas av företag **eller** gäst. Faktura/betalningsslip tillhandahålls. Deposition + exit-städ/restock-avgift (kan efterges för enterprise). Flexibel avbokning/early-termination för corporate. (källa: B4B-FAQ)
- **Self-serve vs sälj-lett (hög):** **Övervägande self-serve/instant-book** för privat; **hybrid** (self-serve + account manager) för corporate. Detta är den stora kontrasten mot Rentaborg/AWP (rent offert-ledda).

## Modul 7 — Försäljning & kundservice (endast publikt observerbart)
- **Sales motion (hög):** Privat = instant book, ingen mänsklig touch krävs. Corporate = "Let's connect" → dedikerad account manager + corporate booking codes + förhandlade rater/deposit-eftergift.
- **Supportkanaler (hög):** Gäst-app (primär), e-post, telefon per region. **Ingen synlig live-chat-widget** (Intercom/Drift/Crisp) i statisk markup — support sker via app/e-post/telefon. Trustpilot: svarar på 84% av negativa, "typically within 1 month".
- **Servicekvalitet (medel — från Trustpilot, publikt):** Positivt: lägenhetskvalitet, läge, vänlig personal, smidig bokning. **Negativt och återkommande:** tvister om **deposition/återbetalning**, **kontrakt uppsagda mitt i löptid** (lägenhet återlämnad till hyresvärd), **långsam felavhjälpning/underhåll**, exit-städavgifter upplevda som orättvisa, refund-fördröjningar (8k/3 veckor-exempel). 4.1 totalt men tydlig svans av allvarliga 1-stjärniga. (källa: Trustpilot 2026-06)
- **Mystery shopping:** EJ UTFÖRT (per uppdragsgivarens beslut).

---
### Öppna luckor / att verifiera senare
- Google Ads Transparency + Meta Ad Library (faktiska creatives/sökord) — kod gav GTM men ingen direkt pixel.
- Exakta B2B-formulärfält (JS-renderat).
- Aktuell finansiering/antal lägenheter/städer — sekundärkällor spretar; behöver primärkälla (About-sida JS-renderad).
- Faktiskt listpris-spann per stad (laddas dynamiskt bakom datumväljare).
- Om Linköping-partner-närvaron är aktiv/bokningsbar eller en tom programmatisk SEO-sida.
