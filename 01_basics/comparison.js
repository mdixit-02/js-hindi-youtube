// console.log("2" > 1); //true convert string into number
// console.log("02" > 1) //true

//null comparison

// console.log(null > 0) //false
// console.log(null == 0) //false
// console.log(null >= 0) //true (The reason is that the equality check[==] and comparison[<=, >=] works differently. 
//Comparison convert null to a number, treating as 0)

// console.log(undefined > 0) //false
// console.log(undefined == 0) //false
// console.log(undefined < 0) //false
// console.log(undefined >= 0) //false

//=== Strict check data types also

console.log("2" === 2) //false as data types are different

//NOTE: WE SHOULD AVOID ABOVE KIND OF COMPARISONS BECAUSE THAT'S NOT A GOOD PRACTICE

//BEST PRACTICE COMPARISON

console.log (2 > 1)
console.log (2 >= 1)
console.log (2 < 1)
console.log (2 == 1)
console.log (2 != 1)