// stack (primitive) - gives copy
// heap (non primitive) -  gives reference

let myYoutubeName = "kanishkaa_narang"

let anotherName = myYoutubeName
anotherName = "kanishkaanarang_"

console.log(myYoutubeName)
console.log(anotherName)

let user1 = {
    email:"kn@xyz.com",
    upi: "user@ybl"
};

let user2 = user1 //given direct reference

user2.email = "kn1@xyz.com";

console.log(user1)
console.log(user2)
