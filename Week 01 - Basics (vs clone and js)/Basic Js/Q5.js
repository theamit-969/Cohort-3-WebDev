// Write a function called sum that finds the sum from 1 to a number

// basic maths formula
function sum(n){
    return(n * (n + 1) / 2);
}
console.log(sum(5))
console.log(sum(10))

// using  loop

// function sum(num) {
//     let total = 0;
    
//     for (let i = 1; i <= num; i++) {   // this loop runs from 1 to the input number 
//         total += i;                   // adds the value of `i` to the `total` variable
//     }
//     return total;                     // returns the value of `total`
// }

// console.log(sum(5)); // 15

// console.log(sum(10)); // 55