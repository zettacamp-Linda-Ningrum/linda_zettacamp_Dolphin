/*
Try create a book purchasing function that has parameters detail of a book, percentage of the discount, percentage of tax. 
Then display all the parameters with additional data: Amount of discount, Price after discount, Amount of tax, Price after tax
Note:
The function must have at least:
Constant variable
Boolean, number, string variable
Assignment, addition, addition, subtraction, multiplication, division operator
*/

function bookPurchasing(bookDetails, discountPercentage, taxPercentage) {
  //create variable for the book details which related to the "book" object outside the function
  const bookTitle = bookDetails.title; //in string
  const unitPrice = bookDetails.price; //in number
  const isHardcover = bookDetails.cover; //in boolean

  //create amount of discount and price after discount
  const discountAmount = (discountPercentage / 100) * unitPrice;
  const priceAfterDiscount = unitPrice - discountAmount;

  //create amount of tax and price after tax
  const taxAmount = (taxPercentage / 100) * priceAfterDiscount;
  const priceAfterTax = priceAfterDiscount + taxAmount;

  //object for the result
  const purchaseResult = {
    bookTitle: bookTitle,
    unitPrice: unitPrice,
    isHardcover: isHardcover,
    discountAmount: discountAmount,
    priceAfterDiscount: priceAfterDiscount,
    taxAmount: taxAmount,
    priceAfterTax: priceAfterTax,
  };
  return purchaseResult;
}

const book = {
  title: 'Melodylan', //in string
  price: 100000, //in number
  cover: true, //in boolean
};

// to call the function
const result = bookPurchasing(book, 50, 10);

// to display the result
console.log('');
console.log('Book Purchase Details : ');
console.log('==========================');
console.log('');

console.log('Title : ' + result.bookTitle);
console.log('Is it a Hardcover (yes or no) :', result.isHardcover ? 'Yes' : 'No');
console.log('Unit Price : ' + result.unitPrice);

console.log('');
console.log('==========================');
console.log('');

console.log('Discount Amount : ' + result.discountAmount);
console.log('Price After Discount : ' + result.priceAfterDiscount);
console.log('Tax Amount : ' + result.taxAmount);
console.log('Price After Tax : ' + result.priceAfterTax);

console.log('');
console.log('==========================');
console.log('');
