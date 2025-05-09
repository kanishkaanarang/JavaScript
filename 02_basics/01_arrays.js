// ARRAY

const myArr = [0,1,2,3,4,5] // resizable, different datatypes, not associative, 0 indexed, non- primitive
const myHeroes = ["shaktiman","naagraj"]
const myArr2 = new Array(0,1,2)

console.log(myArr[0]) 
/*
array copy functions make shallow copies
what are shallow copies? --> copy whose properties share the same references as of source object
*/

//methods:

myArr.push(6)
console.log(myArr)
myArr.pop()

// myArr.unshift(9) //not good because shifts all elemnts
myArr.shift() // removes first element

console.log(myArr.includes(9)) // returns boolean
console.log(myArr.indexOf(5)) // if value does not exist gives -1

const newArr= myArr.join()
console.log(myArr) 
console.log(newArr)
console.log(typeof newArr)  // string 

//slice or splice

console.log("a",myArr)
const myn1 = myArr.slice(1,3)  // does not include 3rd does not change original array
console.log(myn1)
console.log("b",myArr)
const myn2 = myArr.splice(1,3) //includes 3rd does change original array
console.log(myn2)
console.log("c",myArr)

