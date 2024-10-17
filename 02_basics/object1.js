//Both declarations are correct and gives same output {}, only difference is 1st one is non Singleton and 2nd one is singleton.
const tinderUser = {}
//const tinderUser = new Object();

//console.log(tinderUser)

tinderUser.Id = "123abc"
tinderUser.name = "Charlie"
tinderUser.isLoggedIn = false;

//console.log(tinderUser)

//We can declare multiple objects inside object => nested object

const regularUser = {
    email: "someone@gmail.com",
     fullname: {
       userfullname: {
           firstName: "Megha",
           lastName: "Dixit",
       }
    }
}

//console.log(regularUser.fullname.userfullname.firstName) // => Megha

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

//const obj4 = {obj1, obj2, obj3} // => It will give objects under object

//const obj4 = Object.assign({}, obj1, obj2, obj3) // => It will give correct output ,all the objects together

//But we will use SPREAD 

const obj4 = {...obj1, ...obj2, ...obj3}
//console.log(obj4) 

//Array of objects => Objects inside Array

const User = [
    {
        id: "1",
        email: "m@gmail.com",
    },
    {
        id: "2",
        email: "d@gmail.com",
    },

    {
        id: "3",
        email: "f@gmail.com",
    }
]

//console.log(User[1].email);
// console.log(Object.keys(tinderUser)) // => Id, name, isLoggedIn
// console.log(Object.values(tinderUser)) // => 123abc, charlie, false
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("isLoggedIn")) // gives output in boolean



/****************************************************************************
 OBJECT DE-STRUCTURE IN JAVASCRIPT
 */

 const course = {
    courseName: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh Sir",
 }

 //console.log(course.courseInstructor);

//  const{courseInstructor} = course;  //For easy syntax, we use this
//  console.log(courseInstructor); 

const{courseInstructor:instructor} = course; //The syntax for extracting values from an object or array and assigning them to a variable.
console.log(instructor); 

/*In REACT also we use de-structuring, de-structuring basically means to short/extract values from objects and arrays into variables.
The syntax for extracting values from an object or array and assigning them to a variable.
*/

/*
JSON => JavaScript Object Notation
It is a type of API
It can be in the form of Arrays as well
Mostly in object but sometimes it can be in the form of Arrays as well
*/