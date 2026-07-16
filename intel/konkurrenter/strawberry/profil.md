# Strawberry — Corporate Apartments (Företagsbostäder) — konkurrentprofil

> **TL;DR**
> - **Hotell-förankrad modell, men den verkliga produkten är ett dotterbolag:** Strawberrys "Corporate Apartments" är i praktiken en marknadsförings-/SEO-yta (`strawberryhotels.com/corporate-apartments/`) som lotsar all trafik vidare till **Företagsbostäder AB** (`foretagsbostader.se`) — ett av Strawberry helägt, fristående bolag och **"Sweden's largest housing agency for serviced apartments"** (källa: foretagsbostader.se/en). Strawberry-sidan har inga egna listningar/priser/bokning.
> - **Positionering:** "Serviced apartments made easy" / "We handle housing, you handle business". B2B corporate housing för temporära uppdrag, konsulter, projektpersonal. Grundat 1993 i Göteborg. (källa: foretagsbostader.se/en FAQ)
> - **Geografi:** Sverige — Stockholm, **Göteborg, Malmö, Lund, Helsingborg** (Strawberry-sidan) + "och flera andra städer" inkl. **Linköping** (egen business-apartments-sida) och tillfälligt **Luleå/Aurora Village** (2000 enheter, blogginlägg). >2 000 lägenheter totalt; **113 lediga i Göteborg** vid scrape. (källa: foretagsbostader.se/en, /serviced-apartments/goteborg)
> - **Prismodell:** **Transparent, self-serve listpris per lägenhet/månad** synligt på sajten (Göteborg ~11 600–19 000+ kr/mån). Tre kategorier Basic/Standard/Premium. Längre vistelse = lägre dygnspris; bäst värde >3 mån. Konsoliderad **en faktura** till företaget. (källa: /serviced-apartments/goteborg, /en FAQ)
> - **Min-stay:** **Typiskt 5 dygn** (mycket lägre tröskel än Rentaborg/AWP:s 30 nätter). Uppsägning 1 månad. Ramavtal för återkommande behov. (källa: /en FAQ)
> - **Sales motion: hybrid** — både self-serve (bläddra listningar + se priser + "Request quote") OCH offert/account-management + **live chat** (Crowdio-widget, "We are online"). reservations@foretagsbostader.se · +46 (0)10 707 55 00.
> - **Stack:** Företagsbostäder = **Next.js + Directus CMS + Vercel + GTM-TWPGJ5 + Crowdio-chatt**; Strawberry-parent = **Contentful + Dynamic Yield (personalisering/A-B) + GTM-MDVQDL2**.
> - **Största styrka:** Skala + trovärdighet (1993, Strawberry-ägt, EuRA-medlem, miljöcertifierat, >2 000 verifierade enheter, transparenta priser, chatt, samma-dag-respons). **Största svaghet:** Generiskt/ICP-brett (ej riktat mot industri/Volvo-arbetare specifikt); hotell-parentens SEO-sida är tunn och bara en hänvisning.

**Källor:** scrape 2026-06-27 av strawberryhotels.com/corporate-apartments/ (+ /gothenburg), foretagsbostader.se/en (+ /serviced-apartments/goteborg). Rå-HTML i `raw/`.
**Juridisk enhet:** Företagsbostäder (i Sverige) AB, ägt av Strawberry (f.d. Nordic Choice Hotels). **Kontakt:** reservations@foretagsbostader.se, +46 (0)10 707 55 00.

> **VIKTIGT namnkrock:** "Företagsbostäder" (detta bolag) ≠ AWP:s produkt "företagsboende.se". Olika domäner, olika bolag. Detta är en mycket större, etablerad aktör.

---

