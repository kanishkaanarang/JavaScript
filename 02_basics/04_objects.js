//constructor or singleton
const tinderUser2 = new Object()   // {}
//non singleton
const tinderUser = {}    // {}

tinderUser.id = "123xyz"
tinderUser.name = "me"
tinderUser.isloggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userfullname:{
            firstName:"kanishka",
            lastName:"narang"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstName)

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}

const obj3 = {obj1, obj2}
console.log(obj3) //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign(obj1,obj2)
console.log(obj4) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5 = Object.assign({}, obj1, obj2) ////{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' } 
// {} -> target and other parameters become sources
console.log(obj5)

const obj6= {...obj1,...obj2}
console.log(obj6) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users =  [
    {
        id:1,
        email:"kanishka1@gmail.com"
    },
    {
        id:2,
        email:"kanishka2@gmail.com"
    },
    {
        id:3,
        email:"kanishka3@gmail.com"
    },
    
]

console.log(users[1].email) // kanishka2@gmail.com
console.log(tinderUser)

console.log(Object.keys(tinderUser)) // keys in an array --> [ 'id', 'name', 'isloggedIn' ]
//same for values
//.length can be used
console.log(Object.entries(tinderUser))
// array which contains arrays whos 1st value is keys and 2nd value is values of the object 
//[ [ 'id', '123xyz' ], [ 'name', 'me' ], [ 'isloggedIn', false ] ]


console.log(tinderUser.hasOwnProperty('name')) //true

// destructuring :

const course = {
    courseName :"JavaScript",
    price: "999",
    courseInstructor :"Hitesh"
}

const {courseInstructor:CI} = course
console.log(CI)


