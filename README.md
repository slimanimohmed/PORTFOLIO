# Mohamed Slimani — Mechanical Engineering Portfolio

A static HTML, CSS and JavaScript portfolio on GitHub Pages. No framework, package installation or build is required.

## Structure

- `index.html`: introduction, academic journey, five-role experience timeline and six selected projects.
- `projects/index.html`: all 12 projects with category filters.
- `projects/<id>/index.html`: 12 dedicated, readable-without-JavaScript case studies.
- `about/`, `resume/`, `contact/`: profile, coursework, existing downloadable CV and email contact.
- `data.js`: project catalogue, labeled conceptual illustrations, photos and coursework.
- `app.js`: project cards, timeline, filters, mobile navigation, course search and email actions.
- `style.css`: shared responsive visual system.
- `PHOTO-SOURCES.json`: provenance and context for included photographs.

Project-page narratives are static HTML; update the corresponding case page when changing its narrative. Catalogue summaries are maintained in `data.js`. Shared scripts resolve links relative to their own URL, including on nested case-study routes. Old `#project-<id>` links redirect to the corresponding case page.

## Design update — 18 October 2026

The owner requested a design informed by Thanh Tran's mechanical-engineering portfolio. The design adopts its broad presentation principles: black masthead, white content areas, a short personal introduction, a pastel chronological strip, alternating blue experience cards and image-led projects. The owner's name, identity, career record and imagery remain original. Reference text, anecdotes, logos, project images and source code are not republished.

The homepage uses one primary exploration action, a secondary resume link, concrete experience descriptions and project titles visible without hover. Case studies have full URLs, larger figures, adjacent captions and navigation to other projects. The MOBDIE page uses an editorial sequence of contribution and fabrication photos. Other pages distinguish supplied evidence from conceptual illustrations and related laboratory context.

See `UX-REVIEW.md` for the design rationale and next asset requests. No claim is made that these changes have measured recruiter-conversion benefits.

## Factual and publication boundaries

Wording follows the revised master career reference and owner-supplied CV. No undocumented quantitative results, project dates, personal anecdotes or design-decision rationales were added. Guide Valve is current as of this update; the scheduled end is 26 October 2026. Leadership dates are 2024–2025. Flyson describes actual workflow observation, checklists, maintenance, Odoo and Python; its 60% result applies specifically to mission preparation. Academic projects remain academic.

The existing published CV is retained; replacing it with the newly supplied PDF is pending explicit public-publication approval. Private source PDFs are excluded from the repository. Confidential frame content, internal technical documents and private call screenshots remain excluded. The previously owner-selected Creo screenshot is retained; employer approval is not claimed.

Seven recent Drive images document MOBDIE prototypes/fabrication or explicitly labeled supporting cranial-model and laboratory context. Web copies preserve the full frame, respect orientation and omit EXIF metadata. No image is inferred to show the exact powder tester. The contact form composes a draft in the visitor's email application without sending mail or storing submissions.

## Verification

Node syntax checks, all local links and assets, and HTML structure pass across 17 pages. The managed environment lacks the required local browser-control skill, so local browser QA was skipped. The deployed GitHub Pages site is visually and functionally checked after publication.
