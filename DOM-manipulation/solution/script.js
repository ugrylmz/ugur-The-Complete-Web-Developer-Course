var button = document.getElementsByTagName("button")[0];
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}
function createListElement() {
  var div = document.getElementById("buttons");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
  var button = document.createElement("button");
  button.appendChild(document.createTextNode("done"));
  li.appendChild(button);
  button.onclick = underlineParent;

  var button = document.createElement("button");

  button.appendChild(document.createTextNode("Delete!"));

  li.appendChild(button);

  button.onclick = removeParent;
}
function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}
function removeParent(evt) {
  evt.target.parentNode.remove();
}
function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}
function underlineParent(event) {
  event.target.parentNode.classList.toggle("done");
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
