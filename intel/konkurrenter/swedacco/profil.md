# Swedacco — konkurrentprofil

> **TL;DR**
> - **Positionering:** "Corporate housing made simple." Premium, personlig svensk corporate housing-aktör. Förmedlar/driver möblerade lägenheter för in-/utländska företag med uppdrag i Sverige. Uttalad nisch mot **vindkraft, bygg & entreprenad** (källa: /housing/gothenburg, /housing-solutions, hög).
> - **Prismodell:** Offert-/förfrågansledd ("Send inquiry" → kontaktformulär). **Inga publika priser eller min-stay** på sajten (EJ VERIFIERAT — inga prislistor). All-inclusive paket (möbler, lakan/handdukar, WiFi, el/vatten/värme, försäkring, slutstäd, kontaktperson 365 dgr) (källa: startsida FAQ, hög).
> - **Kanalmix:** **Google Ads aktiv** (13 verifierade annonser i SE — Google Ads Transparency, hög). Programmatisk SEO via stads- och listningssidor (Storyblok CMS). Ingen Meta-annonsering verifierad (Meta Ad Library tom). FB/Instagram-sidor finns men ingen pixel.
> - **Stack-essens:** Next.js + **Storyblok (headless CMS)**, GTM (GTM-W9FCDJZ), Google Ads (AW-10996836799). Inga sociala pixlar, ingen chatt.
> - **Storlek (extern):** Org 559192-3544, reg 2019-01-24, **8 anställda**, omsättning **52,9 MSEK (2025, +23 %)**, resultat 6,9 MSEK (källa: allabolag/syna/bolagsfakta, hög). Liten men lönsam och växande, kvinnogrundad (Jessica Sandgren, VD/grundare).
> - **Största styrka/svaghet:** Styrka = **äkta, verifierbara kundlogos** (Peab, Ramboll, Balder, Rikshem, K-Fastigheter, Victoriahem) + tydlig industrinisch (vind/bygg) + lönsam/personlig. Svaghet = **ingen pristransparens, ingen self-serve/instant book, ingen chatt, tyngdpunkt i Norrland** snarare än Göteborg → svag Göteborgsnärvaro (stadssidan är generisk turisttext utan Volvo/industrivinkel).

**Källor:** scrape 2026-06-27 av startsida, /contact, /corporate-housing, /rent-out-property, /housing-solutions, /for-tenants, /about-us, /housing/gothenburg, /housing/gavle/knarotsvagen (se `raw/`). Tech: `raw/homepage-rawhtml.txt`. Extern: `raw/scrape-notes.md`.
**Domän:** swedacco.com (även swedacco.se, redirect-signal) · **Juridisk enhet:** Swedacco AB, org 559192-3544 · **Kontakt:** info@swedacco.com, jessica.sandgren@swedacco.com, 070-415 20 11, Gävlehovsvägen, 806 33 Gävle.

---

## Modul 1 — Marknad & positionering
- **Value prop (hög):** "Corporate housing made simple. No matter if you're local or global." Avlasta HR/relocation-ansvarig: Swedacco sköter sourcing, kvalitetssäkring, kontrakt, incheckning och löpande kontaktperson. *"Let us take care of your relocation project and save you precious time."* (källa: startsida)
- **ICP (hög):** B2B — företag som flyttar personal till Sverige, både inhemska och **utländska företag med kontrakterade jobb i Sverige**. Uttalad branschnisch: **vindkraft (wind power), bygg & entreprenad (construction & contracting)** (källa: /housing/gothenburg, /housing-solutions). Detta är nära AWP:s ICP (industri/bygg/Volvo).
- **Segment (medel):** Worker/projekt-team (utländsk arbetskraft på projekt) **och** white-collar relocation. Beskriver sig som länk mellan fastighetsbolag och utländska företag. Tonvikt på **långa uppdrag** ("short or long-term assignments", "especially regards longer periods"). Erbjuder enskilda lägenheter, delade lägenheter, hela hus, större bostadskomplex (källa: /corporate-housing, /rent-out-property).
- **Geografi (hög):** "10+ cities" (källa: /about-us). Starkast i **Gävle, Umeå, Skellefteå** (uttalat) + Luleå, Örebro, Örnsköldsvik (källa: /rent-out-property, /housing-solutions). Stadssidor finns för: Göteborg, Stockholm, Malmö, Gävle, Luleå, Skellefteå, Boden, Jönköping, Örebro, Sundsvall, Örnsköldsvik, Umeå. **Tyngdpunkt Norrland/Norrlandskusten** (datacenter/vind/industri-orter) — inte Göteborg. Göteborgssidan är generisk turisttext (Liseberg/konstmuseum) utan industri/Volvo-vinkel (källa: /housing/gothenburg).
- **Pris/paketering (hög på "vad ingår", låg på pris):** **All-inclusive** — fullt möblerat & utrustat, lakan & handdukar, WiFi, el/vatten/värme, **hemförsäkring ingår**, slutstäd, kontaktperson 365 dgr/år. Veckostäd och p-plats som tillval (källa: startsida FAQ, /corporate-housing). **Inga priser, ingen min-stay, ingen valuta publicerad** — allt via offert. *Min-stay EJ VERIFIERAT — orsak: ej publicerad.*
- **Differentiering/"moat" (medel):** "We work without intermediaries" — påstår sig hyra direkt från fastighetsbolag utan mellanhänder, vilket de marknadsför som kvalitetsgaranti. Tar **full juridisk + ekonomisk risk** gentemot fastighetsägare (garanterad hyra i tid) — stark hook mot fastighetsägar-sidan. "We run some properties ourselves and also tailor solutions" (källa: /for-tenants) → blandad modell: egen drift + förmedling/sourcing.

