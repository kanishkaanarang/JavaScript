const accountId = 250606
let accountEmail = "kanishkaa@xyz.com"
var accountPass = "12345" 

/*
we do not use var because
of issue in block scope and functional scope
*/

accountCity = "Delhi" //can do this but not a good practice

// accountId=25062006 //not allowed

accountEmail="kanishka_n@xyz.com"
accountPass= "012345"
accountCity= "goa"

// console.log(accountEmail);
// console.log(accountPass);
// console.log(accountCity);
// since above is not a good method so we will use console.table

let accountState; //if not assigned then it's value is unasssigned

console.table([accountEmail, accountId, accountPass, accountCity, accountState])
