var nav = document.querySelector(".page-nav");
var navToggle = document.querySelector(".page-nav__toggler");

/* Раскрытие и закрытие навигации */

navToggle.addEventListener("click", function(){
  nav.classList.toggle("page-nav--inactive");
  nav.classList.toggle("page-nav--active");
});
