var body = document.getElementById("body");
var all_buttons = []

function pick_random (list) {
  var n = list.length;
  var i = Math.floor(n * Math.random());
  return list[i];
}

function shuffle (list) {
  var n = list.length;
  while (n--) {
    var i = Math.floor(n * Math.random());
    var tmp = list[i];
    list[i] = list[n];
    list[n] = tmp;

  }
  return list;
}

function InteractiveButton(passed_button, content, correct) {
  this.correct = correct
  this.my_button = passed_button;
  this.content = content;
  this.owner = document.getElementById("second_list");

  this.my_button.className = "button";
  this.owner.appendChild(this.my_button);
  this.my_button.innerHTML = content;

  this.changed = function() {
    update_all(this.correct);
  };

  this.my_button.addEventListener('click', this.changed.bind(this));
  // use .bind() on the function to bind the function to the prototype,
  // not the button

  this.check = function() {
    if (this.correct != true) {
      this.my_button.disabled = true
    }
  };

}

function ExitButton(passed_button) {
  button = document.createElement("button")

  this.my_button = button;
  this.content = content;
  this.owner = document.getElementById("exit_button");

  this.my_button.className = "button";
  this.owner.appendChild(this.my_button);
  this.my_button.innerHTML = "Next Picture.";

  this.clicked = function() {
    window.location.assign("pictures.html");
  };

  this.my_button.addEventListener('click', this.clicked.bind(this));
  // use .bind() on the function to bind the function to the prototype,
  // not the button
};

function initiate () {
  var words = ["museum", "biggest", "oldest", "find", "search", "answers", "quiz"]
  var wordlist = shuffle(words)
  var selected_words = []

  for(var i = 0; i < 3; ++i) {
    selected_words.push(wordlist[i])
  }

  var picture_name = selected_words[0]
  selected_words = shuffle(selected_words)

  var picture = document.createElement("IMG")
  picture.src = "pictures/" + picture_name + ".jpg"

  console.info(picture.src)
  document.getElementById("first_list").appendChild(picture)

  for (var i = 0; i < selected_words.length; ++i) {
    var correct = selected_words[i] == picture_name
    var option = new InteractiveButton(document.createElement("button"), selected_words[i], correct)
    all_buttons.push(option)
  }

}

function update_all (correct) {
    if (correct) {
      alert("good job!")
    }

    for (var i = 0; i < all_buttons.length; ++i) {
        all_buttons[i].check()
    }
    new ExitButton()

}


initiate()
