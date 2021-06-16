$(document).ready(function () {
  $(".slider__items").slick({
    slidesToShow: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  });
});

$(document).ready(function () {
  $(".company__content-rule_slider").slick({
    slidesToShow: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
  });
});

$(".company__content-rule_slider").on(
  "beforeChange",
  function (event, slick, currentSlide, nextSlide) {
    var sliderBg1 = document.getElementsByClassName(
      `slider__bg--${currentSlide}`
    )[0];
    var sliderBg2 = document.getElementsByClassName(
      `slider__bg--${nextSlide}`
    )[0];
    sliderBg1.classList.toggle("visible");
    sliderBg2.classList.toggle("visible");
  }
);
