(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    // var me = {
    //     firstName: "Chris",
    //     lastName: "Berry"
    // };
    // console.log(me);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    // me = {
    //     firstName: "Chris",
    //     lastName: "Berry",
    //     sayHello: function() {
    //         console.log("Hello from " + this.firstName + " " + this.lastName + "!");
    //     }
    // }
    // me.sayHello();


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amountInDollars: 180},
        {name: 'Ryan', amountInDollars: 250},
        {name: 'George', amountInDollars: 320}
    ];

//     for (var i = 0; i <  shoppers.length; i += 1) {
//         if (shoppers.amountInDollars >= 200) {
//             return console.log(shoppers.amountInDollars * .12);
//         }
// }

    // function discount(amount) {
    //     if (amount >= 200) {
    //         return shoppers.name + "You get a discount!";
    //     }
    // }
//     shoppers.forEach(function(item) {
//         if (item.amountInDollars >= 200) {
//             console.log((item.amountInDollars) - (item.amountInDollars * .12)) ;
//         }
// });

    shoppers.forEach(function(person) {
        if (person.amountInDollars >= 200) {
            console.log("Congrats, " + person.name + "! " + "Your original total was $" + person.amountInDollars + ". Your discount was $" + (person.amountInDollars * .12) + ". Your new total is $" + ((person.amountInDollars) - (person.amountInDollars * .12)) + "!") ;
        } else {
            console.log("Sorry, " + person.name + " You did not qualify for a discount. Your total is $" + person.amountInDollars + ".");
        }
    });

    //
    // function myLogic(person) {
    //         if (person.amountInDollars >= 200) {
    //             console.log("Congrats, " + person.name + "! " + "Your original total was $" + person.amountInDollars + ". Your discount was $" + (person.amountInDollars * .12) + ". Your new total is $" + ((person.amountInDollars) - (person.amountInDollars * .12)) + "!") ;
    //         }
    // }
    //
    //
    // shoppers.forEach(myLogic)

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        { title: "Book 1",
            author: { firstName: "Mr.", lastName: "Man" }
        },
        { title: "Book 2",
        author: { firstName: "Mrs.", lastName: "Woman" }
        },
        { title: "Book 3",
        author: { firstName: "Junior", lastName: "Jr." }
        },
        { title: "Book 4",
        author: { firstName: "John", lastName: "Johnson" }
        },
        {title: "Book 5",
        author: { firstName: "James", lastName: "Jameson" }
        }
    ];
    console.log(books)

    books.forEach(function(book) {
        console.log(book);
    });

//     for (var i = 0; i <  books.length; i += 1) {
//          console.log("Book #" + (i + 1));
//          console.log("Title: " + books[i].title);
//          console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastName);
// }

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */



    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();