## Modul 2 — Trafik & annonsering
- **Betalt — Google Ads (hög):** **AKTIV.** Google Ads Transparency Center (region SE, domain swedacco.com) visar **13 annonser** under verifierad annonsör "Swedacco AB" (AR00255575086965194753). Bekräftas av conversion-ID **AW-10996836799** + gtag i koden (källa: Ads Transparency + raw/homepage-rawhtml.txt). *Exakta sökord EJ VERIFIERAT — endast creative-bilder synliga.*
- **Betalt — Meta (hög):** **EJ AKTIV (verifierat).** Meta Ad Library (SE, q=Swedacco): "No ads match your search criteria". Ingen fbq/Meta-pixel i koden. FB-sida (facebook.com/swedacco) + Instagram (instagram.com/swedacco) finns men används ej för betald annonsering (källa: Meta Ad Library + raw HTML).
- **Organiskt (medel):** Programmatisk SEO via **stadssidor** (12 st) + **listningssidor** per adress, alla med unika title/description-meta. Storyblok CMS driver innehållet. Content-djup begränsat jämfört med Rentaborg (få blogg-/guidesidor — /corporate-housing fungerar som pelarsida). *Exakt organisk trafik EJ VERIFIERAT.*
- **Distribution (hög):** Inga OTA-partners (ingen Airbnb/Booking). Helt direkt B2B-modell utan listningsplattformar.
- **Socialt (låg):** Facebook + Instagram länkade. Frekvens/engagemang *EJ VERIFIERAT*. LinkedIn ej hittad i kod.
- **Kanalmix-bedömning:** Hävstången = **Google Ads + stads-/adressbaserad SEO**. Smalare digital närvaro än Rentaborg men mer trovärdig (äkta logos, verklig org-data).

## Modul 3 — SEO & content
- **Teknisk SEO (hög):** Unika title/meta-description per sida, OG-meta via Next, canonical via Next.js. Storyblok som CMS möjliggör skalbar sidproduktion. Endast engelska (språkväljare visar bara "English") → ingen hreflang/flerspråkighet trots svensk marknad (svaghet, källa: alla sidor `language: en`).
- **Keyword-portfölj (medel):** "corporate housing [stad]", "furnished apartments", "staff accommodation", "corporate housing in Sweden". Pelarsida /corporate-housing rankar mot informationssökningar ("what is corporate housing", "difference corporate housing vs serviced apartments").
- **Content-strategi (medel):** Landningssida per stad (programmatisk, men generisk turisttext) + listningssida per adress + en pelarsida. **Saknar** bransch-/duration-kluster och blogg som Rentaborg har. Svagare topical authority.
- **Backlink/domänstyrka (låg):** *EJ VERIFIERAT — ingen backlink-källa hämtad.* Domän aktiv sedan ~2019 (bolaget reg 2019), troligen måttlig auktoritet.
- **Core Web Vitals (låg):** *EJ VERIFIERAT — PSI ej körd.* Next.js indikerar god grundprestanda; Storyblok-bilder serveras via CDN (a.storyblok.com).

