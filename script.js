document.addEventListener('DOMContentLoaded', function () {
    let currentSlider = 1;
    const totalSlides = 4; 

    function toggleSlider(sliderNumber) {
        // Hide all sliders
        const sliders = document.querySelectorAll('.slider-container');
        sliders.forEach(slider => {
            slider.style.display = 'none';
        });

        // Show the clicked slider
        currentSlider = sliderNumber;
        const current = document.getElementById(`slider${currentSlider}`);
        current.style.display = 'block';

        // Get the background color of the corresponding down_arrow_outer
        const downArrowOuter = document.querySelector(`#slider${currentSlider} .down_arrow_outer`);
        const bgColor = window.getComputedStyle(downArrowOuter).backgroundColor;

        // Update the dot button background color
        const dotButtons = document.querySelectorAll('.dots-list button');
        dotButtons.forEach((dotButton, index) => {
            dotButton.style.backgroundColor = index + 1 === currentSlider ? bgColor : '';
        });
    }

  
    const buttons = document.querySelectorAll('.dots-list button');
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            toggleSlider(index + 1); 
            clearInterval(autoSlideInterval); 
            autoSlide(); 
        });
    });

    
    toggleSlider(currentSlider);

    
    const autoSlideIntervalTime = 6000; 
    let autoSlideInterval;

    function autoSlide() {
        autoSlideInterval = setInterval(function () {
            currentSlider = currentSlider < totalSlides ? currentSlider + 1 : 1;
            toggleSlider(currentSlider);
        }, autoSlideIntervalTime);
    }


    autoSlide();

    const downArrowIcons = document.querySelectorAll('.down_arrow_icon');

    downArrowIcons.forEach(function (icon) {
        icon.addEventListener('click', function () {
            const sectionId = icon.getAttribute('data-section');
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // scroll up functionality
    const scrollToHome = document.getElementById("scrollToHome");
    const homeSection = document.querySelector(".home_section");

    scrollToHome.addEventListener("click", function () {
        homeSection.scrollIntoView({ behavior: "smooth" });
    });
});

