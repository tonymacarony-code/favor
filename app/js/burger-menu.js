$(document).ready(function () {
  $(".header__menu-burger").click(function () {
    $(".header__menu-burger").toggleClass("open-menu");
    $(".header__menu").toggleClass("open-menu");
  });
});
