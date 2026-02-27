const tinderUser=new Object()
 tinderUser.id="1234ac"
 tinderUser.name="greesham"
 tinderUser.isLoggedIn=false
console.log(tinderUser)

const regularUser={
    email:"chethana@gmail.com",
    fullname:{
        userfullname:{
            firstname:"chethana",
            lastname:"M"
        }
    }
}
console.log(regularUser.fullname?.userfullname.firstname);

const obj1={1:"a",2:"c"}
const obj2={3:"r",4:"p"}
//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
console.log(obj3)

// const users=[
//     {
//         id:1,
//         email:chethna@gmail.com
//     }
// ]
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
// these where we are going to ask there is a value like that to the object
console.log(tinderUser.hasOwnProperty('isLoggedIn'))


const course={
    coursename:"js in hindi",
    price:"999",
    coursedetails:"Content of javascript"
}
//console.log({},course)
const {coursedetails:details}=course
console.log(coursedetails)

const navbar=({comapany})=>{

}
navbar(comapany="chethana")

