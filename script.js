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
