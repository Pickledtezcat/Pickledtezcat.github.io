var parameters = location.search.split("?")[1]
console.log(parameters)

var pictures = [1, 2, 3, 4]
if (has_contains(pictures, parameters)) {
  var picture = document.createElement("IMG")
  picture.src = "pages/" + parameters + ".png"
  picture.classList = "fit"
  document.getElementById("body").appendChild(picture)
}
