// Basic small interactivity: mobile menu toggle, year insertion, form success handling
document.addEventListener('DOMContentLoaded', function() {
  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const nav = document.querySelector('.nav');
  navToggle && navToggle.addEventListener('click', () => {
    if (!nav) return;
    if (nav.style.display === 'flex') {
      nav.style.display = '';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.background = 'rgba(11,17,28,0.95)';
      nav.style.position = 'absolute';
      nav.style.right = '20px';
      nav.style.top = '64px';
      nav.style.padding = '12px';
      nav.style.borderRadius = '10px';
    }
  });

  // Contact form - show simple message instead of page reload (if service returns success)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e){
      // If using a third-party form endpoint you may skip AJAX and let it post.
      // Here we show a friendly message and allow normal submission:
      // show a quick notice (non-blocking) then continue
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Sending...';
      }
      // If you want AJAX behavior, comment out the next lines and implement fetch() to Formspree or similar.
      setTimeout(() => {
        if (btn) { btn.disabled = false; btn.textContent = 'Send message'; }
        alert('If you used a real endpoint this would have been sent. Replace action in form with your Formspree or backend endpoint.');
      }, 700);
      // Allow the default submit to happen (remove if you do fetch)
      // e.preventDefault();
    });
  }
});
