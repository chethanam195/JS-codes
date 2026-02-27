const user={
    username:"chethana",
    price:987,
    welcomemessage:function(){
        console.log(`${this.username},welcome to website`)
        console.log(this)
    }

}

// user.welcomemessage()
// user.username="sam"
// user.welcomemessage()

// console.log(this)

// function chaia(){
//     let username="chethana"
// console.log(this.username)
// }
// chaia()

// const chai =function(){
//     let username="chethana"
//     console.log(this.username)
// }
// chai()


// const chai=()=>{
// let username="chethana"
// console.log(this.username)
// }

// these the syntax of the arrow function const variable name=() => {
    // }and these the way tha arraow function

    // const addTwo=(num1,num3) => {
    //     return num1+num3
    // }
    // console.log(addTwo(3,4))

    //  const addTwo=(num1,num3) => num1+num3
    
    // console.log(addTwo(3,4)) 
    // these where the implict where there will be knowing what i want to do there is no need of writing the return keyword for i will perform of it
 
    const addTwo=(num1,num2)=>({username:"chethana"})
    console.log(addTwo(5,6))


    const myarr=[3,4,5,6]
    //myarr.forEach(()=>())