/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

// function isAnagram(Str1, Str2) {
//   const sortedStr1 = Str1.toLowerCase().split('').sort().join('');  // both strings to lowercase. This makes it case-insensitive (so "ROHAN" and "ohran" are treated the same)
//   const sortedStr2 = Str2.toLowerCase().split('').sort().join('');

//   if (sortedStr1==sortedStr2){
//     return true;
    
//   }
//   else{
//     return false;
    
//   }
// }
// const a = isAnagram("rohan","ohran")
// console.log(a);


// Note:
// String ko direct sort krne k liye koi function nahi.
// Str ko lowercase kiye after that we use split function to split it which converts the string to array.
// After that array ke pass sorting method hota we will sort with that. 
// After that hm usko join krwa diye.
// Then woh string mein convert ho jta phr usko sortedstr1 se sortedstr2 ko compare krwa diye. 

//      .split('')   // Step 2: Split the string into an array of characters (e.g., 'rohan' → ['r','o','h','a','n'])
//     .sort()      // Step 3: Sort the characters in alphabetical order (e.g., ['r','o','h','a','n'] → ['a','h','n','o','r'])
//     .join('');   // Step 4: Join the sorted array back into a string (e.g., ['a','h','n','o','r'] → "ahnor")


function isAnagram(str1,str2){
    const sortedStr1= str1.toLowerCase().split('').sort().join('');   // both strings to lowercase. This makes it case-insensitive (so "AMIT" and "mita" are treated the same)
    const sortedStr2= str2.toLowerCase().split('').sort().join('');  

    if (sortedStr1==sortedStr2){   // If both sorted strings are the same -> they're anagrams
        return true;
    } else {
        return false;

    }
}
 
const a = isAnagram("amit", "tima")
console.log(a);

//Note:
// string me sort kerne ke liye function nhi hai toh array me convert kerna padega to use sort function 
// .split('')  : Split the string into an array of characters (e.g., 'rohan' → ['r','o','h','a','n'])
// .sort()     : Sort the characters in alphabetical order (e.g., ['r','o','h','a','n'] → ['a','h','n','o','r'])
// .join('');  : Join the sorted array back into a string (e.g., ['a','h','n','o','r'] → "ahnor")
