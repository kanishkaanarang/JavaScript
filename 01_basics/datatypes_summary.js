// Primitive, these are call by value or can say are immutable

/*
7 categories :
string 
number
boolean
null -typeof gives object
undefined
symbol -typeof gives symbol
bigInt -typeof gives undefined
*/

const id= Symbol('1')
const id2= Symbol('1')
console.log(id === id2) // gives false

//Non Primitive or reference datatype, call by reference

/*
array
objects
functions - typeof gives function only but if typeof function Name is asked then object
*/

const heros=["shaktiman","naagraj"]
let obj = {
    name:"kanishka",
    age:22
};

const myFunction = function(){
    console.log("kanishka");
}
myFunction()


// JavaScript is a dynamically types language