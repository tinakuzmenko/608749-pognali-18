var filter = document.querySelector(".filter");
var filterToggler = filter.querySelector(".filter__toggler");
var filterRegions = filter.querySelector(".filter__region-list");
var filterTogglerText = filter.querySelector(".filter__toggler-text");
var filterInner = filter.querySelector(".filter__inner");

filterToggler.addEventListener("click", function() {
  filterToggler.classList.toggle("filter__toggler--open");
  filterToggler.classList.toggle("filter__toggler--close");
  filterInner.classList.toggle("filter__inner--active");

  if (document.documentElement.clientWidth < 768) {
    filterRegions.classList.toggle("filter__region-list--active");
  }
});
