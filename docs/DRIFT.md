# Drift — företagsboende.se

## Miljövariabler

| Variabel | Krävs | Beskrivning |
|---|---|---|
| `JWT_SECRET` | Ja | Signering av portal-inloggningens JWT. |
| `GUESTY_CLIENT_ID` / `GUESTY_CLIENT_SECRET` | Ja (för live-listings) | Guesty PMS OAuth. Utan dessa degraderar sajten gracefully (tom listings-lista). |
| `RESEND_API_KEY` | Nej | E-postutskick via Resend. Utan nyckel skickas endast webhook. |
| `LEAD_EMAIL` | Nej | Mottagare av lead-notiser (default `wilhelm@bostadsuthyrning.se`). |
| `MAIL_FROM` | Nej | Verifierad Resend-avsändare, t.ex. `Företagsboende <no-reply@foretagsboende.se>`. **Krävs för att kundbekräftelser ska gå till kunden** — utan denna skickas bekräftelsen som admin-kopia (Resends sandbox-avsändare kan bara nå kontoägaren). |
| `MAKE_WEBHOOK_URL` | Nej | Make.com-webhook för leads. Ej satt = inbyggd default-URL; satt till tom sträng = webhook avstängd. |
| `EMAIL_DRY_RUN` | Nej | `1` = logga e-post/webhook-payloads till konsolen utan att skicka något. Endast för lokal test. |
| `ADMIN_EMAIL` / `ADMIN_PASSWORD` / `ADMIN_NAME` | Nej | Seedar ett admin-konto vid första start om användartabellen är tom. Ersätter tidigare hårdkodade seed-konton. |

Sätts i Render-dashboarden (Environment) eller via secret-filen `/etc/secrets/.env`
som `server.js` läser vid start.

## ⚠️ NYCKELROTATION KRÄVS (ägaråtgärd)

T.o.m. juli 2026 låg följande hemligheter i klartext i git-historiken (`render.yaml`).
Att de nu är borttagna ur filen räcker inte — historiken är publik för alla med repo-åtkomst.
**Rotera samtliga:**

1. **Guesty** (client_id/secret): Guesty-dashboard → API/Integrations → skapa nya credentials, revokera de gamla.
2. **Resend** (`re_…`-nyckeln): Resend-dashboard → API Keys → skapa ny, radera den gamla.
3. **JWT_SECRET**: generera ny slumpsträng (t.ex. `openssl rand -hex 32`). Befintliga portal-sessioner loggas ut — acceptabelt.
4. **Portal-lösenord (Wilhelm)**: det tidigare seed-lösenordet låg i klartext i `db/init.js`
   i git-historiken. Demokontona (admin@residence.se m.fl. med kända lösenord, exponerade
   som knappar på login-sidan) är borttagna. Sätt `ADMIN_EMAIL`/`ADMIN_PASSWORD` (nytt
   lösenord!) i Render så seedas ett färskt admin-konto vid nästa deploy, alternativt
   registrera om kontot via /register.html. **Använd aldrig det gamla lösenordet igen.**

Uppdatera värdena i Render efter rotation.

## Övriga ägar-TODO:s (platshållare i koden)

- Org.nr + besöksadress i footern (`public/index.html`, markerat `TODO(ägare)`).
- Publikt telefonnummer (nu används WhatsApp-numret +46 73-537 67 07).
- GA4 mät-ID (utkommenterat block i `index.html`-head).
- Verifiera avsändardomän i Resend + sätt `MAIL_FROM`.
- Riktiga kundreferenser med skriftligt godkännande (platshållarkort på index).
- Bekräfta prisspannets tak i kalkylatorn (nu 200–350 kr/person/natt).
- Bekräfta kanoniskt värdnamn (nu `https://xn--fretagsboende-imb.se`, dvs. företagsboende.se utan www).
- Trust-baren "Betrodda av …" på index listar företagslogotyper som inte verifierats som kunder.
