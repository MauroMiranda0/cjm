document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menuToggle');
    const navbar = document.getElementById('navbar');
    if (toggle && navbar) {
        toggle.addEventListener('click', () => {
            navbar.classList.toggle('open');
        });
    }
});