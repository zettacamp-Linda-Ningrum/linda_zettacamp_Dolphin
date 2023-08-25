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
  const priceAfterTax = priceAfterDiscount - taxAmount;

  // to display the result
  console.log('');
  console.log('Book Purchase Details : ');
  console.log('==========================');
  console.log('');
  console.log('Title : ' + bookTitle);
  console.log('Is it a Hardcover (yes or no) :', isHardcover ? 'Yes' : 'No');
  console.log('Unit Price : ' + unitPrice);
  console.log('');
  console.log('==========================');
  console.log('');
  console.log('Discount Amount : ' + discountAmount);
  console.log('Price After Discount : ' + priceAfterDiscount);
  console.log('Tax Amount : ' + taxAmount);
  console.log('Price After Tax : ' + priceAfterTax);
  console.log('');
  console.log('==========================');
  console.log('');
}

const book = {
  title: 'Melodylan', //in string
  price: 100000, //in number
  cover: true, //in boolean
};

const discountPercentage = 50; // 50% discount
const taxPercentage = 5; // 5% tax

bookPurchasing(book, discountPercentage, taxPercentage);
