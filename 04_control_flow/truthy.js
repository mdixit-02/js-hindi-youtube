//const userEmail = "meghad2024@gmail.com"
const userEmail = []   //empty array is a truthy value
//const userEmail = {} // truthy value
if(userEmail){
    console.log("Got user email");
    
}
else{
    console.log("Don't have user Email");
    
}

//falsy values

//false, 0, -0, BigInt, 0n, "", null, undefined, Nan

//Truthy Values

// "0", "false", " ", [], {}, functions(){}

//To check whether Array is empty or not
if (userEmail.length ===0){
    console.log("Array is empty");    
}
//To check whether Object is empty or not

const emptyObj = {}
if(Object.keys(emptyObj).length=== 0){
    console.log("Object is empty");
    
}

//false == 0 -> retuns true
//false == '' -> returns true
//0 == '' -> returns true

//Nullish coalescing Operator(??) : null and undefined

let val1;

//val1 = 5 ?? 10 //-> 5
//val1 = null ?? 10 -> 10
//val1 = undefined ?? 15 //-> 15
val1 = null ?? 10 ?? 20 // It will take first numeric value -> 10
console.log(val1);

//Terniary Operator
//Condition ? True : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");


