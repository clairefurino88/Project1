       // This api requires that you consent to location sharing when prompted by your browser. If you see the error "The Geolocation service failed.", it means you did not give permission for the browser to locate you.
       var map, infoWindow,
       markers = [];
   function initMap() {
       map = new google.maps.Map(document.getElementById('map'), {
           center: { lat: 19.0759837, lng: 72.87765590000004 },
           zoom: 16
       });
       infoWindow = new google.maps.InfoWindow;
       if (navigator.geolocation) { //attempts to find current location of user
           navigator.geolocation.getCurrentPosition(function (position) {
               pos = {
                   lat: position.coords.latitude,
                   lng: position.coords.longitude
               };
               infoWindow.setPosition(pos); //if current location is found it will position 
               infoWindow.setContent('Location found.'); //the browser to be centered around that location
               infoWindow.open(map);
               map.setCenter(pos);
               locateGym(map, pos);
           }, function () { //if it cannot it will go to 'handleLocationError' and the user will recieve an error notification                    
               handleLocationError(true, infoWindow, map.getCenter());
           });
       } else {
           // Browser doesn't support Geolocation
           handleLocationError(false, infoWindow, map.getCenter());
       }
       var input = document.getElementById('pac-input');
       var searchBox = new google.maps.places.SearchBox(input);
       map.controls[google.maps.ControlPosition.TOP_LEFT].push(input); //searchbox located in top left corner of map
       // Bias the SearchBox results towards current map's viewport.
       map.addListener('bounds_changed', function () {
           searchBox.setBounds(map.getBounds());
       });
       searchBox.addListener('places_changed', function () { //recieves exact longitude and latitude of places
           var places = searchBox.getPlaces(),
               lat = searchBox.getPlaces()[0].geometry.location.lat(),
               lng = searchBox.getPlaces()[0].geometry.location.lng();
           map.setCenter(new google.maps.LatLng(lat, lng));
           pos = {
               lat: lat,
               lng: lng
           };
           infoWindow.setPosition(pos);
           infoWindow.setContent('Location found.');
           infoWindow.open(map);
           locateGym(map, pos)
       });
   }
   function locateGym(map, pos) { //places marker at gyms location
       places = new google.maps.places.PlacesService(map);
       var markerIcon = {
           url: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX22676869.jpg',
           size: new google.maps.Size(60, 60),
           origin: new google.maps.Point(0, 0),
           anchor: new google.maps.Point(12, 10),
           scaledSize: new google.maps.Size(30, 30)
       };                          //radius is in meter
       places.textSearch({ location: pos, radius: 3000, query: 'workout' }, callback); //uses word workout to place the marker image
       function callback(results, status) {
           //clearResults(results);
           clearMarkers();
           console.log(results);
           markers = [];
           for (var i = 0; i < results.length; i++) {
               // Use marker animation to drop the icons incrementally on the map.
               markers = new google.maps.Marker({
                   position: new google.maps.LatLng(results[i].geometry.location.lat(), results[i].geometry.location.lng()),
                   icon: markerIcon,
                   map: map
                   
               });

           }
       }
   }
   function clearMarkers() {
       for (var i = 0; i < markers.length; i++) {
           if (markers[i]) {
               markers[i].setMap(null);
           }
       }
       markers = [];
   }
   function handleLocationError(browserHasGeolocation, infoWindow, pos) {
       infoWindow.setPosition(pos);
       infoWindow.setContent(browserHasGeolocation ?
           'Error: The Geolocation service failed.' :
           'Error: Your browser doesn\'t support geolocation.');
       infoWindow.open(map);
   }

   /*var infowindow = new google.maps.InfoWindow({ // Create a new InfoWindow
    content:&quot;&lt;h3&gt;Snowdown Summit Cafe&lt;/h3&gt;&lt;p&gt;Railway Drive-through available.&lt;/p&gt;&quot; // HTML contents of the InfoWindow
});
 
google.maps.event.addListener(marker, 'click', function() { // Add a Click Listener to our marker
    infowindow.open(map,marker); // Open our InfoWindow
});*/