# Blueground — funnel.md (steg-för-steg)

**Metod:** scrape av startsida, /furnished-corporate-apartments (+FAQ), /furnished-apartments-berlin-de (listningssida), /m/corporate-apartments/linkoping-swe, Trustpilot (2026-06-27). Priser/formulär JS-renderade (ej i statisk markup) — markeras EJ VERIFIERAT där relevant. Confidence hög där ej annat anges.

## Två parallella funnels
Blueground kör **två** flöden: (A) privat self-serve **instant book**, (B) B2B "Blueground for Business" hybrid (self-serve + account manager). Detta är den avgörande skillnaden mot Rentaborg/AWP som är rent offert-ledda.

---
## FUNNEL A — Privat / self-serve (instant book)

### Steg 0 — Ingång
Organisk programmatisk SEO-sida (furnished-apartments-[stad], ev. /s/[kvarter], /f/bedrooms_N, på 6 språk) eller brand/paid search. Hög matchning mellan long-tail-sökning och landningssida.

### Steg 1 — Hero + sökruta
- Slogan: *"Feel at home, free to roam."* + "Experience the home that moves with you for a month, a year, or longer."
- **Sökwidget direkt i hero:** Where? / When? → Search. (källa: startsida)
- Värdeblock: Hand-picked homes · Move-in ready · Flexible terms · High-touch service.

### Steg 2 — Tech/tillit
- "Streamlined tech experience: **Search our live listings online, book instantly, and move in easily.** Then use our guest app for support, home cleanings, and more."
- Video-testimonials (namngivna gäster), "Trusted by 4,000+ companies" med logos (Google/Uber/EY/Tesla/BCG/Goldman Sachs).

### Steg 3 — Listningssida → objekt
- Stadssida listar objekt (foto-gallerier, 3D-tours). Varje objekt har **datumväljare ("Add dates")** som laddar **real-time pris + tillgänglighet** (JS — *exakt prisspann EJ VERIFIERAT, ej i statisk HTML*). (källa: berlin-listing.txt)

### Steg 4 — Instant book
- "View listings in real-time, see real images and 3D tours, **confirm with a click, pay securely, and move in easily.**" (källa: Trustpilot company text)
- **Ingen offert-väntan, ingen mänsklig gatekeeper** för privat. Betalning online. Min-stay 1 månad.

### Steg 5 — Under vistelse
- Gäst-app: städ, extra handdukar, maintenance, neighborhood-info. Support via app/e-post/telefon. Ingen live-chat-widget i markup.

---
## FUNNEL B — Blueground for Business (B2B)

### Steg 1 — B4B-landningssida (/furnished-corporate-apartments)
- H1: "Corporate housing with all the comforts of home." Primär CTA: **"Let's connect"**.
- 6 värdeikoner: Cost savings (30–50% < hotell) · Global presence (50+ städer + on-demand i valfri US-stad) · Premium quality · Seamless technology · Productive workspaces · Flexibility & support.
- Mål-personas: HR/travel managers, business travelers, finance managers.

### Steg 2 — Tillit
- Äkta blue-chip-logos (Google/BCG/Adidas/Goldman Sachs/Tesla/Sony) + namngivna citat (Disney VFX-manager, Coca-Cola payroll-specialist, Meridien Partners).
- Bransch-undersidor: Government & Military, Healthcare, Entertainment.

### Steg 3 — Lead capture / kontakt
- CTA "Let's connect" (formulär — *exakta fält EJ VERIFIERAT, JS-renderat*) + direktkanaler: bgforbusiness@theblueground.com, US/EU/UAE-telefon.
- Erbjudande: dedikerad account manager, gruppdiscount, **corporate booking codes** (self-serve bokning för anställda mot förhandlad rate), deposit/exit-fee-eftergift för enterprise, flexibel fakturering (kort/banköverföring/centraliserad).

### Steg 4 — Leverans
- Anställda kan boka self-serve via corporate code; account manager hanterar avtal/fakturering. Kontrakt tecknas av företag eller gäst. All-inclusive månadsspaket på begäran.

### Omfattande B4B-FAQ (11 frågor)
Min-stay (1 mån), vad ingår (endast hyra i listpris; all-in på begäran), inga managementavgifter, avtal med företag, fakturering, perks (Equinox/HelloFresh/Hertz), WFH-bundle, säkerhet/städ mellan vistelser.

---
### Funnel-bedömning vs AWP
- **Styrkor (svåra/onödiga att kopiera):** (1) Instant-book self-serve + real-time pris kräver egen booking-engine + djup inventory — orealistiskt för AWP kort sikt och **mindre relevant** för 30–90-nätters projektgrupper som ofta vill ha kurerad offert/ramavtal ändå. (2) Äkta blue-chip-referenser. (3) Flerspråkig programmatisk SEO i skala.
- **Svagheter att exploatera (kärnan för AWP):**
  1. **Ingen Göteborg/Sverige-närvaro.** Blueground har ingen egen inventory i Göteborg eller Stockholm; Linköping finns bara via partner-network. För en Volvo-/industri-/bygg-arbetsgivare i Göteborg är Blueground **inte ett reellt alternativ** — AWP äger den lokala marknaden de inte spelar i.
  2. **Fel ICP.** Blueground är premium white-collar/business-traveler/relocation. Deras produkt (designat premiumboende, "Equinox/HelloFresh-perks") passar inte 5–50 bygg-/industriarbetare som behöver praktiskt, prisvärt, bädd-fokuserat långtidsboende nära arbetsplats. AWP:s ICP är Bluegrounds icke-fokus.
  3. **Trovärdighets-/servicesvans i drift.** Trustpilot (4.1) visar återkommande allvarliga klagomål: **deposition ej återbetald**, **kontrakt uppsagt mitt i löptid** (lägenhet återlämnad till hyresvärd), **långsam felavhjälpning**, refund-fördröjningar. AWP kan vinna lokalt B2B med **avtalstrygghet, snabb lokal felavhjälpning och personlig svensk kontakt** — precis där en distansstyrd global aktör (Aten-/NY-support, "replies within 1 month") brister.
