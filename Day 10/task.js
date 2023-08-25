/* 1. Use comparison operator with 2 variables from task number 1, 
display true if the name of books have same name otherwise display false */

let firstFavouriteBooks = 'Melodylan';
const secondFavouriteBooks = 'Invalidite';

console.log('');
console.log('==========TASK 1============');
console.log('');

// comparison operator: equal (==)
console.log(firstFavouriteBooks == secondFavouriteBooks);

// comparison operator: not equal (!=)
console.log(firstFavouriteBooks != secondFavouriteBooks);

// comparison operator:  strict equal (===) (ini yg disaranin ya:)
console.log(firstFavouriteBooks === secondFavouriteBooks);

// comparison operator:  strict non equal (!==)
console.log(firstFavouriteBooks !== secondFavouriteBooks);

//2. Create new 2 variables to contain price of your favourite books

// create 2 new ordinary variables

let firstBookPrice = 450000;
let secondBookPrice = 400000;

//other ways using object and array

let bookList = [
  {
    title: 'Melodylan',
    price: 450000,
  },
  {
    title: 'Melodylan 2: Retrouvailles',
    price: 600000,
  },
];

console.log('');
console.log('==========TASK 2a============');
console.log('');

//2(a). Compare the variables which one have the highest price

//======= using 2 ordinary variables

console.log('The highest price :');
console.log('');

//with ternary operator

console.log(firstBookPrice > secondBookPrice ? firstFavouriteBooks : secondFavouriteBooks);

//with comparison operator (greater than (>))

console.log(firstBookPrice > secondBookPrice);

//with comparison operator (less than (<))

console.log(firstBookPrice < secondBookPrice);

console.log('');

//======= using object and array

console.log('The highest price :');
console.log('');

//with ternary operator

console.log(bookList[0].price > bookList[1].price ? bookList[0].title : bookList[1].title);

//with comparison operator (greater than (>))

console.log(bookList[0].price > bookList[1].price);

//with comparison operator (less than (<))

console.log(bookList[0].price < bookList[1].price);

console.log('');
console.log('==========TASK 2b============');
console.log('');

//2(b). Find the average price from those 2 variables using arithmetic operator

//======= using 2 ordinary variables

let subTotal = firstBookPrice + secondBookPrice;
let averageBookPrice = subTotal / 2;
console.log('Sub Total : ' + subTotal);
console.log('Average Price : ' + averageBookPrice);

console.log('');

//======= using object and array

let priceTotal = bookList[0].price + bookList[1].price;
let averagePrice = priceTotal / 2;
console.log('Price Total : ' + priceTotal);
console.log('Average Price : ' + averagePrice);

console.log('');
console.log('==========TASK 2c============');
console.log('');

/* 2(c). Create new variable to use ternary operator to determine the value of variable, 
if the average price more than 500000 set value with string “Expensive” if less or equal set “Cheap” */

// result for the using 2 ordinary variables one

const averageBookPriceStatus = averageBookPrice > 500000 ? 'Expensive' : 'Cheap';
console.log(averageBookPriceStatus);

// result for the using object and array one

const averagePriceStatus = averagePrice > 500000 ? 'Expensive' : 'Cheap';
console.log(averagePriceStatus);



console.log('');
console.log('======================');
console.log('');

//just some exercise: array.push

bookList.push(
  {
    title: 'Melodylan 3',
    price: 800000,
  },
  {
    title: 'Melodylan 4',
    price: 850000,
  },
);

console.log(bookList);

console.log('');
console.log('======================');
console.log('');

//just some exercise: arithmetic/mathematic operator

let numberOfBooksAvailable = 4;
console.log('Current number of books that available : ' + numberOfBooksAvailable)
console.log('Add more books? ' + ++numberOfBooksAvailable) //increment
console.log('Reduce number of books? ' + --numberOfBooksAvailable) //decrement
console.log(numberOfBooksAvailable * 10); //multiplication 
console.log(numberOfBooksAvailable % 4); //exponentiation operator


//other ways to comparing variable like in the task 2 (Compare the variables which one have the highest price)
//but in a spesific way using conditional operator

console.log('');
console.log('======================');
console.log('');

if (bookList[2].price > bookList[3].price) {
    console.log(bookList[2].title + ' is cheaper than ' + bookList[3].title)
} else {
    console.log(bookList[2].title + ' is more expensive than ' + bookList[3].title)
}

console.log('');