## Modul 1 — Marknad & positionering
- **Value prop (hög):** "We handle housing, you handle business." Tar bort admin för HR/inköp: streamlined booking, **consolidated billing (en faktura)**, dedikerad account manager, 24/7 guest service, nyckelöverlämning. (källa: foretagsbostader.se/en)
- **ICP (hög):** B2B — företag, **bemanningsföretag (staffing agencies), relocation-bolag, konsultfirmor**, samt "small business owners" och HR-team. Adresserar både "you who book for others" och "you who move where the work is" (slutanvändaren/konsulten). (källa: /en FAQ-block)
- **ICP-täckning mot AWP:s nisch (medel):** Nämner **"options near industrial zones and specific project sites outside the city"** och "seasonal contractor staffing" / "rotation setups" / "teams who want to share" (lägenheter upp till 5 rum) → täcker industri-/projektpersonal-segmentet, men **inte** med en uttalad Volvo/bygg-vinkel. Endast den fristående SEO-satelliten `corporate-apartments.se/sv/goteborg` (samma varumärke?) talar explicit om "byggnadsarbetare och annan personal i konstruktionsbranschen" — *relation till Företagsbostäder EJ VERIFIERAT*.
- **Segment (hög):** Korttids (från 5 dygn) → långtidsuppdrag (veckor/månader/>3 mån). Tre produktkategorier: **Basic** (kostnadsmedveten projektboende), **Standard** (mest bokad; konsulter/längre uppdrag), **Premium** (senior staff). (källa: /en FAQ)
- **Geografi (hög):** Stockholm (104), **Göteborg (113)**, Malmö (18), Helsingborg (17), Lund (9) = 261 lediga vid scrape av >2 000 totalt. Linköping har egen sida. Tillfällig storskalig Luleå-lösning (Aurora Village, 2 000 enheter — blogg). (källa: /en, map)
- **Pris/paketering (hög):** Per lägenhet/månad, **synligt listpris** (självservice). Göteborg-exempel: studio 22–34 m² ~12 000–16 000 kr/mån; större 1–2:or upp mot 20 000 kr. Inkluderat: möblerat, fullt utrustat kök, WiFi, el+värme, sänglinne/handdukar, 24/7-service. Tillval: städning, flexibel avbokning, skadeförsäkring, tidig in-/sen utcheckning, extra säng/spjälsäng. (källa: /serviced-apartments/goteborg, /en)
- **Differentiering/"moat" (hög):** Skala (störst i SE), historik sedan 1993, **Strawberry-ägd** (hotell-koncernens balansräkning/varumärke/distribution), **EuRA-medlem**, **Svensk Miljöbas-certifierad** (ESG-dokumentation för upphandling), kvalitetskontroll före varje inflytt. Hotell-förankringen ger även "long stay"-hotellrum och BizPass som komplement i samma koncern.

## Modul 2 — Trafik & annonsering
- **Hotell-ankarets SEO-roll (hög):** `strawberryhotels.com/corporate-apartments/` + per-stad (Stockholm/Göteborg/Malmö/Lund/Helsingborg) = high-authority hotellkoncerns-domän som rankar och **vidarebefordrar** till Företagsbostäder. Smart "domain authority piggyback". Sidorna är tunna (stad + transport + en länk vidare).
- **Betalt — Google Ads (okänt):** GTM finns (GTM-TWPGJ5 på FB, GTM-MDVQDL2 på Strawberry) men **inget Google Ads conversion-ID (AW-) hittat** i någon sidas markup. *Aktiv Google Ads EJ VERIFIERAT — orsak: ingen AW-tagg + Google Ads Transparency ej hämtat. Strawberry-koncernen annonserar sannolikt brett på hotell, men för corporate-apartments-produkten specifikt: okänt.*
- **Betalt — Meta (okänt/sannolikt nej för produkten):** **Ingen Meta-pixel (connect.facebook.net/fbq) hittad** på Företagsbostäder. Endast social profil-länk (facebook.com/foretagsbostader). *Meta Ad Library EJ VERIFIERAT.*
- **Organiskt (hög):** Stark organisk grund: Strawberry-koncernens domän + Företagsbostäders egna stads-/kategori-/city-guide-/news-sidor + omnämnanden på OTA-aggregatorer (zenhotels listar enskilda Företagsbostäder-objekt). Programmatisk SEO: **ja** (per-stad + per-område + city-guides + nyhetsartiklar med corporate-housing-keywords).
- **Distribution (medel):** Enskilda lägenheter dyker upp på OTA/aggregatorer (zenhotels). Hotell-koncernens egna kanaler (Strawberry-medlemsprogram, hotels.com-liknande) ej direkt kopplade till lägenhetsbokning.
- **Kanalmix-bedömning:** Största hävstången = **organisk auktoritet via hotell-parentens domän + etablerat varumärke**, inte betald sök. Skiljer sig från Rentaborg (som lutar tungt på Google Ads + ren programmatisk SEO).

## Modul 3 — SEO & content
- **Teknisk SEO (hög):** Komplett OG/Twitter-meta, `robots: index, follow`, hreflang sv/en, Next.js-renderat innehåll, favicon, canonical. Strawberry-sidorna har egen ren OG-struktur per stad.
- **Keyword-portfölj (hög):** "corporate apartments [stad]", "serviced apartments [stad]", "corporate housing", "business apartments [stad]" (Linköping), "temporary housing", "corporate housing for relocating employees". Tydligt kommersiellt + informativt (city-guides, news).
- **Content-strategi (hög):** (1) Hotell-parent: tunna per-stad-landningssidor som länkar vidare. (2) Företagsbostäder: djupa FAQ-kluster (delade i "du som bokar för andra" / "du som flyttar" / "du som vill veta mer"), city-guides, news/blogg. Stark topical authority kring "serviced/corporate apartments Sweden".
- **Backlink/domänstyrka (medel→hög):** *Exakt backlink-profil EJ VERIFIERAT.* Riktning: hög — etablerat sedan 1993, Strawberry-koncernlänkar, OTA-listningar, EuRA. Klart starkare auktoritetsbas än en ung operatör.
- **Core Web Vitals (låg):** *EJ VERIFIERAT — PSI ej körd.* Next.js + Vercel + Vercel Speed Insights + self-hosted Cera Pro-fonts indikerar prestandafokus.

