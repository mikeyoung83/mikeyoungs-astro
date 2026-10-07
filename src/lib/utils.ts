export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(date)
}

export function readingTime(text: string) {
  const wordCount = text.replace(/<[^>]+>/g, "").split(/\s+/).length
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed()
  return `${readingTimeMinutes} min read`
}

export function truncateText(str: string, maxLength: number): string {
  const ellipsis = "…"
  if (str.length <= maxLength) return str

  const trimmed = str.trimEnd()
  if (trimmed.length <= maxLength) return trimmed

  return str.slice(0, maxLength - ellipsis.length).trimEnd() + ellipsis
}
