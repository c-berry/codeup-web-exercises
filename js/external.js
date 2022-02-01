"use strict";

// console.log("Hello from external JavaScript!");
//
// alert("Welcome to my Website!");
//
// var favoriteColor = prompt("What is your favorite color?");
//
// alert("Great, my favorite color is " + favoriteColor + " too!");

// Exercise 3.1
// var theLittleMermaid = Number(prompt("How many days would you like to rent The Little Mermaid?"));
// var brotherBear = Number(prompt("How many days would you like to rent Brother Bear?"));
// var hercules = Number(prompt("How many days would you like to rent Hercules?"));
// var rentalPrice = 3;
// var totalRentalCost = (theLittleMermaid + brotherBear + hercules) * rentalPrice;
// alert("Your total rental cost is $" + totalRentalCost);

//Exercise 3.2
// var googlePay = Number(prompt("How much does Google pay you per hour?"));
// var hoursWorkedGoogle = Number(prompt("How many hours did you work for Google?"));
// var amazonPay = Number(prompt("How much does Amazon pay you per hour?"));
// var hoursWorkedAmazon = Number(prompt("How many hours did you work for Amazon?"));
// var facebookPay = Number(prompt("How much does Facebook pay you per hour?"));
// var hoursWorkedFacebook = Number(prompt("How many hours did work for Facebook?"));
// var totalGooglePay = googlePay * hoursWorkedGoogle;
// var totalAmazonPay = amazonPay * hoursWorkedAmazon;
// var totalFacebook = facebookPay * hoursWorkedFacebook;
// var totalFinalPay = totalGooglePay + totalFacebook + totalAmazonPay;
// alert("Your total pay is " + totalFinalPay);

//Exercise 3.3
// var classNotFull = confirm("Is the class full?");
// var noScheduleConflict = confirm("Do you have a schedule conflict?");
// var canEnroll = (classNotFull && noScheduleConflict);
// alert("It is " + canEnroll + " that you can enroll in this class.");

//Exercise 3.4
// var productAmount = Number(prompt("How many items are in your cart?"));
// var productFreshness = confirm("Is the product still fresh?");
// var premiumMember = confirm("Are you a premium member?");
// if((productAmount >= 2 || premiumMember) && productFreshness) {
//     alert("You are ready for checkout!")
// } else {
//     alert("Please review shopping cart.")
// }


//Exercise 4
var username = prompt("Enter a new username.");
if(username.length <= 20 && username === username.trim()) {
    alert("Username accepted!");
} else {
    alert("Username insufficient!");
}
var password = prompt("Enter a new password.");
if(password.length >= 5 && password === password.trim()) {
    alert("Password accepted!");
} else {
    alert("Password insufficient!");
}






