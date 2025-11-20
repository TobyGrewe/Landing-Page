// Back to top button functionality
const backToTopButton = document.getElementById('back-to-top');
const ctaSection = document.querySelector('.cta-section');
const footer = document.querySelector('footer');

window.addEventListener('scroll', () => {
    // Show/hide button based on scroll position
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }

    // Check if button is over CTA section or footer
    const buttonRect = backToTopButton.getBoundingClientRect();
    let isOverDarkSection = false;

    if (ctaSection) {
        const ctaRect = ctaSection.getBoundingClientRect();
        if (ctaRect.top < buttonRect.bottom && ctaRect.bottom > buttonRect.top) {
            isOverDarkSection = true;
        }
    }

    if (footer) {
        const footerRect = footer.getBoundingClientRect();
        if (footerRect.top < buttonRect.bottom && footerRect.bottom > buttonRect.top) {
            isOverDarkSection = true;
        }
    }

    // Apply inverted style if over any dark section
    if (isOverDarkSection) {
        backToTopButton.classList.add('over-footer');
    } else {
        backToTopButton.classList.remove('over-footer');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});