# mikeyoungs.com

Mike Young's portfolio and blog. Built with Astro 6, Tailwind CSS 4 and
daisyUI 5, deployed to Netlify. Originally based on the
[Astro Sphere](https://github.com/markhorn-dev/astro-sphere) theme by Mark Horn.

## Commands

| Command | |
|---|---|
| `npm run dev` | Local dev server |
| `npm run build` | `astro check` + `eslint .` + production build (what Netlify runs) |
| `npm run lint` | Accessibility/lint check only |
| `npm run typecheck` | `astro check` only |
| `npm run preview` | Serve the production build |

## Content

- Blog posts: `src/content/blog/<slug>/index.md` (images alongside)
- Projects: `src/content/projects/<slug>/index.md` (images in `img/`)
- Work history: `src/content/work/*.md`
- Legal: `src/content/legal/*.md`

Schemas are in `src/content.config.ts`. Design and content rules are in
`STYLE-GUIDE.md`.
