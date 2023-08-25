/**
 *
 * Write a Node.js function isPrime(n) that takes an integer n as an argument and returns true if n is a prime number and false otherwise.
 *
 */

// Bilangan prima adalah bilangan bulat yang lebih besar dari 1 dan hanya memiliki dua faktor pembagi yang berbeda, yaitu 1 dan bilangan itu sendiri.
// Dengan kata lain, bilangan prima hanya punya dua pembagi (divisor) yaitu 1 dan dirinya sendiri.

function isPrime(n) {
  let divisor = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      //(in each looping process, theres gonna be the checking process)
      divisor++;
    }
  }

  // n = 10
  // i=1
  // >> 0 ++
  // i = 2
  // >> 0 ++
  // i = 3
  // >> 1
  // i = 4
  // >> 2
  // i = 5
  // >> 0 ++
  // i = 6
  // >> 4 ++
  // i = 7
  // >> 3 ++
  // i = 8
  // >> 2 ++
  // i = 9
  // >> 1 ++
  // i = 10
  // >> 0

  if (divisor == 2) {
    return true;
  } else {
    return false;
  }
}

console.log(isPrime(10));
console.log(isPrime(43));
