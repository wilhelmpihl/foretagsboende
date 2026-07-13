# Renderings-brief: Städmästarklass-video

Detta är en färdig specifikation för att rendera onboarding-videon med Higgsfield.
Kör i en **interaktiv** Claude Code-session (terminal/desktop-app) där verktygsanrop
kan godkännas — den fjärrstyrda webbsessionen tillåter inte godkännande av
genereringsverktyg som kostar credits.

## En instruktion

> "Rendera städvideon enligt `docs/video-render-brief.md`."

## Pipeline

1. `list_voices` → välj en svensk/neutral kvinnlig berättarröst (`voice_type` + `voice_id`).
2. För varje scen nedan: `generate_video` (modell `kling3_0_turbo`, `aspect_ratio: "9:16"`, ~5 s) med bild-prompten.
3. För varje scen: `generate_audio` (modell `seed_audio`, vald röst) med speak-texten.
4. Polla med `job_display` tills alla klipp + röster är klara.
5. `explainer_video` → montera i ordning, en `{video, audio}` per scen, `width: 1080, height: 1920`, `subtitles: {font: "anton"}`.
6. Leverera färdig MP4 till användaren.

Format: **9:16 vertikalt** (städare tittar på mobilen). Total längd ~60 s.

## Scener

| # | Speak (svenska) | Bild-prompt |
|---|---|---|
| 1 | Välkommen. På en minut lär du dig städa våra boenden till hotellstandard. | Ljus lyxig lägenhet i morgonsol, långsam kamerapanorering, rent och inbjudande |
| 2 | Städa alltid uppifrån och ner. Torka torrt efter vått. Och färgkoda trasorna. | Hand dammar hög hylla, torkar sedan en spegel randfri, närbild mikrofibertrasa |
| 3 | Köket granskas hårdast. Töm kylen, avfetta spisen, polera kranen tills den blänker. | Gnistrande rent kök, närbild på blank kran som poleras, rostfritt |
| 4 | Badrummet avgör omdömet. Bort med kalk och varenda hårstrå. Torka glaset blankt. | Duschglas torkas kristallklart, skinande rent badrum, kromdetaljer glänser |
| 5 | Alltid rena lakan. Dra dem släta, vik hörnen som på hotell, plymfa kuddarna. | Krispig vit säng bäddas i hotellstil, händer viker lakanshörn, kuddar plymfas |
| 6 | Titta med gästens ögon. Fota, rapportera, lås och gå. Nu är du expert. | Person i dörröppning, kamera sveper över perfekt rum, mobil fotar, dörr låses |

Full 12-scensversion med tider finns i `public/stadning-masterclass.html` (bilagan)
om en längre variant önskas.

## Noteringar
- `.claude/settings.json` förgodkänner redan Higgsfield-verktygen → inga upprepade prompts.
- Higgsfield-saldo vid förberedelse: ~3000 credits (ultra). Grov kostnad för 6 scener: klipp + röst + montering ryms väl.
- Vill du ha svenska undertexter inbrända står `subtitles.font` redan satt i steg 5.
