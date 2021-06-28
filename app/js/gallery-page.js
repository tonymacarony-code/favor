// TODO: touch events
const divs = document.querySelectorAll("div");
const body = document.body;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

if (prev && next) {
  Array.prototype.slice.call(divs).forEach(function (el) {
    el.addEventListener("click", function () {
      this.classList.toggle("show");
      body.classList.toggle("active");
    });
  });
  prev.addEventListener("click", function () {
    const show = document.querySelector(".show");
    const event = document.createEvent("HTMLEvents");
    event.initEvent("click", true, false);

    show.previousElementSibling.dispatchEvent(event);
    show.classList.remove("show");
    body.classList.toggle("active");
  });

  next.addEventListener("click", function () {
    const show = document.querySelector(".show");
    const event = document.createEvent("HTMLEvents");
    event.initEvent("click", true, false);

    show.nextElementSibling.dispatchEvent(event);
    show.classList.remove("show");
    body.classList.toggle("active");
  });
}
