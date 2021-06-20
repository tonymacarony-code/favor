import mixitup from "mixitup";

var containerEl = document.getElementById("MixItUp1");

var mixer = mixitup(containerEl, {
  selectors: {
    target: ".products__item",
  },
});

// Get the container element
var btnContainer = document.getElementById("products__tabs");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("link--products");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

var btnContainer = document.getElementById("products__pagination");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("products__pagination-link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
