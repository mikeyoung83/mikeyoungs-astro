import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "Mike Young",
  DESCRIPTION: "Mike Young is a front-end developer and designer building fast, accessible websites that balance clean design with technical efficiency.",
  AUTHOR: "Mike Young",
};

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
  META_TITLE: "Work History — Front-End Development & Design",
  META_DESCRIPTION: "Mike Young's work history: front-end development and design roles building high-traffic marketing sites, campaigns and design systems.",
};

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
  META_TITLE: "Blog — Homelab, Hardware & Web Projects",
  META_DESCRIPTION: "Posts from Mike Young on homelab networking, hardware hacks like arcade cabinet builds, and other things he's passionate about.",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
  META_TITLE: "Projects — Websites Built & Designed by Mike Young",
  META_DESCRIPTION: "Recent website projects by Mike Young: Astro, WordPress and PHP builds for lead generation, SaaS marketing, local businesses and sports teams.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
  META_TITLE: "Search Blog Posts and Projects",
  META_DESCRIPTION: "Search every blog post and project on Mike Young's portfolio by keyword, title, summary or tag.",
};

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
  {
    TEXT: "Work",
    HREF: "/work",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "mikeby83@gmail.com",
    HREF: "mailto:mikeby83@gmail.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "mikeyoung83",
    HREF: "https://github.com/mikeyoung83",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "mike-young",
    HREF: "https://www.linkedin.com/in/mike-young-283b80140/",
  },
];
