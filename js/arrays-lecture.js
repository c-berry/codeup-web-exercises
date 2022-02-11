var groceryList = ["bread", "eggs", "butter", "milk"];
// console.log(groceryList[2]);
// console.log("I have to buy " + groceryList[0]);

//create array of 4 family, friends, or pets:
var family = ["mom", "dad", "grandma", "grandpa"];

//console.log the first and last item
// console.log(family[0], family[3]);

//console.log a string stating relationship to one of the array elements
// console.log(family[0] + " is very special to me.");

// for (var i = 0; i < groceryList.length;  i++) {
//     console.log("At index " + i);
//     console.log("I have to buy " + groceryList[i] + " and ...");
// }

// for (var i = 0; i < groceryList.length; i++) {
//     if (i !== groceryList.length - 1) {
//         console.log("I have to buy " + groceryList[i] + " and...");
//     } else {
//         console.log("I have to buy " + groceryList[i]);
//     }
// }

// Given an array
var cities = ["San Antonio", "Austin", "Dallas", "Houston"];
// First, create a for loop that generates the output:
//     ```
// San Antonio
// Austin
// Dallas
// Houston
// ```
// Then elaborate on the loop output to generate output like:
//     ```
// Student number 1 lives in San Antonio
// Student number 2 lives in Austin
// Student number 3 lives in Dallas
// Student number 4 lives in Houston
// ```
// Remember the key concept that you can use the iterator variable (i) to access array elements in a loop.

// for (var i = 0; i < cities.length; i++) {
//     console.log("Student #" + (i + 1) + " lives in " + cities[i]);
// }

var prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

//Second parameter always represents index
// prices.forEach(function(price, index) {
//     console.log("Item number " + (index + 1) + " costs $" + price);

    // groceryList.push("potatoes");
    // console.log(groceryList);
    // groceryList.pop();
    // console.log(groceryList);
    //
    // groceryList.unshift("sliced cheddar");
    // console.log(groceryList);
    // groceryList.shift();
    // console.log(groceryList);
    //
    // var indexOfButter = groceryList.indexOf("butter");
    // // console.log(groceryList.indexOf("butter"));
    // console.log("The buuter is at the index " + indexOfButter);
    //
    // groceryList[2] = "peanut butter";
    // console.log(groceryList);
    // groceryList[indexOfButter] = "butter";
    // console.log(groceryList);

// var firstHalfOfList = groceryList.slice(0, 2);
// console.log(firstHalfOfList);
// console.log(groceryList);
// var secondHalfOfList = groceryList.slice(2);
// console.log(secondHalfOfList);
// firstHalfOfList.push("peanut butter");
// console.log(firstHalfOfList);
// groceryList = firstHalfOfList.concat(secondHalfOfList);
// console.log(groceryList)
// console.log(firstHalfOfList)
// console.log(secondHalfOfList);

// groceryList.reverse();
// console.log(groceryList);
// groceryList.sort();
// console.log(groceryList);

var hamletQuote = "To be or not to be, that is the question";
var noCommasHamletQuote = hamletQuote.replace(",", "").toLowerCase();
//.replace will only replace the first instance
var hamletQuoteArray = noCommasHamletQuote.split(" ");
//.split is a string method

// console.log(hamletQuoteArray);
// hamletQuoteArray.reverse();
// console.log(hamletQuoteArray);
//
// var hamletQuoteBackwards = hamletQuoteArray.join(" ");
// console.log(hamletQuoteBackwards);
// var hamletWordList = hamletQuoteArray.join(", ");
// console.log(hamletWordList);
// var bringBackTheOriginal = hamletWordList.replaceAll(",", "");
// //.replaceAll will replace all instances
// console.log(bringBackTheOriginal);
// var theOriginalArray = bringBackTheOriginal.split(" ");
// theOriginalArray.reverse();
// var theOriginalQuote = theOriginalArray.join(" ");
// console.log(theOriginalQuote);
//

var todoList = ['Take out the trash', 'Clean the car', 'Pay the bills'];

console.log('My todo list:');
console.log(todoList);
// ['Take out the trash', 'Clean the car', 'Pay the bills']

console.log('Completing the last item: ' + todoList[todoList.length - 1]);

// let's remove the last item
var removedItem = todoList.pop();

// log what we did
console.log('Task complete: ' + removedItem);

console.log(todoList);
// ['Take out the trash', 'Clean the car']

console.log('Completing the first item: ' + todoList[0]);

// let's remove the first item
var doneItem = todoList.shift();

// log what we did
console.log('Task complete: ' + doneItem);

console.log(todoList);
// ['Clean the car']