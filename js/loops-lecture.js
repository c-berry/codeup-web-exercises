//While Loops:

// var slices = 4;
// while(slices > 0) {
//     console.log("I'll have a slice!");
//         slices = slices - 1;
//         console.log("Now there's " + slices + " left.");
// }
// console.log("No more slices left...");

// var counter = 0;
// while(counter <= 100) {
//     console.log(counter);
//     ++ counter;
//     console.log(counter);
// }
// console.log("You have reached the 100!")
//
// while(counter >= 0) {
//     console.log(counter);
//     -- counter ;
// }
// console.log("Back where you started!");
//
// var counter = 1;
// var number = 5;
// while (counter <= 5) {
//     number = number * 2;
//     console.log(number);
//     counter = counter + 1;
// }

// var number = 5;
// while (number < 200) {
//     number = number * 2;
//     console.log(number);
// }

// var i = 0;
//
// while (i < 10) {
//     console.log('while loop iteration #' + i);
//     i++;
// }

//Do-While Loops:

var number = Math.floor(Math.random() * 6) +1;
        //Or: Math.ceil(Math.random() * 6);
var guess;
do {
    guess = parseInt(prompt("Enter a number between 1 and 6"));
} while (guess !== number);

alert("Your guess of " + guess + " matches the number " + number + "!");