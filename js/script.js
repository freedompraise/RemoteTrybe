

// Mobile menu toggle
const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

// Toggle menu visibility on mobile
menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

//close menu when outside or on a link is clicked
document.addEventListener("click", (event) => {
  const isMenuButton = menuButton.contains(event.target);
  const isMobileMenu = mobileMenu.contains(event.target);

  if (!isMenuButton && !isMobileMenu) {
    mobileMenu.classList.add("hidden");
  }
});

// close menu on scroll
window.addEventListener("scroll", () => {
  if (!mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.add("hidden");
  }
});

/// Select the container with the infinite scroll animation
const track = document.querySelector('.slider-track');
let isPaused = false;
let resume;

const pause = () => {
  if (!isPaused) {
    track.style.animationPlayState = 'paused';
    isPaused = true;
    clearTimeout(resume);
    resume = setTimeout(() => {
      track.style.animationPlayState = 'running';
      isPaused = false;
    }, 5000);
  }
};

document.querySelectorAll('.slider-track img').forEach(img => {
  img.addEventListener('click', pause);
});


// testimonials.js

document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('testimonial-modal');
  const modalImg = document.getElementById('modal-image');
  const testimonials = Array.from(document.querySelectorAll('.testimonial-card'));
  let currentIndex = 0;

  // Open modal and set current index
  function openTestimonial(imgSrc, index) {
    currentIndex = index;
    modalImg.src = imgSrc;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
    document.addEventListener('keydown', handleKeyDown);
  }

  function closeTestimonial() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
    document.removeEventListener('keydown', handleKeyDown);
  }

  function navigateTestimonial(direction) {
    currentIndex = (currentIndex + direction + testimonials.length) % testimonials.length;
    const newImgSrc = testimonials[currentIndex].querySelector('img').src;
    modalImg.src = newImgSrc;
  }

  function handleKeyDown(event) {
    switch(event.key) {
      case 'Escape':
        closeTestimonial();
        break;
      case 'ArrowLeft':
        navigateTestimonial(-1);
        break;
      case 'ArrowRight':
        navigateTestimonial(1);
        break;
    }
  }

  // Add click events to all testimonial cards
  testimonials.forEach((card, index) => {
    card.addEventListener('click', function() {
      const imgSrc = this.querySelector('img').src;
      openTestimonial(imgSrc, index);
    });
  });

  // Close when clicking outside image
  modal.addEventListener('click', function(e) {
    if (e.target === this) closeTestimonial();
  });

  // Navigation arrows (add these to your HTML)
  document.getElementById('modal-prev').addEventListener('click', () => navigateTestimonial(-1));
  document.getElementById('modal-next').addEventListener('click', () => navigateTestimonial(1));

  // Make functions available globally if needed
  window.openTestimonial = openTestimonial;
  window.closeTestimonial = closeTestimonial;
});