"use strict";

// alert("Hello, world!");

// var userChoice = confirm("Are you sure you want to leave the page?");
// console.log(userChoice);
//
// if(userChoice){
//     alert("Wise choice!");
// } else {
//     alert("Goodbye.");
// }

var currentSpeed = Number(prompt("How fast are you driving now?"));
console.log(currentSpeed);

var plannedSpeedIncrease = Number(prompt("How many more miles per hour do you want to go?"));

var newSpeed = currentSpeed + plannedSpeedIncrease;
console.log("Your planned speed is " + newSpeed);

// alternate way:
// console.log("Your planned speed is " + (currentSpeed + plannedSpeedIncrease)

var distanceLeft = Number(prompt("How many miles are you from your destination?"));

var timeAtCurrentSpeed = (distanceLeft / currentSpeed) * 60;
var timeAtPlannedSpeed = (distanceLeft / newSpeed) * 60;
var timeGained = (timeAtCurrentSpeed - timeAtPlannedSpeed);
alert("If you drive at " + newSpeed + " mph, you will arrive " + timeGained.toFixed(2) + " minutes sooner.");

