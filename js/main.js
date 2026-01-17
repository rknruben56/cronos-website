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

  // Gallery Filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterButtons.forEach(button => {
      button.addEventListener('click', function() {
          // Remove active class from all buttons
          filterButtons.forEach(btn => btn.classList.remove('active'));
          // Add active class to clicked button
          this.classList.add('active');

          const filterValue = this.getAttribute('data-filter');

          galleryItems.forEach(item => {
              if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                  item.classList.remove('hide');
              } else {
                  item.classList.add('hide');
              }
          });
      });
  });

  // Lightbox functionality
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.querySelector('.lightbox-caption');
  const closeBtn = document.querySelector('.lightbox-close');
  const prevBtn = document.querySelector('.lightbox-prev');
  const nextBtn = document.querySelector('.lightbox-next');

  let currentImageIndex = 0;
  let visibleImages = [];

  // Update visible images based on current filter
  function updateVisibleImages() {
      visibleImages = Array.from(galleryItems).filter(item => !item.classList.contains('hide'));
  }

  // Open lightbox when clicking on gallery item
  galleryItems.forEach((item, index) => {
      item.addEventListener('click', function() {
          updateVisibleImages();
          currentImageIndex = visibleImages.indexOf(item);
          showImage(currentImageIndex);
          lightbox.style.display = 'block';
          document.body.style.overflow = 'hidden';
      });
  });

  // Show image in lightbox
  function showImage(index) {
      if (visibleImages.length === 0) return;

      const img = visibleImages[index].querySelector('img');
      const caption = visibleImages[index].querySelector('.gallery-overlay h3');

      lightboxImg.src = img.src;
      lightboxCaption.textContent = caption ? caption.textContent : '';
  }

  // Close lightbox
  closeBtn.addEventListener('click', function() {
      lightbox.style.display = 'none';
      document.body.style.overflow = 'auto';
  });

  // Close lightbox when clicking outside image
  lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
          lightbox.style.display = 'none';
          document.body.style.overflow = 'auto';
      }
  });

  // Previous image
  prevBtn.addEventListener('click', function() {
      currentImageIndex = (currentImageIndex - 1 + visibleImages.length) % visibleImages.length;
      showImage(currentImageIndex);
  });

  // Next image
  nextBtn.addEventListener('click', function() {
      currentImageIndex = (currentImageIndex + 1) % visibleImages.length;
      showImage(currentImageIndex);
  });

  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
      if (lightbox.style.display === 'block') {
          if (e.key === 'ArrowLeft') {
              currentImageIndex = (currentImageIndex - 1 + visibleImages.length) % visibleImages.length;
              showImage(currentImageIndex);
          } else if (e.key === 'ArrowRight') {
              currentImageIndex = (currentImageIndex + 1) % visibleImages.length;
              showImage(currentImageIndex);
          } else if (e.key === 'Escape') {
              lightbox.style.display = 'none';
              document.body.style.overflow = 'auto';
          }
      }
  });
});
