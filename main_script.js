var main_body = document.getElementById("body");

var sub_button = document.createElement("button");
main_body.appendChild(sub_button)
sub_button.innerHTML = "English study."

sub_button.addEventListener('click', go_to_sub_page, false);


function go_to_sub_page() {
	window.location.assign("main_container.html");

}
