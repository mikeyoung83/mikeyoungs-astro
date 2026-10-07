// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://mikeyoungs.com", // used by the sitemap, RSS and astro-seo's canonical URLs
  output: "static", // no adapter needed on Netlify

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
    // Pre-bundle the search library so the dev server doesn't discover it on
    // first page load and invalidate in-flight modules (504 Outdated Optimize Dep).
    optimizeDeps: {
      include: ["fuse.js"],
    },
  },

  // Atkinson Hyperlegible, self-hosted from src/assets/fonts. cssVariable is
  // "-family" suffixed so it doesn't collide with the --font-sans Tailwind
  // token in global.css that references it.
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Atkinson",
      cssVariable: "--font-body-family",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          { src: ["./src/assets/fonts/atkinson-regular.woff2"], weight: 400, style: "normal" },
          { src: ["./src/assets/fonts/atkinson-bold.woff2"], weight: 700, style: "normal" },
        ],
      },
    },
  ],
});
