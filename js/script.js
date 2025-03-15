document.getElementById("join-waitlist").addEventListener("click", function () {
  var fullName = document.getElementById("name").value.trim();
  if (fullName) {
    var message = `Hello, I am ${fullName}. I want to join the next cohort of the VA training.`;
    var whatsappUrl = "https://chat.whatsapp.com/JaioelyLk3JJCiWBzPVqtO";
    window.open(whatsappUrl, "_blank");
  } else {
    alert("Please fill in your name.");
  }
});

// Mobile menu toggle
const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

// Toggle menu visibility on mobile
menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// SLIDING
// Select the container with the infinite scroll animation
const slidingContainer = document.querySelector(".animate-infinite-slide");

// Set a flag to track if the animation is paused
let isPaused = false;
let resumeTimeout;

// Function to pause the animation
const pauseAnimation = () => {
  if (!isPaused) {
    slidingContainer.style.animationPlayState = "paused"; // Pause the animation
    isPaused = true;
    clearTimeout(resumeTimeout); // Clear any existing resume timer
    // Resume the animation after 5 seconds
    resumeTimeout = setTimeout(() => {
      slidingContainer.style.animationPlayState = "running";
      isPaused = false;
    }, 5000);
  }
};

// Attach a click event listener to all the testimonial cards
const testimonialCards = document.querySelectorAll(".testimonial-cards > div");
testimonialCards.forEach((card) => {
  card.addEventListener("click", pauseAnimation);
});
