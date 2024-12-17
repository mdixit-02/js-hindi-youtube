//IIFE - Immediately Invoked Function Expressions
//To avoid the pollution of variables and declarations in the global scope, we use IIFE. Also to execute functions immediately.

// Normal Function Declaration
// function chai(){
//     console.log("DB Connected"); 
// }
// chai();

//Function with using IIFE

(function chai(){
    console.log("DB Connected")
}
)();    //Named IIFE

// ( function aurCode(){
//     console.log("DB Connected Two") 
// }
// ) ()

( (name) => {                 //Arrow Funtion
    console.log(`DB Connected Two ${name}` )
}
) ( "Megha")  //Unnammed IIFE

//WHEN WE WANT TO WRITE TWO IIFE TOGETHER, WE MUST PUT (;) AT THE END OR 1ST IIFE IN ORDER TO EXECUTE 2ND ONE.