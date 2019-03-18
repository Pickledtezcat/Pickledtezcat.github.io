var menu_button = document.getElementById("picture_reveal")
menu_button.classList.add("active");

var parameters = location.search.split("?")[1]
console.log(parameters)

var body = document.getElementById("body");

function TileArray(answer) {
  this.owner = document.getElementById("fading_box")
  this.answer = answer
  this.tiles = []
  this.finished = false

  this.inner = document.createElement("DIV")
  this.inner.id = "fading_inner"
  this.owner.appendChild(this.inner)

  this.frame = document.createElement("DIV")
  this.frame.id = "fading_frame"
  this.inner.appendChild(this.frame)
  this.count = 0

  this.picture = document.createElement("IMG")
  this.picture.src = "pictures/" + answer + "_1.jpeg"
  this.frame.appendChild(this.picture);
  this.picture.id = "fading_image"

  for (var x = 0; x < 20; ++x) {
    for (var y = 0; y < 20; ++y) {
      var tile = new RevealTile(x, y, this.inner);
      this.tiles.push(tile)
    }
  }

  this.triggered = function() {
    if (this.finished == false) {
      for (var i = 0; i < this.tiles.length; ++i) {
        check_tile = this.tiles[i]

        if (check_tile.progress > 0) {
          check_tile.update()
        }
      }

      if (this.count > 5) {
        this.finished = true
        my_answer = "<i>" + this.answer.toUpperCase() + "</i>"

        new ExitButton(my_answer + "<br>" + "Next Page!")
      }
      this.count += 1
    }
  }
  document.addEventListener("keydown", this.triggered.bind(this));
}

function RevealTile(x, y, owner) {
  this.owner = owner
  this.tile = document.createElement("div")
  this.owner.appendChild(this.tile)
  this.tile.id = "fading_tile"
  this.tile.style.width = '5%'
  this.tile.style.height = '5%'

  colors = ["red", "darkblue", "green", "lightgreen", "white", "pink", "orange", "lightblue", "purple", "darkred", "yellow", "tomato", "brown"]

  this.tile.style.backgroundColor = pick_random(colors)

  this.tile.style.left = (x * 5) + "%"
  this.tile.style.top = (y * 5) + "%"
  this.progress = 1
  this.chance = 0.99
  this.tile.style.opacity = 1.0

  this.update = function() {
    if (this.progress > 0) {

      if (Math.random() > this.chance) {
        this.tile.style.opacity = 0.0
        this.tile.classList.add("fade")
        this.progress = 0
      }
      this.chance -= 0.1
    }
  }
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

  new TileArray(answer)

  function update_all (correct) {
    console.log("dummy")

  }
}

initiate()
