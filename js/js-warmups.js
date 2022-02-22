"use strict";
//write function takes input return the string "I
//have no idea what you just said."
// function noIdea(input) {
//     return "I have no idea what you just said.";
// }
// console.log(noIdea(5));
// console.log(noIdea("hello"));
// console.log(noIdea());
// function timesTwo(number) {
//     return number * 2;
// }
// console.log(timesTwo(2));
// console.log(timesTwo(100));

// //write function that takes in a number and return that number plus itself:
// function numberPlus(number) {
//     return number + number;
// }
//
// //write function that takes in two numbers, doubles each number and return the sum of both numbers doubled:
// function sumOfDoubles(num1, num2) {
//     return (num1 * 2) + (num2 * 2);
// }
// console.log(sumOfDoubles(2, 4));
// console.log(numberPlus(10));
//
// //write a function that takes in a number and squares it:
// function numberSquared(number) {
//     return number ** 2;
// }
// console.log(numberSquared(5));
// console.log(numberSquared(10));
//
// //write a function that takes in two strings and return the sum of their lengths:
// function stringLengthSum(string1, string2) {
//     return string1.length + string2.length;
// }
// console.log(stringLengthSum("hi", "hey"));
// console.log(stringLengthSum("hello", "hiya"));

//write function that takes in number and return "even" or "odd":
// function evenOrOdd(numb) {
//     if (numb % 2 === 0) {
//         return "Even!";
//     } else {
//         return "Odd!";
//     }
// }
// console.log(evenOrOdd(100));
// console.log(evenOrOdd(99));

// Write a function called removeBs that takes in an array of strings and returns an array of strings with all b’s removed from each string. Assume
// the array contains only string elements.
//     Examples...
// removeBs([‘abc’, ‘ab’, ‘cat’, ‘Bay’]) // returns [‘ac’, ‘a’, ‘cat’, ‘ay’]

// function removeBsFromString(str) {
//     return str.replaceAll("b", "").replaceAll("B", "");
// }
// function removeBs(array) {
//     var output = [];
//    array.forEach(function(str) {
//         output.push(removeBsFromString(str));
//     });
//     return output;
// }
//
// console.log(removeBs(["abc", "ab", "cat", "Bay"]));

// function removeBs(arr) {
//     return arr.join(",").replaceAll("b", "").replaceAll("B", "").split(",");
// }
//
// console.log(removeBs(["abc", "cat", "Bat"]));

// function removeBs(str){
//     var lowerCase = str.toLowerCase();
//     return lowerCase.indexOf("b");
// }
//
// console.log(removeBs(["abc" , "cat", "Big boy", ]));


// var namesString = "Joe,Bob,Sally";
//
// console.log(namesString);
// // Joe,Bob,Sally
//
// var namesArray = namesString.split("");
//
// console.log(namesArray);
// namesArray.reverse();
// console.log(namesArray);
// var namesBackToString = namesArray.join();
// console.log(namesBackToString);
// console.log(typeof namesArray);

// function stringBackwards(inp) {
//     var stringToArray = inp.split("");
//     var arrayReversed = stringToArray.reverse();
//     return arrayReversed.join("");
// }
//
// console.log(stringBackwards("hello"))

// var object = {
//     username: "jbomb",
//     email: "john@email.com",
//     isAdmin: false
// };
// function user(input) {
//     return "user " + object.username + " is " + ((object.isAdmin) ? "" : "not ") + "an admin and can be reached at " + object.email;
    //or:
    // if (user === object.isAdmin) {
    //     return "User " + object.username + " is an admin and can be reached at " + object.email;
    // } else {
    //     return "User " + object.username + " is not an admin and can be reached at " + object.email;
    // }
// }
// console.log(user(object));
//
// function isANumber(inp) {
//     return !isNaN(parseFloat(inp));
// }
// const areaOrPerimeter = function(l, w) {
//     if (!isANumber(l) || !isANumber(w)) {
//         return false;
//     } if (l == w) {
//         console.log(l * w);
//     } else {
//         console.log((l + w) * 2);
//     }
// }
// areaOrPerimeter(5, "5");

