// Home page background: three layers of box-shadow dots. Dots inherit
// currentColor from their container (text-base-content), so they're black
// particles in the light theme and white stars in the dark theme.
function generateDots(n) {
  const dots = []
  for (let i = 0; i < n; i++) {
    dots.push(`${getRandom(2560)}px ${getRandom(2560)}px`)
  }
  return dots.join(", ")
}

function getRandom(max) {
  return Math.floor(Math.random() * max)
}

function styleLayer(id, size, count, animation) {
  const el = document.getElementById(id)
  if (!el) return
  el.style.cssText = `
    width: ${size}px;
    height: ${size}px;
    border-radius: 50%;
    box-shadow: ${generateDots(count)};
    ${animation ? `animation: ${animation};` : ""}
  `
}

function initBG() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  styleLayer("particles1", 1, 1000, !reduceMotion && "animStar 50s linear infinite")
  styleLayer("particles2", 1.5, 500, !reduceMotion && "animateParticle 100s linear infinite")
  styleLayer("particles3", 2, 250, !reduceMotion && "animateParticle 150s linear infinite")
  styleLayer("stars1", 1, 1000)
  styleLayer("stars2", 1.5, 500)
  styleLayer("stars3", 2, 250)
}

initBG()
