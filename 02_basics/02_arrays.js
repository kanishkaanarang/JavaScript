const marvelHero = ["thor","ironman","spiderman"]
const dcHero = ["superman","flash","batman"]
marvelHero.push(dcHero)
console.log(marvelHero) //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

//to fully merge
const allHero = marvelHero.concat(dcHero) //not in orginal array, returns a new array
console.log(allHero) 

//easier: spread method 
const allNewHero = [...marvelHero, ...dcHero]
console.log(allNewHero)

const aArray = [1,2,3, [4,5,6], 7, [6,7, [4,5]]]

const realArray = aArray.flat(3)//parameter is depth, can give depth
console.log(realArray)
 
console.log(Array.isArray("kanishka")) //false because this array is not in array
console.log(Array.from("kanishka"))
console.log(Array.from({name:"kanishka"})) //gives empty array because 
// you need to tell first thart you want the array of keys or values // important

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))

//is, from, of functions are important