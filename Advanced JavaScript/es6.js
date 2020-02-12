// // const and let
// const player = "Ugur";
// let experience = 100;
// let wizardLevel = false;
// if (experience > 90) {
//   let wizardLevel = true;
//   console.log("inside ", wizardLevel);
// }
// console.log("outside ", wizardLevel);
 
// video no:141 var vs. let part 1
/*
const player = "Ugur";
let experience = 100;
let wizardLevel = false;
if (experience > 90) {
  let wizardLevel = true;
}
 >> wizardLevel 
 << false
*/

/*
const player = "Ugur";
let experience = 100;
var wizardLevel = false;
if (experience > 90) {
  var wizardLevel = true;
}
 >> wizardLevel 
 << true
*/
// const player = "Ugur";
// let experience = 100;
// let wizardLevel = false;
// if (experience > 90) {
//   let wizardLevel = true;
//   console.log("inside ", wizardLevel);
// }
// console.log("outside ", wizardLevel);
// VM5356:7 inside  true
// VM5356:9 outside  false

// player = "ugur yilmaz"; // you can not change, add  a const variable
// VM9558:1 Uncaught TypeError: Assignment to constant variable.
//     at <anonymous>:1:8


//object properties
const obj = {
    player="ugur",
    experience=100,
    wizardLevel=true
};
const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

const{player,experience} = obj; // === const player = obj.player; const experience = obj.experience;

const name = "John Snow";

const obj2 = {
    [name]:"hello",
    ['ray' + 'smith']: 'hihi'

}

// new 
const a = "simon";
const b =true;
const c = {};

const obj3 = {    // === const obj3 = {a,b,c}; exactly the same
    a:a,
    b:b,
    c:c
}

const name = "sally";
const age = 34;
const pet = "horse";

const greeting = "Hello " + name + "you seem to be doing " + greeing + " ! ";
const greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have `;

function greet(name='',age=38, pet="cat"){
  return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have `;
}

// greet();
// "Hello  you seem to be 28. What a lovely cat you have "
// age
// 34
// greet("john",32,"fish");
// "Hello john you seem to be 22. What a lovely fish you have "