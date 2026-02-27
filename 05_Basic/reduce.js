const mynums=[1,2,3,4,5]

// const mytotal=mynums.reduce(function(acc,currrent){
//     console.log(`the Accumalator value is ${acc} and the current value : ${currrent} `)
//     return acc+currrent
// },0)
const mytotal=mynums.reduce((acc,current)=>acc+current,0)
console.log(mytotal)

const shoopingcart=[{
    itemname:"js",
    price:567
},
{
    itemname:"java",
    price:5670
},
{
    itemname:"python",
    price:570
}
]
const shoopers=shoopingcart.reduce((acc,item)=>acc+item.price,0)
console.log(shoopers)