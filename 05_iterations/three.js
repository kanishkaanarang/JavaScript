// for of

const arr = [1,2,3,4,5]

for (const num of arr) {
    //console.log(num)
}

const greetings = "hello world!"
for (const greet of greetings) {
    //console.log(greet)
}

// Maps

const map = new Map()
map.set("IN","India")
map.set("USA","United States of America")
map.set("FR","France")
//console.log(map)
/* Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'FR' => 'France'
}
  here values are unique(no repitions) and the order remains same
*/

for (const key of map) {
    //console.log(key)
}
/*[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'FR', 'France' ]
*/

for (const [key,value] of map) {
    //console.log(key, ":" , value)
}
/*
IN : India
USA : United States of America
FR : France
*/

const myObj = {
    "game1": "BGMI",
    "game2":"COC",
    "game3":"COD"
}

// for (const [key,value] of myObj) {
//     console.log(key, ":" , value)
// }
// TypeError: myObj is not iterable