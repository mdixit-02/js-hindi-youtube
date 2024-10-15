//SINGLETON
//Object.create (created object through constructor method and this process is known as singleton)

//object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Megha",
    "Full name": "Megha Dixit",
 //   mySym: "Key1",      // This syntax will also work and gives correct output but data type will be String so not fully correct.
    [mySym]: "Key1",    // this is the correct syntax as it's data type is Symbol .
    age: 22,
    Location: "Pune",
    email: "meghaDixit02@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"],
}
//Both ways are correct but 2nd one is more preferred one because in case when input is in "" for example- Full Name
console.log(JsUser.email)
console.log(JsUser["email"])

console.log(JsUser["Full name"])
//console.log(JsUser.Full Name) // Incorrect Syntax => we can't access this by (.)

//CONFUSION REGARDING DATA TYPE OF SYMBOL, WILL CHECK THIS
console.log(typeof JsUser[mySym]) // => string
console.log(typeof JsUser.mySym) // => string

console.log(typeof JsUser.age) // => number
console.log(JsUser[mySym])

//To change the values of object
JsUser.email = "Megha.chatgpt@gmail.com" 

//To lock the object so that no one can change it's values
//Object.freeze(JsUser);

JsUser.email = "Megha.micro@gmail.com"

console.log(JsUser);

//Functions in Object

JsUser.greeting = function(){
    console.log("Hello JS User")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
JsUser.greeting();
JsUser.greetingTwo();


/******************************************************************
 * IMPORTANT POINTS
 * 
 * DECLARATION OF SYMBOL
 * HOW TO CHANGE VALUES OF OBJECT
 * HOW TO LOCK VALUES OF OBJECT
 * FUNCTIONS IN OBJECT
 *  
 */
