var default_position = [35.855460054052756, 128.64783699078816]
var mymap = L.map('mapid').setView(default_position, 27);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

var marker = L.marker(default_position).addTo(mymap);

var leaf_body = document.getElementById("body");

var game_key = "testing";
var emoji = document.getElementById('icon_to_use').value;
emoji.className = "select";
var game_data = {test_data: "Hello world", emoji:emoji};

var set_button = document.createElement("button");
set_button.className = "button";
leaf_body.appendChild(set_button);
set_button.innerHTML = "click to add data!";
set_button.addEventListener('click', activate_set, false);

function activate_set() {
	send_data(game_key, game_data);

}

var get_button = document.createElement("button");
get_button.className = "button";
leaf_body.appendChild(get_button);
get_button.innerHTML = "click to get data!";
get_button.addEventListener('click', activate_get, false);

function activate_get() {
	data = get_data(game_key);
  console.log(data)
}

var clear_button = document.createElement("button");
clear_button.className = "button";
leaf_body.appendChild(clear_button);
clear_button.innerHTML = "clear data!";
clear_button.addEventListener('click', activate_clear, false);

function activate_clear() {
	data = clear_keys(game_key);
}

function clear_keys (game_key) {
  GJAPI.DataStoreRemove(GJAPI.DATA_STORE_GLOBAL, game_key);
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
          alert(my_data);
  });
}
