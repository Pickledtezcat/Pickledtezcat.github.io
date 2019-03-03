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

function WordListButton(contents) {
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
    window.location.assign(window.location.href + "?" +parameters);
  };

  this.my_button.addEventListener('click', this.clicked.bind(this));
  // use .bind() on the function to bind the function to the prototype,
  // not the button

  document.addEventListener("keydown", this.clicked.bind(this));
  // use keydown even listener to skip clicking on correct answer

};
