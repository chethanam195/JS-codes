class user{
    constructor(email,password){
      this.email=email 
      this.password=password 
    }

     get password(){
          return this._password.toUpperCase()
         //return `${this._password}chethana
    }
   set password(value){
         this._password=value.toUpperCase()
     }
          get email(){
    return this._email.toUpperCase()
}
    set email(value){
     this._email=value
}
 }


const chethana=new user("chethana.ai","abc")
console.log(chethana.password)