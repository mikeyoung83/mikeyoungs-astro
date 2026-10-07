# Mike Young — Style Guide

> The single source of truth for this site's design and content decisions;
> `CLAUDE.md` just points here. Written on 2026-10-07 by documenting the site
> as already built. It started as the Astro Sphere theme (by Mark Horn) and
> predates the starter template, so where this guide and the code disagree,
> check which is the intended one before "fixing" either.

---

## 1. Brand & voice

**Who is this for?**
- Person: Mike Young, a front-end developer and designer with about 19 years of experience (counted from 2007, and the site calculates it automatically).
- Audience: prospective employers, clients and collaborators looking at his work; also anyone reading his hobby posts.
- Primary goal of the site: show the projects and work history, and make it easy to get in touch (email, GitHub, LinkedIn).

**Personality**
Calm, competent, understated, craft-focused, with a bit of personality in the blog.

**Voice dos and don'ts**
- Do: write in the first person ("I"). In professional copy, pair design and engineering ("balance style and efficiency") and lead with web fundamentals: semantic HTML, performance and accessibility. Blog posts are casual and conversational ("Bob's your uncle").
- Don't: hype or exclamation-heavy sales copy. Avoid agency "we" language and buzzword lists without substance.

**One line of example copy in this voice**
"Driven by the love of creating beautiful things and passionate about usability, I always strive to create websites that balance style and efficiency."

**Copy status:** the copy is Mike's own and final. Fix outright typos and grammar only, and ask before rewriting anything. Known typos in the blog posts that are still unfixed: "leaveing" and "Batocerta" in `blog/arcade`.

---

## 2. Color palette

Strictly monochrome: black on white, inverted for dark mode. Color appears
only in **project cards**, where each project's own brand color
(`projectColor` in its frontmatter) tints the card border and arrow. Those
values are client brand colors stored as content data, not theme tokens.

Two custom daisyUI themes are defined in `src/styles/global.css`:

| Role | Light: `mikeyoung` (default) | Dark: `mikeyoung-dark` (`prefersdark`) |
|---|---|---|
| `base-100` | white `oklch(100% 0 0)` | black `oklch(0% 0 0)` |
| `base-200` | `oklch(97% 0 0)` (mobile drawer) | `oklch(20.5% 0 0)` |
| `base-300` | `oklch(92.2% 0 0)` | `oklch(26.9% 0 0)` |
| `base-content` | black | white |
| `primary` / `primary-content` | black / white (active nav pill, main CTA) | white / black |
| `secondary`, `accent`, `neutral` | greys. These are currently unused, so keep them grey | greys |
| `info/success/warning/error` | muted defaults (unused today) | muted defaults |

**How tokens are used:**
- Body text is `text-base-content/75`, set on `body`. Headings, titles and hover states use full `text-base-content`.
- Borders and hover fills are `base-content` at low opacity, often with a separate dark value. For example `border-base-content/15 dark:border-base-content/20` and `hover:bg-base-content/5 dark:hover:bg-base-content/20`.
- The `dark:` variant is a custom variant bound to `data-theme="mikeyoung-dark"`, not to the OS setting. Use it only for opacity tweaks and for the stars/particles swap.
- The theme toggle (`public/js/theme.js`) stores `"light"`/`"dark"` in `localStorage.theme`. Without a saved choice it follows the OS setting.

**Contrast:** body text (75%) is about 10:1 in both themes. Muted labels use `/60` at minimum (about 5.7:1 on white). Don't go below `/60` for text; `/40` is only for decorative icons.

---

## 3. Typography

- Font: **Atkinson Hyperlegible** (named "Atkinson"), regular 400 and bold 700. It's self-hosted from `src/assets/fonts/` through the Astro Fonts API local provider and mapped to `font-sans`. The site uses one font throughout.
- Headings are small and quiet: `font-semibold text-base-content`. Page H1s are `text-3xl`, section H2s on the home page are body-sized and semibold, and the home hero name is `text-2xl md:text-3xl lg:text-4xl font-bold`.
- Long-form content (blog, projects, work, legal) uses the Tailwind Typography plugin. Every `<article>` is `prose dark:prose-invert max-w-full`.
- Meta text (dates, "Showing X of Y", "Prev/Next") is `text-sm uppercase`.

---

## 4. Shape & feel

