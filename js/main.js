document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger-menu');
  const nav = document.querySelector('nav');
  const overlay = document.querySelector('.overlay');
  const navLinks = document.querySelectorAll('.nav-menu li a');
  
  // Toggle menu on hamburger click
  hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      nav.classList.toggle('active');
      overlay.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
  });
  
  // Close menu when overlay is clicked
  overlay.addEventListener('click', function() {
      hamburger.classList.remove('active');
      nav.classList.remove('active');
      overlay.classList.remove('active');
      document.body.classList.remove('no-scroll');
  });
  
  // Close menu when a navigation link is clicked
  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          hamburger.classList.remove('active');
          nav.classList.remove('active');
          overlay.classList.remove('active');
          document.body.classList.remove('no-scroll');
      });
  });
});
