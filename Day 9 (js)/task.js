//Declare two variable with name of your favourite books

let firstFavouriteBooks = 'Melodylan';
const secondFavouriteBooks = 'Invalidite';

console.log('');
console.log('====================');
console.log('TASK 1(a)');
console.log('====================');
console.log('');

//Task1a (update value of first with name your least favourite book)

firstFavouriteBooks = 'After Ever Happy';
console.log('>>' + ' ' + firstFavouriteBooks);
console.log('>>' + ' ' + secondFavouriteBooks);

//Task1b (define second variable as constant and try update the value)

/*console.log('');
console.log('====================');
console.log('TASK 1(b)');
console.log('====================');
console.log('');

secondFavouriteBooks = 'Paper Towns'; 

console.log(secondFavouriteBooks); */

console.log('');

console.log('====================');
console.log('TASK 2');
console.log('====================');
console.log('');

//Task2 (Concat value from variables task number 1 into new variable)

let result = firstFavouriteBooks + ' ' + '<<<<' + ' ' + secondFavouriteBooks;
console.log('Result :' + ' ' + result);

console.log('');
console.log('====================');
console.log('');

//Try declare more variable using other data type with dynamic value and primitive value

let profile = 'Linda'; //profile in string
console.log('Name : ' + ' ' + profile);

profile = 22; //profile in number
console.log('Age : ' + ' ' + profile);

profile = true; //profile in boolean
console.log('Are you female?' + ' ' + profile);

profile = 40.2; //profile in float
console.log('Weight : ' + ' ' + profile);

profile = 150.9; //profile in float
console.log('Height : ' + ' ' + profile);

console.log('');
console.log('====================');
console.log('');

//example of array

let animal = ['Cat', 'Dog', 'Fish'];

console.log(animal[2]);
console.log(animal[0]);
console.log(animal[1]);

console.log('');

//example of object

const favBooks = {
    title : "Melodylan",
    author : "Asri Aci",
    publish : 2017
};

console.log(favBooks.title + ' is one of my favourite book, which was written by ' + favBooks.author + ' and published in ' + favBooks.publish);

console.log('');
console.log('====================');
console.log('');

