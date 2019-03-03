var menu_button = document.getElementById("sentences")
menu_button.classList.add("active");

var parameters = location.search.split("?")[1]

var body = document.getElementById("body");
var check_index = 0

var sentences = ["Add the salt to the soup.", "Set the temperature to 200c."
, "Open the oven door.", "Remove the bread from the oven."]

var button_list = []
var added_list = []

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
        text_list.push(added_list[i].contents)
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
