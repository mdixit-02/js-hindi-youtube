const accountId = 15567
let accountEmail = "meghadixit2018@gmail.com"
var accountPassword = "1224477"
accountCity = "Jaipur"
let accountState;

//accountId = 2  //not allowed because constant cannot be changed

accountEmail = "md2023@gmail.com"
accountPassword = "999999"
accountCity = "Pune"

console.log(accountId)

/* 
Prefer not to use Var because 
of issue in block scope or functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])