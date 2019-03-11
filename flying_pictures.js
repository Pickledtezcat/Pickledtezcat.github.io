var menu_button = document.getElementById("flying_pictures")
menu_button.classList.add("active");

var parameters = location.search.split("?")[1]
console.log(parameters)

var body = document.getElementById("body");

function FlyingCard (answer) {
  this.answer = answer
  this.owner = document.getElementById("picture")
  this.paragraph = document.createElement("p")
  this.paragraph.id = "answer"
  this.paragraph.innerHTML = "???"
  this.card = document.createElement("IMG")
  this.card.src = "pictures/" + answer + "_1.png"
  this.card.id = "flying_picture"
  this.owner.appendChild(this.paragraph)
  this.owner.appendChild(this.card)
  this.moved = 0

  var card = this.card

  this.changed = function() {
    if (this.moved == 0) {
      var ani_list = ["up", "left", "right", "down"]
      var picked = shuffle(ani_list)[0]

      this.card.classList.toggle(picked)
      this.moved = 1
    }
    else if (this.moved == 1) {
      this.paragraph.innerHTML = ""
      this.moved = 2
      my_answer = "<i>" + this.answer.toUpperCase() + "</i>"
      new ExitButton(my_answer + "<br>" + "Next Card!")
  }

  }
  document.addEventListener("keydown", this.changed.bind(this));
}

function initiate () {
  var words1 = ["museum", "biggest", "oldest", "find", "search", "answers", "quiz", "virtual reality", "longest"]
  if (parameters == "week1") {
    words = words1
  } else {
    words = get_words(parameters)
  }

  var wordlist = shuffle(words)
  var answer = wordlist[0]
  push_storage(answer)

  new FlyingCard(answer)

}

function update_all (correct) {
      console.log("dummy")

}


initiate()
