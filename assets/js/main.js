var arrow = document.querySelector("[data-arrow]");
var changeClick = document.querySelector("[data-changeClick]");
var box = document.querySelector("[data-box]");
var firstSide = document.querySelector("[data-first-side]");
var elSpan = document.querySelector("[data-first-span-last-side]")
var elIMG = document.querySelector("[data-folder]")
var elHeading = document.querySelector("[data-files-H3]")
arrow.addEventListener("click", function (evt) {
  changeClick.classList.toggle("d-none");
  arrow.classList.toggle("rotate_arrow");
  box.classList.toggle("for-box");
  firstSide.classList.toggle("for_first--side")
  elHeading.classList.toggle("forElHeading")
});