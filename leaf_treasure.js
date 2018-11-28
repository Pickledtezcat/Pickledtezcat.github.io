
var default_position = [35.855460054052756, 128.64783699078816]
var mymap = L.map('mapid').setView(default_position, 27);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

var marker = L.marker(default_position).addTo(mymap);

var game_key = "testing";
var game_data = {test_data: "Hello world"};

GJAPI.DataStoreSet (GJAPI.DATA_STORE_GLOBAL, game_key, game_data, pCallback)

function check_success() {
  console.log("success")
}
