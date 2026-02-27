// what is literal it way literally creating of the object
const user={
    username:"chethana",
    loginCount:8,
    signedIn:true,
    getUserdetails: function(){
       //console. log("got user details in database")
       console.log(`Username:${this.username}`)
       console.log(this)
    }
}
console.log(user.username)
console.log(user.getUserdetails())
// whenever there is we use the this we will go to use the current context
console.log(this) // in the global there will be the empty bracket
// whenever there is a required of adding of many users there we are going to use the constructor

// const promiseone=new Promise()
// const date=new Date() // new is the constructor only literal create many instnces

function User(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    return this
}
const userone=new User("chethana,12,true")
const usertwo=new User("chaiaurcode,12,true")
console.log(userone.constructor);
// console.log(usertwo)// it will overwrite
//constructor function it creates the new one 
// constructor is the refernce of itself only
// there is  a instance of