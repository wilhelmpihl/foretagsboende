# Strawberry / Företagsbostäder — funnel.md (steg-för-steg)

**Metod:** scrape av strawberryhotels.com/corporate-apartments/ (+ /gothenburg), foretagsbostader.se/en (+ /serviced-apartments/goteborg), 2026-06-27. Skärmdumpar ej sparade som PNG (egress-policy blockerar nedladdning av firecrawl-hostade bilder); bevis = käll-URL + scrape-markdown/rawHtml i `raw/`. Confidence hög där ej annat anges.

> **Hotell-förankrad modell:** Strawberry säljer INTE corporate apartments direkt. Hotellsajten är ett auktoritets-/SEO-skyltfönster som lotsar till dotterbolaget Företagsbostäder, där hela konverteringen sker. Funneln är därför 2-domäns.

## Steg 0 — Ingång (SEO/varumärke)
- Organisk träff på `strawberryhotels.com/corporate-apartments/[stad]` (high-authority hotell-domän) ELLER direkt på `foretagsbostader.se` (etablerat varumärke sedan 1993) ELLER via OTA-aggregator (zenhotels listar enskilda objekt). Paid sök/Meta för produkten: ej observerad i markup (okänt).

## Steg 1 — Strawberry hotell-landningssida (awareness)
- Hero: "Corporate apartments in [Sweden/Gothenburg]", "Housing solutions for businesses".
- Innehåll: kort intro + lokal vinkel (Göteborg: spårvagn/Västtrafik, områden Avenyn/Lindholmen Science Park/Hisingen/Mölndal) + "What's included".
- **CTA:** "Explore available apartments" / "See available apartments" / "Learn more about Företagsbostäder" → alla pekar på **foretagsbostader.se**. Ingen bokning/pris på själva Strawberry-sidan.
- Friktion: ett domänhopp; men budskapsmatchning (stad) är bra och auktoriteten hög.

## Steg 2 — Företagsbostäder hem/listsida (consideration + konvertering)
- Hero: "Serviced apartments made easy" + "Select destination". "Sweden's largest housing agency for serviced apartments."
- **Direkt self-serve inventory:** "261 Available Apartments" med stad-flikar (Stockholm 104 / **Göteborg 113** / Malmö 18 / Helsingborg 17 / Lund 9). Varje kort: foto, kategori (Basic/Standard/Premium), typ/rum, m², **tillgänglighet ("Available today"/datum), och pris/mån** (Göteborg ~12 000–16 000 kr studio; upp mot 20 000 kr större).
- Trust: "Trusted by"-logoblock, "Always included" (Fully furnished / kök / WiFi / 24/7), "Up your stay with extra services", 18+ kund-citat-karusell, "Stay Longer – Save More", "We handle housing, you handle business".
- Djup FAQ uppdelad i tre personas: **"For you who move where the work is"** (slutanvändaren/konsulten), **"For you who book for others"** (HR/inköp/bemanning), **"For you who want to know more"** (storkund/relocation/ESG).

## Steg 3 — Konverteringsvägar (flera, låg tröskel)
Företagsbostäder erbjuder fyra parallella vägar (bredare än Rentaborgs rena offert-vägg):
1. **Self-serve bläddra** → klicka enskild lägenhet (pris/foto/datum synligt).
2. **"Request quote"-formulär** — fält: typ (Company / Private / Guest / "Get contacted"), Select destination, Number of guests, Separate beds (ja/nej), Arrival, Departure, Message, kontaktuppgifter. **~7–8 fält**, låg–medel friktion. Kvalificerar INTE på bransch/headcount.
3. **Live-chat** (Crowdio-widget, "We are online").
4. **Direkt:** reservations@foretagsbostader.se / +46 (0)10 707 55 00.

## Steg 4 — Efter inskick (utlovat)
- Förslag med lägenhetsalternativ, **riktiga foton** ("No stock images") och pris, "usually within the same business day".
- Företaget bokar; gäst flyttar in; nyckelöverlämning + welcome-info + 24/7-support; **konsoliderad faktura** till företaget. Ramavtal + dedikerad account manager för återkommande/storkund.

---
### Funnel-bedömning vs AWP
- **Styrkor att respektera (svåra att slå):** (1) **Transparent self-serve prissättning + live-tillgänglighet** — eliminerar offert-friktion. (2) **Live-chat + 24/7-support + samma-dag-förslag.** (3) **Trovärdighet** (1993, Strawberry-ägt, EuRA, miljöcert, verkliga foton, äkta kund-citat). (4) **Låg min-stay (~5 dygn)** + skala (>2 000 enheter, 113 i Göteborg).
- **Svagheter att exploatera:** (1) **Generiskt ICP** — täcker "industrial zones/project sites" i text men har ingen skarp industri-/bygg-/Volvo-långtidsvinkel; AWP kan äga "Göteborg industri/Volvo 30–90 nätter"-positionen med lokal expertis och äkta Volvo-/bygg-case. (2) **2-domäns-hopp** från Strawberry-sidan = läckage/förvirring. (3) **Standardiserat/storskaligt** → AWP kan vinna på personlig service, Superhost-kvalitet och kuraterad hand-picked-känsla. (4) **Namnkrock-risk i deras favör** ("Företagsbostäder" vs AWP:s "företagsboende.se") — AWP måste differentiera varumärket tydligt för att inte drunkna i jättens SEO.
- **Kanal-läxa:** De vinner på **organisk auktoritet + varumärke**, inte paid. AWP kan inte matcha domän-auktoriteten kortsiktigt → bör satsa nisch-long-tail + paid där jätten verkar frånvarande för corporate-apartments-produkten.
