class user{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends user {
    constructor(username, email, password) {
        super(username) // jis class ko extend krre ho uska reference -> behind the scene
        this.email=email;
        this.password=password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const someuser = new Teacher("kanishka","kanishka@gmail.com","123")
someuser.addCourse()
someuser.logMe() // has access

const masalaChai = new user("kanishka Narang")
//masalaChai.addCourse() // no access
masalaChai.logMe()

console.log(someuser===masalaChai) // false
console.log(someuser===Teacher) //false
console.log(someuser instanceof Teacher) //true
console.log(someuser==Teacher) // false
console.log(someuser instanceof user) //true