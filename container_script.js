var parameters = location.search.split("?")[1]
console.log(parameters)
var selector = document.getElementById("selector");
if (parameters != undefined) {
  selector.value = parameters
} else {
  selector.value = "week1"
}

var sentences = document.getElementById("sentences");
var pictures = document.getElementById("pictures");
var flying_pictures = document.getElementById("flying_pictures");
var home = document.getElementById("home");

sentences.addEventListener('click', go_to_sentences, false);
function go_to_sentences() {
  sentences.className = "active"
  pictures.className = "inactive"
  home.className = "inactive"
  flying_pictures.className = "inactive"
  var selected = selector.value
	window.location.assign("sentences.html?"+selected);
}

pictures.addEventListener('click', go_to_pictures, false);
function go_to_pictures() {
  sentences.className = "inactive"
  pictures.className = "active"
  home.className = "inactive"
  flying_pictures.className = "inactive"
  var selected = selector.value
	window.location.assign("pictures.html?"+selected);
}

home.addEventListener('click', go_to_home, false);
function go_to_home() {
  sentences.className = "inactive"
  pictures.className = "inactive"
  home.className = "active"
  flying_pictures.className = "inactive"
  var selected = selector.value
	window.location.assign("index.html");
}

flying_pictures.addEventListener('click', go_to_flying_pictures, false);
function go_to_flying_pictures() {
  sentences.className = "inactive"
  pictures.className = "inactive"
  home.className = "inactive"
  flying_pictures.className = "active"
  var selected = selector.value
	window.location.assign("flying_pictures.html?"+selected);
}
