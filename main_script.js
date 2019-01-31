var main_body = document.getElementById("body");

var sub_button = document.createElement("button");
main_body.appendChild(sub_button)
sub_button.innerHTML = "Match sentences."

sub_button.addEventListener('click', go_to_sub_page, false);


function go_to_sub_page() {
	window.location.assign("sentences.html");

}

var bell_button = document.createElement("button");
main_body.appendChild(bell_button)
bell_button.innerHTML = "Match pictures."

bell_button.addEventListener('click', go_to_bell_jar, false);


function go_to_bell_jar() {
	window.location.assign("pictures.html");

}
