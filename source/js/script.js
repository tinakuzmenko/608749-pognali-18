var nav = document.querySelector(".page-nav");
var navToggle = document.querySelector(".page-nav__toggler");

/* Убираем &--no-js */
nav.classList.remove("page-nav--no-js");

/* Раскрытие и закрытие навигации */

navToggle.addEventListener("click", function(){
  nav.classList.toggle("page-nav--active");
  nav.classList.toggle("page-nav--inactive");
  nav.classList.toggle("page-nav--white");
});
