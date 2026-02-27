function Setusername(username){
    this.username=username
    console.log("called")
}

function createUser(username,email,password){
    Setusername.call(this,username) // call hold the refernce
    this.email=email
this.password=password
}

const chai=new createUser("chai","chai@gmail","123")
console.log(chai)
// these where it will send the current execution to the previous one