// script.js

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dotsContainer = document.querySelector('.dots');

    let currentIndex = 0;

    // Créer les points de navigation
    images.forEach((_, i) => {
        const dot = document.createElement('span');
        if (i === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
        dot.addEventListener('click', () => showSlide(i));
    });

    const dots = document.querySelectorAll('.dots span');

    function showSlide(index) {
        currentIndex = index;
        if (index < 0) currentIndex = images.length - 1;
        if (index >= images.length) currentIndex = 0;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Mise à jour des points
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    // Boutons
    prevBtn.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });
});
