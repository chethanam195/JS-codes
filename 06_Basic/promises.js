// fetch('https://api.github.com/users/hiteshchoudhary').then().catch().finally()
// creating of the promises and there is 
//promise is a object and where from the new instance will be created
 // these how the promise created
//  bluebird ids the frame we check and see and then the node js as added now and now there is more powerful
const promiseone=new Promise(function(resolve,reject){
    //Do an Async task
    //DB calls,cyrtography
    //network
    setTimeout(function(){
        console.log('Async task complete')
        resolve()
    },1000)
}) 
// these the question what does the receive and the reject does
promiseone.then(function(){
    console.log("Promise Consumed")
}) 
// there is relation with the dot then
new Promise(function(resolve,reject){
setTimeout(function(){
    console.log("Async task 2");
    resolve()
},1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promisethree=new Promise(function(resolve,reject){
    setTimeout(function(){
resolve({username:"chethana",email:"chethana@gmail.com"})

    },1000)
})
promisethree.then(function(user){
console.log(user)
})

const promisefour=new Promise(function(resolve,reject){
setTimeout(function(){
    let error=true
    if(!error){

        resolve({username:"javascript",password:"123"})
    }
    else {
        reject("there is a something error in the javascript")
    }
},1000)
})
const username=promisefour
.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=>console.log("is the promise is rejected or resolved"))
// console.log(username)
const promisefive=new Promise(function(resolve,reject){
setTimeout(function(){

},1000)
})

async function consumePromiseFive(){
    const response=await promisefive
    console.log(response)
}
// consumePromiseFive()

// async function getAlluser(){
// //    const response=await fetch('https://jsonplaceholder.typicode.com/users')
// //    const data=response.json()
// //    console.log(data)
// try {
// const response=await fetch('https://jsonplaceholder.typicode.com/users')
// const data=response.json()
// console.log(data)
// } catch (error) {
//     console.log("E",error)
    
// }
// }
// getAlluser()
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>console.log(error))

// what is a fetch and how does it works
// web pages dependently so they were not adding to node js and browser ased stream apis
// is the global and process it will request and there is a the global fetch () method starts the
// process of the fetching a resource the network , returning a promise which is fulfilled once the response is available
// specification will explain and the browser reads from it
// there is a special queue and the default name: micro task queue,priority queue there is first executes other than others
// fetch works is in two parts 1. is the web or nodes and other will be for the variables and know about the onfulfield: is the promise and they are data is private field and on rejection these all the promise
// web browser and node api and it will gt the network and there will be the refernce and will move to the promise
// data will be memory