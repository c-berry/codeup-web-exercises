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
// var firstName = ["Beaver","Squid","Cat","Dog"];
// var lastName = ["Beaverson","Squdiddington","Meowson","Woofington"];

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

// function remainder(inp1,inp2) {
//     if (inp1 > inp2) {
//         return inp1 % inp2;
//     }
//         return inp2 % inp1;
// }
// console.log(remainder(2,5));
// console.log(remainder("yes",1));
//
// //FOR IN LOOP EXAMPLE:
// function printer_error(str) {
//     var totalOverM = 0;
//     for (var i in str) {
//         if (str[i] > "m") {totalOverM++}
//     }
//     return "" + totalOverM + "/" + str.length;
// }
// console.log(printer_error("mmmmmmmzzzzzzzz"));

// "Your girlscout cookies are ready to ship. Your total comes to tree fiddy"
// "Your girlscout cookies are ready to ship. Your total comes to tree fiddy"
// "Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance."
// function isLochNessMonster(s) {
//     if (s.includes("tree fiddy")
//         || s.includes("three fifty") || s.includes(3.50)) {
//     return true;
//     } else {
//         return false;
//     }
// }

// function isLochNessMonster(s) {
//     return s.includes("tree fiddy") || s.includes("three fifty") || s.includes("3.50");
// }
//
// console.log(isLochNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy."));
// console.log(isLochNessMonster("you owe me about 3.50."));
// console.log(isLochNessMonster("you owe me three fifty."))
//

//CREATE FUNCTION THAT TAKES AN OBJECT WITH 2 PROPERTIES. parcelNumber, weight, AND RETURNS WEIGHT:
// var parcel = {
//     parcelNumber: 1,
//     weight: 20
// };
// function parcelWeight(obj) {
//     console.log(obj.weight);
// }
// parcelWeight(parcel); //OUTPUT: 20
// CREATE FUNCTION THAT ACCEPTS ARR WITH 2 OBJECTS AND RETURNS TOTAL WEIGHT OF BOTH OBJ:
// var parcels = [{
//     number:1, weight: 20}, {number: 2, weight: 25
// }];
// function totalWeight(arr) {
//     var total = 0;
//     for (var i = 0; i < arr.length; i++) {
//         total += arr[i].weight;
//     }
//     return total;
// }
// console.log(totalWeight((parcels)));
// function outputParcelInfo(parcelsArr) {
//     var outputDiv = document.getElementById("parcelInfo");
//     var total = 0;
//     var html = "<table><tr><th>Parcel Number</th></tr><th>Weight</th>";
//
//     outputDiv.innerHTML = html;
// }
// outputParcelInfo(parcels);

//DOM WARMUP:
//CREATE HEADING "GOOD MORNING
//CREATE BUTTON SAYS "PRESS IF AFTER 12PM"
//WHEN BUTTON IS PRESSED CHANGES "GM" TO "GA"
// var btn = document.querySelector("button");
//
// function goodMorning() {
//     document.querySelector("h1").innerText = "Good Afternoon!";
// }
// btn.addEventListener("click", goodMorning);

// Consider the following array of users:
    var users = [
        {
            username: 'fsmith',
            email: 'fsmith@email.com',
            numberOfLogins: 23
        },
        {
            username: 'ksmith',
            email: 'ksmith@email.com',
            numberOfLogins: 100
        },
        {
            username: 'lsmith',
            email: 'lsmith@email.com',
            numberOfLogins: 10
        }
    ];
// 1. Create a function, returnFirstUser, that takes in an array of user objects and returns the first user object:
// function returnFirstUser(users) {
//     return users[0];
// }
// console.log(returnFirstUser(users)); //WORKS
// 2. Create a function, returnTotalUserLogins, that takes in an array of user objects and returns the total count of logins
// for all users.
// returnTotalUserLogins(users) should return... 133
// function returnTotalUserLogins(users){
//     var total = 0;
//     for(var i = 0; i < users.length; i++){
//         total += users[i].numberOfLogins;
//     }
//     return total;
// }
// console.log(returnTotalUserLogins(users)); //WORKS
// 3. (optional bonus) create a function, returnMostFrequentUser, that takes in an array of user objects and returns the
// user object with the highest number of logins:
// function  returnMostFrequentUser(users) {
//         var total = Math.max.apply(Math, users.map(function(o) {
//         return o.numberOfLogins; }));
//         for (var i = 0; i < users.length; i++) {
//             if (users[i].numberOfLogins === total) {
//                 return users[i];
//             }
//         }
// }
// function returnMostFrequentUser(user) {
//     var mostFrequentUser = users[0];
//     for (var i = 0; i < user.length; i++) {
//         if (user[i].numberOfLogins > mostFrequentUser.numberOfLogins) {
//             mostFrequentUser = user;
//         }
//     }
//     return mostFrequentUser;
// }
// console.log(returnMostFrequentUser(users));
//
// function returnMostFrequentUser2(users) {
//     var mostFrequentUser = users[0];
//     users.forEach(function(user) {
//         // console.log(user.numberOfLogins, mostFrequentUser.numberOfLogins)
//         // console.log(user.numberOfLogins > mostFrequentUser.numberOfLogins);
//         if (user.numberOfLogins > mostFrequentUser.numberOfLogins) {
//             mostFrequentUser = user;
//         }
//     });
//     return mostFrequentUser;
// }
// console.log(returnMostFrequentUser2(users)); //WORKS
// function returnMostFrequentUser(users){
//     let mostFrequentUser = users.sort((a, b) => b.numberOfLogins - a.numberOfLogins);
//     return mostFrequentUser[0];
// }
// console.log(returnMostFrequentUser(users));

