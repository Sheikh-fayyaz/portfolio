
   document.addEventListener('DOMContentLoaded', () => {
      // Function to initialize a slider
      const initializeSlider = (sliderContainerId, nextButtonId, prevButtonId) => {
         const sliderContainer = document.getElementById(sliderContainerId);
         const slides = sliderContainer.querySelectorAll('.sItem');
         const nextButton = document.getElementById(nextButtonId);
         const prevButton = document.getElementById(prevButtonId);
         let currentIndex = 0;

         // Calculate the width of each slide dynamically
         const calculateSlideWidth = () => {
            const slideWidth = slides[0].offsetWidth + parseInt(window.getComputedStyle(slides[0]).marginRight);
            return slideWidth;
         };

         // Scroll to the exact slide based on currentIndex
         const scrollToCurrentSlide = () => {
            const slideWidth = calculateSlideWidth();
            sliderContainer.scrollTo({
               left: currentIndex * slideWidth,
               behavior: 'smooth',
            });
         };

         // Update currentIndex based on the current scroll position
         const updateCurrentIndex = () => {
            const slideWidth = calculateSlideWidth();
            currentIndex = Math.round(sliderContainer.scrollLeft / slideWidth);
         };

         // Scroll to the next slide
         nextButton.addEventListener('click', () => {
            const slideWidth = calculateSlideWidth();
            updateCurrentIndex(); // Ensure index is correct before scrolling
            if (currentIndex < slides.length - 1) {
               currentIndex++;
               scrollToCurrentSlide();
            }
         });

         // Scroll to the previous slide
         prevButton.addEventListener('click', () => {
            const slideWidth = calculateSlideWidth();
            updateCurrentIndex(); // Ensure index is correct before scrolling
            if (currentIndex > 0) {
               currentIndex--;
               scrollToCurrentSlide();
            }
         });

         // Align the slider after manual scrolling
         sliderContainer.addEventListener('scroll', () => {
            clearTimeout(sliderContainer.scrollTimeout);
            sliderContainer.scrollTimeout = setTimeout(() => {
               updateCurrentIndex();
            }, 100); // Debounce the scroll event
         });

         // Adjust alignment and currentIndex on resize
         window.addEventListener('resize', () => {
            const slideWidth = calculateSlideWidth();
            sliderContainer.scrollTo({
               left: currentIndex * slideWidth,
               behavior: 'auto',
            });
         });
      };

      // Initialize multiple sliders
      initializeSlider('sContainer0', 'next0', 'prev0');
      initializeSlider('sContainer1', 'next1', 'prev2');
      initializeSlider('sContainer2', 'next2', 'prev2');
      initializeSlider('sContainer3', 'next3', 'prev3');
      initializeSlider('sContainer4', 'next4', 'prev4');
      // Add more sliders as needed
   });
