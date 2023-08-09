document.addEventListener('DOMContentLoaded', function() {
    const foodCards = document.querySelectorAll('.food-card');
    const ingredientContainer = document.querySelector('.ingredient-container');

    foodCards.forEach(function(card) {
        const foodName = card.getAttribute('data-food');
        card.addEventListener('click', function() {
            fetchIngredientContent(foodName);
        });
    });

    function fetchIngredientContent(foodName) {
        fetch(`./ingredients/${foodName}.html`)
            .then(response => response.text())
            .then(data => {
                ingredientContainer.innerHTML = data;
            })
            .catch(error => {
                console.error('Error fetching ingredient content:', error);
            });
    }
});