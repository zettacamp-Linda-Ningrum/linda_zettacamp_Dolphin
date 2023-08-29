function bookPurchasing(bookDetails, discountPercentage, taxPercentage, stockAmount, purchaseAmount, creditTerm) {
  // declare variable for book details
  const bookTitle = bookDetails.title; // in string
  const unitPrice = bookDetails.price; // in number
  const isHardcover = bookDetails.cover; // in boolean

  // Deklarasi variabel untuk persentase diskon, persentase pajak, jumlah stok, jumlah pembelian, dan total harga.
  let discountAmount;
  let priceAfterDiscount;
  let taxAmount;
  let priceAfterTax;
  let remainingStock = stockAmount;
  let totalPrice = 0;

  // Calculates the discount amount, the price after discount, the tax amount, and the price after tax.
  discountAmount = (discountPercentage / 100) * unitPrice;
  priceAfterDiscount = unitPrice - discountAmount;

  taxAmount = (taxPercentage / 100) * priceAfterDiscount;
  priceAfterTax = priceAfterDiscount + taxAmount;

  // looping process as much as purchaseAmount
  for (let i = 0; i < purchaseAmount; i++) {
    // to check the book stock
    if (remainingStock === 0) {
      console.log('The book is out of stock.');
      break; // to stop the looping process
    }
    // calculates the total price based on the quantity purchased and the price after tax.
    totalPrice += priceAfterTax;
    remainingStock--; // Mengurangi stok buku yang tersisa.
  }

  // Get the current date and time
  const currentDate = new Date();

  // Calculate the starting date for credit terms (next month from the current date)
  const startingDate = new Date(currentDate);
  startingDate.setMonth(currentDate.getMonth());

  // // create an array to store payment details and other calculation process.
  // let bunga = (2 / 100) * totalPrice;
  // const termDue = (bunga + totalPrice) / creditTerm;
  //==> new calculation
  const termDue = totalPrice / creditTerm; // calculate the amount to be paid for this term
  const paymentDetails = [];

  // create looping process as much as creditTerm times (number of credit terms).
  for (let term = 1; term <= creditTerm; term++) {
    // calculate the due date for this term (starting from the next month)
    const dueDate = new Date(startingDate);
    dueDate.setMonth(startingDate.getMonth() + term);

    const dataPayment = { term, termDue, dueDate };

    paymentDetails.push(dataPayment); // add payment details to the object.
  }

  // to display purchaseResult.
  const purchaseResult = {
    bookTitle: bookTitle,
    unitPrice: unitPrice,
    isHardcover: isHardcover,
    discountAmount: discountAmount,
    priceAfterDiscount: priceAfterDiscount,
    taxAmount: taxAmount,
    priceAfterTax: priceAfterTax,
    totalPrice: totalPrice,
    remainingStock: remainingStock,
    paymentDetails: paymentDetails,
  };

  return purchaseResult;
}

// object for the book details
const book = {
  title: 'Melodylan 2 (Retrouvailles)', // in string
  price: 50000, // in number
  cover: false, // in boolean
};

// to set the value of each var
const stockAmount = 5;
const purchaseAmount = 2;
const creditTerm = 7;

// to call the bookPurchasing function
const result = bookPurchasing(book, 50, 10, stockAmount, purchaseAmount, creditTerm);

// to display the result
console.log('');
console.log('============BOOKS DETAIL================');
console.log('');

console.log('Title : ' + result.bookTitle);
console.log('Is it a Hardcover (yes or no) :', result.isHardcover ? 'Yes' : 'No');
console.log('Unit Price : ' + result.unitPrice);

console.log('');
console.log('===========PRICE PER UNIT===============');
console.log('');

console.log('Discount Amount : ' + result.discountAmount);
console.log('Price After Discount : ' + result.priceAfterDiscount);
console.log('Tax Amount : ' + result.taxAmount);
console.log('Price After Tax : ' + result.priceAfterTax);

console.log('');
console.log('=============TOTAL PRICE=================');
console.log('');

console.log('Total Price : ' + result.totalPrice);
console.log('Remaining Stock : ' + result.remainingStock);

// to check whether we can still make further purchases or not
if (result.remainingStock > 0) {
  console.log('You can purchase more books.');
} else {
  console.log('The book is out of stock.');
}

// to displays payment details for each term
console.log('');
console.log('==========PAYMENT TERM DETAILS============');
console.log('');
console.log('Credit Duration : ' + creditTerm);
console.log('');

console.log(result.paymentDetails);
console.log('');

// for (const payment of result.paymentDetails) {
//   console.log(`Term ${payment.term}: ${payment.termDue} - Due Date: ${payment.dueDate.toDateString()}`);
// }

// calculate the total of the creditTerm
// let totalCreditTermAmount = 0;
// for (const payment of result.paymentDetails) {
//   totalCreditTermAmount += payment.termDue;
// }

//==> using forEach
// declares the variable totalCreditTermAmount with an initial value of 0
// let totalCreditTermAmount = 0;

// iterate over each payment element in paymentDetails
// result.paymentDetails.forEach((payment) => {
//   // adds the payment.termDue value to the totalCreditTermAmount
//   totalCreditTermAmount += payment.termDue;
// });

// //==> using reduce
// // the reduce method accumulates values by calling a function on each element and taking an initial value of 0
// // with the total parameter is the accumulator for this calculation process
const totalCreditTermAmount = result.paymentDetails.reduce((total, payment) => total + payment.termDue, 0);
// the value 0 here is the initial value for the total, because the calculation process starts from 0

// to display the total of the creditTerm
console.log('');
console.log('=========TOTAL CREDIT TERM AMOUNT=========');
console.log('');
console.log('Total Credit Term Amount : ' + totalCreditTermAmount);

console.log('');
console.log('==========================================');
console.log('');

//some exercise

//==> implementation of object material like object destructuring, object spread operator, etc

console.log('==> object destructuring');
console.log(book);
console.log('');

//object destructuring (to extract values from properties in an object)
const { title, price } = book;
console.log('Title : ' + title);
console.log('Price : ' + price);
console.log('');

console.log('==> object spread operator');
//object spread operator
/* (to combine objects or arrays efficiently or add new properties/elements to 
an object or array without changing the original) */
const newBook = book;

book.page = 350;
console.log(newBook);
console.log('');

const secondNewBook = { ...book };
console.log(secondNewBook);

console.log('');

//==> some methods from object
// object.assign method (to combine or copy or replace the properties of one or more objects into the destination object)
console.log('==> the use of object.assign()');
const secondBook = {
  title: 'Melody 3',
  author: 'Asriaci',
};

const returnedBook = Object.assign(book, secondBook);
console.log(book);

console.log('');

//==> implement the use of filter and map type of array

const searchTerm = 2; // for changing the number of term that we needed to search
console.log(`Do searching for the credit terms information you needed for the term ${searchTerm}...`);
const arrayFilter = result.paymentDetails.filter((payment) => payment.term === searchTerm);
console.log(arrayFilter);

console.log('');

const arrayMap = result.paymentDetails.map((payment) => payment.termDue * 1);
console.log(arrayMap);

console.log('');
