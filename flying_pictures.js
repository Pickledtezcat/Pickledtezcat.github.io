var parameters = location.search.split("?")[1]
console.log(parameters)

var body = document.getElementById("body");
var all_buttons = []

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
