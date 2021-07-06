$(document).ready(function () {
  $(".slider__items").slick({
    slidesToShow: 1,
    dots: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 5000,
  });
});

$(document).ready(function () {
  $(".company__content-rule_slider").slick({
    slidesToShow: 1,
    dots: true,
    arrows: false,
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

$("aside-menu")
  .find(".company__aside-menu_btn")
  .click(function (e) {
    e.preventDefault();
    var section = $(this).attr("id");
    $("html, body").animate({
      scrollTop: $(section).offset().top,
    });
  });

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 98,
          },
          1000,
          function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });
