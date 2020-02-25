const first = () => {
  const greet = "Hi";
  const second = () => {
    alert(greet);
  };
  return second;
};
const newFunc = first();
newFunc();
// Closures ------------

const multiply = (a, b) => a * b;
const curriedMultiply = a => b => a * b;
curriedMultiply(3);
// Currying ----------
/*
curriedMultiply(b)
​
length: 1
​
name: ""
*/

const multiply5 = curriedMultiply(5);
const compose = (f, g) => a => f(g(a));

const sum = num => num + 1;
compose(sum, sum)(5);
// output: 7
// composing
// Avoiding Side Effects, ***functional purity***
var a = 1;
function b() {
  a = 2; // that is side effect  ==> AVOID the side effects
}
// Deterministic ==> anything you put into the function it always returns same thing
