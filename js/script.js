

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
const slidingContainer = document.querySelector(".animate-infinite-slide");

// Set a flag to track if the animation is paused
let isPaused = false;
let resumeTimeout;

// Function to pause the animation
const pauseAnimation = () => {
  if (!isPaused) {
    slidingContainer.style.animationPlayState = "paused";
    isPaused = true;
    clearTimeout(resumeTimeout);
    resumeTimeout = setTimeout(() => {
      slidingContainer.style.animationPlayState = "running";
      isPaused = false;
    }, 5000);
  }
};

// Attach a click event listener to all images within the sliding container
const slidingImages = document.querySelectorAll(".animate-infinite-slide img");
slidingImages.forEach((img) => {
  img.addEventListener("click", pauseAnimation);
});
