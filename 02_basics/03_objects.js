// singleton - apni tarah ka ek hi object hai {literals me nahi banta, constructor me banta hai}

//object literals

// Object.create

const symb= Symbol("key1"); 

const user ={
    name:"Kanishka",
    "full name": "kanishka narang",
    symb: "mykey1",
    [symb]:"mykey1",
    age:18,
    location:"delhi",
    email:"kanishka@xyz.com",
    isLoggedIn:false,
    lastLoginDays: ["monday","saturday"]
}     
// name :key and kanishka :value

console.log(user.email) 
//other method
console.log(user["email"]) //if key is in "key" way you cannot access it through . method
// both results in kanishka@xyz.com
console.log(user.symb)
console.log(typeof user.symb) //gives string
//if you want to use it as symbol then
console.log(user[symb])

//to change values
user.email="kanishka@abs.com"
console.log(user)
// if you want that the value should not be changed then :
//Object.freeze(user)
user.email="kanishka@abc.com" // will not change because object is freezed
console.log(user)

// functions in js are treated as variables
user.greeting = function(){
    console.log("hello namamste")
}
user.greeting2 = function(){
    console.log(`hello ${this.name}`)
}

console.log(user.greeting()) // hello namaste
console.log(user.greeting) //undefined [Function (anonymous)]
console.log(user.greeting2())