# Portfolio handoff

The complete Astro/TypeScript portfolio is implemented locally with six homepage sections, three static case-study pages, an interactive Connected Services illustration, the synthetic Service Flow Explorer, responsive navigation, reading progress, styled native scrolling, effects controls, and a profile README.

## Content and privacy

Experience and technology claims were checked against the resume text supplied in the conversation. The resume and extracted private text were never saved to this repository. Employer names, exact assignment dates, locations, and unapproved contact details are excluded. Email, LinkedIn, and phone were subsequently approved explicitly and added to the contact section. GitHub remains unset. No client screenshots, measured results, or public demo URLs are claimed.

Update profile, project, skill, and approved contact data in `src/data/profile.ts`. Update homepage narrative in `src/pages/index.astro`, detail-page layout in `src/pages/work/[slug].astro`, shared behavior in `src/layouts/Layout.astro`, and design in `src/styles/global.css`.

## Verification performed

- Clean `npm ci`: passed; 264 packages installed, zero vulnerabilities reported.
- Astro/TypeScript checks: zero errors, warnings, or hints.
- Production builds: passed for root and repository-prefixed paths.
- Static build verification: four pages and 50 local links/assets passed for each base path, including cross-page anchors and encoding checks.
- Production browser inspection: desktop, 768px tablet, and 390px mobile; no horizontal overflow in inspected tablet/mobile viewports.
- Demo: valid request returned synthetic 200; invalid request returned 400 with both validation errors; reset restored the initial sample and status.
- Hero: keyboard Enter selected the API stage and updated its explanation.
- Navigation: mobile open/close and Escape returned focus to the menu; visible focus styling inspected.
- Effects: toggle changed its pressed state and label; reduced-motion, coarse-pointer, hidden-tab, and offscreen behavior reviewed in source.
- Direct case-study visit and browser refresh: passed for the cloud operations page.
- Browser logs: no application errors observed; unrelated browser-extension warnings were present.
- Privacy scan of repository candidate files and generated output: no private resume identifiers found. The initial repository and remote had no commits, so no historical private material exists in the intended public history.

No Lighthouse score, formal screen-reader audit, physical touch test, browser-emulated reduced-motion test, or JavaScript-disabled browser run is claimed. Static content, mobile navigation fallback, reduced-motion CSS, and the no-script demo explanation were reviewed in source.

## Deployment blocker and next action

The configured remote is the intended portfolio repository, but the existing authenticated GitHub identity has no push permission. Nothing has been pushed or published, and no live URL has been verified.

Authenticate Git with an account that has write access to the configured remote. Enable GitHub Actions as the Pages source in repository settings. Review and commit the local files, then push `main`. The included workflow validates, builds, uploads, and deploys. Verify the successful deployment URL and open the homepage and a case-study route directly before adding that URL to the README.

## Local preview

Run `npm run dev` for a root-path development preview. For production preview, use the same `BASE_PATH` value for both build and preview. The final generated `dist/` was validated using `/Krishna-prasad-blogs/`.

PowerShell:

```powershell
$env:BASE_PATH='/Krishna-prasad-blogs/'
npm run build
node scripts/verify-build.mjs
npm run preview
```

For a root-path build, remove `BASE_PATH` first. GitHub Actions sets its repository variables automatically, and both configuration and build verification derive the correct user-site or project-site base path.
