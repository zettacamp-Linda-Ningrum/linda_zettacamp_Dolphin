// Update your book purchasing function to have parameter amount of stock & amount of purchased book.
// Then calculate total price & display the result.
// Note:
// The function must have at least:
// for loop iteration
// break when amount of book is already out of stock
// Display text if amount of book after purchasing can be purchased again or not

function bookPurchasing(bookDetails, discountPercentage, taxPercentage, stockAmount, purchaseAmount) {
  // declare variable for the book details
  const bookTitle = bookDetails.title; // in string
  const unitPrice = bookDetails.price; // in number
  const isHardcover = bookDetails.cover; // in boolean

  // declare variable for the discountPercentage, taxPercentage, stockAmount, purchaseAmount, total price
  let discountAmount;
  let priceAfterDiscount;
  let taxAmount;
  let priceAfterTax;
  let remainingStock = stockAmount;
  let totalPrice = 0;

  // calculate the discount amount, the price after discount, the tax amount, and the price after tax
  discountAmount = (discountPercentage / 100) * unitPrice;
  priceAfterDiscount = unitPrice - discountAmount;

  taxAmount = (taxPercentage / 100) * priceAfterDiscount;
  priceAfterTax = priceAfterDiscount + taxAmount;

  // create for... looping as much as purchaseAmount (number of books that want to buy)
  for (let i = 0; i < purchaseAmount; i++) {
    // to check if the book stock runs out
    if (remainingStock === 0) {
      console.log('The book is out of stock.');
      break; // to stop the loop process if the book out of stock
    }
    // calculate the total price according to the amount purchased and priceAfterTax
    totalPrice += priceAfterTax;
    remainingStock--; // to reduce the remaining book stock
  }

  // to display the result
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
  };

  return purchaseResult;
}

const book = {
  title: 'Melodylan 2 : Retrouvailles', //in string
  price: 50000, //in number
  cover: false, //in boolean
};

const stockAmount = 5;
const purchaseAmount = 2;

// to call the bookPurchasing function
const result = bookPurchasing(book, 50, 10, stockAmount, purchaseAmount);

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

console.log('');
console.log('=========================================');
console.log('');
