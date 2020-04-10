    // Create marker icons:  
    let icons = {
        museums: {
            icon: '/assets/mapMarkers/museums.png'
        },
        attractions: {
            icon: 'assets/mapMarkers/default.png'
        },
        parks: {
            icon: '/assets/mapMarkers/parks.png'
        },
        colleges: {
            icon: '/assets/mapMarkers/schools.png'
        }
    };

    // Location markers:
    let markerData = [
        {
            position: new google.maps.LatLng(51.755213, -1.258065),
            type: 'colleges',
            title: 'Balliol College'
        }, {
            position: new google.maps.LatLng(51.752935, -1.255150),
            type: 'colleges',
            title: 'Brasenose College'
        }, {
            position: new google.maps.LatLng(51.750053, -1.255630),
            type: 'colleges',
            title: 'Christ Church College'
        }, {
            position: new google.maps.LatLng(51.751060, -1.253772),
            type: 'colleges',
            title: 'Corpus Christi College'
        }, {
            position: new google.maps.LatLng(51.771858, -1.285064),
            type: 'parks',
            title: 'Port Meadow'
        }, {
            position: new google.maps.LatLng(51.762456, -1.253113),
            type: 'parks',
            title: 'University Parks'
        }, {
            position: new google.maps.LatLng(51.751666, -1.246910),
            type: 'parks',
            title: 'Botanic Gardens'
        }, {
            position: new google.maps.LatLng(51.748204, -1.251124),
            type: 'parks',
            title: 'Christ Church Meadows'
        }, {
            position: new google.maps.LatLng(51.752352, -1.229344),
            type: 'parks',
            title: 'South Park'
        }, {
            position: new google.maps.LatLng(51.758809, -1.255478),
            type: 'museums',
            title: 'Natural History Museum'
        }, {
            position: new google.maps.LatLng(51.758763, -1.255939),
            type: 'museums',
            title: 'Pitt Rivers Museum'
        }, {
            position: new google.maps.LatLng(51.755555, -1.259909),
            type: 'museums',
            title: 'Ashmolean museum'
        }, {
            position: new google.maps.LatLng(51.754434, -1.255146),
            type: 'museums',
            title: 'History of Science Museum'
        }, {
            position: new google.maps.LatLng(51.748988, -1.255927),
            type: 'museums',
            title: 'Bate Collection of Musical Instruments'
        }, {
            position: new google.maps.LatLng(51.751232, -1.257071),
            type: 'museums',
            title: 'Museum of Oxford'
        }, {
            position: new google.maps.LatLng(51.750857, -1.257664),
            type: 'museums',
            title: 'The Story Museum'
        }, {
            position: new google.maps.LatLng(51.754259, -1.253731),
            type: 'attractions',
            title: 'Bodleian Library'
        }, {
            position: new google.maps.LatLng(51.751841, -1.262995),
            type: 'attractions',
            title: 'Oxford Castle & Prison'
        }, {
            position: new google.maps.LatLng(51.752981, -1.256355),
            type: 'attractions',
            title: 'Covered Market'
        }, {
            position: new google.maps.LatLng(51.752064, -1.257653),
            type: 'attractions',
            title: 'Carfax Tower'
        }, {
            position: new google.maps.LatLng(51.755436, -1.258309),
            type: 'attractions',
            title: 'Martyrs Memorial'
        },
    ];

    for (var i = 0; i < markerData.length; i++) {
        var marker = new google.maps.Marker({
            position: markerData[i].position,
            icon: icons[markerData[i].type].icon,
            map: map,
            title: markerData[i].title
        });
    };