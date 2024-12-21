const month = 3

switch (month) {
    case 1:
       console.log("January");  
        break;
    case 2:
       console.log("February");  
        break;
    case 3:
       console.log("March");  
        break;
    case 4:
       console.log("April");  
        break;

    default:
        console.log("default case match");
        
        break;
}

/* we have to put BREAK after every case statement because if not, it will execute all the log except DEFAULT*/

const Month = "March"

switch (Month) {
    case "Jan":
       console.log("January");  
        break;
    case "Feb":
       console.log("February");  
        break;
    case "March":
       console.log("March");  
        break;
    case "April":
       console.log("April");  
        break;

    default:
        console.log("default case match");
        
        break;
}

//We can also give string as a input in case statement