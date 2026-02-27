// let myname="chethana    "
// console.log(myname.truelength);
// i want to craete a true length as method where it gives proper length without the whitespaces
let myhero=["thor","spidername"]
let heropower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderpower:function(){
        console.log(`spidy power id ${this.spiderman}`)
    }
}
Object.prototype.chethana=function(){
    console.log(`chethana is present in all objects`)
}
Array.prototype.heychethana=function(){
    console.log(`Hitesh all hello`)
}
//heropower.chethana()
myhero.chethana()
// where we can top priority we added the properties and all of these we added
myhero.heychethana()
//heropower.heychethana()


// Inheritance
const User={
    username:"chethana"
}
const teacher={
    makevideo:true

}
const teachingsupport={
    isAvailable:false
}
const TaSupport={
    makeAssignment:"Js assignment",
    fullTime:true,
    __proto__:teachingsupport
}
teacher.__proto__=User

//Modeern syntax 

//set __proto__ type it is used
Object.setPrototypeOf(teachingsupport,teacher)

let anotherusername="chethana   "
String.prototype.truelength=function(){
    console.log(`${this.username}`)
    console.log(`${this}`)
    console.log(` the length is:${this.trim().length}`)
}
anotherusername.truelength()
"chethana".truelength()
"icetea".truelength()