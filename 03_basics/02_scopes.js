
// let var and const
// let a = 10
// const b = 20
// var c = 30 

var c = 300

{} // scope
if(true){
    let a = 10
    const b = 20
    var c = 30 
}

// console.log(a) // a is not defined
// console.log(b) // b is not defined
console.log(c) // 30 -> this is a problem

/*
there are 2 types of scopes -> block and global
global scopes can be used in the block but block scope variables cannot be used globally
*/

a =300
if(true){
    let a = 10
    const b = 20
    console.log(a)    //10 => block scope
}

console.log(a) // 300 -> global scope

// => good usage : let 

// scope is different for coding environment and console 




/*****************************************************************************************************/

function one(){
    const username = "kanishka"

    function two(){
        const website = "youtube"
        console.log(username) // kanishka
    }
    // console.log(website) //website is not defined
    two()
}
one()
//in nested functions child can access parent variables but not vice versa

if(true){
    const username = "kanishka"
    if(true){
        const website = "youtube"
        console.log(username+website) //kanishkayoutube
    }
    // console.log(website) //website is not defined
}
// console.log(username) //username is not defined

// +++++++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(6)) // 7
function addone(value){
    return value + 1
}
console.log(addone(6)) // 7

//console.log(addTwo(6)) //  Cannot access 'addTwo' before initialization
const addTwo = function(value){
    return value+2
} // this can also be called expression

console.log(addTwo(6)) // 8
