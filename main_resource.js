var main_body = document.getElementById("body");

var sub_button = document.createElement("button");
sub_button.className = "button";
main_body.appendChild(sub_button);
sub_button.innerHTML = "Treasure Hunt! v2.23.";

sub_button.addEventListener('click', go_to_sub_page, false);


function go_to_sub_page() {
	window.location.assign("leaf_treasure.html");

}

var bell_button = document.createElement("button");
bell_button.className = "button";
main_body.appendChild(bell_button);
bell_button.innerHTML = "Play The Bell Jar.";

bell_button.addEventListener('click', go_to_bell_jar, false);


function go_to_bell_jar() {
	window.location.assign("bell_jar.html");

}

clues = ["1blue", "2red", "3green", "4orange", "5pink", "6mint", "7brown"]

clue_1 = "1blue"
var clue_1_button = document.createElement("button");
clue_1_button.className = "button";
clue_1_button.innerHTML = "go to " + clue_1;

clue_1_button.addEventListener("click", function(){
window.location.assign(clue_1 + ".html");
}, true);
main_body.appendChild(clue_1_button);

clue_2 = "2red"
var clue_2_button = document.createElement("button");
clue_2_button.className = "button";
clue_2_button.innerHTML = "go to " + clue_2;

clue_2_button.addEventListener("click", function(){
window.location.assign(clue_2 + ".html");
}, true);
main_body.appendChild(clue_2_button);

clue_3 = "3green"
var clue_3_button = document.createElement("button");
clue_3_button.className = "button";
clue_3_button.innerHTML = "go to " + clue_3;

clue_3_button.addEventListener("click", function(){
window.location.assign(clue_3 + ".html");
}, true);
main_body.appendChild(clue_3_button);

clue_4 = "4orange"
var clue_4_button = document.createElement("button");
clue_4_button.className = "button";
clue_4_button.innerHTML = "go to " + clue_4;

clue_4_button.addEventListener("click", function(){
window.location.assign(clue_4 + ".html");
}, true);
main_body.appendChild(clue_4_button);

clue_5 = "5pink"
var clue_5_button = document.createElement("button");
clue_5_button.className = "button";
clue_5_button.innerHTML = "go to " + clue_5;

clue_5_button.addEventListener("click", function(){
window.location.assign(clue_5 + ".html");
}, true);
main_body.appendChild(clue_5_button);

clue_6 = "6mint"
var clue_6_button = document.createElement("button");
clue_6_button.className = "button";
clue_6_button.innerHTML = "go to " + clue_6;

clue_6_button.addEventListener("click", function(){
window.location.assign(clue_6 + ".html");
}, true);
main_body.appendChild(clue_6_button);

clue_7 = "7brown"
var clue_7_button = document.createElement("button");
clue_7_button.className = "button";
clue_7_button.innerHTML = "go to " + clue_7;

clue_7_button.addEventListener("click", function(){
window.location.assign(clue_7 + ".html");
}, true);
main_body.appendChild(clue_7_button);
