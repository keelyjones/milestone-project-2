var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 51.752021, lng: -1.257726},
    zoom: 8
  });
}