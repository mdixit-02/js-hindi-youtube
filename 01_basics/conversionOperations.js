let score = null;

//console.log(score);

// both way we can define
//console.log(typeof score);
//console.log(typeof (score));

let valueOfNumber = Number(score);
//console.log(typeof valueOfNumber);
//console.log(valueOfNumber);

//33 => 33, type => number
//33abc => Nan(Not a number), type => number
//true => 1 ; false => 0
//null => number, type => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

//1 => true
//0 => false
//"" => false
//"megha" => true

let someNumber = 33;

let stringNumber = String(someNumber);
//console.log(stringNumber)
//console.log(typeof stringNumber)

//********************* Operations **************************/

let value = 3
let negValue = -value
//console.log(negValue);

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)  //gives power value, 2 power 3
// console.log(2/3)
// console.log(2%3)

let str1 = "Hello"
let str2 = " Megha"
let str3 = str1 + str2
console.log(str3);

// console.log(1 + "2")  //12
// console.log( "1" + 2) //12
// console.log( "1" + 2 + 2) //122 (If first number is string then it will act as String only)
// console.log(1 + 2 + "2") //32 (If first numbers are not string, then it will add those first and then attach the string value)
// console.log(1 + "2" + "2") // 122
// console.log(1 + 2 + "2" + 3) //323
// console.log( 3 + 4 * 5 % 3) //5
// console.log( (3 + 4) * 5 % 3) //2

// console.log( 5 % 3) // 2 (remainder)

console.log(true) // true
console.log(+true) // 1
//console.log(true+) // It will give error as + comes after true
console.log(+"") //0

let gameCounter = 100
gameCounter++; //101
//++gameCounter; //101
console.log(gameCounter)
