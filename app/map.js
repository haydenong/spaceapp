// var map;
// var marker;

var markerCount;

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 17.277,
            lng: 121.807
        },
        zoom: 20,
        mapTypeId: 'satellite'
    });

    map.addListener('click', function (e) {
        placeMarkerAndPanTo(e.latLng, map);
    });
    // marker = new google.maps.Marker({
    //     map: map,
    //     draggable: true,
    //     animation: google.maps.Animation.DROP,
    //     position: {
    //         lat: 17.277,
    //         lng: 121.807
    //     }
    // });
    // marker.addListener('click', toggleBounce);
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

function placeMarkerAndPanTo(latLng, map) {
  var marker = new google.maps.Marker({
    position: latLng,
    map: map
  });
//   map.panTo(latLng);
}