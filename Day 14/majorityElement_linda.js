/**
 * write a function that returns the majority element.
 * The majority element is the element that appears more than other element.
 * READ EXAMPLE BELOW!

console.log(majorityElement([3, 2, 3])); // Output: 3 
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2 

 * You may assume that the majority element always exists in the array.

 * Returns the majority element from the input array of integers.

 * @param {number[]} nums - The input array of integers.
 * @return {number} Returns the majority element.
 */

function majorityElement(nums) {
  let majority = nums[0]; // initialize potential majority elements
  let count = 1; // to calculate the occurrence of a potential majority element

  // array starts from the second element
  for (let currentIndex = 1; currentIndex < nums.length; currentIndex++) {
    if (count === 0) {
      // if the count goes to zero, update the potential majority elements
      majority = nums[currentIndex];
      count = 1;
    } else if (nums[currentIndex] === majority) {
      // if the current element is equal to the potential majority element, increase the count
      count++;
    } else {
      // if the current element is different from the potential majority elements, decrease the count
      count--;
    }
  }

  return majority;
}

// majority(3); count(1); currentIndex(2)
// majority(3); count(0); currentIndex(3)
// majority(3); count(1);

// majority = 3

console.log(majorityElement([3, 2, 3])); // Output: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
console.log(majorityElement([2, 2, 1, 1, 1, 1, 2]));
console.log(majorityElement([5, 4, 2, 1, 2, 4])); //when there are two majorities, it will show only one of them

//some exercises (implementing array function method)

//==> the example use of FILL() method (to fill all the elements in the array with the specified value)
const arrFill = [1, 2, 5, 6, 8];
console.log(arrFill.fill(6));

//==> the example use of EVERY() method (to test whether all the elements in the array meet the specified condition)
const isUpper = (currentValue) => currentValue > 10;
console.log(arrFill.every(isUpper));

//==> the example use of findIndex() method
// (to find the index of the first element in an array that satisfies the condition specified by the callback function)
const arrFindIndex = [1, 2, 5, 6, 8];
const isLargeNumber = (element) => element > 7;

console.log(arrFindIndex.findIndex(isLargeNumber));
