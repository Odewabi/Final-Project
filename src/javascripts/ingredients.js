document.addEventListener("DOMContentLoaded", function () {
    const ingredientCardLinks = document.querySelectorAll(".ingredient-card .card-link");

    ingredientCardLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const ingredientContainer = document.querySelector(".ingredient-container");
            const foodName = this.getAttribute("data-food");

            // Fetch the ingredient content based on the foodName
            fetch(`./ingredients/${foodName}.html`)
                .then(response => response.text())
                .then(data => {
                    // Update the ingredient container with the fetched data
                    ingredientContainer.innerHTML = data;
                })
                .catch(error => {
                    console.error("Error fetching ingredient content:", error);
                });
        });
    });
});
