// =========================================
// NUVEIL — Main JS
// =========================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Scroll fade-in ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.council-card, .step, .for-list li').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

});
