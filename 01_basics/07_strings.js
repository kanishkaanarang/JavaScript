// "" and '' are same
const name = "kanishka "
const repoCount = 100

console.log(name + repoCount + " Value");

console.log(`hey my name is ${name}and my repo count is ${repoCount}`) 
//modern way called string interpolation

const gameName = new String("kanishka_n") //string is a object who has indexing from 0

console.log(gameName[0])
console.log(gameName.__proto__) // => {}
console.log(gameName.length) // gives length
console.log(gameName.toUpperCase()); // does not change original because primitive
console.log(gameName.charAt(2)) ;
console.log(gameName.indexOf("t")) // found then gives index otherwise -1

const newStr = gameName.substring(0,8) // - bhi doge toh bhi 0 se start hoga
console.log(newStr) 

const newStr1 = gameName.slice(-8,4)
console.log(newStr1) 

const newStr2 = "           kanishka         "
console.log(newStr2.trim()) // trimstart and trimend also exists to remove the start and end spaces

const url = "https://kanishka.com/kanishka%narang" // space is converted to %
console.log(url.replace('%','-'))
console.log(url.includes('kn'))

//to convert string into array at suppose -
const string1 = "kanishka-narang"
console.log(string1.split("-")) // => [ 'kanishka', 'narang' ]