// function sumOfStrings(inp1, inp2) {
//     if (!isANumber(inp1) || !isANumber(inp2)) {
//         return false;
//     } else {
//         return (parseFloat(inp1) + parseFloat(inp2)).toString();
//     }
// }
//
// console.log(sumOfStrings("3", "2"));

// Write a function definition named onlyOddNumbers that takes in sequence of numbers and returns the odd numbers in an array.
// function onlyOddNumbers (arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             arr.splice(i, 1);
//         }
//     }
//     return arr;
// }
// console.log(onlyOddNumbers([1,2,3,4,5,6]))


//TODO
// function onlyOddNumbers(arr) {
//     arr.forEach(function(num) {
//         if (num % 2 === 0) {
//
//     });
// }

// for (var i = 0; i < books.length; i++) {
//     var bookMsg = "Book # " + (i + 1) + "\n" +
//         "Title " + books[i].title + "\n" +
//         "Author: " +  books[i].author.firstName + " " + books[i].author.lastName + "\n" + "---";
//     console.log(bookMsg);
// }

// books.forEach(function(book, index){
//     var bookMsg = "Book # " + (index + 1) + "\n" +
//         "Title " + book.title + "\n" +
//         "Author: " +  book.author.firstName + " " + book.author.lastName + "\n" + "---";
//     console.log(bookMsg);
// });

// Create a function, analyzeArray, that takes in an array and returns an object with information about the passed array. The function should return an object with properties containing information about the array, including the lengthOfArray, containsAllStrings, and the combineResult of adding all elements together.
// analyzeArray([1, 2, 3]) returns...
// {
//     lengthOfArray: 3,
//         containsAllStrings: false,
//     combineResult: 6
// }
// analyzeArray([‘a’, ‘b’, ‘c’]) returns...
// {
//     lengthOfArray: 3,
//         containsAllStrings: true,
//     combineResult: ‘abc’
// }
// analyzeArray([‘bob’, 100, null]) returns...
// {
//     lengthOfArray: 3,
//         containsAllStrings: true,
//     combineResult: ‘bob123null’
// }

//function that returns object:
// var array1 = [1,2,3,4,5];
// var array2 = ["a", "b", "c", "d"];
// var array3 = ["bob", 2, NaN];
//
// function analyzeArray(arr) {
//     var lengthOfArray = arr.length;
//     var containsAllStrings = arr.every(i => (typeof i === "string"));
//     var combineResult = arr.join("");
//     return {
//         lengthOfArray,
//         containsAllStrings,
//         combineResult
//     };
// }
// console.log(analyzeArray(array1));
// console.log(analyzeArray(array2));
// console.log(analyzeArray(array3));

// var testArray1 = [1, 2, 3];
// var testArray2 = ['a', 'b', 'c'];
// var testArray3 = ['bob', 100, null];
//
//another example:
// function analyzeArray(arr) {
//     var combine;
//     arr.forEach(function(element, index) {
//         if (index === 0) {
//             combine = element;
//         }
//         combine += element;
//     });
//     return {
//         lengthOfArray: arr.length,
//         containsAllStrings: arr.every(function(element) {
//             return typeof element === 'string';
//         }),
//         combineResult: combine
//     }
// }
//
// console.log(analyzeArray(testArray1));
// console.log(analyzeArray(testArray2));
// console.log(analyzeArray(testArray3));

// Create a function, createNames, that takes in an array of first names and an array of last names. The function should return an array of name objects with firstName and lastName properties with the input array values. Assume both input arrays are not empty, the same length and only contain string elements:
var firstName = ["Beaver","Squid","Cat","Dog"];
var lastName = ["Beaverson","Squdiddington","Meowson","Woofington"];

// function createNames(arr1,arr2) {
//     var output = [];
//     return output.push({
//         firstName,
//         lastName
//     });
// }
// console.log(createNames(firstName,lastName));

//SOLUTION:
// function createNames(arr1,arr2) {
//     var output = [];
//     for (var i = 0; i < arr1.length; i += 1) {
//         output.push({
//             firstName: arr1[i],
//             lastName: arr2[i]
//         });
//     }
//     return output;
// }
// console.log(createNames(firstName,lastName));

