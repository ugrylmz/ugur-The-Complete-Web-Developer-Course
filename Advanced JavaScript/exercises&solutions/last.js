var sym1 = Symbol();
var sym2 = Symbol("foo");
var sym3 = Symbol("foo");

// sym1;
// Symbol();
// sym2;
// Symbol(foo);
// sym3;
// Symbol(foo);
// sym2 === sym3;
// false;

//arrow functions
function add(a, b) {
  return a + b;
}

const add = (a, b) => a + b;
