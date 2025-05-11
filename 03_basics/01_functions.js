// functions are used when same block of code needs to be repeated
function sayMyName () {
    console.log("kanishka")
}

sayMyName // reference
sayMyName() // execution

function addNum(num1, num2) {
    console.log(num1+num2)
}

addNum() //NaN
addNum(3,4) //7 
addNum(3,"4") //34
addNum("3",4) //34
addNum(3,"a") //3a
addNum(3, null) //3

//parameters are given at definition
//arguments are given while calling

const result = addNum(3,5) //8
// but 
console.log ("result is", result) //result is undefined

// if function does no return the value just printed it then its return type is null

function addNum2(num1, num2) {
    return num1+num2
    console.log(kanishka); //this will not execute 
}
const result2 = addNum2(3,5) //8
// but 
console.log ("result is", result2) //result is 8

function loginUserMessage(username) {
    if(username === undefined) // (!username)
    {
        return `please enter a username`
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("kanishka")) //kanishka just logged in
console.log(loginUserMessage()) //undefined just logged in but when we use if loop then please enter a username

// can give default value as well (username = "default")

//shopping cart

function calculateCartPrice (val1,val2,...num1){ //... is rest(here) but also spread 
    return num1
}

console.log(calculateCartPrice(5,10,20)) //[ 20 ]

const user = {
    username:"kanishka",
    age: 18
}

function handleObject(anyobject){
    console.log(`user is ${anyobject.username} & age is ${anyobject.age}`)
}

handleObject(user)

const myNewArray = [200,300,400,500]
function returnSecVal (getArray){
    return getArray[1]
}

console.log(returnSecVal([5,2,6,5,4]))//2
console.log(returnSecVal(myNewArray)) //300