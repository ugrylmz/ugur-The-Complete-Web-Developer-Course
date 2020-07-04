const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Stuff Worked");
  } else {
    reject("Error");
  }
});

promise
  .then((result) => result + "!")
  .then((result2) => {
    console.log(result2);
  })
  .catch(() => console.log("erroror"));

const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Stuff Worked");
  } else {
    reject("Error");
  }
});

promise
  .then((result) => {
    throw Error;
    return result + "!";
  })
  .then((result2) => {
    console.log(result2);
  })
  .catch(() => console.log("erroror"));

// ----------------------------------------------------------------------------------------------

const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Stuff Worked");
  } else {
    reject("Error");
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "HIII");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Pookie");
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, "Is it me you are lookin for?");
});

promise
  .then((result) => result + "!")
  .then((result2) => result2 + "?")
  .catch(() => console.log("erroror"))
  .then((result3) => {
    console.log(result3 + "!");
  });
Promise.all([promise, promise2, promise3, promise4]).then((values) => {
  console.log(values);
});
