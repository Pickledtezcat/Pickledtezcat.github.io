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

function InteractiveButton(contents, correct) {
  this.correct = correct
  this.my_button = document.createElement("button");
  this.owner = document.getElementById("word_list");

  this.owner.appendChild(this.my_button);
  this.my_button.innerHTML = contents;
  this.has_clicked = false

  this.changed = function() {
    if (this.has_clicked != true) {
    update_all(this.correct);
  }
  };

  document.addEventListener("keydown", this.changed.bind(this));
  this.my_button.addEventListener('click', this.changed.bind(this));
  // use .bind() on the function to bind the function to the prototype,
  // not the button

  this.check = function() {
    this.has_clicked = true
    if (this.correct != true) {
      this.my_button.disabled = true
    }
  };

}

function ExitButton() {

  this.my_button = document.createElement("button");
  this.owner = document.getElementById("exit_button");

  this.owner.appendChild(this.my_button);
  this.my_button.innerHTML = "Next Picture.";

  this.clicked = function() {
    window.location.assign("pictures.html?"+parameters);
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
  var selected_words = []

  for(var i = 0; i < 3; ++i) {
    selected_words.push(wordlist[i])
  }
  console.log(selected_words)

  var picture_name = selected_words[0]
  selected_words = shuffle(selected_words)

  var picture = document.createElement("IMG")
  picture.src = "pictures/" + picture_name + ".jpg"

  document.getElementById("picture").appendChild(picture)

  for (var i = 0; i < selected_words.length; ++i) {
    var correct = selected_words[i] == picture_name
    var option = new InteractiveButton(selected_words[i], correct)
    all_buttons.push(option)
  }

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
