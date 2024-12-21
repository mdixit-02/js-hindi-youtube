const score = 200

if(score > 100){
   // var power = "fly"
   let power = "fly"
    console.log(`user power: ${power}`);
    
}
//console.log(`user power: ${power}`); // this will also execute without giving any error because data type of fly is VAR

/* VAR can be globally accessed outside the scope as well and which is not right, that's why we always prefer to use CONST and LET
data type because they are not globally accessed and we can't access them outside the scope.*/

// short hand notation
const balance = 1000;
if(balance > 500) console.log("test");
