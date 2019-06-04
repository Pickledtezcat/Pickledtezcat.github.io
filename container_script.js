var top_nav = document.getElementById("top_nav")

if (sessionStorage.getItem("word_list") == null) {
  sessionStorage.word_list = ""
}

if (sessionStorage.getItem("sentence_list") == null) {
  sessionStorage.sentence_list = ""
}

var parameters = location.search.split("?")[1]
console.log(parameters)

function TopNavSelector() {

  this.selector = document.createElement("select");
  this.selector.id = "top_nav_selector"
  this.owner = document.getElementById("top_nav")
  this.owner.appendChild(this.selector);
  this.keys = Object.keys(window.saved_data);
  this.keys.splice(0, 0, "")

  for(var i = 0; i < this.keys.length;i++){
    var this_key = this.keys[i]
    var this_option = document.createElement("option");
    this_option.text = this.keys[i]
    this.selector.add(this_option)
  }

  this.selected = function() {
    var target_tag = this.selector.value
    if (! has_contains(this.keys, target_tag)) {
      target_tag = "week1"
    }

    var current_window = window.location.href.split("?")[0]
    console.log(current_window + "?" + this.selector.value)
    window.location.assign(current_window + "?" + this.selector.value)

  	//window.location.assign(address);
  }

  this.selector.addEventListener("change", this.selected.bind(this));
}

function TopNavButton(label, id_tag) {
  this.label = label
  this.id_tag = id_tag
  this.owner = document.getElementById("top_nav")

  this.my_button = document.createElement("button")
  this.my_button.innerHTML = label
  this.my_button.id = id_tag;
  this.owner.appendChild(this.my_button);

  this.clicked = function() {
    var selector = document.getElementById("top_nav_selector")
    var target_tag = selector.value
    if (target_tag == "") {
      target_tag = parameters
    }

    var address =  this.id_tag + ".html?" + target_tag
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
new TopNavButton("What's in the box?", "in_the_box")
new TopNavSelector()
