// mostly used
class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    } // getter likho toh setter toh likhna hi padega

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}kay`
    }

    set password(value){
        this._password = value
    }
}

const kanishka = new User("k@kay.ai", "abc")
console.log(kanishka.email);
console.log(kanishka.password)