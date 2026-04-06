// =========================================
// NUVEIL — Main JS
// =========================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Waitlist Form ---
  const form = document.getElementById('waitlistForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]').value;
      // TODO: connect to Kit / ConvertKit API or your email provider
      console.log('Waitlist signup:', email);
      form.innerHTML = '<p style="color: var(--gold-light); font-family: var(--font-serif); font-size: 1.2rem;">You\'re on the list. The veil lifts soon.</p>';
    });
  }

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
