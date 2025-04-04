// export default function decorate(block) {
//     let currentIndex = 0;
//     const slides = document.querySelectorAll('.carousel > div'); // Select all individual slide divs
//     const totalSlides = slides.length;
    
//     function moveToNextSlide() {
//       currentIndex = (currentIndex + 1) % totalSlides; // Loop to the first slide after the last one
//       const carousel = document.querySelector('.carousel');
//       carousel.style.transform = `translateX(-${currentIndex * 100}%)`; // Move the carousel to the next slide
//     }
    
//     // Change slides every 3 seconds
//     setInterval(moveToNextSlide, 3000);
    
//     // Optional: Add manual control buttons (left/right arrows) if needed
    
//   }

// document.addEventListener("DOMContentLoaded", function () {
//     const carousel = document.querySelector(".carousel");
//     const prevButton = document.querySelector(".default-content-wrapper p").firstChild;
//     const nextButton = document.querySelector(".default-content-wrapper p").lastChild;
    
//     let currentIndex = 0;
//     const items = carousel.children.length;
//     const itemWidth = 100; // Assuming each slide takes 100% width

//     function updateCarousel() {
//         carousel.style.transform = `translateX(-${currentIndex * itemWidth}%)`;
//     }

//     prevButton.addEventListener("click", function () {
//         if (currentIndex > 0) {
//             currentIndex--;
//         } else {
//             currentIndex = items - 1; // Loop back to last slide
//         }
//         updateCarousel();
//     });

//     nextButton.addEventListener("click", function () {
//         if (currentIndex < items - 1) {
//             currentIndex++;
//         } else {
//             currentIndex = 0; // Loop back to first slide
//         }
//         updateCarousel();
//     });
// });
