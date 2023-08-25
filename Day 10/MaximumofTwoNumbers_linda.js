/**
 *
 * Write a function max_of_two(a, b) that takes in two integers, a and b, and returns the maximum of the two numbers without using any arrays or built-in functions like max().
 *
 */
function max_of_two(a, b) {
  //using ternary
  //return a > b ? a : b;

  //using if else
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log('');
console.log('The maximum of the two numbers :');

console.log('(10,5) >> ' + max_of_two(10, 5));
console.log('(45,66) >> ' + max_of_two(45, 66));

console.log('');
