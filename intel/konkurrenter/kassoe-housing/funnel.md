# Kassoe Housing — funnel.md (steg-för-steg)

**Metod:** scrape av startsida, /gothenburg, /request-accommodation, /customer (2026-06-27). Skärmdumpar ej sparade som PNG (egress-policy blockerar nedladdning av firecrawl-hostade bilder); bevis = käll-URL + scrape-markdown i `raw/`. Confidence hög där ej annat anges.

## Steg 0 — Annons/SEO-ingång
Användaren kommer via **organisk stadssida** (programmatisk, t.ex. /gothenburg — egen landningssida med lokal industri-/stadsdels-vinkel: automotive, logistik, maritimt, life science, Lindholmen/Chalmers/Hisingen) eller via **outbound** (Apollo.io-tracker de-anonymiserar B2B-besökare → SDR följer upp). Google Ads trolig men ej verifierad.

## Steg 1 — Hero (startsida)
- Rubrik: *"Furnished Housing For Your Business."*
- Subtext: "We provide simple, trusted, and convenient serviced corporate housing."
- **Primär (och enda) CTA:** "Request accommodation" → `/request-accommodation/`.
- Trust-rad direkt under: Completely Furnished · Hassle free administration · Flexible lease period · Anytime, Anywhere.
- Vanity-stat: "How many people are staying in Kassoe Housing apartments tonight? **5000**" (overifierat claim).

## Steg 2 — Värde & socialt bevis
- "Corporate Housing Across Europe" + grid av lägenhetsbilder → länkar till `/locations/`.
- Fördelar: Cost Effective · Time saving · **Personalised Service ("real people, not automated platforms")** · Administration (one bill) · Furnished · Stay duration (short & long term).
- Testimonials: "Project Manager, International Contractor"; "Stephen Comerford, MD ProFleet Engineering"; "Ray Mahon, European Operations Director". → **roll/bransch angivet men generiskt; två av tre saknar verifierbart företagsnamn/logo.**
- App-promo (på /customer): "The new Kassoe Housing App" — iOS + Android, "gives your teams full control".

## Steg 3 — Hur det funkar + dubbel målgrupp
- 4 steg (på /customer): 01 Tell Us What You Need → 02 Browsing For Options (handplockad shortlist) → 03 Easy Move-In (de sköter pappersarbete + utrustning) → 04 Ongoing Support.
- Dubbel CTA på startsidan: **kund** ("Request Accommodation") och **hyresvärd** ("Are You An Accommodation Provider?" → /customer, /for-landlords, /propose-property). Tvåsidig marknadsplats.

## Steg 4 — Lead capture (`/request-accommodation`)
**Rubrik/intro:** "Accommodation request — Please fill in all details below with as much information as possible, and we will contact you soon."
**Formulärfält (~18, Contact Form 7):**
1. Your Name 2. Company 3. Your phone 4. Your Email 5. **Country** (dropdown ~18 länder + Asia/Other) 6. Region 7. **Work Site Address** 8. Expected Start date (datumväljare) 9. **Number of accommodation Units** 10. Type of Accommodation (1–4 bed/More) 11. **Budget per person (EUR), per month** 12. Welcome Package (Y/N) 13. **Expected Length of Stay (months)** 14. Parking (Y/N) 15. Cleaning (Weekly/Monthly/Bi-Monthly/Quarterly/No) 16. **Car Hire (Yes / Yes Minibus / No)** 17. **Warehousing (Y/N)** 18. More Relevant Information (fritext).
- **CTA:** "SEND".
- **Friktion:** **Mycket hög** (~18 fält, många obligatoriska detaljer som arbetsplats-adress + budget). Men kvalificerar extremt hårt (land/region/antal enheter/längd/budget/logistik-tillval).
- **Anmärkning:** Fälten Car Hire/Minibus/Warehousing avslöjar att Kassoe säljer **hel projekt-logistik för arbetsstyrkor**, inte bara boende.

## Steg 5 — Efter inskick (utlovat)
- "We will contact you soon" / "tailored offer as soon as possible". **Ingen instant book, inget pris on-page.** En "dedicated colleague" återkommer manuellt med offert. Efter avtal: kundportal (portal.kassoehousing.com) + native app för pågående hantering.

---
### Funnel-bedömning vs AWP
- **Styrkor att kopiera/notera:** (1) Programmatiska stadssidor med lokal industri-vinkel (samma spel som Rentaborg). (2) **Tillvalsfält för parkering/städ/bilhyra/minibuss/lager** i lead-formuläret = signalerar och säljer in helhetslogistik för crews — direkt relevant för AWP:s Volvo/bygg-ICP. (3) **Egen kundportal + native app** för team-hantering = produktifierad eftermarknad AWP saknar. (4) Apollo-driven outbound.
- **Svagheter att exploatera:** (1) **Ingen pristransparens alls** + ~18-fälts formulär = mycket hög friktion → AWP kan vinna med snabbare, enklare offert eller indikativt pris. (2) **Ingen livechatt/chatbot** → snabb chatt/WhatsApp = differentiator. (3) Generiska/anonyma testimonials, overifierad "5000 tonight"-stat, en-GB-locale för hela Europa (ingen hreflang/svensk lokalisering) → AWP kan vinna lokalt med **äkta verifierade svenska Volvo-/industri-referenser och svensk sajt**. (4) Tung WordPress/Elementor-stack → trolig sämre sidprestanda än en lättare AWP-landningssida.
