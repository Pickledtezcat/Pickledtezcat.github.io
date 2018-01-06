var main_body = document.getElementById("body");

var sub_button = document.createElement("button");
main_body.appendChild(sub_button)
sub_button.innerHTML = "pixi demo."

sub_button.addEventListener('click', go_to_pixi_demo, false);


function go_to_pixi_demo() {
	window.location.assign("pixi_demo/index.html");
	
}

var bell_button = document.createElement("button");
main_body.appendChild(bell_button)
bell_button.innerHTML = "side scroller."

bell_button.addEventListener('click', go_to_side_scroller, false);


function go_to_side_scroller() {
	window.location.assign("side_scroller/index.html");
	
}