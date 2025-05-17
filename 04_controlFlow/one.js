// if statement

const temp = 50
// execute only when condition is true:
// if(condition - true) {}

if (temp<50){
    console.log("temperature is less than 50")
}
else{
    console.log("temperature is greater than 50")
}
// comparison operators : >,<,>=,<=,==,!=,===,!==

const balance = 900
if(balance<1000) console.log("less money"),
console.log("try saving"); // implicit scope but not good code

// multiple conditions
if (balance<500){
    console.log("less")
} else if ( balance<750){
    console.log("medium")
} else if (balance<1000){
    console.log("good")
} else {
    console.log("high")
}

const isUserLoggedIn = true 
const debitCard = true
const truevar= true
const falsevar = false
if (isUserLoggedIn && debitCard ){
    console.log("buy any course")
}
if(truevar || falsevar){
    console.log("one statement is true that is why || works")
}