# GenFlows — Client Case Studies

Static marketing site presenting GenFlows' cold-outbound client results.
No build step, no dependencies.

## Run locally

```bash
node serve.js          # http://localhost:4321
node serve.js 8080     # custom port
```

`serve.js` is a zero-dependency Node static server. Any static host
(GitHub Pages, Netlify, Vercel, Cloudflare Pages) will also serve this
folder as-is.

## Structure

```
index.html              Case study index
uds.html                United Diagnostic Services
sls.html                SLS Group  (identities redacted — see note)
shield.html             Shield Funding
emergent3.html          Emergent3
captain-capital.html    Captain Capital Group
assets/style.css        Single shared stylesheet
assets/fonts.css        @font-face declarations
assets/fonts/*.woff2    Manrope + IBM Plex Mono (self-hosted)
```

## Data note

Every figure on these pages was read directly from the campaign record of
the platform each engagement ran on (EmailBison or PlusVibe) on
22 September 2026. Reply quotes are verbatim; automated messages,
out-of-office notices and delivery failures are excluded.

Organisations and job titles are named. **Individual names and email
addresses are never published.**

## Confidentiality

`sls.html` is the redacted version of the SLS Group case study.
Respondent companies are described by exchange and sector rather than
named, because a listed company's financing enquiries are its own
business. A named version exists as a PDF for NDA-only use and is
deliberately **not** part of this repository.
