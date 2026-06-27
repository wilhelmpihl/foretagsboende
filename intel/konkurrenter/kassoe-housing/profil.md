# Kassoe Housing — konkurrentprofil

> **TL;DR**
> - **Positionering:** "Furnished Housing For Your Business — simple, trusted, convenient serviced corporate housing." Pan-europeisk operatör med ursprung i Danmark. Explicit ICP i FB-bio: *"craftsmen, engineers and managers on local construction projects."* Allt samlat på **en faktura**, "real people, not automated platforms".
> - **Prismodell:** Offert-/tender-ledd, allt-inkl (utilities, WiFi, parkering, städning som tillval). **Inga publika priser** någonstans. Budget anges av kunden i förfrågan (EUR/person/månad). (medel)
> - **Kanalmix:** Tung **programmatisk SEO** (50+ stadssidor i ~12 länder, slug `/stad`), Yoast Premium. Betalt: Google consent-mode finns men ingen verifierad Google Ads-/Meta-pixel. **Apollo.io website-tracker** = outbound/sälj-driven. FB + LinkedIn organiskt.
> - **Stack-essens:** WordPress + Astra-tema + **Elementor Pro**, Contact Form 7, Jetpack, Yoast Premium, Cookie Information (DK consent). Separat **kund-/hyresvärdsportal** (portal.kassoehousing.com) + **native iOS/Android-app**.
> - **Största styrka/svaghet:** Styrka = bred geografisk programmatisk SEO + **egen app/portal** + full projekt-logistik (parkering, städ, bilhyra/minibuss, lager) riktad mot bygg/industri-crews. Svaghet = ingen pristransparens, generiska/anonyma testimonials, WordPress-Elementor-prestanda och ingen livechatt → långsam, friktionsfull självbetjäning.

**Källor:** scrape 2026-06-27 av startsida, /gothenburg, /request-accommodation, /customer, robots.txt, sitemap-map, SERP (se `raw/`). Tech: `raw/tech-signals.txt`.
**Domän:** kassoehousing.com · **Juridisk enhet:** Kassoe Housing ApS (Danmark; ApS) — *organisationsnummer EJ VERIFIERAT* · **Ledning:** Christian Høgstrup (CCO & Co-Founder, källa /customer). **Kontakt-mail/telefon:** EJ VERIFIERAT — orsak: ej publicerade på skannade sidor (endast formulär + portal-login).

---

## Modul 1 — Marknad & positionering
- **Value prop (hög):** Tar bort admin-bördan vid boende för utstationerad personal: sourcing, möblering, utilities, incheckning, support → "everything is taken care of ... gathered as one bill". Tagline: *"Furnished Housing For Your Business."* (källa: startsida, /customer)
- **ICP (hög):** B2B — företag som flyttar team/arbetskraft. Facebook-bio är explicit: *"craftsmen, engineers, and managers on local construction projects in Denmark, Germany, Sweden, Finland, Benelux."* Göteborgs-sidan adresserar "logistics, tech, or engineering". → **Stark överlapp med AWP:s ICP (industri/bygg/long-stay-arbetare).** (källa: FB, /gothenburg)
- **Segment (hög):** Worker/projekt-team i första hand ("workforce abroad", "every worker informed"), men även white-collar relocation/affärsresenär. B2B (köpare = HR/inköp/projektledare). Ingen B2C/turist-vinkel. Även **B2B mot hyresvärdar** (/for-landlords, /propose-property) — tvåsidig marknadsplats-ansats.
- **Geografi (hög):** Pan-europeisk. Stadssidor i ~12 länder: **Sverige (Göteborg, Norrköping, Karlstad, Borås, Halmstad, Jönköping)**, DK, FI, NO (Bergen), DE, NL, BE, CH, AT, IT, ES, PL, UK, IE. Sverige täcks brett inkl. industriorter. (källa: firecrawl_map/sitemap)
- **Pris/paketering (medel):** Allt-inkl: möblerat, utilities (el/värme/vatten/internet), WiFi, underhåll. Tillval via förfrågan: **Welcome Package, parkering, städning (vecko/månad/kvartal), bilhyra inkl. minibuss, lager (warehousing)**. Min/max-stay: "both short- and long-term", "flexible lease durations" — **ingen exakt min-stay publicerad** (EJ VERIFIERAT). **Inga priser publicerade** — kunden anger budget i förfrågan. (källa: /request-accommodation, /gothenburg FAQ)
- **Differentiering/"moat" (medel):** (1) **Egen native-app + kundportal** för att hantera boende per crew — ovanligt i segmentet. (2) Full projekt-logistik (bilhyra/minibuss + lager) = täcker hela utstationerings-behovet, inte bara säng. (3) Bred geografi via programmatisk SEO. (4) "Make Tender request"/propose-property = **ramavtal-/RFQ-signal tydlig** (bygger för upphandling). Ingen Superhost-/exklusivitets-claim.

