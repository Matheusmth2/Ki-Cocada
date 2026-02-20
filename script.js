document.addEventListener('DOMContentLoaded', () => {
    const hamburguer = document.querySelector('.hamburguer');
    const nav = document.querySelector('.nav-links');

    hamburguer.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        hamburguer.classList.toggle('toggle');
    });
});

/**Ajustando automaticamente o tamanho do texto conforme o tamanho da tela.*/
function adjustTextSize() {
    const textElements = document.querySelectorAll('.responsive-text');
    textElements.forEach(element => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1024) {
            element.style.fontSize = '1.5rem';
        } else if (screenWidth >= 768) {
            element.style.fontSize = '1.25rem';
        } else {
            element.style.fontSize = '1rem';
        }
    });
}