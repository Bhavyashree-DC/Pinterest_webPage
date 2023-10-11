let currentSlider = "slider1";

function toggleSlider() {
  const slider1 = document.getElementById("slider1");
  const slider2 = document.getElementById("slider2");
  const slider3 = document.getElementById("slider3");
  const slider4 = document.getElementById("slider4");

  if (currentSlider === "slider1") {
    slider1.style.animationName = "fade1";
    slider2.style.animationName = "fade2";
    slider3.style.animationName = "fade3";
    slider4.style.animationName = "fade4";
    currentSlider = "slider2";
  } else if (currentSlider === "slider2") {
    slider1.style.animationName = "fade4";
    slider2.style.animationName = "fade3";
    slider3.style.animationName = "fade2";
    slider4.style.animationName = "fade1";
    currentSlider = "slider3";
  } else if (currentSlider === "slider3") {
    slider1.style.animationName = "fade3";
    slider2.style.animationName = "fade2";
    slider3.style.animationName = "fade1";
    slider4.style.animationName = "fade4";
    currentSlider = "slider4";
  } else {
    slider1.style.animationName = "fade2";
    slider2.style.animationName = "fade1";
    slider3.style.animationName = "fade4";
    slider4.style.animationName = "fade3";
    currentSlider = "slider1";
  }
}

toggleSlider();

// Toggle the slider every 8 seconds
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




