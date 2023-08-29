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

  // create an array to store payment details and other calculation process.
  let bunga = (2 / 100) * totalPrice;
  const termDue = (bunga + totalPrice) / creditTerm; // Menghitung jumlah yang harus dibayar untuk term ini.
  const paymentDetails = [];

  // create looping process as much as creditTerm times (number of credit terms).
  for (let term = 1; term <= creditTerm; term++) {
    // Calculate the due date for this term (starting from the next month)
    const dueDate = new Date(startingDate);
    dueDate.setMonth(startingDate.getMonth() + term);

    paymentDetails.push({ term, termDue, dueDate }); // Menambahkan detail pembayaran ke dalam array.
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

// book details
const book = {
  title: 'Melodylan 2 : Retrouvailles', // in string
  price: 50000, // in number
  cover: false, // in boolean
};

// to set the value of each var
const stockAmount = 5;
const purchaseAmount = 3;
const creditTerm = 12;

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

// calculate the total of the creditTerm
let totalCreditTermAmount = 0;
for (const payment of result.paymentDetails) {
  totalCreditTermAmount += payment.termDue;
}

// to display the total of the creditTerm
console.log('');
console.log('=========TOTAL CREDIT TERM AMOUNT=========');
console.log('');
console.log('Total Credit Term Amount (+ Bunga 2%) : ' + totalCreditTermAmount);
console.log('');

// to displays payment details for each term
console.log('==========PAYMENT TERM DETAILS============');
console.log('');
console.log('Credit Duration : ' + creditTerm);

// for (const payment of result.paymentDetails) {
//   console.log('Term ' + payment.term + ' : ' + 'Due ' + payment.termDue + '- Due Date : ' + payment.dueDate.toDateString());
// }

for (const payment of result.paymentDetails) {
  console.log(`Term ${payment.term}: Due ${payment.termDue} - Due Date: ${payment.dueDate.toDateString()}`);
}

console.log('');
console.log('==========================================');
console.log('');

//some exercise (implement the use of filter and map type of array)

console.log('Do searching for the credit terms information you needed...');
const arrayFilter = result.paymentDetails.filter((payment) => payment.term === 4);
console.log(arrayFilter);

console.log('');

const arrayMap = result.paymentDetails.map((payment) => payment.termDue * 2);
console.log(arrayMap);

console.log('');
