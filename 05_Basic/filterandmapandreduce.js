const coding=["js","ruby","java","python","cpp"]
// coding.forEach((item)=>{
//     console.log(item)
// })
// const values=coding.forEach((item)=>{
//     console.log(item)
//     return item
// })
// console.log(values)// and they don't return any values

// const mynum=[1,2,3,4,5,6,7,8,9,10]
// //const newnums=mynum.filter((num)=>num>4)
// const newnums1=mynum.filter((num)=>{
//     return num>4
// })

// const newNums=[]
// newNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })






// console.log(newnums)






const books=[
    { title:'Book1',genre:'fiction',publish:'1967',edition:2004},
      { title:'Book2',genre:'History',publish:'1977',edition:2005},
        { title:'Book3',genre:'Non-fiction',publish:'1867',edition:2006},
          { title:'Book4',genre:'science',publish:'1997',edition:2007}
]
//const userbooks=books.filter((bk)=>bk.genre==='History')
// const userbooks=books.filter((bk)=>{
//     return bk.publish>=1989|| bk.genre=="fiction"})
// console.log(userbooks)

let readbooks=books.filter((rk)=>rk.genre==="science")
readbooks=books.filter((rk)=>{
    return rk.publish>=1977 && rk.genre==="History"
})
console.log(readbooks)