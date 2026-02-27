const coding=["js","ruby","javascript","java"]
coding.forEach( function (item) {
   // console.log(item)
}) // in the call back function we will not be having the function name and then there will be where we call it anything we want it is mentioned as item
// and then it will call of it

coding.forEach( (item) => {
     //console.log(item)
})
 
function printMe(item){
    //console.log(item)
}
//coding.forEach(printMe)
coding.forEach((item,index,arr)=>{
console.log(item,index,arr)
}) // there is differnt things execpt the arr,item,index

const mycoding=[
    {
    lang:"javascript",
    file:"js"
},
{
    lang:"java",
    file:"java"
},
{
    lang:"python",
    file:"py"
}
]
mycoding.forEach((item)=>{
    console.log(item.file)
}) // these how the the object are taken in it