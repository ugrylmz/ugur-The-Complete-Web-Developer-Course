var database = [
  {
    username: "andrei",
    password: "supersecret"
  }
];

var newsFeed = [
  {
    username: "Bobby",
    timeline: "So tired from all that learned"
  },
  {
    username: "Sally",
    timeline: "javascript is sooo cool!"
  }
];

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

function signIn(user, pass) {
  if (user === database[0].username && pass === database[0].password) {
    console.log(newsFeed);
  } else alert("sorry, wrong username or password");
}

signIn(userNamePrompt, passwordPrompt);
