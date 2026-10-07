import rss from "@astrojs/rss"
import type { APIContext } from "astro"
import { getCollection } from "astro:content"
import { SITE } from "@consts"

export async function GET(context: APIContext) {
  const posts = await getCollection("blog", ({ data }) => !data.draft)
  const projects = await getCollection("projects", ({ data }) => !data.draft)

  const items = [...posts, ...projects].sort((a, b) => b.data.date.getTime() - a.data.date.getTime())

  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site!,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.summary,
      pubDate: item.data.date,
      link: `/${item.collection}/${item.id}/`,
    })),
  })
}
