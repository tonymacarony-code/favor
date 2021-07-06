var btnContainer = document.getElementById("aside-menu");

if (btnContainer) {
  var btns = btnContainer.getElementsByClassName("company__aside-menu_btn");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}
