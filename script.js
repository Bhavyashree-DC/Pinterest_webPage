document.addEventListener('DOMContentLoaded', function () {
  let currentSlider = 1;

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

  // Add event listeners to your buttons
  const buttons = document.querySelectorAll('.dots-list button');
  buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
          toggleSlider(index + 1); // Index starts from 0
      });
  });

  // Automatically start with the first slider
  toggleSlider(currentSlider);

  // Add an interval to automatically switch sliders
  setInterval(function () {
      currentSlider = currentSlider < 3 ? currentSlider + 1 : 1;
      toggleSlider(currentSlider);
  }, 8000);
});


// down  arrow scrolling functionality

const arrowDownIcons = document.querySelectorAll(".down_arrow_outer i");

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




