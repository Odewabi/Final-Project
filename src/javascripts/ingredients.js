document.addEventListener('DOMContentLoaded', function() {
    const link = document.querySelector('a');
    const displayArea = document.getElementById('displayArea');

    link.addEventListener('click', function(event) {
        event.preventDefault();

        const sourcePageURL = link.getAttribute('href');
        const contentToDisplay = document.querySelector(sourcePageURL).innerHTML;

        displayArea.innerHTML = contentToDisplay;
    });
});
