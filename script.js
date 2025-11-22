// document.addEventListener('DOMContentLoaded', () => {
//     const themeToggle = document.querySelector('.theme-toggle');
//     const body = document.body;
//     const currentTheme = localStorage.getItem('theme');

//     // Load the saved theme preference on page load
//     if (currentTheme) {
//         body.setAttribute('data-theme', currentTheme);
//         updateToggleIcon(currentTheme);
//     } else {
//         // Default to dark mode if no preference is set (based on your previous setting)
//         body.setAttribute('data-theme', 'dark');
//         updateToggleIcon('dark');
//         localStorage.setItem('theme', 'dark');
//     }

//     // Function to change the button icon
//     function updateToggleIcon(theme) {
//         if (theme === 'dark') {
//             themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
//         } else {
//             themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
//         }
//     }

//     // Event listener for the toggle button
//     themeToggle.addEventListener('click', () => {
//         let newTheme;
//         if (body.getAttribute('data-theme') === 'dark') {
//             newTheme = 'light';
//         } else {
//             newTheme = 'dark';
//         }
        
//         body.setAttribute('data-theme', newTheme);
//         localStorage.setItem('theme', newTheme);
//         updateToggleIcon(newTheme);
//     });

//     // Back to Top button logic
//     const backToTopButton = document.querySelector('.back-to-top');
//     window.addEventListener('scroll', () => {
//         if (window.scrollY > 300) {
//             backToTopButton.classList.add('visible');
//         } else {
//             backToTopButton.classList.remove('visible');
//         }
//     });

//     backToTopButton.addEventListener('click', () => {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         });
//     });
// });