## Modul 2 — Trafik & annonsering
- **Betalt — Google Ads (låg):** Koden innehåller Google **consent mode** (`gtag('consent','default', {ad_storage:'denied'...})` + `ads_data_redaction`) → infrastruktur för Google Ads/GA finns, men **ingen `AW-`-conversion-ID, ingen GTM-container och inget `G-`-mät-ID laddat direkt** i förstasidans kod. → Google Ads *trolig men EJ VERIFIERAD*. Google Ads Transparency ej hämtad. (källa: `raw/tech-signals.txt`)
- **Betalt — Meta (medel):** **Ingen Meta-pixel (`fbq`/fbevents)** i koden → trolig låg/ingen Meta-annonsering. FB-sida finns ("Kassoe Housing ApS"). Meta Ad Library *EJ VERIFIERAT*.
- **Outbound/sälj-driven (hög):** **Apollo.io website-tracker** (`assets.apollo.io/micro/website-tracker/tracker.iife.js`) installerad → de-anonymiserar B2B-besökare för riktad utgående försäljning. Stark signal om en **sälj-/SDR-driven motion** ovanpå inbound. (källa: `raw/tech-signals.txt`)
- **Organiskt (hög):** Stark **programmatisk SEO** — 50+ stadssidor (slug `/stad`) + landshubbar (`/locations-finland`, `/locations-italy`) + WP-blogg (relocation-tips, ESG/hållbarhet). Byggd för long-tail "business accommodation [stad]". Yoast SEO Premium driver meta/schema. *Exakt organisk trafik EJ VERIFIERAT.*
- **Socialt (medel):** Facebook (id=100063503562715) + LinkedIn (company 80709101) länkade. Frekvens/engagemang *EJ VERIFIERAT*.
- **Distribution OTA (medel):** Inga OTA-partnerlogos (Airbnb/Booking) observerade på skannade sidor → distributionsmodell verkar **direkt + sälj**, ej OTA-driven (till skillnad från Rentaborg). *EJ VERIFIERAT i sin helhet.*
- **Kanalmix-bedömning:** Största hävstången = **programmatisk SEO (geo) + outbound-sälj via Apollo**. Betald sökannonsering trolig men osäker.

## Modul 3 — SEO & content
- **Teknisk SEO (hög):** Yoast SEO Premium (schema-graph, news-sitemap). `sitemap_index.xml` + `news-sitemap.xml` i robots.txt. robots.txt **helt öppen** (`Disallow:` tom). `robots`-meta: `index, follow, max-image-preview:large`. Komplett OG/Twitter-meta. `og:locale en_GB`. **Inga hreflang-taggar observerade** trots flerlandstäckning → svaghet (en-GB för alla marknader). (källa: robots.txt, sidmeta)
- **Keyword-portfölj (medel):** Kommersiell geo-tyngdpunkt: "business accommodation [stad]", "serviced corporate housing [stad]", "furnished apartments". Informativt: relocation-guider (moving to Sweden/Denmark), ESG-content.
- **Content-strategi (hög):** Programmatisk landningssida **per stad** (samma mall, lokal industri-/stadsdels-vinkel — t.ex. Göteborg: Lindholmen/Chalmers/Hisingen) + landshubbar + blogg. Tydlig topical-authority-ansats kring "business accommodation".
- **Backlink/domänstyrka (låg):** *EJ VERIFIERAT — orsak: ingen backlink-källa hämtad.* Riktning: domän aktiv sedan ≥2024 (WP-poster), troligen medel/låg auktoritet.
- **Core Web Vitals (låg):** *EJ VERIFIERAT — PSI ej körd.* WordPress + Elementor Pro + Jetpack + jQuery → tyngre frontend än Rentaborgs Next.js; trolig sämre prestanda (hypotes, ej mätt).

