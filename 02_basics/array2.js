 const marvelHeros = ["thor", "Ironman", "Spiderman"]
const dcHeros = ["Superman", "Flash", "batman"]

//marvelHeros.push(dcHeros); // we can use push on existing array

// console.log(marvelHeros);
// console.log(marvelHeros[3][1])

// const allHeros = marvelHeros.concat(dcHeros) //for cancat, we have to create new array as it will return the result in new array
// console.log(allHeros);

/*SPREAD OPERATOR
both cancat and spread will do same work but we prefer spread as we can use multiple arrays in it, 
but in cancat we can add only two arrays.
*/

// const allNewHeros = [...marvelHeros, ...dcHeros]
// console.log(allNewHeros);

// const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const realAnotherArray = anotherArray.flat(Infinity) //flat returns all the arrays into single array 
// console.log(realAnotherArray)

console.log (Array.isArray("Megha"))
console.log (Array.from("Megha"))
console.log (Array.from({name: "Megha"})) //Interesting from interview POV. It will return "[]" as we have to give exact parameters
//that if we need to make arrays for "Keys" or for "Values"

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //It will convert all the values into Array.
