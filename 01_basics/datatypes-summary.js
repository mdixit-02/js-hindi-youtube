/*There are officially only 2 types of DataTypes. 
 1=> PRIMITIVE
 2=> NON-PRIMITIVE (REFERENCE)

 PRIMITIVE DATATYPES:  ALL THE PRIMITIVE DATATYPES ARE CALL BY VALUE, WE WILL GET COPY OF THAT.
 THERE ARE SEVEN PRIMITIVE DATATYPES.

 STRING, NUMBER, BOOLEAN, UNDEFINED, NULL, SYMBOL(it is used to make a button unique, we will use this datatype in Advance JS)
 BigInt ( to handle big scientific number)


  NON-PRIMITIVE (REFERENCE): ALLOCATE REFERENCE TO THE MEMORY

  ARRAY, OBJECTS AND FUNCTIONS

  JAVASCRIPT IS A DYNAMICALLY TYPED LANGUAGE WHICH MEANS THAT VARIABLES CAN HOLD VALUES OF DIFFERENT TYPES DURING RUNTIME, 
  UNLIKE OTHER LANGUAGES, WE DON'T NEED TO DECLARE THE DATA TYPE OF A VARIABLE EXPLICITLY.

 */
  const name1 = String("Megha");
  const score = 123 //number
  const scoreValue = 123.8 //number => In JS, there is no float or double for decimal values, all will come under Number type.
  const isLoggedIn = false; // boolean
  const outsideTemp = null; // null
  let userEmail; //undefined
  let userEmail1 = undefined; //undefined

  const id = Symbol("123") //symbol
  const anotherId = Symbol("123"); //symbol

  const bigNumber = 346780836290976549321n;

//   console.log(id == anotherId); //False. As even if both values are same, but their id is different
//   console.log(id);
//   console.log(anotherId);



//Reference Datatypes

//Array
const heros = ["Shatiman", "naagraj", "doga"] //Array => typeOf OBJECT

let myObj = {

name : "Megha", //Object => typeOf OBJECT
age: 22,
}

const myFunction = function(){ //Object Function => typeOf object Function
    console.log("Hello World");
}
console.log(typeof name1); //string
console.log(typeof score); //number
console.log(typeof scoreValue); //number
console.log(typeof isLoggedIn); //boolean
console.log(typeof outsideTemp); //object
console.log(typeof userEmail); //undefined
console.log(typeof userEmail1); //undefined
console.log(typeof id); //symbol
console.log(typeof anotherId); //symbol
console.log(typeof bigNumber); //bigint

console.log(typeof heros); //object
console.log(typeof myObj); //object
console.log(typeof myFunction); //function


/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

/* --------------------------------------------------------------------
There are 2  types of memory in JavaScirpt
1=> Stack (Primitive) => we will get the copy of the variable which we have declared

2 => Heap(Non Primitive) => we will get the reference(Original Value) of the variable
*/

//----------------------------STACK----------------------------------
let object = "Car"
let anotherObject = object
anotherObject = "Bike"

console.log(object) //Car => Original value will not change
console.log(anotherObject) //Bike

//-----------------------------HEAP-----------------------------------

let userOne = {
    email: "meghad2018@gmail.com",
    upi: "meghahdcf.ybl",

}
let userTwo = userOne;
userTwo.email = "megha.fitness.com";

console.log(userOne.email) //megha.fitness.com => original value will also get changed in non-primitive data types.
console.log(userTwo.email) //megha.fitness.com
