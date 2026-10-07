# Mike Young (mikeyoungs.com): project memory

> This supplements `~/.claude/CLAUDE.md` (universal brochure-site rules,
> lives outside this repo) with facts specific to *this* site. Keep it
> short. For anything design- or content-related, point to `STYLE-GUIDE.md`
> rather than duplicating it here.

@STYLE-GUIDE.md

## What this site is
Mike Young's personal portfolio and blog: projects, work history and hobby
posts. It will be live at https://mikeyoungs.com and is deployed on Netlify.

## DaisyUI theme name in use
`mikeyoung` (light, default) and `mikeyoung-dark` (`prefersdark`). Both are
custom monochrome themes defined in `src/styles/global.css`. The palette
rationale is in `STYLE-GUIDE.md` §2.

## Pages
See the site map in `STYLE-GUIDE.md` (source of truth).
- Home, Projects (+ detail), Work, Blog (+ detail), Search, Privacy

## Content source
The copy is Mike's own and final. Fix typos and grammar only; don't rewrite.

## Special integrations / exceptions
- This site is based on the Astro Sphere theme, so its structure differs
  from the starter:
  - The layout is `src/layouts/BaseLayout.astro`, with Top/Bottom/Article*
    layouts for page sections.
  - Site constants (title, nav `LINKS`, `SOCIALS`, and per-page
    `META_TITLE`/`META_DESCRIPTION`) live in `src/consts.ts`. There is no
    `site-config.ts`.
  - Imports use the `@components/`, `@layouts/`, `@lib/`, `@styles/` and
    `@consts` aliases from `tsconfig.json`.
- Most styling is Tailwind utilities rather than daisyUI components, on
  purpose, to keep the original Sphere look. All colors still come from
  theme tokens. The one exception is `projectColor` in project frontmatter:
  client brand hex values applied via a `--project-color` CSS variable.
- `dark:` is a custom variant tied to `data-theme="mikeyoung-dark"`. Theme,
  scroll, animation, background and code-copy scripts are plain files in
  `public/js/`, loaded `is:inline` from `BaseLayout`.
- Search and tag filters are vanilla custom elements (`SearchCollection`,
  `SiteSearch`) using Fuse.js. Solid.js was removed; don't reintroduce a
  UI framework.
- `public/archive/sp/` holds static archived client pages, served untouched
  and excluded from lint and typecheck. Leave them alone.
- The résumé is `public/Mike_Young-Resume.pdf` (path in `RESUME_URL`, `src/consts.ts`), linked from the nav and the home hero. To update it, replace the file and keep the name. It currently includes Mike's phone number and older wording than the site, by his choice.
- Atkinson is self-hosted via the Fonts API local provider
  (`src/assets/fonts/`), not Google.
- `.npmrc` sets `legacy-peer-deps=true` because `eslint-plugin-jsx-a11y`
  doesn't list ESLint 10 as a supported peer yet. Netlify's install needs it.

## Status
Migrated from Astro 4 / Tailwind 3 / Solid to Astro 6 / Tailwind 4 /
daisyUI 5 with astro-seo, sitemap and build checks on 2026-10-07 (branch
`upgrade-astro-6`). Open items: give the homepage a dedicated 1200×630 OG
image, and make the blog post summaries (used as meta descriptions) longer
and more specific.
