const marvel_heros=["A","B","C"]
const dc=["D","E","F"]
//marvel_heros.push(dc)
// console.log(marvel_heros[3][1])
// marvel_heros.concat(dc)
// console.log(marvel_heros)
// const newRr2=marvel_heros.concat(dc) // it creates of new element adding of the two element
// console.log(newRr2)

const all_heors=[...marvel_heros,...dc]
console.log(all_heors)

const another_array=[1,2,3,[3,4,5]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array)
console.log(Array.isArray("chethana"))
console.log(Array.from({name:"chethana"})) // interesting it will give the empty array

let score1=45
let core2=890
let score3=987
console.log(Array.of(score1,score3))

// learn about is the is,from and of array