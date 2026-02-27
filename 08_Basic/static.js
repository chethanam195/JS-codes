class User{
    constructor(username){
        this.username=username
    }
    LogMe(){
    console.log(`Username:${this.username}`)
}

static createdId(){   // it is where it will make to not to access
    return 123
}
}
const chethana=new User("chethana")
//console.log(chethana.createdId())


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iphone=new Teacher("iphone"
    ,"iphone@gmail")
    console.log(iphone.createdId)