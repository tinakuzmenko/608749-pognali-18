var accordion = document.querySelector(".accordion");
var accordionButtons = accordion.querySelectorAll(".accordion__item");

for (var i = 0; i < accordionButtons.length; i++) {
  accordionButtons[i].addEventListener("click", function() {
    var title = this.querySelector(".accordion__title");
    title.classList.toggle("accordion__title--collapse");

    var accordionList = this.nextElementSibling;
    accordionList.classList.toggle("accordion__list--hidden");

    console.log(this)
  });
}
