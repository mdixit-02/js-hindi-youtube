function sayMyName(){
    console.log("M")
    console.log("E")
    console.log("G")
    console.log("H")
    console.log("A")
}

//sayMyName(); // to execute
//sayMyName; // just for reference

// function addTwoNum(num1, num2){ // this is parameters
//     console.log(num1 + num2);
// }
addTwoNum(7,7) // this is Argument

// addTwoNum(7, "4") // => output 74
// addTwoNum(7, "a") // => output 7a
// addTwoNum(7, null) //=> output 7

//We can store the output in a variable as well

const result = addTwoNum(7,7)

console.log("result: ", result) // => returns undefined

function addTwoNum(num1, num2){ // this is parameters
    let result = num1 + num2;
    return result; // Now it will return 14
    //return num1 + num2 // we can use this syntax as well, no need to declare a variable
    //console.log("Megha"); // after return, it will not print anything inside function
}

/* 
So what we learnt here is we can't return the value of result outside curly bracket of function but we can return the value
 inside the curly bracket of function
*/

function loginUserMsg(username){
//   if(!username){ => we can use this syntax as well, as in JS, undefined and empty string are taken false by default.
    if(username===undefined){
        console.log("Please enter a username")
        return // after this return statement, it will not execute the next line
    }
    return `${username}: just logged in`
}

// console.log(loginUserMsg("Megha")) // Megha: just logged in
// console.log(loginUserMsg("")) // : just logged in
console.log(loginUserMsg()) // undefined : just logged in


/***********************************************************************************************
 * FROM BUSINESS POINT OF VIEW LIKE E-COMMERCE APP FOR ADDING PRICE
*/
// both SPREAD and REST operator look same, only their use case is different.

// function calculateCartPrice(val1,val2, ...num1){  // will not print first 2 arguments, starts from 400
function calculateCartPrice(...num1){ // this (...) is rest operator
    return num1;
}
console.log(calculateCartPrice(200, 300, 400, 5000))

const user = {
    username: "Megha",
    price: 999,
}

function handleObject(anyUser){
    console.log(`username is ${anyUser.username} and price is ${anyUser.price}`)
}
//handleObject(user);
 //We can directly pass object when we call function

handleObject({
    username: "Sam",
    price: 399,
})

//const myNewArray = [200, 300, 400, 6000]
function getSecondArray(getArray){
    return getArray[1];
}

//console.log (getSecondArray(myNewArray));
console.log (getSecondArray([200, 300, 400, 6000])); //directly pass array when we call function