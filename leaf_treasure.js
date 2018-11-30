var default_position = [35.855460054052756, 128.64783699078816]
var mymap = L.map('mapid').setView(default_position, 20);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);
var player = document.getElementById('player_id');
player.onchange = function() {set_initial_markers()};

var added_markers = [];
var body_map = document.getElementById("body_map");
var player_marker = undefined;
var player_position = default_position;

initiate_map();

var clear_button = document.createElement("button");
clear_button.className = "button";
body_map.appendChild(clear_button);
clear_button.innerHTML = "clear data!";
clear_button.addEventListener('click', clear_keys, false);

mymap.on('click', onMapClick);

var x = document.createElement("button");
body_map.appendChild(x);
x.innerHTML = "Debug Info Here."

if(navigator.geolocation) {
    navigator.geolocation.watchPosition(update_position, showError, {enableHighAccuracy:true});
}
else {
    x.innerHTML = "Geolocation doesn't work in your browser";
}

// functions

function update_position(e) {
  player_position = [e.coords.lat, e.coords.lng]
  position_update()

  // if (player_marker != undefined) {
  //   player_marker.remove();
  // }

  // var location = e.latlng;
  // var lat = location.lat;
  // var long = location.lng;
  //
  // var player_marker = L.marker([lat, long], {icon: happy_icon}).addTo(mymap);
  // mymap.setView([lat, long], 20);

  x.innerHTML = player_position;

}

function position_update() {
  if (player_marker != undefined) {
    player_marker.remove();
  }

  player_marker = L.marker(player_position, {icon: happy_icon}).addTo(mymap);
  mymap.setView(player_position, 20);
}

function showError(error) {
  position_update()
  switch(error.code) {
      case error.PERMISSION_DENIED:
          x.innerHTML = "User denied the request for Geolocation."
          break;
      case error.POSITION_UNAVAILABLE:
          x.innerHTML = "Location information is unavailable."
          break;
      case error.TIMEOUT:
          x.innerHTML = "The request to get user location timed out."
          break;
      case error.UNKNOWN_ERROR:
          x.innerHTML = "An unknown error occurred."
          break;
  }
}

function clear_keys () {
  var player_id = player.value;
  remove_markers()
  GJAPI.DataStoreRemove(GJAPI.DATA_STORE_GLOBAL, player_id, function(pResponse) {
    alert("Data store (" + player_id + ") Cleared.\n Set to " + pResponse.message);
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

function send_data(some_data) {
  var player_id = player.value;
  var data = JSON.stringify(some_data);
  GJAPI.DataStoreSet (GJAPI.DATA_STORE_GLOBAL, player_id, data, function(pResponse)
  {
      if(pResponse.success)
          console.log("Data saved: " + pResponse.message)
  });
}

function get_data() {
  var player_id = player.value;
  GJAPI.DataStoreFetch (GJAPI.DATA_STORE_GLOBAL, player_id, function(pResponse)
  {
      if(pResponse.success)
        var my_data = JSON.parse(pResponse.data);
        if (my_data == undefined) {
          alert("data unreadable")
        }

        return my_data
  });
}

function add_data(new_data) {
  var player_id = player.value;
  GJAPI.DataStoreFetch (GJAPI.DATA_STORE_GLOBAL, player_id, function(pResponse)
  {
      if(pResponse.success)
        var my_data = JSON.parse(pResponse.data);
        if (my_data == undefined) {
          my_data = new Array();
        }

        if (new_data != undefined) {
          my_data.push(new_data)
        }

        send_data(my_data)
        add_markers(my_data)
  });
}

function initiate_map () {
  set_initial_markers()
}

function change_player () {
  set_initial_markers()
}

function set_initial_markers() {
  add_data(undefined)
}

function remove_markers() {
  for (var i = 0; i < added_markers.length; i++) {
    added_markers[i].remove();
  }

  added_markers = [];
}

function add_markers(marker_list) {
  remove_markers();

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

function onMapClick(e) {
  var click_location = e.latlng
  var emoji = document.getElementById('icon_to_use').value;
  var marker_data = {location: click_location, icon:emoji};
  var player_data = add_data(marker_data)

}
