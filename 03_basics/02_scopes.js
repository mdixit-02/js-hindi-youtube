//var c = 300 // this is GLOBAL SCOPE

let a = 300

if(true){
    let a = 10 // THIS IS LOCAL SCOPE, it should not go outside the scope.
    const b = 20 // THIS IS LOCAL SCOPE
   // var c = 30  // THIS IS LOCAL SCOPE
   console.log("Inner : ", a);
}

//console.log(a) // => It will give error and that is correct because we have defined "a" inside if condition
//console.log(b) => It will give error and that is correct because we have defined "b" inside if condition
//console.log(c)  //=> It will not give error even if we have defined "c" inside if condition but it should give error and that's why we
                // don't use "var".

/***********************************
 Nested Functions
 */

//child function can access the variables of parent function but parent functions can't access the variables of child function

 function one(){
    const name = "Megha"

    function two(){
        const Id = "123"
        console.log(name);
        
    }
    //console.log(Id);         It will give error because we are executing this line outside its function

    two()

 }
 one();   

 if(true){
    const username = "Megha"
    if(username=="Megha"){
        const website = " Youtube "
        console.log(username + website);
        
    }
   // console.log(website); It will give error bcoz we are executing it outside it's function
 }
 //console.log(username);   It will give error bcoz we are executing it outside it's function



 console.log(addOne(5));

 function addOne(num) {
    return num + 1;
 }


 console.log(addTwo(5)); //It will give error => cannot access addTwo before Initialization

 const addTwo = function (num) { // Here we are storing function in a variable
    return num + 2;
 }