
    const slides = document.querySelectorAll('.slideshow img');
    let currentIndex = 0;

    function showSlide(index) {
        // Hide all slides
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${100 * (i - index)}%)`;
        })
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide
        showSlide(currentIndex);
    }

    // Initialize the slideshow
    showSlide(currentIndex);

    // Set the interval to automatically change slides every 3 seconds
    setInterval(nextSlide, 3000);
