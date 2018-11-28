var main_body = document.getElementById("body");

var sub_button = document.createElement("button");
sub_button.className = "button";
main_body.appendChild(sub_button);
sub_button.innerHTML = "Treasure Hunt! v2.21.";

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
