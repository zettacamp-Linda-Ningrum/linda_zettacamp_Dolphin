/*
Title: Unique Characters

Description:
Write a function named hasUniqueCharacters that takes a string as input and returns true if the string contains all unique characters, and false otherwise. You can assume that the string contains only lowercase alphabets (a-z).

Example:
console.log(hasUniqueCharacters("abcdefg")); // Output: true
console.log(hasUniqueCharacters("hello")); // Output: false
*/

function hasUniqueCharacters(str) {
  for (let i = 0; i < str.length; i++) {
    // comparing the current character with the rest of the string
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false; // if a duplicate character is found, return false
      }
    }
  }
  return true; // if no duplicate characters are found, return true
}

console.log(hasUniqueCharacters('abcdefg')); // Output: true
console.log(hasUniqueCharacters('hello')); // Output: false

