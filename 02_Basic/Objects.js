// singleton 
//Objects literals

 const mysym=Symbol("key1")
 const user1={
 name:"chethana",
"fullname":"chethana.M",
[mysym]:"mykey1",
email:"chethana@gmail.com",
 age:24,
 location:"Bengaluru",
 isLoggedIn:false,
lastLoginDays:["Monday","Saturday"]
}
// console.log(user1.email)
// console.log(user1["fullname"])
// console.log(user1[mysym])
// user1.email="google.com"
// console.log(user1)
// Object.freeze(user1)
// user1.email="google.com" // change like these and override the value
// console.log(user1)


user1.greeting=function(){
    console.log("Hello world");
}
user1.greeting2=function(){
    console.log(`the user name is${this.name}`)
}
// whenever we are writing on the object verification we are goin to use the this know about all the properties and exist
console.log(user1.greeting2());
console.log(user1.greeting());

// and all time use the .properties and then differnt of the []