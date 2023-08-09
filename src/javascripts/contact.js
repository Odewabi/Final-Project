document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const cancelButton = document.getElementById('cancel-button');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from actually submitting

        // Show an alert
        alert('Message has been submitted! Thank you for contacting.');

        // Clear form fields
        contactForm.reset();
    });

    cancelButton.addEventListener('click', function() {
        // Clear form fields
        contactForm.reset();
    });
});