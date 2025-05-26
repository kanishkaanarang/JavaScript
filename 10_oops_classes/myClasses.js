// // ES6

// class user {
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }

//     encryptPasword(){
//         return `${this.password}abc`
//     }

//     capUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const chai= new user("kanishka","kanishka@gmail.com","123")
// console.log(chai.encryptPasword());
// console.log(chai.capUsername());

//BTS

function user(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}

user.prototype.encryptPasword = function(){
    return `${this.password}abc`
}
user.prototype.capUsername = function(){
    return `${this.username.toUpperCase()}`
}

const chaitea= new user("kanishka","kanishka@gmail.com","123")
console.log(chaitea.encryptPasword());
console.log(chaitea.capUsername());