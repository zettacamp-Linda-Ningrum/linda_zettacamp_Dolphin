/**
 * write a function that returns true if there's duplicate in the array, and false otherwise.
 * SEE EXAMPLE BELLOW!
 * 
 * 
Example
console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true

 * Determines if the array contains any duplicate value.

 * @param {number[]} nums - The input array of integers.
 * @return {boolean} Returns true if the array contains any duplicate value, false otherwise.
 */

function containDuplicate(nums) {
  // Membandingkan setiap elemen dengan elemen-elemen berikutnya dalam array.
  for (let currentIndex = 0; currentIndex < nums.length - 1; currentIndex++) {
    // Iterasi untuk membandingkan elemen saat ini dengan elemen setelahnya.
    for (let compareIndex = currentIndex + 1; compareIndex < nums.length; compareIndex++) {
      if (nums[currentIndex] === nums[compareIndex]) {
        return true;
      }
    }
  }

  return false;
}

// Example usage
console.log(containDuplicate([1, 2, 3, 1])); // Output: true
console.log(containDuplicate([1, 2, 3, 4])); // Output: false
console.log(containDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true

console.log('');

//just for some exercises

//example for array splice implementation
const arraySplice = [1, 2, 3, 4, 5];
arraySplice.splice(2, 0, 6);
// remove 0 element at Index 2, and then inserts "6" at index 2
// ==> [1, 2, 3, 4, 5]
// ==> [1, 2, 6, 3, 4, 5]
console.log(arraySplice);
console.log('Result : ' + containDuplicate(arraySplice));

//example for array sort implementation
arraySplice.sort(function (a, b) {
  return a - b;
});

console.log(arraySplice);

//example for array copywithin implementation
console.log(arraySplice.copyWithin(2)); //rare to use

//example for array concat implementation
const array1 = [7, 8];
const combinedArray = array1.concat(arraySplice);

console.log(combinedArray);
console.log('Result : ' + containDuplicate(combinedArray));
