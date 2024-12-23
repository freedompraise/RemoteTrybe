function processPayment() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (!name || !email) {
    alert("Please fill out all fields.");
    return;
  }

  // Paystack Payment Integration
  const handler = PaystackPop.setup({
    key: "your-paystack-public-key",
    email: email,
    amount: 25000 * 100, // Amount in kobo
    currency: "NGN",
    ref: `VA_${Math.floor(Math.random() * 100000)}`,
    callback: function (response) {
      alert("Payment successful! Transaction ref: " + response.reference);
      window.location.href = `https://wa.me/2349060038374?text=Hello, my payment ref is ${response.reference}`;
    },
    onClose: function () {
      alert("Payment window closed.");
    },
  });
  handler.openIframe();
}
