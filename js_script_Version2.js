// Basic interactivity: theme toggle, year, smooth scroll, contact form handling
document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const themeBtn = document.getElementById('theme-toggle');
  const yearEl = document.getElementById('year');
  const copyBtn = document.getElementById('copy-email');
  const emailEl = document.getElementById('email');
  const contactForm = document.getElementById('contact-form');

  // set year
  yearEl.textContent = new Date().getFullYear();

  // initialize theme from localStorage or prefers-color-scheme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
    themeBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    root.setAttribute('data-theme', 'dark');
    themeBtn.textContent = '☀️';
  }

  themeBtn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    if (next === 'dark') {
      root.setAttribute('data-theme', 'dark');
      themeBtn.textContent = '☀️';
    } else {
      root.removeAttribute('data-theme');
      themeBtn.textContent = '🌙';
    }
    localStorage.setItem('theme', next);
  });

  // copy email
  copyBtn.addEventListener('click', async () => {
    const text = emailEl.textContent.trim();
    try {
      await navigator.clipboard.writeText(text);
      copyBtn.textContent = 'Copied!';
      setTimeout(() => (copyBtn.textContent = 'Copy email'), 2000);
    } catch {
      alert('Could not copy. Email: ' + text);
    }
  });

  // form submit -> open mailto with subject/body fallback
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
    const email = emailEl.textContent.trim();
    if (!name || !message) {
      alert('Please add your name and a message.');
      return;
    }
    const subject = encodeURIComponent(`Website message from ${name}`);
    const body = encodeURIComponent(message + '\n\n— ' + name);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  });

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
});