function factorial(numb) {
  var sonuc = 1;
  if (numb !== 0) {
    for (var index = 1; index <= numb; index++) {
      sonuc = sonuc * index;
    }
    console.log(sonuc);
  } else if (numb === 0) {
    console.log(0);
  } else console.log("error");
}
factorial(10);

var list = ["tiger", "lion", "zebra", "bird"];

list.forEach(function(element) {
  console.log(element);
});

const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findIndex(fruit => fruit === "blueberries");

console.log(index); // 3
console.log(fruits[index]); // blueberries

const ind = list.findIndex(list => list === "zebra");
console.log("list array index: " + ind);
console.log("element: " + list[ind]);
"This can now be reversed".reversed();
