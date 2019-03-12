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

function unused_words(all_words) {

  var changed_words = []
  for (var i = 0; i < all_words.length; ++i) {
    var check_word = all_words[i].toLowerCase()
    var word_list = sessionStorage.word_list.split("&")

    if (! has_contains(word_list, check_word)) {
      changed_words.push(check_word)
    }
  }
  return changed_words
}

function get_words(word_key) {
  var present_words = get_all_words(word_key)
  var valid_words = unused_words(present_words)
  if (valid_words.length == 0) {
    sessionStorage.word_list = ""
    valid_words = unused_words(present_words)
  }

  return valid_words
}

function get_all_words(word_key) {
  var all_words = window.saved_data[word_key]["words"]
  var present_words = check_valid_pictures(all_words)
  return present_words
}

function has_contains(check_list, search_term) {
  var is_in = false
  for (var i = 0; i < check_list.length; ++i) {
    check_index = check_list[i]
    if (check_index == search_term) {
      is_in = true
    }
  }
  return is_in
}


function unused_sentences(all_sentences) {

  var collected_sentences = []
  for (var i = 0; i < all_sentences.length; ++i) {
    var check_sentence = all_sentences[i]
    var sentence_list = sessionStorage.sentence_list.split("&")
    if (sentence_list != []) {
      if (! has_contains(sentence_list, check_sentence) ) {
        collected_sentences.push(check_sentence)
      }
    }
  }
  return collected_sentences
}

function get_sentences(sentence_key) {

  var all_sentences = window.saved_data[sentence_key]["sentences"]

  var valid_sentences = unused_sentences(all_sentences)
  console.log("all", all_sentences, valid_sentences, sessionStorage.sentence_list)


  if (valid_sentences.length == 0) {
    sessionStorage.sentence_list = ""
    valid_sentences = unused_words(all_sentences)
  }

  return valid_sentences
}

function push_storage(word) {
  var store = "&" + word
  sessionStorage.word_list += store
}

function push_storage_sentence(word) {
  var store = "&" + word
  sessionStorage.sentence_list += store
}

function check_valid_pictures(list) {
  var all_images = window.image_names["images"]

  var valid_words = []
  for (var i = 0; i < list.length; ++i) {
    var check_picture = list[i].toLowerCase()
    if has_contains(all_images, check_picture) {
      valid_words.push(list[i])
    }
  }
  return valid_words
}

function LetterButton(letter) {
  this.my_button = document.createElement("button");
  this.contents = letter;
  this.owner = document.getElementById("second_list");
  this.owner.appendChild(this.my_button);
  this.my_button.innerHTML = letter;
  // use .bind() on the function to bind the function to the prototype,
  // not the button
}

function AnswerRevealButton(answer) {
  this.my_button = document.createElement("button");
  this.contents = answer;
  this.owner = document.getElementById("first_list");
  this.owner.appendChild(this.my_button);
  this.my_button.innerHTML = "???";
  this.revealed = false

  this.changed = function() {
    if (this.revealed != true) {
      this.my_button.innerHTML = this.contents
      this.revealed = true
    } else {
      window.location.assign(window.location.href);
    }

  };

  document.addEventListener("keydown", this.changed.bind(this));
  this.my_button.addEventListener('click', this.changed.bind(this));

}


function WordListButton(word) {
  this.my_button = document.createElement("button");
  this.contents = word;
  this.owner = document.getElementById("first_list");
  this.owner.appendChild(this.my_button);
  this.my_button.innerHTML = word;
  this.added = false
  this.index = check_index
  check_index += 1

  this.changed = function() {
    if (this.added != true) {
      this.add()
    } else {
      this.remove()
    }

    update_all();
  };

  this.my_button.addEventListener('click', this.changed.bind(this));
  // use .bind() on the function to bind the function to the prototype,
  // not the button

  this.add = function() {
    this.added = true;
    this.index = check_index
    check_index += 1
    this.owner = document.getElementById("second_list");
    this.owner.appendChild(this.my_button);
  }

  this.remove = function() {
    this.added = false
    this.owner = document.getElementById("first_list");
    this.owner.appendChild(this.my_button);
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
    window.location.assign(window.location.href);
  };

  this.my_button.addEventListener('click', this.clicked.bind(this));
  // use .bind() on the function to bind the function to the prototype,
  // not the button

  document.addEventListener("keydown", this.clicked.bind(this));
  // use keydown even listener to skip clicking on correct answer

};