- Minimal and airy. Content is capped at a narrow column (`Container size="md"`, 768px; the home page body uses 640px).
- Corners are small: `rounded-sm` (0.25rem) on buttons and tags, `rounded-lg` on cards, `rounded-full` on nav pills and icon buttons.
- Borders are thin and low-contrast. There are no shadows; daisyUI `--depth` and `--noise` are both 0.
- Motion is a signature of the site, but it stays subtle:
  - `.animate` sections fade up on load in sequence (`public/js/animate.js`).
  - Arrow icons extend on hover.
  - The header turns translucent and blurred after scrolling (`public/js/scroll.js`).
  - On the home page, light mode has drifting particles and dark mode has a starfield with twinkling stars and meteors, under a "planet" crescent.
  - All of this respects `prefers-reduced-motion`.

---

## 5. Imagery direction

- Project pages use full-page screenshots of the live client sites, three per project (Homepage, Information, Form). Blog posts use Mike's own photos.
- Images sit next to each post's `index.md`, are referenced with relative Markdown paths, and are optimized by `astro:assets` automatically.
- `resize-images.js` is a one-off helper that downsizes source images in `src/content` to a maximum width of 1200px. Run it with `node resize-images.js` before committing large photos.
- Every image needs real `alt` text, written as the Markdown alt (`![Homepage](...)`). Make it more descriptive than "Homepage" when you're editing a post anyway.
- The Open Graph image is `public/open-graph.jpg`, used site-wide.

---

## 6. Site map

| Page | Purpose | Key sections |
|---|---|---|
| Home `/` | Introduce Mike | Hero ("Hello, I'm Mike Young", years of experience, CTAs to Projects and Work), About, Recent projects (3), Recent posts (3), "This website was built with" stack, Let's Connect (socials) |
| Projects `/projects` | Portfolio | Filterable list (search + tag filters + order toggle). Detail pages are at `/projects/<slug>` with demo/repo links and prev/next navigation |
| Work `/work` | Work history | Chronological roles from the `work` collection |
| Blog `/blog` | Personal posts | Same filterable list as Projects. Detail pages are at `/blog/<slug>` |
| Search `/search` | Search posts and projects together | One search box with mixed results (shown with a post/project pill) |
| Privacy `/legal/privacy` | Legal | From the `legal` collection |

Other outputs: `/rss.xml` (posts and projects), the sitemap and `robots.txt`.
`public/archive/sp/*` holds static archived builds of old work (ScalePad
pages). They're served as-is and kept out of linting and type checks, so
don't restyle or refactor them.

---

## 7. Inspiration folder (optional)

*Claude: before building or substantially revising a page, check for files matching `inspiration/<page>-*.{jpg,jpeg,png,webp}` (e.g. `projects-1.jpg`); a bare `<page>.jpg` also counts. If any exist, view them and treat them as loose reference for layout, hierarchy and finesse only. Never copy exact copy, logos or brand assets from someone else's real site. If none exist for a page, build it from this guide alone and say nothing about the missing file.*

**Using it?** No (decided 2026-10-07). Don't bring it up again unless Mike asks.

---

## 8. CMS (optional)

**Needed?** No. Posts, projects and work entries are edited as Markdown in the repo.

---

## 9. Components & patterns

- **Header** (`Header.astro`): fixed and transparent until you scroll. It has the brand mark and name on the left, a centered pill nav (the active link is a filled `bg-primary` pill with `aria-current="page"`), and round bordered icon buttons for search and the theme toggle on the right. On mobile a menu button opens `Drawer.astro`, a full-screen panel that is `inert` while closed and closes with Esc.
- **ArrowCard** (`ArrowCard.astro`): the standard list item for posts and projects. It shows a title, a two-line summary, uppercase tag chips and an arrow that extends on hover. Project cards take their border and arrow color from `projectColor`.
- **SearchCollection / SiteSearch**: vanilla custom elements using Fuse.js, with no UI framework. All cards are rendered at build time and the script only filters and reorders them. Tag filters are `aria-pressed` toggle buttons. The search field is a daisyUI `input`.
- **Buttons/links**: the main CTA is a filled `bg-primary text-primary-content` rectangle. Secondary actions are outlined (`border-base-content/25`). Inline links are underlined with a thin `decoration-base-content/25`.
- **Footer**: a "Back to top" button, the Privacy link, the copyright line and round social icon buttons.
- **daisyUI usage**: the design predates daisyUI, so most structure is utility classes on purpose to keep the original look. Use daisyUI components (`input`, `btn`, etc.) for new interactive pieces, styled to match. Don't rebuild existing pieces in stock daisyUI styling unless a redesign is planned.

---

## 10. Accessibility & performance notes

- No client-side framework. The only bundled JS is the search/filter scripts and a few small inline scripts in `public/js/`.
- Skip link, landmarks (`header`/`nav`/`main`/`footer`) and one H1 per page.
- Decorative SVGs are `aria-hidden`, and the background effects are hidden from assistive tech.
- All animation honors `prefers-reduced-motion`.
