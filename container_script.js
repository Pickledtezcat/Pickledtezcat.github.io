var top_nav = document.getElementById("top_nav")

function add_top_nav_button(label, id_tag) {
  top_nav_button = document.createElement("button")
  top_nav_button.innerHTML = label
  top_nav_button.id = id_tag;

  top_nav.appendChild(top_nav_button);

  return top_nav_button
}

var parameters = location.search.split("?")[1]
var selector = document.createElement("select");
top_nav.appendChild(selector);
var week1 = document.createElement("option");
week1.text = "week1"
var week2 = document.createElement("option");
week2.text = "week2"

selector.options.add(week1)
selector.options.add(week2)

if (parameters != undefined) {
  selector.value = parameters
} else {
  selector.value = "week1"
}

var home = add_top_nav_button("Home", "home")
var sentences = add_top_nav_button("Match Sentences", "sentences")
var pictures = add_top_nav_button("Match Pictures", "pictures")
var flying_pictures = add_top_nav_button("Flying Pictures", "flying_pictures")
var flip_cards = add_top_nav_button("Flip Cards", "flip_cards")
var shuffle_letters = add_top_nav_button("Shuffle Letters", "shuffle_letters")

sentences.addEventListener('click', go_to_sentences, false);
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

shuffle_letters.addEventListener('click', go_to_shuffle_letters, false);
function go_to_shuffle_letters() {
  var selected = selector.value
	window.location.assign("shuffle_letters.html?"+selected);
}
