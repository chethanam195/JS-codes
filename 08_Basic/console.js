const newHero=["hulk","spiderman"]
console.log(newHero)
// prototype is a bahaviour of leaning of things and it will search the more what i can do like that way 
// and array,string is a object reference will be null and no parent
//function is a
function userone(num){
    return num*4
}
userone.power=2
console.log(userone(4))
console.log(userone.power)
console.log(userone.prototype) // by default context and then the internal properties
// and everything is object and the function also function and also the object
// and the object is the end and then lasts it will null

function createUser(username,score){
    this.username=username
    this.score=score
}
createUser.prototype.increment=function(){ // these of the adding of the function to it here we are adding the score and username to it with the increment keyword and injecting it

    this.score++//current context
}
createUser.prototype.printMe=function(){
console.log(`score is ${this.score}`)
}
const chai=new createUser("chartha",234)
const tea=createUser("tea",34)

chai.printMe() 
//  there will be a interview question what tells the the javascript finds it own way but there is a error telling that cannot read properties of undefined where we written in the line of 30
//new keyword will be the then will understand what it should 
// new  object is creates : the new keyword intitates the creation of new javascript object
//A prototype is linked: the newly created object gets linked to the prototype property of the constructor function.This means that has access to properties and methods defined on the constructor prototype
// The constructor is called: The constructor function is called with the specified agruments and this bound to the newly created object.If no explict return value is specified from the constructor.Javascript
// assumes this the newly created object to be the intended return value
// The new object is returned:After the constructor function has been called , if it doesn't return a non-primitive value
