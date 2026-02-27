//Array//

const myArr = [0,1,2,3,4,5] // all the time of elements is included and it is represented by the square brackets
// storing all types of elements in the single variable
console.log(myArr[0]) // Acess of the elements
// shallow copy of an object whose properties share the same refernce
// deep copy where properties do not share the sme references as the source and the copy object 
// javascript array_copy_operations create the shallow copies it is same as the heap one
// const myHeroes=["shaktjiman","naagraj"]
// const myarr2=new Array(1,2,3,4,5,6)
// console.log(myHeroes[0])
// console.log(myarr2)

//Array Methods

// myArr.push(6)
// myArr.push(7)
// // myArr.pop()
// myArr.unshift(9)// it adds the element in the first 
// myArr.shift() // it removes the element in the first 
// console.log(myArr)
// console.log(myArr.includes(9)) // it comes from the boolean type
// console.log(myArr.indexOf(2))
// const newarr=myArr.join() // it basics converts all the elements to the string
// console.log(typeof newarr)
// console.log(typeof myArr)

//++++++++++++++ Slice and splice ++++++++++++++
// slice returns the copy of the selection of the array
//slice does not change the orginal array
// splice method of array instance changes the contents of an array by removing or replacing existing elements and adding the new element
console.log("A",myArr);
const myn1=myArr.slice(1,3)
console.log("B",myArr)
console.log(myn1)
const myn2=myArr.splice(1,3)
console.log("C",myArr)
console.log(myn2)