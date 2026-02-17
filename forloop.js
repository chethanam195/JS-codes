// for of
// these are array formed loops and then object included
//["",""]
//[{},{}]
// it is a for in and then they are is a synatx it mentions 
// of the iterator means the name of we want to mention and then the the object here we should confuse to the object but it should include to the which array we are performing here it is myarr the array we have declared
const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num)
}
const greeting="hello world" // it is of the string form
for(const greet of greeting){
    console.log(`Each char is ${greet}`)
}

// Maps

const map=new Map()
map.set('In',"India")
map.set('US',"United States of America")
map.set('fr',"france")
//console.log(map)

for(const [key,value] of map){
    console.log(key,':-',value)
}

// object where for loop
const myOject={
    'game1':'NFS',
    'game2':'spiderman'
}
// for(const[key,value] of myObject){
//     console.log(key,':-',value);
// } // it is not iterable
