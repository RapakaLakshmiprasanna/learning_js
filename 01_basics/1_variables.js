const accountId = 123456;
// accountId = 11 not allowed to reassign a const variable
console.log(accountId)

var accountName = "Laxmi"; 
accountName = " R Lakshmi";
console.log(accountName)
//  we can reassign a var variable but their may be a problem while using in the block of scope so perfer not to use var

let accountBalance = 1000;
accountBalance = 2000;
console.log(accountBalance)
// we can reassign a let variable and also it is block scoped

let accountState;
console.log(accountState) // if we directly declare a variable but we dont assign a value to it dynamically js itself declare it as undefined

console.table([accountId,accountName,accountBalance])