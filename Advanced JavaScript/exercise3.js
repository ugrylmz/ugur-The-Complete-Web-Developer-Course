// change everything below to the newer Javascript!

// let + const
let a = "test";
const b = true;
const c = 789;
a = "test2";

// Destructuring
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
const { firstName, lastName, age, eyeColor } = person;

const firstName = person.firstName;
const lastName = person.lastName;
const age = person.age;
const eyeColor = person.eyeColor;

// Object properties
const a = "test";
const b = true;
const c = 789;

const okObj = { a, b, c };

const okObj = {
  a: a,
  b: b,
  c: c
};

// Template strings
const message =
  "Hello " +
  firstName +
  " have I met you before? I think we met in " +
  city +
  " last summer no???";

// default arguments
const message = `Hello ${firstName} have I met you before?  I think we met in ${city} last summer no?? `;

function message(firstName = "", city = "Istanbul") {
  return `Hello ${firstName} have I met you before?  I think we met in ${city} last summer no?? `;
}

// default age to 10;

function isValidAge(age) {
  return age;
}
const isValidAge = (age = 10) => age;
// Symbol
// Create a symbol: "This is my first Symbol"
const sym = Symbol("This is my first Symbol");

// Arrow functions
function whereAmI(username, location) {
  if (username && location) {
    return "I am not lost";
  } else {
    return "I am totally lost!";
  }
}

const whereAmI = (username, location) => {
  return username && location ? "I am not lost" : "I am totally lost";
};
