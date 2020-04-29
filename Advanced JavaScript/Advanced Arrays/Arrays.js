const array = [1,2,12,14,15];

const double = [];
const newArray = array.forEach(num => {
  double.push(num * 2);
});
console.log(newArray);

// map, filter, import { combineReducers } from 'redux';

const reducers = combineReducers({
  example: () => []
});

export default reducers;

const mapArray = array.map(num => {
  return num * 2;
});

console.log("mapArray" + )


// const filterArray = array.filter(num=>{
//   return num > 5
// })

const filterArray = array.filter(num=>num>5);
console.log("filter", filterArray);



function factorial(input){
var fact = 1;
for(let i = 1;i<input;i++){
  fact = fact + (fact*i);
}
return fact;
}

function isPrime(inpt){
  


  return false;
}


const reduceArray = array.reduce((accumulator,num)=> {
  return accumulator + num
}, 0);
console.log('reduce',reduceArray);

// accumulator + num ~= sum of array elements 