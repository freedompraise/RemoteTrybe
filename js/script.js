

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
