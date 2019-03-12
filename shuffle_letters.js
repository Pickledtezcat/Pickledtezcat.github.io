var menu_button = document.getElementById("shuffle_letters")
menu_button.classList.add("active");

var parameters = location.search.split("?")[1]

var body = document.getElementById("body");


function initiate () {
  var words1 = ["museum", "biggest", "oldest", "find", "search", "answers", "quiz", "virtual reality", "longest"]
  if (parameters == "week1" || parameters == "") {
    words = words1
  } else {
    words = get_words(parameters)
  }


  var wordlist = shuffle(words)
  var answer = wordlist[0]
  push_storage(answer)
  
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
