const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
const slideInterval = 5000; //5 seconds


function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i == index);
    })
    
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);

}

// INIT first slide
showSlide(currentIndex);

// Start slideshows
setInterval(nextSlide, slideInterval);