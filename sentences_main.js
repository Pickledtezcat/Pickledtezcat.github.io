var body = document.getElementById("body");

var sentences = ["Add the salt to the soup.", "Set the temperature to 200c."
, "Open the oven door.", "Remove the bread from the oven."]

var button_list = []
var added_list = []

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

function InteractiveButton(passed_button, content) {
  this.my_button = passed_button;
  this.content = content;
  this.owner = document.getElementById("first_list");

  this.my_button.className = "button";
  this.owner.appendChild(this.my_button);
  this.my_button.innerHTML = content;
  this.change_text = "changed!";

  this.changed = function() {
    this.owner = document.getElementById("second_list");
    this.owner.appendChild(this.my_button);
    added_list.push(this);
    update_all();
  };

  this.my_button.addEventListener('click', this.changed.bind(this));
  // use .bind() on the function to bind the function to the prototype,
  // not the button

  this.clear = function() {
    this.owner = document.getElementById("first_list");
    this.owner.appendChild(this.my_button);
    this.my_button.innerHTML = this.content;
  };

}

function ExitButton(passed_button) {
  button = document.createElement("button")

  this.my_button = button;
  this.content = content;
  this.owner = document.getElementById("exit_button");

  this.my_button.className = "button";
  this.owner.appendChild(this.my_button);
  this.my_button.innerHTML = "Try Again.";

  this.clicked = function() {
    window.location.assign("sentences.html");
  };

  this.my_button.addEventListener('click', this.clicked.bind(this));
  // use .bind() on the function to bind the function to the prototype,
  // not the button
};

sessionStorage.clear()

var original_text = pick_random(sentences)
var original_list = shuffle(original_text.split(" "));

function initiate() {

  for(var i = 0; i < original_list.length; ++i) {
    word = original_list[i];
    added_button = new InteractiveButton(document.createElement("button"), word);
    button_list.push(added_button);
  }

}

function update_all (){

  var text_list = [];

  if (added_list.length == button_list.length) {
    for (var i = 0; i < added_list.length; ++i) {
        text_list.push(added_list[i].content)
    }

  test_text = text_list.join(" ")
  console.info(test_text)

  if (test_text == original_text) {
    alert("good job!")
    new ExitButton();
    for (var i = 0; i < button_list.length; ++i) {
      button_list[i].my_button.disabled = true
    }

  } else {
      clear_all()}
  }
};

function clear_all (){
  added_list = []
  for (var i = 0; i < button_list.length; ++i) {
    button_list[i].clear()
  }
};

initiate();
