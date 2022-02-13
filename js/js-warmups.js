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

function stringBackwards(inp) {
    var stringToArray = inp.split("");
    var arrayReversed = stringToArray.reverse();
    return arrayReversed.join("");
}

console.log(stringBackwards("hello"))
