import mixitup from "mixitup";

var containerEl = document.getElementById("MixItUp1");
if (containerEl) {
  // ПЕРЕДАТЬ АНИМАЦИЮ ЛЕШЕ
  var mixer = mixitup(containerEl, {
    selectors: {
      target: ".products__item",
    },
    animation: {
      enable: false,
    },
  });
}

var btnContainer = document.getElementById("products__tabs");

if (btnContainer) {
  var btns = btnContainer.getElementsByClassName("link--products");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}

var btnContainer = document.getElementById("products__pagination");

if (btnContainer) {
  var btns = btnContainer.getElementsByClassName("products__pagination-link");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}
