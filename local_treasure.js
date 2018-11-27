var treasure_map;
var old_position;
var tolerance = 20;
var score = 0;
var all_markers = [];
var my_position = null;
var init = false;

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

  if(navigator.geolocation) {
      navigator.geolocation.watchPosition(set_my_position);
  }
  else {
      alert("Geolocation doesn't work in your browser");
      set_my_position({lat: 35.855460054052756, lng: 128.64783699078816})
  }
}



function set_my_position(get_my_position){
  my_position = get_my_position;
  update();
  }

function add_marker(lat, long, emoji) {
  var marker_position = new google.maps.LatLng(lat, long);
  var marker = new google.maps.Marker({
    position: marker_position,
    map: treasure_map,
    icon: emoji
  });

  var marker_data = {marker: marker, active:true}

  all_markers.push(marker_data);
}

function update() {
  setup();

  if (my_position != null) {
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

    collect_gold(my_pos);
  }
}

function setup() {
  if (init === false) {
    var my_latitude = my_position.coords.latitude;
    var my_longitude = my_position.coords.longitude;
    var my_pos = new google.maps.LatLng(my_latitude, my_longitude);

    populate_treasure()
    treasure_map.panTo(my_pos);
    init = true;
  }
}

function populate_treasure() {
  var variance = 0.002;
  var offset = variance * 0.5
  console.log(my_position.coords.latitude, my_position.coords.longitude)

  var new_latitude = my_position.coords.latitude - offset;
  var new_longitude = my_position.coords.longitude - offset;

  for(var i=0; i < 12; i++){

    var random_lat = new_latitude + (Math.random() * variance);
    var random_long = new_longitude + (Math.random() * variance);

    console.log(random_lat, random_long)
    add_marker(random_lat, random_long, "gold.png");

  }
}

function collect_gold(origin) {
  for(var i=0; i < all_markers.length; i++){

    if (all_markers[i].active === true) {
      var distance = 10000;
      if( distance < tolerance ){
        score += 10;
        alert("Found the gold" + "\n" + score + "points!");
        all_markers[i].marker.setMap(null);
        all_markers[i].active = false;
      }
    }
  }
}
