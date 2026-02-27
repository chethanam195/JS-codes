const userEmail="chethana@gmail"
if(userEmail){
    console.log("Got user email")
    }else {
        console.log("Don't have user email")
    }

    // falsy values 

    // false, 0,-0,BigInt 0n,"",null,undefined,NaN

    // and others all of these is true 
    // truthy values 
    //"0" it is  a true value and where it is inside the string and verything inside the string it
    // [],{},function(){} it is a empty function

    // when you want to write the array we want to like that
    // if(userEmail.length==0){
    //     console.log("Array is empty")
    // }

    // const emptyObj={}
    // if(Object.keys(emptyObj).length==0){
    //     console.timeLog("the object is empty")
    // }

    // there is thing that if we compare the things in the console
    // false==0 it is true
    // false=='' it is true
    // 0=='' it is true 

    // Nullish Coalescing Operator(??):null undefined

    // let val1;
    // val1=5 ?? 10
    // val1=null??10
    // val=undefined??15
    // val1=null??10??10
    // console.log(val1)
// it will check the null defined and then assign and it will be used in database

//Terniary Operator

// condition ? true:false

const iceTeaPrice=100
iceTeaPrice>=80? console.log("less than 80"):console.log("more than 80")