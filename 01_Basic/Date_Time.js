// // let myDate=new Date()
// // console.log(myDate.toString())
// // console.log(myDate.toDateString())
// // console.log(myDate.toLocaleDateString())
// // console.log(typeof(myDate))
// // let mycreatedone=new Date(2023,0,23)
// // console.log(mycreatedone.toDateString()) // it mention the day and date of the year
// let mycreatedone1=new Date("2026-02-21")
// console.log(mycreatedone1.toLocalString());
// let myTimeStamp =  Date.now()
// console.log(myTimeStamp)
// console.log(mycreatedone.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
console.log(newDate.getDate())
console.log(newDate.getMonth() + 1)
console.log(`${newDate.getMonth()} and these the month of the year`)
console.log(newDate.toLocaleString('default',{
    weekday:"long"
}))
newDate.toLocaleString('default',{
    
})