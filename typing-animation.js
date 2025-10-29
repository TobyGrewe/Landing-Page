// Typing animation for hero title
document.addEventListener('DOMContentLoaded', () => {
  const textElement = document.querySelector('.typing-text');
  
  // Only run if the element exists (on homepage)
  if (!textElement) return;
  
  const fullText = textElement.textContent;
  textElement.textContent = '';
  textElement.style.opacity = '1';
  
  let charIndex = 0;
  
  function typeChar() {
    if (charIndex < fullText.length) {
      textElement.textContent += fullText.charAt(charIndex);
      charIndex++;
      
      // Random typing speed for more natural feel
      const typingSpeed = Math.random() * 100 + 50;
      setTimeout(typeChar, typingSpeed);
    } else {
      // Add blinking cursor after typing is done
      textElement.classList.add('typing-complete');
    }
  }
  
  // Start typing after a short delay
  setTimeout(typeChar, 500);
});