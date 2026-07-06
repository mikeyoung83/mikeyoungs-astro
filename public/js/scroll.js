let header = null;
let ticking = false;

function onScroll() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      if (!header) {
        header = document.getElementById("header");
      }
      if (header) {
        if (window.scrollY > 0) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      }
      ticking = false;
    });
    ticking = true;
  }
}

document.addEventListener("scroll", onScroll, { passive: true });

