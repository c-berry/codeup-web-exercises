//2.)
// var number = parseInt(prompt("Enter number"));
//
// for(let i = 1; i <= 10; i++) {
//     var result = i * number;
//     console.log(result);
// }
// function showMultiplicationTable(number) {
//     for (var i = 1; i <= 10; i++) {
//         console.log(number + " x " + i + " = " + (number * i));
//     }
// }
// showMultiplicationTable(7);
// 3.)
// for (var i = 1; i <= 10; i++) {
//     var numberRange = Math.floor(Math.random() * (200 - 20) + 20);
//     if (numberRange % 2 === 0) {
//         console.log(numberRange + " is even!");
//     } else {
//         console.log(numberRange + " is odd!");
//     }
// }
//or:
// Math.floor(Math.random() * (181) + 20);

//4.)
//Take number, concatenate numbers, must be numeric string, start with empty string, concatenate numeric string to empty string, store result of concat to stored variable//
// for (var number = 1; number < 10; number++) {
//     var count = 0;
//     var outputString = "";
//     while (count < number) {
//         outputString = outputString + number.toString();
//         count = count + 1;
//     }
//     console.log(outputString);
// }
// for (let i = 1; i < 10; i++) {
//     var j = i;
//     var rs = "";
//     while (j > 0) {
//         rs += i + "";
//         j--;
//     }
//     console.log(rs);

// }
// for (var i = 1; i < 10; i++) {
//     console.log(i);
// }

// for (var i = 1; i <= 9; ++i) {
//     for (var j = 1; j <= i; ++j) {
//         document.write(' ' + i + ' ');
//     }
//     document.write('<br>');
// }
//5.)for(var count = 100; count >= 5; count = count -5) {
//     console.log(count);
// }