const clickedHamburger = document.querySelector('.hamburgerToggle');
const navbar = document.querySelector('.navbar');
const hamburgerIcon = document.querySelector('.hamburger-icon')

clickedHamburger.addEventListener('click', () => {
    navbar.classList.toggle('navbar-toggle-visible');
    clickedHamburger.classList.toggle('hamburger-change');
});