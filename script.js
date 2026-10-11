const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('visible'));
}

document.getElementById('year').textContent = new Date().getFullYear();

const copyButton = document.querySelector('.copy-email');
const feedback = document.querySelector('.copy-feedback');
if (copyButton && feedback) {
  copyButton.addEventListener('click', async () => {
    const email = 'Ongeraian9@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      feedback.textContent = 'Email address copied.';
    } catch {
      feedback.textContent = 'Please copy this address: ' + email;
    }
  });
}
