$(document).ready(function() {
    $('.dropdown').click(function(event) {
       event.preventDefault();
       $('.dropdown-open').slideToggle();
    });
    $('.dropdown1').click(function(event) {
       event.preventDefault();
       $('.dropdown-open1').slideToggle();
    });
});








var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 22.654516, lng: 120.358532},
          zoom: 16,
styles: 
[
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#e0efef"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#1900ff"
            },
            {
                "color": "#c0e8e8"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f6b221"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f6b221"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 700
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#7dcdcd"
            }
        ]
    }
]
        });
   
        var marker = new google.maps.Marker({
        	position : {lat : 22.654303, lng : 120.358832},
        	map: map,
        	title : '集合點'
        })
        }   





        