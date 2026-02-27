//ES6 it synactic coding

// class User{
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email
//         this.password=password
//     }

//     //method
//      encruptpassword(){
//         return `${this.password}abc` // these of return of the password

//      }
//      changeusername(){
//         return `${this.username.toUpperCase()}` // in these we are doing of the capital the password
//      }
// }

const chai=new User("chai","chai@gmail","123")
//console.log(chai.encruptpassword())


//behind scene

function User(username,email,password){
this.username=username;
this.email=email;
this.password=password;
}
User.prototype.encruptpassword=function(){
    return `${this.password}abc`
    User.prototype.changeUsername=function(){
        return `${this.username.toUpperCase()}`
    }
}
const tea=new User("chai","chai@gmail","123")
console.log(tea.encruptpassword())
console.log(tea.changeUsername())

