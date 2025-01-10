document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const navCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (navCollapse.classList.contains('show')) {
                new bootstrap.Collapse(navCollapse).toggle();
            }
        });
    });
});

function filterCakes(category) {
    let cards = document.querySelectorAll('.cake-card');
    
    // Show all if 'all' is clicked
    if (category === 'all') {
        cards.forEach(card => {
            card.style.display = 'block';
        });
    } else {
        // Hide all first
        cards.forEach(card => {
            card.style.display = 'none';
        });

        // Show matching category
        let selectedCards = document.querySelectorAll('.' + category);
        selectedCards.forEach(card => {
            card.style.display = 'block';
        });
    }
}

// Show all cakes by default
filterCakes('all');

function filterCakes(category) {
    let cakes = document.querySelectorAll('.cake-card');
    
    // Show all cakes if "All Cakes" is selected
    if (category === 'all') {
        cakes.forEach(cake => {
            cake.style.display = 'block';
        });
    } else {
        // Hide all cakes first
        cakes.forEach(cake => {
            cake.style.display = 'none';
        });

        // Show filtered cakes
        let selectedCakes = document.querySelectorAll('.' + category);
        selectedCakes.forEach(cake => {
            cake.style.display = 'block';
        });
    }

    // Highlight the active button
    let buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Add active class to clicked button
    let activeButton = document.querySelector(`[onclick="filterCakes('${category}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}


