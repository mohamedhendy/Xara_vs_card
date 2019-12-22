$('#hendi1').on('click', function () {
    google.maps.event.trigger(gmarkers[0], 'click');
})
$('#hendi2').on('click', function () {
    google.maps.event.trigger(gmarkers[1], 'click');
})
$('#hendi3').on('click', function () {
    google.maps.event.trigger(gmarkers[2], 'click');
})


// custom functions
var gmarkers = [];
var locations = []
for (var i = 0; i < dataItem.length; i++) {
    locations.push(dataItem[i])
}

function initMap() {

    var mapOptions = {
        center: new google.maps.LatLng(locations[0].lat, locations[0].lng),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ebe3cd"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#523735"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f1e6"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#c9b2a6"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#dcd2be"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#ae9e90"
              }
            ]
          },
          {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dfd2ae"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dfd2ae"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#93817c"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#a5b076"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#447530"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f1e6"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#fdfcf8"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f8c967"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#e9bc62"
              }
            ]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e98d58"
              }
            ]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#db8555"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#806b63"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dfd2ae"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#8f7d77"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#ebe3cd"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dfd2ae"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#b9d3c2"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#92998d"
              }
            ]
          }
        ]
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    //Create and open InfoWindow.
    var infoWindow = new google.maps.InfoWindow();

    for (var i = 0; i < locations.length; i++) {

        var data = locations[i];
        var myLatlng = new google.maps.LatLng(data.lat, data.lng);

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: data.title,
        });

        gmarkers.push(marker);
        //Attach click event to the marker.
        (function (marker, data) {
            google.maps.event.addListener(marker, "click", function (e) {
                //Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.

                var myvar = '<div data-slick=\'{"slidesToShow": 1, "slidesToScroll": 1}\'>' +
                    '    <div class="responsive" style = "width:200px;min-height:40px;font-weight:bold;text-align:center; padding: 0 0 20px 0;">' +
                    '      <img src="images/map/' + data.img1 + '">' +
                    '      <img src="images/map/' + data.img2 + '">' +
                    '      <img src="images/map/' + data.img3 + '">' +
                    '    </div>' +
                    '  </div>';

                infoWindow.setContent(myvar + "<div style = 'width:200px;min-height:40px;font-weight:bold;text-align:center;'>" + data.address1 + "<br>" + data.address2 + "<br>" + data.open + "</div>")

                google.maps.event.addListenerOnce(infoWindow, 'domready', function () {

                    $('.responsive').slick({
                        centerMode: true,
                        centerPadding: '0',
                        slidesToShow: 1,
                        responsive: [
                            {
                                breakpoint: 768,
                                settings: {
                                    arrows: true,
                                    centerMode: true,
                                    centerPadding: '0',
                                    slidesToShow: 1
                                }
                            },
                            {
                                breakpoint: 480,
                                settings: {
                                    arrows: true,
                                    centerMode: true,
                                    centerPadding: '0',
                                    slidesToShow: 1
                                }
                            }
                        ]
                    });

                });

                infoWindow.open(map, marker);
            });
        })(marker, data);
    }

}