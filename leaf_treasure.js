var default_position = [35.855460054052756, 128.64783699078816]
var mymap = L.map('mapid').setView(default_position, 27);
var all_markers = [];
var added_markers = [];

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

initiate_map();

var body_map = document.getElementById("body_map");
var game_key = "testing";

var set_button = document.createElement("button");
set_button.className = "button";
body_map.appendChild(set_button);
set_button.innerHTML = "click to add data!";
set_button.addEventListener('click', activate_set, false);

function activate_set() {
	send_data(game_key, all_markers);
}

var get_button = document.createElement("button");
get_button.className = "button";
body_map.appendChild(get_button);
get_button.innerHTML = "click to get data!";
get_button.addEventListener('click', activate_get, false);

function activate_get() {
	get_data(game_key);
}

var clear_button = document.createElement("button");
clear_button.className = "button";
body_map.appendChild(clear_button);
clear_button.innerHTML = "clear data!";
clear_button.addEventListener('click', clear_keys, false);

function clear_keys () {
  GJAPI.DataStoreRemove(GJAPI.DATA_STORE_GLOBAL, game_key, function(pResponse) {
    alert(pResponse.message);
  });
}

function check_data_keys () {
  GJAPI.DataStoreGetKeys (GJAPI.DATA_STORE_GLOBAL, function(pResponse)
  {
    if(!pResponse.keys) return;

    for(var i = 0; i < pResponse.keys.length; ++i)
        console.info(pResponse.keys[i].key);
  });
}

function send_data(game_key, some_data) {

  var data = JSON.stringify(some_data);
  GJAPI.DataStoreSet (GJAPI.DATA_STORE_GLOBAL, game_key, data, function(pResponse)
  {
      if(pResponse.success)
          alert(pResponse.message);
  });
}

function get_data(game_key) {
  GJAPI.DataStoreFetch (GJAPI.DATA_STORE_GLOBAL, game_key, function(pResponse)
  {
      if(pResponse.success)
        var my_data = JSON.parse(pResponse.data);
        if (my_data == undefined) {
          alert("data unreadable")
        }

        return my_data
  });
}

function initiate_map () {
  var marker = L.marker(default_position).addTo(mymap);

  set_initial_markers()
}

function set_initial_markers() {
  var player_id = document.getElementById('player_id').value;
  var my_data = get_data(player_id);
  if (my_data == undefined) {
    my_data = []
  }

  add_markers(my_data)
}

function add_markers(marker_list) {
  var gold_icon = L.icon({
      iconUrl: 'images/gold.png',
      shadowUrl: 'images/gold_shadow.png',

      iconSize:     [32, 32], // size of the icon
      shadowSize:   [48, 48], // size of the shadow
      iconAnchor:   [16, 32], // point of the icon which will correspond to marker's location
      shadowAnchor: [18, 40],  // the same for the shadow
      popupAnchor:  [16, -32] // point from which the popup should open relative to the iconAnchor
  });

  var flag_icon = L.icon({
      iconUrl: 'images/flag.png',
      shadowUrl: 'images/flag_shadow.png',

      iconSize:     [32, 32], // size of the icon
      shadowSize:   [48, 48], // size of the shadow
      iconAnchor:   [16, 32], // point of the icon which will correspond to marker's location
      shadowAnchor: [18, 40],  // the same for the shadow
      popupAnchor:  [16, -32] // point from which the popup should open relative to the iconAnchor
  });

  for (var i = 0; i < added_markers.length; i++) {
    added_markers[i].remove();
  }
  
  added_markers = [];

  for (var i = 0; i < marker_list.length; i++) {
      var marker = marker_list[i]
      var location = marker.location
      var icon = marker.icon
      var place_icon = gold_icon;
      if (icon === "flag") {
        place_icon = flag_icon
      }
      var lat = location.lat
      var long = location.lng

      var new_marker = L.marker([lat, long], {icon: place_icon}).addTo(mymap);
      added_markers.push(new_marker);
      }
}

var popup = L.popup();
function onMapClick(e) {
  var player_id = document.getElementById('player_id').value;
  var emoji = document.getElementById('icon_to_use').value;

  var click_location = e.latlng
  var marker_data = {location: click_location, icon:emoji};

  var my_data = get_data(player_id);
  if (my_data == undefined) {
    my_data = []
  }

  my_data.push(marker_data)
  send_data(player_id, my_data)
  add_markers(my_data)

  popup
      .setLatLng(e.latlng)
      .setContent("marker to be added at " + e.latlng.toString())
      .openOn(mymap);
}

mymap.on('click', onMapClick);
