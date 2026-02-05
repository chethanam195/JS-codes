const accountId=1234
let accountEmail="chethana@gmail.com"
var accountnumber=3456
accountCity="Bengaluru"
let accountstate;

// console.log(accountEmail);
/* prefer not to use var because the issue in block scope and functional scope 
*/
 accountCity="andhra"
 accountnumber=45678
 accountEmail="cheth@gmail.com"
console.table([accountCity,accountEmail,accountId,accountnumber])
console.log(accountstate)