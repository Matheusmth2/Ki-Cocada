document.addEventListener('DOMContentLoaded', () => {
    const hamburguer = document.querySelector('.hamburguer');
    const nav = document.querySelector('.nav-links');

    hamburguer.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        hamburguer.classList.toggle('toggle');
    });
});