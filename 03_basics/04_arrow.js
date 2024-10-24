const user = {
    username: "Megha",
    price : "999",

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}
// THIS keyword takes the current context of the variable
// user.welcomeMessage();
// user.username = "Sam"
// user.welcomeMessage(); // now the name of username has changed as THIS prints the current value which is "Sam"

console.log(this); // It will give {} only, it will give empty object