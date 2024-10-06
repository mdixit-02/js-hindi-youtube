//++++++++++++++++++++++++++++++++++++ DATE ++++++++++++++++++++++++++++++++++++++++++++
// Date is an object in JavaScript
//JavaScript stores dates as number of milliseconds since January 01, 1970
let myDate = new Date;
//console.log(myDate) //Output => 2024-10-06T03:37:57.182Z

//We can use various methods to convert this date into more readable value.

// console.log(myDate.toString());
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toTimeString())
// console.log(myDate.toJSON())

let myCreatedDate = new Date(2023, 0, 23) // 0 means January, 1 means Feb
let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)
let myCreatedDate2 = new Date("2023-01-14")
let myCreatedDate3 = new Date("01-14-2023")

// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate1.toLocaleString())
// console.log(myCreatedDate2.toLocaleString())
// console.log(myCreatedDate3.toLocaleString())


let timeStamp = Date.now(); 
// console.log(timeStamp);

// console.log(myCreatedDate3.getTime()); // to get exact value of date

// console.log(Date.now()); // gives value in milliseconds
// console.log(Math.floor(Date.now()/1000)) //gives values in seconds

let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate.getMonth() + 1); // we add +1 so that user does'nt get confused as Month start with 0 in JS.
console.log(newDate.getDay());

//`${newDate.getDay()} and the time is` =>used in real world for major projects


//To expand to.LocalString()

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}))
