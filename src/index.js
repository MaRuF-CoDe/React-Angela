// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// function double(x) {
//   return x * 2;
// }
// const newNumbers = numbers.map(double);

// var newNumbers = [];
// numbers.forEach((x)=>newNumbers.push(x * 2));

// const newNumbers = numbers.map(x=>x * 2);

// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

// const newNumbers = numbers.filter(num=>num < 10);
// var newNumbers = [];
// numbers.forEach((num)=>{
//   if (num < 10) {
//     newNumbers.push(num);
//   }
// })

// console.log(newNumbers)

//Reduce - Accumulate a value by doing something to each item in an array.

// var newNumber = numbers.reduce((accumulator, currentNumber)=>accumulator + currentNumber)

// var newNumber = 0;
// numbers.forEach(currentNumber=>newNumber += currentNumber)

// console.log(newNumber);

//Find - find the first item that matches from an array.

// const newNumber = numbers.find((num)=>num > 10)
// console.log(newNumber);

//FindIndex - find the index of the first item that matches.

// const newNumber = numbers.findIndex((num)=>num > 10)
// console.log(newNumber);

//Challenge Solution
import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map((emojiEntry) =>
  emojiEntry.meaning.substring(0, 100)
);
console.log(newEmojipedia);
