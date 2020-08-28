var nav = document.querySelector(".page-nav");
var navToggle = document.querySelector(".page-nav__toggler");
var headerContent = document.querySelector(".page-header__content-wrapper");

nav.classList.remove("page-nav--no-js");
headerContent.classList.remove("page-header__content-wrapper--no-js");

navToggle.addEventListener("click", function() {
  nav.classList.toggle("page-nav--active");
  nav.classList.toggle("page-nav--inactive");
  nav.classList.add("page-nav--white");
  if (pageYOffset === 0 && nav.classList.contains("page-nav--inactive")) {
    nav.classList.remove("page-nav--white");
  }
});

window.addEventListener("scroll", function() {
  nav.classList.add("page-nav--white");
  nav.classList.add("page-nav--scrolled");
  nav.classList.remove(".page-nav--inner");
  if (pageYOffset === 0 && nav.classList.contains("page-nav--inactive")) {
    nav.classList.remove("page-nav--white");
    nav.classList.remove("page-nav--scrolled");
    nav.classList.add("page-nav--inner");
  }
});
