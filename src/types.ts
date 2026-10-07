export type Page = {
  /** Visible page heading */
  TITLE: string
  /** Visible intro line under the heading */
  DESCRIPTION: string
  /** <title> text (site name is appended by BaseLayout) */
  META_TITLE: string
  /** <meta name="description"> text */
  META_DESCRIPTION: string
}

export type Site = {
  TITLE: string
  /** Default meta description, used on the home page */
  DESCRIPTION: string
  AUTHOR: string
}

export type Links = {
  TEXT: string
  HREF: string
}[]

export type Socials = {
  NAME: string
  ICON: string
  TEXT: string
  HREF: string
}[]