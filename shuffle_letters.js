var menu_button = document.getElementById("shuffle_letters")
menu_button.classList.add("active");

var parameters = location.search.split("?")[1]

var body = document.getElementById("body");


function initiate () {
  var words1 = ["museum", "biggest", "oldest", "find"]
  var words2 = ["search", "answers", "quiz", "virtual reality", "longest"]
  if (parameters == "week1") {
    words = words1
  } else {
    words = words2
  }


  var wordlist = shuffle(words)
  var answer = wordlist[0]
  var letters = answer.split("")
  var letters = shuffle(letters)
  var letters = shuffle(letters)


  for(var i = 0; i < letters.length; ++i) {
    var letter = letters[i];
    if (letter != " ") {
      var added_button = new LetterButton(letter);
    }
  }

  my_answer = "<i>" + answer.toUpperCase() + "</i>"
  new AnswerRevealButton(my_answer + "<br>" + "Next Page!")

}

function update_all (correct) {
    console.log("dummy")
}


initiate()
