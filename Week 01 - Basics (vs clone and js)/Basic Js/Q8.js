// Also tell the user if they are legal to vote or not.
const user = [{
    name: "Amit",
    age: 20
},{
    name: "Priyanka",
    age: 9
}];

function isVote(user){
    for(let i=0; i<user.length; i++){
        if(user[i].age>=18){
            console.log(`${user[i].name} You are eligible for voting`);
        }else{
            console.log(`${user[i].name} You are not eligible for voting`);
        }
    }
}
isVote(user);

