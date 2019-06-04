var menu_button = document.getElementById("shuffle_letters")
menu_button.classList.add("active");

var parameters = location.search.split("?")[1]
var body = document.getElementById("body");

function PopUpCard (answer) {
  this.answer = answer
  this.owner = document.getElementById("picture")
  this.card = document.createElement("IMG")
  this.card.src = get_image_name(answer)
  this.card.id = "box_pic_insert"
  this.owner.appendChild(this.card)
  this.moved = 0
  this.card.style.opacity = 0.0

  var card = this.card

  this.changed = function() {
    if (this.moved == 0) {
      this.card.classList.add("pop_up")
      this.card.style.opacity = 1.0
      this.moved = 1
      my_answer = "<i>" + this.answer.toUpperCase() + "</i>"
      new ExitButton(my_answer)
    }

  }
  document.addEventListener("keydown", this.changed.bind(this));
}

function initiate () {
  var boxes = [1, 2, 3, 4, 5]
  var this_box = pick_random(boxes)

  var box_back = document.createElement("IMG")
  box_back.src = "boxes/box" + this_box + ".png"
  var box_front = document.createElement("IMG")
  box_front.src = "boxes/box" + this_box + "front.png"

  document.getElementById("picture").appendChild(box_back)
  document.getElementById("picture").appendChild(box_front)

  box_front.id = "box_picture_front"
  box_back.id = "box_picture_back"

  var words1 = ["museum", "biggest", "oldest", "find", "search", "answers", "quiz", "virtual reality", "longest"]
  if (parameters == "week1" || parameters == "") {
    words = words1
  } else {
    words = get_words(parameters)
  }

  var all_words = shuffle(get_all_words(parameters))
  var wordlist = shuffle(words)
  var selected_words = []

  for(var i = 0; i < 3; ++i) {
    selected_words.push(wordlist[i])
  }

  var answer = selected_words[0]
  push_storage(answer)

  selected_words = shuffle(selected_words)

  for(var i = 0; i < 3; ++i) {
    var mini_pic = document.createElement("IMG")
    var current_word =selected_words[i]

    if (current_word == undefined) {
      current_word = all_words[i]
    }

    console.log(current_word)
    mini_pic.src = get_image_name(current_word)
    mini_pic.id = "mini_pic"
    document.getElementById("first_list").appendChild(mini_pic)
  }
  new PopUpCard(answer)
}

function update_all (correct) {
    console.log("dummy")
}


initiate()
