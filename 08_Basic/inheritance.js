class User{
    constructor(username){
        this.username=username
    }

    LogMe(){
        console.log(`Username is ${this.username}`)
    }
}


      

class teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password

    }
    addCourse(){
        console.log(`A new course was added ${this.username}`)
    }
}const chai=new teacher("chai","chai@gmail","123")
chai.addCourse()
const masalaChai=new User("masalaChai")
masalaChai.LogMe
console.log(chai instanceof User)