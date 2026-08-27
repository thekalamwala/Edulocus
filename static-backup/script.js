// Mobile menu toggle
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}

// Mobile dropdown expand
document.querySelectorAll('.nav .dropdown > a').forEach(link => {
  link.addEventListener('click', e => {
    if (window.innerWidth <= 920) {
      e.preventDefault();
      link.parentElement.classList.toggle('open');
    }
  });
});

// Close mobile nav on link click
document.querySelectorAll('.nav a').forEach(a => {
  a.addEventListener('click', () => {
    if (window.innerWidth <= 920) nav.classList.remove('open');
  });
});

// FAQ accordion
document.querySelectorAll('.faq-item button').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.classList.toggle('open');
  });
});

// Contact / booking form (demo only - no backend)
document.querySelectorAll('form[data-demo]').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const msg = form.querySelector('.form-msg');
    if (msg) {
      msg.textContent = 'Thank you! Your details have been recorded. Our team will contact you shortly.';
      msg.style.color = '#2c5282';
      msg.style.fontWeight = '600';
    }
    form.reset();
  });
});

// Year in footer
document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});
