# SalarySahi — Salary Calculator Website

A static, browser-based salary calculator website for India. It includes 10 interactive calculators:
1. In-Hand Salary
2. CTC Structure
3. Salary Hike
4. Increment
5. PF
6. Gratuity
7. Income Tax Estimate (new regime)
8. Old vs New Tax Regime (simplified comparison)
9. Gross Salary
10. Monthly ↔ Annual Salary

## Run locally
1. Extract this ZIP.
2. Open `index.html` in a modern browser.
3. Test each calculator with known examples. For a more realistic local server, use VS Code's Live Server extension or Python's local HTTP server.

## Publish for free
### GitHub Pages
1. Create/sign in to GitHub.
2. Create a public repository, e.g. `salarysahi`.
3. Upload `index.html`, `styles.css`, `app.js`, and `README.md` (keep them in the repository root).
4. In repository Settings → Pages, select deployment from the main branch and root folder.
5. Save and wait for the published URL.

### Netlify Drop
1. Extract the ZIP.
2. Open Netlify and sign in.
3. Drag the extracted project folder (containing `index.html`) into the site's manual deploy/drop area if available in your account.
4. Use the generated free subdomain. A custom domain is optional and usually costs extra.

Free plan features and interface labels can change; check each provider's current terms.

## Before publishing
- Replace `hello@example.com` in `index.html` with a contact address you control.
- Add a real About page, Privacy Policy, Terms, and contact details before applying for advertising.
- Add a cookie/consent mechanism if required for your ad setup and applicable privacy rules.
- Add analytics only if you actually need it and disclose it appropriately.
- Verify every formula and update tax/PF/gratuity assumptions before presenting the tools as reliable financial guidance.
- Do not place ads in a way that causes accidental clicks or blocks calculator controls.
- Keep the disclaimer visible. Calculators are estimates, not professional tax, payroll, legal or financial advice.

## Important formula notes
- Income tax and old/new comparison are simplified estimates, not a tax-return calculator. They do not model every deduction, special-rate income, surcharge situation, rebate exception or personal tax circumstance.
- PF calculator does not split employer contribution into EPF and EPS.
- In-hand salary uses simplified CTC assumptions and is not a substitute for a payroll breakdown.
- Gratuity estimate is approximate and should not be relied on to establish legal eligibility.
- The project runs locally and does not send entered salary data to a server. Do not add third-party analytics or backend services without updating the privacy notice.

## Suggested next steps
1. Test formulas with a payroll professional or official calculators.
2. Add dedicated SEO pages for each calculator, rather than relying only on a single-page interface.
3. Add privacy/contact/about pages.
4. Only then consider applying for AdSense; approval and earnings are not guaranteed.

## Reference for tax slab assumptions
Official Income Tax Department tax rates page:
https://www.incometaxindia.gov.in/w/tax-rates-and-computation

The site was prepared as a starter project on 20 October 2026. Tax rules can change; re-check official rules before public launch.
