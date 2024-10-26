const user = {
    username: "Megha",
    price : "999",

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}
// THIS keyword takes the current context of the variable
// user.welcomeMessage();
// user.username = "Sam"
//user.welcomeMessage(); // now the name of username has changed as THIS prints the current value which is "Sam"

console.log(this); // It will give {} only, it will give empty object

// function chai(){
//     const username = "Megha"
//     console.log(this.username); // It will give Undefined => we cannot access this syntax inside function, it will work inside object.
// }
// chai();

// const chai = function(){
//     const username = "Megha"
//     console.log(this.username);
// }
// chai();

const chai = () => {
    const username = "Megha"
//    console.log(this); => It will give {} output
    console.log(this.username);
}
chai();

/***************************ARROW FUNCTION****************************************/

// const addTwo = (num1, num2) => { // Syntax of Arrow Function
//     return num1 + num2; // Explicity return
// }
// console.log(addTwo(4,3));

//const addTwo = (num1, num2) =>  num1 + num2; // another syntax of arrow function (Implicit return)
//const addTwo = (num1, num2) =>  (num1 + num2);  // another syntax of arrow function (Implicit return)

const addTwo = (num1, num2) =>  ({username : "Megha"}); //when we want to return object, then also we have to wrap it in () first.
console.log(addTwo(4,3));



/*************Arrow function in loop ********************************/

const myArr = [2, 4, 6, 8, 10]
myArr.forEach(() => {})  //Arrow function inside loop