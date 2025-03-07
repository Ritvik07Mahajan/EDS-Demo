export default function decorate(block) {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel > div'); // Select all individual slide divs
    const totalSlides = slides.length;
    
    function moveToNextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides; // Loop to the first slide after the last one
      const carousel = document.querySelector('.carousel');
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`; // Move the carousel to the next slide
    }
    
    // Change slides every 3 seconds
    setInterval(moveToNextSlide, 3000);
    
    // Optional: Add manual control buttons (left/right arrows) if needed
    
  }