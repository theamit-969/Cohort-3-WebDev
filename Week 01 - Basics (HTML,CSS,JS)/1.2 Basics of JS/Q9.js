// Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS.
function getEvenNumbers(arrayOfNumbers){
    return arrayOfNumbers.filter(num => num % 2 === 0);
}
const arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const evenNumbers = getEvenNumbers(arrayOfNumbers);
console.log(evenNumbers);

//Non-Filter Version (Using for Loop)
/*function getEvenNumbers(arrayOfNumbers) {
    let evenNumbers = []; // create an empty array to store even numbers

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] % 2 === 0) {
            evenNumbers.push(arrayOfNumbers[i]); // push if the number is even
        }
    }

    return evenNumbers; // return the new array of even numbers
}

const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const evenNumbers = getEvenNumbers(arrayOfNumbers);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10, 12]

*/