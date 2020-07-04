function isUserValid(bool) {
  return bool;
}
var answer = isUserValid(true) ? "You may enter" : "Access Denied";
var automatedAnswer =
  "Your account # is " + (isUserValid(true) ? "1234" : "not available");
let isAuthenticated = false;
function condition() {
  if (isUserValid(isAuthenticated)) {
  }
}
