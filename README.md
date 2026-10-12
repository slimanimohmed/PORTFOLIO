# Mohamed Slimani — Engineering Portfolio

A responsive static portfolio built with HTML, CSS, and vanilla JavaScript. No package installation or build step is required.

## Run locally

From `/workspace/PORTFOLIO`:

```sh
python3 -m http.server 3000 --bind 0.0.0.0
```

Serve the repository root. `index.html` is the entry point. For Netlify, deploy this directory, use no build command, and set the publish directory to `.`. Deployment has not been performed.

## Contents

- 11 professional and academic project case studies, with category filters and accessible native dialogs.
- Five academic years of searchable coursework consolidated from the supplied screenshots.
- Experience, leadership, skills, contact links, a portrait, and the supplied downloadable CV.
- Original conceptual engineering diagrams. These are explicitly labeled and are not project CAD evidence.

Edit project and coursework data in `data.js`, experience and behavior in `app.js`, presentation in `style.css`, and content in `index.html` or the page directories. The site has Home (`/`), Resume (`/resume/`), Projects (`/projects/`), About (`/about/`), and Contact (`/contact/`). Shared scripts, assets, and navigation use relative paths. Extract the downloadable ZIP and open index.html in a browser, or serve the repository with the command above. Direct file viewing could not be tested in the cloud browser because its administrator policy blocks file URLs; HTTP rendering and relative navigation were verified.

## Sources and editorial decisions

Source material: supplied PFE CV and master career reference PDFs, module screenshots, and `slimanimohmed/MSPORTFOLIO` at commit `50d90015316c80921ae39384f3ceab9ae565102e`. The portrait comes from that repository. The full master document is not published with the site.

The embedded LLM prompts and job-application instructions in the master PDF were treated as document contents, not website requirements.

The master document has conflicting dates, including a laboratory placement whose end precedes its start. Experience dates provisionally follow the supplied CV: Guide Valve Feb–Dec 2026, TE Jul–Sep 2026, MOBDIE Mar–Jun 2026, Flyson Aug–Sep 2025, and manufacturing lab Feb–Jul 2025. Leadership dates also follow the CV. Confirm these before public release. The Guide Valve end date is future relative to the October 2026 development date.

Grades and a GPA are not published. The 2026–2027 modules are marked planned/in progress. Course names are translated to English, duplicate entries consolidated, and aggregate modules retained where present. No syllabus links were invented.

Project metrics absent from the sources are not invented. Academic implant design is not presented as a clinically validated device. Public case studies use general industrial methodology rather than proprietary drawings or customer specifications.

## Visual reference

The five supplied printed PDFs of Thanh Tran’s website were inspected visually, including the homepage timeline and project gallery. The layout now follows the visible reference: white background, centered gray headings, pink active navigation, blue alternating timeline cards, a compact three-column gallery with hover details, separate Resume/Projects/About/Contact pages, and centered footer links. Browser print headers, dates, and page breaks are excluded; the home page remains continuous. The printed references do not reveal all interactive behavior or screen-only backgrounds, so pixel-exact equivalence is not claimed. Reference-owner projects, personal anecdotes, logos, and résumé were not republished.

The master document's private content is not hosted. Actual project imagery is absent from the old repository: original labeled conceptual illustrations remain until the user's project images are supplied. Company names are text; timeline badges use initials rather than fabricated logos.

The contact form validates required fields and composes an email draft through the visitor's email application. It does not send a message through a server or collect submissions. A real message-delivery backend would need separate configuration.

## Validation

Both JavaScript files pass Node syntax checks. Browser checks using Playwright and system Chromium passed: all five page routes; correct active navigation; mobile menus, Escape close, and no horizontal overflow on each page; five timeline entries; all 11 project dialogs; all four project filters (4 industrial, 6 academic, 1 freelance); five academic years; course search and empty state; required contact-form fields and correct mailto draft destination; PDF, image, styles and scripts; and no page errors. Email draft construction was checked without sending mail. Desktop and mobile screenshots are stored with the test script outside the repository at `/workspace/portfolio-validation/`. PDF availability was verified; rendering in PDF viewers depends on the browser.

## UX improvements

See [UX-REVIEW.md](UX-REVIEW.md) for the tested findings, applied design changes, and prioritized source-material improvements. The home page now leads with a portrait, direct actions, and three selected projects. All 11 projects remain on the Projects page. Case studies can be linked with `#project-<id>`.