## Modul 4 — Funnel & landningssida
Se `funnel.md` för steg-för-steg. Sammanfattning:
- **Sidarkitektur (hög):** Hero (slogan + enkel CTA "Send inquiry"/"Contact us") → "What we offer" (Experience/Quality/Flexibility) → "About us" (grundarstory) → **kundlogos (äkta: Peab/Ramboll/Balder/Mercury/Victoriahem)** → FAQ → kontakt-CTA. Lugn, premiumkänsla, mindre aggressiv CTA-densitet än Rentaborg.
- **CTA-arkitektur (hög):** Genomgående **"Contact us" / "Send inquiry" / "Send request"** → alla leder till kontaktformulär. **Ingen "Get a quote"-mekanik, ingen prisindikation, ingen instant book.**
- **Lead capture (hög):** Enda formulär = `/contact` (och inbäddat på flera sidor). Fält: **fritextmeddelande + dropdown "What can we help you with?" (Housing solutions / Rent out my property / Something else) + GDPR-checkbox + Send.** Mycket **lågt antal fält** (~2–3) = låg friktion men **låg lead-kvalificering** (ingen duration/headcount/bransch/stad-struktur som Rentaborg). (källa: /contact)
- **Konverteringselement (hög):** **Äkta kundlogos** (verifierbara företag) = starkaste trovärdighetssignal, klart bättre än Rentaborgs anonyma testimonials. Stat-block "250+ housing options / 10+ cities / 35+ property owners" (källa: /about-us). Namngivna medarbetare med foto + direkta mejl (Jessica, Sara, Linda) = personlig trovärdighet. Inga externa recensionsbetyg.
- **Mobil/5-sek-intryck (medel):** Tydligt erbjudande (<5 sek: "Corporate housing made simple" + "Send inquiry"). Responsiv (viewport-meta, hamburgermeny). *Faktisk mobil-UX ej skärmdumpad.*

## Modul 5 — Tech stack
Se `tech.md`. Essens: **Next.js** (React, SSR/SSG) + **Storyblok headless CMS** (bilder via a.storyblok.com, app.storyblok.com-referens). GTM (GTM-W9FCDJZ) + gtag + Google Ads (AW-10996836799). Inga sociala pixlar (ingen fbq/LinkedIn Insight), ingen chatt-widget, ingen cookie-consent-plattform i förstasidans markup, ingen booking-engine (offert/kontakt-formulär).

## Modul 6 — Erbjudande & leverans
- **Tjänsteflöde (hög):** 1) Kontakt/förfrågan (stad, antal rum, budget, hyresperiod) → 2) Swedacco söker marknaden, presenterar förslag tillsammans med kund → 3) **Digital kontraktssignering** + bostadsinfo → 4) Incheckning där **kontaktperson möter och lämnar nycklar** + visar runt → 5) Utcheckning med slutstäd inkluderat (källa: /for-tenants "how it works").
- **Vad ingår (hög):** Möbler & full utrustning, lakan & handdukar, WiFi, el/vatten/värme, **hemförsäkring**, slutstäd, **kontaktperson 365 dgr/år**. Tillval: veckostäd, p-plats. Påstår att alla bostäder uppfyller svenska myndighetskrav (brand/ventilation/boyta) (källa: /for-tenants, startsida FAQ).
- **Villkor (låg/EJ VERIFIERAT):** Ingen publicerad min-stay, uppsägningstid eller avtalslängd. Riktning: "longer periods" gynnas, projektbaserat. *EJ VERIFIERAT — orsak: ej publicerat.*
- **Self-serve vs sälj-lett (hög):** **Helt sälj-/relationslett.** Ingen online-bokning, ingen prisvisning. Account Executive (Jessica Sandgren) + Head of Operations (Linda Kindholm) tar hand om förfrågan personligen.

## Modul 7 — Försäljning & kundservice (endast publikt observerbart)
- **Sales motion (hög):** Förfrågans-/relationsbaserad. Personlig, "we are just a phone call away", "available 365 days of the year". Liten dedikerad styrka (8 anställda) → hög-touch, lågvolym, premiumpositionering.
- **Supportkanaler (hög):** Telefon (070-415 20 11, **telefontider mån–fre 9–18, lör 9–15**), e-post (info@/admin@/jessica.sandgren@), webbformulär, separat **maintenance request**-flöde (/maintenance) för befintliga hyresgäster. **Ingen live-chat/chatbot** i koden.
- **Mystery shopping:** EJ UTFÖRT (per uppdragsgivarens beslut — endast publik info).
- **Faktisk svarstid/ton:** *EJ VERIFIERAT — ingen kontakt tagen.*

---
### Öppna luckor / att verifiera senare
- Min-stay, priser, avtalsvillkor (ej publika — kräver offertförfrågan, EJ TILLÅTET).
- Google Ads creatives/sökord i detalj (13 annonser finns, exakt copy/keywords ej extraherade).
- Backlink-profil & organisk trafikvolym (extern källa).
- PSI/Core Web Vitals.
- Andel egen-driven vs förmedlad portfölj ("250+ housing options" — affärsmodell delvis asset-light, delvis egen drift; exakt fördelning EJ VERIFIERAT).
- Faktisk Göteborgs-närvaro (stadssida finns men inga Göteborgs-listningar hittade i sitemap → trolig svag/ingen faktisk inventory där, medel).
