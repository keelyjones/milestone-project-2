var infoWindow, map, places, photo;
var markers = [];
var autocomplete;
// var hostnameRegexp = new RegExp('^https?://.+?/');
var museum_icon = "assets/mapMarkers/museums.png";
var park_icon = "assets/mapMarkers/museums.png";
var restaurant_icon = "assets/mapMarkers/restaurants.png";
var hotel_icon = "assets/mapMarkers/hotels.png";

function initMap() {
    var mapOptions = {
        zoom: 14,
        center: { lat: 51.752021, lng: -1.257726 },
        mapTypeId: 'roadmap'
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    function searchPlaces() {
        // Get data from the desired location.
        const inputSelectGroup = document.getElementById("input-select-group").value;
        if (inputSelectGroup == 1) {
            var search = {
                bounds: map.getBounds(),
                types: ['museum'],

            };
        } else if (inputSelectGroup == 2) {
            search = {
                bounds: map.getBounds(),
                types: ['park'],

            };
        } else if (inputSelectGroup == 3) {
            search = {
                bounds: map.getBounds(),
                types: ['restaurant'],

            };
        } else if (inputSelectGroup == 4) {
            search = {
                bounds: map.getBounds(),
                types: ['lodging']
            };
        }
    }

    places.nearbySearch(search, function (results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResults();
            clearMarkers();
            // Create a marker for each place found
            for (var i = 0; i < results.length; i++) {
                // Use marker animation to drop the icons incrementally on the map.
                markers[i] = new google.maps.Marker({
                    position: results[i].geometry.location,
                    animation: google.maps.Animation.DROP,
                    icon: null
                });
                // If the user clicks on a marker, show details of that place
                // in an info window.
                markers[i].placeResult = results[i];
                google.maps.event.addListener(markers[i], 'click', showInfoWindow);
                setTimeout(dropMarker(i), i * 100);
                addResult(results[i], i);
                // Set icons for markers on the map 
                if (inputSelectGroup == 1) {
                    markers[i].icon = museum_icon
                } else if (inputSelectGroup == 2) {
                    markers[i].icon = park_icon
                } else if (inputSelectGroup == 3) {
                    markers[i].icon = restaurant_icon
                } else {
                    if (inputSelectGroup == 3) {
                        markers[i].icon = hotel_icon
                    }
                }

            }
        }
    });

    function clearMarkers() {
        for (var i = 0; i < markers.length; i++) {
            if (markers[i]) {
                markers[i].setMap(null);
            }
        }
        markers = [];
    }

    function dropMarker(i) {
        return function () {
            markers[i].setMap(map);
        };
    }


}


infoWindow = new google.maps.InfoWindow({
    content: document.getElementById('info-content')
});

places = new google.maps.places.PlacesService(map);
autocomplete = new google.maps.places.Autocomplete((
    document.getElementById('search-places')));

let geocoder = new google.maps.Geocoder();
document.getElementById('button').addEventListener('click', function () {
    geocodeAddress(geocoder, map);
});

// Converts addresses like (street address, city, town etc ) into geographic coordinates (like latitude and longitude).
function geocodeAddress(geocoder) {
    const address = document.getElementById('search-places').value;
    geocoder.geocode({ 'address': address }, function(results, status) {
        if (status === 'OK') {
            map.fitBounds(results[0].geometry.viewport);

            searchPlaces();
        } else {
            $("#enter-city").html(`<h3 class = "enter-input">Please enter an Valid Location!</h3>`);
            $("#map").removeClass("map");
            document.getElementById("background-image-container").style.height = "100vh";
        }
    });
}

function showInfoWindow() {

    let marker = this;
    places.getDetails({ placeId: marker.placeResult.place_id },

        function (place, status) {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
                return;
            }
            infoWindow.open(map, marker);
            buildIWContent(place);

        });
}

//    let locations = filterByType(type)

//    function updateCategory() {
//        let type = select.Value;
//    };

// bind the location.type (from JS) to each select option (in index.html) in the dropdown
// create a function that onClick the map shows the locations of that type
// three things that needs to speak to each other - JS types speak to map, select speaks to map which filters the JS data