// var isColdOutside = true;
// var clothingToWear;
//
// if (isColdOutside) {
//     clothingToWear = 'sweater and a jacket';
// } else {
//     clothingToWear = 'shorts and a t-shirt';
// }
// CAN BE WRITTEN THIS WAY:
// var clothingToWear = isColdOutside ? 'sweater and a jacket' : 'shorts and a t-shirt';
//
// console.log(clothingToWear);

// Create a function, computeOperations, that takes in an array of operation objects and a starting integer value and returns an integer after all the calculations have completed, using the second integer argument as the first operand. Each operation object will have the following shape:
// Example 1...
// var operations1 = [
//     {
//         operation: 'add',
//         integer: 7
//     },
//     {
//         operation: 'add',
//         integer: 3
//     }
//     ];
//WORKS:
// function computeOperation(arr, int) {
//     var total = int; //MUST HAVE VARIABLE TO STORE INFO:
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i].operation === "add") {
//             total += arr[i].integer;
//         } if (arr[i].operation === "subtract") {
//             total -= arr[i].integer;
//         } if (arr[i].operation === "multiply") {
//             total *= arr[i].integer;
//         }
//     }
//     return total;
// }
//ALSO WORKS:
// function computeOperation(operators, startingInt) {
//     var total = startingInt;
//     operators.forEach(function (op){
//         if (op.operation === "add") {
//             total += op.integer;
//             // console.log("add int");
//         } if (op.operation === "subtract") {
//             total -= op.integer;
//             // console.log("sub int");
//         } if (op.operation === "multiply") {
//             total *= op.integer;
//             // console.log("* int");
//         }
//         // console.log(op.integer);
//         // console.log(op.operation);
//     });
//     return total;
//     }
// console.log(computeOperation(operations1,10));
// Example 2...
// var operations2 = [
//
//     {
//         operation: 'add',
//         integer: 7
//     },
//     {
//         operation: 'add',
//         integer: 3
//     },
//     {
//         operation: 'multiply',
//         integer: 3
//     },
// ];
// console.log(computeOperation(operations2, 10));
// Example 3...
// var operations3 = [
//
//     {
//         operation: 'subtract',
//         integer: 5
//     },
//     {
//         operation: 'multiply',
//         integer: -2
//     },
//     {
//         operation: 'add',
//         integer: 10
//     },
// ];
// console.log(computeOperation(operations3, 10));

// Create a function, addTwos, that takes in an array of integers and returns the sum of all 2s in the array. If no 2s are in the array, return 0.

// Examples:

// var nums1 = [1, 2, 3, 4, 5];
// var nums2 = [2, 2, 3, 4, 5];
// var nums3 = [10, 0, -5, 4, 5];
// var nums4 = [2, 2, -5, 2, 2];
// var nums5 = [2, 2, 2, 2, 2];

//  WORKS:
// function addTwos(arr, num) {
//     var total = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === num) {
//             total += arr[i];
//         }
//     }
//     return total;
// }
// console.log(addTwos(nums1, 2));
// console.log(addTwos(nums2, 2));
// console.log(addTwos(nums3,2));
// console.log(addTwos(nums4,2));
// console.log(addTwos(nums5,2));
// addTwos(nums1) // returns 2
// addTwos(nums2) // returns 4
// addTwos(nums3) // returns 0
// addTwos(nums4) // returns 8
// addTwos(nums5) // returns 10

// Write a function, returnStringObject, that takes in a string and returns an object with information about the string. The object should have properties for stringValue and stringArray.
//BOTH WORK THE SAME:
// function returnStringObject(str) {
//     var strValue = {};
//     strValue.stringValue = str;
//     strValue.stringArray = str.split("");
//     return strValue;
// }
// console.log(returnStringObject("hello"));
//
// function returnStringObject2(str) {
//     return {
//         stringValue: str,
//         stringArray: str.split("")
//     }
// }
// console.log(returnStringObject2("hello"));

// Write a function, countNegatives, and takes in an array of integers and returns the total number of negative numbers. 0 should be considered a non-negative number. If no negative numbers are present, return 0.
var nums1 = [-5, 10, 2, 5]; // countNegatives(nums1) returns 1
var nums2 = [1, -10, -2, 5]; // countNegatives(nums2) returns 2
var nums3 = [3, 10, 2, 5]; // countNegatives(nums3) returns 0
var nums4 = [-3, -10]; // countNegatives(nums4) returns 2
function countNegatives(arr){
    var sum = 0
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            sum += 1;
        }
    }
    return sum;
}
console.log(countNegatives(nums1));
console.log(countNegatives(nums2));
console.log(countNegatives(nums3));
console.log(countNegatives(nums4));
function countNegatives2(arr){
    var sum = 0;
    arr.forEach(function(num){
        if (num < 0){
            sum++
        }
    });
    return sum;
    }
console.log(countNegatives2(nums1));
console.log(countNegatives2(nums2));
console.log(countNegatives2(nums3));
console.log(countNegatives2(nums4));



