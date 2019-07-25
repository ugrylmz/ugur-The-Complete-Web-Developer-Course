var database = [
  {
    username: "andrei",
    password: "supersecret"
  },
  {
    username: "ugur",
    password: "123456"
  },
  {
    username: "arda",
    password: "123456"
  },
  {
    username: "sally",
    password: "123456"
  },
  {
    username: "simpson",
    password: "supersecret"
  }
];

var newsFeed = [
  {
    username: "Bobby",
    timeline: "So happy from all that learned"
  },
  {
    username: "Mike",
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
  for (var i = 0; i < database.length; i++) {
    if (database[i].username === userNamePrompt) {
      if (database[i].password === passwordPrompt) {
        console.log(newsFeed);
        break;
      } else {
        console.log("sorry wrong username or password");
      }
    }
  }
  // if (user === database[0].username && pass === database[0].password) {
  //   console.log(newsFeed);
  // } else alert("sorry, wrong username or password");
}

signIn(userNamePrompt, passwordPrompt);
