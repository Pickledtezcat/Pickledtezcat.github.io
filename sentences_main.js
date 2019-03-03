var parameters = location.search.split("?")[1]

var body = document.getElementById("body");
var check_index = 0

var sentences = ["Add the salt to the soup.", "Set the temperature to 200c."
, "Open the oven door.", "Remove the bread from the oven."]

var button_list = []
var added_list = []

<<<<<<< HEAD
=======
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

function InteractiveButton(content) {
  this.my_button = document.createElement("button");
  this.content = content;
  this.my_button.classList.add("inside")
  this.owner = document.getElementById("first_list");
  this.owner.appendChild(this.my_button);
  this.my_button.innerHTML = content;
  this.added = false
  this.index = check_index
  check_index += 1

  this.changed = function() {
    if (this.added != true) {
      this.add()
    } else {
      this.remove()
    }

    update_all();
  };

  this.my_button.addEventListener('click', this.changed.bind(this));
  // use .bind() on the function to bind the function to the prototype,
  // not the button

  this.add = function() {
    this.added = true;
    this.index = check_index
    check_index += 1
    this.owner = document.getElementById("second_list");
    this.owner.appendChild(this.my_button);
  }

  this.remove = function() {
    this.added = false
    this.owner = document.getElementById("first_list");
    this.owner.appendChild(this.my_button);
  };

}

function ExitButton() {
  this.my_button = document.createElement("button");
  this.owner = document.getElementById("first_list");

  this.my_button.classList.add("inside")
  this.owner.appendChild(this.my_button);
  this.my_button.innerHTML = "Next.";

  this.clicked = function() {
    window.location.assign("sentences.html?"+parameters);
  };

  this.my_button.addEventListener('click', this.clicked.bind(this));
  // use .bind() on the function to bind the function to the prototype,
  // not the button

  document.addEventListener("keydown", this.clicked.bind(this));
};

>>>>>>> parent of 384f24f... added flip card activity
// use paramters to set word or sentence lists

var original_text = pick_random(sentences)
var original_list = shuffle(original_text.split(" "));

function initiate() {

  for(var i = 0; i < original_list.length; ++i) {
    word = original_list[i];
    added_button = new WordListButton(word);
    button_list.push(added_button);
  }

}

function update_all (){

  var text_list = [];
  var added_list = [];

  for (var i = 0; i < button_list.length; ++i) {
    var check_button = button_list[i]
    if (check_button.added) {
      added_list.push(check_button)
    }
  }

  added_list.sort(function(a, b){return a.index - b.index});

  if (added_list.length == button_list.length) {
    for (var i = 0; i < added_list.length; ++i) {
        text_list.push(added_list[i].content)
    }

  test_text = text_list.join(" ")
  console.info(test_text)

  if (test_text == original_text) {
    for (var i = 0; i < button_list.length; ++i) {
      button_list[i].my_button.disabled = true

    }
    new ExitButton("Next!");

  } else {
      clear_all()}
  }
};

function clear_all (){
  added_list = []
  for (var i = 0; i < button_list.length; ++i) {
    button_list[i].remove()
  }
};

initiate();
