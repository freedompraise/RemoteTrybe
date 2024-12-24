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
