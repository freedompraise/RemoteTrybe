document.getElementById("pay-now").addEventListener("click", function () {
  var fullName = document.getElementById("name").value;
  var message = `Hello, I am ${fullName}. I want to make a payment for the training.`;
  if (fullName) {
    var whatsappUrl =
      "https://wa.me/2349060038374?text=" + encodeURIComponent(message);
    window.open(whatsappUrl, "_blank");
  } else {
    alert("Please fill in your name.");
  }
});

function openModal(imageSrc) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  modalImage.src = `images/screenshots/${imageSrc}`;
  modal.classList.remove("hidden");
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.classList.add("hidden");
}
window.addEventListener("click", function (event) {
  const modal = document.getElementById("imageModal");
  if (event.target === modal) {
    closeModal();
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
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const closeModal = document.getElementById("close-modal");

const slidingSections = document.querySelectorAll(".sliding-section");

// Modal logic
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  document.body.classList.remove("modal-open");
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.add("hidden");
    document.body.classList.remove("modal-open");
  }
});

// Animate sliding sections
slidingSections.forEach((section) => {
  section.style.animationPlayState = "running";
});
