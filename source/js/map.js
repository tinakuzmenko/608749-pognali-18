ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map(
    "map",
    {
      center: [59.938631, 30.323055],
      controls: [],
      zoom: 17
    },
    (myPlacemark = new ymaps.Placemark(
      [59.938631, 30.323055],
      {
        hintContent: "ул. Большая Конюшенная, 19/8"
      },
      {
        iconLayout: "default#image",
        iconImageHref: "img/map-marker.svg",
        iconImageSize: [54, 54]
      }
    ))
  );

  myMap.controls.add("geolocationControl", {
    float: "none",
    position: {
      top: "70px",
      left: "30px"
    }
  });

  myMap.controls.add("typeSelector", {
    float: "none",
    position: {
      top: "71px",
      left: "70px"
    }
  });

  myMap.controls.add("zoomControl", {
    size: "small",
    float: "none",
    position: {
      bottom: "100px",
      right: "30px"
    }
  });

  myMap.geoObjects.add(myPlacemark);
}
