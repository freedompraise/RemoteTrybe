document.getElementById('pay-button').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const phone = document.getElementById('phone').value;

    // Validate email domain
    if (!email.endsWith('@gmail.com')) {
        alert('Only Gmail addresses are accepted');
        return;
    }

    PaystackPop.setup({
        key: 'pk_test_e040894066555652a49ebd640df02a553ebf3eb3', // Replace with your test public key
        email: email,
        amount: amount * 100, // Convert to kobo
        metadata: {
            custom_fields: [
                { display_name: "First Name", variable_name: "first_name", value: firstName },
                { display_name: "Last Name", variable_name: "last_name", value: lastName },
                { display_name: "Phone", variable_name: "phone", value: phone }
            ]
        },
        onSuccess: (transaction) => {
            alert('Payment Successful! Reference: ' + transaction.reference);
            // You can add redirect or other success logic here
        },
        onCancel: () => {
            alert('Payment was canceled');
        }
    }).openIframe();
});