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


    currentSlider = currentSlider < 4 ? currentSlider + 1 : 1;
}


toggleSlider();

setInterval(toggleSlider, 8000);



// down  arrow scrolling functionality

const downArrows = document.querySelectorAll(".down_arrow");

downArrows.forEach((arrow, index) => {
    arrow.addEventListener("click", function () {
        searchIdeaContainer.scrollIntoView({ behavior: "smooth" });
    });
});


// scroll up functionality

const scrollToHome = document.getElementById("scrollToHome");
const homeSection = document.querySelector(".home_section");

scrollToHome.addEventListener("click", function () {
    homeSection.scrollIntoView({ behavior: "smooth" });
});




