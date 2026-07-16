# StayEasy — konkurrentprofil

> **TL;DR**
> - **Positionering:** "Furnished business apartments across Sweden — feel at home away from home." Familjeägt corporate-housing-bolag (Stay Easy Apartments AB), fokus på **mellan-Sverige/Östergötland + Mälardalen** (9 städer). Flexibelt, möblerat, allt-inkl. (källa: startsida, hög)
> - **Prismodell:** Per natt/månad, all-in. Dygnspris **från ~€109/natt** för större lägenheter; månadshyra delas /30 → dygnsavgift, ju längre desto lägre. **Ingen miniminatt** ("you don't have to book a whole month"). Offert-/förfrågans-ledd, inga priser på de flesta sidor. (källa: listing /rbg-46a-1201, /faq, medel)
> - **Kanalmix:** Stark **programmatisk SEO** (200+ enskilda lägenhetssidor + /business-apartments/{stad}/{typ} + 5 språk: sv/sk/it/es/pl). GTM finns men **inga annons-/Meta-pixlar** i koden → liten/ingen betald digital närvaro observerad. (källa: firecrawl_map + rawHtml, medel)
> - **Stack-essens:** WordPress 7.0 + Elementor + WP Rocket, hostat på one.com (usercontent.one). Klassisk SMB-CMS-stack. Booking = mailto, ej self-serve. (källa: rawHtml-grep, hög)
> - **Största styrka/svaghet:** Styrka = lokal förankring + bred lägenhetsportfölj i industri-/vårdorter, äkta namngivna testimonials, lång historik (bolag sedan 2006, sajt sedan 2019), reell omsättning ~27 MSEK. Svaghet = teknik/funnel primitiv (mailto-bokning, inget kvalificerande formulär, ingen instant-pris/availability), engelska med slarvfel, geografi missar Göteborg helt → **ingen direkt geo-överlapp med AWP**.

**Källor:** scrape 2026-06-27 av startsida, /service, /about-us, /contact, /faq, listing /rbg-46a-1201 + firecrawl_map (se `raw/`). Tech: `raw/homepage-rawhtml.txt`. Bolagsdata: allabolag.se, ratsit.se, bolagsfakta.se.
**Domän:** stayeasy.se · **Juridisk enhet:** Stay Easy Apartments AB (org.nr 556641-6235, säte Rejmyre/Finspång) · **Kontor:** Kabelvägen 17-19, 602 10 Norrköping · **Kontakt:** info@stayeasy.se, +46 707 701 766 (Johanna Ahlin, Owner/CEO).

---

## Modul 1 — Marknad & positionering
- **Value prop (hög):** "Flexible corporate housing where you feel at home." Möblerat, allt-inkl, flexibel längd ("7 days, 7 weeks or 7 months"). Tonvikt på personlig service och städning som ingår. (källa: startsida)
- **ICP (hög):** B2B — "international companies, project teams, and professionals on short- or long-term assignments". Testimonials avslöjar reella segment: **bemanning/konsulter** ("our consultants"), **vårdpersonal** ("my medical workers"), chefer/managers. (källa: /faq, startsida-testimonials)
- **Segment (medel):** Worker/projekt + konsult/relocation, blandat med privatresenär ("business trips or vacations"). Ej renodlat industri/bygg som AWP, men **bemannings- och vårdbemanning** är en tydlig kundtyp.
- **Geografi (hög):** **9 städer i mellan-Sverige:** Norrköping, Linköping, Finspång, Katrineholm, Eskilstuna, Västerås, Nyköping, Oxelösund, Örebro. **Ingen Göteborg, ingen västkust.** Tyngdpunkt Östergötland (HK Norrköping) + Sörmland + Mälardalen. (källa: /business-apartments, /faq, hög)
- **Pris/paketering (medel):** Per natt eller månad, all-in (möbler, köksutrustning, TV, tvättmaskin/tvättstuga, WiFi obegränsat, värme, el + städning varannan vecka inkl. lakan/handdukar + slutstäd). Dygnspris härleds från månadshyra /30. Exempel €109/natt (82 m², 2 sovrum, Nyköping). (källa: /faq, /service, listing, medel)
- **Differentiering/"moat" (medel):** Lokalkännedom + relationer med hyresvärdar ("we know the areas, and the house owners/landlords"); kan lösa boende via samarbeten även när egen portfölj är full. Städning + lakan ingår. Familjeföretag/personlig kontakt (Johanna som "Go-To person" i testimonials). Ingen Superhost-/exklusivitetsclaim.

