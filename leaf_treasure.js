console.log("version 2.3")
var default_position = [35.855460054052756, 128.64783699078816]
var mymap = L.map('mapid').setView(default_position, 27);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

var marker = L.marker(default_position).addTo(mymap);

var game_key = "testing";
var emoji = document.getElementById('icon_to_use').value;
var game_data = {test_data: "Hello world", emoji:emoji};

clear_keys(game_key)

fuction clear_keys (game_key) {
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
