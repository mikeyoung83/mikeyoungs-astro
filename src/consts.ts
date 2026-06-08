import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "Mike Young",
  DESCRIPTION: "Welcome to my websitee, a portfolio and blog for Mike Young.",
  AUTHOR: "Mark Horn",
};

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
};

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
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
