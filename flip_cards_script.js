var parameters = location.search.split("?")[1]
console.log(parameters)

var body = document.getElementById("body");
var all_buttons = []

function pick_random (list) {
  var n = list.length;
  var i = Math.floor(n * Math.random());
  return list[i];
}

var shuffle = function (list) {
	var currentIndex = list.length;
	var temporaryValue, randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = list[currentIndex];
		list[currentIndex] = list[randomIndex];
		list[randomIndex] = temporaryValue;
	}
	return list;
};

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
    new ExitButton()
  }
  document.addEventListener("keydown", this.changed.bind(this));
}

function ExitButton(answer) {

  this.my_button = document.createElement("button");
  this.owner = document.getElementById("exit_button");

  this.owner.appendChild(this.my_button);
  this.my_button.innerHTML = "Next Card!";

  this.clicked = function() {
    window.location.assign("flip_cards.html?"+parameters);
  };

  this.my_button.addEventListener('click', this.clicked.bind(this));
  // use .bind() on the function to bind the function to the prototype,
  // not the button

  document.addEventListener("keydown", this.clicked.bind(this));
  // use keydown even listener to skip clicking on correct answer

};

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
    if (correct) {
      console.log("correct")
    }

    for (var i = 0; i < all_buttons.length; ++i) {
        all_buttons[i].check()
    }
    new ExitButton()

}


initiate()
