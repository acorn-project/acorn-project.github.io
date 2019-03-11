---
---

delay = (ms, func) -> setTimeout func, ms

slideUp =
  distance: '10%'
  origin: 'bottom'
  viewFactor: 0.5
  duration: 600



# Scroll Reveal Code
window.sr = ScrollReveal()


sr.reveal '.main-video', slideUp

