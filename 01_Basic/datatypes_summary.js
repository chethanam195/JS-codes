// Primitive

// 7 types:String,Number,Boolean,null,undefined,Symbol,BigInt

//javascript is a static dynamically
//const score=100
//const scoreValue=100.3
//const isloggedIn=false
//const outsideTemp=null
//let userEmail=undefined;

// symbol declared
// const id =Symbol('123')
// const anotherId=Symbol('123')
// console.log(id === anotherId);

//const bigNumber=567890432n

// Reference type(Non-primitive)

//Array,Ojects,Functions

// all things inside the curly brackets is object and all types of datatypes
const heroes=["shak","naagraj","don"];
let obj={
    name:"chethana",
    age:22,
}
// function(){} these the function
const myFunction=function(){
    console.log("Hello world");
}

console.log(typeof obj);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//stack (primitive type) here you will get the copy
//heap (Non-primitive type) here you will get the refernce and it is orginal

let youtubename="chethana"
let anotheryoutubename=youtubename
anotheryoutubename="lifeofchethana"
console.log(youtubename)
console.log(anotheryoutubename)

let userOne={
    name:"chethana",
    accountid:23456
}
let usertwo=userOne
usertwo.name="vidhya"
console.log(userOne.name)
console.log(usertwo.name)