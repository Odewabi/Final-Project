document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const cancelButton = document.getElementById('cancel-button');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        alert('Message has been submitted! Thank you for contacting.');

        contactForm.reset();
    });

    cancelButton.addEventListener('click', function() {
        contactForm.reset();
    });
});