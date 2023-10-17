
let currentSlider = 1;

function toggleSlider() {
    // Hide all sliders
    const sliders = document.querySelectorAll('.slider-container');
    sliders.forEach(slider => {
        slider.style.display = 'none';
    });

    // Show the current slider
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

    currentSlider = currentSlider < 4 ? currentSlider + 1 : 1;
}

toggleSlider();

setInterval(toggleSlider, 8000);



// down  arrow scrolling functionality

// Get all arrow down icons with the common class
const arrowDownIcons = document.querySelectorAll(".down_arrow_outer i");

// Add click event listeners to scroll to the corresponding home section
arrowDownIcons.forEach((icon, index) => {
    icon.addEventListener("click", function () {
        const searchIdeaContainer = document.getElementById(`sliderDownArrow${index + 1}`);
        searchIdeaContainer.scrollIntoView({ behavior: "smooth" });
    });
});


// scroll up functionality

const scrollToHome = document.getElementById("scrollToHome");
const homeSection = document.querySelector(".home_section");

scrollToHome.addEventListener("click", function () {
    homeSection.scrollIntoView({ behavior: "smooth" });
});




