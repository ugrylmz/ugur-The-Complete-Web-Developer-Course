var button = document.getElementsByTagName("button")[0];
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function inputLenght() {
  return input.value.length;
}
function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}
function addListAfterClick() {
  if (inputLenght() > 0) {
    createListElement();
  }
}
function addListAfterKeyPress(event) {
  if (inputLenght() > 0 && event.keyCode === 13) {
    createListElement();
  }
}
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);