## Modul 4 — Funnel & landningssida
Se `funnel.md`. Sammanfattning: Hero ("Furnished Housing For Your Business" + CTA "Request accommodation") → fördelar (cost/time/personal service/admin) → "Across Europe" + locations-grid → testimonials → app-promo → dubbel CTA (kund / hyresvärd). **Lead capture = `/request-accommodation`** med **~18 fält** (inkl. land, region, arbetsplats-adress, antal enheter, typ, budget/person, längd, samt tillvalen parkering/städ/bilhyra/lager). **Mycket hög friktion men extremt kvalificerande.** Offert-ledd, ingen instant book/pris.

## Modul 5 — Tech stack
Se `tech.md`. Essens: **WordPress** + Astra-tema + **Elementor Pro** (sidbyggare), **Contact Form 7** (lead-form), **Jetpack** (+ stats.wp.com), **Yoast SEO Premium**, **Cookie Information** (DK consent), Google Maps. **Apollo.io tracker**. Separat **portal.kassoehousing.com** + **native iOS/Android-app**. Ingen GTM/AW-/Meta-pixel verifierad. Ingen livechatt-widget.

## Modul 6 — Erbjudande & leverans
- **Tjänsteflöde (hög):** 4 steg (källa /customer): 1) "Tell us what you need" (plats/längd/budget/preferenser) → 2) handplockad shortlist → 3) "Easy Move-In" (de sköter pappersarbete + utrustar lägenhet) → 4) "Ongoing Support" under vistelsen. Lokala property managers + administratörer.
- **Vad ingår (hög):** Möblerat (kök m. utrustning + badrum), utilities (el/värme/vatten/internet), WiFi, underhåll/teknisk support, gästsupport — **samlat på en faktura**. (källa: /gothenburg FAQ, startsida)
- **Tillval/extra (hög):** Welcome Package, parkering, städning (vald frekvens), **bilhyra inkl. minibuss**, **lager/warehousing** — beställs i förfrågningsformuläret. → täcker hela projekt-logistiken för en arbetsstyrka. (källa: /request-accommodation)
- **Villkor (medel):** "Flexible lease durations", justerbar period vid ändrad tidslinje, flexibel av-/ombokning. **Exakt min-stay, uppsägningstid och deposition EJ VERIFIERAT** — orsak: ej publicerade.
- **Self-serve vs sälj-lett (hög):** **Sälj-/offert-lett.** Ingen online-bokning/pris. Människa ("dedicated colleague") återkommer med tailored offer. App/portal används för **pågående hantering** efter att avtal slutits, ej för self-serve-bokning.

## Modul 7 — Försäljning & kundservice (endast publikt observerbart)
- **Sales motion (hög):** Offert-/tender-baserad. "We will contact you soon" / "tailored offer as soon as possible". **Apollo.io tracker** indikerar aktiv outbound-prospektering parallellt med inbound-formuläret. "Make Tender request"-flöde = byggd för upphandling/ramavtal.
- **Supportkanaler (medel):** Webformulär (Contact Form 7) primärt. **Kundportal + native app** för pågående support/koordination. **E-post/telefon ej publicerat** på skannade sidor (EJ VERIFIERAT). **Ingen livechatt/chatbot** i koden (Crisp/Intercom/Tawk/Drift ej funna — "crisp" i koden var CSS-variabel, ej chatt). (källa: `raw/tech-signals.txt`)
- **Chatbot:** **Nej** — ingen chatt-widget i förstasidans kod. (hög)
- **Mystery shopping:** EJ UTFÖRT (per uppdragsgivarens beslut — endast publik info).
- **Faktisk svarstid/ton:** *EJ VERIFIERAT — ingen kontakt tagen.*

---
### Öppna luckor / att verifiera senare
- Google Ads Transparency + Meta Ad Library (faktiska creatives/sökord) — kod-bevis svagt/saknas.
- Trustpilot-betyg & antal (sida finns, "10 reviews" enligt SERP; scrape blockerad 403 → **score EJ VERIFIERAT**).
- Exakt min-stay, uppsägningstid, deposition, prisnivå (helt opublicerat).
- Kontaktuppgifter (mail/telefon) + dansk org.nr / svensk närvaro (filial?).
- Affärsmodell: egna enheter vs. broker/aggregator av hyresvärdars lägenheter (propose-property + "approve before added to list" → **asset-light aggregator-modell trolig, medel**).
- Faktisk app-adoption/recensioner (App Store/Play) — ej hämtat.
