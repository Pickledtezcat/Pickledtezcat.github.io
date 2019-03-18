var menu_button = document.getElementById("pictures")
menu_button.classList.add("active");

var parameters = location.search.split("?")[1]

var body = document.getElementById("body");
var all_buttons = []

function initiate () {

  var words1 = ["museum", "biggest", "oldest", "find", "search", "answers", "quiz", "virtual reality", "longest"]
  var words = []
  var all_words = shuffle(get_all_words(parameters))

  if (parameters == "week1" || parameters == "") {
    words = words1
  } else {
    words = get_words(parameters)
  }

  var wordlist = shuffle(words)
  var selected_words = []

  for(var i = 0; i < 3; ++i) {
    selected_words.push(wordlist[i])
  }

  var picture_name = selected_words[0]
  push_storage(picture_name)

  selected_words = shuffle(selected_words)

  var picture = document.createElement("IMG")
  picture.src = "pictures/" + picture_name + "_1.jpeg"

  document.getElementById("picture").appendChild(picture)

  for (var i = 0; i < selected_words.length; ++i) {
    var current_word = selected_words[i]

    if (selected_words[i] == undefined) {
      current_word = all_words[i]
    }

    var correct = current_word == picture_name
    var option = new InteractiveButton(current_word, correct)
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
    new ExitButton("Next!")

}


initiate()
