document.addEventListener('DOMContentLoaded', () => {
    const hamburguer = document.querySelector('.hamburguer');
    const nav = document.querySelector('.nav-links');

    hamburguer.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        hamburguer.classList.toggle('toggle');
    });
});
let slidesIndex = 1;
showSlides(slidesIndex);

function plusSlides(n) {
    showSlides(slidesIndex += n);
}
function currentSlide(n) {
    showSlides(slidesIndex = n);
}
function showSlides(n) {
    let slides = document.getElementsByClassName("carrousel-slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slidesIndex = 1 }
    if (n < 1) { slidesIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slidesIndex - 1].style.display = "block";
    dots[slidesIndex - 1].className += " active";
}
setInterval(() => {
    showSlides(slidesIndex += 1);
}, 5000);