// DATES

let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleTimeString())

/* 
OUTPUT OF THIS :
2025-05-06T11:21:08.870Z
Tue May 06 2025 11:21:08 GMT+0000 (Coordinated Universal Time)
Tue May 06 2025
2025-05-06T11:21:08.870Z
5/6/2025, 11:21:08 AM
5/6/2025
2025-05-06T11:21:08.870Z
11:21:08 AM
*/

// console.log(typeof myDate) // object

let myCreatedDate = new Date(2022,5,25) //month is one less 5 means june
console.log(myCreatedDate.toDateString())
//Sat Jun 25 2022 
let myCreatedDate1 = new Date(2022,5,25,16,16) //month is one less 5 means june
console.log(myCreatedDate1.toLocaleString()) 
// //6/25/2022, 4:16:00 PM

/*********************************   time   **********************************************************/

let myTimeStamp = Date.now()
console.log(myTimeStamp) // 1746533386020
console.log(myCreatedDate.getTime()) // 1656115200000
console.log(Math.floor(Date.now()/1000)) // in seconds

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDate())
console.log(newDate.getDay()) // ... and many more

// console.log(`${newDate.getDay()} and the time ${newDate.getTime()} `)

newDate.toLocaleString('default',{
    weekday: "long",
    timeZone : ''
})