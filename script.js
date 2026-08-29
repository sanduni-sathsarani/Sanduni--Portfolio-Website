const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Load saved theme on page load
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});


const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

const links = document.querySelectorAll('.nav-links a');

// Highlight on click
links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});