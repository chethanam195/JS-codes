function sayName(){
    console.log("C")
     console.log("H")
      console.log("E")
       console.log("T")
        console.log("H")
         console.log("A")
          console.log("N")
          console.log("A")

}
// //sayName()
// function addtwonumbers(number1,number2){
//    console.log( number1+number2)

// }
// addtwonumbers(3,5)

function addtwonumbers(number1,number2){
    // let result=number1+number2
    // return result
    return number1+number2
}


function LoginUserMessage(username="sam"){
    if(username===undefined){
        console.log("Please enter a username")
        return
    }
    return`${username} just logged in`
}
console.log(LoginUserMessage("Chethana"))
console.log(LoginUserMessage())

function calculateCartPrice(...num1){
return num1
}
//console.log(calculateCartPrice(200,990,007))
const user={
    username:"chethana",
    price:456
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`)

}
handleObject(user)

handleObject({
    username:"chethana",
    price:345
})
//console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`)
const MyNewarray=[123,345,678,888]
function returnSecondvalue(getArray){
    return getArray[1]
}
console.log(returnSecondvalue(MyNewarray))