## Modul 2 — Trafik & annonsering
- **Betalt — Google Ads (okänt/låg):** GTM (`GTM-WKLDRGC6`) finns, men **inget Google Ads conversion-ID (AW-) och inget gtag/aw** i startsidans kod vid scrape → ingen direkt kodsignal för aktiv Google Ads. *Google Ads Transparency ej hämtat → EJ VERIFIERAT.* (källa: rawHtml-grep, medel)
- **Betalt — Meta (okänt):** **Ingen Meta-pixel (fbq)** i koden → trolig låg/ingen Meta-annonsering. FB-sida finns (Stay Easy Apartments, Norrköping). *Meta Ad Library returnerade inga laddade annonskort via scrape (JS-renderad) → EJ VERIFIERAT.* (källa: rawHtml-grep + Meta Ad Library-scrape, låg)
- **Organiskt (medel):** Huvudhävstången. **Programmatisk/skal-SEO:** 200+ enskilda lägenhetssidor (URL = fastighetskod, t.ex. /rbg-46a-1201) + strukturerade /business-apartments/{stad}/{typ}-sidor + 5 språkvarianter (sv/sk/it/es/pl). Full Yoast-meta, hreflang, robots index. Byggt för long-tail "business apartment [stad]". (källa: firecrawl_map, metadata, medel)
- **Distribution (hög):** **Inga OTA-partnerlogos** (ingen Airbnb/Booking-integration synlig). Bokning helt direkt via mail. En "Our Partners"-logobild på startsidan (innehåll ej uttolkat). (källa: startsida)
- **Socialt (medel):** Facebook, LinkedIn (företag + båda ägarna personligen), Instagram (@stayeasyapartments + kontorshundar-konto). Frekvens/engagemang *EJ VERIFIERAT*. (källa: /contact)
- **Kanalmix-bedömning:** Hävstång = organisk long-tail-SEO via massvolym lägenhetssidor + flerspråk för utländsk arbetskraft. Betald digital marknadsföring verkar minimal.

## Modul 3 — SEO & content
- **Teknisk SEO (hög):** Yoast-driven (komplett OG/Twitter-meta, article:modified_time, lästid). `robots: index, follow, max-image-preview:large`, canonical, hreflang via 5 språkkataloger, google-site-verification satt. WP Rocket för cache/prestanda. Stark grund-SEO-hygien för en WP-sajt. (källa: metadata alla sidor, hög)
- **Keyword-portfölj (medel):** Kommersiellt: "business apartments [stad]", "corporate housing Sweden", "furnished apartments [stad]", "company housing". Per-stad + per-typ (studio/big studio/1-2-3 bedrooms/houses). Tunt informativt content (FAQ + service + about). (källa: firecrawl_map, /faq)
- **Content-strategi (hög):** Volym-driven: en sida per fysisk lägenhet (med adress, m², bäddar, gångavstånd) + samlingssidor per stad/typ. Skal-SEO snarare än redaktionellt djup. Engelsk copy med återkommande stavfel ("aparment", "laudery", "nescessary") → låg redaktionell kvalitet. (källa: listings, /faq, /service)
- **Backlink/domänstyrka (låg):** *EJ VERIFIERAT — ingen backlink-källa hämtad.* Riktning: etablerad domän (sajt publicerad 2019, bolag sedan 2006) → sannolikt måttlig lokal auktoritet.
- **Core Web Vitals (låg):** *EJ VERIFIERAT — PSI ej körd.* WP + Elementor + many images på one.com-hosting → potentiellt tyngre än Rentaborgs Next.js. WP Rocket mildrar.

