// // // Write a function that takes a new object as input which has name , age  and gender and
// //  greets the user with their gender (Hello Mr/Mrs/Others Amit, your age is 21)

function greetings(user) {
    if (user.gender === "male") {
        console.log("Hello Mr " + user.name + ", your age is " + user.age);
    } else if (user.gender === "female") {
        console.log("Hello Mrs " + user.name + ", your age is " + user.age);
    } else {
        console.log("Hello " + user.name + ", your age is " + user.age);
    }
}

let user1 = {
    name: "Amit",
    age: 21,
    gender: "male"
}

greetings(user1); // Hello Mr Amit, your age is 21

//Also tell the user if they are legal to vote or not

function greet(user){
    if (user.gender === "male") {
     if (canVote(user.age)) {
            console.log("Hello Mr " + user.name +", your age is " + user.age + " and you are  eligible to vote");            
        }
        else{
            console.log("Hello Mr " + user.name +", your age is " + user.age + " and you are not eligible to vote");            
        }
    }   else if(user.gender === "female"){
        if (canVote(user.age)){
            console.log("Hello Mrs " + user.name +", your age is " + user.age + " and you are eligible to vote");            
        }
        else{
            console.log("Hello Mrs " + user.name +", your age is " + user.age + " and you are not eligible to vote");            
        }
    }   else{
       if(canVote(user.age)){ 
        console.log("Hello " + user.name +", your age is " + user.age + " and you are  eligible to vote");           
        } else{
            console.log("Hello " + user.name +", your age is " + user.age + " and you are not eligible to vote");            
            
        }
        
    }
}
function canVote(age){
    if (age >= 18){
        return true;
    }   else{
    return false;
    }
}

  let user2 = {
    name: "Priyanka",
    age: 20,
    gender:"female"
  }
  let user3 = {
    name: "Rahul",
    age: 17,
    gender:"male"
  }

  greet(user2); //Hello Mrs Priyanka, your age is 20 and you are eligible to vote
  greet(user3); //Hello Mr Rahul, your age is 17 and you are not eligible to vote