## Modul 4 — Funnel & landningssida
Se `funnel.md`. Sammanfattning:
- **Tvåstegs-arkitektur (hög):** Strawberry hotell-sida (awareness/SEO) → klick "Explore available apartments"/"See available apartments" → **foretagsbostader.se** (consideration + conversion). Friktion = ett extra domänhopp, men auktoritets-vinst.
- **Konverteringsmodell (hög):** **Hybrid self-serve + lead.** Användaren kan (a) bläddra listningar med foto/storlek/pris/tillgänglighet direkt, eller (b) fylla i **"Request quote"**-formulär, eller (c) starta **live-chat** (Crowdio), eller (d) maila/ringa. Mycket lägre tröskel än Rentaborgs rena offert-vägg.
- **Lead capture (hög):** Quote-formulär — typ (Company / Private / Guest / "Get contacted"), destination, antal gäster, separata sängar (ja/nej), ankomst, avresa, meddelande, kontaktuppgifter. **~7–8 fält, lägre friktion** än Rentaborgs ~10 obligatoriska. Begär INTE bransch/headcount-kvalificering på formuläret.
- **Konverteringselement (hög):** Synliga priser + tillgänglighetsdatum, "Available today", verkliga foton ("No stock images"), "Trusted by"-logoblock, 18+ kund-citat-karusell, "Always included"-ikoner, omfattande FAQ, 1993/EuRA/miljöcert-trust, **chatt "We are online"**.

## Modul 5 — Tech stack
Se `tech.md`. Essens: **Företagsbostäder** = Next.js (React) + **Directus** (headless CMS, `directus.foretagsbostader.se`) + **Vercel** (hosting + Speed Insights) + **GTM (GTM-TWPGJ5)** + **Crowdio live-chat** + self-hosted Cera Pro-fonts. **Strawberry-parent** = **Contentful** (`ctfassets.net`) + **Dynamic Yield** (personalisering/A-B-testning) + GTM-MDVQDL2. Ingen Meta-pixel hittad. Riktig **booking/inventory-motor** finns (listningar med live-tillgänglighet) — till skillnad från Rentaborg (rent offert).

## Modul 6 — Erbjudande & leverans
- **Tjänsteflöde (hög):** 1) Request quote / chatt / mail med stad+antal+datum+budget → 2) Förslag med lägenhetsalternativ, **riktiga foton** och pris (ofta samma arbetsdag) → 3) Företaget bokar; gästen flyttar in → 4) Nyckelöverlämning + welcome-info + 24/7-support → 5) **Konsoliderad faktura** till företaget. (källa: /en FAQ)
- **Vad ingår (hög):** Möblerat, fullt utrustat kök, WiFi, el+värme, sänglinne/handdukar, TV, strykjärn, 24/7 guest service. Tvätt i enhet eller delad tvättstuga. Tillval mot avgift (städning, flexibel avbokning, skadeskydd, in-/utcheckningstider, extra säng/spjälsäng/linne). (källa: /en, /goteborg)
- **Villkor (hög):** **Min ~5 dygn**; pris efter stad/storlek/kategori/längd; längre = billigare (bäst >3 mån); **uppsägning 1 månad** vid tidigt projektslut; **ramavtal** för återkommande behov (preferred rates + snabbare bokning + dedikerad account manager). Hanterar rotation/delning, internationella gäster (allt på engelska). (källa: /en FAQ)
- **Self-serve vs sälj-lett (hög):** **Hybrid** — self-serve listning+pris OCH sälj/account-management OCH chatt. Bredare ingångsyta än både Rentaborg (rent sälj) och AWP.

## Modul 7 — Försäljning & kundservice (endast publikt observerbart)
- **Sales motion (hög):** Hybrid; löfte om förslag "usually within the same business day". Account manager + ramavtal för storkunder/bemanning.
- **Supportkanaler (hög):** **Live-chat (Crowdio-widget, "We are online")**, e-post (reservations@foretagsbostader.se), telefon (+46 10 707 55 00), webformulär, **24/7 guest service + akutlinje**. Bredare/mer tillgängligt än Rentaborg (som saknar chatt).
- **Mystery shopping:** EJ UTFÖRT (per uppdragsgivarens beslut — endast publik info).
- **Faktisk svarstid/ton:** *EJ VERIFIERAT — ingen kontakt tagen.*

---
### Öppna luckor / att verifiera senare
- Google Ads Transparency + Meta Ad Library (faktiska creatives) — produkten verkar inte köra paid på den scrapade markupen, men koncernen kan.
- Relation mellan `corporate-apartments.se` (bygg/Volvo-vinklad) och Företagsbostäder — *EJ VERIFIERAT*.
- Exakt bolags-/org.nr för Företagsbostäder-enheten och omsättning (extern källa).
- PSI/Core Web Vitals.
- Faktisk min-stay-policy per kategori (FAQ säger "typically five days").
