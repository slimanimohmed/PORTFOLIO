# Design and UX review — 12 October 2026

## Scope and evidence

Reviewed the portfolio as an engineering recruiter might: identify the candidate, inspect engineering evidence, read a case study, retrieve a CV, and make contact. Tested the actual site files in Chromium at 1440px desktop and 390px mobile. This is an expert review with functional browser tests, not an interview-based usability study or a conversion experiment. The environment proxy blocks requests to the public GitHub Pages hostname; GitHub API metadata reports the site built. Local rendering is verified separately from public deployment.

## Prioritized ideas and applied changes

| Priority | Finding / idea | Applied improvement |
| --- | --- | --- |
| High | Engineering work was buried below a long experience section: first gallery at approximately 4,025px desktop scroll depth. | Three featured projects now start at approximately 816px in the same 1440px-wide viewport, before the experience timeline. |
| High | The hero offered no next action. | Clear specialization, PFE availability, View projects, Download CV, and internship contact links. |
| High | Desktop gallery names depended on hover; conceptual diagrams alone did not identify projects. | Persistent project names, organizations, sourced outcomes, and tool summaries on all cards. |
| High | Recruiters need to distinguish professional work from academic studies. | Existing categories retained with announced result counts; case-study summary explicitly identifies experience type. |
| Medium | Mobile navigation was only about 28px high. Dialog close controls were small. | Minimum 44px touch targets for menu, close, filter, and key action controls. |
| Medium | Two narrow mobile columns reduced card readability. | One-column cards on narrow phones, with larger readable summaries. |
| Medium | Readers lost navigation while scrolling the long homepage. | Sticky navigation and visible Contact action, retaining the reference's white/pink/blue visual language. |
| Medium | Light-gray typography and accents weakened readability. | Darker title, blue, and pink colors; retained keyboard focus outlines. No formal WCAG certification is claimed. |
| Medium | Case studies could not be shared directly. | Project hash links such as `projects/index.html#project-flyson`, with dialog opening and focus restoration verified. |
| Medium | Embedded PDFs vary across mobile browsers. | Persistent direct PDF link alongside the existing download and embed. |
| Medium | Email app dependence can obstruct contact. | Direct mail link and copy-email action, with a manual fallback if clipboard access fails. The form still only composes a draft. |
| Low | Full project catalogue duplicated a long home page. | Home overview reduced to six entries; all 11 remain on Projects. |

## Best next improvements requiring source material

1. Replace conceptual graphics with authentic CAD renders, manufactured-part photographs, and appropriately redacted simulation results. Each image should show the engineering story, not merely decoration.
2. Enrich case studies with boundary conditions, key dimensions, material rationale, validation methods, and measurable results that can be verified. The source PDFs leave several such values unspecified.
3. Confirm experience chronology before recruitment use. The CV and master document conflict, and the Guide Valve end date is future relative to this review date.
4. Add downloadable public technical summaries if the user supplies them and confirms they can be shared.
5. Consider a server-backed contact form only if direct email proves insufficient; this requires choosing and configuring a delivery service.

## Validation

Passed all five routes, active nav states, mobile menu and Escape close, no horizontal overflow, five timeline entries, three featured and six overview cards, all 11 case-study dialogs, four category filters, five years of coursework, search and empty state, form-required fields and email draft construction, all assets, case-study deep links, keyboard focus return, hero actions, persistent project titles, and menu/dialog touch-target sizes. No browser JavaScript errors. Both JavaScript files pass syntax checks. No emails were sent.
