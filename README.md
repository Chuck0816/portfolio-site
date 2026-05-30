# Portfolio Site

## Website Structure and Design Plan

- Hero: name, one-sentence positioning, UIUC CS + Statistics identity, target roles, and three recruiter-friendly calls to action.
- Education: UIUC, CS + Statistics, May 2028, and relevant coursework as quick-scan tags.
- Experience: timeline-style cards with title, organization, dates, stack, and impact-focused bullets.
- Projects: responsive cards for five portfolio projects with descriptions, features, tech stacks, GitHub links, and demo links.
- Skills: grouped by languages, frameworks/tools, and ML/data.
- Contact: email, GitHub, LinkedIn, and resume actions.

The visual direction is clean, modern, and professional: strong typography, generous spacing, subtle card motion, restrained teal accents, and an optional dark/light mode. It borrows the reference site's overall clarity and confident simplicity without copying its content or exact details.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The project is ready for Vercel. For GitHub Pages, keep `base: "./"` in `vite.config.js`, run `npm run build`, and publish the `dist` folder.

## Replace Placeholders

- `src/data/portfolio.js`: update experience details, project GitHub/demo URLs, and any wording you want to tune.
- `public/Chuck-Wang-Resume.pdf`: replace this with the latest resume PDF whenever you update your resume, or update `profile.resume` to point elsewhere.
- `index.html`: update the page title and meta description with your real name.
- Experience entries: replace sample internship/research entries with your real work, metrics, and dates.
- Project entries: replace placeholder GitHub/demo links and tune descriptions to match the actual repositories.

## Recruiting Content Suggestions

- Add measurable impact wherever possible, such as latency reduced, data size processed, users supported, accuracy improved, or hours saved.
- Put the strongest two projects first, especially projects with live demos or clean GitHub READMEs.
- For each project, include a short problem statement, your specific contribution, and the technical tradeoff you made.
- Keep bullets technical but readable: action, technical detail, result.
- Add a resume file with the same project and experience names so recruiters can connect the site and PDF quickly.
