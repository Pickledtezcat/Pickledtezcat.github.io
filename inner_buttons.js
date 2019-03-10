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

function get_words(word_key) {
  var all_words = saved_data[word_key]["words"]

  var changed_words = []
  for (var i = 0; i < all_words.length; ++i) {
    changed_words.push(all_words[i].toLowerCase())
  }
  return changed_words
}

function check_valid_pictures(list) {
  all_images = image_names["images"]
  console.log(all_images)

  var valid_words = []
  for (var i = 0; i < list.length; ++i) {
    if (image_names["images"].includes(list[i].toLowerCase())) {
      valid_words.push(list[i])
    }
  }
  return valid_words
}

function LetterButton(letter) {
  this.my_button = document.createElement("button");
  this.contents = letter;
  this.owner = document.getElementById("second_list");
  this.owner.appendChild(this.my_button);
  this.my_button.innerHTML = letter;
  // use .bind() on the function to bind the function to the prototype,
  // not the button
}

function AnswerRevealButton(answer) {
  this.my_button = document.createElement("button");
  this.contents = answer;
  this.owner = document.getElementById("first_list");
  this.owner.appendChild(this.my_button);
  this.my_button.innerHTML = "???";
  this.revealed = false

  this.changed = function() {
    if (this.revealed != true) {
      this.my_button.innerHTML = this.contents
      this.revealed = true
    } else {
      window.location.assign(window.location.href);
    }

  };

  document.addEventListener("keydown", this.changed.bind(this));
  this.my_button.addEventListener('click', this.changed.bind(this));

}


function WordListButton(word) {
  this.my_button = document.createElement("button");
  this.contents = word;
  this.owner = document.getElementById("first_list");
  this.owner.appendChild(this.my_button);
  this.my_button.innerHTML = word;
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

function ExitButton(label) {

  this.my_button = document.createElement("button");
  this.owner = document.getElementById("exit_button");

  this.owner.appendChild(this.my_button);
  this.my_button.innerHTML = label;

  this.clicked = function() {
    window.location.assign(window.location.href);
  };

  this.my_button.addEventListener('click', this.clicked.bind(this));
  // use .bind() on the function to bind the function to the prototype,
  // not the button

  document.addEventListener("keydown", this.clicked.bind(this));
  // use keydown even listener to skip clicking on correct answer

};
