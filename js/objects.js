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

    // shoppers.forEach(function (person) {
    //     if (person.amountInDollars >= 200) {
    //         console.log("Congrats, " + person.name + "! " + "Your original total was $" + person.amountInDollars + ". Your discount was $" + (person.amountInDollars * .12) + ". Your new total is $" + ((person.amountInDollars) - (person.amountInDollars * .12)) + "!");
    //     } else {
    //         console.log("Sorry, " + person.name + " You did not qualify for a discount. Your total is $" + person.amountInDollars + ".");
    //     }
    // });

    // for (var i = 0; i < shoppers.length; i += 1) {
    //     var discount = (shoppers[i].amount > 200) ? shoppers[i].amount * .12 : 0;
    //     var message = shoppers[i].name +
    //     " purchased " + shoppers[i].amount +
    //     " received a discount of " + discount +
    //     " and will pay " + (shoppers[i].amount - discount);
    //     console.log(message);
    // }

    for (var i = 0; i < shoppers.length; i += 1) {
        var discount = (shoppers[i].amount > 200) ? shoppers[i].amount * .12 : 0;
        var message = shoppers[i].name +
            ' purchased ' + shoppers[i].amount +
            ' and received a discount of ' + discount +
            ' and will pay ' + (shoppers[i].amount - discount);
        console.log(message);
    }


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
        { title: "Bookmaster",
            author: { firstName: "Mr.", lastName: "Man" }
        },
        { title: "Booklicious",
        author: { firstName: "Mrs.", lastName: "Woman" }
        },
        { title: "Booktastic",
        author: { firstName: "Junior", lastName: "Jr." }
        },
        { title: "Bookalook",
        author: { firstName: "John", lastName: "Johnson" }
        },
        {title: "Bookenson",
        author: { firstName: "James", lastName: "Jameson" }
        }
    ];
    // console.log(books)

//     incomplete:
//     books.forEach(function(book) {
//         console.log("Book #:" + (book + 1));
//     });
//
//     This one works:
//     for (var i = 0; i <  books.length; i += 1) {
//          console.log("Book #" + (i + 1) + ":");
//          console.log("Title: " + books[i].title);
//          console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastName);
// }

    // for (var i = 0; i < books.length; i++) {
    //     var bookMsg = "Book # " + (i + 1) + "\n" +
    //         "Title " + books[i].title + "\n" +
    //         "Author: " +  books[i].author.firstName + " " + books[i].author.lastName + "\n" + "---";
    //     console.log(bookMsg);
    // }

    books.forEach(function(book, index){
        var bookMsg = "Book # " + (index + 1) + "\n" +
            "Title " + book.title + "\n" +
            "Author: " +  book.author.firstName + " " + book.author.lastName + "\n" + "---";
        console.log(bookMsg);
    });

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

    // var library = [{}];
    //
    // function addBook(title, author) {
    //     for (i = 0, i < library.length, i += i)
    //     library.title[i] = title;
    //     library.author[i] = author;
    // }
    // addBook("Books Are Cool", "Mary Anne" );
    // addBook("I Love Objects", "Web Dev");
    // addBook("Arrays are a Riot", "VLA");
    // addBook("Woooooooo", "Fun Person");
    // addBook("I'm Tired", "Coder");





//     console.log(library);
})();