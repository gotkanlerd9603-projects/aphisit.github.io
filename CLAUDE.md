[CLAUDE.md](https://github.com/user-attachments/files/28417836/CLAUDE.md)
# CLAUDE.md

Guidance for Claude (and Claude Code) when working in this repository.

---

## 1. Project Overview

This repository is **Aphisit Hathaway's personal digital marketing portfolio**, hosted on GitHub Pages.

The site is intentionally simple, minimal, and self-contained — a single `index.html` file with HTML, CSS, and JavaScript co-located.

The portfolio positions Aphisit as a digital marketing candidate with strengths in:

- Digital marketing & performance marketing
- SEO and content strategy
- Marketing analytics (GA4, Search Console)
- AI-assisted workflow
- Portfolio-first career development

**Primary goal of the site:** help a recruiter, in under 30 seconds, understand who Aphisit is, what he can do, see proof, and contact him.

---

## 2. Tech Stack & Constraints

**Stack**

- Plain HTML, CSS, JavaScript (no framework)
- Single-file architecture: `index.html` contains everything
- Hosted on GitHub Pages (static only — no backend, no server-side rendering)
- `.nojekyll` enabled

**Hard constraints — do not introduce:**

- React, Next.js, Vue, Svelte, or any SPA framework
- Tailwind, Bootstrap, or any CSS framework
- Build tools: Webpack, Vite, Parcel, npm scripts
- Package managers / `node_modules`
- Backend code, databases, or serverless functions

**Allowed additions (with care):**

- Google Analytics 4 (GA4) tracking snippet
- Google Tag Manager
- Google Search Console verification meta tag
- Static form services via attribute only (Formspree action URL, `mailto:`, Netlify Forms)
- Google Fonts (one or two families maximum)
- Inline SVG icons

**Browser support:** Latest two versions of Chrome, Safari, Firefox, Edge. Mobile Safari and Chrome Android are priority.

---

## 3. Working Rules for Claude

1. **Never push directly to `main`.** Always create a new branch and open a Pull Request.
2. **Branch naming:** `feat/...`, `fix/...`, `content/...`, `seo/...`, `perf/...`, `a11y/...`, `docs/...`
3. **Commit messages:** Use Conventional Commits — `feat: add case study section`, `fix: mobile hero overflow`, `seo: add Person schema`.
4. **PR description** must explain: what changed, why, and any visual or SEO impact.
5. **Keep the single-page structure** unless explicitly asked to refactor.
6. **Do not remove existing content** unless explicitly asked.
7. **Do not touch secrets**, GitHub Actions tokens, or `.github/workflows/*.yml` unless requested.
8. **Preserve the working GitHub Pages deployment** — every change must keep the site live.
9. **For small requests:** make focused changes only — do not rewrite the whole site.
10. **For larger requests:** propose the plan first, then implement on a new branch.

---

## 4. SEO Requirements

SEO is part of the portfolio's value proposition. Every change must preserve or improve these:

**Meta tags (must exist in `<head>`):**

- `<title>` — under 60 characters, includes name + role
- `<meta name="description">` — 140–160 characters, includes target keywords
- `<meta name="viewport" content="width=device-width, initial-scale=1">`
- `<link rel="canonical">` pointing to the live GitHub Pages URL
- `<html lang="en">` (or `lang="th"` if Thai is the primary language)

**Social sharing:**

- Open Graph: `og:title`, `og:description`, `og:type`, `og:url`, `og:image` (1200×630)
- Twitter Card: `twitter:card` set to `summary_large_image`

**Structured data (JSON-LD in `<head>`):**

- `Person` schema with name, jobTitle, url, sameAs (LinkedIn, GitHub), knowsAbout
- `WebSite` schema

**Heading hierarchy:**

- Exactly one `<h1>` per page (the hero headline)
- Proper sequential nesting (`h1` → `h2` → `h3`) — never skip levels

**HTML quality:**

- Use semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Descriptive `alt` text on every image (empty `alt=""` only for purely decorative images)
- Descriptive link text — never "click here" or "read more" alone

**Target Lighthouse SEO score: 100.**

---

## 5. Performance Budget

Marketing portfolios are judged on speed. Maintain these targets:

| Metric | Target |
|---|---|
| Lighthouse Performance (mobile) | ≥ 90 |
| Lighthouse SEO | 100 |
| Lighthouse Accessibility | ≥ 90 |
| Lighthouse Best Practices | ≥ 90 |
| Largest Contentful Paint (LCP) | < 2.5s |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Total page weight (compressed) | < 500 KB |

**Image rules:**

- Compress before committing (use TinyPNG, Squoosh, or equivalent)
- Prefer WebP or AVIF; provide fallback when needed
- Always include `width` and `height` attributes to prevent layout shift
- Use `loading="lazy"` for below-the-fold images
- Provide responsive images with `srcset` for hero/large images

**CSS/JS:**

- Inline CSS in `<style>` is fine for this single-page site, but keep it under ~30 KB
- Inline JS should be under ~15 KB
- No render-blocking external scripts in `<head>` — defer or async
- Preload critical fonts; subset Google Fonts to needed weights only

---

## 6. Accessibility (a11y)

- Color contrast ratio: minimum **4.5:1** for body text, **3:1** for large text
- Visible focus states on all interactive elements (never `outline: none` without replacement)
- Full keyboard navigation — every link, button, and form field reachable via Tab
- `aria-label` on icon-only buttons and ambiguous links
- Form inputs paired with `<label>` elements
- Respect `prefers-reduced-motion` for animations
- Skip-to-content link for keyboard users

---

## 7. Design System

### Visual style

Minimal, editorial, modern, professional — like a personal brand site for a junior-to-mid digital marketer, not a generic template or student project.

### Layout

Single-page scrolling layout with clear visual hierarchy. Sections in order:

1. **Hero** — name, headline, supporting text, primary CTA
2. **About** — short positioning paragraph
3. **Skills & tools** — SEO, analytics, content, AI workflow
4. **Projects / case studies** — cards with results and links
5. **Proof** — analytics screenshots, certifications, dashboards
6. **Contact** — clear CTA, email, LinkedIn, GitHub

### Color palette

- Background: soft neutral or warm off-white
- Text: charcoal or near-black
- Accent: one muted color for buttons, links, highlights
- Cards: light neutral backgrounds with subtle borders

**Avoid:** bright random colors, multiple accents, strong gradients, neon, playful combinations.

### Typography

- Modern, readable, slightly editorial
- Balanced hero headline (not oversized on mobile)
- Clear heading scale with consistent spacing
- Comfortable body size (16–18px) with generous line-height (1.5–1.7)
- Controlled font-weight contrast — avoid overusing bold

### Components

Clean cards, rounded corners, subtle borders, light hover states, simple buttons, dashboard-style blocks for analytics proof. Handcrafted feel, not template-default.

### Animation

Subtle only: fade-in on scroll, smooth scrolling, light hover states. Respect `prefers-reduced-motion`. No bouncing, no slow transitions, no distracting motion.

### Mobile priority

- No horizontal scroll, ever
- Tap targets ≥ 44×44 px
- Hero text balanced to screen width
- Cards stack cleanly with breathing room
- Sticky/simple navigation

### Avoid

Overly colorful design, heavy animations, complex layouts, generic SaaS landing-page sections, random decorative icons, excessive gradients, empty-feeling whitespace, childish or unfinished aesthetics.

---

## 8. Content & Voice

**Positioning:** A digital marketing graduate with hands-on entrepreneurial and project experience — focused on data-driven campaigns, SEO, content strategy, marketing analytics, and practical AI-assisted workflows.

**Tone:**

- Professional, direct, confident
- Recruiter-friendly — easy to scan, easy to verify
- Not exaggerated, not buzzword-heavy
- Specific over vague (e.g. "grew organic traffic 38%" beats "improved SEO")

**Default language:** English. If Thai content is added, set `lang` attribute appropriately and consider `hreflang`.

---

## 9. File Structure

```
/
├── index.html              # full website
├── README.md               # repo overview
├── CLAUDE.md               # this file
├── .nojekyll               # disables Jekyll on GitHub Pages
├── assets/                 # images, favicons, og-image (if added)
└── .github/
    └── workflows/
        └── claude.yml      # Claude Code GitHub Actions — do not edit
```

Before proposing changes, read `index.html` to understand the current layout and copy.

---

## 10. Local Development

No build step required. Preview locally with any static server:

```bash
# Python (built-in)
python3 -m http.server 8000

# Node (if available)
npx serve .
```

Then open `http://localhost:8000`.

For Lighthouse audits, use Chrome DevTools → Lighthouse tab, mobile preset.

---

## 11. Pull Request Checklist

Before opening a PR, confirm:

- [ ] Branch follows naming convention
- [ ] Commit messages follow Conventional Commits
- [ ] Site still renders correctly on mobile and desktop
- [ ] No horizontal scroll on mobile
- [ ] `<h1>` count is exactly 1
- [ ] All images have `alt` attributes and `width`/`height`
- [ ] Meta description and canonical are intact
- [ ] No broken internal links
- [ ] No new heavy dependencies introduced
- [ ] PR description explains the why, not just the what
