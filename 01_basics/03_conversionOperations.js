let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score) //changes datatype to number
console.log(typeof valueInNumber);
console.log(valueInNumber); 

/* 
Nan or if the string has only numbers then the number itself
if score would've been = null then valueInNumber = 0 
typeof valueInNumber = number
typeof(score) = object 
if score would've been = undefined then valueInNumber = NaN 
typeof valueInNumber = number
typeof(score) = undefined
if score would've been = true/false then valueInNumber = 1/0 
typeof valueInNumber = number
typeof(score) = boolean
*/

let isLoggedIn =1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); 

/*
1 is converted to true, 
"" empty string is false,
0 is false,
"kanishka" is true
*/

// number <=> string possible