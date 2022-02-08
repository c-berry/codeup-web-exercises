//break example:
// var string = "";
// for (var i = 0; i < 8; i++) {
//     var word = prompt("Let's make a sentence!");
//     if (word === "curses") {
//         console.log("This is a repectable program");
//         break;
//         //continue;
//     }
//     string = string + " " + word;
//     console.log(string);
// }

//prompt for odd number, if odd number break, if even keep prompting for a number
while (true) {
    var number = Number(prompt("Enter an odd number between 1 - 50."));
    if(number % 2 === 1 && number <= 50 && number >= 1) {
        break;
    }
}

console.log("Number to skip is " + number);

// for (var i = 1; i < 50; i+=2) {
//     if (i === number) {
//         console.log("Yikes! Skipping number " + number);
//         continue;
//     }
//     console.log(i);
// }
for (var i = 1; i < 50; i++) {
    if (i % 2 === 0) {
        continue;
    }
    if (i === number) {
        console.log("Yikes! Skipping number " + number);
        continue;
    }
    console.log(i);
}


//     for (i = 0; i < 50; i++) {
//         var number = Number(prompt("Enter an odd number between 1 - 50."));
//         if (i % 2 !== 0)
//             console.log("Here is an odd number " + i);
//         } else if (number % 2 === 0)



