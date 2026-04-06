// =========================================
// NUVEIL — Main JS
// =========================================

document.addEventListener('DOMContentLoaded', () => {

  // Signal that JS is running — enables CSS animations
  // Without this, all .reveal elements are visible by default (no JS = no blank page)
  document.body.classList.add('js-ready')

  // --- Scroll reveal ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.08 })

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

})
