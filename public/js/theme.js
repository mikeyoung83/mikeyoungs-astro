// Light/dark theme switching via daisyUI's data-theme attribute.
// Loaded in <head> so the saved theme is applied before first paint.
const LIGHT = "mikeyoung"
const DARK = "mikeyoung-dark"

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme === "dark" ? DARK : LIGHT)
}

function preloadTheme() {
  const saved = localStorage.theme
  const theme = saved === "light" || saved === "dark"
    ? saved
    : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  applyTheme(theme)
}

function changeTheme() {
  const next = document.documentElement.getAttribute("data-theme") === DARK ? "light" : "dark"

  // Suppress transitions for the instant of the swap so nothing animates
  const css = document.createElement("style")
  css.appendChild(document.createTextNode("* { transition: none !important; }"))
  document.head.appendChild(css)

  applyTheme(next)
  localStorage.theme = next

  window.getComputedStyle(css).opacity
  document.head.removeChild(css)
}

preloadTheme()

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.addEventListener("click", changeTheme)
  })
})
