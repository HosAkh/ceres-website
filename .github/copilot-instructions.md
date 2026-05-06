# Ceres Website — Copilot Agent Instructions

## Stack & Structure

- **Framework**: Astro (static site, `src/pages/*.astro`)
- **Styling**: Tailwind CSS with custom theme (dark glassmorphism, orange accent `#f37221`)
- **Components**: `src/components/Navigation.tsx`, `src/components/Footer.tsx` (Preact)
- **Layout**: `src/layouts/Layout.astro`
- **Deploy**: GitHub Pages via GitHub Actions on every push to `main`
- **Live URL**: https://hosakh.github.io/ceres-website/
- **Repo**: HosAkh/ceres-website

## Auto-Deploy Rule

**After every code change, always:**
1. `PATH="/Users/faranakakhtari/.nvm/versions/node/v24.15.0/bin:$PATH" npm run build` — verify it builds clean
2. `git add`, `git commit`, `git push` — triggers GitHub Actions which auto-deploys to GitHub Pages

Never consider a task done until changes are pushed to `main`.

## Git Identity

```
git config user.name "hosakh"
git config user.email "hossein.ganji@utexas.edu"
```

---

## Skill: Google Stitch (UI Generation)

**Invoke when**: user asks to "redesign", "use Stitch", "generate a new page", or wants a visual refresh of any page.

**How to run**:
```js
// From /Users/faranakakhtari/stitch-mcp/
// STITCH_API_KEY is in ~/Library/Application Support/Code/User/mcp.json

import { stitch } from "@google/stitch-sdk";
const project = await stitch.createProject("Page Name");
const screen = await project.generate("detailed prompt here");
const htmlUrl = await screen.getHtml();
const imageUrl = await screen.getImage();
const res = await fetch(htmlUrl);
const html = await res.text();
```

**Run via**:
```bash
cd /Users/faranakakhtari/stitch-mcp
STITCH_API_KEY="..." /Users/faranakakhtari/.nvm/versions/node/v24.15.0/bin/node your_script.mjs
```

**Prompt guidelines for Ceres pages**:
- Dark mode enterprise SaaS, Space Grotesk headlines, Inter body, `#ffb691`/`#f37221` orange
- Background: deep navy `#03151e`
- Include: glassmorphism panels, bento grid layout, gradient CTA, animated pulse badge
- Use industry-specific imagery (hospital, pharma, CPG supply chain, investment)
- Match design language of existing pages (investment-firms page is the gold standard)

**After generating**: extract the `<body>` content and CSS, adapt into the Astro `.astro` file using the Layout component. Replace hardcoded nav/footer with Layout wrapper.

---

## Skill: Copywriting

**Invoke when**: user asks to write, rewrite, or improve page copy, headlines, CTAs, value props, or any marketing text.

**Skill location**: `~/.agents/skills/copywriting/SKILL.md`

**Key rules** (always apply):
- Read `.agents/product-marketing-context.md` first for brand voice, ICPs, and differentiators
- One primary CTA per page: **Book a Demo** → `/book-a-demo/`
- Second person (`you`, `your`), customer language, no buzzwords
- Concrete benefits over features, specific claims only when evidence exists
- No invented stats, testimonials, or fabricated case studies
- Page flow: What is this → Is it for me → Why believe it → What next

**Auto-invoke**: any time you edit copy on a page, apply these rules even if not explicitly asked.

---

## Skill: SEO

**Invoke when**: user asks about SEO, rankings, meta descriptions, schema, page titles, internal linking, or content strategy.

**Skill location**: `~/.agents/skills/seo-audit-modern/SKILL.md`

**Key rules**:
- Each page needs: unique `<title>`, meta `description`, canonical URL (set in Layout.astro)
- Target keywords go in H1, first paragraph, and meta description
- Pages already have schema via `Layout.astro` (Organization + WebSite)
- Internal links: all solution pages should link to `/book-a-demo/` as primary CTA
- Check `src/layouts/Layout.astro` for SEO infrastructure before making changes

**When writing/editing pages**: always ensure the `title` and `description` props passed to `<Layout>` are keyword-rich and under 60/160 chars respectively.

---

## Skill: Typography

**Invoke when**: user asks about fonts, type scale, text hierarchy, line length, letter spacing, or visual text layout.

**Design system typography** (already in use — apply consistently):
- **Headlines/Display**: `font-headline` → Space Grotesk, bold/extrabold, tight tracking (`tracking-tight` or `-0.01em to -0.02em`)
- **Body**: `font-body` → Inter, `text-base`/`text-lg`, `leading-relaxed` (1.6–1.7)
- **Labels/Caps**: `font-mono` → DM Mono, `text-[10px]–text-[12px]`, `tracking-[0.14em–0.18em]`, `uppercase`
- **Line length**: prose max `max-w-2xl` to `max-w-3xl` (65–75 chars)
- **Hierarchy**: Display (5xl–7xl hero) → H2 (3xl–4xl section) → H3 (xl–2xl card) → Body (base–lg) → Label (xs–sm mono)

**When adding new sections**: match this scale exactly. Do not introduce new font families.

---

## Page Edit Workflow

1. Identify target page in `src/pages/`
2. If redesigning: invoke **Stitch** to generate fresh HTML
3. Adapt Stitch output into Astro structure (preserve Layout wrapper, use `demoUrl` pattern for CTAs)
4. Apply **Copywriting** rules to any text you write or adapt
5. Apply **Typography** scale to all text elements
6. Ensure **SEO** meta props (`title`, `description`) are set correctly on the Layout
7. Build: `npm run build`
8. Commit + push → auto-deploys via GitHub Actions
