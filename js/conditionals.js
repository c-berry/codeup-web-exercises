"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(colorChoice) {
//     if (colorChoice === "red") {
//         return "Red apple.";
//     } else if (colorChoice === "blue") {
//         return "Blue sea.";
//     } else if (colorChoice === "green") {
//         return "Green grass.";
//     } else if (colorChoice === "yellow") {
//         return "Yellow sun."
//     } else {
//         return "Wait, what?";
//     }
// }

// console.log(analyzeColor("purple"));
// console.log(analyzeColor("red"));
// console.log(analyzeColor("green"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)

// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// analyzeColor(randomColor);
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

// function analyzeColor(colorChoice) {
//     switch (colorChoice.toLowerCase().trim()) {
//         case "red":
//             return "Red, red apple.";
//         case "blue":
//             return "Blue, blue sea.";
//         case "green":
//             return "Green, green grass.";
//         case "yellow":
//             return "Yellow, yellow sun.";
//         default:
//             return "Well, ok then...";
//     }
// }
// console.log(analyzeColor("green"));
// console.log(analyzeColor("blue"));
// console.log(analyzeColor("purple"));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
//
// var favoriteColor = prompt("What is your favorite color?");
//
// alert(analyzeColor(favoriteColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function calculateTotal(luckyNumber, totalAmount) {
//     switch (luckyNumber) {
//         case 0:
//             return totalAmount;
//         case 1:
//             return (totalAmount) - (totalAmount * .1);
//         case 2:
//             return (totalAmount) - (totalAmount * .25);
//         case 3:
//             return (totalAmount) - (totalAmount * .35);
//         case 4:
//             return (totalAmount) - (totalAmount * .5);
//         case 5:
//             return (totalAmount) - (totalAmount);
//         default:
//             return "That is not a valid number.";
//     }
// }
// console.log(calculateTotal(1, 100));
// console.log(calculateTotal(2, 100));
// console.log(calculateTotal(5, 100));
// console.log(calculateTotal(0, 100));
// console.log(calculateTotal(6, 100));

// var luckyNumber = Number(prompt("What is your lucky number?"));
// var totalAmount = Number(prompt("What is your total amount?"));
// alert("Your new total is " + calculateTotal(luckyNumber, totalAmount) + "! Thanks for playing!");

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
//alert("Your lucky number is" + luckyNumber);
// var totalAmount = Number(prompt("What is your total bill?"))
// alert("Your total amount is $" + calculateTotal(luckyNumber, totalAmount) + ", thanks for playing!");

// console.log(calculateTotal(luckyNumber, totalAmount));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
//
// var enterNumber = confirm("Would you like to enter a number?");
//
// if (enterNumber) {
//     var number = Number(prompt("Please enter a number."));
//     isEvenOrOdd(number);
//     plus100(number);
//     positiveOrNegative(number);
// } else if(NaN) {
//     prompt("That is not a valid number.")
// } else {
//     (alert("Sorry to hear that!"));
// }
//
// function isEvenOrOdd(number) {
//     if(number % 2 === 0) {
//         return(alert("Number is even."));
//     } else if(number % 2 === 1) {
//         return(alert("Number is odd"));
//     } else {
//         return alert("That is not a valid number.");
//     }
// }
//
// function plus100(number) {
//     return(alert(number + 100));
// }
//
// function positiveOrNegative(number) {
//     if(number > 0) {
//         return alert("Number is positive.");
//     } else if(number < 0) {
//         return alert("Number is negative.");
//     } else {
//         return alert("That is not a valid number.");
//     }
// }

// var willEnterNumber = confirm('Do you want to enter a number?');
//
// if (willEnterNumber) {
//     // do the number things...
//
//     // get the user input and store in a variable called numInput
//     var numInput = Number(prompt('Please enter a number'));
//
//     // validate the user input (number)
//
//     // if valid number
//
//     if (typeof numInput === 'number' && !isNaN(numInput)) {
//         // alert even/odd message...
//         if (numInput % 2 === 0 ) {
//             alert('Number is even');
//         } else {
//             alert('Number is odd');
//         }
//
//         // alert num + 100 message
//         alert(numInput + 100);
//
//         // alert negative/positive message
//
//         if (numInput > 0) {
//             alert('Number is positive');
//         } else {
//             alert('Number is negative');
//         }
//     } else {
//         // else alert incorrect data type
//         alert('Incorrect data type!');
//     }
// }
//
