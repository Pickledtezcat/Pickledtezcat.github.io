var treasure_map;
var old_position;
var tolerance = 15;
var score = 0;

var data =`35.855460054052756 128.64783699078816 gold.png
35.85638218832172 128.6478889497498 gold.png
35.85625887926299 128.64874253820324 gold.png
35.856823968297526 128.6475035729609 gold.png
35.85780992946153 128.6477831825033 gold.png
35.85704342831896 128.64926849913445 gold.png
35.856512928583 128.6502909489966 gold.png
35.85243077705208 128.64670755891132 gold.png
35.858541318569614 128.6464851939728 gold.png`;

var markers = data.split("\n");
var all_markers = [];

function initMap() {

  treasure_map = new google.maps.Map(document.getElementById('treasure_map'), {
  zoom: 19,
  center: {lat: 35.855460054052756, lng: 128.64783699078816}
});

old_position = new google.maps.Marker({
  position: {lat: 35.855460054052756, lng: 128.64783699078816},
  map: treasure_map,
  icon: "happy.png"
});

for(var i=0; i < markers.length; i++){
  var marker_data = markers[i].trim();
  marker_data = marker_data.split(" ");
  var latitude = marker_data[0];
  var longditude = marker_data[1];
  var emoji = marker_data[2];

  var marker_position = new google.maps.LatLng(latitude, longditude);
  var marker = new google.maps.Marker({
    position: marker_position,
    map: treasure_map,
    icon: emoji
  });

  all_markers.push(marker);

  }

if(navigator.geolocation) {
    navigator.geolocation.watchPosition(set_my_position);
}
else {
    alert("Geolocation doesn't work in your browser");
}

}

function set_my_position(my_position){
  old_position.setMap(null);
  var my_latitude = my_position.coords.latitude;
  var my_longitude = my_position.coords.longitude;
  var my_pos = new google.maps.LatLng(my_latitude, my_longitude);
  var my_marker = new google.maps.Marker({
    position: my_pos,
    map: treasure_map,
    icon: "happy.png"
  });
  old_position = my_marker;

  var next_gen = [];
  for(var i=0; i < all_markers.length; i++){
    var distance = google.maps.geometry.spherical.computeDistanceBetween(my_pos, all_markers[i].getPosition());
    if( distance < tolerance ){
      score += 10;
      alert("Found the gold" + "\n" + score + "points!");
      all_markers[i].setMap(null);
    } else {
      next_gen.push(all_markers[i]);
    }

    }
    all_markers = next_gen;
    next_gen = [];
  }
