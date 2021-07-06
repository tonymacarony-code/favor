$(function () {
  $(".header__burger").on("click", function (event) {
    $(".header__burger, .header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

var btnContainer = document.getElementById("header__menu");

if (btnContainer) {
  var btns = btnContainer.getElementsByClassName("header__menu-link");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}
