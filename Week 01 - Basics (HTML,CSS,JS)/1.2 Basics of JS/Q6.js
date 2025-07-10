// Write a function that takes a user as an input and greets them with their name and age
function greet(username){
    console.log("Hello " + username.name + " your age is " + username.age);    
}
// define a user object with a name and age
let username ={
    name: "Amit",
    age: 69
}
greet(username);  // calls the function `greet` with the username object as an input