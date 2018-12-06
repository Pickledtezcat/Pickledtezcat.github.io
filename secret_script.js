var main_body = document.getElementById("body");

var blue_answer = document.getElementById("blue");
var red_answer = document.getElementById("red");
var green_answer = document.getElementById("green");
var orange_answer = document.getElementById("orange");
var pink_answer = document.getElementById("pink");
var mint_answer = document.getElementById("mint");
var brown_answer = document.getElementById("brown");

var check_button = document.createElement("button");
main_body.appendChild(check_button);
check_button.innerHTML = "CHECK?"

var answers = [[blue_answer, 0], [red_answer, 3], [green_answer, 8], [orange_answer, 20], [pink_answer, 12], [mint_answer, 15], [brown_answer, 7]]


check_button.addEventListener('click', check_values, false);

function check_values(){

  var correct = true;
  for (var i = 0; i < answers.length; i++) {
    answer = answers[i]
    entry = answer[0]
    correct_value = answer[1]

    if (entry.value != correct_value) {
      correct = false
    }

  }

  if (correct == true) {
    check_button.innerHTML = "CHOCOLATE PI"
    check_button.style.backgroundColor = "green"
  } else {
    check_button.innerHTML = "INCORRECT"
  }
}