## Modul 4 — Funnel & landningssida
Se `funnel.md` för steg-för-steg. Sammanfattning:
- **Sidarkitektur (hög):** Hero ("Furnished business apartments across Sweden" + "Make a request") → mission/empati → social proof ("Trusted by over 547 companies" + karusell av namngivna testimonials) → FAQ-block → tre val-rutor (Send message / Our accommodations / Make a request via mailto). Mager hero, mycket testimonial-vikt. (källa: startsida)
- **CTA-arkitektur (medel):** Primär CTA = **"Make a request" / "Request/Book now"** → leder till `mailto:info@stayeasy.se` (förifyllt subject = lägenhetskod) eller kontaktformulär. Inga prisknappar, ingen kalender, ingen instant book. (källa: startsida, listing)
- **Lead capture (hög):** Kontaktformulär (`/contact`) extremt enkelt: **endast Name, Email, Message** (+ GDPR-samtycke). Plus mailto-länkar på varje lägenhet. **Inget kvalificerande formulär** (ingen duration/headcount/bransch/stad). Mycket låg friktion men kvalificerar inte leadet alls. (källa: /contact, hög)
- **Konverteringselement (medel):** Stark social proof med **äkta för- och efternamn** (Petra K, Niklas Hallberg, Martin Carlsson m.fl.) och segment-kontext (medical workers, consultants) → mer trovärdig än Rentaborgs anonyma testimonials. "547 companies"-claim ej verifierbart. Synligt team med foton/namn/roller (Johanna, Stefan, Nathalie, Lina + servicelag) → personligt, tillitsbyggande. (källa: startsida, /contact)
- **Mobil/5-sek-intryck (medel):** Erbjudandet (möblerade företagslägenheter i Sverige) klart på <5 s. Responsiv (viewport-meta). Engelska som standardspråk trots sv-SE locale kan förvirra. *Faktisk mobil-UX ej skärmdumpad.*

## Modul 5 — Tech stack
Se `tech.md`. Essens: **WordPress 7.0 + Elementor 4.1.4 + WP Rocket**, hostat på **one.com** (usercontent.one CDN), Google Fonts (gstatic), Google Tag Manager (`GTM-WKLDRGC6`). Ingen booking-engine (mailto), inga annons-/Meta-pixlar, ingen chatt-widget. Klassisk SMB-WordPress.

## Modul 6 — Erbjudande & leverans
- **Tjänsteflöde (hög):** 1) Kund hittar lägenhet på sajten eller mailar förfrågan → 2) StayEasy matchar mot datum/arbetsplats/behov (availability visas EJ i realtid) → 3) Avtal med uppsägningstid → 4) Nycklar (samma dag om ledigt). (källa: /faq)
- **Vad ingår (hög):** Möbler, köksutrustning, TV, tvättmaskin eller tvättstuga, obegränsat WiFi, värme, el, sänglinne + handdukar, **städning varannan vecka** (med nya lakan/handdukar) samt **slutstädning vid utflytt**. "Everything you might need is in the apartment." Parkering/husdjur på vissa objekt mot avgift. (källa: /faq, /service, listing)
- **Villkor (hög):** **Ingen miniminatt** — betalar per dygn (månadshyra/30; <14 dygn ger något högre dygnstaxa). Avbokning före slutdatum tillåten enligt avtalets uppsägningstid. Utcheckning 10:00 (senare mot godkännande). (källa: /faq)
- **Self-serve vs sälj-lett (hög):** **Förfrågans-/sälj-lett** men lågautomatiserat — mailto-baserat, människa (ofta ägaren Johanna) matchar manuellt. Ingen online-bokning/availability/betalning.

## Modul 7 — Försäljning & kundservice (endast publikt observerbart)
- **Sales motion (hög):** Mail-/telefonbaserad direktförsäljning, personlig matchning. Owner-led sales (Johanna Ahlin namnges i flera testimonials som personlig kontaktpunkt). Separat servicelag för drift/städ/felanmälan. (källa: /contact, /service, testimonials)
- **Supportkanaler (hög):** E-post (info/johanna/service@stayeasy.se), telefon (info +46 707 701 766, service +46 793 361 361 inkl. **journummer utanför kontorstid**), kontorstid 08–17, enkelt webbformulär. **Ingen live-chat/chatbot** i koden. (källa: /contact, /service, /faq)
- **Mystery shopping:** EJ UTFÖRT (per uppdragsgivarens beslut — endast publik info).
- **Faktisk svarstid/ton:** *EJ VERIFIERAT — ingen kontakt tagen.* (Testimonials hävdar "answers immediately"/"incredibly fast" men är marknadsföring, ej oberoende verifierat.)

---
### Öppna luckor / att verifiera senare
- Google Ads Transparency + Meta Ad Library (JS-renderade — kräver headful/interaktiv hämtning; ej bekräftat om de annonserar).
- Faktiskt antal lägenheter/orter och om de äger vs. andrahandshyr (affärsmodell: blandning av egen portfölj + samarbeten/sublease sannolik, medel).
- Backlink-profil & organisk trafikvolym (extern källa).
- PSI/Core Web Vitals (WP+Elementor på one.com).
- "547 companies"-claim — ej verifierbart.
- Relevans för AWP: StayEasy konkurrerar **inte geografiskt** i Göteborg idag → mer relevant som modell-/benchmark än som direkt hotkonkurrent. Bevaka ev. expansion västerut.
