/**
 * nav-highlighter.js
 * Automatically detects the current page and applies the 'active' class
 * to the corresponding link in the header navigation.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Select all links within the header's navigation block
    const navLinks = document.querySelectorAll('header nav a');
    
    // Get the full path of the current URL
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        // 1. Clear any existing 'active' classes or aria attributes
        link.classList.remove('active');
        link.removeAttribute('aria-current');

        // 2. Get the link's href value (e.g., 'certifications.html')
        const linkHref = link.getAttribute('href');

        // 3. Check if the current URL path ends with the link's href.
        // This ensures the link highlights correctly whether the page is accessed via
        // '/certifications.html' or '/subdirectory/certifications.html'
        if (currentPath.endsWith(linkHref)) {
            // 4. Apply the styling class and the accessibility attribute
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
});