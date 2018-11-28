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

// GJAPI.DataStoreSet (GJAPI.DATA_STORE_GLOBAL, game_key, game_data, check_success);
// var data_keys = GJAPI.DataStoreGetKeys (GJAPI.DATA_STORE_GLOBAL, check_success);
var game_data = GJAPI.DataStoreFetch (GJAPI.DATA_STORE_GLOBAL, game_key, function(pResponse)
{
    if(pResponse.success)
        alert(pResponse.data.test_data);
});
