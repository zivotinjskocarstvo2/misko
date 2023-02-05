// slider
var responsiveSlider = function () {
  var slider = document.getElementById("slider");
  var sliderWidth = slider.offsetWidth;
  var slideList = document.getElementById("slideWrap");
  var count = 1;
  var items = slideList.querySelectorAll("li").length;

  window.addEventListener("resize", function () {
    sliderWidth = slider.offsetWidth;
  });

  var nextSlide = function () {
    if (count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if ((count = items)) {
      slideList.style.left = "0px";
      count = 1;
    }
  };

  setInterval(function () {
    nextSlide();
  }, 3000);
};

window.onload = function () {
  responsiveSlider();
};

// burger
const burger = document.querySelector(".burger");
const narrowMenu = document.querySelector(".narrow-menu");
const narrowMenuItems = document.querySelectorAll(".narrow-menu-item");

burger.addEventListener("click", function () {
  narrowMenu.classList.toggle("no-display");
});

narrowMenuItems.forEach((item) => {
  item.addEventListener("click", function () {
    narrowMenu.classList.toggle("no-display");
  });
});
