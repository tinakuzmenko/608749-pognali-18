var nav = document.querySelector(".page-nav");
var navToggle = document.querySelector(".page-nav__toggler");
var headerContent = document.querySelector(".page-header__content-wrapper");
var businessPopupOpen = document.querySelector(".add-profile__business-link");
var businessPopup = document.querySelector(".business-popup");
var businessPopupClose = document.querySelector(".business-popup__close-button");

nav.classList.remove("page-nav--no-js");
headerContent.classList.remove("page-header__content-wrapper--no-js");

navToggle.addEventListener("click", function(){
  nav.classList.toggle("page-nav--active");
  nav.classList.toggle("page-nav--inactive");
  nav.classList.add("page-nav--white");
  if(pageYOffset === 0 && nav.classList.contains("page-nav--inactive")){
    nav.classList.remove("page-nav--white");
  }
});

window.addEventListener("scroll", function(){
  nav.classList.add("page-nav--white");
  nav.classList.add("page-nav--scrolled");
  if(pageYOffset === 0 && nav.classList.contains("page-nav--inactive")) {
    nav.classList.remove("page-nav--white");
    nav.classList.remove("page-nav--scrolled");
  }
});

businessPopupOpen.addEventListener("click", function(event){
  event.preventDefault();
  businessPopup.classList.add("business-popup--active");
});

businessPopupClose.addEventListener("click", function(){
  businessPopup.classList.remove("business-popup--active");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    businessPopup.classList.remove("business-popup--active");
  }
});
