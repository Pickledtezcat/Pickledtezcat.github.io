var top_nav = document.getElementById("top_nav")



var parameters = location.search.split("?")[1]
var selector = document.createElement("select");
top_nav.appendChild(selector);

var keys = Object.keys(saved_data);

for(var i = 0; i < keys.length;i++){
  var this_key = keys[i]
  var this_option = document.createElement("option");
  this_option.text = keys[i]
  selector.add(this_option)
}

if (parameters != undefined) {
  selector.value = parameters
} else {
  selector.value = "week1"
}

function TopNavButton(label, id_tag) {
  this.label = label
  this.id_tag = id_tag
  this.owner = document.getElementById("top_nav")

  this.my_button = document.createElement("button")
  this.my_button.innerHTML = label
  this.my_button.id = id_tag;
  this.owner.appendChild(this.my_button);
  this.selector = selector

  this.clicked = function() {
    var address =  this.id_tag + ".html?" + this.selector.value
  	window.location.assign(address);
  }
  this.my_button.addEventListener('click', this.clicked.bind(this));
}

new TopNavButton("Home", "index")
new TopNavButton("Match Sentences", "sentences")
new TopNavButton("Match Pictures", "pictures")
new TopNavButton("Flying Pictures", "flying_pictures")
new TopNavButton("Flip Cards", "flip_cards")
new TopNavButton("Shuffle Letters", "shuffle_letters")
new TopNavButton("Picture Reveal", "picture_reveal")
