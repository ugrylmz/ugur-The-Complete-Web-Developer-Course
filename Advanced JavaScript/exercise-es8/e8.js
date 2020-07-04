// .padStart()
// .padEnd() // in starting or ending point, function gives padding in () measure

'Turtle'.padEnd(10);
// 'Turtle          ' 

const fun  = (a,b,c,d,) => {
    console.log(a);
}
fun(1,2,4,5,);

Object.values
Object.entries
Object.keys

let obj = {
    username0:"Santa",
    username1:"Rudolf",
    username2:"Mr.Grinch"
}
//foreach, map, filter, 

Object.keys(obj).forEach((key, index)=>{
    console.log(key,obj[key])
})

Object.values(obj).forEach(value =>{
    console.log(value);
})
Object.entries(obj).forEach(value =>{
    console.log(value);
})
Object.entries(obj).map(value =>{
   return value[1] + value[0].replace("username","")
})

//next lesson: Async Await