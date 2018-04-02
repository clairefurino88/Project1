        // This api requires that you consent to location sharing when prompted by your browser. 
       //If you see the error "The Geolocation service failed.", it means you did not give permission 
       //for the browser to locate you.
       var map
       var infoWindow,
       markers = [];
       function initMap() { //initiate the map

    //The JavaScript class that represents a map is the 'Map class'.
    //I created a new instance of this class using the JavaScript new operator.
    //When I created a new map instance, I specified a <div> HTML element in the page
    //as a container which is 'map'. 
    //HTML nodes are children of the JavaScript document object, 
    //and we obtain a reference to this element via the document.getElementById() method.
    //This code defines a variable (named map) and assigns that variable to a new Map object. 
    //The function Map() is known as a constructor 

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
               map.setCenter(pos); //centers position of map
               locateGym(map, pos);
           }, function () { //if it cannot it will go to 'handleLocationError' and the user will recieve an error notification                    
               handleLocationError(true, infoWindow, map.getCenter());
           });
       } else {
           // Browser doesn't support Geolocation
           handleLocationError(false, infoWindow, map.getCenter());
       }

       var input = document.getElementById('pac-input'); //input information seen in div created in html element
       var searchBox = new google.maps.places.SearchBox(input); //input of the search box
       map.controls[google.maps.ControlPosition.TOP_LEFT].push(input); //searchbox located in top left corner of map
       // Bias the SearchBox results towards current map's viewport.
       map.addListener('bounds_changed', function () { //after you search one location it lets you change the bounds
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
       places = new google.maps.places.PlacesService(map); //uses google operator to find the location

       var markerIcon = {
           url: 'http://benzlee.com/images/design/gym.jpg',
           size: new google.maps.Size(60, 60),
           origin: new google.maps.Point(0, 0), //google maps parameters for placing the icon image
           anchor: new google.maps.Point(12, 10),
           scaledSize: new google.maps.Size(30, 30)
        }; 

                              //radius is in meter
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
                   map: map,
                   title: 'Click for more details'
               });
           }
         /*  var infoWindow = new google.maps.InfoWindow({
            content: "<b>Gym: </b>"
        });
        google.maps.event.addListener(marker, 'click', function(){
             infoWindow.open(map, marker)
        });
        window.onload = init;*/
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
   function handleLocationError(browserHasGeolocation, infoWindow, pos) {//if permission is not given or the location does not exist, 
       infoWindow.setPosition(pos);                                        //this will be displayed
       infoWindow.setContent(browserHasGeolocation ?
           'Error: The Geolocation service failed.' :
           'Error: Your browser doesn\'t support geolocation.');
       infoWindow.open(map);
   }


  //Still needs functionality: Hovering banner: Click for more details
  //Google Maps Info Window: Place name, address, phone number, website, google maps clickthrough
   
   /*var infowindow = new google.maps.InfoWindow({ // Create a new InfoWindow
    content:&quot;&lt;h3&gt;Snowdown Summit Cafe&lt;/h3&gt;&lt;p&gt;Railway Drive-through available.&lt;/p&gt;&quot; // HTML contents of the InfoWindow
});
 
google.maps.event.addListener(marker, 'click', function() { // Add a Click Listener to our marker
    infowindow.open(map,marker); // Open our InfoWindow
});*/