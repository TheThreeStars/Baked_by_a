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
