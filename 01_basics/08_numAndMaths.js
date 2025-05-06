const score = 100
console.log(score) // => 100

const balance = new Number(100) //explicitly define 
console.log(balance) // => [Number:100]

console.log(balance.toString().length) // => 3

console.log(balance.toFixed(2)) // number of decimals to be added => 100.00

const decNum = 234.0598
console.log(decNum.toFixed(2)) // => 234.06

console.log(decNum.toPrecision(6)) // from left 6th position ~ roundoff => 234.060
//but if the number is suppose 2340.59 then and it is toPrecision(3) then it will give 2.23e+0

const hundreds = 1000000
console.log(hundreds.toLocaleString()) // give me acc to international value
console.log(hundreds.toLocaleString("en-IN")) // give me acc to indian value



//***************************************    MATHS     *********************************************//

console.log(Math) // => Object [Math] {}
console.log(Math.abs(-1))
console.log(Math.round(5.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.min(4,3,-1,9))

//sqrt,pow,sin,max ...

console.log(Math.random())
console.log((Math.random()*10)+1) // to get integer use math. ceil or floor

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1) +min))