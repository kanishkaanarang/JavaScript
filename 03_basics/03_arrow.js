const user = {
    username:"kanishka",
    age:18,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`) // "this" refers to current context
        console.log(this)
    }
}
/*
{
  username: 'kanishka',
  age: 18,
  welcomeMessage: [Function: welcomeMessage]
}
*/

user.welcomeMessage()
user.username = "krish" // context changed
user.welcomeMessage()

/*
{
  username: 'krish',
  age: 18,
  welcomeMessage: [Function: welcomeMessage]
}
*/ 

console.log(this) // {} because we are in node environment 
// whereas in browser global object is window object 

// function chai(){
//   let username="kanishka"
//   console.log(this.username) // undefined, because this works in objects not functions
// }

// chai()
// const chai = function () {
//   let username="kanishka"
//   console.log(this.username) // undefined, because this works in objects not functions
// }

// chai()

const chai = () => {
    let username="kanishka"
    console.log(this.username) // undefined
}

//chai()
// arrow function :
// const addTwo = (num1,num2) => {
//   console.log(num1+num2)
// }
// addTwo(9,0)

//implicit return
// const addTwo = (num1,num2) => console.log(num1+num2)
//or
// const addTwo = (num1,num2) => (num1+num2)
const addTwo = (num1,num2) => {name:"kanishka"} // to run this () are compulsory

console.log(addTwo(9,0))

// in curly braces we need to write return keyword, that is known as explicit return 