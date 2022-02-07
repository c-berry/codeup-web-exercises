//While:

// var number = 1;
// while(number < 65536) {
//     number = number * 2;
//     console.log(number);
// }

//Do-While:

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;

do {
    var conesSold = Math.floor(Math.random() * 5) + 1;
    allCones = allCones - conesSold;
    if (allCones > 0) {
        console.log("I have " + allCones + " left.");
        console.log(conesSold + " cones sold!");
    } else {
        console.log("I don't have enough cones to satisfy that order, please buy the remainder at a discount! :)");
    }
} while (allCones > 0);
console.log("You sold all the cones!");

// do {
//     var conesSold = Math.floor(Math.random() * 5) + 1;
//     if (conesSold > allCones) {
//         console.log("Can;t sell you " + conesSold + "I only have " + allCones);
//     } else {
//         console.log(conesSold + " cones sold." + "I have " + allCones + " left.");
//         allCones = allCones - conesSold;
//     }
// } while (allCones > 0);
// console.log("You sold all the cones!");




