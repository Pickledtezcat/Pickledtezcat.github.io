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
var flip_cards = document.getElementById("flip_cards");

sentences.addEventListener('click', go_to_sentences, false);
console.log(sentences.classList)

function go_to_sentences() {
  var selected = selector.value
	window.location.assign("sentences.html?"+selected);
}

pictures.addEventListener('click', go_to_pictures, false);
function go_to_pictures() {
  var selected = selector.value
	window.location.assign("pictures.html?"+selected);
}

home.addEventListener('click', go_to_home, false);
function go_to_home() {
  var selected = selector.value
	window.location.assign("index.html");
}

flying_pictures.addEventListener('click', go_to_flying_pictures, false);
function go_to_flying_pictures() {
  var selected = selector.value
	window.location.assign("flying_pictures.html?"+selected);
}

flip_cards.addEventListener('click', go_to_flip_cards, false);
function go_to_flip_cards() {
  var selected = selector.value
	window.location.assign("flip_cards.html?"+selected);
}
