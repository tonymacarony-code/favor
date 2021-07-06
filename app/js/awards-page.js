const body = document.body;
var photoTh = $(".picture"),
  overlay = $(".overlay");

photoTh.on("click", function () {
  body.classList.toggle("active-popup");
  var dataPhoto = $(this).attr("src"),
    dataTitle = $(this).data("title");

  overlay.show();

  $(".picture-big").attr("src", dataPhoto);
  $(".photo-title").text(dataTitle);
});

overlay.on("click", function () {
  body.classList.toggle("active-popup");
  $(this).hide();
});
