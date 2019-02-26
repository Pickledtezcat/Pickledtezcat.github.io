var inset = document.getElementById("inset");

var sentences = document.getElementById("sentences");
var pictures = document.getElementById("pictures");
var home = document.getElementById("home");


sentences.addEventListener('click', go_to_sentences, false);
function go_to_sentences() {
  sentences.className = "active"
  pictures.className = "inactive"
  home.className = "inactive"
	inset.contentWindow.location.assign("sentences.html");
}


pictures.addEventListener('click', go_to_pictures, false);
function go_to_pictures() {
  sentences.className = "inactive"
  pictures.className = "active"
  home.className = "inactive"
	inset.contentWindow.location.assign("pictures.html");
}

home.addEventListener('click', go_to_home, false);
function go_to_home() {
  sentences.className = "inactive"
  pictures.className = "inactive"
  home.className = "active"
	inset.contentWindow.location.assign("home.html");
}
