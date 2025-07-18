/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers){
    let largestNum = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i]>largestNum) {
            largestNum = numbers[i];
        } 
    } return largestNum;
}
numbers = [2,3,4,5,6]
console.log(findLargestElement(numbers));

//Note:
// Assume the first number is the largest initially
// Loop through each number in the array
// If the current number is bigger than our "assumed" largest
// Return the biggest number we found
// Call tfhe function and print the result