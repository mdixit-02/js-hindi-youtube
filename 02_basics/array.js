//Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shaktiman", "Naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

//console.log(myArr[1]);
myArr.push(6); // add element at the end of array
myArr.push(7);
myArr.pop(); //remove element at the end of array
myArr.unshift(8); //add element at the starting point of array
myArr.shift(); //remove element at the starting point of array

// console.log(myArr.includes(7)); // gives boolean value
// console.log(myArr.indexOf(4));
// console.log(myArr.indexOf(9)); // gives result -1 as index 9 is not present 

const newArr = myArr.join(); // convert array into string

// console.log(myArr)
// console.log(newArr)

/*slice and splice
slice works like stack, returns new array and original value remains unchanged. 
Use when you need to extract a portion of an array without modifying it.

splice works like heap, returns new array with deleted one and original value changed
*/

console.log("A", myArr)

const myN1 = myArr.slice(1,3) //exclude last index

console.log(myN1)
console.log("B", myArr)

const myN2 = myArr.splice(1,3) // include all indexes from 1 to 3

console.log(myN2);
console.log("C", myArr);

