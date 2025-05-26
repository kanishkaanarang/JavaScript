// not used these days 
const User = {
    _email: 'k@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User) // factory function 
console.log(tea.email);
// _ shows a private password
// getter and setter are methods to overwrite and return
// get leke aata hai
// set value ko set krta hai 