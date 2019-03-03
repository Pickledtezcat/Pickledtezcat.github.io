var menu_button = document.getElementById("flip_cards")
menu_button.classList.add("active");

var parameters = location.search.split("?")[1]
console.log(parameters)

var body = document.getElementById("body");
var all_buttons = []

function flip_card_object(picture_name) {
  this.front = document.getElementById("flip_card_front");
  this.back = document.getElementById("flip_card_back");

  this.picture = document.createElement("IMG")
  this.picture.src = "pictures/" + picture_name + ".jpg"
  this.back.appendChild(this.picture);

  this.paragraph = document.createElement("P")
  this.paragraph.innerHTML = "???"
  this.front.appendChild(this.paragraph);
  this.picture_name = picture_name

  this.changed = function() {
    this.paragraph.innerHTML = this.picture_name
    new ExitButton("Next Card!")
  }
  document.addEventListener("keydown", this.changed.bind(this));
}

function initiate () {
  var words1 = ["museum", "biggest", "oldest", "find"]
  var words2 = ["search", "answers", "quiz", "virtual reality", "longest"]
  if (parameters == "week1") {
    words = words1
  } else {
    words = words2
  }


  var wordlist = shuffle(words)
  new flip_card_object(wordlist[0])

}

function update_all (correct) {
    console.log("dummy")
}


initiate()
