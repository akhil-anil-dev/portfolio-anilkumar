# Anilkumar N.J. — MEP BIM Portfolio

A clean, modern, mobile-friendly portfolio site for an **MEP BIM Coordinator**, built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Ready to deploy on **Vercel**.

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Run locally at http://localhost:3000
npm run dev

# 3. Production build
npm run build
npm run start
```

> Requires Node.js 18.18+ (Node 20 LTS recommended).

---

## Project structure

```
portfolio/
├─ app/
│  ├─ layout.tsx          # Root layout, fonts, metadata
│  ├─ page.tsx            # Single-page composition (Hero → Contact)
│  └─ globals.css         # Tailwind base + component classes
├─ components/
│  ├─ Navbar.tsx
│  ├─ Hero.tsx
│  ├─ About.tsx
│  ├─ Skills.tsx
│  ├─ Software.tsx
│  ├─ Experience.tsx
│  ├─ Projects.tsx
│  ├─ Certifications.tsx  # Certifications + Education
│  ├─ Contact.tsx
│  ├─ Footer.tsx
│  └─ SectionHeading.tsx
├─ lib/
│  └─ data.ts             # ⭐ ALL portfolio content lives here
├─ public/
│  ├─ cv/                 # Drop the downloadable CV PDF here
│  └─ projects/           # Drop project images here
├─ tailwind.config.ts
├─ next.config.js
├─ tsconfig.json
└─ package.json
```

---

## How to edit content

Everything visible on the site is driven by **`lib/data.ts`** — no need to touch components for content changes.

| What to change         | Where in `lib/data.ts`           |
| ---------------------- | -------------------------------- |
| Name, title, summary   | `profile`                        |
| Phone / email / link   | `profile.phones`, `email`, `linkedin` |
| Soft skill bars        | `coreSkills`                     |
| Technical skills list  | `technicalSkills`                |
| Software stack         | `software`                       |
| Job history            | `experience`                     |
| Project cards          | `projects`                       |
| Certifications         | `certifications`                 |
| Education              | `education`                      |
| Nav links              | `nav`                            |

### Replace the CV
1. Save the PDF to `public/cv/Anilkumar-NJ-CV.pdf`.
2. If you use a different filename, update `profile.cvPath` in `lib/data.ts`.

### Add project images
1. Put images in `public/projects/` (see filenames listed in `public/projects/README.md`).
2. Open `components/Projects.tsx` and swap the placeholder block for an `<img>` tag — there's a TODO comment marking the spot.

### Change colours
Open `tailwind.config.ts` — the palette lives under `theme.extend.colors`:
- `ink.*`    — text greys (slate-based)
- `paper.*`  — backgrounds
- `accent.*` — engineering teal accent

---

## Items still missing (to fill in later)

These weren't present in the source CV; sensible defaults / placeholders are already in the code, but they should be replaced before publishing:

- [ ] Exact employment dates for each role in `experience`
- [ ] Soft-skill labels (the source PDF only showed star ratings; the current labels are reasonable defaults — confirm or replace)
- [ ] Real certifications (issuer + year) in `certifications`
- [ ] Education history (degree, institution, years) in `education`
- [ ] A profile photo if desired (not currently required by the layout)
- [ ] Project hero images (`public/projects/`)
- [ ] Downloadable CV PDF (`public/cv/`)

---

## Deploy to Vercel

The simplest path:

1. Push this repo to GitHub / GitLab / Bitbucket.
2. Go to <https://vercel.com/new> and import the repository.
3. Vercel auto-detects Next.js — accept defaults and click **Deploy**.
4. Your site is live on a `*.vercel.app` URL within ~1 minute.

### Or with the Vercel CLI

```bash
npm i -g vercel
vercel login
vercel        # preview deployment
vercel --prod # production deployment
```

### Custom domain
Add it in **Vercel → Project → Settings → Domains**, then point your DNS provider's records as instructed.

---

## Design notes

- **Type:** Inter (loaded via `next/font/google`).
- **Layout:** single-page with anchor-link navigation and smooth scrolling.
- **Style:** light background, subtle blueprint-grid behind the hero, slate primary + cyan accent — chosen to feel at home in the construction / MEP / BIM space.
- **Motion:** intentionally minimal — hover transitions only. Easy to layer in framer-motion later if desired.

---

## License

Personal portfolio — content © Anilkumar N.J. Code is yours to adapt.
