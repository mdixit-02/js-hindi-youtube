//+++++++++++++++++++++++++++++++++++++++ Numbers +++++++++++++++++++++++++++++++++++++++++++++++++

const score = 400;
console.log(score); //400

const balance = new Number(100)
console.log(balance); // Number: 100, it will return 100 and it's data type as well, data type is Number

console.log(balance.toString()) // 100, but data type has changed to String
console.log(balance.toString().length) //3, returns length of variable

console.log(balance.toFixed(2)) // 100.00, used in E-commerce websites, etc

const otherNumber = 123.8967;
console.log(otherNumber.toPrecision(4)) //123.9, will give precise round off value
console.log(otherNumber.toPrecision(6))

const hundred = 1000000
console.log(hundred.toLocaleString());// 1,000,000 => By default it converts into USD standards
console.log(hundred.toLocaleString('en-IN')); //10,00,000 =>Indian standards

//+++++++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math.abs(-4)) //4, gives positive value always, if 4 => 4, if -4 => 4.
console.log(Math.round(4.6)) // gives round off value => 5
console.log(Math.floor(4.9)) // gives lowest value => 4
console.log(Math.ceil(4.2)) // gives highest value => 5
console.log(Math.min(4, 3, 6, 8)) // gives min value => 3
console.log(Math.max(4, 3, 6, 8)) // gives max value => 8

console.log(Math.random()); //always gives value between 0 and 1, it could be 0 or 1
console.log(Math.random() * 10);
console.log(Math.random() * 10 + 1); //by adding 1, it assures that values are atleast 1 or more than 1.
console.log((Math.random() * 10) + 1); // to avoid any BODMAS RULE MISCALCULATION

//TRICK WHEN MIN AND MAX VALUE IS GIVEN

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min + 1)) + min)