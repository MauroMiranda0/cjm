document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('navbarToggle');
    const navbar = document.getElementById('mainNavbar');
    toggle?.addEventListener('click', () => {
        navbar?.classList.toggle('open');
    });
});