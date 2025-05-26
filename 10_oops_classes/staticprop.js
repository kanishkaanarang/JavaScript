class user{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`username : ${this.username}`)
    }

    static createId(){ // agar access sabko nhai dena chahte
        return `123`
    }
}

const kanishka = new user("kanishka")
//console.log(kanishka.createId())

class teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iphone = new teacher("iphone","iphone@abc.com")
iphone.logMe()
console.log(iphone.createId()) // not a function